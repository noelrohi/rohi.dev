import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Blog",
};

export default function Page() {
  return (
    <section className="space-y-4">
      <div className="font-mono text-muted-foreground text-sm">
        read my blog
      </div>
      <i>wip</i>
    </section>
  );
}
