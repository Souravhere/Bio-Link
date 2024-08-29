import React from "react";
import { motion } from "framer-motion";

// Component for staggered text animations
const StaggeredText = ({ text, hoverColor = "gray", baseColor = "black", className = "" }) => {
  const DURATION = 0.25;
  const STAGGER = 0.2; // Slight delay between each character

  return (
    <motion.div
      className={`relative block overflow-hidden whitespace-nowrap ${className}`}
      initial="initial"
      whileHover="hovered"
      style={{
        color: baseColor,
        lineHeight: 1,
      }}
    >
      <div className="relative">
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            className="inline-block"
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0 top-0">
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            className="inline-block"
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            style={{
              color: hoverColor,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default StaggeredText;
