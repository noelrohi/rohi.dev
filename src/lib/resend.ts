import { env } from "@/env";
import { Resend } from "resend";

const resend = new Resend(env.RESEND_API_KEY);

export async function sendEmail(content: string) {
  const { data, error } = await resend.emails.send({
    from: "Guestbook <guestbook@rohi.dev>",
    to: ["n@rohi.dev"],
    subject: "Guestbook Entry",
    text: content,
  });
  if (error) console.error(error);
  console.log("Email sent.", data);
}
