'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

export function Gifting() {
  const prefersReducedMotion = useReducedMotion();
  const carouselRef = useRef<HTMLDivElement>(null);

  const boxes = [
    {
      name: "The Royal Darbar Box",
      price: "₹1,499",
      occasions: ["Diwali", "Shaadi", "Festivals"],
      color: "var(--color-mithila-crimson)",
      pattern: "peacock"
    },
    {
      name: "Lotus Pond Collection",
      price: "₹1,299",
      occasions: ["Corporate", "Housewarming", "Gifting"],
      color: "var(--color-mithila-ochre)",
      pattern: "lotus"
    },
    {
      name: "The Heritage Vault",
      price: "₹2,499",
      occasions: ["Weddings", "VVIP", "Anniversary"],
      color: "var(--color-mithila-gold)",
      pattern: "sun"
    }
  ];

  return (
    <section className="bg-mithila-sapphire py-24 border-y-[6px] border-mithila-gold relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none flex justify-center items-center">
        <svg viewBox="0 0 100 100" className="w-[150vw] h-[150vw] absolute">
           <circle cx="50" cy="50" r="45" fill="none" stroke="var(--color-mithila-gold)" strokeWidth="0.5" strokeDasharray="2 2" />
           <circle cx="50" cy="50" r="30" fill="none" stroke="var(--color-mithila-gold)" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center relative z-10">
        <h2 className="font-display text-5xl lg:text-7xl text-mithila-gold mb-6">Gifting as an Art Form</h2>
        <p className="font-body text-xl text-mithila-ivory/80 max-w-2xl mx-auto">
          Share the heritage of Bihar with those you cherish. Hand-painted boxes filled with our finest harvests.
        </p>
      </div>

      <div className="w-full relative z-10 pb-12">
        <motion.div 
          ref={carouselRef}
          className="flex flex-wrap justify-center items-center gap-8 px-4 lg:px-8 max-w-7xl mx-auto"
        >
          {boxes.map((box, idx) => (
            <div key={idx} className="w-[300px] md:w-[400px] shrink-0 bg-mithila-ivory border-4 border-mithila-ink p-4 group">
              <div className="w-full aspect-[4/3] bg-mithila-ink mb-6 relative overflow-hidden border-2 border-mithila-ink">
                <div className="absolute inset-0 bg-mithila-crimson" style={{ backgroundColor: box.color }}>
                  <div className="absolute inset-2 border border-mithila-gold/50 border-dashed"></div>
                  
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    {box.pattern === 'peacock' && (
                       <svg viewBox="0 0 100 100" className="w-full h-full opacity-80">
                         <path d="M50 80 C10 80, 10 20, 50 20 C90 20, 90 80, 50 80 Z" fill="none" stroke="var(--color-mithila-gold)" strokeWidth="2" />
                         <circle cx="50" cy="50" r="15" fill="var(--color-mithila-gold)" />
                       </svg>
                    )}
                    {box.pattern === 'lotus' && (
                       <svg viewBox="0 0 100 100" className="w-full h-full opacity-80">
                         <path d="M50 80 C30 60, 30 40, 50 20 C70 40, 70 60, 50 80 Z" fill="var(--color-mithila-gold)" stroke="var(--color-mithila-ink)" strokeWidth="2" />
                       </svg>
                    )}
                    {box.pattern === 'sun' && (
                       <svg viewBox="0 0 100 100" className="w-full h-full opacity-80">
                         <circle cx="50" cy="50" r="25" fill="var(--color-mithila-gold)" />
                         {[...Array(12)].map((_, i) => (
                           <line key={i} x1="50" y1="20" x2="50" y2="5" stroke="var(--color-mithila-gold)" strokeWidth="2" transform={`rotate(${i*30} 50 50)`} />
                         ))}
                       </svg>
                    )}
                  </div>
                </div>

                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 bg-mithila-gold border-x border-mithila-ink shadow-lg"></div>
                <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-8 bg-mithila-gold border-y border-mithila-ink shadow-lg"></div>

                <div className="absolute top-4 left-4 bg-mithila-ink text-mithila-gold font-accent text-xs px-3 py-1 tracking-wider border border-mithila-gold uppercase">
                  Limited Edition
                </div>
              </div>

              <div className="text-center">
                <h3 className="font-accent text-2xl text-mithila-ink mb-3">{box.name}</h3>
                
                <div className="flex justify-center items-center gap-2 mb-4 flex-wrap">
                  {box.occasions.map((occ, i) => (
                    <React.Fragment key={i}>
                      <span className="font-subheading italic text-mithila-ochre">{occ}</span>
                      {i < box.occasions.length - 1 && (
                        <svg viewBox="0 0 10 10" className="w-2 h-2 text-mithila-crimson">
                          <path d="M5 0 L10 5 L5 10 L0 5 Z" fill="currentColor" />
                        </svg>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                <div className="font-display text-3xl text-mithila-crimson font-bold mb-6">
                  {box.price}
                </div>

                <button className="w-full bg-mithila-ink text-mithila-gold font-accent uppercase py-4 border-2 border-mithila-ink hover:bg-transparent hover:text-mithila-ink transition-colors">
                  Enquire Now
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
