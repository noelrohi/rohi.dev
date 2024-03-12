import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";
import Link from "next/link";
import React from "react";
import { highlight } from "sugar-high";
import { ReactTweet } from "./tweet";

function Table({
  data,
}: { data: { headers: Array<string>; rows: Array<Array<string>> } }) {
  const headers = data.headers.map((header, index) => (
    <th
      key={index}
      className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right"
    >
      {header}
    </th>
  ));
  const rows = data.rows.map((row, index) => (
    <tr key={index} className="m-0 border-t p-0 even:bg-muted">
      {row.map((cell, cellIndex) => (
        <td
          key={cellIndex}
          className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"
        >
          {cell}
        </td>
      ))}
    </tr>
  ));

  return (
    <div className="my-6 w-full overflow-y-auto">
      <table className="w-full">
        <thead>
          <tr className="m-0 border-t p-0 even:bg-muted">{headers}</tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

function CustomLink({
  children,
  href,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"a">) {
  if (href?.startsWith("/")) {
    return (
      <Link
        {...props}
        href={href}
        className="font-medium underline decoration-muted-foreground underline-offset-4"
      >
        {children}
      </Link>
    );
  }

  if (href?.startsWith("#")) {
    return (
      <a
        {...props}
        href={href}
        className="font-medium underline decoration-muted-foreground underline-offset-4"
      >
        {children}
      </a>
    );
  }

  return (
    <a
      {...props}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium underline decoration-muted-foreground underline-offset-4"
    >
      {children}
    </a>
  );
}

interface CalloutProps extends React.PropsWithChildren {
  emoji: React.ReactNode;
}

function Callout({ emoji, children }: CalloutProps) {
  return (
    <div className="mb-8 flex items-center rounded border border-accent bg-secondary p-1 px-4 text-foreground text-sm">
      <div className="mr-4 flex w-4 items-center">{emoji}</div>
      <div className="w-full">{children}</div>
    </div>
  );
}

function ProsCard({ title, pros }: { title: string; pros: Array<string> }) {
  return (
    <div className="my-4 w-full rounded-xl border border-emerald-200 bg-neutral-50 p-6 dark:border-emerald-900 dark:bg-neutral-900">
      <span>{`You might use ${title} if...`}</span>
      <div className="mt-4">
        {pros.map((pro) => (
          <div key={pro} className="mb-2 flex items-baseline font-medium">
            <div className="mr-2 size-4">
              <svg className="size-4 text-emerald-500" viewBox="0 0 24 24">
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </g>
              </svg>
            </div>
            <span>{pro}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ConsCard({ title, cons }: { title: string; cons: Array<string> }) {
  return (
    <div className="my-6 w-full rounded-xl border border-red-200 bg-neutral-50 p-6 dark:border-red-900 dark:bg-neutral-900">
      <span>{`You might not use ${title} if...`}</span>
      <div className="mt-4">
        {cons.map((con) => (
          <div key={con} className="mb-2 flex items-baseline font-medium">
            <div className="mr-2 size-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-4 text-red-500"
              >
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </div>
            <span>{con}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Code({ children }: { children: string }) {
  const codeHTML = highlight(children);
  return (
    <code
      // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
      dangerouslySetInnerHTML={{ __html: codeHTML }}
    />
  );
}

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

const headingClasses = {
  h1: "scroll-m-20 font-extrabold text-4xl tracking-tight lg:text-5xl",
  h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
  h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
  h4: "scroll-m-20 text-xl font-semibold tracking-tight",
} as const;

function createHeading(level: keyof typeof headingClasses) {
  return ({ children }: { children: string }) => {
    const slug = slugify(children);
    return React.createElement(level, { id: slug }, [
      React.createElement("a", {
        href: `#${slug}`,
        key: `link-${slug}`,
        className: headingClasses[level],
        children,
      }),
    ]);
  };
}

const components = {
  h1: createHeading("h1"),
  h2: createHeading("h2"),
  h3: createHeading("h3"),
  h4: createHeading("h4"),
  a: CustomLink,
  Callout,
  ProsCard,
  ConsCard,
  StaticTweet: ReactTweet,
  code: Code,
  Table,
};

export function CustomMDX(props: MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      components={{
        ...(components as MDXRemoteProps["components"]),
        ...(props.components || {}),
      }}
    />
  );
}
