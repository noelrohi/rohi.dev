"use client";

import { Icons } from "@/components/icons";
import { MobileNav } from "@/components/mobile-nav";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { NavItem } from "@/types";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import * as React from "react";
import { motion } from "framer-motion";
interface MainNavProps {
  items?: NavItem[];
  children?: React.ReactNode;
}

export function MainNav({ items, children }: MainNavProps) {
  const path = usePathname();
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);
  const [isPending, startTransition] = React.useTransition();
  const router = useRouter();

  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="hidden items-center space-x-2 md:flex">
        <Icons.logo />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items?.map((item) => (
            <div className="relative" key={item.href}>
              <button
                onClick={() => {
                  startTransition(() => {
                    router.push(item.href);
                  });
                }}
                className={cn(
                  "relative items-center text-sm font-medium text-muted-foreground hover:border-foreground",
                  item.disabled && "cursor-not-allowed opacity-80",
                  path === item.href && "text-foreground border-foreground"
                )}
              >
                {path === item.href && (
                  <motion.span
                    layoutId="bubble"
                    className="rounded-full absolute z-10 bottom-0 left-0 flex w-full h-[1px] bg-blue-500"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {item.title}
              </button>
            </div>
          ))}
        </nav>
      ) : null}
      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <Icons.close /> : <Icons.logo />}
        <span className="font-bold">Menu</span>
      </button>
      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
    </div>
  );
}
