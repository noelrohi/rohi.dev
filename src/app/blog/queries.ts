import { db } from "@/db";

export const getNumberOfViews = async (slug: string) => {
  const firstView = await db.query.views.findFirst({
    where: (table, { eq }) => eq(table.slug, slug),
  });
  return firstView ? firstView.count : 0;
};
