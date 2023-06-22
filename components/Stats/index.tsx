import { ReactNode } from "react"
import Link from "next/link"

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function ItemCard({
  link,
  title,
  children,
  newtab,
}: {
  link: string
  title: string
  children: ReactNode
  newtab?: boolean
}) {
  return (
    <Link
      href={link}
      target={newtab == false ? "" : "_blank"}
      rel="noopener noreferrer"
    >
      <Card className="w-[350px] hover:border-2 hover:border-black dark:hover:border-white">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </Link>
  )
}

export function SkeletonCard({ count }: { count?: number }) {
  const skeletons = Array.from({ length: count || 1 }).map((_, i) => (
    <Card
      className="w-[350px] hover:border-2 hover:border-black dark:hover:border-white"
      key={i}
    >
      <CardHeader>
        <CardTitle>
          <Skeleton className="h-4 w-[100px]" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Skeleton className="h-4 w-[250px]" />
      </CardContent>
    </Card>
  ))
  return <>{skeletons}</>
}
