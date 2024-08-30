import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

export const Pagelink = () => {
  return (
    <section className="bg-[#e5e5e1] text-black p-4 md:p-8 w-full">
      <div className="mx-auto w-full">
        <AnimatedDiv
          heading="Website"
          subheading="Learn what we do here"
          imgSrc="https://i.pinimg.com/564x/a4/df/19/a4df19998a10efd7d2fd8739093c1420.jpg"
        />
        <AnimatedDiv
          heading="Graphics"
          subheading="We work with great people"
          imgSrc="https://i.pinimg.com/564x/5d/28/90/5d289055564c7f5b0ff3d55d438f1a24.jpg"
        />
        <AnimatedDiv
          heading="Marketing"
          subheading="Our work speaks for itself"
          imgSrc="https://i.pinimg.com/564x/c2/e7/51/c2e7515b7ac38c964a3fae81487e295f.jpg"
        />
        <AnimatedDiv
          heading="Social"
          subheading="We want cool people"
          imgSrc="https://i.pinimg.com/564x/4f/24/a5/4f24a5ecaf4665f3300723b5713ad03c.jpg"
        />
        <AnimatedDiv
          heading="More"
          subheading="In case you're bored"
          imgSrc="https://i.pinimg.com/564x/b6/34/e4/b634e42271294b86d99d2982899f1898.jpg"
        />
      </div>
    </section>
  );
};

const AnimatedDiv = ({ heading, imgSrc, subheading }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-black py-4 transition-colors duration-500 hover:border-gray-700 md:py-8"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-0 block text-4xl font-bold text-black transition-colors duration-500 group-hover:text-gray-700 md:text-6xl overflow-x-visible"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-0 mt-2 block text-base text-black transition-colors duration-500 group-hover:text-gray-700 overflow-x-visible">
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="fixed z-30 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`Image representing ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-5xl text-gray-700" />
      </motion.div>
    </motion.div>
  );
};
