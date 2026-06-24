import React from 'react';

type BorderVariant = 'standard' | 'lotus' | 'peacock' | 'fish';

interface Props {
  children: React.ReactNode;
  variant?: BorderVariant;
  className?: string;
  containerClassName?: string;
}

export function MithilaBorder({ children, variant = 'standard', className = '', containerClassName = '' }: Props) {

  return (
    <div className={`relative ${containerClassName}`}>
      <div className="absolute inset-0 pointer-events-none z-10" aria-hidden="true">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <pattern id="pattern-standard" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect width="20" height="20" fill="var(--color-mithila-gold)" />
              <path d="M10 0 L20 10 L10 20 L0 10 Z" fill="var(--color-mithila-ivory)" stroke="var(--color-mithila-ink)" strokeWidth="1" />
              <circle cx="10" cy="10" r="2" fill="var(--color-mithila-crimson)" />
            </pattern>

            <pattern id="pattern-lotus" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              <rect width="30" height="30" fill="var(--color-mithila-ivory)" stroke="var(--color-mithila-ink)" strokeWidth="0.5" />
              <path d="M15 25 C5 20, 5 10, 15 5 C25 10, 25 20, 15 25 Z" fill="var(--color-mithila-lotus)" stroke="var(--color-mithila-ink)" strokeWidth="1" />
              <circle cx="15" cy="15" r="2" fill="var(--color-mithila-gold)" />
            </pattern>

            <pattern id="pattern-fish" x="0" y="0" width="40" height="20" patternUnits="userSpaceOnUse">
              <rect width="40" height="20" fill="var(--color-mithila-sky)" opacity="0.3" />
              <path d="M0 10 Q10 0 20 10 Q30 20 40 10" fill="none" stroke="var(--color-mithila-ink)" strokeWidth="1.5" />
              <path d="M0 20 Q10 10 20 20 Q30 30 40 20" fill="none" stroke="var(--color-mithila-ink)" strokeWidth="1.5" />
              <circle cx="10" cy="10" r="1.5" fill="var(--color-mithila-ochre)" />
              <circle cx="30" cy="10" r="1.5" fill="var(--color-mithila-ochre)" />
            </pattern>

            <pattern id="pattern-peacock" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <rect width="24" height="24" fill="var(--color-mithila-sapphire)" />
              <circle cx="12" cy="12" r="8" fill="var(--color-mithila-leaf)" stroke="var(--color-mithila-ink)" strokeWidth="1" />
              <circle cx="12" cy="12" r="4" fill="var(--color-mithila-gold)" stroke="var(--color-mithila-ink)" strokeWidth="1" />
              <circle cx="12" cy="12" r="1.5" fill="var(--color-mithila-ink)" />
            </pattern>

            <pattern id="pattern-petals" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
              <path d="M0 8 C4 0, 12 0, 16 8 C12 16, 4 16, 0 8 Z" fill="var(--color-mithila-crimson)" stroke="var(--color-mithila-ink)" strokeWidth="1" />
            </pattern>
          </defs>

          <g>
            <rect x="1" y="1" width="calc(100% - 2px)" height="calc(100% - 2px)" fill="none" stroke="var(--color-mithila-ink)" strokeWidth="3" />
            
            <rect x="4" y="4" width="calc(100% - 8px)" height="calc(100% - 8px)" fill="none" stroke={`url(#pattern-${variant})`} strokeWidth="12" />
            
            <rect x="4" y="4" width="calc(100% - 8px)" height="calc(100% - 8px)" fill="none" stroke="var(--color-mithila-ink)" strokeWidth="1" />
            <rect x="16" y="16" width="calc(100% - 32px)" height="calc(100% - 32px)" fill="none" stroke="var(--color-mithila-ink)" strokeWidth="1" />

            <rect x="18" y="18" width="calc(100% - 36px)" height="calc(100% - 36px)" fill="none" stroke="url(#pattern-petals)" strokeWidth="8" />

            <rect x="23" y="23" width="calc(100% - 46px)" height="calc(100% - 46px)" fill="none" stroke="var(--color-mithila-ink)" strokeWidth="1" />
          </g>
        </svg>
      </div>

      <div className={`p-[26px] ${className}`}>
        {children}
      </div>
    </div>
  );
}
