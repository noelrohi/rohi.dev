import { NextResponse } from "next/server"

import { me } from "@/config/site"

export const runtime = "nodejs"

export default async function GET() {
  const url = `https://api.lanyard.rest/v1/users/${me.discordID}`
  const res = await fetch(url)
  const jso = await res.json()
  const data = jso.data
  return NextResponse.json(data)
}