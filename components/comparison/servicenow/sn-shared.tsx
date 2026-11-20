"use client";

import { useEffect, useRef, useState } from "react";

/* Reveal-on-scroll wrapper — subtle fade/slide as sections enter view. */
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Reveal when the element scrolls into the lower 90% of the viewport.
    // A scroll listener (rather than IntersectionObserver) is used because it
    // fires reliably across environments and never leaves content stuck hidden.
    const check = () => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9) {
        setShown(true);
        window.removeEventListener("scroll", check);
        window.removeEventListener("resize", check);
      }
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* Consistent section eyebrow + heading + optional intro. */
export function SectionHeader({
  eyebrow,
  title,
  intro,
  center = false,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <p className="text-overline text-primary">{eyebrow}</p>
      <h2 className="mt-3 text-display-md text-foreground">{title}</h2>
      {intro && (
        <p className="mt-4 text-body-md text-muted-foreground">{intro}</p>
      )}
    </div>
  );
}

/* Brand chips used to label each side of a comparison. */
export function BrandTag({ brand }: { brand: "motadata" | "servicenow" }) {
  const isMoto = brand === "motadata";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-label-sm ${
        isMoto
          ? "bg-primary/10 text-primary"
          : "bg-muted text-muted-foreground"
      }`}
    >
      <span
        className={`h-2 w-2 rounded-full ${
          isMoto ? "bg-primary" : "bg-muted-foreground/60"
        }`}
      />
      {isMoto ? "Motadata ServiceOps" : "ServiceNow"}
    </span>
  );
}
