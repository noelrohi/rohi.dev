import { db } from "@/db";
import { cache } from "react";

export const getNumberOfViews = cache(async (slug: string) => {
  const firstView = await db.query.views.findFirst({
    where: (table, { eq }) => eq(table.slug, slug),
  });
  return firstView ? firstView.count : 0;
});
