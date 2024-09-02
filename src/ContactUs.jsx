import React, { useState } from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
};

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const handleWhatsAppSubmit = () => {
    const whatsappUrl = `https://wa.me/917426968980?text=Name:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0ADescription:%20${encodeURIComponent(description)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="px-4 py-16 max-w-5xl mx-auto">
      <motion.div
        className="text-center mb-8"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-600">We’d love to hear from you! Reach out to us via email, WhatsApp, or give us a call.</p>
      </motion.div>

      <motion.div
        className="bg-gray-100 p-6 rounded-lg shadow-lg mb-8"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
        <p className="mb-2"><strong>Email:</strong> <a href="mailto:Byyteco@gmail.com" className="text-blue-500">Byyteco@gmail.com</a></p>
        <p className="mb-2"><strong>Phone:</strong> <a href="tel:+917426968980" className="text-blue-500">+91 74269 68980</a></p>
        
        <a
          href="mailto:Byyteco@gmail.com?subject=Inquiry&body=Hello, I have an inquiry regarding your services."
          className="inline-block w-full text-center bg-indigo-500 text-white px-4 py-2 rounded-lg mt-4"
        >
          Email Us
        </a>
      </motion.div>

      <motion.div
        className="bg-gray-100 p-6 rounded-lg shadow-lg"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h2 className="text-xl font-semibold mb-4">WhatsApp Contact Form</h2>
        <p className="mb-4">Fill out the form below and we will get back to you on WhatsApp.</p>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 border rounded-lg"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Description"
            className="w-full px-4 py-2 border rounded-lg"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button
            onClick={handleWhatsAppSubmit}
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
          >
            Send via WhatsApp
          </button>
        </div>
      </motion.div>

      <motion.div
        className="text-center mt-8"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <a
          href="tel:+917426968980"
          className="inline-block sm:hidden w-full bg-indigo-500 text-white px-4 py-2 rounded-lg"
        >
          Call Us
        </a>
      </motion.div>
    </div>
  );
};

export default ContactUs;
