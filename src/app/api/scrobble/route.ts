import { NextRequest, NextResponse } from "next/server";

import { spotify } from "@/lib/api";

// import { revalidateTag } from "next/cache"

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const ref = req.headers.get("referer");
  if (!ref?.endsWith("/dashboard"))
    return new Response("Unauthorized", { status: 401 });
  const tracks = await spotify.recentTracks();
  const plays = await spotify.totalPlays();
  // revalidateTag('mal')
  return NextResponse.json({ tracks, plays });
}
