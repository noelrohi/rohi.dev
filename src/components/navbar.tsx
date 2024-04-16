import { links } from "@/lib/consts";
import { ActiveLink } from "@/components/active-link";

export function Navbar() {
  return (
    <nav className="flex items-start gap-4 py-12 font-medium tracking-tight">
      {links
        .filter((l) => !l.hidden)
        .map(({ path, label }) => (
          <ActiveLink href={path} key={label}>
            {label}
          </ActiveLink>
        ))}
    </nav>
  );
}
