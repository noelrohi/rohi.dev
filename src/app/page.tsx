import { badgeVariants } from "@/components/ui/badge";
import { getBlogPosts } from "@/lib/blog";
import { experiences, projects } from "@/lib/consts";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Page() {
  return (
    <section className="space-y-10">
      <Intro />
      <Experience />
      <Projects />
      <Posts />
    </section>
  );
}

function Posts() {
  const posts = getBlogPosts();
  return (
    <div className="space-y-4">
      <div className="font-semibold text-lg">Latest Blogs </div>
      <div className="flex flex-col gap-4">
        {posts.slice(0, 2).map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group text-sm *:ml-2"
          >
            <span className="text-muted-foreground">
              {Intl.DateTimeFormat().format(
                new Date(post.metadata.publishedAt),
              )}
            </span>
            <span className="font-medium text-lg tracking-tighter group-hover:underline">
              {post.metadata.title}
            </span>
          </Link>
        ))}
        <Link href="/blog" className="font-medium text-sm hover:underline">
          {" "}
          Read more{" "}
        </Link>
      </div>
    </div>
  );
}

function Experience() {
  return (
    <div className="space-y-4">
      <div className="font-semibold text-lg">Experience</div>
      <ol className="relative space-y-6 border-border border-s *:ms-4">
        {experiences.map(({ jobTitle, company, presentJob }) => (
          <li className="relative" key={jobTitle + company}>
            <div
              className={cn(
                "-translate-x-[22px] absolute size-3 translate-y-1 rounded-full",
                presentJob ? "bg-foreground" : "bg-border",
              )}
              aria-hidden
            />
            <div className="flex items-center gap-2">
              <div className="font-medium">{jobTitle}</div>
              {presentJob && (
                <div
                  className={cn(
                    badgeVariants({ variant: "outline" }),
                    "uppercase",
                  )}
                >
                  Present
                </div>
              )}
            </div>
            <div className="text-foreground/70 text-sm">{company}</div>
          </li>
        ))}
      </ol>
    </div>
  );
}

function Projects() {
  return (
    <div className="space-y-4">
      <div className="font-semibold text-lg">Projects</div>
      <div className="grid w-full grid-cols-2 gap-x-10 gap-y-5 md:grid-cols-3">
        {projects.map(({ title, description, url, icon: Icon }) => (
          <Link key={title} href={url} className="flex flex-col gap-2 text-sm">
            <Icon />
            <div className="font-medium">{title}</div>
            <p className="max-w-xs font-normal text-foreground/70">
              {description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

function Intro() {
  return (
    <p>
      A software engineer based in Philippines, building full-stack web
      applications with React, TypeScript, and PostgreSQL.
    </p>
  );
}
