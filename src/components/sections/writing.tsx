import { ShellSection } from "@/components/ui/shell";
import { allPosts } from "content-collections";
import Link from "next/link";

export function Writing() {
  const posts = allPosts;
  return (
    <ShellSection index={5} title="Writing">
      <div className="grid grid-cols-1 gap-6 ">
        {posts.map((post, index) => (
          <Link key={index} href={post._meta.path}>
            <span className="text-muted-foreground">
              {new Date(post.time).toLocaleDateString()}
            </span>{" "}
            {post.title}
          </Link>
        ))}
        <Link href="/blog" className="font-medium text-[13px] hover:underline">
          Read more posts
        </Link>
      </div>
    </ShellSection>
  );
}
