
import React from 'react';
import { motion } from 'framer-motion';
import ShowreelVideo from '@/Sources/video.mp4';

const Showreel: React.FC = () => {
  return (
    <section className="py-24 bg-deep-black text-cream">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Showreel Video Container */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-3/5 aspect-video bg-warm-beige/5 rounded-sm overflow-hidden relative group"
          >
            <video
              src={ShowreelVideo}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[2s]"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-20 h-20 rounded-full border border-cream/30 flex items-center justify-center cursor-pointer bg-white/5 backdrop-blur-md"
              >
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-cream border-b-[10px] border-b-transparent ml-2"></div>
              </motion.div>
            </div>
          </motion.div>

          {/* Kinetic Typography Info */}
          <div className="w-full lg:w-2/5">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
              On-Camera <br />
              <span className="italic">Persona & Voice</span>
            </h2>
            <div className="space-y-6">
              <p className="text-soft-tan/80 leading-relaxed font-sans font-light">
                High-converting content isn't just about visuals; it's about authentic presence. I specialize in on-camera hosting and professional voice-over narration that builds trust instantly.
              </p>

              {/* Animated Word Highlight */}
              <div className="flex flex-wrap gap-x-3 gap-y-2">
                {['Direct', 'Engaging', 'Confident', 'Warm', 'Trustworthy'].map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="px-4 py-2 border border-muted-brown/30 text-xs uppercase tracking-widest text-muted-brown rounded-full"
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showreel;
