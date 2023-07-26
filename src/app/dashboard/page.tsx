import { Suspense } from "react";
import { Metadata } from "next";

import { getAge } from "@/lib/utils";
import Heading from "@/components/heading";
import { SkeletonCard } from "@/components/stats";
import { DiscordCard } from "@/components/stats/discord";
import AgeCard from "@/components/stats/age";
import { SpotifyPlayCount } from "@/components/stats/spotify";
import { CodingCard } from "@/components/stats/coding";
import { AnimeCard, MangaCard } from "@/components/stats/animanga";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Stuffs related to Noel Rohi Garcia",
};

export const runtime = "edge";
export const dynamic = "force-dynamic";

export default function DashboardPage() {
  return (
    <section className="container pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <Heading>Dashboard</Heading>
        <p className="max-w-[700px] text-muted-foreground">
          Random stuffs about me
        </p>
      </div>
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Suspense fallback={<SkeletonCard count={6} />}>
          <Stats />
        </Suspense>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <>
      <DiscordCard />
      <AgeCard />
      <SpotifyPlayCount />
      <CodingCard />
      <AnimeCard />
      <MangaCard />
    </>
  );
}
