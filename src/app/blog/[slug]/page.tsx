import { CustomMDX } from "@/components/mdx";
import { db } from "@/db";
import { views } from "@/db/schema/main";
import { getBlogPosts } from "@/lib/blog";
import { projectURL } from "@/lib/consts";
import { dayjs } from "@/lib/utils";
import { sql } from "drizzle-orm";
import type { Metadata } from "next";
import { unstable_noStore as noStore } from "next/cache";
import { notFound } from "next/navigation";
import { Suspense, cache } from "react";
import { getNumberOfViews } from "../queries";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata | undefined> {
  const post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  const ogImage = image
    ? `${projectURL}${image}`
    : `https://og.rohi.dev/blog?title=${title}&date=${dayjs(
        publishedTime,
      ).format("MMM DD, YYYY")}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${projectURL}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

function formatDate(dateToFormat: string) {
  noStore();
  const date = !dateToFormat.includes("T")
    ? `${dateToFormat}T00:00:00`
    : dateToFormat;
  const targetDate = new Date(date);

  const formattedDate = dayjs(dateToFormat).fromNow();

  const fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return `${fullDate} (${formattedDate})`;
}

export default function Blog({ params }: PageProps) {
  const post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${projectURL}${post.metadata.image}`
              : `${projectURL}/og?title=${post.metadata.title}`,
            url: `${projectURL}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: "Lee Robinson",
            },
          }),
        }}
      />
      <h1 className="title max-w-[650px] font-medium text-2xl tracking-tighter">
        {post.metadata.title}
      </h1>
      <div className="mt-2 mb-8 flex max-w-[650px] items-center justify-between text-sm">
        <Suspense fallback={<p className="h-5" />}>
          <p className="text-neutral-600 text-sm dark:text-neutral-400">
            {formatDate(post.metadata.publishedAt)}
          </p>
        </Suspense>
        <Suspense fallback={<p className="h-5" />}>
          <Views slug={post.slug} />
        </Suspense>
      </div>
      <article className="prose prose-quoteless prose-neutral dark:prose-invert">
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}

const incrementViews = cache(async (slug: string) => {
  return await db
    .insert(views)
    .values({ slug, count: 1 })
    .onDuplicateKeyUpdate({ set: { count: sql<number>`${views.count} + 1` } });
});

async function Views({ slug }: { slug: string }) {
  const numberOfViews = await getNumberOfViews(slug);
  await incrementViews(slug);
  return (
    <p className="text-muted-foreground">
      {numberOfViews.toLocaleString()} view{numberOfViews > 1 && "s"}
    </p>
  );
}
