import React from 'react';
import { motion } from 'framer-motion';

interface Props extends React.SVGProps<SVGSVGElement> {
  color?: string;
  outlineColor?: string;
  drawOn?: boolean;
}

export function MithilaLotus({
  color = 'var(--color-mithila-lotus)',
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
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      {/* Base petal */}
      <motion.path
        d="M50 85 C30 70, 10 40, 50 15 C90 40, 70 70, 50 85 Z"
        fill={color}
        stroke={outlineColor}
        strokeWidth="3"
        strokeLinejoin="round"
        {...pathProps}
      />
      {/* Left petal */}
      <motion.path
        d="M50 85 C20 75, 0 50, 20 25 C40 35, 50 55, 50 85 Z"
        fill={color}
        stroke={outlineColor}
        strokeWidth="3"
        strokeLinejoin="round"
        {...pathProps}
      />
      {/* Right petal */}
      <motion.path
        d="M50 85 C80 75, 100 50, 80 25 C60 35, 50 55, 50 85 Z"
        fill={color}
        stroke={outlineColor}
        strokeWidth="3"
        strokeLinejoin="round"
        {...pathProps}
      />
      {/* Outer Left petal */}
      <motion.path
        d="M45 80 C10 80, -5 60, 5 40 C25 50, 45 65, 45 80 Z"
        fill={color}
        stroke={outlineColor}
        strokeWidth="3"
        strokeLinejoin="round"
        {...pathProps}
      />
      {/* Outer Right petal */}
      <motion.path
        d="M55 80 C90 80, 105 60, 95 40 C75 50, 55 65, 55 80 Z"
        fill={color}
        stroke={outlineColor}
        strokeWidth="3"
        strokeLinejoin="round"
        {...pathProps}
      />
      {/* Decorative center lines typical of Mithila art */}
      <motion.path
        d="M50 30 L50 70 M35 45 L45 75 M65 45 L55 75"
        stroke={outlineColor}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        {...pathProps}
      />
      {/* Base stem/receptacle */}
      <motion.path
        d="M40 85 Q50 95 60 85"
        fill="var(--color-mithila-leaf)"
        stroke={outlineColor}
        strokeWidth="3"
        {...pathProps}
      />
    </svg>
  );
}
