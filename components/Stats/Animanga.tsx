import Image from "next/image"
import Link from "next/link"

import { me } from "@/config/site"
import { recentlyRead, recentlyWatched } from "@/lib/api"
import { cn, getRelativeTime } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const MediaCard = ({
  imageSrc,
  number,
  link,
  mediaType,
  title,
  updated_at,
}: {
  imageSrc: string
  number: number
  link: string
  mediaType: 'Chapter' | 'Episode'
  title: string
  updated_at: string
}) => (
  <Link href={link} target="_blank" rel="noopener noreferrer">
    <div>
      <Card className={cn("w-[350px] hover:border-2 hover:border-black dark:hover:border-white", imageSrc && "flex justify-between")}>
        <div>
          <CardHeader>
            <CardTitle className="h-10">{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm ">
              {`${mediaType} ${number}`}
              <div className="opacity-50">
                {"Updated "} {getRelativeTime(updated_at)}
              </div>
            </div>
          </CardContent>
        </div>
        <div className="p-4">
          <Image src={imageSrc} alt={title} width={64} height={64} className="rounded-lg object-contain"/>
        </div>
      </Card>
    </div>
  </Link>
)

export async function AnimeCard() {
  const { node, list_status } = await recentlyWatched()
  const link = `https://myanimelist.net/history/${me.tag}/anime`

  return (
    <MediaCard
      title={node.title}
      number={list_status.num_episodes_watched}
      imageSrc={node.main_picture.medium}
      updated_at={list_status.updated_at}
      link={link}
      mediaType="Episode"
    />
  )
}

export async function MangaCard() {
  const { node, list_status } = await recentlyRead()
  const link = `https://myanimelist.net/history/${me.tag}/manga`

  return (
    <MediaCard
      title={node.title}
      number={list_status.num_chapters_read}
      imageSrc={node.main_picture.medium}
      updated_at={list_status.updated_at}
      link={link}
      mediaType="Chapter"
    />
  )
}
