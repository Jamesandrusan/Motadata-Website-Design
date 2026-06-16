"use client";

import React, { useEffect, useRef, useCallback, useMemo } from "react";
import { cn } from "@/lib/utils";

interface CanvasTextProps {
  text: string;
  className?: string;
  colors?: string[];
  animationDuration?: number;
  lineWidth?: number;
  lineGap?: number;
  curveIntensity?: number;
}

export function CanvasText({
  text,
  className,
  colors,
  animationDuration = 5,
  lineWidth = 1.5,
  lineGap = 10,
  curveIntensity = 60,
}: CanvasTextProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>(0);

  const defaultColors = useMemo(
    () =>
      colors || [
        "hsl(234, 89%, 60%)",
        "hsl(260, 70%, 50%)",
        "hsl(200, 80%, 55%)",
        "hsl(170, 70%, 45%)",
        "hsl(280, 65%, 55%)",
        "hsl(220, 85%, 55%)",
      ],
    [colors]
  );

  const draw = useCallback(
    (ctx: CanvasRenderingContext2D, w: number, h: number, t: number) => {
      ctx.clearRect(0, 0, w, h);

      const numLines = Math.ceil(h / lineGap);
      const speed = (2 * Math.PI) / (animationDuration * 60);

      for (let i = 0; i < numLines; i++) {
        const y = i * lineGap;
        const color = defaultColors[i % defaultColors.length];

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;

        for (let x = 0; x < w; x += 2) {
          const offset =
            Math.sin(x * 0.008 + t * speed + i * 0.5) * curveIntensity * 0.3 +
            Math.sin(x * 0.015 + t * speed * 0.7 + i * 0.3) *
              curveIntensity *
              0.2;
          if (x === 0) {
            ctx.moveTo(x, y + offset);
          } else {
            ctx.lineTo(x, y + offset);
          }
        }
        ctx.stroke();
      }
    },
    [defaultColors, animationDuration, lineWidth, lineGap, curveIntensity]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    let frame = 0;
    const animate = () => {
      const rect = container.getBoundingClientRect();
      draw(ctx, rect.width, rect.height, frame);
      frame++;
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [draw]);

  return (
    <span
      ref={containerRef}
      className={cn("relative inline-block", className)}
    >
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0"
        style={{
          WebkitMaskImage: `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg'><text x='0' y='0.85em' font-size='inherit' font-weight='inherit' font-family='inherit'>${text}</text></svg>`)}")`,
          maskImage: `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg'><text x='0' y='0.85em' font-size='inherit' font-weight='inherit' font-family='inherit'>${text}</text></svg>`)}")`,
          WebkitMaskSize: "100% 100%",
          maskSize: "100% 100%",
        }}
      />
      <span className="invisible">{text}</span>
    </span>
  );
}
