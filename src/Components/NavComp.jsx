import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import StaggeredText from './Animation/StaggeredText';
import { motion, AnimatePresence } from 'framer-motion';

function NavComp() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
      <div className='w-full flex items-center justify-between py-4 px-3 bg-white dark:bg-black dark:text-white'>
        <StaggeredText text="Byyte.co" hoverColor="gray" baseColor="black" className='font-semibold text-2xl' />

        <div className='md:hidden absolute top-2 right-5'>
          <button onClick={toggleMenu} className='text-2xl'>
            {isOpen ? '☰' : '☰'}
          </button>
        </div>

        <div className='hidden md:flex gap-5'>
          <NavLink to='/'>
            <StaggeredText text="Home" hoverColor="gray" baseColor="black" className='font-semibold text-lg' />
          </NavLink>
          <NavLink to='aboutus'>
            <StaggeredText text="About Us" hoverColor="gray" baseColor="black" className='font-semibold text-lg' />
          </NavLink>
          <NavLink to='Services'>
            <StaggeredText text="Services" hoverColor="gray" baseColor="black" className='font-semibold text-lg' />
          </NavLink>
        </div>
        
        <a href="">
          <div className='sm:block hidden font-semibold bg-indigo-500 py-2 px-2 rounded-lg'>
            <StaggeredText text="Contact Us" hoverColor="white" baseColor="white" className='font-semibold text-base' />
          </div>
        </a>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className='fixed z-50 top-0 right-0 w-3/4 h-full bg-[#e5e5e1] dark:bg-black text-white flex flex-col items-center pt-20'
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.3 }}
            >
              <button onClick={toggleMenu} className='text-2xl mb-8 absolute top-3 right-5'>
                ✖️
              </button>
              <NavLink onClick={toggleMenu} to='/'>
                <StaggeredText text="Home" hoverColor="black" baseColor="black" className='font-semibold text-3xl my-2' />
              </NavLink>
              <NavLink onClick={toggleMenu} to='aboutus'>
                <StaggeredText text="About Us" hoverColor="gray" baseColor="black" className='font-semibold text-3xl my-2' />
              </NavLink>
              <NavLink onClick={toggleMenu} to='services'>
                <StaggeredText text="Services" hoverColor="gray" baseColor="black" className='font-semibold  text-3xl my-2' />
              </NavLink>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
  );
}

export default NavComp;
