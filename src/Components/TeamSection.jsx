import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';

// Array of team members
const teamMembers = [
  {
    name: 'John Doe',
    role: 'Web Developer',
    image: '/team-1.jpg',
    instagram: 'https://instagram.com/johndoe',
  },
  {
    name: 'Jane Smith',
    role: 'Graphic Designer',
    image: '/team-2.jpg',
    instagram: 'https://instagram.com/janesmith',
  },
  {
    name: 'Alice Johnson',
    role: 'Social Media Manager',
    image: '/path/to/image3.jpg',
    instagram: 'https://instagram.com/alicejohnson',
  },
  {
    name: 'Bob Brown',
    role: 'Marketing Specialist',
    image: '/path/to/image4.jpg',
    instagram: 'https://instagram.com/bobbrown',
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const TeamSection = () => {
  return (
    <section className="py-10 px-5 md:px-10 lg:px-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            transition={{ duration: 0.6, type: 'spring', stiffness: 100, delay: index * 0.2 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out relative group"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-fit h-fit object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-500 mb-4">{member.role}</p>
              <a
                href={member.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 flex justify-center items-center gap-2"
              >
                <FaInstagram className="text-2xl" />
                Instagram
              </a>
            </div>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-lg font-semibold">{member.name}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
