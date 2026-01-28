
import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import HeroImage from '@/Sources/Case 1.jpeg';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-deep-black">
      {/* Background Video/Image Loop */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src={HeroImage}
          alt="Faustina McKenzie"
          className="w-full h-full object-cover object-top filter brightness-75 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-deep-black/60"></div>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-cream font-serif text-6xl md:text-8xl lg:text-9xl tracking-tight mb-4">
          <AnimatedText text="Faustina McKenzie" />
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.5 }}
          className="text-soft-tan font-sans text-sm md:text-lg uppercase tracking-[0.3em]"
        >
          Social Media Strategist | Content Creator | Visual Storyteller
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-soft-tan to-transparent"></div>
        <span className="text-soft-tan text-[10px] uppercase tracking-widest">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
