"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Text reveal card — adapted for light theme.
 * Uses --foreground for the dark card bg (so it matches theme tones),
 * --primary/--gradient-* for the reveal gradient.
 * Minimal, elegant, theme-aware.
 */
export function TextRevealCard({
  text,
  revealText,
  children,
  className,
}: {
  text: string;
  revealText: string;
  children?: React.ReactNode;
  className?: string;
}) {
  const [widthPercentage, setWidthPercentage] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const [left, setLeft] = useState(0);
  const [localWidth, setLocalWidth] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    if (cardRef.current) {
      const { left: l, width } = cardRef.current.getBoundingClientRect();
      setLeft(l);
      setLocalWidth(width);
    }

    const handleResize = () => {
      if (cardRef.current) {
        const { left: l, width } = cardRef.current.getBoundingClientRect();
        setLeft(l);
        setLocalWidth(width);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function mouseMoveHandler(event: React.MouseEvent<HTMLDivElement>) {
    event.preventDefault();
    const { clientX } = event;
    if (cardRef.current) {
      const relativeX = clientX - left;
      setWidthPercentage((relativeX / localWidth) * 100);
    }
  }

  const rotateDeg = (widthPercentage - 50) * 0.06;

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => {
        setIsMouseOver(true);
        if (cardRef.current) {
          const { left: l, width } = cardRef.current.getBoundingClientRect();
          setLeft(l);
          setLocalWidth(width);
        }
      }}
      onMouseLeave={() => {
        setIsMouseOver(false);
        setWidthPercentage(0);
      }}
      onMouseMove={mouseMoveHandler}
      className={cn(
        "relative w-full overflow-hidden rounded-2xl border p-8",
        "bg-[hsl(var(--foreground))]",
        className
      )}
    >
      {children}

      <div className="relative mt-6 flex h-32 items-center overflow-hidden sm:h-40">
        {/* Revealed text */}
        <motion.div
          style={{ transform: `perspective(400px) rotateY(${rotateDeg}deg)` }}
          animate={
            isMouseOver
              ? { opacity: 1, clipPath: `inset(0 ${100 - widthPercentage}% 0 0)` }
              : { clipPath: "inset(0 100% 0 0)" }
          }
          transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
          className="absolute z-20 will-change-transform"
        >
          <p className="stat-number text-heading-lg sm:text-3xl md:text-4xl">
            {revealText}
          </p>
        </motion.div>

        {/* Sweep line */}
        <motion.div
          animate={
            isMouseOver
              ? { left: `${widthPercentage}%`, rotate: `${rotateDeg}deg`, opacity: 1 }
              : { left: "0%", rotate: "0deg", opacity: 0 }
          }
          transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
          className="absolute z-50 h-full w-[1.5px]"
          style={{ background: "linear-gradient(to bottom, transparent, hsl(var(--primary) / 0.6), transparent)" }}
        />

        {/* Base dimmed text */}
        <p
          className="text-heading-lg sm:text-3xl md:text-4xl"
          style={{ color: "hsl(var(--background) / 0.15)" }}
        >
          {text}
        </p>
      </div>
    </div>
  );
}

export function TextRevealCardTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={cn("mb-2 text-heading-sm sm:text-xl", className)}
      style={{ color: "hsl(var(--background))" }}
    >
      {children}
    </h3>
  );
}

export function TextRevealCardDescription({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn("text-sm leading-relaxed", className)}
      style={{ color: "hsl(var(--background) / 0.5)" }}
    >
      {children}
    </p>
  );
}
