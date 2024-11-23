import { getBlogPosts } from "@/lib/blog";
import { formatDistanceToNowStrict } from "date-fns";
import Link from "next/link";
import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my thoughts on software development and more.",
};

export default function Page() {
  return (
    <section className="space-y-4">
      <BlogPosts />
    </section>
  );
}

async function BlogPosts() {
  "use cache";

  const allBlogs = getBlogPosts();
  return (
    <>
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
              <p
                className="text-foreground tracking-tight"
                style={{
                  viewTransitionName: `blog-${post.slug}`,
                }}
              >
                {post.metadata.title}
              </p>
              <p className="text-muted-foreground">
                {formatDistanceToNowStrict(post.metadata.publishedAt, {
                  addSuffix: true,
                })}
              </p>
            </div>
          </Link>
        ))}
    </>
  );
}
