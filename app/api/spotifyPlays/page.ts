import { NextResponse } from "next/server"

import { me } from "@/config/site"
import { myEnv } from "@/lib/utils"
import { LastFmUserResponse } from "@/lib/types"

export const runtime = "nodejs"

export default async function GET() {
  const url = `http://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=${me.tag}&api_key=${myEnv.LAST_FM_API_KEY}&format=json`
  const res = await fetch(url);
  const data = await res.json();
  const user : LastFmUserResponse = data.user;

  return NextResponse.json(user)
}
