import { motion, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const fontSize = 48;
const padding = 8;
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
        threshold: 0.1,
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
      className="flex space-x-3 overflow-hidden rounded bg-transparent font-bold text-white px-2 leading-none"
    >
      {startAnimation && (
        <>
          <Digit place={10} targetValue={value} />
          <Digit place={1} targetValue={value} />
        </>
      )}
    </div>
  );
}

function Digit({ place, targetValue }) {
  const [value, setValue] = useState(0);
  const animatedValue = useSpring(0, { stiffness: 20, damping: 12 });

  useEffect(() => {
    const adjustedValue = Math.floor((targetValue % (place * 10)) / place);
    animatedValue.set(adjustedValue);

    const unsubscribe = animatedValue.on("change", (v) => setValue(Math.floor(v)));

    return () => unsubscribe(); // Cleanup the subscription on component unmount
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
    let offset = (10 + number - latest) % 10;
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
