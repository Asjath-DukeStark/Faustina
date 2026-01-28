
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-warm-beige">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-deep-black font-serif text-5xl mb-4"
          >
            Capabilities
          </motion.h2>
          <div className="w-12 h-1 bg-muted-brown mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-cream border border-soft-tan rounded-sm shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-end mb-4">
                <h3 className="text-deep-black font-serif text-xl font-semibold">
                  {skill.name}
                </h3>
                <span className="text-muted-brown font-sans text-sm font-medium">
                  {skill.percentage}%
                </span>
              </div>
              <p className="text-deep-black/60 text-sm font-sans mb-6">
                {skill.description}
              </p>
              <div className="w-full h-1 bg-soft-tan relative overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="absolute left-0 top-0 h-full bg-muted-brown"
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
