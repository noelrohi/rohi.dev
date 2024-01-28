import { getBlogPosts } from "@/lib/blog";
import Link from "next/link";
import { Metadata } from "next/types";
import { getNumberOfViews } from "./queries";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my thoughts on software development and more.",
};

export default function Page() {
  const allBlogs = getBlogPosts();
  return (
    <section className="space-y-4">
      <div className="font-mono text-muted-foreground text-sm">
        read my blog
      </div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="mb-4 flex flex-col space-y-1"
            href={`/blog/${post.slug}`}
          >
            <div className="flex w-full flex-col">
              <p className="text-foreground tracking-tight">
                {post.metadata.title}
              </p>
              <Views slug={post.slug} />
            </div>
          </Link>
        ))}
    </section>
  );
}

async function Views({ slug }: { slug: string }) {
  const views = await getNumberOfViews(slug);

  return (
    <p className="text-muted-foreground">
      {views.toLocaleString()} view{views > 1 && "s"}
    </p>
  );
}
