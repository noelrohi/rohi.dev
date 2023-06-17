import { NextResponse } from "next/server"

import { me } from "@/config/site"

export const runtime = "edge"

export async function GET() {
  const url = `https://api.lanyard.rest/v1/users/${me.discordID}`
  const res = await fetch(url)
  const data = await res.json()

  return NextResponse.json({ data })
}
