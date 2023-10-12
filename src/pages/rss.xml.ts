import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { site } from "../consts";
import type { APIContext } from "astro";

const { title, description } = site;

export async function GET(context: APIContext) {
  const posts = await getCollection("blog");
  return rss({
    title,
    description,
    site: String(context.site),
    items: posts
      .filter((post) => !post.data.isDraft)
      ?.map((post) => ({
        pubDate: post.data.date,
        title: post.data.title,
        description: post.data.description,
        link: `/blog/${post.slug}/`,
		
      })),
  });
}
