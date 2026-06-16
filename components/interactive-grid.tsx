"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export function InteractiveGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div ref={containerRef} className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Base grid lines */}
      <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid-pattern" width="64" height="64" patternUnits="userSpaceOnUse">
            {/* Full cross — horizontal + vertical lines through each cell */}
            <line x1="0" y1="0" x2="64" y2="0" stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
            <line x1="0" y1="0" x2="0" y2="64" stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
            {/* Single dot at intersection — tiling replicates to all crossings */}
            <circle cx="0" cy="0" r="1.5" fill="rgba(0,0,0,0.14)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>

      {/* Mouse glow — uses CSS variable so theme switcher can change it */}
      <div
        data-glow
        className="absolute h-[600px] w-[600px] rounded-full"
        style={{
          left: mousePos.x - 300,
          top: mousePos.y - 300,
          background: `radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, hsl(var(--primary) / 0.03) 40%, transparent 70%)`,
        }}
      />

      {/* Highlighted grid near cursor — also uses CSS variable */}
      <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid-highlight" width="64" height="64" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="64" y2="0" stroke="hsl(var(--primary) / 0.15)" strokeWidth="1" />
            <line x1="0" y1="0" x2="0" y2="64" stroke="hsl(var(--primary) / 0.15)" strokeWidth="1" />
            <circle cx="0" cy="0" r="2" fill="hsl(var(--primary) / 0.25)" />
          </pattern>
          <radialGradient id="spotlight">
            <stop offset="0%" stopColor="white" />
            <stop offset="50%" stopColor="white" stopOpacity="0.5" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="spotlight-mask">
            <circle cx={mousePos.x} cy={mousePos.y} r="350" fill="url(#spotlight)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-highlight)" mask="url(#spotlight-mask)" />
      </svg>
    </div>
  );
}
