"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedNumber({ value }: { value: number }) {
  const [val, setValue] = useState(-1000);
  let spring = useSpring(value, { mass: 0.8, stiffness: 75, damping: 15 });
  let display = useTransform(spring, (current) =>
    Math.round(current).toString()
  );

  useEffect(() => {
    setValue(value);
  }, []);

  useEffect(() => {
    spring.set(val);
  }, [spring, val]);

  return <motion.span>{display}</motion.span>;
}
