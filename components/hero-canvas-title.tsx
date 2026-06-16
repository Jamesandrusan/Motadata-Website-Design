"use client";

import React, { useRef } from "react";

/**
 * Hero title with clean gradient text - no canvas animation.
 */
export function HeroCanvasTitle() {
  const textRef = useRef<HTMLSpanElement>(null);

  return (
    <span className="relative inline-block">
      <span ref={textRef} className="relative text-foreground">
        Unified Intelligent Platform for Modern IT Operations
      </span>
    </span>
  );
}
