import { env } from "@/env.mjs";
import { Resend } from "resend";

const resend = new Resend(env.RESEND_API_KEY);

export async function sendEmail(content: string) {
  const { data, error } = await resend.emails.send({
    from: "Guestbook <no-reply@rohi.dev>",
    to: ["n@resend.dev"],
    subject: "Hello world",
    html: content,
  });
  if (error) console.error(error);
  console.log("Email sent.", data);
}
