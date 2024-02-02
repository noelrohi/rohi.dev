import { getBlogPosts } from "@/lib/blog";
import { links, projectURL } from "@/lib/consts";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allBlogs = getBlogPosts();
  const routes = links.map(({ path }) => ({
    url: `${projectURL}${path}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));
  const blogPostRoutes = allBlogs.map((blog) => ({
    url: `${projectURL}/blog/${blog.slug}`,
    lastModified: new Date(blog.metadata.publishedAt)
      .toISOString()
      .split("T")[0],
  }));
  return [...blogPostRoutes, ...routes];
}
