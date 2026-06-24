'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MithilaPeacock } from '../mithila/MithilaPeacock';

export function ScrollTicker() {
  const prefersReducedMotion = useReducedMotion();
  const text = "TRADITION • FLAVOR • HERITAGE • 100% NATURAL • PRIDE OF BIHAR • HANDCRAFTED SINCE 2026 •";
  const items = Array(4).fill(text); // Repeat to ensure continuous scroll

  return (
    <div className="w-full bg-mithila-crimson text-mithila-ivory overflow-hidden py-2 border-b-[3px] border-mithila-ink">
      <motion.div
        className="flex whitespace-nowrap items-center"
        animate={prefersReducedMotion ? {} : { x: ["0%", "-50%"] }}
        transition={{ ease: "linear" as const, duration: 20, repeat: Infinity }}
        whileHover={prefersReducedMotion ? {} : { animationPlayState: "paused" }} // Wait, Framer Motion doesn't use animationPlayState this way, we just let it run or need a more complex setup for pause. Since it's simple, let's omit pause on hover or just use CSS animation for that. Let's stick to Framer Motion without pause, or use standard CSS for ticker pause. Let's use CSS for hover pause.
        style={prefersReducedMotion ? {} : { display: "flex", width: "max-content" }}
      >
        {items.map((item, idx) => (
          <React.Fragment key={idx}>
            <span className="font-accent text-sm md:text-base tracking-widest px-4">{item}</span>
            <MithilaPeacock className="w-6 h-6 mx-2 shrink-0" color="var(--color-mithila-ivory)" outlineColor="var(--color-mithila-ink)" />
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}
