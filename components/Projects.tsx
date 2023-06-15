import Link from "next/link"

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { me, siteConfig } from "@/config/site"
import { getPinnedRepos } from "@/lib/api"

import Heading from "./Heading"
import { Icons } from "./icons"

export const Projects = async () => {
  const datas = await getPinnedRepos()

  return (
    <section>
      <Heading>
        <Link href={siteConfig.links.github}>Projects</Link>
      </Heading>

      <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 ">
        {datas.map(({ link, description, website, repo }, idx) => (
          <Link key={idx} href={website ?? link}>
            <ProjectCard description={description} repo={repo} />
          </Link>
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
  repo,
}: {
  description: string
  repo: string
}) {
  return (
    <Card className="h-32 w-[350px]">
      <CardHeader>
        <CardTitle>
          <div className="flex justify-between">
            <p>{repo}</p>
            <Icons.external className="opacity-40"/>
          </div>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}
