import React from 'react';
import { motion } from 'framer-motion';
import TeamSection from './Components/TeamSection';

function AboutUs() {
  return (
    <div className="about-us-section w-full max-w-screen-xl mx-auto py-16 px-4 md:px-8 lg:px-16">
      {/* Section Heading */}
      <motion.h2
        className="text-5xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Us
      </motion.h2>

      {/* About Us Content */}
      <motion.div
        className="about-us-content mb-12 text-center max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        <p className="text-lg leading-relaxed mb-6">
          <strong>Byyte.co</strong> is a cutting-edge digital agency dedicated to delivering exceptional services in <strong>website development</strong>, <strong>graphic design</strong>, <strong>social media management</strong>, and <strong>digital marketing</strong>. We pride ourselves on our ability to create high-quality digital experiences that resonate with your target audience and drive measurable results. Our experienced team of developers, designers, and marketers work together to build solutions that align with your business goals and help you grow your online presence effectively.
        </p>
        <p className="text-lg leading-relaxed">
          Our expertise spans across multiple platforms, including <strong>Instagram</strong>, <strong>LinkedIn</strong>, <strong>X (formerly Twitter)</strong>, and <strong>WhatsApp</strong>. We manage everything from content creation and posting schedules to performance tracking and audience engagement. Whether you’re looking to revamp your social media strategy or launch a new website, Byyte.co is here to make your digital journey successful.
        </p>
      </motion.div>

      {/* Services Overview with Cards */}
      <motion.div
        className="services-overview grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 p-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        <motion.div
          className="service-card bg-indigo-500 shadow-lg rounded-lg p-6 text-white text-center hover:bg-indigo-600 duration-500"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-bold mb-4">Website Development</h3>
          <p className="text-lg leading-relaxed">
            We build responsive and dynamic websites that meet the latest standards in web development. Our focus is on creating websites that are not only visually appealing but also optimized for performance and user experience.
          </p>
        </motion.div>
        <motion.div
          className="service-card bg-indigo-500 shadow-lg rounded-lg p-6 text-white text-center hover:bg-indigo-600 duration-500"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-bold mb-4">Graphic Design</h3>
          <p className="text-lg leading-relaxed">
            Our design team brings your vision to life with stunning graphics, logos, and branding materials that captivate your audience and communicate your message effectively.
          </p>
        </motion.div>
        <motion.div
         className="service-card bg-indigo-500 shadow-lg rounded-lg p-6 text-white text-center hover:bg-indigo-600 duration-500"
         whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-bold mb-4">Social Media Management</h3>
          <p className="text-lg leading-relaxed">
            Byyte.co handles all aspects of social media management, from content creation to daily posting and audience engagement, helping your brand grow on platforms like Instagram, LinkedIn, X, and WhatsApp.
          </p>
        </motion.div>
        <motion.div
          className="service-card bg-indigo-500 shadow-lg rounded-lg p-6 text-white text-center hover:bg-indigo-600 duration-500"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-bold mb-4">Marketing Services</h3>
          <p className="text-lg leading-relaxed">
            We provide tailored marketing strategies that encompass digital advertising, SEO, and content marketing to help you reach your target audience and drive business growth.
          </p>
        </motion.div>
        <motion.div
          className="service-card bg-indigo-500 shadow-lg rounded-lg p-6 text-white text-center hover:bg-indigo-600 duration-500"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-bold mb-4">Content Creation</h3>
          <p className="text-lg leading-relaxed">
            From engaging social media posts to informative blogs, our content creation services help you establish a consistent brand voice and keep your audience engaged across all platforms.
          </p>
        </motion.div>
        <motion.div
          className="service-card bg-indigo-500 shadow-lg rounded-lg p-6 text-white text-center hover:bg-indigo-600 duration-500"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-bold mb-4">Analytics & Reporting</h3>
          <p className="text-lg leading-relaxed">
            We provide detailed analytics and performance reports, so you can track the success of your campaigns and make data-driven decisions to improve your digital strategy.
          </p>
        </motion.div>
      </motion.div>

      {/* Team Section */}
        <TeamSection />

      {/* Our Values Section */}
      <motion.div
        className="our-values mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <h3 className="text-3xl font-bold text-center mb-8">Our Values</h3>
        <p className="text-lg text-center max-w-3xl mx-auto leading-relaxed">
          At <strong>Byyte.co</strong>, we believe in creating long-lasting relationships with our clients. Our core values are <strong>innovation</strong>, <strong>creativity</strong>, and <strong>collaboration</strong>. We are committed to delivering results that exceed expectations, fostering an environment of continuous growth and improvement.
        </p>
      </motion.div>
    </div>
  );
}

export default AboutUs;
