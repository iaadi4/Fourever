"use client";

import React from "react";
import { MithilaFish } from "../mithila/MithilaFish";
import { MithilaBorder } from "../mithila/MithilaBorder";
import { MithilaLotus } from "../mithila/MithilaLotus";

export function Footer() {
  const linkSection = (title: string, links: string[]) => (
    <div className="flex flex-col gap-4">
      <h4 className="font-accent text-mithila-gold uppercase tracking-widest text-lg mb-2">
        {title}
      </h4>
      <ul className="flex flex-col gap-3">
        {links.map((link, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <MithilaFish
              className="w-4 h-4 shrink-0"
              color="var(--color-mithila-ochre)"
              outlineColor="none"
            />
            <a
              href="#"
              className="font-subheading italic text-mithila-ivory/80 hover:text-mithila-ivory hover:underline transition-colors text-lg"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="bg-mithila-ink text-mithila-ivory pt-8 pb-12 relative border-t-2 border-mithila-gold">
      <div className="w-full h-16 bg-mithila-sapphire flex items-center mb-16 overflow-hidden relative border-y border-mithila-ivory">
        <div className="flex w-[200%] md:w-full justify-between items-center px-4 absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center p-2"
            >
              <svg viewBox="0 0 24 24" className="w-10 h-10">
                <circle
                  cx="12"
                  cy="12"
                  r="8"
                  fill="var(--color-mithila-leaf)"
                  stroke="var(--color-mithila-gold)"
                  strokeWidth="1"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  fill="var(--color-mithila-gold)"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="1.5"
                  fill="var(--color-mithila-ink)"
                />
              </svg>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <MithilaLotus
                className="w-8 h-8"
                color="var(--color-mithila-gold)"
                outlineColor="var(--color-mithila-ivory)"
              />
              <span className="font-accent text-2xl tracking-wider text-mithila-ivory">
                FOUREVER
                <br />
                MAKHANA
              </span>
            </div>
            <p className="font-body text-mithila-ivory/70 leading-relaxed text-lg pr-4">
              Preserving the sacred harvest of Mithila. Rooted in tradition,
              handcrafted for the world.
            </p>
          </div>

          {linkSection("Products", [
            "Classic Roasted",
            "Himalayan Pink Salt",
            "Turmeric & Pepper",
            "Chaat Masala",
            "Rose & Cardamom",
            "Royal Gift Boxes",
          ])}

          {linkSection("Company", [
            "Our Story",
            "The Mithila Heritage",
            "Our Farmers",
            "Sustainability",
            "Contact Us",
          ])}

          {linkSection("Follow Us", [
            "Instagram",
            "Facebook",
            "Twitter",
            "LinkedIn",
          ])}
        </div>

        <div className="pt-8 border-t border-mithila-gold/30 text-center flex flex-col items-center gap-4">
          <MithilaLotus
            className="w-8 h-8"
            color="var(--color-mithila-crimson)"
          />
          <p className="font-subheading italic text-xl text-mithila-ivory/80">
            Handcrafted with love in Bihar, India. EST. 2026.
          </p>
          <p className="font-body text-sm text-mithila-ochre">
            © {new Date().getFullYear()} Fourever Makhana. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
