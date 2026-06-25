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
    content: "Makhana is packed with plant-based protein — up to 9.7g per 100g — that sustains energy without the crash. Traditionally favored by warriors and scholars alike, foxnuts are the ultimate natural protein snack.",
    icon: (props: any) => (
      <svg viewBox="0 0 100 100" {...props} role="img" aria-label="Protein icon - Mithila warrior figure">
        <circle cx="50" cy="20" r="10" fill="var(--color-mithila-ochre)" stroke="var(--color-mithila-ink)" strokeWidth="2" />
        <path d="M50 30 L50 70 M20 40 L80 40 M30 100 L50 70 L70 100" stroke="var(--color-mithila-ink)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 20 L20 40 L10 60" fill="none" stroke="var(--color-mithila-crimson)" strokeWidth="2" />
        <path d="M90 20 L80 40 L90 60" fill="none" stroke="var(--color-mithila-crimson)" strokeWidth="2" />
      </svg>
    )
  },
  {
    title: "Low Glycemic Index",
    content: "Makhana has a low glycemic index, providing slow-releasing energy that keeps blood sugar levels steady. Perfect for diabetics and anyone seeking sustained focus throughout the day. A smart snacking choice.",
    icon: (props: any) => <MithilaLotus {...props} color="var(--color-mithila-lotus)" />
  },
  {
    title: "Zero Cholesterol",
    content: "Makhana foxnuts are naturally free from trans-fats and cholesterol, keeping the heart light and healthy. As pure as the lotus ponds they grow in. Recommended by nutritionists across India.",
    icon: (props: any) => <MithilaFish {...props} color="var(--color-mithila-sky)" />
  },
  {
    title: "Sattvic & Fasting-Friendly",
    content: "Makhana is a sattvic food — consumed during Navratri, Ekadashi, and religious fasting (vrat). Considered pure enough for offering to the divine. The original superfood of Indian tradition.",
    icon: (props: any) => (
      <svg viewBox="0 0 100 100" {...props} role="img" aria-label="Sacred lamp icon representing sattvic food">
        <path d="M20 70 C20 90, 80 90, 80 70 Z" fill="var(--color-mithila-gold)" stroke="var(--color-mithila-ink)" strokeWidth="2" />
        <path d="M50 70 Q60 50 50 20 Q40 50 50 70 Z" fill="var(--color-mithila-mango)" stroke="var(--color-mithila-ink)" strokeWidth="2" />
        <path d="M50 60 Q55 45 50 30 Q45 45 50 60 Z" fill="var(--color-mithila-crimson)" stroke="none" />
      </svg>
    )
  },
  {
    title: "Rich in Antioxidants",
    content: "Makhana is rich in kaempferol and other vital antioxidants that combat aging and boost immunity. Studies show foxnuts contain more antioxidants than most dry fruits. Nature's own anti-aging superfood.",
    icon: (props: any) => <MithilaPeacock {...props} />
  }
];

export function WhyMakhana() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="why-makhana" aria-label="Makhana Health Benefits - Why Choose Foxnuts" className="bg-mithila-ivory py-24 flex">
      <div className="absolute left-0 top-0 bottom-0 w-[30%] bg-mithila-ochre/10 pointer-events-none hidden lg:block"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <header className="mb-16">
          <h2 className="font-display text-5xl lg:text-6xl text-mithila-ink mb-4">Health Benefits of Makhana</h2>
          <p className="font-subheading text-2xl text-mithila-crimson italic">Why makhana (foxnuts) are India&apos;s ultimate superfood snack</p>
        </header>

        <div className="flex flex-col gap-6" role="list" aria-label="Makhana health benefits list">
          {features.map((feature, idx) => {
            const isExpanded = expandedIndex === idx;
            const Icon = feature.icon;

            return (
              <article 
                key={idx}
                role="listitem"
                className="border-l-8 border-mithila-ink bg-mithila-ivory border-y-2 border-r-2 border-y-mithila-ink/10 border-r-mithila-ink/10 cursor-pointer shadow-sm hover:shadow-md transition-shadow"
                onClick={() => setExpandedIndex(isExpanded ? null : idx)}
              >
                <div className="p-6 flex justify-between items-center bg-white/50" role="button" aria-expanded={isExpanded} aria-controls={`benefit-${idx}`}>
                  <h3 className="font-accent text-2xl tracking-wide text-mithila-ink uppercase">{feature.title}</h3>
                  <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} aria-hidden="true">
                    <ChevronDown size={28} className="text-mithila-crimson" />
                  </motion.div>
                </div>
                
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      id={`benefit-${idx}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" as const }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 flex flex-col md:flex-row gap-8 items-center bg-white/50">
                        <div className="w-32 h-32 shrink-0 p-4 border-2 border-dashed border-mithila-ochre rounded-full flex items-center justify-center" aria-hidden="true">
                          <Icon className="w-full h-full" />
                        </div>
                        <p className="font-body text-xl leading-relaxed text-mithila-ink/80">
                          {feature.content}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
