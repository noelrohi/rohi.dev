import { links, projectURL } from "@/lib/consts";

export default async function sitemap() {
  const routes = links.map(({ path }) => ({
    url: `${projectURL}${path}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));
  return routes;
}
