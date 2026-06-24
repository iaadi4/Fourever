'use client';

import { motion } from 'framer-motion';
import { MithilaBorder } from './MithilaBorder';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  price: string;
  weight: string;
  flavor: string;
  image: string;
}

interface Props {
  product: Product;
  index: number;
}

export function MithilaProductCard({ product, index }: Props) {

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <motion.div variants={itemVariants} className="group h-full cursor-pointer">
      <div className="h-full transition-transform duration-500 group-hover:-translate-y-2">
        <MithilaBorder variant="peacock" className="flex flex-col h-full bg-mithila-ivory group-hover:shadow-[8px_8px_0_0_var(--color-mithila-ink)] transition-shadow duration-300">
          
          <div className="relative w-full aspect-square mb-6 flex items-center justify-center bg-mithila-ochre/10 overflow-hidden">
            <svg width="0" height="0" className="absolute">
              <clipPath id={`lotus-clip-${index}`} clipPathUnits="objectBoundingBox">
                <path d="M0.5,0 C0.8,0.2 1,0.5 0.5,1 C0,0.5 0.2,0.2 0.5,0 Z" />
              </clipPath>
            </svg>
            
            <div 
              className="w-[85%] h-[85%] relative border-4 border-transparent"
              style={{ clipPath: `url(#lotus-clip-${index})` }}
            >
              <div className="absolute inset-0 bg-mithila-ochre opacity-20 z-10 pointer-events-none"></div>
              <Image 
                src={product.image} 
                alt={product.name} 
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            
            <div className="absolute inset-0 border-2 border-mithila-gold opacity-0 group-hover:opacity-100 group-hover:rotate-[360deg] transition-all duration-[10s] ease-linear pointer-events-none rounded-full scale-110"></div>
          </div>

          <div className="flex flex-col flex-grow items-center text-center px-2">
            <h3 className="font-accent text-base md:text-xl lg:text-2xl text-mithila-ink mb-1 md:mb-2 uppercase tracking-wide line-clamp-2 md:line-clamp-none">
              {product.name}
            </h3>
            
            <div className="font-subheading text-mithila-ochre italic text-xs md:text-sm mb-2 md:mb-4 min-h-[32px] md:min-h-[40px] leading-tight line-clamp-2 md:line-clamp-none">
              {product.flavor}
            </div>
            
            <div className="mt-auto w-full">
              <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-3 md:mb-4 border-t-2 border-dashed border-mithila-ink/30 pt-2 md:pt-4 gap-1 md:gap-0">
                <span className="font-body text-xs md:text-sm text-mithila-ink font-semibold">{product.weight}</span>
                <span className="font-display text-lg md:text-2xl text-mithila-crimson font-bold leading-none">{product.price}</span>
              </div>
              
              <button className="w-full relative group/btn overflow-hidden bg-transparent border-2 border-mithila-ink py-2 md:py-3 text-[10px] md:text-sm font-accent uppercase tracking-widest text-mithila-ink hover:text-mithila-ivory transition-colors">
                <span className="relative z-10">Add to Cart</span>
                <div className="absolute inset-0 bg-mithila-ink translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 z-0"></div>
              </button>
            </div>
          </div>

        </MithilaBorder>
      </div>
    </motion.div>
  );
}
