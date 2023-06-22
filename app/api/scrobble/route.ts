import { NextResponse } from "next/server"

import { spotify } from "@/lib/api"
import { myEnv } from "@/lib/utils"

export const runtime = "edge"

export async function GET(request: Request) {
  // const requestHeaders = new Headers(request.headers)
  // const auth = requestHeaders.get("Authorization")
  // if (auth !== myEnv.LAST_FM_API_KEY) return new Response("Unauthorized", { status: 401 })
  const tracks = await spotify.recentTracks()
  const plays = await spotify.totalPlays()
  return NextResponse.json({tracks, plays})
}
