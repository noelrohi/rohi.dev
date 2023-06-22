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
  if (!data) return <SkeletonCard />
  const { plays, tracks } = data
  return (
    <>
      <ItemCard link={plays.url} title="Spotify Plays">
        <div className="flex justify-between gap-4">
          <div>{plays.playcount}</div>
          <div className="flex justify-end gap-1 text-sm">
            <p className="flex items-center gap-2 text-right">
              {tracks[0].name}
              {" - "}
              {tracks[0].artist["#text"]}
              {!tracks[0]["@attr"]?.nowplaying ? (
                <span className="text-muted-foreground ">
                  {" - "}
                  {relatime.unix(tracks[0].date.uts)}
                </span>
              ) : (
                <span>
                  <Icons.disc className="h-4 w-4 animate-spin" />
                </span>
              )}
            </p>
          </div>
        </div>
      </ItemCard>
    </>
  )
}
