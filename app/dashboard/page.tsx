import { Metadata } from "next"

import { DiscordCard } from "@/components/Discord"
import Heading from "@/components/Heading"
import { AnimeCard, MangaCard } from "@/components/Stats/Animanga"
import AgeCard from "@/components/Stats/Age"
import { getAge } from "@/lib/utils"
import { CodingCard } from "@/components/Stats/Coding"
import { SpotifyPlayCount } from "@/components/Stats/PlayCount"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Stuffs related to Noel Rohi Garcia",
}

export default function DashboardPage() {
  return (
    <section className="container pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <Heading>Dashboard</Heading>
        <p className="max-w-[700px] text-muted-foreground">
          Random stuffs about me
        </p>
      </div>
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2">
        <DiscordCard />
        <AgeCard age={getAge()} />
        <SpotifyPlayCount />
        <CodingCard />
        <AnimeCard />
        <MangaCard />
      </div>
    </section>
  )
}
