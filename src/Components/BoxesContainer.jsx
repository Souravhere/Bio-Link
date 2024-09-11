import React, { useState } from "react";
import { motion } from "framer-motion";
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

export const BoxesContainer = () => {
  const [loading, setLoading] = useState(false);

  // Define animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3, // Stagger children with a 0.3 second delay
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const buttonSlideUp = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Simulate a loading state
  const handleButtonClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000); // Simulate a delay for loading
  };

  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <motion.div
        className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl font-bold leading-none sm:text-5xl py-2"
          variants={fadeInUp}
        >
          Your Vision with
          <span className="text-indigo-600 ml-2">Byyte</span>
        </motion.h1>
        <motion.p
          className="px-8 mt-8 mb-12 text-lg"
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
        >
          At Byyte Digital, we craft visually stunning websites, captivating designs, and data-driven marketing strategies to elevate your brand.
        </motion.p>
        <div className="flex flex-wrap justify-center">
          <motion.div variants={buttonSlideUp}>
            <NavLink to='contactus'>
              <button
                className="px-8 py-3 m-2 text-lg font-semibold rounded bg-indigo-500 text-white flex items-center justify-center"
                onClick={handleButtonClick}
                disabled={loading}
              >
                {loading ? <Spinner /> : "Contact Us"}
              </button>
            </NavLink>
          </motion.div>
          <motion.div variants={buttonSlideUp}>
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