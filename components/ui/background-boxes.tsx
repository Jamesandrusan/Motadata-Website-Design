"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Light-theme background boxes.
 * Subtle grid that uses --primary CSS variable for hover highlights.
 * Nearly invisible at rest, gently glows on hover — matches the minimal aesthetic.
 */
export function Boxes({ className }: { className?: string }) {
  const rows = 15;
  const cols = 15;

  return (
    <div
      className={cn(
        "absolute inset-0 z-0 flex overflow-hidden opacity-[0.35]",
        className
      )}
      style={{
        transform:
          "translate(-40%, -60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)",
      }}
    >
      {Array.from({ length: rows }).map((_, i) => (
        <div key={`row-${i}`} className="relative h-8 w-16" style={{ borderLeft: "1px solid hsl(var(--border))" }}>
          {Array.from({ length: cols }).map((_, j) => (
            <motion.div
              key={`col-${j}`}
              className="relative h-8 w-16"
              style={{
                borderRight: "1px solid hsl(var(--border))",
                borderTop: "1px solid hsl(var(--border))",
              }}
              whileHover={{
                backgroundColor: "hsl(var(--primary) / 0.08)",
                transition: { duration: 0 },
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
