import { me } from "@/config/site"
import { wakatime } from "@/lib/api"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

import { ItemCard } from "."

interface Languages {
  name: string
  total_seconds: number
  percent: number
  digital: string
  decimal: string
  text: string
  hours: number
  minutes: number
}

export async function CodingCard() {
  const { data: wakatimeData } = await wakatime.alltime()
  const data = await wakatime.duration()
  const languages: Languages[] = data.data.languages
  const { total_seconds: seconds } = wakatimeData
  return (
    <HoverCard>
      <HoverCardTrigger>
        <ItemCard
          link={`https://wakatime.com/@${me.tag}`}
          title="Coding Hours"
          value={`${Math.round(seconds / 60 / 60)} hrs`}
        />
      </HoverCardTrigger>
      <HoverCardContent>
        <ul>
          {languages.slice(0, 5).map((language) => (
            <li key={language.name}>
              {language.name} - {language.percent}%
            </li>
          ))}
        </ul>
      </HoverCardContent>
    </HoverCard>
  )
}
