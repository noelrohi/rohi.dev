import Link from "next/link"
import { ReactNode } from "react"

import { me } from "@/config/site"
import { wakatime } from "@/lib/api"
import { getAge } from "@/lib/utils"

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import AgeCard from "./Age"
import { AnimeCard, MangaCard } from "./Animanga"

export async function Stats() {
  const { data: wakatimeData } = await wakatime()
  const data = [
    {
      title: "Coding Hours",
      link: `https://wakatime.com/@${me.tag}`,
      value: wakatimeData?.total_seconds
        ? `${Math.round(wakatimeData.total_seconds / 60 / 60)} hrs`
        : undefined,
    },
  ]
  return (
    <>
      <AgeCard age={getAge()} />
      {data.map((item, idx) => {
        return <ItemCard {...item} key={idx} />
      })}
      <AnimeCard />
      <MangaCard />
    </>
  )
}

export function ItemCard({
  link,
  title,
  value,
}: {
  link: string
  title: string
  value: ReactNode
}) {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>{value}</CardContent>
      </Card>
    </Link>
  )
}
