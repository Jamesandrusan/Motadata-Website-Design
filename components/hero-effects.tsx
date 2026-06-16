"use client";

import { useEffect, useState } from "react";

/* Animated gradient orbs that float behind hero text */
export function HeroOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Large primary orb — top left */}
      <div
        className="absolute -left-[10%] -top-[20%] h-[500px] w-[500px] rounded-full opacity-[0.07] blur-[100px]"
        style={{
          background: "hsl(var(--primary))",
          animation: "orb-drift-1 16s ease-in-out infinite",
        }}
      />
      {/* Gradient-to orb — top right */}
      <div
        className="absolute -right-[5%] -top-[10%] h-[400px] w-[400px] rounded-full opacity-[0.06] blur-[90px]"
        style={{
          background: "hsl(var(--gradient-to))",
          animation: "orb-drift-2 20s ease-in-out infinite",
        }}
      />
      {/* Small accent orb — bottom center */}
      <div
        className="absolute bottom-[5%] left-[40%] h-[300px] w-[300px] rounded-full opacity-[0.05] blur-[80px]"
        style={{
          background: "hsl(var(--gradient-from))",
          animation: "orb-drift-3 14s ease-in-out infinite",
        }}
      />
    </div>
  );
}

/* Beam that traces along a rounded border */
export function BorderBeam() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
      <div
        className="absolute h-20 w-20 rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary) / 0.6), transparent 70%)",
          animation: "beam-trace 6s linear infinite",
        }}
      />
    </div>
  );
}

/* Typing effect for subtitle words */
export function AnimatedBadge({ text }: { text: string }) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // SSR: render fully visible. Client: animate in.
  const hidden = mounted && !visible;

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-label-sm text-primary transition-all duration-700 ${
        hidden ? "translate-y-2 opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
      </span>
      {text}
    </span>
  );
}

/* Fade-up animation wrapper */
export function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  // SSR: render fully visible. Client: animate in.
  const hidden = mounted && !visible;

  return (
    <div
      className={`transition-all duration-700 ease-out ${
        hidden ? "translate-y-6 opacity-0" : "translate-y-0 opacity-100"
      } ${className}`}
    >
      {children}
    </div>
  );
}
