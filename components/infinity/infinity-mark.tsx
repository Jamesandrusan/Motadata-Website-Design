"use client";

import { motion } from "framer-motion";

/**
 * The Infinity lemniscate — solid brand coral (#F17463).
 *
 * Animated: the symbol is broken into four arc segments (the four
 * foundations) that fly in from four directions and combine into the
 * complete symbol (one edition); once assembled they settle to a soft
 * track and a bright segment flows around the loop continuously.
 */
const FULL =
  "M100 50 C 100 22, 122 8, 146 8 C 170 8, 190 26, 190 50 C 190 74, 170 92, 146 92 C 122 92, 100 78, 100 50 C 100 22, 78 8, 54 8 C 30 8, 10 26, 10 50 C 10 74, 30 92, 54 92 C 78 92, 100 78, 100 50 Z";

/* The lemniscate split into four quarters, each with its scatter offset */
const SEGMENTS = [
  { d: "M100 50 C 100 22, 122 8, 146 8 C 170 8, 190 26, 190 50", dx: 16, dy: -16 },
  { d: "M190 50 C 190 74, 170 92, 146 92 C 122 92, 100 78, 100 50", dx: 16, dy: 16 },
  { d: "M100 50 C 100 22, 78 8, 54 8 C 30 8, 10 26, 10 50", dx: -16, dy: -16 },
  { d: "M10 50 C 10 74, 30 92, 54 92 C 78 92, 100 78, 100 50", dx: -16, dy: 16 },
];

export function InfinityMark({
  className = "",
  strokeWidth = 12,
  animated = true,
}: {
  className?: string;
  strokeWidth?: number;
  animated?: boolean;
}) {
  if (!animated) {
    return (
      <svg
        viewBox="0 0 200 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        <path d={FULL} stroke="#F17463" strokeWidth={strokeWidth} strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 200 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`overflow-visible ${className}`}
      aria-hidden="true"
    >
      {/* Four parts — scattered, then combined; settle to a soft track */}
      {SEGMENTS.map((s, i) => (
        <motion.path
          key={i}
          d={s.d}
          stroke="#F17463"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          initial={{ opacity: 0, x: s.dx, y: s.dy }}
          whileInView={{
            opacity: [0, 1, 1, 0.28],
            x: [s.dx, 0, 0, 0],
            y: [s.dy, 0, 0, 0],
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1.9,
            delay: 0.25 + i * 0.16,
            times: [0, 0.4, 0.75, 1],
            ease: "easeOut",
          }}
        />
      ))}

      {/* One — the flowing segment takes over the assembled loop */}
      <motion.path
        d={FULL}
        stroke="#F17463"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        className="infinity-flow"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 2.2 }}
      />
    </svg>
  );
}
