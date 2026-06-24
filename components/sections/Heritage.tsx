'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { MithilaHarvestScene } from '../mithila/MithilaHarvestScene';
import { MithilaRoastScene } from '../mithila/MithilaRoastScene';
import { MithilaPackScene } from '../mithila/MithilaPackScene';

const panels = [
  { label: 'कमल तालाब से तोड़ाई', sublabel: 'Harvested from lotus ponds', Component: MithilaHarvestScene },
  { label: 'लकड़ी की आँच पर भुनाई', sublabel: 'Roasted over wood fire', Component: MithilaRoastScene },
  { label: 'हाथों से सजाकर पैकिंग', sublabel: 'Hand-packed with love', Component: MithilaPackScene },
];

export function Heritage() {
  const prefersReducedMotion = useReducedMotion();
  const staggerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.25 } } };
  const panelVariants = prefersReducedMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.4 } } }
    : { hidden: { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", opacity: 0 }, visible: { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", opacity: 1, transition: { duration: 1, ease: "easeInOut" as const } } };
  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

  return (
    <section id="heritage" className="bg-mithila-crimson text-mithila-ivory py-24 lg:py-32 border-y-4 border-mithila-ink overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div className="w-full flex flex-col gap-5" variants={staggerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
          {panels.map(({ label, sublabel, Component }, idx) => (
            <motion.div key={idx} variants={panelVariants} className="relative bg-mithila-ivory border-4 border-mithila-ink overflow-hidden group">
              <div className="w-full h-4 bg-mithila-ochre border-b-2 border-mithila-ink flex items-center justify-around overflow-hidden">
                {[...Array(12)].map((_, i) => <div key={i} className="w-2 h-2 bg-mithila-ink rotate-45"></div>)}
              </div>
              <div className="w-full aspect-[2/1]">
                <Component className="w-full h-full" />
              </div>
              <div className="w-full bg-mithila-ink/90 border-t-2 border-mithila-ink px-4 py-2.5 flex items-center gap-3">
                <span className="font-display text-mithila-gold text-sm lg:text-base tracking-wide">{label}</span>
                <span className="text-mithila-ivory/50 text-xs font-body italic hidden sm:inline">— {sublabel}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="flex flex-col justify-center" variants={staggerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.div variants={itemVariants} className="mb-10">
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-mithila-gold mb-4" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="font-display italic text-3xl lg:text-5xl leading-snug text-mithila-ivory mb-5">
              &ldquo;हमारे बाप-दादा कहते थे — जब तालाब में कमल खिले, तो मखाना अपने आप आएगा। बस धीरज रखो।&rdquo;
            </blockquote>
            <p className="font-subheading text-lg text-mithila-gold/90 italic">
              &ldquo;Our forefathers used to say — when the lotus blooms in the pond, the makhana will come on its own. Just have patience.&rdquo;
            </p>
            <p className="font-body text-base text-mithila-ivory/60 mt-3">— रामनाथ मांझी, मखाना किसान, दरभंगा</p>
          </motion.div>

          <motion.div variants={itemVariants} className="relative flex items-center justify-between mb-14">
            <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 40">
              <path d="M8 20 L92 20" stroke="var(--color-mithila-gold)" strokeWidth="0.6" opacity="0.5" />
              <path d="M8 20 Q15 12 22 20 T36 20 T50 20 T64 20 T78 20 T92 20" fill="none" stroke="var(--color-mithila-gold)" strokeWidth="0.8" />
              <path d="M22 20 Q24 16 26 18" fill="none" stroke="var(--color-mithila-gold)" strokeWidth="0.5" opacity="0.6" />
              <path d="M36 20 Q38 24 40 22" fill="none" stroke="var(--color-mithila-gold)" strokeWidth="0.5" opacity="0.6" />
              <path d="M64 20 Q66 16 68 18" fill="none" stroke="var(--color-mithila-gold)" strokeWidth="0.5" opacity="0.6" />
              <path d="M78 20 Q80 24 82 22" fill="none" stroke="var(--color-mithila-gold)" strokeWidth="0.5" opacity="0.6" />
            </svg>
            {[
              { label: 'Harvest', hindi: 'तोड़ाई' },
              { label: 'Roast', hindi: 'भुनाई' },
              { label: 'Pack', hindi: 'पैकिंग' },
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center gap-2">
                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-mithila-ink border-2 border-mithila-gold flex flex-col items-center justify-center text-center shadow-[0_0_12px_rgba(212,160,23,0.2)]">
                  <span className="text-mithila-ivory font-accent text-[10px] lg:text-xs uppercase tracking-wider mt-0.5">{step.label}</span>
                </div>
                <span className="font-display text-mithila-gold/80 text-xs lg:text-sm">{step.hindi}</span>
              </div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
            {['GI Protected Ingredient', 'Women-Led Cooperative', 'Zero Preservatives'].map((text, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-mithila-ink/80 text-mithila-gold px-4 py-2.5 border border-mithila-gold/60 font-accent text-xs lg:text-sm tracking-wider uppercase backdrop-blur-sm hover:bg-mithila-ink hover:border-mithila-gold transition-colors duration-300">
                {text}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
