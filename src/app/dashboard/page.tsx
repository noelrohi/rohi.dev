import { Metadata } from "next";
import { Suspense } from "react";

import {
  AnimeCard,
  AgeCard,
  CodingCard,
  DiscordCard,
  MangaCard,
  SpotifyPlay,
} from "./stats";
import Heading from "@/components/heading";
import { SkeletonCard } from "@/components/skeleton-card";
import ReloadButton from "./reload";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Stuffs related to Noel Rohi Garcia",
};

export const runtime = "edge";
// export const dynamic = "force-dynamic";

export default function DashboardPage() {
  return (
    <>
      <div className="flex flex-col max-w-fit gap-2">
        <div className="flex space-x-4 items-center justify-center">
          <Heading>Dashboard</Heading>
          <ReloadButton />
        </div>
        <p className="text-muted-foreground">Random stuffs </p>
      </div>
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Suspense fallback={<SkeletonCard count={6} />}>
          <Stats />
        </Suspense>
      </div>
    </>
  );
}

function Stats() {
  return (
    <>
      <DiscordCard />
      <AgeCard />
      <SpotifyPlay />
      <CodingCard />
      <AnimeCard />
      <MangaCard />
    </>
  );
}
