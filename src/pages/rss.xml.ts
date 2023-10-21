import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";

const parser = new MarkdownIt();

export async function GET(context: APIContext) {
  const posts = await getCollection("blog");
  return rss({
    title: "rohi's blog",
    description: "Articles related to tech and programming.",
    site: String(context.site),
    stylesheet: "/rss/styles.xsl",
    items: posts
      .filter((post) => !post.data.isDraft)
      ?.map((post) => ({
        pubDate: post.data.date,
        title: post.data.title,
        description: post.data.description,
        link: `/blog/${post.slug}/`,
        content: sanitizeHtml(parser.render(post.body)),
      })),
  });
}
