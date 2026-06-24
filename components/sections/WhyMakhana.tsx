'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MithilaLotus } from '../mithila/MithilaLotus';
import { MithilaFish } from '../mithila/MithilaFish';
import { MithilaPeacock } from '../mithila/MithilaPeacock';
import { ChevronDown } from 'lucide-react';

const features = [
  {
    title: "High in Protein",
    content: "The fuel of kings. Packed with plant-based protein that sustains energy without the crash, traditionally favored by warriors and scholars alike.",
    icon: (props: any) => (
      <svg viewBox="0 0 100 100" {...props}>
        <circle cx="50" cy="20" r="10" fill="var(--color-mithila-ochre)" stroke="var(--color-mithila-ink)" strokeWidth="2" />
        <path d="M50 30 L50 70 M20 40 L80 40 M30 100 L50 70 L70 100" stroke="var(--color-mithila-ink)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 20 L20 40 L10 60" fill="none" stroke="var(--color-mithila-crimson)" strokeWidth="2" />
        <path d="M90 20 L80 40 L90 60" fill="none" stroke="var(--color-mithila-crimson)" strokeWidth="2" />
      </svg>
    )
  },
  {
    title: "Low Glycemic",
    content: "Slow-releasing energy that keeps your balance steady. Perfect for maintaining focus throughout the long days.",
    icon: (props: any) => <MithilaLotus {...props} color="var(--color-mithila-lotus)" />
  },
  {
    title: "Zero Cholesterol",
    content: "As pure as the river it comes from. Naturally free from trans-fats and cholesterol, keeping the heart light.",
    icon: (props: any) => <MithilaFish {...props} color="var(--color-mithila-sky)" />
  },
  {
    title: "Sattvic & Fasting-Friendly",
    content: "A sacred food. Eaten during Navratri and religious fasting, considered pure enough for offering to the divine.",
    icon: (props: any) => (
      <svg viewBox="0 0 100 100" {...props}>
        <path d="M20 70 C20 90, 80 90, 80 70 Z" fill="var(--color-mithila-gold)" stroke="var(--color-mithila-ink)" strokeWidth="2" />
        <path d="M50 70 Q60 50 50 20 Q40 50 50 70 Z" fill="var(--color-mithila-mango)" stroke="var(--color-mithila-ink)" strokeWidth="2" />
        <path d="M50 60 Q55 45 50 30 Q45 45 50 60 Z" fill="var(--color-mithila-crimson)" stroke="none" />
      </svg>
    )
  },
  {
    title: "Antioxidant Rich",
    content: "A natural shield against aging and illness, rich in kaempferol and other vital antioxidants.",
    icon: (props: any) => <MithilaPeacock {...props} />
  }
];

export function WhyMakhana() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section className="bg-mithila-ivory py-24 flex">
      <div className="absolute left-0 top-0 bottom-0 w-[30%] bg-mithila-ochre/10 pointer-events-none hidden lg:block"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="mb-16">
          <h2 className="font-display text-5xl lg:text-6xl text-mithila-ink mb-4">THE SACRED GRAIN</h2>
          <p className="font-subheading text-2xl text-mithila-crimson italic">Nourishment from the deep waters</p>
        </div>

        <div className="flex flex-col gap-6">
          {features.map((feature, idx) => {
            const isExpanded = expandedIndex === idx;
            const Icon = feature.icon;

            return (
              <div 
                key={idx} 
                className="border-l-8 border-mithila-ink bg-mithila-ivory border-y-2 border-r-2 border-y-mithila-ink/10 border-r-mithila-ink/10 cursor-pointer shadow-sm hover:shadow-md transition-shadow"
                onClick={() => setExpandedIndex(isExpanded ? null : idx)}
              >
                <div className="p-6 flex justify-between items-center bg-white/50">
                  <h3 className="font-accent text-2xl tracking-wide text-mithila-ink uppercase">{feature.title}</h3>
                  <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
                    <ChevronDown size={28} className="text-mithila-crimson" />
                  </motion.div>
                </div>
                
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" as const }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 flex flex-col md:flex-row gap-8 items-center bg-white/50">
                        <div className="w-32 h-32 shrink-0 p-4 border-2 border-dashed border-mithila-ochre rounded-full flex items-center justify-center">
                          <Icon className="w-full h-full" />
                        </div>
                        <p className="font-body text-xl leading-relaxed text-mithila-ink/80">
                          {feature.content}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
