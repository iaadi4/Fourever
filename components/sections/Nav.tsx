'use client';

import React, { useEffect, useState } from 'react';
import { MithilaLotus } from '../mithila/MithilaLotus';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { Menu } from 'lucide-react';
import { motion } from 'framer-motion';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) setScrolled(true);
      else setScrolled(false);
    };
    
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ["Our Story", "Collection", "Heritage", "Find Us"];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 border-b-[3px] border-transparent ${
        scrolled ? 'top-0 bg-mithila-ink border-mithila-gold/30 shadow-lg' : 'top-[40px] bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer">
          <MithilaLotus className="w-10 h-10" color="var(--color-mithila-crimson)" />
          <span className={`font-accent text-xl tracking-wider ${scrolled ? 'text-mithila-ivory' : 'text-mithila-ink'} transition-colors`}>
            FOUREVER MAKHANA
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              className={`font-subheading text-lg italic hover:text-mithila-gold transition-colors relative group ${scrolled ? 'text-mithila-ivory' : 'text-mithila-ink'}`}
            >
              {link}
              <motion.span 
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-mithila-gold transition-all group-hover:w-full"
              />
            </a>
          ))}
          
          <button className={`font-accent uppercase px-6 py-2 border-[2px] transition-colors relative group overflow-hidden ${
            scrolled ? 'border-mithila-ivory text-mithila-ivory hover:text-mithila-ink' : 'border-mithila-ink text-mithila-ink hover:text-mithila-ivory'
          } rounded-none`}>
            <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
              <rect x="2" y="2" width="calc(100% - 4px)" height="calc(100% - 4px)" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
            </svg>
            <span className="relative z-10 group-hover:text-mithila-ink">Order Now</span>
            <div className="absolute inset-0 bg-mithila-gold -translate-x-full group-hover:translate-x-0 transition-transform duration-300 z-0"></div>
          </button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger className={`p-2 ${scrolled ? 'text-mithila-ivory' : 'text-mithila-ink'}`}>
              <Menu size={28} />
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-full bg-mithila-ink border-none flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
                <MithilaLotus className="w-[150vw] h-[150vw]" color="var(--color-mithila-gold)" outlineColor="var(--color-mithila-gold)" />
              </div>
              <div className="flex flex-col gap-8 z-10 text-center">
                {links.map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="font-subheading text-4xl italic text-mithila-ivory hover:text-mithila-gold transition-colors"
                  >
                    {link}
                  </a>
                ))}
                <button className="mt-8 font-accent uppercase px-8 py-4 border-[2px] border-mithila-gold text-mithila-gold hover:bg-mithila-gold hover:text-mithila-ink transition-colors rounded-none text-xl">
                  Order Now
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
