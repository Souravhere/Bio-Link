import React from 'react'
import { motion } from 'framer-motion'

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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-indigo-600 leading-tight mb-4">
              Turning innovative ideas into amazing solutions
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Unlocking the Power of Innovation: Transforming Ideas into Extraordinary Solutions
            </p>
            <motion.button 
              className="bg-indigo-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Our Solution
            </motion.button>
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