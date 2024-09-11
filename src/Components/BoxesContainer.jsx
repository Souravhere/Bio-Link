import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaReact, FaFigma, FaHtml5, FaCss3Alt, FaJs, FaWordpress, FaFacebookF } from "react-icons/fa";
import { IoIosColorPalette, IoMdCodeWorking, IoMdImages } from "react-icons/io";
import { SiAdobephotoshop, SiAdobexd } from "react-icons/si";
import { NavLink } from "react-router-dom";

// Spinner component
const Spinner = () => (
  <motion.div
    className="w-6 h-6 border-4 border-t-4 border-indigo-500 border-solid rounded-full animate-spin"
    initial={{ rotate: 0 }}
    animate={{ rotate: 360 }}
    transition={{ duration: 1, repeat: Infinity }}
  />
);

// Array of icons for different stages
const icons = [
  [<FaReact />, <FaHtml5 />, <FaCss3Alt />, <FaJs />, <FaWordpress />],
  [<IoIosColorPalette />, <FaFigma />, <SiAdobephotoshop />, <SiAdobexd />],
  [<IoMdCodeWorking />, <FaFacebookF />, <IoMdImages />],
];

const BoxesContainer = () => {
  const [loading, setLoading] = useState(false);
  const [iconSet, setIconSet] = useState(0);

  // Icon animation variants
  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      x: Math.cos(i * (Math.PI / 3)) * 150, // Adjusting spread angle
      y: Math.sin(i * (Math.PI / 3)) * 150,
      transition: { duration: 1.5, ease: "easeOut" },
    }),
    exit: {
      opacity: 0,
      scale: 0,
      transition: { duration: 1 },
    },
  };

  // Automatically switch between icon sets
  useEffect(() => {
    const interval = setInterval(() => {
      setIconSet((prev) => (prev + 1) % icons.length);
    }, 4000); // Switch every 4 seconds
    return () => clearInterval(interval);
  }, []);

  // Simulate a loading state
  const handleButtonClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000); // Simulate a delay for loading
  };

  return (
    <section className="bg-white text-gray-800 relative overflow-hidden">
      {/* Center the icons */}
      <motion.div
        className="absolute inset-0 flex justify-center items-center"
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {icons[iconSet].map((icon, i) => (
          <motion.div
            key={i}
            custom={i}
            className="text-3xl text-indigo-600"
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {icon}
          </motion.div>
        ))}
      </motion.div>

      {/* Main hero text content */}
      <motion.div
        className="relative z-10 container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl"
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl font-bold leading-none sm:text-5xl py-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Your Vision with
          <span className="text-indigo-600 ml-2">Byyte</span>
        </motion.h1>
        <motion.p
          className="px-8 mt-8 mb-12 text-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          At Byyte Digital, we craft visually stunning websites, captivating designs, and data-driven marketing strategies to elevate your brand.
        </motion.p>
        <div className="flex flex-wrap justify-center">
          <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <NavLink to="contactus">
              <button
                className="px-8 py-3 m-2 text-lg font-semibold rounded bg-indigo-500 text-white flex items-center justify-center"
                onClick={handleButtonClick}
                disabled={loading}
              >
                {loading ? <Spinner /> : "Contact Us"}
              </button>
            </NavLink>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <a href="/Byyte-Project-Workflow.pdf" target="blank">
              <button
                className="px-8 py-3 m-2 text-lg border rounded text-gray-900 border-gray-300 flex items-center justify-center"
                onClick={handleButtonClick}
                disabled={loading}
              >
                {loading ? <Spinner /> : "Learn more"}
              </button>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default BoxesContainer;
