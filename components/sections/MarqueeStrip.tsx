'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MithilaFish } from '../mithila/MithilaFish';
import { MithilaLotus } from '../mithila/MithilaLotus';

export function MarqueeStrip() {
  const prefersReducedMotion = useReducedMotion();
  const categories = [
    "Classic Roasted Makhana", 
    "Himalayan Salt", 
    "Turmeric & Black Pepper", 
    "Chaat Masala", 
    "Rose Cardamom", 
    "Assorted Nut Mix", 
    "Premium Gift Boxes"
  ];
  
  // Create a continuous array by repeating categories
  const items = [...categories, ...categories, ...categories];

  return (
    <div className="w-full bg-mithila-crimson text-mithila-ivory overflow-hidden py-6 border-y-4 border-mithila-ink relative z-20">
      <motion.div
        className="flex whitespace-nowrap items-center"
        animate={prefersReducedMotion ? {} : { x: ["0%", "-50%"] }}
        transition={{ ease: "linear" as const, duration: 30, repeat: Infinity }}
        style={{ display: "flex", width: "max-content" }}
      >
        {items.map((item, idx) => {
          // Alternate icons
          const Icon = idx % 2 === 0 ? MithilaFish : MithilaLotus;
          
          return (
            <React.Fragment key={idx}>
              <span className="font-display italic text-3xl md:text-4xl tracking-wide px-8">
                {item}
              </span>
              <div className="w-10 h-10 flex items-center justify-center shrink-0 opacity-80">
                <Icon color="var(--color-mithila-gold)" outlineColor="var(--color-mithila-ivory)" />
              </div>
            </React.Fragment>
          );
        })}
      </motion.div>
    </div>
  );
}
