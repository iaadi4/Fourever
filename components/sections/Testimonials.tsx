'use client';

import { motion, useReducedMotion } from 'framer-motion';

export function Testimonials() {
  const prefersReducedMotion = useReducedMotion();

  const testimonials = [
    {
      text: "The Chaat Masala makhana transported me straight to the bazaars of Patna. Never tasted makhana so crisp and authentic. Fourever Makhana is the best makhana brand I've tried!",
      author: "AARAV SINGH",
      role: "Makhana Connoisseur, Delhi"
    },
    {
      text: "A truly royal experience. The Mithila-art packaging itself is a work of art, but the Himalayan Salt makhana is the real treasure inside. Perfect makhana for gifting!",
      author: "AARADHYA SINGH",
      role: "Food Blogger, Mumbai"
    }
  ];

  return (
    <section id="testimonials" aria-label="Customer Reviews - What People Say About Fourever Makhana" className="bg-mithila-ivory py-32 overflow-hidden border-b-4 border-mithila-ink">
      <div className="max-w-6xl mx-auto px-4 relative">
        <header className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-6xl text-mithila-ink mb-4">What Our Customers Say About Our Makhana</h2>
        </header>

        <motion.div 
          className="relative w-full max-w-5xl mx-auto mt-12 bg-mithila-ivory border-y-4 border-mithila-ink drop-shadow-2xl"
          initial={prefersReducedMotion ? { opacity: 0 } : { y: 50, opacity: 0 }}
          whileInView={prefersReducedMotion ? { opacity: 1 } : { y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 1.2, ease: "easeOut" as const }}
        >
          {/* Left Scroll Handle */}
          <div className="absolute -left-4 md:-left-8 top-[-5%] bottom-[-5%] w-8 md:w-16 bg-mithila-ochre border-4 border-mithila-ink rounded-full drop-shadow-md z-20" aria-hidden="true">
            <div className="absolute inset-y-8 left-1/2 -translate-x-1/2 w-0.5 bg-mithila-ink opacity-30"></div>
          </div>
          
          {/* Right Scroll Handle */}
          <div className="absolute -right-4 md:-right-8 top-[-5%] bottom-[-5%] w-8 md:w-16 bg-mithila-ochre border-4 border-mithila-ink rounded-full drop-shadow-md z-20" aria-hidden="true">
            <div className="absolute inset-y-8 left-1/2 -translate-x-1/2 w-0.5 bg-mithila-ink opacity-30"></div>
          </div>

          {/* Inner Dashed Border */}
          <div className="absolute inset-6 md:inset-8 border-[3px] border-dashed border-mithila-crimson pointer-events-none z-10" aria-hidden="true">
            <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-mithila-gold border-2 border-mithila-ink" />
            <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-mithila-gold border-2 border-mithila-ink" />
            <div className="absolute -bottom-3 -left-3 w-6 h-6 rounded-full bg-mithila-gold border-2 border-mithila-ink" />
            <div className="absolute -bottom-3 -right-3 w-6 h-6 rounded-full bg-mithila-gold border-2 border-mithila-ink" />
          </div>

          {/* Content */}
          <div className="relative z-10 px-12 md:px-24 py-16 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            {testimonials.map((test, idx) => (
              <figure key={idx} className="flex flex-col justify-center items-center text-center" itemScope itemType="https://schema.org/Review">
                <svg viewBox="0 0 24 24" className="w-10 h-10 text-mithila-gold mb-6 shrink-0" fill="currentColor" aria-hidden="true">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="font-display italic text-2xl md:text-3xl text-mithila-ink leading-relaxed mb-8" itemProp="reviewBody">
                  &ldquo;{test.text}&rdquo;
                </blockquote>
                <figcaption>
                  <cite className="font-accent text-mithila-crimson tracking-widest text-lg md:text-xl uppercase not-italic block" itemProp="author">
                    {test.author}
                  </cite>
                  <span className="font-body text-sm text-mithila-ink/60 mt-1 block">{test.role}</span>
                </figcaption>
                <meta itemProp="itemReviewed" content="Fourever Makhana" />
              </figure>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
