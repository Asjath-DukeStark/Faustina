
import React from 'react';
import { motion } from 'framer-motion';
import Counter from './Counter';
import Stats1 from '@/Sources/Stats 1.jpeg';
import Stats4 from '@/Sources/Stats 4.jpeg';
import Stats5 from '@/Sources/Stats 5.jpeg';
import StatsMain from '@/Sources/Stats.jpeg';

const GrowthSection: React.FC = () => {
  return (
    <section className="py-32 bg-deep-black text-cream relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-muted-brown to-transparent opacity-30"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-brown uppercase tracking-[0.4em] text-[10px] mb-6 block"
        >
          Impact & Scale
        </motion.span>

        <h2 className="text-4xl md:text-6xl font-serif mb-20 max-w-3xl mx-auto leading-tight">
          Quantifying the <span className="italic">Creative Spark</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          <div className="space-y-4">
            <Counter end={2500000} suffix="+" className="text-6xl md:text-7xl font-serif text-muted-brown" />
            <p className="text-soft-tan uppercase tracking-widest text-xs">Total Impressions</p>
          </div>
          <div className="space-y-4">
            <Counter end={85} suffix="%" className="text-6xl md:text-7xl font-serif text-muted-brown" />
            <p className="text-soft-tan uppercase tracking-widest text-xs">Engagement Increase</p>
          </div>
          <div className="space-y-4">
            <Counter end={50000} suffix="+" className="text-6xl md:text-7xl font-serif text-muted-brown" />
            <p className="text-soft-tan uppercase tracking-widest text-xs">Community Growth</p>
          </div>
        </div>

        {/* Floating Mockup Cards */}
        <div className="mt-32 flex flex-wrap justify-center gap-8">
          {[Stats1, Stats4, Stats5, StatsMain].map((img, i) => (
            <motion.div
              key={i}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i + 1) * 0.2, duration: 1 }}
              whileHover={{ scale: 1.05 }}
              className="w-64 h-80 bg-warm-beige/10 border border-cream/10 rounded-lg overflow-hidden backdrop-blur-sm"
            >
              <img src={img} alt="Mockup" className="w-full h-full object-cover opacity-80" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GrowthSection;
