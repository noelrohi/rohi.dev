import { ShellSection } from "@/components/ui/shell";
import { allPosts } from "content-collections";
import Link from "next/link";

export function Writing() {
  const posts = allPosts.filter((post) => !post.isDraft);
  return (
    <ShellSection index={5} title="Writing">
      <div className="grid grid-cols-1 gap-6 ">
        {posts.map((post, index) => (
          <Link key={index} href={`/blog/${post._meta.path}`}>
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
