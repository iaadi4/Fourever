import React from 'react';

type BorderVariant = 'standard' | 'lotus' | 'peacock' | 'fish';

interface Props {
  children: React.ReactNode;
  variant?: BorderVariant;
  className?: string;
  containerClassName?: string;
}

export function MithilaBorder({ children, variant = 'standard', className = '', containerClassName = '' }: Props) {
  // We'll define the pattern based on the variant
  // standard: diamond chain
  // lotus: repeating lotus
  // peacock: repeating peacock eye
  // fish: repeating fish scales

  return (
    <div className={`relative ${containerClassName}`}>
      {/* The SVG Border Layer */}
      <div className="absolute inset-0 pointer-events-none z-10" aria-hidden="true">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            {/* Pattern for standard variant (diamonds) */}
            <pattern id="pattern-standard" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect width="20" height="20" fill="var(--color-mithila-gold)" />
              <path d="M10 0 L20 10 L10 20 L0 10 Z" fill="var(--color-mithila-ivory)" stroke="var(--color-mithila-ink)" strokeWidth="1" />
              <circle cx="10" cy="10" r="2" fill="var(--color-mithila-crimson)" />
            </pattern>

            {/* Pattern for lotus variant */}
            <pattern id="pattern-lotus" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              <rect width="30" height="30" fill="var(--color-mithila-ivory)" stroke="var(--color-mithila-ink)" strokeWidth="0.5" />
              {/* Simplified lotus pattern */}
              <path d="M15 25 C5 20, 5 10, 15 5 C25 10, 25 20, 15 25 Z" fill="var(--color-mithila-lotus)" stroke="var(--color-mithila-ink)" strokeWidth="1" />
              <circle cx="15" cy="15" r="2" fill="var(--color-mithila-gold)" />
            </pattern>

            {/* Pattern for fish variant */}
            <pattern id="pattern-fish" x="0" y="0" width="40" height="20" patternUnits="userSpaceOnUse">
              <rect width="40" height="20" fill="var(--color-mithila-sky)" opacity="0.3" />
              <path d="M0 10 Q10 0 20 10 Q30 20 40 10" fill="none" stroke="var(--color-mithila-ink)" strokeWidth="1.5" />
              <path d="M0 20 Q10 10 20 20 Q30 30 40 20" fill="none" stroke="var(--color-mithila-ink)" strokeWidth="1.5" />
              <circle cx="10" cy="10" r="1.5" fill="var(--color-mithila-ochre)" />
              <circle cx="30" cy="10" r="1.5" fill="var(--color-mithila-ochre)" />
            </pattern>

            {/* Pattern for peacock variant */}
            <pattern id="pattern-peacock" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <rect width="24" height="24" fill="var(--color-mithila-sapphire)" />
              <circle cx="12" cy="12" r="8" fill="var(--color-mithila-leaf)" stroke="var(--color-mithila-ink)" strokeWidth="1" />
              <circle cx="12" cy="12" r="4" fill="var(--color-mithila-gold)" stroke="var(--color-mithila-ink)" strokeWidth="1" />
              <circle cx="12" cy="12" r="1.5" fill="var(--color-mithila-ink)" />
            </pattern>

            {/* Third layer: Lotus petal row in crimson */}
            <pattern id="pattern-petals" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
              <path d="M0 8 C4 0, 12 0, 16 8 C12 16, 4 16, 0 8 Z" fill="var(--color-mithila-crimson)" stroke="var(--color-mithila-ink)" strokeWidth="1" />
            </pattern>
          </defs>

          {/* Group translating the border components */}
          <g>
            {/* Outermost thick black stroke equivalent */}
            <rect x="1" y="1" width="calc(100% - 2px)" height="calc(100% - 2px)" fill="none" stroke="var(--color-mithila-ink)" strokeWidth="3" />
            
            {/* Second layer: Variant pattern */}
            <rect x="4" y="4" width="calc(100% - 8px)" height="calc(100% - 8px)" fill="none" stroke={`url(#pattern-${variant})`} strokeWidth="12" />
            
            {/* Outer border of pattern */}
            <rect x="4" y="4" width="calc(100% - 8px)" height="calc(100% - 8px)" fill="none" stroke="var(--color-mithila-ink)" strokeWidth="1" />
            <rect x="16" y="16" width="calc(100% - 32px)" height="calc(100% - 32px)" fill="none" stroke="var(--color-mithila-ink)" strokeWidth="1" />

            {/* Third layer: Lotus petal row */}
            <rect x="18" y="18" width="calc(100% - 36px)" height="calc(100% - 36px)" fill="none" stroke="url(#pattern-petals)" strokeWidth="8" />

            {/* Innermost thin black stroke */}
            <rect x="23" y="23" width="calc(100% - 46px)" height="calc(100% - 46px)" fill="none" stroke="var(--color-mithila-ink)" strokeWidth="1" />
          </g>
        </svg>
      </div>

      {/* Content wrapper with appropriate padding to avoid the border */}
      <div className={`p-[26px] ${className}`}>
        {children}
      </div>
    </div>
  );
}
