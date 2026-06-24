'use client';

import React from 'react';
import { motion } from 'framer-motion';

const gemPattern = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28'%3E%3Crect width='28' height='28' fill='%231C1008'/%3E%3Cpath d='M14 2L26 14L14 26L2 14Z' fill='none' stroke='%23F5EDD6' stroke-width='0.8' opacity='0.25'/%3E%3Cpath d='M14 6Q20 14 14 22Q8 14 14 6Z' fill='%238B1A1A' stroke='%231C1008' stroke-width='1'/%3E%3Ccircle cx='14' cy='14' r='2' fill='%23F5EDD6' opacity='0.12'/%3E%3C/svg%3E")`;

const scallopPattern = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='8'%3E%3Cpath d='M0 8Q4 0 8 8Q12 0 16 8' fill='none' stroke='%23D4A017' stroke-width='1.2'/%3E%3C/svg%3E")`;

export function StorytellingStrip() {
  const text = "We didn't start a snack company. We started a preservation. Of a crop. Of an art. Of a way of life that the lotus ponds of Bihar have held sacred for two thousand years. Every pack of Fourever Makhana is harvested by the same families who painted the walls of their mud homes with the same lotus, the same peacock, the same fish — and we wanted you to see that beauty too.";
  const words = text.split(" ");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.03 }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative py-32 bg-mithila-ink overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-display text-[25vw] leading-none text-mithila-crimson opacity-5 whitespace-nowrap">
          BIHAR
        </span>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Layer 1: Outer thin border */}
        <div className="border border-mithila-ivory/30 p-[3px]">
          {/* Layer 2: Second thin line */}
          <div className="border border-mithila-ivory/15 p-0">
            {/* Layer 3: Gem pattern band */}
            <div className="p-[12px]" style={{ backgroundImage: gemPattern, backgroundSize: '28px 28px' }}>
              {/* Layer 4: Inner border lines */}
              <div className="border border-mithila-ivory/20 p-0">
                {/* Layer 5: Scallop trim */}
                <div className="p-[4px]" style={{ backgroundImage: scallopPattern, backgroundSize: '16px 8px' }}>
                  {/* Layer 6: Innermost gold line */}
                  <div className="border border-mithila-gold/40">
                    {/* Content */}
                    <div className="px-8 py-12 sm:px-12 sm:py-16 lg:px-20 lg:py-20 text-center bg-mithila-ink">
                      <motion.div
                        className="font-display italic text-2xl md:text-3xl lg:text-4xl text-mithila-ivory leading-relaxed md:leading-relaxed"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        {words.map((word, index) => {
                          if (index === 0) {
                            const firstLetter = word.charAt(0);
                            const rest = word.slice(1);
                            return (
                              <span key={index} className="inline-block mr-2">
                                <motion.span variants={wordVariants} className="inline-block float-left text-5xl md:text-7xl font-accent not-italic text-mithila-gold mr-4 mt-2 leading-[0.8] border-2 border-mithila-gold p-2">
                                  {firstLetter}
                                </motion.span>
                                <motion.span variants={wordVariants}>{rest}</motion.span>
                              </span>
                            );
                          }
                          return (
                            <motion.span key={index} variants={wordVariants} className="inline-block mr-[0.25em]">
                              {word}
                            </motion.span>
                          );
                        })}
                      </motion.div>

                      <motion.p
                        className="mt-12 font-body text-xl text-mithila-gold tracking-widest uppercase"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
                        viewport={{ once: true }}
                      >
                        — Pranav and Sapna singh, Fourever, Estb 2026
                      </motion.p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
