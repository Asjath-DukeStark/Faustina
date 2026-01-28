
import React from 'react';
import { motion } from 'framer-motion';
import ProfileImage from '@/Sources/profile.png';

const About: React.FC = () => {
  return (
    <section id="about" className="min-h-screen py-32 px-6 md:px-20 bg-cream flex flex-col md:flex-row items-center gap-16">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full md:w-5/12 aspect-[4/5] bg-warm-beige rounded-sm overflow-hidden shadow-2xl relative group"
      >
        <img
          src={ProfileImage}
          alt="Faustina McKenzie"
          className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-1000"
        />
        <div className="absolute inset-0 border-[20px] border-cream/10"></div>
      </motion.div>

      <div className="w-full md:w-7/12 space-y-8">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-brown text-xs uppercase tracking-[0.3em] block"
        >
          The Visionary
        </motion.span>

        <h2 className="text-deep-black font-serif text-4xl md:text-6xl leading-tight">
          Turning ideas into stories <br />
          <span className="italic">people actually stop for.</span>
        </h2>

        <div className="space-y-6 text-deep-black/80 font-sans leading-relaxed text-lg max-w-2xl">
          <p>
            I work at the intersection of storytelling, strategy, and social media growth. My strength lies in creating content that doesn’t just look good, but connects—reels that feel human, campaigns that feel intentional, and narratives that make brands memorable.
          </p>
          <p>
            I’ve worked across B2B and B2C brands, from luxury photography products to service-based businesses, helping them show up online with clarity, consistency, and personality.
          </p>
          <p className="font-serif italic text-muted-brown text-2xl pt-4">
            "If a brand needs someone who understands people before platforms, that’s where I thrive."
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
