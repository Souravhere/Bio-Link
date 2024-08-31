import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Faq() {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', label: 'About', content: <h1>Hello from About</h1> },
    { id: 'services', label: 'Services', content: <h1>Hello from Services</h1> },
    { id: 'statistics', label: 'Facts', content: <h1>Hello from Facts</h1> },
  ];

  return (
    <>
      <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800" role="tablist">
          {tabs.map((tab) => (
            <li key={tab.id} className="me-2">
              <button
                onClick={() => setActiveTab(tab.id)}
                className={`inline-block p-4 ${
                  activeTab === tab.id
                    ? 'text-blue-600 dark:text-blue-500 bg-gray-100 dark:bg-gray-800'
                    : 'hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300'
                } rounded-ss-lg`}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>

        <div id="defaultTabContent" className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800">
          {tabs.map((tab) => (
            <motion.div
              key={tab.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: activeTab === tab.id ? 1 : 0, y: activeTab === tab.id ? 0 : 10 }}
              transition={{ duration: 0.5 }}
              className={`${activeTab === tab.id ? 'block' : 'hidden'}`}
            >
              {tab.content}
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Faq;
