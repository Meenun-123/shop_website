import React from 'react';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'dark',
  size = 'md',
  showTagline = true,
  className = '',
}) => {
  const isLight = variant === 'light';

  const emblemDimensions = {
    sm: 'w-7 h-7',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
  }[size];

  const titleSizes = {
    sm: 'text-base tracking-[0.18em]',
    md: 'text-xl tracking-[0.22em]',
    lg: 'text-2xl tracking-[0.25em]',
  }[size];

  const subSizes = {
    sm: 'text-[9px] tracking-[0.35em]',
    md: 'text-[11px] tracking-[0.42em]',
    lg: 'text-[13px] tracking-[0.45em]',
  }[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Precision Geometric Faceted V Emblem */}
      <div className={`relative flex-shrink-0 ${emblemDimensions}`}>
        <svg
          viewBox="0 0 100 90"
          className="w-full h-full drop-shadow-sm transition-transform duration-500 hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle 3D shadow underneath */}
          <ellipse cx="50" cy="85" rx="35" ry="5" fill="rgba(0,0,0,0.15)" />

          {/* Left Wing Facets (Red -> Orange -> Amber -> Emerald) */}
          {/* Top Outer Red facet */}
          <polygon points="12,10 34,10 24,32" fill="#E63946" />
          {/* Top Inner Crimson facet */}
          <polygon points="34,10 44,24 24,32" fill="#D90429" />
          {/* Mid Outer Orange facet */}
          <polygon points="12,10 24,32 30,52" fill="#F77F00" />
          {/* Mid Inner Warm Amber facet */}
          <polygon points="24,32 44,24 38,48" fill="#FCBF49" />
          {/* Lower Outer Lime facet */}
          <polygon points="30,52 38,48 50,78" fill="#8AC926" />
          {/* Lower Inner Forest Green facet */}
          <polygon points="38,48 44,24 50,78" fill="#40916C" />

          {/* Right Wing Facets (Cyan -> Azure -> Deep Cobalt -> Purple) */}
          {/* Top Outer Violet facet */}
          <polygon points="88,10 66,10 76,32" fill="#7209B7" />
          {/* Top Inner Indigo facet */}
          <polygon points="66,10 56,24 76,32" fill="#4361EE" />
          {/* Mid Outer Azure facet */}
          <polygon points="88,10 76,32 70,52" fill="#4CC9F0" />
          {/* Mid Inner Cyan-Teal facet */}
          <polygon points="76,32 56,24 62,48" fill="#00B4D8" />
          {/* Lower Outer Aqua facet */}
          <polygon points="70,52 62,48 50,78" fill="#2A9D8F" />
          {/* Lower Inner Deep Blue-Green facet */}
          <polygon points="62,48 56,24 50,78" fill="#1D3557" />

          {/* Central geometric focal highlight */}
          <polygon points="44,24 50,34 56,24 50,78" fill="rgba(255,255,255,0.22)" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <span
          className={`font-bold font-sans uppercase leading-none ${titleSizes} ${
            isLight ? 'text-white' : 'text-[#20201E]'
          }`}
          style={{ letterSpacing: '0.24em' }}
        >
          VIJAYA SAI
        </span>
        {showTagline && (
          <span
            className={`font-semibold uppercase mt-1 leading-none ${subSizes} ${
              isLight ? 'text-[#B7A17B]' : 'text-[#8E7752]'
            }`}
            style={{ letterSpacing: '0.38em' }}
          >
            ENTERPRISES
          </span>
        )}
      </div>
    </div>
  );
};
