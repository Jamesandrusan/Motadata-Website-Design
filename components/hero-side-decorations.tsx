"use client";

import React from "react";

/**
 * Elegant geometric decorations with synchronized subtle animations.
 * Abstract, modern patterns that complement the hero section.
 */
export function HeroSideDecorations() {
  return (
    <>
      {/* Left Side - Abstract Geometric Patterns */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-[25vw] overflow-hidden opacity-25">
        {/* Connected dots pattern - top */}
        <svg
          className="absolute left-[12%] top-[15%] animate-[pulse_4s_ease-in-out_infinite]"
          width="65"
          height="65"
          viewBox="0 0 65 65"
          fill="none"
        >
          <circle cx="10" cy="10" r="5" fill="hsl(var(--primary) / 0.6)" />
          <circle cx="55" cy="10" r="5" fill="hsl(var(--gradient-from) / 0.6)" />
          <circle cx="32" cy="50" r="5" fill="hsl(var(--gradient-to) / 0.6)" />
          <line x1="10" y1="10" x2="55" y2="10" stroke="hsl(var(--primary) / 0.3)" strokeWidth="1.5" />
          <line x1="55" y1="10" x2="32" y2="50" stroke="hsl(var(--primary) / 0.3)" strokeWidth="1.5" />
          <line x1="32" y1="50" x2="10" y2="10" stroke="hsl(var(--primary) / 0.3)" strokeWidth="1.5" />
        </svg>

        {/* Layered rectangles - mid-upper */}
        <svg
          className="absolute left-[8%] top-[35%] animate-[pulse_4s_ease-in-out_infinite_1s]"
          width="70"
          height="70"
          viewBox="0 0 70 70"
          fill="none"
        >
          <rect x="8" y="8" width="54" height="54" rx="3" stroke="hsl(var(--primary) / 0.4)" strokeWidth="1.5" fill="hsl(var(--primary) / 0.08)" />
          <rect x="16" y="16" width="38" height="38" rx="2" stroke="hsl(var(--gradient-from) / 0.5)" strokeWidth="1.5" fill="hsl(var(--gradient-from) / 0.1)" />
          <rect x="24" y="24" width="22" height="22" rx="2" stroke="hsl(var(--gradient-to) / 0.6)" strokeWidth="1.5" fill="hsl(var(--gradient-to) / 0.12)" />
        </svg>

        {/* Hexagon with inner pattern - mid */}
        <svg
          className="absolute left-[14%] top-[58%] animate-[pulse_4s_ease-in-out_infinite_2s]"
          width="68"
          height="68"
          viewBox="0 0 68 68"
          fill="none"
        >
          <path
            d="M34 4 L60 18 L60 48 L34 62 L8 48 L8 18 Z"
            stroke="hsl(var(--primary) / 0.5)"
            strokeWidth="1.5"
            fill="hsl(var(--primary) / 0.08)"
          />
          <circle cx="34" cy="33" r="12" stroke="hsl(var(--gradient-from) / 0.5)" strokeWidth="1.5" fill="none" />
          <circle cx="34" cy="33" r="5" fill="hsl(var(--gradient-to) / 0.6)" />
        </svg>

        {/* Intersecting circles - bottom */}
        <svg
          className="absolute left-[10%] top-[80%] animate-[pulse_4s_ease-in-out_infinite_3s]"
          width="75"
          height="50"
          viewBox="0 0 75 50"
          fill="none"
        >
          <circle cx="20" cy="25" r="18" stroke="hsl(var(--primary) / 0.5)" strokeWidth="2" fill="hsl(var(--primary) / 0.06)" />
          <circle cx="55" cy="25" r="18" stroke="hsl(var(--gradient-from) / 0.5)" strokeWidth="2" fill="hsl(var(--gradient-from) / 0.06)" />
        </svg>
      </div>

      {/* Right Side - Abstract Geometric Patterns */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-[25vw] overflow-hidden opacity-25">
        {/* Grid with dots - top */}
        <svg
          className="absolute right-[10%] top-[12%] animate-[pulse_4s_ease-in-out_infinite]"
          width="72"
          height="72"
          viewBox="0 0 72 72"
          fill="none"
        >
          <rect x="4" y="4" width="64" height="64" stroke="hsl(var(--primary) / 0.4)" strokeWidth="1.5" fill="none" />
          <line x1="36" y1="4" x2="36" y2="68" stroke="hsl(var(--primary) / 0.25)" strokeWidth="1" />
          <line x1="4" y1="36" x2="68" y2="36" stroke="hsl(var(--primary) / 0.25)" strokeWidth="1" />
          <circle cx="20" cy="20" r="4" fill="hsl(var(--gradient-from) / 0.6)" />
          <circle cx="52" cy="20" r="4" fill="hsl(var(--primary) / 0.6)" />
          <circle cx="20" cy="52" r="4" fill="hsl(var(--gradient-to) / 0.6)" />
          <circle cx="52" cy="52" r="4" fill="hsl(var(--primary) / 0.6)" />
        </svg>

        {/* Concentric rounded squares - mid-upper */}
        <svg
          className="absolute right-[12%] top-[36%] animate-[pulse_4s_ease-in-out_infinite_1s]"
          width="68"
          height="68"
          viewBox="0 0 68 68"
          fill="none"
        >
          <rect x="4" y="4" width="60" height="60" rx="8" stroke="hsl(var(--primary) / 0.5)" strokeWidth="1.5" fill="hsl(var(--primary) / 0.06)" />
          <rect x="14" y="14" width="40" height="40" rx="6" stroke="hsl(var(--gradient-from) / 0.5)" strokeWidth="1.5" fill="hsl(var(--gradient-from) / 0.08)" />
          <rect x="24" y="24" width="20" height="20" rx="4" stroke="hsl(var(--gradient-to) / 0.6)" strokeWidth="1.5" fill="hsl(var(--gradient-to) / 0.1)" />
        </svg>

        {/* Diamond with cross - mid-bottom */}
        <svg
          className="absolute right-[8%] top-[60%] animate-[pulse_4s_ease-in-out_infinite_2s]"
          width="70"
          height="70"
          viewBox="0 0 70 70"
          fill="none"
        >
          <path
            d="M35 5 L65 35 L35 65 L5 35 Z"
            stroke="hsl(var(--primary) / 0.5)"
            strokeWidth="1.5"
            fill="hsl(var(--primary) / 0.08)"
          />
          <line x1="35" y1="15" x2="35" y2="55" stroke="hsl(var(--gradient-from) / 0.4)" strokeWidth="1.5" />
          <line x1="15" y1="35" x2="55" y2="35" stroke="hsl(var(--gradient-from) / 0.4)" strokeWidth="1.5" />
          <circle cx="35" cy="35" r="6" fill="hsl(var(--gradient-to) / 0.6)" />
        </svg>

        {/* Spiral circles - bottom */}
        <svg
          className="absolute right-[14%] top-[82%] animate-[pulse_4s_ease-in-out_infinite_3s]"
          width="65"
          height="65"
          viewBox="0 0 65 65"
          fill="none"
        >
          <circle cx="32.5" cy="32.5" r="26" stroke="hsl(var(--primary) / 0.3)" strokeWidth="1.5" fill="none" />
          <circle cx="32.5" cy="32.5" r="18" stroke="hsl(var(--gradient-from) / 0.4)" strokeWidth="1.5" fill="none" />
          <circle cx="32.5" cy="32.5" r="10" stroke="hsl(var(--gradient-to) / 0.5)" strokeWidth="1.5" fill="none" />
          <circle cx="32.5" cy="32.5" r="4" fill="hsl(var(--primary) / 0.6)" />
        </svg>
      </div>
    </>
  );
}
