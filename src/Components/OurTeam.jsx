import React from 'react';
import { FaCode, FaPaintBrush, FaBullhorn, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
  hover: { scale: 1.05, transition: { duration: 0.3 } }
};

const OurTeam = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 bg-white">
      <h2 className="text-2xl font-bold mb-6">We offer the best experience</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full py-5">
        {[
          {
            title: 'Website Development',
            icon: <FaCode size={30} />,
            description: 'Building responsive and performant websites for your business.',
          },
          {
            title: 'Graphics Designing',
            icon: <FaPaintBrush size={30} />,
            description: 'Creative designs that represent your brand’s identity.',
          },
          {
            title: 'Social Management',
            icon: <FaUsers size={30} />,
            description: 'Managing your social media presence to engage with your audience.',
          },
          {
            title: 'Marketing',
            icon: <FaBullhorn size={30} />,
            description: 'Strategies to boost your brand and reach your target audience.',
          },
        ].map((card, index) => (
          <motion.div
            key={index}
            className="relative sm:mx-0 mx-3 bg-white rounded-lg shadow-lg shadow-indigo-200 p-6 text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover="hover"
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="absolute top-0 right-0 mt-4 mr-4 text-indigo-400 opacity-10 text-7xl">
              {card.icon}
            </div>
            <div className="block items-center mb-4 text-indigo-400">
              <div className="p-2 inline-block rounded-full bg-indigo-100">
                {card.icon}
              </div>
              <h3 className="text-lg font-semibold">{card.title}</h3>
            </div>
            <p className="text-gray-600">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
