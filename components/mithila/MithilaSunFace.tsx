import React from 'react';
import { motion } from 'framer-motion';

interface Props extends React.SVGProps<SVGSVGElement> {
  color?: string;
  outlineColor?: string;
  drawOn?: boolean;
}

export function MithilaSunFace({
  color = 'var(--color-mithila-gold)',
  outlineColor = 'var(--color-mithila-ink)',
  drawOn = false,
  className,
  ...props
}: Props) {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: 2, ease: "easeInOut" as const }
    }
  };

  const pathProps = drawOn ? {
    variants: pathVariants,
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true }
  } : {};

  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      {[...Array(16)].map((_, i) => {
        const angle = (i * 360) / 16;
        const isLong = i % 2 === 0;
        const r1 = 30;
        const r2 = isLong ? 48 : 40;
        
        const x1 = 50 + r1 * Math.cos((angle * Math.PI) / 180);
        const y1 = 50 + r1 * Math.sin((angle * Math.PI) / 180);
        
        const x2 = 50 + r2 * Math.cos((angle * Math.PI) / 180);
        const y2 = 50 + r2 * Math.sin((angle * Math.PI) / 180);
        
        const cx1 = 50 + (r1+5) * Math.cos(((angle-5) * Math.PI) / 180);
        const cy1 = 50 + (r1+5) * Math.sin(((angle-5) * Math.PI) / 180);
        
        const cx2 = 50 + (r1+5) * Math.cos(((angle+5) * Math.PI) / 180);
        const cy2 = 50 + (r1+5) * Math.sin(((angle+5) * Math.PI) / 180);
        
        return (
          <motion.path
            key={i}
            d={`M${x1} ${y1} Q${cx1} ${cy1} ${x2} ${y2} Q${cx2} ${cy2} ${x1} ${y1}`}
            fill={isLong ? color : 'var(--color-mithila-mango)'}
            stroke={outlineColor}
            strokeWidth="1.5"
            {...pathProps}
          />
        );
      })}
      
      <motion.circle cx="50" cy="50" r="30" fill="var(--color-mithila-ochre)" stroke={outlineColor} strokeWidth="2" {...pathProps} />
      <motion.circle cx="50" cy="50" r="26" fill="var(--color-mithila-mango)" stroke={outlineColor} strokeWidth="1" strokeDasharray="2 2" {...pathProps} />
      
      <motion.path d="M35 40 Q40 35 48 38 M65 40 Q60 35 52 38" fill="none" stroke={outlineColor} strokeWidth="2" strokeLinecap="round" {...pathProps} />
      
      <motion.path d="M32 45 Q38 40 44 45 Q38 48 32 45 Z" fill="var(--color-mithila-ivory)" stroke={outlineColor} strokeWidth="1.5" {...pathProps} />
      <motion.circle cx="38" cy="44" r="2.5" fill={outlineColor} {...pathProps} />
      
      <motion.path d="M68 45 Q62 40 56 45 Q62 48 68 45 Z" fill="var(--color-mithila-ivory)" stroke={outlineColor} strokeWidth="1.5" {...pathProps} />
      <motion.circle cx="62" cy="44" r="2.5" fill={outlineColor} {...pathProps} />
      
      <motion.path d="M48 38 L50 55 L45 55" fill="none" stroke={outlineColor} strokeWidth="2" strokeLinejoin="round" {...pathProps} />
      
      <motion.path d="M42 65 Q50 72 58 65" fill="none" stroke={outlineColor} strokeWidth="2" strokeLinecap="round" {...pathProps} />
      <motion.path d="M45 65 Q50 68 55 65" fill="var(--color-mithila-crimson)" stroke={outlineColor} strokeWidth="1" {...pathProps} />
      
      <motion.path d="M48 30 L50 25 L52 30 Z" fill="var(--color-mithila-crimson)" stroke={outlineColor} strokeWidth="1" {...pathProps} />
      <motion.circle cx="50" cy="33" r="1.5" fill="var(--color-mithila-crimson)" {...pathProps} />
      
      <motion.circle cx="35" cy="55" r="3" fill="var(--color-mithila-crimson)" opacity="0.6" {...pathProps} />
      <motion.circle cx="65" cy="55" r="3" fill="var(--color-mithila-crimson)" opacity="0.6" {...pathProps} />
    </svg>
  );
}
