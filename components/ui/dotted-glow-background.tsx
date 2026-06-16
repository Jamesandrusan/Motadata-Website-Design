"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Animated dotted glow background.
 * Reads --primary CSS variable for glow color so it adapts to every theme.
 * Very subtle — only visible on hover of parent (controlled via className opacity).
 */
export function DottedGlowBackground({
  className,
  gap = 14,
  radius = 1.2,
  opacity = 0.5,
  color,
}: {
  className?: string;
  gap?: number;
  radius?: number;
  opacity?: number;
  /** Override dot color instead of reading --primary. Accepts any CSS color string e.g. "white", "#fff", "rgba(…)". */
  color?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Read theme color dynamically
    let dotColor = "";
    let glowColor = "";

    const updateColors = () => {
      if (typeof window === 'undefined') return;
      if (color) {
        dotColor = color;
        glowColor = color;
      } else {
        const style = getComputedStyle(document.documentElement);
        const primary = style.getPropertyValue("--primary").trim();
        dotColor = `hsl(${primary} / 0.2)`;
        glowColor = `hsl(${primary} / 0.5)`;
      }
    };

    updateColors();
    const colorInterval = setInterval(updateColors, 300);

    let w = 0;
    let h = 0;
    let dots: { x: number; y: number; speed: number; phase: number }[] = [];

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      dots = [];
      for (let x = gap / 2; x <= w; x += gap) {
        for (let y = gap / 2; y <= h; y += gap) {
          dots.push({
            x,
            y,
            speed: 0.4 + Math.random() * 0.9,
            phase: Math.random() * Math.PI * 2,
          });
        }
      }
    };

    resize();
    window.addEventListener("resize", resize);

    const animate = (time: number) => {
      ctx.clearRect(0, 0, w, h);
      const t = time / 1000;

      for (const dot of dots) {
        const alpha =
          0.3 + 0.7 * (0.5 + 0.5 * Math.sin(t * dot.speed + dot.phase));
        const glowing = alpha > 0.75;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, glowing ? radius * 1.4 : radius, 0, Math.PI * 2);
        ctx.fillStyle = glowing ? glowColor : dotColor;
        ctx.shadowBlur = glowing ? 6 : 0;
        ctx.shadowColor = glowing ? glowColor : "transparent";
        ctx.globalAlpha = alpha * opacity;
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animRef.current);
      clearInterval(colorInterval);
    };
  }, [gap, radius, opacity, color, isMounted]);

  if (!isMounted) return null;

  return (
    <canvas
      ref={canvasRef}
      className={cn("pointer-events-none absolute inset-0", className)}
    />
  );
}
