import {
  LaravelIcon,
  MySqlIcon,
  NextIcon,
  ReactIcon,
  TypeScriptIcon,
} from "@/components/icons";
import { author } from "@/lib/consts";
import { getGithubRepoData } from "@/lib/helpers";
import { cn } from "@/lib/utils";
import { StarIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <section>
        <div className="space-y-4">
          <div className="text-muted-foreground text-sm">
            Noel Rohi (he/him)
          </div>
          <Intro />
        </div>
        <div className="my-8 font-bold text-lg">Featured Repositories:</div>
        <Suspense>
          <Projects />
        </Suspense>
      </section>
    </>
  );
}

async function Projects() {
  const repos = await getGithubRepoData();
  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
      {repos?.map(({ repoUrl, description, name, stars, ...repo }) => (
        <Link
          key={name}
          href={repoUrl}
          target="_blank"
          className="grid grid-rows-1 gap-4 rounded-md border border-muted-foreground p-4 hover:shadow-md hover:shadow-muted-foreground"
        >
          <div className="flex items-start justify-between overflow-hidden">
            <div className="max-w-[6.5rem] break-words font-semibold">
              {author.handle.slice(1) !== repo.author && `${repo.author}/`}
              {name}
            </div>
            <div className="inline-flex items-center gap-2">
              {stars ? stars : 0}
              <StarIcon />
            </div>
          </div>
          <div className="line-clamp-2 max-w-lg break-words text-muted-foreground text-sm">
            {description}
          </div>
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
        </Badge>{" "}
        , where I develop an app for Accounting department. We use{" "}
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
        className,
        underlined && "underline decoration-border underline-offset-4",
        "inline-flex items-center justify-center gap-1 rounded border border-border bg-muted p-1 text-foreground text-sm leading-4",
      )}
      href={href}
      rel={rel}
      target={target}
    >
      {children}
    </Link>
  );
}
