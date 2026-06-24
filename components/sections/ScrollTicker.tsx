import React from 'react';
import { MithilaPeacock } from '../mithila/MithilaPeacock';

export function ScrollTicker() {
  const text = "TRADITION • FLAVOR • HERITAGE • 100% NATURAL • PRIDE OF BIHAR • HANDCRAFTED SINCE 2026 •";
  const items = Array(4).fill(text);

  return (
    <div className="w-full bg-mithila-crimson text-mithila-ivory overflow-hidden py-2 border-b-[3px] border-mithila-ink">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll-ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-scroll-ticker {
            animation: none !important;
            transform: none !important;
          }
        }
        .animate-scroll-ticker {
          animation: scroll-ticker 20s linear infinite;
          display: flex;
          width: max-content;
        }
        .animate-scroll-ticker:hover {
          animation-play-state: paused;
        }
      `}} />
      <div className="flex whitespace-nowrap items-center animate-scroll-ticker">
        {items.map((item, idx) => (
          <React.Fragment key={idx}>
            <span className="font-accent text-sm md:text-base tracking-widest px-4">{item}</span>
            <MithilaPeacock 
              className="w-6 h-6 mx-2 shrink-0" 
              color="var(--color-mithila-ivory)" 
              outlineColor="var(--color-mithila-ink)" 
              style={{ width: '24px', height: '24px' }} 
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
