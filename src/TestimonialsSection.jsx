import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const clientReviews = [
  { name: "Anaya Sharma", role: "Web Developer", review: "Byyte delivered an outstanding website that exceeded our expectations. Their attention to detail and creativity were unmatched." },
  { name: "Rohan Patel", role: "Graphic Designer", review: "The graphic design work by Byyte was phenomenal. They brought our vision to life with stunning visuals and innovative concepts." },
  { name: "Aisha Khan", role: "Social Media Manager", review: "Byyte's social media management has significantly boosted our online presence. Their strategic approach and engaging content made a huge difference." },
  { name: "Kabir Mehta", role: "E-commerce Business Owner", review: "The e-commerce site Byyte developed for us is user-friendly and visually appealing. It's a pleasure to work with their team." },
  { name: "Maya Singh", role: "Marketing Specialist", review: "Byyte's marketing strategies and website design have helped us reach new heights. Their expertise and dedication are truly commendable." },
  { name: "Aditya Rao", role: "Startup Founder", review: "Fantastic service! Byyte's creative solutions helped our startup stand out from the competition." },
  { name: "Neha Gupta", role: "Digital Marketer", review: "Byyte’s marketing strategies have greatly improved our ROI. Their team is knowledgeable and proactive." },
  { name: "Amit Sharma", role: "Brand Strategist", review: "Byyte's graphic design and branding work has given our company a fresh, modern look that resonates well with our audience." },
  { name: "Sanya Joshi", role: "Content Creator", review: "The website developed by Byyte is not only beautiful but also functional and easy to navigate. Highly recommend their services." },
  { name: "Rajesh Patel", role: "IT Consultant", review: "Byyte's attention to detail and innovative approach have made them our go-to choice for web development and design." },
];

const getRandomRating = () => Math.floor(Math.random() * (5 - 4 + 1)) + 4;

const OurClientsSay = () => {
  const scrollContainerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const rect = scrollContainerRef.current.getBoundingClientRect();
      setIsInView(rect.top < window.innerHeight && rect.bottom >= 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      const container = scrollContainerRef.current;
      const scrollWidth = container.scrollWidth;
      
      const scroll = () => {
        container.scrollLeft += 1;
        if (container.scrollLeft >= scrollWidth / 2) {
          container.scrollLeft = 0;
        }
        requestAnimationFrame(scroll);
      };

      scroll();

      return () => cancelAnimationFrame(scroll);
    }
  }, [isInView]);

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="sm:text-4xl text-2xl font-bold text-indigo-800 mb-10 py-1 text-center">What Our Clients Say</h2>
        <div className="relative overflow-visible">
          <div
            ref={scrollContainerRef}
            className="flex space-x-6"
          >
            {[...clientReviews, ...clientReviews].map((client, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 flex-shrink-0 w-80 cursor-pointer hover:bg-indigo-200 hover:rounded-2xl duration-500"
                whileHover={{ scale: 1 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3 className="text-xl font-semibold mb-2">{client.name}</h3>
                <p className="text-gray-500 mb-4">{client.role}</p>
                <p className="text-gray-700 mb-4">{client.review}</p>
                <div className="flex items-center">
                  {[...Array(getRandomRating())].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                  {[...Array(5 - getRandomRating())].map((_, i) => (
                    <FaStar key={i + getRandomRating()} className="text-gray-300" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClientsSay;
