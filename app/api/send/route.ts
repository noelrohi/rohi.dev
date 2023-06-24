import { NextResponse } from "next/server"
import { Ratelimit } from "@upstash/ratelimit"
import { kv } from "@vercel/kv"
import { Resend } from "resend"

import { myEnv, relatime } from "@/lib/utils"
import { emailBodySchema } from "@/lib/validations"
import { EmailTemplate } from "@/components/Email/template"

const resend = new Resend(myEnv.RESEND_API_KEY)
const ratelimit = new Ratelimit({
  redis: kv,
  limiter: Ratelimit.fixedWindow(2, `${60 * 60 * 24}s`),
})

// export const runtime = "edge"

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for")
    const { success, remaining, reset } = await ratelimit.limit(
      ip ?? "anonymous"
    )
    if (!success)
      return NextResponse.json(
        {
          message: "Ratelimited! Try again " + (await relatime.date(reset)),
        },
        { status: 429 }
      )
    const d = emailBodySchema.parse(await req.json())
    const data = await resend.emails.send({
      from: `${d.messageBy} <n@rohi.dev>`,
      to: "n@rohi.dev",
      subject: "Portfolio Mail",
      react: EmailTemplate({ ...d }),
    })

    return NextResponse.json({ message: "Email Sent!", data, remaining })
  } catch (error) {
    return NextResponse.json({ error })
  }
}
