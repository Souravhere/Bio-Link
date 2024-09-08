// src/components/WhyDifferent.jsx
import React from "react";
import { motion } from "framer-motion";

const WhyDifferent = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="sm:text-4xl text-2xl font-bold text-indigo-800 mb-10 py-1">Why We Are Different?</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:px-4 px-3"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="bg-white p-6 rounded-lg border">
            <h3 className="text-xl font-semibold text-indigo-700 mb-4">Other Agencies</h3>
            <ul className="text-left space-y-3 text-gray-600">
              <li className="flex items-center">
                <span className="text-red-500 mr-2">✘</span> Outdated growth strategies
              </li>
              <li className="flex items-center">
                <span className="text-red-500 mr-2">✘</span> Delayed project delivery
              </li>
              <li className="flex items-center">
                <span className="text-red-500 mr-2">✘</span> Generic content
              </li>
              <li className="flex items-center">
                <span className="text-red-500 mr-2">✘</span> Slow communication
              </li>
              <li className="flex items-center">
                <span className="text-red-500 mr-2">✘</span> Limited industry experience
              </li>
            </ul>
          </div>
          <div className="bg-indigo-100 p-6 rounded-lg border">
            <h3 className="text-xl font-semibold text-indigo-900 mb-4">Byyte Digital</h3>
            <ul className="text-left space-y-3 text-indigo-900">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span> Up-to-date with latest strategies
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span> On-time project delivery
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span> Unique and creative content
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span> Fast client support
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span> 2+ years of experience
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyDifferent;
