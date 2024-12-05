import {
  ImageCarousel,
  ImageCarouselProps,
} from "@/components/shells/image-carousel";
import { cn } from "@/lib/utils";
import { useMDXComponent } from "@content-collections/mdx/react";
import React, { PropsWithChildren } from "react";
import { ImageShell, ImageShellProps } from "./shells/image-shell";
import { VideoViewer, VideoViewerProps } from "./shells/video-viewer";
import { highlight } from "sugar-high";

const components = {
  Code: ({ children }: { children: string }) => {
    const codeHTML = highlight(children);
    return <code dangerouslySetInnerHTML={{ __html: codeHTML }} />;
  },
  ImageCarousel: ({ imageUrls }: ImageCarouselProps) => {
    return <ImageCarousel imageUrls={imageUrls} />;
  },
  ImageShell: ({ imageUrl }: ImageShellProps) => {
    return <ImageShell imageUrl={imageUrl} />;
  },
  VideoViewer: ({ videoSrc }: VideoViewerProps) => {
    return <VideoViewer videoSrc={videoSrc} />;
  },
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      id={props.children?.toString().toLowerCase().replace(/\s+/g, "-")}
      className={cn(
        "peer font-medium lg:leading-[1.1] mt-8 mb-4 text-2xl",
        className,
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      id={props.children?.toString().toLowerCase().replace(/\s+/g, "-")}
      className={cn(
        "peer [&+h1]:mt-6 [&+h3]:mt-6 font-medium lg:leading-[1.1] mt-6 mb-4 text-xl",
        className,
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      id={props.children?.toString().toLowerCase().replace(/\s+/g, "-")}
      className={cn(
        "peer [&+h1]:mt-6 [&+h2]:mt-6 mt-6 mb-3 scroll-m-20 font-medium font-sans lg:leading-[1.1] group text-lg",
        className,
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn(
        "prose prose-neutral dark:prose-invert text-[15px] leading-7 [&:not(:first-child)]:mt-4 mb-4",
        className,
      )}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className={cn(
        "prose prose-neutral dark:prose-invert text-[15px] mt-4 ml-6 mb-6 list-disc space-y-2",
        className,
      )}
      {...props}
    />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className={cn("mt-4 ml-6 mb-6 list-decimal space-y-2", className)}
      {...props}
    />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => {
    return <li className={cn("mt-2 list-item", className)} {...props} />;
  },
  a: ({
    className,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      target="_blank"
      className={cn(
        "prose prose-neutral dark:prose-invert text-[15px]  border-b border-dashed border-neutral-700 no-underline pb-[1.4px] hover:border-solid",
        className,
      )}
      {...props}
    />
  ),
  blockquote: ({
    className,
    ...props
  }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className={cn(
        "mt-6 border-gray-4 border-l-2 pl-6 text-muted italic",
        className,
      )}
      {...props}
    />
  ),
};

export function MDX({ code }: { code: string }) {
  const Component = useMDXComponent(code);

  return (
    <article>
      <Component components={components} />
    </article>
  );
}
