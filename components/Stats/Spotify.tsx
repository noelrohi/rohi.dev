"use client"

import useSWR from "swr"
import { LastFmUserResponse, Track } from "@/lib/types"
import { fetcher, relatime } from "@/lib/utils"
import { ItemCard, SkeletonCard } from "@/components/Stats"
import { Icons } from "@/components/icons"

export function SpotifyPlayCount() {
  const { data, error } = useSWR<{
    tracks: Track[]
    plays: LastFmUserResponse
  }>("/api/scrobble", fetcher, { refreshInterval: 15 * 1000 })
  if (error) return <div>failed to load</div>
  if (!data) return <SkeletonCard/>
  const { plays, tracks } = data
  return (
    <>
      {/* {JSON.stringify(data)} */}
      <ItemCard link={plays.url} title="Spotify Plays">
        <div className="flex justify-between gap-2">
          <div>{plays.playcount}</div>
          <div className="flex items-center gap-2">
            {tracks[0]["@attr"]?.nowplaying ? (
              <Icons.disc className="h-4 w-4 animate-spin" />
            ) : (
              <>{relatime.unix(tracks[0].date.uts)}</>
            )}
            <p className="text-sm">
              {tracks[0].name}
              {" - "}
              {tracks[0].artist["#text"]}
            </p>
          </div>
        </div>
      </ItemCard>
    </>
  )
}
