import { Suspense } from "react"
import Link from "next/link"

import { me } from "@/config/site"
import { wakatime } from "@/lib/api"

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import AgeCard from "./Age"

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
      <AgeCard />
      {data.map((item) => {
        const { link, title, value } = item
        return <ItemCard link={link} title={title} value={value} />
      })}
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
  value: string | undefined | number
}) {
  return (
    <Link href={link}>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>{value}</CardContent>
      </Card>
    </Link>
  )
}
