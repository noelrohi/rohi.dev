import { Skeleton } from "@/components/ui/skeleton";
import { getKdramaActivity, recentActivity, recentTrack } from "@/lib/helpers";
import { dayjs } from "@/lib/utils";
import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";
import type { Metadata } from "next/types";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Activity",
};

export default function Page() {
  return (
    <section className="space-y-4">
      <div className="font-mono text-muted-foreground text-sm">
        view my activities
      </div>
      <ul className="my-6 ml-4 list-disc *:mt-2">
        <li>
          <Suspense fallback={<ActivityFallback />}>
            <Spotify />
          </Suspense>
        </li>
        <li>
          <Suspense fallback={<ActivityFallback />}>
            Read <Animanga type="MANGA" />
          </Suspense>
        </li>
        <li>
          <Suspense fallback={<ActivityFallback />}>
            Watched <Animanga type="ANIME" />
          </Suspense>
        </li>
        <li>
          <Suspense fallback={<ActivityFallback />}>
            <Kdrama />
          </Suspense>
        </li>
      </ul>
    </section>
  );
}

function ActivityFallback() {
  return (
    <div className="space-y-1">
      <Skeleton className="h-[1.5rem] w-full lg:w-1/2" />
      <Skeleton className="h-[17px] w-[4.5rem]" />
    </div>
  );
}

async function Animanga({ type }: { type: "ANIME" | "MANGA" }) {
  noStore();
  const data = await recentActivity(type);
  const updatedAt = data?.updatedAt;
  const title =
    (data?.media.title.english ?? data?.media.title.userPreferred) || "~";
  return (
    <>
      <Link
        href={`https://anilist.co/${type.toLowerCase()}/${data?.media.id}`}
        className="underline decoration-gray-400 underline-offset-4"
        target="_blank"
      >
        {title}
      </Link>
      {type === "ANIME" ? " episode " : " chapter "}
      {data?.progress ?? "?"}
      <div>
        {updatedAt ? (
          <span className="text-muted-foreground text-sm">
            {dayjs.unix(updatedAt).fromNow()}
          </span>
        ) : null}
      </div>
    </>
  );
}

async function Kdrama() {
  noStore();
  const activities = await getKdramaActivity();
  if (!activities || !activities[0]) return null;
  const { date, episode, status, title, url } = activities[0];
  return (
    <>
      <div className="w-[24rem]">
        <span className="capitalize">
          {status === "watching" ? "Watched" : status}{" "}
        </span>
        <Link
          href={url}
          className="underline decoration-gray-400 underline-offset-4"
          target="_blank"
        >
          {title}
        </Link>{" "}
        episode {episode}
      </div>
      <div>
        {date ? (
          <span className="text-muted-foreground text-sm">
            {dayjs(date).fromNow()}
          </span>
        ) : null}
      </div>
    </>
  );
}

async function Spotify() {
  noStore();
  const data = await recentTrack();
  const song = data?.name;
  const artist = data?.artist["#text"];
  const isListening = data?.["@attr"]?.nowplaying;
  const updatedAt = data?.date?.uts;
  return (
    <>
      {isListening ? "Listening to " : "Listened to "}
      <Link
        href={data?.url ?? "#"}
        className="underline decoration-gray-400 underline-offset-4"
        target="_blank"
      >
        {song}
      </Link>{" "}
      by {artist}{" "}
      <div className="text-muted-foreground text-sm">
        {!isListening && !!updatedAt && dayjs.unix(updatedAt).fromNow()}
        {isListening && "right now"}
      </div>
    </>
  );
}
