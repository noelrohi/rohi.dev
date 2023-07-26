"use client";

import { useState } from "react";

import { getAge } from "@/lib/utils";
import { ItemCard } from "@/components/stats";

export default function AgeCard(props: { age: string | undefined }) {
  const [age, setAge] = useState(props.age);

  setInterval(() => {
    setAge(getAge());
  }, 10);

  return (
    <ItemCard title="My Age" link="/" newtab={false}>
      {age}
    </ItemCard>
  );
}
