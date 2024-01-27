import { projectURL } from "@/lib/consts";

export default function robots() {
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
