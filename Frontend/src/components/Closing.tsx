
import React from 'react';
import { motion } from 'framer-motion';
import ClosingImage from '@/Sources/Case 2.jpeg';

const Closing: React.FC = () => {
  return (
    <section id="contact" className="h-screen bg-deep-black flex flex-col items-center justify-center text-center px-6 relative">
      <div className="absolute inset-0 opacity-10">
        <img
          src={ClosingImage}
          alt="Atmosphere"
          className="w-full h-full object-cover object-top grayscale"
        />
      </div>

      <div className="relative z-10 space-y-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="text-cream font-serif text-5xl md:text-7xl lg:text-8xl max-w-4xl leading-tight"
        >
          Let’s build something <br />
          <span className="italic">meaningful</span> together.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 1 }}
          className="space-y-4 pt-12"
        >
          <div className="flex flex-col items-center gap-1">
            <span className="text-soft-tan uppercase tracking-[0.3em] text-xs">Direct Inquiry</span>
            <a href="mailto:mckenziefaustina777@gmail.com" className="text-cream font-serif text-2xl md:text-3xl hover:italic transition-all">
              mckenziefaustina777@gmail.com
            </a>
          </div>

          <div className="flex justify-center gap-8 pt-8">
            <a
              href="https://www.instagram.com/fausty_mck?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/60 hover:text-cream uppercase tracking-widest text-[10px] transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/faustina-mckenzie-434097284"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/60 hover:text-cream uppercase tracking-widest text-[10px] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://www.facebook.com/share/1HBSAD4w2F/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/60 hover:text-cream uppercase tracking-widest text-[10px] transition-colors"
            >
              Facebook
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 text-[10px] uppercase tracking-[0.5em] text-cream/30">
        © 2025 Faustina McKenzie
      </div>
    </section>
  );
};

export default Closing;
