import React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  color?: string;
  outlineColor?: string;
}

export function MithilaPeacock({
  color = 'var(--color-mithila-sapphire)',
  outlineColor = 'var(--color-mithila-ink)',
  className,
  ...props
}: Props) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <path
        d="M50 60 C10 60, 0 10, 50 5 C100 10, 90 60, 50 60 Z"
        fill="var(--color-mithila-leaf)"
        stroke={outlineColor}
        strokeWidth="2"
      />
      {[20, 35, 50, 65, 80].map((x, i) => (
        <React.Fragment key={`feather-${i}`}>
          <circle cx={x} cy={20 + Math.abs(50-x)*0.3} r="6" fill="var(--color-mithila-gold)" stroke={outlineColor} strokeWidth="1.5" />
          <circle cx={x} cy={20 + Math.abs(50-x)*0.3} r="2" fill={color} stroke={outlineColor} strokeWidth="1" />
        </React.Fragment>
      ))}
      {[28, 42, 58, 72].map((x, i) => (
        <React.Fragment key={`feather-inner-${i}`}>
          <circle cx={x} cy={35 + Math.abs(50-x)*0.2} r="4" fill="var(--color-mithila-gold)" stroke={outlineColor} strokeWidth="1.5" />
          <circle cx={x} cy={35 + Math.abs(50-x)*0.2} r="1.5" fill={color} stroke={outlineColor} strokeWidth="1" />
        </React.Fragment>
      ))}
      
      <path
        d="M50 60 C30 65, 30 90, 50 95 C70 90, 70 65, 50 60 Z"
        fill={color}
        stroke={outlineColor}
        strokeWidth="2"
      />
      
      <path
        d="M55 70 Q75 60 85 45 Q90 35 85 30 Q75 30 75 40 Q65 60 50 70"
        fill={color}
        stroke={outlineColor}
        strokeWidth="2"
      />
      
      <path
        d="M85 32 L95 35 L86 38 Z"
        fill="var(--color-mithila-mango)"
        stroke={outlineColor}
        strokeWidth="1.5"
      />
      
      <circle cx="82" cy="35" r="2" fill="var(--color-mithila-ivory)" stroke={outlineColor} strokeWidth="1" />
      <circle cx="83" cy="35" r="0.8" fill={outlineColor} />
      
      <path d="M80 30 L75 20 M83 28 L80 18 M86 29 L85 20" stroke={outlineColor} strokeWidth="1.5" />
      <circle cx="75" cy="20" r="1.5" fill="var(--color-mithila-gold)" />
      <circle cx="80" cy="18" r="1.5" fill="var(--color-mithila-gold)" />
      <circle cx="85" cy="20" r="1.5" fill="var(--color-mithila-gold)" />
      
      <path d="M45 95 L40 105 M55 95 L60 105" stroke={outlineColor} strokeWidth="2" fill="none" />
      <path d="M38 105 L42 105 M58 105 L62 105" stroke={outlineColor} strokeWidth="2" fill="none" />
    </svg>
  );
}
