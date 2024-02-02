import { getBlogPosts } from "@/lib/blog";
import { projectURL } from "@/lib/consts";

function convertToContentEncoded(input: string): string {
  // Replace newline characters with HTML line breaks
  const contentEncoded = input.replace(/\n/g, "<br/>");

  // Enclose the content in CDATA section
  const wrappedContent = `<![CDATA[${contentEncoded}]]>`;

  // Construct the complete content:encoded element
  return wrappedContent;
}

function generateRSS() {
  const allBlogs = getBlogPosts();

  const items: string[] = allBlogs.map(
    (blog) => `<item>
                <title>${blog.metadata.title}</title>
                <link>${projectURL}/blog/${blog.slug}/</link>
                <guid isPermaLink="true">${projectURL}/blog/${blog.slug}/</guid>
                <description>${blog.metadata.summary}</description>
                <pubDate>${new Date(blog.metadata.publishedAt).toUTCString()}</pubDate>
                <content:encoded>${convertToContentEncoded(blog.content)}</content:encoded>
              </item>`,
  );
  console.log(items);

  return `<rss xmlns:content="http://purl.org/rss/1.0/modules/content/" version="2.0">
            <channel>
              <title>rohi's blog</title>
              <description>Articles related to tech and programming.</description>
              <link>${projectURL}</link>
              ${items.join("")}
            </channel>
          </rss>`;
}

export function GET() {
  const rss = generateRSS();
  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
