import { NextResponse } from "next/server"

import { RecentlyWatchedResponse } from "@/lib/types"
import { myEnv } from "@/lib/utils"

export const runtime = "edge"

export async function GET() {
  const res = await fetch(
    "https://api.myanimelist.net/v2/users/gneiru/animelist?sort=list_updated_at&fields=list_status&limit=1",
    {
      headers: {
        "X-MAL-CLIENT-ID": myEnv.MAL_CLIENT_ID,
      }
    }
  )
  const data: RecentlyWatchedResponse = await res.json()
  const nodeandlist = data.data[0]

  return NextResponse.json({ nodeandlist })
}
