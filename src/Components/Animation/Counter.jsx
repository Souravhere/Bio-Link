import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const fontSize = 30;
const padding = 15;
const height = fontSize + padding;

function Counter({ value }) {
  const [startAnimation, setStartAnimation] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartAnimation(true);
          }
        });
      },
      {
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1, // Trigger when 10% of the component is visible
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={counterRef}
      style={{ fontSize }}
      className="flex space-x-3 overflow-hidden rounded bg-transparent px-2 leading-none text-gray-900"
    >
      {startAnimation && (
        <>
          {/* <Digit place={100} targetValue={value} /> */}
          <Digit place={10} targetValue={value} />
          <Digit place={1} targetValue={value} />
        </>
      )}
    </div>
  );
}

function Digit({ place, targetValue }) {
  const [value, setValue] = useState(0);
  const animatedValue = useSpring(0, { stiffness: 50, damping: 20 });

  useEffect(() => {
    // Update the animation when startAnimation is triggered
    animatedValue.set(targetValue);

    // Update the visual number over time
    animatedValue.onChange((v) => setValue(Math.floor(v / place)));
  }, [animatedValue, targetValue, place]);

  return (
    <div style={{ height }} className="relative w-[1ch] tabular-nums">
      {[...Array(10).keys()].map((i) => (
        <Number key={i} mv={animatedValue} number={i} />
      ))}
    </div>
  );
}

function Number({ mv, number }) {
  let y = useTransform(mv, (latest) => {
    let placeValue = latest % 10;
    let offset = (10 + number - placeValue) % 10;

    let memo = offset * height;

    if (offset > 5) {
      memo -= 10 * height;
    }

    return memo;
  });

  return (
    <motion.span
      style={{ y }}
      className="absolute inset-0 flex items-center justify-center"
    >
      {number}
    </motion.span>
  );
}

export default Counter;
