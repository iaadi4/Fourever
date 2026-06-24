'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MithilaWoman } from '../mithila/MithilaWoman';
import { MithilaBorder } from '../mithila/MithilaBorder';

export function Heritage() {
  const prefersReducedMotion = useReducedMotion();

  const wipeVariants = {
    hidden: { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
    visible: { 
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      transition: { duration: 1.2, ease: "easeInOut" as const }
    }
  };

  const staggerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="heritage" className="bg-mithila-crimson text-mithila-ivory py-24 border-y-4 border-mithila-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Mithila Art Panel */}
        <motion.div 
          className="w-full flex flex-col gap-4"
          variants={staggerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Panel A: Harvesting */}
          <motion.div variants={prefersReducedMotion ? itemVariants : wipeVariants} className="relative h-[250px] bg-mithila-ivory border-4 border-mithila-ink overflow-hidden flex items-center justify-center">
            {/* Geometric Divider Top */}
            <div className="absolute top-0 w-full h-4 bg-mithila-ochre border-b-2 border-mithila-ink flex items-center justify-around overflow-hidden">
              {[...Array(10)].map((_, i) => <div key={i} className="w-2 h-2 bg-mithila-ink rotate-45"></div>)}
            </div>
            
            <svg viewBox="0 0 400 200" className="w-full h-full absolute inset-0">
              <rect y="120" width="400" height="80" fill="var(--color-mithila-sky)" opacity="0.4" />
              <MithilaWoman x="50" y="50" width="100" height="150" />
              <MithilaWoman x="250" y="50" width="100" height="150" transform="scale(-1, 1) translate(-600, 0)" />
              <circle cx="200" cy="80" r="30" fill="var(--color-mithila-lotus)" stroke="var(--color-mithila-ink)" strokeWidth="2" />
            </svg>

            {/* Geometric Divider Bottom */}
            <div className="absolute bottom-0 w-full h-4 bg-mithila-ochre border-t-2 border-mithila-ink flex items-center justify-around overflow-hidden">
              {[...Array(10)].map((_, i) => <div key={i} className="w-2 h-2 bg-mithila-ink rotate-45"></div>)}
            </div>
          </motion.div>

          {/* Panel B: Roasting */}
          <motion.div variants={prefersReducedMotion ? itemVariants : wipeVariants} className="relative h-[250px] bg-mithila-ivory border-4 border-mithila-ink overflow-hidden flex items-center justify-center">
            <svg viewBox="0 0 400 200" className="w-full h-full absolute inset-0">
              {/* Fire */}
              <path d="M180 150 Q200 100 220 150 Z" fill="var(--color-mithila-crimson)" stroke="var(--color-mithila-ink)" strokeWidth="2" />
              <path d="M190 150 Q200 120 210 150 Z" fill="var(--color-mithila-mango)" stroke="var(--color-mithila-ink)" strokeWidth="2" />
              {/* Clay Pot */}
              <path d="M170 120 C170 160, 230 160, 230 120 L210 100 L190 100 Z" fill="var(--color-mithila-ochre)" stroke="var(--color-mithila-ink)" strokeWidth="2" />
              <MithilaWoman x="80" y="50" width="100" height="150" />
            </svg>
            <div className="absolute bottom-0 w-full h-4 bg-mithila-ochre border-t-2 border-mithila-ink flex items-center justify-around overflow-hidden">
              {[...Array(10)].map((_, i) => <div key={i} className="w-2 h-2 bg-mithila-ink rotate-45"></div>)}
            </div>
          </motion.div>

          {/* Panel C: Family */}
          <motion.div variants={prefersReducedMotion ? itemVariants : wipeVariants} className="relative h-[250px] bg-mithila-ivory border-4 border-mithila-ink overflow-hidden flex items-center justify-center">
            <svg viewBox="0 0 400 200" className="w-full h-full absolute inset-0">
              <path d="M150 150 C150 100, 250 100, 250 150 Z" fill="var(--color-mithila-sapphire)" stroke="var(--color-mithila-ink)" strokeWidth="2" />
              {/* Figures eating */}
              <circle cx="170" cy="110" r="20" fill="var(--color-mithila-ochre)" stroke="var(--color-mithila-ink)" strokeWidth="2" />
              <circle cx="230" cy="110" r="20" fill="var(--color-mithila-ochre)" stroke="var(--color-mithila-ink)" strokeWidth="2" />
              <circle cx="200" cy="160" r="25" fill="var(--color-mithila-gold)" stroke="var(--color-mithila-ink)" strokeWidth="2" />
            </svg>
          </motion.div>

        </motion.div>

        {/* Right: Heritage Copy */}
        <motion.div 
          className="flex flex-col justify-center"
          variants={staggerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.blockquote variants={itemVariants} className="font-display italic text-4xl lg:text-5xl leading-tight text-mithila-ivory mb-6">
            "मखाना केवल एक स्नैक नहीं है — यह मिथिला की आत्मा है।"
          </motion.blockquote>
          <motion.p variants={itemVariants} className="font-body text-xl text-mithila-gold mb-16">
            — A Mithila Farmer, Bihar
          </motion.p>

          {/* Timeline */}
          <motion.div variants={itemVariants} className="relative flex justify-between items-center mb-16">
            {/* Lotus Vine SVG Line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-mithila-ink/30 -translate-y-1/2 pointer-events-none">
              <svg className="w-full h-[20px] absolute top-1/2 -translate-y-1/2" preserveAspectRatio="none">
                <path d="M0 10 Q25 0 50 10 T100 10 T150 10 T200 10 T250 10 T300 10 T350 10 T400 10 T450 10 T500 10" fill="none" stroke="var(--color-mithila-gold)" strokeWidth="2" />
              </svg>
            </div>

            <div className="relative z-10 flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-mithila-ink border-2 border-mithila-gold flex items-center justify-center text-mithila-ivory font-accent text-xs p-2 text-center">Harvest</div>
            </div>
            <div className="relative z-10 flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-mithila-ink border-2 border-mithila-gold flex items-center justify-center text-mithila-ivory font-accent text-xs p-2 text-center">Roast</div>
            </div>
            <div className="relative z-10 flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-mithila-ink border-2 border-mithila-gold flex items-center justify-center text-mithila-ivory font-accent text-xs p-2 text-center">Pack</div>
            </div>
          </motion.div>

          {/* Badges */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-8">
            <div className="bg-mithila-ink text-mithila-gold px-4 py-2 border-2 border-mithila-gold font-accent text-sm tracking-wider uppercase">
              GI Protected Ingredient
            </div>
            <div className="bg-mithila-ink text-mithila-gold px-4 py-2 border-2 border-mithila-gold font-accent text-sm tracking-wider uppercase">
              Women-Led Cooperative
            </div>
            <div className="bg-mithila-ink text-mithila-gold px-4 py-2 border-2 border-mithila-gold font-accent text-sm tracking-wider uppercase">
              Zero Preservatives
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
