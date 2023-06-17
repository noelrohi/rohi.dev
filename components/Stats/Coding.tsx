import { me } from "@/config/site"
import { wakatime } from "@/lib/api"

import { ItemCard } from "."

export async function CodingCard() {
  const { data: wakatimeData } = await wakatime()
  const { total_seconds: seconds } = wakatimeData
  return (
    <ItemCard
      link={`https://wakatime.com/@${me.tag}`}
      title="Coding Hours"
      value={`${Math.round(seconds / 60 / 60)} hrs`}
    />
  )
}
