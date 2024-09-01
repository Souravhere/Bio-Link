import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaInstagram } from "react-icons/fa";
import Counter from './Animation/Counter';

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
              <div className='w-1/2 h-36 dark:bg-gray-800 bg-indigo-500 text-white p-2 rounded-lg hover:rounded-2xl duration-500'>
                <div className='flex items-center'>
                  <Counter value={12}/>
                  <h1 className='font-bold text-5xl'>+</h1>
                </div>
                <h3 className='font-bold text-3xl mt-5'>Websites</h3>
              </div>
              <div className='w-1/2 h-36 dark:bg-gray-800 bg-indigo-500 text-white p-2 rounded-lg hover:rounded-2xl duration-500'>
                <div className='flex items-center'>
                  <Counter value={99}/>
                  <h1 className='font-bold text-5xl'>+</h1>
                </div>
                <h3 className='font-bold text-3xl mt-5'>Graphics</h3>
              </div>
            </div>
            <div className='flex items-center justify-center sm:gap-4 gap-5 mt-5'>
            <div className='w-1/2 h-36 dark:bg-gray-800 bg-indigo-500 text-white p-2 rounded-lg hover:rounded-2xl duration-500'>
                <div className='flex items-center'>
                  <Counter value={7}/>
                  <h1 className='font-bold text-5xl'>+</h1>
                </div>
                <h3 className='font-bold text-3xl mt-5'>Socials</h3>
              </div>
              <div className='w-1/2 h-36 dark:bg-gray-800 bg-indigo-500 text-white p-2 rounded-lg hover:rounded-2xl duration-500'>
                <div className='flex items-center'>
                  <Counter value={9}/>
                  <h1 className='font-bold text-5xl'>+</h1>
                </div>
                <h3 className='font-bold text-3xl mt-5'>Clients</h3>
              </div>
            </div>
      </div>
  );
};

export default Pojectcard;
