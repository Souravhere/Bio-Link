import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaTwitter, FaFacebook, FaGithub } from 'react-icons/fa';

const TeamSection = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <motion.div
          className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Our Team
          </h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind
          </p>
        </motion.div>

        <motion.div
          className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Team Member 1 */}
          <motion.div
            className="items-center bg-indigo-500 text-white rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700 p-2"
            variants={cardVariants}
          >
              <img
                className="sm:w-56 sm:h-full rounded-lg"
                src="/team-3.jpg"
                alt="Vansh Chaturvedi"
              />
            <div className="p-3 py-2">
              <h3 className="text-xl font-bold tracking-tight  dark:text-white">
                <a href="#">Vansh Chaturvedi</a>
              </h3>
              <span className=" dark:text-gray-400">Founder / Management</span>
              <p className="mt-3 mb-4 font-light  dark:text-gray-400">
                Bonnie drives the technical strategy of the flowbite platform and brand.
              </p>
            </div>
          </motion.div>

          {/* Team Member 2 */}
          <motion.div
            className="items-center bg-indigo-500 text-white rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700 p-2"
            variants={cardVariants}
          >
              <img
                className="sm:w-56 sm:h-full rounded-lg"
                src="/team-4.jpg"
                alt="Sourav Chhimpa"
              />
            <div className="p-3 py-2">
              <h3 className="text-xl font-bold tracking-tight  dark:text-white">
                <a href="#">Sourav Chhimpa</a>
              </h3>
              <span className=" dark:text-gray-400">Co Founder / UIX</span>
              <p className="mt-3 mb-4 font-light  dark:text-gray-400">
                Bonnie drives the technical strategy of the flowbite platform and brand.
              </p>
            </div>
          </motion.div>
          {/* team 3 */}
          <motion.div
            className="items-center bg-indigo-500 text-white rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700 p-2"
            variants={cardVariants}
          >
              <img
                className="sm:w-56 sm:h-full rounded-lg"
                src="/team-5.jpg"
                alt="Ruchika Jangid"
              />
            <div className="p-3 py-2">
              <h3 className="text-xl font-bold tracking-tight  dark:text-white">
                <a href="#">Ruchika Jangid</a>
              </h3>
              <span className=" dark:text-gray-400">Community Manager</span>
              <p className="mt-3 mb-4 font-light  dark:text-gray-400">
                Bonnie drives the technical strategy of the flowbite platform and brand.
              </p>
            </div>
          </motion.div>
          {/* team 4 */}
          <motion.div
            className="items-center bg-indigo-500 text-white rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700 p-2"
            variants={cardVariants}
          >
              <img
                className="sm:w-56 sm:h-full rounded-lg"
                src="/team-2.jpg"
                alt="Prashank Panday"
              />
            <div className="p-3 py-2">
              <h3 className="text-xl font-bold tracking-tight  dark:text-white">
                <a href="#">Prashank Panday</a>
              </h3>
              <span className=" dark:text-gray-400">Influencer Marketing Coordinator</span>
              <p className="mt-3 mb-4 font-light  dark:text-gray-400">
                Bonnie drives the technical strategy of the flowbite platform and brand.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
