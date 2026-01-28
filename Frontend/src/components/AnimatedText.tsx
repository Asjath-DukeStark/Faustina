
import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  variant?: 'letter' | 'word';
  once?: boolean;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className, variant = 'letter', once = true }) => {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  if (variant === 'letter') {
    return (
      <motion.span
        style={{ display: 'inline-block' }}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once }}
        className={className}
      >
        {Array.from(text).map((letter, index) => (
          <motion.span variants={child} key={index} style={{ display: 'inline-block' }}>
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </motion.span>
    );
  }

  return (
    <motion.span
      style={{ display: 'inline-block' }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span variants={child} key={index} style={{ display: 'inline-block', marginRight: '5px' }}>
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimatedText;
