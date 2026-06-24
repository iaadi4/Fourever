'use client';

import { motion } from 'framer-motion';
import { MithilaProductCard } from '../mithila/MithilaProductCard';

export function Collection() {
  const products = [
    { id: 1, name: "Classic Roasted Makhana", price: "₹299", weight: "200g", flavor: "The Original. The Eternal.", image: "/products/mithila_classic_makhana.png" },
    { id: 2, name: "Himalayan Pink Salt", price: "₹349", weight: "200g", flavor: "Mountain Minerals. Lotus Harvest.", image: "/products/mithila_himalayan_makhana.png" },
    { id: 3, name: "Turmeric & Cracked Pepper", price: "₹349", weight: "200g", flavor: "Ancient Spice. Warrior Grain.", image: "/products/mithila_turmeric_makhana.png" },
    { id: 4, name: "Chaat Masala Makhana", price: "₹329", weight: "200g", flavor: "The Bazaar in Every Bite.", image: "/products/mithila_chaat_makhana.png" },
    { id: 5, name: "Rose & Cardamom", price: "₹379", weight: "200g", flavor: "Brewed for Royalty.", image: "/products/mithila_rose_makhana.png" },
    { id: 6, name: "Royal Gift Box", price: "₹1,499", weight: "Assorted 5-pack", flavor: "Gift the Heritage of Mithila.", image: "/products/mithila_royal_box.png" },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }
  };

  return (
    <section id="collection" className="relative py-24 bg-mithila-ivory">
      <div className="absolute inset-0 pointer-events-none opacity-[0.08]" aria-hidden="true">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="bg-fish" x="0" y="0" width="80" height="40" patternUnits="userSpaceOnUse">
              <path d="M20 25 C30 5, 70 5, 95 25 C70 45, 30 45, 20 25 Z" fill="var(--color-mithila-ochre)" />
              <path d="M20 25 L5 10 C15 15, 15 35, 5 40 Z" fill="var(--color-mithila-ochre)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#bg-fish)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-5xl lg:text-6xl text-mithila-ink mb-4"
          >
            THE COLLECTION
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-subheading text-2xl text-mithila-ochre italic"
          >
            Each batch tells a story rooted in soil and ceremony
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {products.map((product, index) => (
            <MithilaProductCard key={product.id} product={product} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
