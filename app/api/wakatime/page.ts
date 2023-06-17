import { NextResponse } from "next/server"

import { myEnv } from "@/lib/utils"
import { WakatimeResponse } from "@/lib/types"

export const runtime = "edge"

export async function GET() {
  const url = `https://wakatime.com/api/v1/users/current/all_time_since_today`
  const res = await fetch(url, {
    headers: {
      Authorization: `Basic ${Buffer.from(myEnv.WAKATIME_API_KEY).toString(
        "base64"
      )}`,
    },
  })
  const data : WakatimeResponse = await res.json()

  return NextResponse.json({ data })
}
