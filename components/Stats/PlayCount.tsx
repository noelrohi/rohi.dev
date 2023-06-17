import { spotifyPlays } from "@/lib/api"

import { ItemCard } from "."

export async function SpotifyPlayCount() {
  const {url, playcount} = await spotifyPlays()
  return (
    <>
      {/* {JSON.stringify(data)} */}
      <ItemCard link={url} title="Spotify Plays" value={playcount} />
    </>
  )
}
