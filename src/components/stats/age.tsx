"use client";

import { useState } from "react";

import { getAge } from "@/lib/utils";
import { ItemCard, SkeletonCard } from "@/components/stats";
import { useMounted } from "@/hooks/use-mounted";

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
