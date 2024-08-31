import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Faq() {
  const [activeTab, setActiveTab] = useState('about');
  const [openQuestion, setOpenQuestion] = useState(null);

  const tabs = [
    {
      id: 'about',
      label: 'Website Development',
      content: (
        <div>
          <h2 className="text-xl font-semibold">Website Development FAQs</h2>
          <div className="mt-4">
            <div className={`border rounded-lg ${openQuestion === 'q1' ? 'bg-gray-50' : 'bg-white'} border-gray-300 p-4`} onClick={() => setOpenQuestion(openQuestion === 'q1' ? null : 'q1')}>
              <h3 className="font-medium cursor-pointer">What is website development?</h3>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: openQuestion === 'q1' ? 'auto' : 0, opacity: openQuestion === 'q1' ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mt-2 text-gray-700"
              >
                <p>Website development is the process of creating and maintaining websites. It involves web design, web content development, client-side/server-side scripting, and network security configuration.</p>
              </motion.div>
            </div>
            <div className={`border rounded-lg ${openQuestion === 'q2' ? 'bg-gray-50' : 'bg-white'} border-gray-300 p-4 mt-4`} onClick={() => setOpenQuestion(openQuestion === 'q2' ? null : 'q2')}>
              <h3 className="font-medium cursor-pointer">How long does it take to develop a website?</h3>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: openQuestion === 'q2' ? 'auto' : 0, opacity: openQuestion === 'q2' ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mt-2 text-gray-700"
              >
                <p>The time required for website development varies depending on the complexity and functionality required. On average, a simple website can take 4-6 weeks, while a more complex website may take several months.</p>
              </motion.div>
            </div>
            <div className={`border rounded-lg ${openQuestion === 'q3' ? 'bg-gray-50' : 'bg-white'} border-gray-300 p-4 mt-4`} onClick={() => setOpenQuestion(openQuestion === 'q3' ? null : 'q3')}>
              <h3 className="font-medium cursor-pointer">What are the costs involved in website development?</h3>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: openQuestion === 'q3' ? 'auto' : 0, opacity: openQuestion === 'q3' ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mt-2 text-gray-700"
              >
                <p>Costs can vary widely based on the website's features, design, and complexity. A basic website may cost between $1,000 and $5,000, while more advanced websites with custom features can cost $10,000 or more.</p>
              </motion.div>
            </div>
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
            <div className={`border rounded-lg ${openQuestion === 'q4' ? 'bg-gray-50' : 'bg-white'} border-gray-300 p-4`} onClick={() => setOpenQuestion(openQuestion === 'q4' ? null : 'q4')}>
              <h3 className="font-medium cursor-pointer">What is graphic design?</h3>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: openQuestion === 'q4' ? 'auto' : 0, opacity: openQuestion === 'q4' ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mt-2 text-gray-700"
              >
                <p>Graphic design is the art and practice of planning and projecting ideas and experiences with visual and textual content. It involves creating visual content to communicate messages and solve problems.</p>
              </motion.div>
            </div>
            <div className={`border rounded-lg ${openQuestion === 'q5' ? 'bg-gray-50' : 'bg-white'} border-gray-300 p-4 mt-4`} onClick={() => setOpenQuestion(openQuestion === 'q5' ? null : 'q5')}>
              <h3 className="font-medium cursor-pointer">How important is graphic design for a business?</h3>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: openQuestion === 'q5' ? 'auto' : 0, opacity: openQuestion === 'q5' ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mt-2 text-gray-700"
              >
                <p>Graphic design is crucial for businesses as it helps create a strong brand identity, enhances marketing materials, and attracts customers. Effective design can make a significant impact on a company's image and success.</p>
              </motion.div>
            </div>
            <div className={`border rounded-lg ${openQuestion === 'q6' ? 'bg-gray-50' : 'bg-white'} border-gray-300 p-4 mt-4`} onClick={() => setOpenQuestion(openQuestion === 'q6' ? null : 'q6')}>
              <h3 className="font-medium cursor-pointer">What types of graphic design services are available?</h3>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: openQuestion === 'q6' ? 'auto' : 0, opacity: openQuestion === 'q6' ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mt-2 text-gray-700"
              >
                <p>Graphic design services can include logo design, branding, print design, digital design, and illustration. Each type of service helps to communicate and market a business's message and values.</p>
              </motion.div>
            </div>
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
            <div className={`border rounded-lg ${openQuestion === 'q7' ? 'bg-gray-50' : 'bg-white'} border-gray-300 p-4`} onClick={() => setOpenQuestion(openQuestion === 'q7' ? null : 'q7')}>
              <h3 className="font-medium cursor-pointer">What is social media management?</h3>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: openQuestion === 'q7' ? 'auto' : 0, opacity: openQuestion === 'q7' ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mt-2 text-gray-700"
              >
                <p>Social media management involves creating, scheduling, analyzing, and engaging with content posted on social media platforms. It aims to improve brand awareness, drive engagement, and achieve marketing goals.</p>
              </motion.div>
            </div>
            <div className={`border rounded-lg ${openQuestion === 'q8' ? 'bg-gray-50' : 'bg-white'} border-gray-300 p-4 mt-4`} onClick={() => setOpenQuestion(openQuestion === 'q8' ? null : 'q8')}>
              <h3 className="font-medium cursor-pointer">Why is social media management important?</h3>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: openQuestion === 'q8' ? 'auto' : 0, opacity: openQuestion === 'q8' ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mt-2 text-gray-700"
              >
                <p>Effective social media management is important for building brand awareness, engaging with the audience, driving traffic to your website, and improving customer relations. It helps in maintaining a consistent online presence and achieving business objectives.</p>
              </motion.div>
            </div>
            <div className={`border rounded-lg ${openQuestion === 'q9' ? 'bg-gray-50' : 'bg-white'} border-gray-300 p-4 mt-4`} onClick={() => setOpenQuestion(openQuestion === 'q9' ? null : 'q9')}>
              <h3 className="font-medium cursor-pointer">How often should social media posts be made?</h3>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: openQuestion === 'q9' ? 'auto' : 0, opacity: openQuestion === 'q9' ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mt-2 text-gray-700"
              >
                <p>The frequency of social media posts can vary based on the platform and audience engagement. Generally, it's recommended to post several times a week, but consistency and quality are more important than quantity.</p>
              </motion.div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full sm:flex rounded-lg dark:bg-gray-800 dark:border-gray-700 px-2">
        <div className='sm:w-[30%] w-full sm:text-left sm:px-2 my-4'>
            <h1 className='font-semibold sm:text-4xl py-2 sticky top-0 text-3xl sm:text-left text-center'>Frequently asked questions</h1>
            <p className='font-semibold text-gray-400 mt-2 sm:text-left text-center sm:px-0 px-3'>I’m joking. Nobody asked any questions yet. I came up with them myself.</p>
            {/* <img className='sm:block hidden' src="./our-project-3.png" alt="" /> */}
        </div>
        <div className='sm:w-[70%] w-full'>
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800" role="tablist">
        {tabs.map((tab) => (
          <li key={tab.id} className="me-2">
            <button
              onClick={() => setActiveTab(tab.id)}
              className={`inline-block p-4 ${
                activeTab === tab.id
                  ? 'text-white dark:text-blue-500 bg-indigo-500 dark:bg-gray-800'
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
    </div>
  );
}

export default Faq;
