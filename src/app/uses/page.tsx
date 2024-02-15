import { Metadata } from "next/types";
import { Fragment } from "react";
import { setups } from "./setup";

export const metadata: Metadata = {
  title: "Uses",
  description: "Here's what stuff I'm currently using.",
};

export default function Page() {
  return (
    <section className="space-y-4">
      <div className="font-mono text-muted-foreground text-sm">
        here's my setup
      </div>
      {setups.map(({ items, setupName }) => (
        <Fragment key={setupName}>
          <div className="font-medium text-lg tracking-tighter">
            {setupName}
          </div>
          <ul className="list-disc pl-6 text-foreground/80">
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Fragment>
      ))}
    </section>
  );
}
