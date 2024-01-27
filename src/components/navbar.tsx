import Link from "next/link";

const links: Array<{ path: string; label: string }> = [
  {
    path: "/",
    label: "home",
  },
  { path: "/blog", label: "blog" },
  { path: "/guestbook", label: "guestbook" },
];

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
