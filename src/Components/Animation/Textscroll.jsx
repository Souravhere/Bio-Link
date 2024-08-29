import React from 'react';
import { motion } from 'framer-motion';
import { CgWebsite } from 'react-icons/cg';
import { MdOutlineDesignServices, MdOutlineTextSnippet } from 'react-icons/md';
import { IoShareSocialOutline } from 'react-icons/io5';
import { FaRegImages } from 'react-icons/fa';

// Component for infinite horizontal scroll animation
const Textscroll = () => {
  // Define animation variants
  const scrollVariants = {
    animate: {
      x: ['0%', '-100%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 20, // Adjust duration for scroll speed
          ease: 'linear',
        },
      },
    },
  };

  // Create a single row of text content
  const textContent = (
    <div className="flex items-center gap-3 uppercase font-semibold text-sm">
      <CgWebsite size={20} />
      website
      <MdOutlineDesignServices size={20} />
      graphics design
      <IoShareSocialOutline size={20} />
      social handles
      <FaRegImages size={20} />
      poster making
      <MdOutlineTextSnippet size={20} />
      content writing
    </div>
  );

  return (
    <div className="overflow-hidden whitespace-nowrap relative w-full">
      <motion.div
        className="flex"
        variants={scrollVariants}
        animate="animate"
        style={{ width: '100%' }} // Ensure enough width for seamless scrolling
      >
        {/* Duplicate the content twice for seamless scrolling */}
        <div className="flex-shrink-0 w-full">{textContent}</div>
        <div className="flex-shrink-0 w-full">{textContent}</div>
        <div className="flex-shrink-0 w-full">{textContent}</div>
        <div className="flex-shrink-0 w-full">{textContent}</div>
      </motion.div>
    </div>
  );
};

export default Textscroll;
