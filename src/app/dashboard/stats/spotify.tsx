import { ItemCard } from "@/app/dashboard/stats";
import { Icons } from "@/components/icons";
import { spotify } from "@/lib/api";
import { cn, fromNow } from "@/lib/utils";

export async function SpotifyPlay() {
  const tracks = await spotify.recentTracks();
  const plays = await spotify.totalPlays();
  const song = tracks[0].name;
  const artist = tracks[0].artist["#text"];
  const isListening = tracks[0]["@attr"]?.nowplaying;

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
                  {fromNow(tracks[0].date.uts)}
                </span>
              </p>
            </>
          )}
        </div>
      </ItemCard>
    </>
  );
}

function Listening({ song, artist }: { song: string; artist: string }) {
  const stringlength = song.length + artist.length;
  return (
    <>
      <p
        className={cn("text-sm", stringlength > 20 && "text-xs")}
      >{`${song} by ${artist}`}</p>
      <span>
        <Icons.disc className="h-6 w-6 animate-spin" />
      </span>
    </>
  );
}
