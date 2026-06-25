'use client';

import React from 'react';
import { MithilaFish } from '../mithila/MithilaFish';
import { MithilaLotus } from '../mithila/MithilaLotus';

export function MarqueeStrip() {
  const categories = [
    "Classic Roasted Makhana", 
    "Himalayan Salt Makhana", 
    "Turmeric & Black Pepper Makhana", 
    "Chaat Masala Makhana", 
    "Rose Cardamom Makhana", 
    "Premium Foxnut Gift Boxes", 
    "Buy Makhana Online"
  ];
  
  const items = [...categories, ...categories, ...categories];

  return (
    <div className="w-full bg-mithila-crimson text-mithila-ivory overflow-hidden py-6 border-y-4 border-mithila-ink relative z-20" role="marquee" aria-label="Fourever Makhana product categories - Shop roasted makhana flavors online">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee-strip {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee-strip {
            animation: none !important;
            transform: none !important;
          }
        }
        .animate-marquee-strip {
          animation: marquee-strip 30s linear infinite;
          display: flex;
          width: max-content;
        }
        .animate-marquee-strip:hover {
          animation-play-state: paused;
        }
      `}} />
      <div className="flex whitespace-nowrap items-center animate-marquee-strip">
        {items.map((item, idx) => {
          const Icon = idx % 2 === 0 ? MithilaFish : MithilaLotus;
          
          return (
            <React.Fragment key={idx}>
              <span className="font-display italic text-3xl md:text-4xl tracking-wide px-8">
                {item}
              </span>
              <div className="w-10 h-10 flex items-center justify-center shrink-0 opacity-80" aria-hidden="true">
                <Icon color="var(--color-mithila-gold)" outlineColor="var(--color-mithila-ivory)" />
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
