import { NextResponse } from "next/server"

import { RecentlyReadResponse, RecentlyWatchedResponse } from "@/lib/types"
import { myEnv } from "@/lib/utils"

export const runtime = "edge"

export default async function GET() {
  const res = await fetch(
    "https://api.myanimelist.net/v2/users/gneiru/mangalist?sort=list_updated_at&fields=list_status&limit=1",
    {
      headers: {
        "X-MAL-CLIENT-ID": myEnv.MAL_CLIENT_ID,
      }
    }
  )
  const data: RecentlyReadResponse = await res.json()
  const nodeandlist =  data.data[0]

  return NextResponse.json(nodeandlist)
}
