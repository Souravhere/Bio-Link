import React from 'react';
import { motion } from 'framer-motion';

const servicesData = [
  {
    title: 'Website Development',
    description:
      'We create visually stunning and highly functional websites that are responsive, user-friendly, and optimized for performance.',
    imageUrl: 'https://i.pinimg.com/564x/38/af/53/38af53e57ea441e8754f842149bbfc72.jpg',
  },
  {
    title: 'Graphic Design',
    description:
      'Our team designs captivating visuals, from logos to marketing materials, ensuring your brand stands out in the crowd.',
    imageUrl: 'https://i.pinimg.com/564x/38/af/53/38af53e57ea441e8754f842149bbfc72.jpg',
  },
  {
    title: 'Social Media Management',
    description:
      'We manage your social media presence with regular content creation, posting, and audience engagement on platforms like Instagram, LinkedIn, and X.',
    imageUrl: 'https://i.pinimg.com/564x/38/af/53/38af53e57ea441e8754f842149bbfc72.jpg',
  },
  {
    title: 'Digital Marketing',
    description:
      'We provide tailored marketing strategies that drive traffic, engagement, and conversions, helping your business grow online.',
    imageUrl: 'https://i.pinimg.com/564x/38/af/53/38af53e57ea441e8754f842149bbfc72.jpg',
  },
  {
    title: 'Content Creation',
    description:
      'From blog posts to social media updates, we create content that resonates with your audience and enhances your brand’s presence.',
    imageUrl: 'https://i.pinimg.com/564x/38/af/53/38af53e57ea441e8754f842149bbfc72.jpg',
  },
  {
    title: 'SEO & Analytics',
    description:
      'We optimize your website for search engines and provide data-driven insights to improve your digital strategies.',
    imageUrl: 'https://i.pinimg.com/564x/38/af/53/38af53e57ea441e8754f842149bbfc72.jpg',
  },
];

function Services() {
  return (
    <div className="services-section py-16 px-4 md:px-8 lg:px-16">
      {/* Section Heading */}
      <motion.h2
        className="text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Services
      </motion.h2>

      {/* Introductory Paragraph */}
      <motion.div
        className="intro-paragraph max-w-4xl mx-auto text-center mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        <p className="text-lg leading-relaxed">
          At <strong>Byyte</strong>, we take pride in offering a wide range of digital services designed to help your business thrive in today's competitive landscape. From crafting stunning websites and engaging graphics to driving measurable success through social media management and marketing, our expert team has the skills to elevate your brand’s online presence.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Our approach is simple yet effective: we focus on understanding your unique needs and creating tailored solutions that align with your goals. Our services are backed by data, creativity, and a commitment to delivering outstanding results.
        </p>
      </motion.div>

      {/* Service Process Section */}
      <motion.div
        className="service-process mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <h3 className="text-4xl font-bold text-center mb-8">Our Service Process</h3>
        <div className="process-steps grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            className="process-step bg-gray-100 shadow-lg rounded-lg p-6 text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="text-2xl font-bold mb-4">1. Discovery & Planning</h4>
            <p className="text-lg">
              We start by understanding your business, goals, and target audience. We then create a strategic plan tailored to your unique needs.
            </p>
          </motion.div>

          <motion.div
            className="process-step bg-gray-100 shadow-lg rounded-lg p-6 text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="text-2xl font-bold mb-4">2. Design & Development</h4>
            <p className="text-lg">
              Our team gets to work designing and developing your solution, ensuring it’s visually appealing, user-friendly, and optimized for performance.
            </p>
          </motion.div>

          <motion.div
            className="process-step bg-gray-100 shadow-lg rounded-lg p-6 text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="text-2xl font-bold mb-4">3. Launch & Optimization</h4>
            <p className="text-lg">
              After testing and refining, we launch your solution and continuously optimize it based on performance data and user feedback.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Service Cards */}
      <motion.div
        className="services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 p-3 text-white "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            className="service-card bg-indigo-500 shadow-lg rounded-lg overflow-hidden hover:bg-indigo-600 "
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {/* Image */}
            <img
              src={service.imageUrl}
              alt={service.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-lg leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="cta-section bg-indigo-600 text-white py-12 text-center rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h3 className="text-4xl font-bold mb-4">Ready to take your business to the next level?</h3>
        <p className="text-lg leading-relaxed mb-8">
          Contact us today to learn how Byyte can help you achieve your digital goals. Whether you’re looking to revamp your website, launch a new marketing campaign, or boost your social media presence, we have the expertise to make it happen.
        </p>
        <a href="/contact" className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-lg hover:bg-indigo-100 transition duration-300">
          Get in Touch
        </a>
      </motion.div>
    </div>
  );
}

export default Services;
