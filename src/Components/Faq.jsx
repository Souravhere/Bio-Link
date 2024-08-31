import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Faq() {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    {
      id: 'about',
      label: 'Website Development',
      content: (
        <div>
          <h2 className="text-xl font-semibold">Website Development FAQs</h2>
          <div className="mt-4">
            <h3 className="font-medium">What is website development?</h3>
            <p className="mt-2 text-gray-700">Website development is the process of creating and maintaining websites. It involves web design, web content development, client-side/server-side scripting, and network security configuration.</p>
          </div>
          <div className="mt-4">
            <h3 className="font-medium">How long does it take to develop a website?</h3>
            <p className="mt-2 text-gray-700">The time required for website development varies depending on the complexity and functionality required. On average, a simple website can take 4-6 weeks, while a more complex website may take several months.</p>
          </div>
          <div className="mt-4">
            <h3 className="font-medium">What are the costs involved in website development?</h3>
            <p className="mt-2 text-gray-700">Costs can vary widely based on the website's features, design, and complexity. A basic website may cost between $1,000 and $5,000, while more advanced websites with custom features can cost $10,000 or more.</p>
          </div>
        </div>
      ),
    },
    {
      id: 'services',
      label: 'Graphic Design',
      content: (
        <div>
          <h2 className="text-xl font-semibold">Graphic Design FAQs</h2>
          <div className="mt-4">
            <h3 className="font-medium">What is graphic design?</h3>
            <p className="mt-2 text-gray-700">Graphic design is the art and practice of planning and projecting ideas and experiences with visual and textual content. It involves creating visual content to communicate messages and solve problems.</p>
          </div>
          <div className="mt-4">
            <h3 className="font-medium">How important is graphic design for a business?</h3>
            <p className="mt-2 text-gray-700">Graphic design is crucial for businesses as it helps create a strong brand identity, enhances marketing materials, and attracts customers. Effective design can make a significant impact on a company's image and success.</p>
          </div>
          <div className="mt-4">
            <h3 className="font-medium">What types of graphic design services are available?</h3>
            <p className="mt-2 text-gray-700">Graphic design services can include logo design, branding, print design, digital design, and illustration. Each type of service helps to communicate and market a business's message and values.</p>
          </div>
        </div>
      ),
    },
    {
      id: 'statistics',
      label: 'Social Media Management',
      content: (
        <div>
          <h2 className="text-xl font-semibold">Social Media Management FAQs</h2>
          <div className="mt-4">
            <h3 className="font-medium">What is social media management?</h3>
            <p className="mt-2 text-gray-700">Social media management involves creating, scheduling, analyzing, and engaging with content posted on social media platforms. It aims to improve brand awareness, drive engagement, and achieve marketing goals.</p>
          </div>
          <div className="mt-4">
            <h3 className="font-medium">Why is social media management important?</h3>
            <p className="mt-2 text-gray-700">Effective social media management is important for building brand awareness, engaging with the audience, driving traffic to your website, and improving customer relations. It helps in maintaining a consistent online presence and achieving business objectives.</p>
          </div>
          <div className="mt-4">
            <h3 className="font-medium">How often should social media posts be made?</h3>
            <p className="mt-2 text-gray-700">The frequency of social media posts can vary based on the platform and audience engagement. Generally, it's recommended to post several times a week, but consistency and quality are more important than quantity.</p>
          </div>
        </div>
      ),
    },
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
