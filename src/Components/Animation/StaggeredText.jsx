import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function StaggeredText({ text, hoverColor = 'blue', baseColor = 'black' }) {
  const letters = text.split(''); // Split text into letters

  // Animation variants for hover effect
  const hoverVariants = {
    initial: {
      y: 0,
      opacity: 1,
    },
    hover: {
      y: -30, // Move up by 30px
      opacity: 0,
      transition: { duration: 0.3 },
    },
    exit: {
      y: 30, // Enter from below
      opacity: 0,
    },
    appear: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      className="inline-block"
      initial="initial"
      animate="appear"
      exit="exit"
      style={{ color: baseColor }}
      whileHover={{ color: hoverColor }}
    >
      {letters.map((letter, index) => (
        <AnimatePresence key={index}>
          <motion.span
            key={letter + index}
            className="inline-block relative"
            variants={hoverVariants}
            initial="initial"
            animate="appear"
            exit="exit"
            whileHover="hover"
          >
            {letter === ' ' ? '\u00A0' : letter} {/* Non-breaking space for space characters */}
          </motion.span>
        </AnimatePresence>
      ))}
    </motion.div>
  );
}

export default StaggeredText;
