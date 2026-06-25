"use client";

import { MithilaFish } from "../mithila/MithilaFish";
import { MithilaLotus } from "../mithila/MithilaLotus";

export function Footer() {
  const linkSection = (title: string, links: { text: string; href: string }[]) => (
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
              href={link.href}
              className="font-subheading italic text-mithila-ivory/80 hover:text-mithila-ivory hover:underline transition-colors text-lg"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="bg-mithila-ink text-mithila-ivory pt-8 pb-12 relative border-t-2 border-mithila-gold" role="contentinfo">
      <div className="w-full h-16 bg-mithila-sapphire flex items-center mb-16 overflow-hidden relative border-y border-mithila-ivory" aria-hidden="true">
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
              Fourever Makhana — preserving the sacred harvest of Mithila. Premium roasted makhana (foxnuts) rooted in Bihar tradition, handcrafted for the world. Buy makhana online with free shipping across India.
            </p>
          </div>

          {linkSection("Our Makhana Products", [
            { text: "Classic Roasted Makhana", href: "#collection" },
            { text: "Himalayan Pink Salt Makhana", href: "#collection" },
            { text: "Turmeric & Pepper Makhana", href: "#collection" },
            { text: "Chaat Masala Makhana", href: "#collection" },
            { text: "Rose & Cardamom Makhana", href: "#collection" },
            { text: "Makhana Gift Boxes", href: "#gifting" },
          ])}

          {linkSection("About Fourever Makhana", [
            { text: "Our Makhana Story", href: "#heritage" },
            { text: "The Mithila Heritage", href: "#heritage" },
            { text: "Our Makhana Farmers", href: "#heritage" },
            { text: "Sustainability", href: "#heritage" },
            { text: "Contact Us", href: "#" },
          ])}

          {linkSection("Follow Fourever Makhana", [
            { text: "Instagram", href: "https://instagram.com/fourevermakhana" },
            { text: "Facebook", href: "https://facebook.com/fourevermakhana" },
            { text: "Twitter", href: "https://twitter.com/fourevermakhana" },
            { text: "LinkedIn", href: "https://linkedin.com/company/fourevermakhana" },
          ])}
        </div>

        {/* SEO-rich bottom section */}
        <div className="pt-8 border-t border-mithila-gold/30 mb-8">
          <p className="font-body text-sm text-mithila-ivory/50 leading-relaxed max-w-4xl mx-auto text-center">
            Fourever Makhana is India&apos;s premium makhana brand, specializing in hand-harvested, wood-fire roasted foxnuts from the lotus ponds of Bihar. Our makhana is 100% natural with zero preservatives, sourced from GI-protected regions of Mithila. Available in Classic Roasted, Himalayan Pink Salt, Turmeric &amp; Pepper, Chaat Masala, and Rose &amp; Cardamom flavors. Buy makhana online, makhana gift boxes for Diwali, corporate makhana gifts, and premium foxnuts delivered across India.
          </p>
        </div>

        <div className="pt-4 border-t border-mithila-gold/30 text-center flex flex-col items-center gap-4">
          <MithilaLotus
            className="w-8 h-8"
            color="var(--color-mithila-crimson)"
          />
          <p className="font-subheading italic text-xl text-mithila-ivory/80">
            Handcrafted makhana with love in Bihar, India. EST. 2026.
          </p>
          <p className="font-body text-sm text-mithila-ochre">
            © {new Date().getFullYear()} Fourever Makhana. All rights reserved. | Premium Makhana &amp; Foxnuts from Bihar.
          </p>
        </div>
      </div>
    </footer>
  );
}
