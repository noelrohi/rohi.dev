import { projectURL } from "@/lib/constants";
import { allPosts } from "content-collections";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const postRoutes = allPosts.map((post) => ({
    url: `${projectURL}/${post._meta.path}`,
    lastModified: new Date(post.time).toISOString().split("T")[0],
  }));
  const routes = ["/"].map((url) => ({ url, lastModified: new Date() }));
  return [...routes, ...postRoutes];
}
