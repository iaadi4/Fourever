'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { MithilaLotus } from '../mithila/MithilaLotus';

export function CTA() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden border-b-[8px] border-mithila-gold">
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(circle at center, var(--color-mithila-crimson) 0%, var(--color-mithila-ink) 100%)'
        }}
      ></div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-0">
        <motion.div
          animate={prefersReducedMotion ? {} : { rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" as const }}
          className="w-[150vw] h-[150vw] md:w-[100vw] md:h-[100vw] opacity-10 flex items-center justify-center"
        >
          <MithilaLotus color="var(--color-mithila-gold)" outlineColor="var(--color-mithila-gold)" className="w-full h-full" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-6xl md:text-8xl text-mithila-ivory mb-8 leading-tight"
        >
          Your First Taste of <br/>Mithila Awaits.
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-body text-2xl text-mithila-ivory/80 mb-16 max-w-2xl"
        >
          Join the legacy. Experience the true crunch of authentic, wood-fire roasted foxnuts from the heart of Bihar.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
        >
          <button className="bg-mithila-gold text-mithila-ink font-accent uppercase px-12 py-5 text-xl tracking-wider hover:bg-mithila-ivory transition-colors border-2 border-mithila-gold hover:border-mithila-ivory">
            Shop the Collection
          </button>
          <button className="bg-transparent text-mithila-ivory font-accent uppercase px-12 py-5 text-xl tracking-wider hover:bg-mithila-ink transition-colors border-2 border-mithila-ivory">
            Follow Our Story
          </button>
        </motion.div>
      </div>
    </section>
  );
}
