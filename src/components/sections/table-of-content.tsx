"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { useCallback, useEffect, useState, useMemo } from "react";

export function TableOfContents() {
  const [headings, setHeadings] = useState<
    { id: string; text: string; level: string }[]
  >([]);
  const [visibleHeadings, setVisibleHeadings] = useState<Set<string>>(
    new Set(),
  );

  const getHeadings = useCallback(() => {
    return Array.from(document.querySelectorAll("h1, h2, h3"))
      .filter((heading) => heading.id)
      .map((heading) => ({
        id: heading.id,
        text: heading.textContent || "",
        level: heading.tagName.toLowerCase(),
        top: (heading as HTMLElement).offsetTop,
      }));
  }, []);

  useEffect(() => {
    const collectedHeadings = getHeadings();
    setHeadings(collectedHeadings);

    let timeoutId: NodeJS.Timeout;
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setVisibleHeadings((prevVisible) => {
          const newVisible = new Set(prevVisible);
          for (const entry of entries) {
            const headingId = entry.target.id;
            if (entry.isIntersecting) {
              newVisible.add(headingId);
            } else {
              newVisible.delete(headingId);
            }
          }
          return newVisible;
        });
      }, 100);
    };

    const observerOptions = {
      root: null,
      threshold: 0,
      rootMargin: "0px 0px -10% 0px",
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions,
    );

    for (const heading of collectedHeadings) {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    }

    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, [getHeadings]);

  const scroll = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.offsetTop - 100;
      window.scrollTo({
        top: top,
        behavior: "smooth",
      });

      element.classList.add("highlight-heading");
      setTimeout(() => {
        element.classList.remove("highlight-heading");
      }, 2000);
    }
  }, []);

  const renderHeading = useCallback(
    (heading: { id: string; text: string; level: string }) => {
      const isVisible = visibleHeadings.has(heading.id);

      return (
        <div key={heading.text} className="mt-0">
          <button
            type="button"
            onClick={() => scroll(heading.id)}
            className={cn({
              "mt-0 ml-2 border-l border-l-muted py-1 text-left text-muted-foreground opacity-100 transition ease-in-out hover:opacity-50":
                true,
              "text-bold": isVisible,
              "pl-4": heading.level === "h1",
              "pl-6": heading.level === "h2",
              "pl-7": heading.level === "h3",
              "border-l border-l-primary": isVisible,
            })}
            data-active={isVisible ? "true" : "false"}
          >
            {heading.text}
          </button>
        </div>
      );
    },
    [visibleHeadings, scroll],
  );

  const headingsList = useMemo(
    () => (
      <div className="mt-0 flex flex-col gap-0">
        {headings.map(renderHeading)}
      </div>
    ),
    [headings, renderHeading],
  );

  return (
    <React.Fragment>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="top-[10rem] right-auto left-[2rem] hidden xl:top-[3rem] xl:right-[5rem] xl:left-auto xl:block fixed mt-0 h-full w-48 justify-start space-y-4 transition text-[14px]"
      >
        {headingsList}
      </motion.nav>
    </React.Fragment>
  );
}
