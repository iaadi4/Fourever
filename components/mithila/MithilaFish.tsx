import React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  color?: string;
  outlineColor?: string;
}

export function MithilaFish({
  color = 'var(--color-mithila-ochre)',
  outlineColor = 'var(--color-mithila-ink)',
  className,
  ...props
}: Props) {
  return (
    <svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <path
        d="M20 25 L5 10 C15 15, 15 35, 5 40 Z"
        fill={color}
        stroke={outlineColor}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M20 25 C30 5, 70 5, 95 25 C70 45, 30 45, 20 25 Z"
        fill={color}
        stroke={outlineColor}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M75 12 Q70 25 75 38"
        fill="none"
        stroke={outlineColor}
        strokeWidth="2"
      />
      <circle cx="82" cy="22" r="4" fill="var(--color-mithila-ivory)" stroke={outlineColor} strokeWidth="2" />
      <circle cx="83" cy="22" r="1.5" fill={outlineColor} />
      
      <path
        d="M30 15 L40 35 M40 12 L50 38 M50 10 L60 40 M60 12 L70 38"
        stroke={outlineColor}
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M35 30 L45 10 M45 35 L55 8 M55 38 L65 10"
        stroke={outlineColor}
        strokeWidth="1"
        fill="none"
      />
      
      <path
        d="M45 10 C50 0, 60 5, 55 10 Z"
        fill={color}
        stroke={outlineColor}
        strokeWidth="2"
      />
      <path
        d="M45 40 C50 50, 60 45, 55 40 Z"
        fill={color}
        stroke={outlineColor}
        strokeWidth="2"
      />
    </svg>
  );
}
