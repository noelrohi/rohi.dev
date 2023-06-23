import { NextResponse } from "next/server"
import { headers } from 'next/headers'
import { spotify } from "@/lib/api"
import { me } from "@/config/site"

export const runtime = "edge"

export async function GET() {
  const headersList = headers()
  const host = headersList.get('host')
  if(host !== 'localhost:3000' || me.host) return new Response("Unauthorized", { status: 401 })
  const tracks = await spotify.recentTracks()
  const plays = await spotify.totalPlays()
  return NextResponse.json({ tracks, plays })
}
