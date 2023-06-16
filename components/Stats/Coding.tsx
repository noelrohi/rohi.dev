import { me } from "@/config/site"
import { ItemCard } from "."
import { wakatime } from "@/lib/api"

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