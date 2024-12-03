import { cn } from "@/lib/utils";
import { Newsreader } from "next/font/google";

const newsreader = Newsreader({
  style: "italic",
  subsets: ["latin"],
});

export function AboutMe() {
  return (
    <section className="prose prose-zinc dark:prose-invert text-[15px] animate-slide-from-down-and-fade-2 text-pretty">
      <p className="leading-relaxed">
        I&#39;m a{" "}
        <span
          className={cn(
            "font-medium font-reader text-[16px] text-foreground",
            newsreader.className,
          )}
        >
          Software Engineer
        </span>{" "}
        based in Philippines, building full-stack web applications with React,
        TypeScript, and Tailwind CSS.
      </p>
    </section>
  );
}
