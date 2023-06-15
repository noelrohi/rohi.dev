import { Metadata } from "next"

import { AnimeCard, MangaCard } from "@/components/Stats/Animanga"
import { Stats } from "@/components/Stats"
import { DiscordCard } from "@/components/Discord"
import Heading from "@/components/Heading"

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
      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 ">
        <DiscordCard />
        <Stats/>
      </div>
    </section>
  )
}
