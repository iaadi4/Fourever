import React from 'react';
import { motion } from 'framer-motion';

interface Props extends React.SVGProps<SVGSVGElement> {
  drawOn?: boolean;
}

export function MithilaRoastScene({
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
      <motion.rect x="0" y="165" width="400" height="35" fill="var(--color-mithila-ochre)" opacity="0.2" {...fadeProps} />

      {/* === Fire === */}
      {/* Logs */}
      <motion.path d="M155 172 L245 172" stroke="var(--color-mithila-ochre)" strokeWidth="7" strokeLinecap="round" {...drawProps} />
      <motion.path d="M165 178 L235 178" stroke="var(--color-mithila-ochre)" strokeWidth="5" strokeLinecap="round" {...drawProps} />
      <motion.path d="M155 172 L245 172" stroke={ink} strokeWidth="1.2" strokeLinecap="round" {...drawProps} />

      {/* Flames */}
      <motion.path d="M185 168 Q197 140 200 120 Q203 140 215 168 Z" fill="var(--color-mithila-crimson)" stroke={ink} strokeWidth="1.5" {...fadeProps} />
      <motion.path d="M190 168 Q198 148 200 132 Q202 148 210 168 Z" fill="var(--color-mithila-mango)" stroke={ink} strokeWidth="1" {...fadeProps} />
      <motion.path d="M195 168 Q200 152 200 142 Q200 152 205 168 Z" fill="var(--color-mithila-gold)" {...fadeProps} />
      {/* Side flames */}
      <motion.path d="M178 170 Q183 155 188 168 Z" fill="var(--color-mithila-crimson)" opacity="0.7" {...fadeProps} />
      <motion.path d="M212 168 Q217 155 222 170 Z" fill="var(--color-mithila-crimson)" opacity="0.7" {...fadeProps} />

      {/* === Kadhai === */}
      <motion.path d="M150 140 C150 168 250 168 250 140" fill="none" stroke={ink} strokeWidth="3" strokeLinecap="round" {...drawProps} />
      <motion.path d="M150 140 L140 135 M250 140 L260 135" stroke={ink} strokeWidth="2.5" strokeLinecap="round" {...drawProps} />
      {/* Kadhai interior */}
      <motion.path d="M155 143 C155 163 245 163 245 143" fill={ink} opacity="0.1" {...fadeProps} />

      {/* Makhana in kadhai */}
      {[170, 182, 194, 206, 218, 230].map((x, i) => (
        <motion.circle key={i} cx={x} cy={145 + (i % 2 ? -2 : 0)} r="4" fill="var(--color-mithila-ivory)" stroke={ink} strokeWidth="1" {...fadeProps} />
      ))}
      {/* Popping makhana */}
      <motion.circle cx="188" cy="128" r="3" fill="var(--color-mithila-ivory)" stroke={ink} strokeWidth="0.8" opacity="0.7" {...fadeProps} />
      <motion.circle cx="212" cy="124" r="2.5" fill="var(--color-mithila-ivory)" stroke={ink} strokeWidth="0.8" opacity="0.6" {...fadeProps} />

      {/* === Woman — left, stirring === */}
      {/* Head */}
      <motion.circle cx="90" cy="55" r="12" fill="var(--color-mithila-ochre)" stroke={ink} strokeWidth="2" {...fadeProps} />
      {/* Hair cap */}
      <motion.path d="M78 53 Q78 41 90 39 Q102 41 102 53" fill={ink} {...fadeProps} />
      {/* Bindi */}
      <motion.circle cx="90" cy="49" r="1.5" fill="var(--color-mithila-crimson)" {...fadeProps} />
      {/* Body */}
      <motion.path d="M85 67 L70 150 L110 150 L95 67 Z" fill="var(--color-mithila-crimson)" stroke={ink} strokeWidth="2" {...fadeProps} />
      {/* Sari border */}
      <motion.path d="M71 145 L109 145" stroke="var(--color-mithila-gold)" strokeWidth="2.5" {...drawProps} />
      {/* Arm + ladle */}
      <motion.path d="M95 80 Q120 90 145 115 L160 145" fill="none" stroke="var(--color-mithila-ochre)" strokeWidth="4" strokeLinecap="round" {...drawProps} />
      <motion.path d="M95 80 Q120 90 145 115 L160 145" fill="none" stroke={ink} strokeWidth="1.5" strokeLinecap="round" {...drawProps} />
      {/* Ladle spoon */}
      <motion.path d="M156 145 C152 155 166 155 162 145" fill="var(--color-mithila-ochre)" stroke={ink} strokeWidth="1.5" {...fadeProps} />

      {/* === Man — right, tending fire === */}
      {/* Head */}
      <motion.circle cx="315" cy="55" r="12" fill="var(--color-mithila-ochre)" stroke={ink} strokeWidth="2" {...fadeProps} />
      {/* Turban */}
      <motion.path d="M303 52 Q300 38 315 34 Q330 38 327 52" fill="var(--color-mithila-mango)" stroke={ink} strokeWidth="1.5" {...fadeProps} />
      <motion.path d="M306 45 Q315 40 324 45" fill="none" stroke={ink} strokeWidth="0.8" {...drawProps} />
      {/* Body — kurta */}
      <motion.path d="M310 67 L295 150 L335 150 L320 67 Z" fill="var(--color-mithila-ivory)" stroke={ink} strokeWidth="2" {...fadeProps} />
      {/* Border */}
      <motion.path d="M296 145 L334 145" stroke="var(--color-mithila-ochre)" strokeWidth="2" {...drawProps} />
      {/* Arm + fire poker */}
      <motion.path d="M310 80 Q285 100 265 130 L248 165" fill="none" stroke="var(--color-mithila-ochre)" strokeWidth="4" strokeLinecap="round" {...drawProps} />
      <motion.path d="M310 80 Q285 100 265 130 L248 165" fill="none" stroke={ink} strokeWidth="1.5" strokeLinecap="round" {...drawProps} />

      {/* Smoke */}
      <motion.path d="M198 110 Q193 95 198 80 Q203 65 198 50" fill="none" stroke={ink} strokeWidth="1.2" opacity="0.15" strokeLinecap="round" {...drawProps} />
      <motion.path d="M206 105 Q211 90 206 75 Q201 60 206 45" fill="none" stroke={ink} strokeWidth="1" opacity="0.1" strokeLinecap="round" {...drawProps} />

      {/* Decorative dots */}
      {[30, 55, 350, 375].map((x) => (
        <motion.circle key={x} cx={x} cy="185" r="2" fill="var(--color-mithila-crimson)" opacity="0.35" {...fadeProps} />
      ))}
    </svg>
  );
}
