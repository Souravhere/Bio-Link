import React from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame } from 'framer-motion';

const ParallaxText = ({ children, baseVelocity = 100 }) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  // Increase the range for seamless scrolling
  const x = useTransform(baseX, (v) => `${v}%`);

  const directionFactor = React.useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap"
        style={{ x }}
      >
        <span className="mx-4 text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-100">{children}</span>
        <span className="mx-4 text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-100">{children}</span>
        <span className="mx-4 text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-100">{children}</span>
        <span className="mx-4 text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-100">{children}</span>
        <span className="mx-4 text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-100">{children}</span>
        <span className="mx-4 text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-100">{children}</span>
      </motion.div>
    </div>
  );
};

export default function Textanimation() {
  return (
    <section className="py-10 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <ParallaxText baseVelocity={-5}>Framer Motion Parallax Effect</ParallaxText>
        <ParallaxText baseVelocity={5}>Smooth Scrolling Effect</ParallaxText>
      </div>
    </section>
  );
}
