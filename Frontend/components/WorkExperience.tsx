
import React from 'react';
import { motion } from 'framer-motion';
import { CASE_STUDIES } from '../constants';
import Counter from './Counter';

const WorkExperience: React.FC = () => {
  return (
    <section id="works" className="py-24 bg-cream overflow-hidden">
      <div className="px-6 md:px-20 mb-16">
        <h2 className="text-deep-black font-serif text-5xl md:text-6xl text-center">Selected Works</h2>
      </div>

      <div className="space-y-32">
        {CASE_STUDIES.map((study, index) => (
          <div key={study.id} className="container mx-auto px-6 md:px-20">
            <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
              {/* Image Reveal */}
              <motion.div
                initial={{ clipPath: 'inset(0 100% 0 0)' }}
                whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
                className="w-full lg:w-3/5 relative overflow-hidden rounded-sm bg-deep-black/5"
              >
                <motion.img
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5 }}
                  src={study.image}
                  alt={study.title}
                  className="w-full h-auto block"
                />
                <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md px-3 py-1 border border-white/20">
                  <span className="text-white text-[10px] uppercase tracking-widest">{study.location}</span>
                </div>
              </motion.div>

              {/* Text Content */}
              <div className="w-full lg:w-2/5 space-y-8">
                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="text-muted-brown font-sans text-xs uppercase tracking-[0.25em]">{study.timeline}</span>
                    <span className="text-deep-black/30 font-serif text-lg italic">#{study.id}</span>
                  </div>
                  <h3 className="text-deep-black font-serif text-3xl md:text-4xl">{study.title}</h3>
                  <p className="text-muted-brown font-serif italic text-lg">{study.role}</p>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <span className="text-deep-black font-semibold text-xs uppercase tracking-widest opacity-60">Goal</span>
                    <p className="text-deep-black/70 text-sm leading-relaxed">{study.goal}</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="space-y-2"
                  >
                    <span className="text-deep-black font-semibold text-xs uppercase tracking-widest opacity-60">Strategy</span>
                    <p className="text-deep-black/70 text-sm leading-relaxed">{study.strategy}</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="space-y-2"
                  >
                    <span className="text-deep-black font-semibold text-xs uppercase tracking-widest opacity-60">Impact</span>
                    <div className="flex items-baseline gap-2">
                      <Counter
                        end={study.metric}
                        suffix={study.metricLabel.includes('%') ? '%' : '+'}
                        className="text-muted-brown text-4xl font-serif font-bold"
                      />
                      <span className="text-deep-black/60 text-[10px] uppercase tracking-widest">{study.metricLabel}</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
