import { NextResponse } from "next/server"

import { me } from "@/config/site"

export async function GET() {
  const url = `https://gh-pinned-repos.egoist.dev/?username=${me.tag}`
  const res = await fetch(url)
  const data = await res.json()

  return NextResponse.json(data)
}
