import { NextResponse } from "next/server"

import { me } from "@/config/site"
import { LanyardResponse } from "@/lib/types"

export async function GET() {
  const url = `https://api.lanyard.rest/v1/users/${me.discordID}`
  const res = await fetch(url)
  const jso = await res.json()
  const data = jso.data as LanyardResponse
  return NextResponse.json(data)
}
