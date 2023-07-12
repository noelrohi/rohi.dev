import { type MetadataRoute } from "next"

import { siteConfig } from "@/config/site"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  const routes = siteConfig.mainNav
    .map((x) =>
      ({
        url: `${siteConfig.url}${x.href}`,
        lastModified: new Date().toISOString(),
      })
    )
    .flat()

  return [...routes]
}