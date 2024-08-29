import React from 'react';
import { motion } from 'framer-motion';
import { CgWebsite } from 'react-icons/cg';
import { MdOutlineDesignServices, MdOutlineTextSnippet } from 'react-icons/md';
import { IoShareSocialOutline } from 'react-icons/io5';
import { FaRegImages } from 'react-icons/fa';

// Component for infinite horizontal scroll animation
const Textscroll = () => {
  const textVariants = {
    animate: {
      x: ["0%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20, // Adjust duration for scroll speed
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <motion.div
        className="flex items-center gap-3 uppercase font-semibold text-sm"
        variants={textVariants}
        animate="animate"
        style={{ width: '200%' }} // Ensures enough space for the animation
      >
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
      </motion.div>
    </div>
  );
};

export default Textscroll;
