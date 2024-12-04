import { ShellSection } from "@/components/ui/shell";
import { allPosts } from "content-collections";
import Link from "next/link";

export function Writing() {
  return (
    <ShellSection index={5} title="Writing">
      <div className="grid grid-cols-1 gap-6 ">
        {allPosts.map((post, index) => (
          <Link key={index} href={post._meta.path}>
            <span className="text-muted-foreground">
              {new Date(post.time).toLocaleDateString()}
            </span>{" "}
            {post.title}
          </Link>
        ))}
      </div>
    </ShellSection>
  );
}
