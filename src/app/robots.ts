import { projectURL } from "@/lib/consts";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: `${projectURL}/sitemap.xml`,
    host: projectURL,
  };
}
