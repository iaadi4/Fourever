import React from 'react';
import { motion } from 'framer-motion';

interface Props extends React.SVGProps<SVGSVGElement> {
  drawOn?: boolean;
}

export function MithilaPackScene({
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
      <rect width="400" height="200" fill="var(--color-mithila-ivory)" />

      {/* Ground */}
      <motion.rect x="0" y="165" width="400" height="35" fill="var(--color-mithila-ochre)" opacity="0.15" {...fadeProps} />

      {/* Rangoli on floor */}
      <motion.circle cx="200" cy="185" r="10" fill="none" stroke="var(--color-mithila-crimson)" strokeWidth="1.2" strokeDasharray="3 2" {...drawProps} />
      <motion.circle cx="200" cy="185" r="4" fill="var(--color-mithila-crimson)" opacity="0.25" {...fadeProps} />

      {/* === Makhana bowl — center === */}
      <motion.path d="M160 135 C160 155 240 155 240 135" fill="var(--color-mithila-ochre)" stroke={ink} strokeWidth="2" {...fadeProps} />
      <motion.path d="M162 135 C162 130 238 130 238 135" fill="var(--color-mithila-gold)" stroke={ink} strokeWidth="1.5" {...fadeProps} />
      {/* Makhana heap */}
      {[175, 188, 200, 212, 225].map((x, i) => (
        <motion.circle key={`b${i}`} cx={x} cy={130 + (i % 2 ? -2 : 0)} r="5" fill="var(--color-mithila-ivory)" stroke={ink} strokeWidth="1" {...fadeProps} />
      ))}
      {[184, 200, 216].map((x, i) => (
        <motion.circle key={`t${i}`} cx={x} cy="122" r="4" fill="var(--color-mithila-ivory)" stroke={ink} strokeWidth="0.8" {...fadeProps} />
      ))}

      {/* === Woman #1 — filling pouches, left === */}
      {/* Head */}
      <motion.circle cx="88" cy="42" r="12" fill="var(--color-mithila-ochre)" stroke={ink} strokeWidth="2" {...fadeProps} />
      {/* Hair */}
      <motion.path d="M76 40 Q76 28 88 26 Q100 28 100 40" fill={ink} {...fadeProps} />
      {/* Bindi */}
      <motion.circle cx="88" cy="36" r="1.5" fill="var(--color-mithila-crimson)" {...fadeProps} />
      {/* Body */}
      <motion.path d="M83 54 L68 148 L108 148 L93 54 Z" fill="var(--color-mithila-leaf)" stroke={ink} strokeWidth="2" {...fadeProps} />
      {/* Sari border */}
      <motion.path d="M69 143 L107 143" stroke="var(--color-mithila-gold)" strokeWidth="2.5" {...drawProps} />
      {/* Arm reaching to pouch */}
      <motion.path d="M93 68 Q115 78 130 95 L140 110" fill="none" stroke="var(--color-mithila-ochre)" strokeWidth="4" strokeLinecap="round" {...drawProps} />
      <motion.path d="M93 68 Q115 78 130 95 L140 110" fill="none" stroke={ink} strokeWidth="1.5" strokeLinecap="round" {...drawProps} />

      {/* Pouch */}
      <motion.path d="M128 105 L124 145 L155 145 L151 105 Z" fill="var(--color-mithila-mango)" stroke={ink} strokeWidth="2" strokeLinejoin="round" {...fadeProps} />
      <motion.path d="M126 108 C135 104 145 104 153 108" fill="none" stroke={ink} strokeWidth="1.2" {...drawProps} />
      {/* Makhana going in */}
      <motion.circle cx="138" cy="115" r="3" fill="var(--color-mithila-ivory)" stroke={ink} strokeWidth="0.8" {...fadeProps} />
      <motion.circle cx="145" cy="117" r="2.5" fill="var(--color-mithila-ivory)" stroke={ink} strokeWidth="0.8" {...fadeProps} />
      {/* Pattern on pouch */}
      <motion.path d="M135 130 Q139.5 125 144 130 Q139.5 135 135 130 Z" fill="var(--color-mithila-crimson)" stroke={ink} strokeWidth="0.8" {...fadeProps} />

      {/* === Woman #2 — painting on box, right === */}
      {/* Head */}
      <motion.circle cx="310" cy="38" r="12" fill="var(--color-mithila-ochre)" stroke={ink} strokeWidth="2" {...fadeProps} />
      {/* Hair */}
      <motion.path d="M298 36 Q298 24 310 22 Q322 24 322 36" fill={ink} {...fadeProps} />
      {/* Bindi */}
      <motion.circle cx="310" cy="32" r="1.5" fill="var(--color-mithila-crimson)" {...fadeProps} />
      {/* Body */}
      <motion.path d="M305 50 L290 148 L330 148 L315 50 Z" fill="var(--color-mithila-sapphire)" stroke={ink} strokeWidth="2" {...fadeProps} />
      {/* Sari border */}
      <motion.path d="M291 143 L329 143" stroke="var(--color-mithila-gold)" strokeWidth="2.5" {...drawProps} />
      {/* Arm with brush */}
      <motion.path d="M305 65 Q280 78 265 95 L255 108" fill="none" stroke="var(--color-mithila-ochre)" strokeWidth="4" strokeLinecap="round" {...drawProps} />
      <motion.path d="M305 65 Q280 78 265 95 L255 108" fill="none" stroke={ink} strokeWidth="1.5" strokeLinecap="round" {...drawProps} />
      {/* Brush */}
      <motion.path d="M255 108 L252 120" stroke="var(--color-mithila-ochre)" strokeWidth="2" strokeLinecap="round" {...drawProps} />
      <motion.path d="M252 120 L250 125" stroke="var(--color-mithila-crimson)" strokeWidth="1.5" strokeLinecap="round" {...drawProps} />

      {/* Box being painted */}
      <motion.rect x="232" y="120" width="45" height="35" fill="var(--color-mithila-ivory)" stroke={ink} strokeWidth="2" {...fadeProps} />
      {/* Art on box */}
      <motion.path d="M244 132 Q250 126 256 132 Q262 126 268 132" fill="none" stroke="var(--color-mithila-crimson)" strokeWidth="1.5" {...drawProps} />
      <motion.circle cx="256" cy="140" r="3" fill="var(--color-mithila-gold)" stroke={ink} strokeWidth="0.8" {...fadeProps} />

      {/* Stacked pouches — far right */}
      <motion.path d="M348 130 L344 158 L368 158 L364 130 Z" fill="var(--color-mithila-mango)" stroke={ink} strokeWidth="1.5" {...fadeProps} />
      <motion.path d="M354 133 L350 158 L374 158 L370 133 Z" fill="var(--color-mithila-crimson)" stroke={ink} strokeWidth="1.5" {...fadeProps} />
      <motion.path d="M360 136 L356 158 L380 158 L376 136 Z" fill="var(--color-mithila-leaf)" stroke={ink} strokeWidth="1.5" {...fadeProps} />
      {/* Labels */}
      <motion.circle cx="356" cy="145" r="2" fill="var(--color-mithila-gold)" {...fadeProps} />
      <motion.circle cx="362" cy="147" r="2" fill="var(--color-mithila-gold)" {...fadeProps} />
      <motion.circle cx="368" cy="149" r="2" fill="var(--color-mithila-gold)" {...fadeProps} />

      {/* Paint bowls */}
      <motion.path d="M270 153 C270 160 282 160 282 153" fill="var(--color-mithila-crimson)" stroke={ink} strokeWidth="1.2" {...fadeProps} />
      <motion.path d="M284 155 C284 160 293 160 293 155" fill="var(--color-mithila-gold)" stroke={ink} strokeWidth="1" {...fadeProps} />

      {/* Diya lamp */}
      <motion.path d="M38 155 C38 162 52 162 52 155 L48 150 L42 150 Z" fill="var(--color-mithila-ochre)" stroke={ink} strokeWidth="1.2" {...fadeProps} />
      <motion.path d="M45 150 L45 142" stroke={ink} strokeWidth="1" {...drawProps} />
      <motion.path d="M43 142 Q45 136 47 142" fill="var(--color-mithila-mango)" stroke={ink} strokeWidth="0.8" {...fadeProps} />
    </svg>
  );
}
