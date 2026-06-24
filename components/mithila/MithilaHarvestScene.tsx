import React from 'react';
import { motion } from 'framer-motion';

interface Props extends React.SVGProps<SVGSVGElement> {
  drawOn?: boolean;
}

export function MithilaHarvestScene({
  drawOn = false,
  className,
  ...props
}: Props) {
  const ink = 'var(--color-mithila-ink)';

  const fadeProps = drawOn ? {
    variants: { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8 } } },
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true }
  } : {};

  const drawProps = drawOn ? {
    variants: { hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 1.2, ease: "easeInOut" as const } } },
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true }
  } : {};

  return (
    <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      {/* Sky */}
      <rect width="400" height="200" fill="var(--color-mithila-ivory)" />

      {/* Water band */}
      <motion.rect x="0" y="120" width="400" height="80" fill="var(--color-mithila-sky)" opacity="0.3" {...fadeProps} />
      <motion.path d="M0 130 Q20 125 40 130 T80 130 T120 130 T160 130 T200 130 T240 130 T280 130 T320 130 T360 130 T400 130" fill="none" stroke="var(--color-mithila-sky)" strokeWidth="1.5" opacity="0.5" {...drawProps} />
      <motion.path d="M0 145 Q25 140 50 145 T100 145 T150 145 T200 145 T250 145 T300 145 T350 145 T400 145" fill="none" stroke="var(--color-mithila-sky)" strokeWidth="1" opacity="0.3" {...drawProps} />

      {/* Lotus pads */}
      <motion.ellipse cx="55" cy="145" rx="22" ry="7" fill="var(--color-mithila-leaf)" stroke={ink} strokeWidth="1.5" {...fadeProps} />
      <motion.ellipse cx="200" cy="155" rx="18" ry="6" fill="var(--color-mithila-leaf)" stroke={ink} strokeWidth="1.5" {...fadeProps} />
      <motion.ellipse cx="340" cy="148" rx="20" ry="6" fill="var(--color-mithila-leaf)" stroke={ink} strokeWidth="1.5" {...fadeProps} />

      {/* Lotus flower — left */}
      <motion.path d="M50 138 C42 125 42 110 50 100 C58 110 58 125 50 138 Z" fill="var(--color-mithila-lotus)" stroke={ink} strokeWidth="1.5" {...fadeProps} />
      <motion.path d="M50 138 C38 128 32 115 40 105 C50 115 50 130 50 138 Z" fill="var(--color-mithila-lotus)" stroke={ink} strokeWidth="1.5" opacity="0.85" {...fadeProps} />
      <motion.path d="M50 138 C62 128 68 115 60 105 C50 115 50 130 50 138 Z" fill="var(--color-mithila-lotus)" stroke={ink} strokeWidth="1.5" opacity="0.85" {...fadeProps} />
      <motion.circle cx="50" cy="118" r="3" fill="var(--color-mithila-gold)" stroke={ink} strokeWidth="1" {...fadeProps} />

      {/* Lotus flower — right */}
      <motion.path d="M345 140 C337 127 337 112 345 102 C353 112 353 127 345 140 Z" fill="var(--color-mithila-lotus)" stroke={ink} strokeWidth="1.5" {...fadeProps} />
      <motion.path d="M345 140 C333 130 327 117 335 107 C345 117 345 132 345 140 Z" fill="var(--color-mithila-lotus)" stroke={ink} strokeWidth="1.5" opacity="0.85" {...fadeProps} />
      <motion.path d="M345 140 C357 130 363 117 355 107 C345 117 345 132 345 140 Z" fill="var(--color-mithila-lotus)" stroke={ink} strokeWidth="1.5" opacity="0.85" {...fadeProps} />
      <motion.circle cx="345" cy="120" r="3" fill="var(--color-mithila-gold)" stroke={ink} strokeWidth="1" {...fadeProps} />

      {/* === Figure 1 — woman on left === */}
      {/* Head */}
      <motion.circle cx="145" cy="42" r="12" fill="var(--color-mithila-ochre)" stroke={ink} strokeWidth="2" {...fadeProps} />
      {/* Hair — simple dark cap */}
      <motion.path d="M133 40 Q133 28 145 26 Q157 28 157 40" fill={ink} {...fadeProps} />
      {/* Bindi */}
      <motion.circle cx="145" cy="36" r="1.5" fill="var(--color-mithila-crimson)" {...fadeProps} />
      {/* Body — triangle/trapezoid sari */}
      <motion.path d="M140 54 L125 130 L165 130 L150 54 Z" fill="var(--color-mithila-crimson)" stroke={ink} strokeWidth="2" {...fadeProps} />
      {/* Sari border */}
      <motion.path d="M126 125 L164 125" stroke="var(--color-mithila-gold)" strokeWidth="2.5" {...drawProps} />
      {/* Arm reaching out */}
      <motion.path d="M150 70 Q170 75 180 90" fill="none" stroke="var(--color-mithila-ochre)" strokeWidth="4" strokeLinecap="round" {...drawProps} />
      <motion.path d="M150 70 Q170 75 180 90" fill="none" stroke={ink} strokeWidth="1.5" strokeLinecap="round" {...drawProps} />
      {/* Makhana seed pod in hand */}
      <motion.circle cx="182" cy="95" r="5" fill="var(--color-mithila-leaf)" stroke={ink} strokeWidth="1.5" {...fadeProps} />
      <motion.circle cx="180" cy="93" r="1.8" fill="var(--color-mithila-ivory)" stroke={ink} strokeWidth="0.5" {...fadeProps} />
      <motion.circle cx="184" cy="93" r="1.8" fill="var(--color-mithila-ivory)" stroke={ink} strokeWidth="0.5" {...fadeProps} />
      <motion.circle cx="182" cy="97" r="1.8" fill="var(--color-mithila-ivory)" stroke={ink} strokeWidth="0.5" {...fadeProps} />

      {/* Basket on head */}
      <motion.path d="M133 28 L157 28 L154 14 L136 14 Z" fill="var(--color-mithila-ochre)" stroke={ink} strokeWidth="1.5" {...fadeProps} />
      <motion.path d="M138 18 L152 18 M136 22 L154 22" stroke={ink} strokeWidth="0.8" {...drawProps} />
      {/* Makhana in basket */}
      <motion.circle cx="141" cy="12" r="3" fill="var(--color-mithila-ivory)" stroke={ink} strokeWidth="0.8" {...fadeProps} />
      <motion.circle cx="148" cy="10" r="3" fill="var(--color-mithila-ivory)" stroke={ink} strokeWidth="0.8" {...fadeProps} />
      <motion.circle cx="154" cy="13" r="2.5" fill="var(--color-mithila-ivory)" stroke={ink} strokeWidth="0.8" {...fadeProps} />

      {/* === Figure 2 — woman on right === */}
      {/* Head */}
      <motion.circle cx="260" cy="47" r="12" fill="var(--color-mithila-ochre)" stroke={ink} strokeWidth="2" {...fadeProps} />
      {/* Hair */}
      <motion.path d="M248 45 Q248 33 260 31 Q272 33 272 45" fill={ink} {...fadeProps} />
      {/* Bindi */}
      <motion.circle cx="260" cy="41" r="1.5" fill="var(--color-mithila-crimson)" {...fadeProps} />
      {/* Body */}
      <motion.path d="M255 59 L240 135 L280 135 L265 59 Z" fill="var(--color-mithila-mango)" stroke={ink} strokeWidth="2" {...fadeProps} />
      {/* Sari border */}
      <motion.path d="M241 130 L279 130" stroke="var(--color-mithila-gold)" strokeWidth="2.5" {...drawProps} />
      {/* Arm bending down */}
      <motion.path d="M254 75 Q238 90 235 115" fill="none" stroke="var(--color-mithila-ochre)" strokeWidth="4" strokeLinecap="round" {...drawProps} />
      <motion.path d="M254 75 Q238 90 235 115" fill="none" stroke={ink} strokeWidth="1.5" strokeLinecap="round" {...drawProps} />
      {/* Lotus pod in hand */}
      <motion.circle cx="234" cy="120" r="5" fill="var(--color-mithila-leaf)" stroke={ink} strokeWidth="1.5" {...fadeProps} />
      <motion.circle cx="232" cy="118" r="1.8" fill="var(--color-mithila-ivory)" stroke={ink} strokeWidth="0.5" {...fadeProps} />
      <motion.circle cx="236" cy="118" r="1.8" fill="var(--color-mithila-ivory)" stroke={ink} strokeWidth="0.5" {...fadeProps} />

      {/* Fish in water */}
      <motion.path d="M100 165 C108 160 118 160 122 165 C118 170 108 170 100 165 Z" fill="var(--color-mithila-ochre)" stroke={ink} strokeWidth="1" {...fadeProps} />
      <motion.path d="M100 165 L94 160 Q96 165 94 170 Z" fill="var(--color-mithila-ochre)" stroke={ink} strokeWidth="1" {...fadeProps} />
      <motion.circle cx="118" cy="164" r="1.2" fill={ink} {...fadeProps} />

      {/* Sun */}
      <motion.circle cx="350" cy="30" r="18" fill="var(--color-mithila-mango)" stroke={ink} strokeWidth="1.5" {...fadeProps} />
      <motion.circle cx="350" cy="30" r="14" fill="var(--color-mithila-gold)" stroke={ink} strokeWidth="1" strokeDasharray="2 2" {...fadeProps} />

      {/* Birds */}
      <motion.path d="M80 20 Q84 16 88 20 Q92 16 96 20" fill="none" stroke={ink} strokeWidth="1.3" strokeLinecap="round" {...drawProps} />
      <motion.path d="M115 12 Q118 9 121 12 Q124 9 127 12" fill="none" stroke={ink} strokeWidth="1" strokeLinecap="round" {...drawProps} />
    </svg>
  );
}
