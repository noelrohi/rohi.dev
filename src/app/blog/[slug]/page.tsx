import { CustomMDX } from "@/components/mdx";
import { getBlogPosts } from "@/lib/blog";
import { projectURL } from "@/lib/consts";
import { formatDate, formatDistanceToNowStrict } from "date-fns";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata(
  props: PageProps,
): Promise<Metadata | undefined> {
  const params = await props.params;
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
    : `https://og.rohi.dev/blog?title=${title}&date=${formatDate(
        publishedTime,
        "MMM dd, yyyy",
      )}`;

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

export default async function Blog(props: PageProps) {
  const params = await props.params;
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
              name: "Noel Rohi",
            },
          }),
        }}
      />
      <h1
        className="title max-w-[650px] font-medium text-2xl tracking-tighter"
        style={{
          viewTransitionName: `blog-${post.slug}`,
        }}
      >
        {post.metadata.title}
      </h1>
      <div className="mt-2 mb-8 flex max-w-[650px] text-sm">
        <p className="text-neutral-600 text-sm dark:text-neutral-400">
          {formatDate(post.metadata.publishedAt, "MMM dd, yyyy")} (
          {formatDistanceToNowStrict(post.metadata.publishedAt, {
            addSuffix: true,
          })}
          )
        </p>
      </div>
      <article className="prose prose-quoteless prose-neutral dark:prose-invert">
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}
