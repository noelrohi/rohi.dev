"use client"

import clsx from "clsx"
import useSWR from "swr"

import { LastFmUserResponse, Track } from "@/lib/types"
import { cn, fetcher, relatime } from "@/lib/utils"
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
  const song = tracks[0].name
  const artist = tracks[0].artist["#text"]
  const isListening = tracks[0]["@attr"]?.nowplaying

  return (
    <>
      <ItemCard link={plays.url} title="Spotify Plays">
        <div
          className={cn(
            "flex items-center gap-4",
            isListening ? "justify-evenly" : "justify-between"
          )}
        >
          <div>{plays.playcount}</div>
          {isListening ? (
            <Listening song={song} artist={artist} />
          ) : (
            <>
              <p>
                Listened to {song} by {artist}{" "}
                <span className="text-muted-foreground">
                  {relatime.unix(tracks[0].date.uts)}
                </span>
              </p>
            </>
          )}
        </div>
      </ItemCard>
    </>
  )
}

function Listening({ song, artist }: { song: string; artist: string }) {
  const stringlength = song.length + artist.length
  return (
    <>
      <p
        className={cn("text-sm", stringlength > 20 && "text-xs")}
      >{`${song} by ${artist}`}</p>
      <span>
        <Icons.disc className="h-6 w-6 animate-spin" />
      </span>
    </>
  )
}
