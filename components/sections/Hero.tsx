'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { MithilaWoman } from '../mithila/MithilaWoman';
import { MithilaFox } from '../mithila/MithilaFox';
import { MithilaLotus } from '../mithila/MithilaLotus';
import { MithilaFish } from '../mithila/MithilaFish';
import { MithilaSunFace } from '../mithila/MithilaSunFace';
import { MithilaBorder } from '../mithila/MithilaBorder';

export function Hero() {
  // Set up scroll-linked parallax effect for the hero illustration
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const prefersReducedMotion = useReducedMotion();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  // Define staggered entry animations for text elements on load
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } }
  };

  return (
    <section ref={containerRef} className="relative min-h-screen bg-mithila-ivory pt-20 overflow-hidden flex flex-col lg:flex-row">
      {/* Illustration layer: Parallax wrapper containing the composite Mithila art scene */}
      <motion.div 
        className="w-full lg:w-[60%] h-[60vh] lg:h-auto relative border-b-4 lg:border-b-0 lg:border-r-4 border-mithila-ink"
        style={prefersReducedMotion ? {} : { y }}
      >
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1000 1000">
          <defs>
            <pattern id="dot-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1.5" fill="var(--color-mithila-ochre)" opacity="0.4" />
            </pattern>
            <pattern id="crosshatch" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40 L40 0 M-10 10 L10 -10 M30 50 L50 30" stroke="var(--color-mithila-ink)" strokeWidth="0.5" opacity="0.2" />
              <path d="M0 0 L40 40 M-10 30 L10 50 M30 -10 L50 10" stroke="var(--color-mithila-ink)" strokeWidth="0.5" opacity="0.2" />
            </pattern>
            <pattern id="water-waves" width="60" height="20" patternUnits="userSpaceOnUse">
              <path d="M0 10 Q15 0 30 10 T60 10" fill="none" stroke="var(--color-mithila-sky)" strokeWidth="2" opacity="0.6" />
            </pattern>
          </defs>

          <rect width="1000" height="1000" fill="url(#dot-pattern)" />
          <rect width="1000" height="400" fill="url(#crosshatch)" />

          <MithilaSunFace x="700" y="50" width="200" height="200" drawOn={true} />

          <g transform="translate(-50, -50)">
            <path d="M200 450 Q220 200 200 50 Q230 100 250 50 L250 450" fill="var(--color-mithila-ink)" />
            <path d="M50 200 C0 100, 100 0, 200 50 C300 0, 400 100, 350 200 C400 300, 300 400, 200 350 C100 400, 0 300, 50 200 Z" fill="var(--color-mithila-leaf)" stroke="var(--color-mithila-ink)" strokeWidth="6" />
            {[...Array(15)].map((_, i) => (
              <circle key={`mango-${i}`} cx={100 + (i*87)%200} cy={100 + (i*53)%200} r="15" fill="var(--color-mithila-mango)" stroke="var(--color-mithila-ink)" strokeWidth="3" />
            ))}
          </g>

          <rect y="400" width="1000" height="600" fill="var(--color-mithila-sky)" opacity="0.2" />
          <rect y="400" width="1000" height="600" fill="url(#water-waves)" />

          <MithilaFish x="400" y="420" width="150" height="100" drawOn={true} />
          <MithilaFish x="800" y="600" width="100" height="70" drawOn={true} transform="scale(-1, 1) translate(-1700, 0)" />
          <MithilaLotus x="50" y="450" width="150" height="150" drawOn={true} />
          <MithilaLotus x="400" y="550" width="180" height="180" drawOn={true} />
          <MithilaLotus x="800" y="700" width="200" height="200" drawOn={true} />

          <MithilaWoman x="150" y="300" width="300" height="450" drawOn={true} />
          <MithilaWoman x="550" y="350" width="280" height="420" drawOn={true} transform="scale(-1, 1) translate(-1380, 0)" />

          <MithilaFox x="250" y="750" width="250" height="150" drawOn={true} />
        </svg>
      </motion.div>

      {/* Content layer: Orchestrates staggered entry animations when the hero section mounts */}
      <motion.div 
        className="w-full lg:w-[40%] flex flex-col justify-center p-8 lg:p-16 z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.span variants={textVariants} className="font-accent text-mithila-ochre tracking-[0.2em] text-sm font-bold mb-4 block uppercase">
          Authentic Foxnuts from Bihar
        </motion.span>
        
        <motion.h1 variants={textVariants} className="font-display text-5xl lg:text-7xl text-mithila-ink leading-[1.1] mb-6">
          Where Ancient Lakes Meet Ancient Craft
        </motion.h1>
        
        <motion.p variants={textVariants} className="font-body text-lg lg:text-xl text-mithila-ink/80 leading-relaxed mb-10 max-w-md">
          Hand-harvested from the lotus ponds of Mithila. Roasted over wood fires.
        </motion.p>
        
        <motion.div variants={textVariants} className="flex flex-wrap gap-4 mb-16">
          <button className="bg-mithila-crimson text-mithila-ivory px-8 py-4 font-accent uppercase tracking-wider hover:bg-mithila-ink transition-colors border-2 border-mithila-ink">
            Explore Collection
          </button>
          <button className="bg-transparent text-mithila-ink px-8 py-4 font-accent uppercase tracking-wider hover:bg-mithila-ochre hover:text-mithila-ivory transition-colors border-2 border-mithila-ink">
            Our Story
          </button>
        </motion.div>

        <motion.div variants={textVariants} className="grid grid-cols-2 gap-4">
          <MithilaBorder variant="lotus" containerClassName="w-full" className="p-3 text-center flex items-center justify-center h-full">
            <span className="font-subheading text-sm font-bold">100% Natural</span>
          </MithilaBorder>
          <MithilaBorder variant="peacock" containerClassName="w-full" className="p-3 text-center flex items-center justify-center h-full">
            <span className="font-subheading text-sm font-bold">Bihar GI Heritage</span>
          </MithilaBorder>
        </motion.div>
      </motion.div>
    </section>
  );
}
