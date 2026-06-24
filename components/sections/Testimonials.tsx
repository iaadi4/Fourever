'use client';

import { motion, useReducedMotion } from 'framer-motion';

export function Testimonials() {
  const prefersReducedMotion = useReducedMotion();

  const testimonials = [
    {
      text: "The Chaat Masala flavor transported me straight to the bazaars of Patna. Never tasted makhana so crisp and authentic.",
      author: "AARAV SINGH"
    },
    {
      text: "A truly royal experience. The packaging itself is a work of art, but the Himalayan Salt makhana is the real treasure inside.",
      author: "AARADHYA SINGH"
    }
  ];

  return (
    <section className="bg-mithila-ivory py-32 overflow-hidden border-b-4 border-mithila-ink">
      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-6xl text-mithila-ink mb-4">Voices from the Court</h2>
        </div>

        {/* The Unfurled Scroll container */}
        <motion.div 
          className="relative w-full min-h-[400px] flex items-center justify-center"
          initial={prefersReducedMotion ? { opacity: 0 } : { x: "100%", opacity: 0 }}
          whileInView={prefersReducedMotion ? { opacity: 1 } : { x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" as const }}
        >
          {/* SVG Scroll Background */}
          <div className="absolute inset-0 z-0 pointer-events-none drop-shadow-2xl">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 400">
              {/* Scroll paper */}
              <path d="M50 50 C100 40, 900 40, 950 50 L950 350 C900 360, 100 360, 50 350 Z" fill="var(--color-mithila-ivory)" stroke="var(--color-mithila-ink)" strokeWidth="4" />
              {/* Left scroll roll */}
              <ellipse cx="50" cy="200" rx="30" ry="150" fill="var(--color-mithila-ochre)" stroke="var(--color-mithila-ink)" strokeWidth="4" />
              <path d="M50 50 C20 50, 20 350, 50 350" fill="none" stroke="var(--color-mithila-ink)" strokeWidth="2" />
              {/* Right scroll roll */}
              <ellipse cx="950" cy="200" rx="40" ry="160" fill="var(--color-mithila-ochre)" stroke="var(--color-mithila-ink)" strokeWidth="4" />
              <path d="M950 40 C980 40, 980 360, 950 360" fill="none" stroke="var(--color-mithila-ink)" strokeWidth="2" />
              
              {/* Inner Decorative Border */}
              <path d="M100 80 L900 80 L900 320 L100 320 Z" fill="none" stroke="var(--color-mithila-crimson)" strokeWidth="2" strokeDasharray="10 5" />
              {/* Corner Lotuses */}
              <circle cx="100" cy="80" r="10" fill="var(--color-mithila-gold)" stroke="var(--color-mithila-ink)" strokeWidth="2" />
              <circle cx="900" cy="80" r="10" fill="var(--color-mithila-gold)" stroke="var(--color-mithila-ink)" strokeWidth="2" />
              <circle cx="100" cy="320" r="10" fill="var(--color-mithila-gold)" stroke="var(--color-mithila-ink)" strokeWidth="2" />
              <circle cx="900" cy="320" r="10" fill="var(--color-mithila-gold)" stroke="var(--color-mithila-ink)" strokeWidth="2" />
            </svg>
          </div>

          {/* Testimonial Content */}
          <div className="relative z-10 w-full px-12 md:px-32 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            {testimonials.map((test, idx) => (
              <div key={idx} className="flex flex-col justify-center items-center text-center">
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-mithila-gold mb-6" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="font-display italic text-2xl md:text-3xl text-mithila-ink leading-relaxed mb-8">
                  "{test.text}"
                </p>
                <span className="font-accent text-mithila-crimson tracking-widest text-lg md:text-xl">
                  {test.author}
                </span>
              </div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
