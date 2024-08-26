"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

interface ActiveLinkProps extends React.ComponentPropsWithoutRef<typeof Link> {
  parentProps?: React.ComponentPropsWithoutRef<"div">;
}

export function ActiveLink({
  children,
  className,
  parentProps,
  ...props
}: ActiveLinkProps) {
  const pathname = usePathname();
  const isActive = useMemo(() => {
    return pathname === props.href;
  }, [pathname, props.href]);
  return (
    <div
      {...parentProps}
      className={cn(
        "relative rounded-md px-2 py-1 text-sm",
        parentProps?.className,
        !isActive ? "text-foreground" : "text-primary-foreground",
      )}
    >
      <Link className={cn("relative z-10", className)} {...props}>
        {children}
      </Link>
      {isActive && <ActiveIdentifier />}
    </div>
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
