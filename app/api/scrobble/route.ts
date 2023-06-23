import { NextRequest, NextResponse } from "next/server"
import { spotify } from "@/lib/api"
import { revalidateTag } from "next/cache"
import { myEnv } from "@/lib/utils"

export const runtime = "edge"

export async function GET(req: NextRequest) {
  const host = req.headers.get('host')
  if(host !== myEnv.NEXT_PUBLIC_APP_URL.split('//')[1]) return new Response("Unauthorized", { status: 401 })
  const tracks = await spotify.recentTracks()
  const plays = await spotify.totalPlays()
  revalidateTag('mal')
  return NextResponse.json({ tracks, plays })
}
