import { ActiveLink } from "@/components/active-link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { links, socials } from "@/lib/consts";
import Link from "next/link";

export function Navbar() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <Avatar className="size-[50px]">
          <AvatarImage src="https://github.com/noelrohi.png" alt="@noelrohi" />
          <AvatarFallback>NR</AvatarFallback>
        </Avatar>
        <div className="mt-1.5">
          <h1 className="font-semibold text-xl tracking-tighter">
            Noel Rohi Garcia
          </h1>
          <p className="text-muted-foreground">Software Engineer</p>
        </div>
      </div>
      <div className="flex gap-4">
        {socials.map(({ href, icon: Icon, label }) => (
          <Link
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
          >
            <span className="sr-only">{label}</span>
            <Icon className="size-6" />
          </Link>
        ))}
      </div>
      <hr />
      <nav className="mb-8 flex flex-wrap items-center gap-2">
        {links
          .filter((l) => !l.hidden)
          .map(({ path, label }) => (
            <ActiveLink href={path} key={label}>
              {label}
            </ActiveLink>
          ))}
      </nav>
    </div>
  );
}
