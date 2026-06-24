import React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  color?: string;
  outlineColor?: string;
}

export function MithilaFox({
  color = 'var(--color-mithila-ochre)',
  outlineColor = 'var(--color-mithila-ink)',
  className,
  ...props
}: Props) {
  return (
    <svg viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <path
        d="M20 30 C5 40, 0 20, 10 15 C20 10, 25 25, 20 30 Z"
        fill={color}
        stroke={outlineColor}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      
      <path
        d="M20 30 C30 15, 60 15, 70 25 C75 30, 80 20, 90 25 L85 35 C70 40, 40 45, 20 30 Z"
        fill={color}
        stroke={outlineColor}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      
      <path d="M25 35 L15 50 L20 52" fill="none" stroke={outlineColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M35 38 L30 55 L35 55" fill="none" stroke={outlineColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M65 38 L70 55 L75 55" fill="none" stroke={outlineColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M75 35 L85 45 L90 42" fill="none" stroke={outlineColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      
      <path d="M85 22 L92 15 L90 25" fill={color} stroke={outlineColor} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M78 20 L82 12 L85 20" fill={color} stroke={outlineColor} strokeWidth="1.5" strokeLinejoin="round" />
      
      <circle cx="82" cy="27" r="1.5" fill="var(--color-mithila-ivory)" stroke={outlineColor} strokeWidth="1" />
      <circle cx="82.5" cy="27" r="0.8" fill={outlineColor} />
      
      <path d="M30 25 Q50 20 65 28" fill="none" stroke={outlineColor} strokeWidth="1" strokeDasharray="2 2" />
      <path d="M35 32 Q50 28 60 35" fill="none" stroke={outlineColor} strokeWidth="1" strokeDasharray="2 2" />
    </svg>
  );
}
