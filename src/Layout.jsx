import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import NavComp from './Components/NavComp';
import Footer from './Components/Footer';
import { Outlet } from 'react-router-dom';
import useSmoothScroll from './Hooks/UseSmoothScroll';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 100;
    const step = 4;
    const duration = 2000; 
    const interval = duration / ((end - start) / step);

    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= end) {
          clearInterval(timer);
          return end;
        }
        return Math.min(prev + step, end);
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="absolute bottom-3 right-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <span className="text-7xl font-bold text-indigo-500">{count+`%`}</span>
    </motion.div>
  );
};

function Layout() {
  useSmoothScroll();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 flex items-center justify-center bg-white z-50"
          >
            <motion.div className="relative text-center">
              <motion.img
                src="https://souravhere.github.io/DigitalAgency/sourcimg/header-img.png"
                alt="Logo"
                className="w-72 h-72 mx-auto mt-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 1, delay: 0 }}
              />
            </motion.div>
              <Counter />
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <div>
          <NavComp />
          <Outlet />
          <Footer />
        </div>
      )}
    </>
  );
}

export default Layout;
