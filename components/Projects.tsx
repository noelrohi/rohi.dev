import Link from "next/link"
import { Circle, Star } from "lucide-react"

import { me, siteConfig } from "@/config/site"
import { pinnedRepos } from "@/lib/api"
import { PinnedRepo } from "@/lib/types"
import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import Heading from "./Heading"
import { Icons } from "./icons"
import { Badge } from "./ui/badge"

export const Projects = async () => {
  const { data: datas } = await pinnedRepos(me.tag)

  return (
    <section>
      <Heading>
        <Link href={siteConfig.links.github}>Projects</Link>
      </Heading>

      <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 ">
        {/* {JSON.stringify(datas)} */}
        {datas.map((data, idx) => (
          <ProjectCard key={idx} {...data} />
        ))}
        <Link
          href={`https://github.com/${me.tag}?tab=repositories`}
          className="underline"
        >
          See more ...
        </Link>
      </div>
    </section>
  )
}

function ProjectCard({
  description,
  title,
  language,
  stars,
  link,
  website,
  forks,
  topics,
  languageColor,
}: PinnedRepo) {
  return (
    <Card className=" w-[350px]">
      <CardHeader>
        <CardTitle>
          <Link
            href={website || link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex justify-between">
              <p>{title}</p>
              <Icons.external className="h-4 w-4 opacity-40" />
            </div>
          </Link>
        </CardTitle>
        <CardDescription className="line-clamp-2 flex h-10 items-center">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent>
        {topics.map((topic, idx) => (
          <Badge variant={"secondary"} key={idx}>
            {topic}
          </Badge>
        ))}
      </CardContent>
      <CardFooter className="flex justify-between text-sm text-muted-foreground">
        <div className="flex items-center">
          <span
            className="mr-2 h-4 w-4 rounded-full"
            style={{ backgroundColor: languageColor }}
          ></span>
          {language}
        </div>
        <div className="flex justify-end gap-4">
          <span className="flex items-center space-x-2">
            <Star className="h-4 w-4" />
            <p>{stars}</p>
          </span>
          <span className="flex items-center space-x-2">
            <Icons.fork />
            <p>{forks}</p>
          </span>
        </div>
      </CardFooter>
    </Card>
  )
}
