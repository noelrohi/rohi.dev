import { me } from "@/config/site";
import { wakatime } from "@/lib/api";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ItemCard } from "@/app/dashboard/stats";

interface Languages {
  name: string;
  total_seconds: number;
  percent: number;
  digital: string;
  decimal: string;
  text: string;
  hours: number;
  minutes: number;
}

export async function CodingCard() {
  const data = await wakatime.stats();
  const languages: Languages[] = data.data.languages;
  const total_seconds = data.data.categories[0].total_seconds;
  const startDate = data.data.human_readable_range;
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <ItemCard link={`https://wakatime.com/@${me.tag}`} title="Coding Hours">
          {`${Math.round(total_seconds / 60 / 60)} hrs `} {startDate}
        </ItemCard>
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
  );
}
