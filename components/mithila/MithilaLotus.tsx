import React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  color?: string;
  outlineColor?: string;
}

export function MithilaLotus({
  color = 'var(--color-mithila-lotus)',
  outlineColor = 'var(--color-mithila-ink)',
  className,
  ...props
}: Props) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <path
        d="M50 85 C30 70, 10 40, 50 15 C90 40, 70 70, 50 85 Z"
        fill={color}
        stroke={outlineColor}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M50 85 C20 75, 0 50, 20 25 C40 35, 50 55, 50 85 Z"
        fill={color}
        stroke={outlineColor}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M50 85 C80 75, 100 50, 80 25 C60 35, 50 55, 50 85 Z"
        fill={color}
        stroke={outlineColor}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M45 80 C10 80, -5 60, 5 40 C25 50, 45 65, 45 80 Z"
        fill={color}
        stroke={outlineColor}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M55 80 C90 80, 105 60, 95 40 C75 50, 55 65, 55 80 Z"
        fill={color}
        stroke={outlineColor}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M50 30 L50 70 M35 45 L45 75 M65 45 L55 75"
        stroke={outlineColor}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M40 85 Q50 95 60 85"
        fill="var(--color-mithila-leaf)"
        stroke={outlineColor}
        strokeWidth="3"
      />
    </svg>
  );
}
