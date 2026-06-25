'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { MithilaLotus } from '../mithila/MithilaLotus';

export function CTA() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="order" aria-label="Order Premium Makhana Online - Buy Fourever Makhana" className="relative min-h-screen flex items-center justify-center overflow-hidden border-b-[8px] border-mithila-gold">
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(circle at center, var(--color-mithila-crimson) 0%, var(--color-mithila-ink) 100%)'
        }}
      ></div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-0" aria-hidden="true">
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
          Buy Premium Makhana Online — Your First Taste of <br/>Mithila Awaits.
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-body text-2xl text-mithila-ivory/80 mb-16 max-w-2xl"
        >
          Join the legacy. Experience the true crunch of authentic, wood-fire roasted makhana foxnuts from the heart of Bihar. Order Fourever Makhana today.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
        >
          <a href="#collection" className="bg-mithila-gold text-mithila-ink font-accent uppercase px-12 py-5 text-xl tracking-wider hover:bg-mithila-ivory transition-colors border-2 border-mithila-gold hover:border-mithila-ivory text-center" aria-label="Shop our makhana collection now">
            Shop Makhana Collection
          </a>
          <a href="#heritage" className="bg-transparent text-mithila-ivory font-accent uppercase px-12 py-5 text-xl tracking-wider hover:bg-mithila-ink transition-colors border-2 border-mithila-ivory text-center" aria-label="Follow our makhana heritage story">
            Follow Our Story
          </a>
        </motion.div>
      </div>
    </section>
  );
}
