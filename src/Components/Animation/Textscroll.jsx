import React from "react";
import { motion, useMotionValue, useTransform, useAnimationFrame } from "framer-motion";

// Component to create infinite scroll text effect
function InfiniteScrollText({ text, baseVelocity }) {
  const baseX = useMotionValue(0);

  // Use animation frame to update text position
  useAnimationFrame((t, delta) => {
    const moveBy = baseVelocity * (delta / 1000);
    baseX.set(baseX.get() + moveBy);
  });

  // Repeat the text to ensure continuous scrolling
  return (
    <div className="relative whitespace-nowrap">
      <motion.div
        className="flex"
        style={{ x: useTransform(baseX, (value) => `${value}px`) }}
      >
        <div className="flex space-x-4">
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
        </div>
      </motion.div>
    </div>
  );
}

export default function Textscroll() {
  return (
    <section className="h-fit w-full bg-gray-100">
      <InfiniteScrollText text="Infinite Scrolling Text " baseVelocity={-60} />
    </section>
  );
}
