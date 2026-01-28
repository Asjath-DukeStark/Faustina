
import React from 'react';
import { motion } from 'framer-motion';
import { GALLERY_ITEMS } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-cream">
      <div className="mb-16">
        <h2 className="text-deep-black font-serif text-5xl">Creative Lab</h2>
        <p className="text-muted-brown font-sans uppercase tracking-widest text-xs mt-2">Design • Photography • Cinema</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {GALLERY_ITEMS.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            className="group relative aspect-[3/4] overflow-hidden bg-warm-beige cursor-pointer"
          >
            {item.type === 'video' ? (
              <video
                src={item.imageUrl}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <motion.img
                src={item.imageUrl}
                alt={item.title}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-deep-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              <span className="text-cream/70 text-[10px] uppercase tracking-widest mb-1">{item.type}</span>
              <h4 className="text-cream font-serif text-2xl">{item.title}</h4>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
