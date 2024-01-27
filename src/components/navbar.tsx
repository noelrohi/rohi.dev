import { links } from "@/lib/consts";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="flex items-start gap-4 py-12 font-medium tracking-tight">
      {links.map(({ path, label }) => (
        <Link href={path} key={label}>
          {label}
        </Link>
      ))}
    </nav>
  );
}
