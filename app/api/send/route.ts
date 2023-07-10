import { NextResponse } from "next/server"
import { Ratelimit } from "@upstash/ratelimit"
import { kv } from "@vercel/kv"
import { Resend } from "resend"

import { myEnv } from "@/lib/utils"
import { emailBodySchema } from "@/lib/validations"
import { EmailTemplate } from "@/components/Email/template"

const resend = new Resend(myEnv.RESEND_API_KEY)
const ratelimit = new Ratelimit({
  redis: kv,
  limiter: Ratelimit.fixedWindow(2, "1 d"),
})

// export const runtime = "edge"

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for")
    const { success, limit, remaining, reset } = await ratelimit.limit(
      ip ?? "anonymous"
    )
    if (!success) {
      return new Response("You have reached your request limit for the day.", {
        status: 429,
        headers: {
          "X-RateLimit-Limit": limit.toString(),
          "X-RateLimit-Remaining": remaining.toString(),
          "X-RateLimit-Reset": reset.toString(),
        },
      })
    }
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
