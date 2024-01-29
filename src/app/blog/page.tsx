import { getBlogPosts } from "@/lib/blog";
import Link from "next/link";
import { Metadata } from "next/types";
import { Suspense } from "react";
import { getNumberOfViews } from "./queries";
import { unstable_noStore as noStore } from "next/cache";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my thoughts on software development and more.",
};

export default function Page() {
  return (
    <section className="space-y-4">
      <div className="font-mono text-muted-foreground text-sm">
        read my blog
      </div>
      <BlogPosts />
    </section>
  );
}

function BlogPosts() {
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
              <p className="text-foreground tracking-tight">
                {post.metadata.title}
              </p>
              <p className="text-muted-foreground">
                <Suspense fallback="- views">
                  <Views slug={post.slug} />
                </Suspense>
              </p>
            </div>
          </Link>
        ))}
    </>
  );
}

async function Views({ slug }: { slug: string }) {
  noStore();
  const views = await getNumberOfViews(slug);
  return (
    <>
      {views.toLocaleString()} view{views > 1 && "s"}
    </>
  );
}
