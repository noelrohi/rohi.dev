"use client";

import { cn } from "@/lib/utils";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export function ActiveLink({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link>) {
  const pathname = usePathname();
  const isActive = useMemo(() => {
    return pathname === props.href;
  }, [pathname, props.href]);
  return (
    <Link {...props} className={cn("relative", className)}>
      {children}
      {isActive && <ActiveIdentifier />}
    </Link>
  );
}

function ActiveIdentifier() {
  return (
    <span
      className="absolute inset-0 flex items-center justify-center"
      style={{
        viewTransitionName: "active-link",
      }}
    >
      <span className="h-full w-full rounded-md bg-primary/10" />
    </span>
  );
}
