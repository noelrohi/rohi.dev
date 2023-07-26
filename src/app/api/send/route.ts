import { Ratelimit } from "@upstash/ratelimit";
import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";
import { Resend } from "resend";

import { EmailTemplate } from "@/components/email/template";
import { me } from "@/config/site";
import { env } from "@/env.mjs";
import { emailBodySchema } from "@/lib/validations";

const resend = new Resend(env.RESEND_API_KEY);
const ratelimit = new Ratelimit({
  redis: kv,
  limiter: Ratelimit.fixedWindow(2, "1 d"),
});

// export const runtime = "edge"

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for");
    const { success, limit, remaining, reset } = await ratelimit.limit(
      ip ?? "anonymous"
    );
    if (!success) {
      return new Response("You have reached your request limit for the day.", {
        status: 429,
        headers: {
          "X-RateLimit-Limit": limit.toString(),
          "X-RateLimit-Remaining": remaining.toString(),
          "X-RateLimit-Reset": reset.toString(),
        },
      });
    }
    const d = emailBodySchema.parse(await req.json());
    const data = await resend.emails.send({
      from: `${d.messageBy} <${me.email}>`,
      to: me.email,
      subject: "Portfolio Mail",
      react: EmailTemplate({ ...d }),
    });

    return NextResponse.json({ message: "Email Sent!", data, remaining });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
