"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
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
    <Link
      {...props}
      className={cn(
        "relative rounded-md px-2 py-1 text-sm",
        className,
        !isActive ? "text-foreground" : "text-primary-foreground",
      )}
    >
      <div className="relative z-10">{children}</div>
      {isActive && <ActiveIdentifier />}
    </Link>
  );
}

function ActiveIdentifier() {
  return (
    <motion.span
      className="absolute inset-0 z-0 rounded-md bg-primary"
      layoutId="navbar"
    />
  );
}
