'use client';

import React from 'react';
import { motion } from 'framer-motion';

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
      {/* Ghost Typography */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-display text-[25vw] leading-none text-mithila-crimson opacity-5 whitespace-nowrap">
          BIHAR
        </span>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <motion.div 
          className="font-display italic text-2xl md:text-3xl lg:text-4xl text-mithila-ivory leading-relaxed md:leading-relaxed"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {words.map((word, index) => {
            // Drop cap styling for the first letter
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
    </section>
  );
}
