"use client";
import { Confetti as C } from "@neoconfetti/react";

export function Confetti() {
  const dateToday = new Date();
  return dateToday.getDate() === 3 && dateToday.getMonth() === 8 ? (
    <div className="-z-20 fixed inset-0 flex h-dvh items-center justify-center">
      <C particleCount={1000} />
    </div>
  ) : null;
}
