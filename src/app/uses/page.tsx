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
      <p className="text-sm">Here's everything I'm currently using</p>
      {itemList.map(({ items, category }) => (
        <Fragment key={category}>
          <div className="font-medium text-lg tracking-tighter">{category}</div>
          <ul className="list-disc pl-6 text-foreground/80">
            {items.map((item) => (
              <Fragment key={item.name}>
                <li className="flex items-center gap-2 text-sm">
                  <p className="list-item text-foreground/80">
                    <span className="font-medium">{item.name}</span>
                    {"description" in item ? (
                      <span className="text-muted-foreground">
                        {" "}
                        - {item.description}
                      </span>
                    ) : null}
                  </p>
                </li>
              </Fragment>
            ))}
          </ul>
        </Fragment>
      ))}
    </section>
  );
}
