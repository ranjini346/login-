import React from 'react';
import { motion, MotionProps } from 'framer-motion';

interface FloatingBlobProps {
  className?: string;
  delay?: number;
  colorClass: string;
}

const FloatingBlob: React.FC<FloatingBlobProps> = ({ className = '', delay = 0, colorClass }) => {
  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: [0.4, 0.6, 0.4],
        y: [0, -20, 0],
        x: [0, 10, 0],
        scale: [1, 1.05, 1]
      }}
      transition={{ 
        duration: 8, 
        delay: delay,
        repeat: Infinity, 
        ease: 'easeInOut' 
      }}
      className={`absolute rounded-full mix-blend-multiply filter blur-3xl opacity-70 ${colorClass} ${className}`}
    />
  );
};

export default FloatingBlob;