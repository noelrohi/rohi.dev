import { Ratelimit } from "@upstash/ratelimit"
import { kv } from "@vercel/kv"
import { NextResponse } from "next/server"
import { Resend } from "resend"
import { z } from "zod"

import { EmailTemplate } from "@/components/email"
import { myEnv, relatime } from "@/lib/utils"

const resend = new Resend(myEnv.RESEND_API_KEY)
const ratelimit = new Ratelimit({
  redis: kv,
  limiter: Ratelimit.fixedWindow(2, `${60 * 60 * 24}s`),
})

const sendBodySchema = z.object({
  firstName: z.string(),
  message: z.string().min(10),
})

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for")
    const { success, remaining, reset } = await ratelimit.limit(
      ip ?? "anonymous"
    )
    if (!success)
      return NextResponse.json({
        message: "Ratelimited! Try again  " + await relatime.date(reset),
      })
    const { firstName, message } = sendBodySchema.parse(await req.json())
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "n@rohi.dev",
      subject: "Hello world",
      react: EmailTemplate({
        firstName: firstName,
        message: message,
      }),
    })

    return NextResponse.json({ message: "Email Sent!", data, remaining })
  } catch (error) {
    return NextResponse.json({ error })
  }
}
