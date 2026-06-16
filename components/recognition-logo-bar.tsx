"use client";

import { Award, ShieldCheck, Users, Sparkles, ArrowUpRight } from "lucide-react";

/* ══════════════════════════════════════════════════════
   Recognition Option 3 — Logo Bar + Stats
   Horizontal analyst logos bar, centered stats below
   ══════════════════════════════════════════════════════ */

const analysts = [
  { name: "Gartner", letter: "G" },
  { name: "Forrester", letter: "F" },
  { name: "IDC", letter: "I" },
  { name: "G2", letter: "G2" },
  { name: "Capterra", letter: "C" },
];

const highlights = [
  { icon: Award, stat: "Featured", label: "Gartner Market Guide", color: "hsl(var(--primary))" },
  { icon: ShieldCheck, stat: "99.9%", label: "Uptime SLA Guarantee", color: "hsl(var(--primary))" },
  { icon: Users, stat: "500+", label: "Enterprise Customers", color: "hsl(var(--primary))" },
  { icon: Sparkles, stat: "30+", label: "Countries Served", color: "hsl(var(--primary))" },
];

export function RecognitionLogoBar() {
  return (
    <section className="relative z-10 bg-white">
      <div className="mx-auto max-w-5xl px-6 py-24">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-overline text-primary">
            Industry Recognition
          </p>
          <h2 className="mt-3 text-heading-xl text-foreground sm:text-4xl">
            Recognized by Industry Leaders
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-body-md text-muted-foreground">
            Featured in the Gartner Market Guide for IT Operations Platforms,
            showcasing our commitment to innovation and excellence in unified
            observability.
          </p>
        </div>

        {/* Analyst logos bar */}
        <div className="mx-auto mt-14 flex max-w-2xl items-center justify-center gap-8 rounded-2xl border bg-muted/30 px-8 py-5">
          <span className="text-caption text-muted-foreground whitespace-nowrap">Recognized by</span>
          <div className="h-6 w-px bg-border" />
          {analysts.map((a) => (
            <div
              key={a.name}
              className="flex items-center gap-2 transition-opacity duration-300 hover:opacity-100 opacity-60"
              title={a.name}
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white border shadow-sm">
                <span className="text-label-sm-strong text-foreground">{a.letter}</span>
              </div>
              <span className="hidden text-label-md text-foreground sm:block">{a.name}</span>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {highlights.map((h) => (
            <div
              key={h.label}
              className="group relative overflow-hidden rounded-2xl border bg-white p-6 text-center transition-all duration-300 hover:border-primary/40"
            >
              {/* Subtle gradient top */}
              <div
                className="absolute inset-x-0 top-0 h-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: `linear-gradient(90deg, transparent, ${h.color}, transparent)` }}
              />
              <h.icon className="mx-auto h-5 w-5 text-primary" />
              <p className="mt-3 text-heading-lg text-foreground">{h.stat}</p>
              <p className="mt-1 text-caption text-muted-foreground">{h.label}</p>
            </div>
          ))}
        </div>

        {/* CTA link */}
        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-label-md text-primary hover:underline"
          >
            Read the Full Report <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
