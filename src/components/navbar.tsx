import { links } from "@/lib/consts";
import { Link } from "next-view-transitions";

export function Navbar() {
  return (
    <nav className="flex items-start gap-4 py-12 font-medium tracking-tight">
      {links
        .filter((l) => !l.hidden)
        .map(({ path, label }) => (
          <Link href={path} key={label}>
            {label}
          </Link>
        ))}
    </nav>
  );
}
