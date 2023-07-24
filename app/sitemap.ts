import { type MetadataRoute } from "next"

import { siteConfig } from "@/config/site"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = siteConfig.mainNav.map(({href}) => ({
    url: `${siteConfig.url}${href}`,
    lastModified: new Date().toISOString(),
  }))

  return [...routes]
}