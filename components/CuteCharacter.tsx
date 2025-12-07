import React from 'react';
import { motion } from 'framer-motion';

const CuteCharacter: React.FC = () => {
  return (
    <motion.svg
      width="180"
      height="180"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      initial={{ scale: 0.8, rotate: -5 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      {/* Background Circle */}
      <circle cx="60" cy="60" r="50" fill="#fff7fb" stroke="#ffd6e8" strokeWidth="2" />
      
      {/* Eyes - Blinking Animation */}
      <motion.circle 
        cx="42" cy="50" r="6" fill="#292524" 
        animate={{ scaleY: [1, 0.1, 1] }}
        transition={{ repeat: Infinity, duration: 4, repeatDelay: 2 }}
      />
      <motion.circle 
        cx="78" cy="50" r="6" fill="#292524" 
        animate={{ scaleY: [1, 0.1, 1] }}
        transition={{ repeat: Infinity, duration: 4, repeatDelay: 2 }}
      />
      
      {/* Cheeks */}
      <circle cx="35" cy="62" r="5" fill="#fbcfe8" opacity="0.6" />
      <circle cx="85" cy="62" r="5" fill="#fbcfe8" opacity="0.6" />

      {/* Smile */}
      <motion.path 
        d="M42 74c6 6 30 6 36 0" 
        stroke="#ec4899" 
        strokeWidth="3" 
        strokeLinecap="round" 
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      
      {/* Decorative body/shirt */}
      <rect x="34" y="82" width="52" height="12" rx="6" fill="#ffe6f1" />
    </motion.svg>
  );
};

export default CuteCharacter;