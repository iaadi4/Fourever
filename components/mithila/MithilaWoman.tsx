import React from 'react';
import { motion } from 'framer-motion';

interface Props extends React.SVGProps<SVGSVGElement> {
  color?: string;
  outlineColor?: string;
  drawOn?: boolean;
}

export function MithilaWoman({
  color = 'var(--color-mithila-crimson)',
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
      transition: { duration: 1.5, ease: "easeInOut" as const }
    }
  };

  const pathProps = drawOn ? {
    variants: pathVariants,
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true }
  } : {};

  return (
    <svg viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <motion.path d="M30 30 L70 30 L65 10 L35 10 Z" fill="var(--color-mithila-ochre)" stroke={outlineColor} strokeWidth="2" strokeLinejoin="round" {...pathProps} />
      <motion.circle cx="40" cy="8" r="4" fill="var(--color-mithila-ivory)" stroke={outlineColor} strokeWidth="1.5" {...pathProps} />
      <motion.circle cx="50" cy="6" r="4" fill="var(--color-mithila-ivory)" stroke={outlineColor} strokeWidth="1.5" {...pathProps} />
      <motion.circle cx="60" cy="8" r="4" fill="var(--color-mithila-ivory)" stroke={outlineColor} strokeWidth="1.5" {...pathProps} />
      
      <motion.path d="M35 15 L65 15 M32 20 L68 20 M30 25 L70 25 M40 10 L40 30 M50 10 L50 30 M60 10 L60 30" stroke={outlineColor} strokeWidth="1" {...pathProps} />

      <motion.path d="M45 50 C45 35, 60 35, 60 50 C60 55, 58 60, 55 60 C50 65, 45 60, 45 50 Z" fill="var(--color-mithila-ochre)" stroke={outlineColor} strokeWidth="2" {...pathProps} />
      
      <motion.path d="M60 45 L65 50 L60 52 L62 55 L58 58" fill="none" stroke={outlineColor} strokeWidth="2" strokeLinejoin="round" {...pathProps} />
      
      <motion.path d="M50 48 Q55 45 60 48 Q55 50 50 48 Z" fill="var(--color-mithila-ivory)" stroke={outlineColor} strokeWidth="1.5" {...pathProps} />
      <motion.circle cx="55" cy="47.5" r="1.5" fill={outlineColor} {...pathProps} />
      <motion.path d="M50 45 Q55 43 60 46" fill="none" stroke={outlineColor} strokeWidth="1.5" {...pathProps} />
      
      <motion.path d="M45 40 C40 40, 35 45, 35 55 C35 65, 45 65, 48 60 C45 55, 45 45, 45 40 Z" fill={outlineColor} {...pathProps} />
      
      <motion.path d="M48 60 C30 70, 25 100, 30 140 L70 140 C75 100, 70 70, 55 60 Z" fill={color} stroke={outlineColor} strokeWidth="2" strokeLinejoin="round" {...pathProps} />
      
      <motion.path d="M45 60 C40 70, 40 85, 45 90 C55 90, 65 85, 65 75 C60 65, 55 60, 45 60 Z" fill="var(--color-mithila-sapphire)" stroke={outlineColor} strokeWidth="2" {...pathProps} />
      
      <motion.path d="M48 65 Q35 80 40 100 L45 105 Q45 85 52 70" fill="var(--color-mithila-ochre)" stroke={outlineColor} strokeWidth="2" {...pathProps} />
      <motion.path d="M55 65 Q70 80 65 100 L60 105 Q55 85 55 70" fill="var(--color-mithila-ochre)" stroke={outlineColor} strokeWidth="2" {...pathProps} />
      
      <motion.path d="M40 100 Q45 110 35 115" fill="none" stroke={outlineColor} strokeWidth="2" strokeLinecap="round" {...pathProps} />
      <motion.path d="M65 100 Q60 110 70 115" fill="none" stroke={outlineColor} strokeWidth="2" strokeLinecap="round" {...pathProps} />

      <motion.path d="M40 90 L48 85 M38 95 L46 90 M60 85 L68 90 M58 90 L66 95" stroke="var(--color-mithila-gold)" strokeWidth="2" {...pathProps} />
      
      <motion.path d="M35 140 L45 90 M45 140 L50 90 M55 140 L55 90 M65 140 L60 90" stroke={outlineColor} strokeWidth="1.5" strokeDasharray="4 2" {...pathProps} />
      <motion.path d="M30 130 L70 130 M30 135 L70 135" stroke="var(--color-mithila-gold)" strokeWidth="2" {...pathProps} />
      
      <motion.circle cx="48" cy="55" r="3" fill="var(--color-mithila-gold)" stroke={outlineColor} strokeWidth="1" {...pathProps} />
      <motion.path d="M45 65 Q55 70 65 60" fill="none" stroke="var(--color-mithila-gold)" strokeWidth="2" {...pathProps} />
      <motion.circle cx="55" cy="66" r="2" fill="var(--color-mithila-ivory)" stroke={outlineColor} strokeWidth="1" {...pathProps} />
    </svg>
  );
}
