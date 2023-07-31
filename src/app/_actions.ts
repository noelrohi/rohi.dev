"use server";

import { env } from "@/env.mjs";
import { auth } from "@/lib/auth";
import { queryBuilder } from "@/lib/planetscale";
import { contact } from "@/lib/validations";
import { Ratelimit } from "@upstash/ratelimit";
import { kv } from "@vercel/kv";
import { headers } from "next/headers";
import { type Session } from "next-auth";
import { revalidatePath, revalidateTag } from "next/cache";
import {
  CreateEmailOptions,
  CreateEmailResponse,
} from "resend/build/src/emails/interfaces";
import { z } from "zod";
import { relatime } from "@/lib/utils";

async function sendMail(options: CreateEmailOptions) {
  const data = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(options),
  });

  const response = await data.json();
  return response as CreateEmailResponse;
}

async function getSession(): Promise<Session> {
  const session = await auth();
  if (!session || !session.user) {
    throw new Error("Unauthorized");
  }

  return session;
}

export async function saveGuestbookEntry(entry: string) {
  const session = await getSession();
  const email = session.user?.email as string;
  const created_by = session.user?.name as string;
  const body = entry.slice(0, 500);
  const ratelimit = new Ratelimit({
    redis: kv,
    limiter: Ratelimit.fixedWindow(2, "1 m"),
  });
  const { success, reset } = await ratelimit.limit(email);
  if (!success) {
    return { ok: false, data: `Try again in ${relatime.date(reset)}` };
  }
  await queryBuilder
    .insertInto("guestbook")
    .values({ email, body, created_by })
    .execute();

  revalidatePath("/guestbook");

  if (process.env.NODE_ENV === "production") {
    const res = await sendMail({
      from: "guestbook@rohi.dev",
      to: "n@rohi.dev",
      subject: "New Guestbook Entry",
      html: `<p>Email: ${email}</p><p>Message: ${body}</p>`,
    });

    console.log("Email sent", res.id);
  }
  return { ok: true, data: "Thank you for your message!" };
}

export async function contactMail({
  message,
  messageBy,
  emailAddress,
}: z.infer<typeof contact>) {
  const ip = headers().get("x-forwarded-for");
  const ratelimit = new Ratelimit({
    redis: kv,
    limiter: Ratelimit.fixedWindow(2, "1 d"),
  });
  const { success } = await ratelimit.limit(ip ?? "anonymous");
  if (!success) {
    return "You have reached your request limit for the day.";
  }
  const response = await sendMail({
    from: "contact@rohi.dev",
    to: "n@rohi.dev",
    subject: `${messageBy} has contacted you!`,
    html: `<p>Email: ${emailAddress}</p><p>Message: ${message}</p>`,
  });
  return response;
}

export async function revalidate(toRevalidate: string) {
  toRevalidate.startsWith("/")
    ? revalidatePath(toRevalidate)
    : revalidateTag(toRevalidate);
}
