import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaInstagram } from "react-icons/fa";

const images = [
  "./our-project-3.png",
  "./our-project-3.png",
  "./our-project-3.png",
  "./our-project-3.png",
  "./our-project-3.png",
];

const Pojectcard = () => {
  // const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) =>
  //       prevIndex === images.length - 1 ? 0 : prevIndex + 1
  //     );
  //   }, 3000); // Change slide every 3 seconds

  //   return () => clearInterval(interval); // Clear interval on component unmount
  // }, []);

  return (
    <div className='w-full bg-transparent sm:p-3 p-4'>
            <div className='flex w-full items-center justify-between sm:gap-4 gap-5 mt-5'>
                <a href="">
                <div className='w-full h-40 dark:bg-gray-800 bg-indigo-400 text-white p-2 rounded-lg'>
                <FaInstagram size={25} className='dark:text-white text-black' />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, deserunt?</p>
                </div>
                </a>
                <a href="">
                <div className='w-full h-40 dark:bg-gray-800 bg-gray-200 rounded-lg'>
                <FaInstagram size={25} className='dark:text-white text-black' />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, deserunt?</p>
                </div>
                </a>
            </div>
            <div className='flex items-center justify-center sm:gap-4 gap-5 mt-5'>
                <a href="">
                <div className='w-full h-40 dark:bg-gray-800 bg-gray-200 rounded-lg'>
                <FaInstagram size={25} className='dark:text-white text-black' />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, deserunt?</p>
                </div>
                </a>
                <a href="">
                <div className='w-full h-40 dark:bg-gray-800 bg-gray-200 rounded-lg'>
                <FaInstagram size={25} className='dark:text-white text-black' />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, deserunt?</p>
                </div>
                </a>
            </div>
      </div>
  );
};

export default Pojectcard;
