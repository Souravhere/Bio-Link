import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  "./our-project-3.png",
  "./our-project-3.png",
  "./our-project-3.png",
  "./our-project-3.png",
  "./our-project-3.png",
];

const Pojectcard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative h-64 overflow-hidden rounded-lg md:h-[450px] overflow-y-hidden">
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt="Carousel Image"
            className="absolute block w-full h-fit object-fill sm:-mt-4 overflow-y-hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Pojectcard;
