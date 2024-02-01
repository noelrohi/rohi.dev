import { env } from "@/env.mjs";

export async function sendEmail(content: string) {
  const data = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "guestbook@rohi.dev",
      to: "n@rohi.dev",
      subject: "New Guestbook Entry",
      html: content,
    }),
  });

  const response = await data.json();
  console.log("Email sent", response);
}
