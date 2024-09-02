import { motion } from 'framer-motion';
import StaggeredText from './Animation/StaggeredText';
import { NavLink } from 'react-router-dom';

const typingEffect = {
  hidden: {
    width: 0,
    opacity: 0,
  },
  visible: {
    width: "100%",
    opacity: 1,
    transition: {
      width: { duration: 2, ease: "easeOut" },
      opacity: { duration: 1, ease: "easeOut" },
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

export default function Herosection() {
  return (
    <>
      <div className='flex items-center justify-center bg-white'>
        <div className="mx-auto max-w-2xl py-32 h-screen overflow-hidden">
          <div className='w-full'>
          </div>
          <div className="text-center">
            <motion.h1 
              className="text-center py-4 sm:text-5xl sm:font-bold font-semibold text-4xl text-black inline-block relative overflow-hidden"
              initial="hidden"
              animate="visible"
              variants={typingEffect}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              <motion.span 
                initial={{ x: -50, opacity: 0 }} 
                animate={{ x: 0, opacity: 1 }} 
                transition={{ duration: 1.5, ease: "easeOut" }}
              >
                Your Vision with Byyte
              </motion.span>
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-indigo-500"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </motion.h1>
            <motion.p 
              className="mt-6 leading-4 sm:w-[500px] text-center sm:px-0 p-4 mx-auto text-gray-600 text-sm"
              initial="hidden" 
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            >
              At Byyte.co, we craft visually stunning websites, captivating designs, and data-driven marketing strategies to elevate your brand.
            </motion.p>
            <motion.div 
              className="sm:mt-5 mt-10 sm:flex block items-center justify-center gap-x-6 sm:px-0 px-6"
              initial="hidden" 
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            >
              
                <NavLink to='Contactus'>
                <motion.div
                  className='sm:hidden font-semibold bg-indigo-500 p-4 sm:my-0 my-3'
                  whileHover={{ scale: 1.05, backgroundColor: "#4b5d69" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <StaggeredText text="Contact Us" hoverColor="white" baseColor="white" className='font-semibold text-base'/>
                </motion.div>
                </NavLink>
              <a href="/Byyte-Project-Workflow.pdf" target='blank' className="text-sm font-semibold leading-6 text-gray-900">
                <motion.div
                  className='font-semibold bg-white p-4'
                  whileHover={{ scale: 1.05, backgroundColor: "#f1f1f1" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <StaggeredText text="Learn More →" hoverColor="gray" baseColor="black" className='font-semibold text-base'/>
                </motion.div>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
