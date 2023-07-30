import { type MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = ["", ...siteConfig.mainNav.map((nav) => nav.href)].map(
    (route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: new Date().toISOString().split("T")[0],
    })
  );

  return routes;
}
