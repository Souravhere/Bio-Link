import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';

// Array of team members
const teamMembers = [
  {
    name: 'John Doe',
    role: 'Web Developer',
    image: '/path/to/image1.jpg',
    instagram: 'https://instagram.com/johndoe',
  },
  {
    name: 'Jane Smith',
    role: 'Graphic Designer',
    image: '/path/to/image2.jpg',
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

const TeamSection = () => {
  return (
    <section className="py-10 px-5 md:px-10 lg:px-20 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-500 mb-4">{member.role}</p>
              <a
                href={member.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline flex items-center"
              >
                <FaInstagram className="mr-2" />
                Instagram
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
