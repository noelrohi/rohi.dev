import type { Metadata } from "next/types";
import { Fragment } from "react";
import { itemList } from "./items";

export const metadata: Metadata = {
  title: "Uses",
  description: "Here's what stuff I'm currently using.",
};

export default function Page() {
  return (
    <section className="space-y-4">
      <div className="font-mono text-muted-foreground text-sm">
        here's everything I'm currently using
      </div>
      {itemList.map(({ items, category }) => (
        <Fragment key={category}>
          <div className="font-medium text-lg tracking-tighter">{category}</div>
          <ul className="list-disc pl-6 text-foreground/80">
            {items.map((item) => (
              <Fragment key={item.toString()}>
                {typeof item === "string" ? (
                  <li className="text-foreground/80">{item}</li>
                ) : (
                  <li className="flex items-center gap-2">
                    <div className="list-item text-foreground/80">
                      {item.type}:
                    </div>
                    <div className="font-semibold">{item.itemName}</div>
                  </li>
                )}
              </Fragment>
            ))}
          </ul>
        </Fragment>
      ))}
    </section>
  );
}
