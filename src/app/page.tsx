import {
  LaravelIcon,
  MySqlIcon,
  NextIcon,
  ReactIcon,
  TypeScriptIcon,
} from "@/components/icons";
import { badgeVariants } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { author } from "@/lib/consts";
import { getGithubRepoData } from "@/lib/helpers";
import { cn } from "@/lib/utils";
import { StarIcon } from "@radix-ui/react-icons";
import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";
import { Suspense } from "react";

export default function Page() {
  return (
    <section>
      <div className="space-y-4">
        <div className="text-muted-foreground text-sm">Noel Rohi (he/him)</div>
        <Intro />
      </div>
      <div className="my-8 font-bold text-lg">Featured Repositories:</div>
      <Suspense fallback={<ProjectsFallback />}>
        <Projects />
      </Suspense>
    </section>
  );
}

function ProjectsFallback() {
  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => {
        return <Skeleton className="h-[127.6px] w-full rounded" key={index} />;
      })}
    </div>
  );
}

async function Projects() {
  noStore();
  const repos = await getGithubRepoData();
  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
      {repos.map(({ repoUrl, description, name, stars, ...repo }) => (
        <Link key={name} href={repoUrl} target="_blank">
          <Card className="h-full border bg-secondary text-secondary-foreground">
            <CardHeader className="flex flex-row items-center justify-between font-medium">
              <div>
                {author.handle.slice(1) !== repo.author && `${repo.author}/`}
                {name}
              </div>
              <div className="inline-flex items-center gap-2">
                {stars ? stars : 0}
                <StarIcon />
              </div>
            </CardHeader>

            <CardContent>
              <div className="line-clamp-3 max-w-lg break-words text-foreground/80 text-xs">
                {description}
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}

function Intro() {
  return (
    <>
      <p className="leading-relaxed">
        I&rsquo;m a Software Engineer based in Philippines, building full-stack
        web applications with{" "}
        <Badge href="https://react.dev/">
          <ReactIcon className="size-4" />
          React
        </Badge>
        {", "}
        <Badge href="https://www.typescriptlang.org/">
          <TypeScriptIcon className="size-4" />
          TypeScript
        </Badge>{" "}
        {"and "}
        <Badge href="https://planetscale.com">
          <MySqlIcon className="size-4" />
          MySQL
        </Badge>
        {`. I like playing games, building things, watching anime series and
        watching korean drama series. `}
      </p>
      <p className="leading-relaxed">
        Currently, I work as Full-Stack Developer at{" "}
        <Badge href="http://capex.com.ph" className="inline-fle">
          <img src="/capex-logo.png" width={16} height={16} alt="capex-logo" />
          CaPEx
        </Badge>
        {". "}I am developing an app for Accounting department with{" "}
        <Badge href="https://nextjs.org/">
          <NextIcon className="size-4" />
          Nextjs
        </Badge>{" "}
        and{" "}
        <Badge href="https://laravel.com/">
          <LaravelIcon className="size-4" />
          Laravel
        </Badge>
        .
      </p>
    </>
  );
}

interface BadgeProps extends React.ComponentPropsWithoutRef<typeof Link> {
  underlined?: boolean;
}

function Badge({
  target = "_blank",
  rel = "noopener noreferrer",
  href,
  className,
  children,
  underlined = false,
  ...props
}: BadgeProps) {
  return (
    <Link
      {...props}
      className={cn(
        badgeVariants({
          variant: "secondary",
          className: "border border-border",
        }),
        "gap-2",
        className,
        underlined && "underline decoration-border underline-offset-4",
      )}
      href={href}
      rel={rel}
      target={target}
    >
      {children}
    </Link>
  );
}
