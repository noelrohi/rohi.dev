import { NextResponse } from "next/server"

import { pinnedRepos } from "@/lib/api"

export const runtime = "edge"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const username = searchParams.get("username")
  if (!username)
    return NextResponse.json({ error: "username is required" }, { status: 400 })
  const data = await pinnedRepos(username)
  return NextResponse.json(data)
}
