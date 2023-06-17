import Link from "next/link"
import { ReactNode } from "react"

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

export function ItemCard({
  link,
  title,
  value,
  newtab,
}: {
  link: string
  title: string
  value: ReactNode,
  newtab?: boolean
}) {
  return (
    <Link href={link} target={newtab == false ? "" : "_blank"} rel="noopener noreferrer">
      <Card className="w-[350px] hover:border-2 hover:border-black dark:hover:border-white">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>{value}</CardContent>
      </Card>
    </Link>
  )
}