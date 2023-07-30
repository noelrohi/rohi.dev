"use client";

import { useState } from "react";

import { getAge } from "@/lib/utils";
import { ItemCard } from "@/app/dashboard/stats";
import { useMounted } from "@/hooks/use-mounted";
import { SkeletonCard } from "@/components/skeleton-card";

export default function AgeCard() {
  const [age, setAge] = useState(getAge());
  const mounted = useMounted();
  setInterval(() => {
    setAge(getAge());
  }, 10);

  return mounted ? (
    <ItemCard title="My Age" link="/" newtab={false}>
      {age}
    </ItemCard>
  ) : (
    <SkeletonCard />
  );
}
