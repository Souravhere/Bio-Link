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
    const duration = 2000; // Duration adjusted to 3 seconds
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
      <span className="text-7xl font-bold text-indigo-500">{count + `%`}</span>
    </motion.div>
  );
};

function Layout() {
  // useSmoothScroll();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200); 
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
              <motion.div
                className="w-48 h-48 mx-auto mt-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 1, delay: 0 }}
              >
                <svg
                  width="192"
                  height="192"
                  viewBox="0 0 438 689"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <motion.path
                    d="M163 415.5L1 507V136.5L225 1L437.5 123.5V272.5L316.5 343L437.5 415.5V583.5L225 688L80.5 601L274 483V220.5L163 156V415.5Z"
                    stroke="#5C00BE"
                    strokeWidth="4"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2 }}
                  />
                  <motion.path
                    d="M163 415.5L1 507V136.5L225 1L437.5 123.5V272.5L316.5 343L437.5 415.5V583.5L225 688L80.5 601L274 483V220.5L163 156V415.5Z"
                    fill="#5C00BE"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                  />
                </svg>
              </motion.div>
            </motion.div>
            {/* <Counter /> */}
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
