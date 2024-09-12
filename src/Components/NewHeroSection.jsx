import React from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

export default function NewHeroSection() {
  return (
    <section className="bg-white min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="lg:w-1/2 lg:pr-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
          className="text-4xl font-bold leading-none mt-2 sm:text-5xl py-2 sm:px-8 px-2"
        >
          Your Vision with
          <span className="text-indigo-600 ml-2">Byyte</span>
        </motion.h1>
        <motion.p
          className="px-8 mt-8 mb-12 text-lg"
          transition={{ delay: 0.2 }}
        >
          At Byyte Digital, we craft visually stunning websites, captivating designs, and data-driven marketing strategies to elevate your brand.
        </motion.p>
        <NavLink to={'contactus'}
        className="px-8"
        >
            <motion.button 
              className="bg-indigo-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Our Solution
            </motion.button>
            </NavLink>
          </motion.div>
          <motion.div 
            className="lg:w-1/2 mt-12 lg:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid grid-cols-3 gap-4">
              {['💻', '🎨', '🔍', '📱', '🚀', '📊', '🌐', '📈', '🤖'].map((emoji, index) => (
                <motion.div 
                  key={index}
                  className="bg-indigo-100 rounded-full w-24 h-24 flex items-center justify-center text-4xl"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {emoji}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div 
          className="mt-12 bg-indigo-50 p-6 rounded-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
            Innovation serves as the driving force behind progress.
          </h2>
          <p className="text-gray-600">
            It empowers us to tackle challenges, discover untapped opportunities, and envision a future filled with possibilities.
          </p>
        </motion.div>
      </div>
    </section>
  )
}