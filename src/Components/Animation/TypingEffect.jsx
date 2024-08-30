import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './typestyle.css'

const words = [
  "Breathtaking Websites",
  "Vivid Posters",
  "Strategic Marketing"
];

const TypingEffect = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const word = words[currentWord];
      if (isDeleting) {
        setText(word.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setCurrentWord((prev) => (prev + 1) % words.length);
        }
      } else {
        setText(word.substring(0, text.length + 1));
        if (text.length === word.length) {
          setIsDeleting(true);
        }
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentWord]);

  return (
    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl overflow-y-hidden">
      Transforming Your Vision with{' '}
      <motion.span
        key={text}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="font-bold text-gradient"
      >
        {text}
      </motion.span>
    </h1>
  );
};

export default TypingEffect;
