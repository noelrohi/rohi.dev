import { NextResponse } from "next/server"

import { me } from "@/config/site"
import { LastFmUserResponse } from "@/lib/types"
import { myEnv } from "@/lib/utils"

export async function GET() {
  const url = `http://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=${me.tag}&api_key=${myEnv.LAST_FM_API_KEY}&format=json`
  const res = await fetch(url)
  const data = await res.json()
  const user: LastFmUserResponse = data.user

  return NextResponse.json(user)
}
