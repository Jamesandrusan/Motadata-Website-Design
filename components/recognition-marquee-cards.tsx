"use client";

import { Award, Star, ShieldCheck, Users, Sparkles, Trophy, Globe, TrendingUp, Zap, Target } from "lucide-react";

/* ══════════════════════════════════════════════════════
   Recognition Option 5 — Scrolling Marquee Cards
   Centered heading with two rows of auto-scrolling
   recognition cards in opposite directions
   ══════════════════════════════════════════════════════ */

const row1 = [
  { icon: Award, title: "Gartner Market Guide", desc: "Featured for IT Operations Platforms" },
  { icon: Trophy, title: "AIOps Leader", desc: "Named leader by industry analysts" },
  { icon: Star, title: "G2 High Performer", desc: "Top rated across multiple categories" },
  { icon: ShieldCheck, title: "ISO 27001", desc: "Enterprise security certified" },
  { icon: Users, title: "500+ Enterprises", desc: "Global customer trust" },
];

const row2 = [
  { icon: Globe, title: "30+ Countries", desc: "Worldwide presence and support" },
  { icon: TrendingUp, title: "99.9% Uptime", desc: "Industry-leading reliability" },
  { icon: Sparkles, title: "Award-Winning UX", desc: "Exceptional design recognition" },
  { icon: Zap, title: "Fastest Resolution", desc: "AI-powered incident handling" },
  { icon: Target, title: "Customer Choice", desc: "Preferred by IT operations teams" },
];

function MarqueeRow({
  items,
  reverse,
}: {
  items: typeof row1;
  reverse?: boolean;
}) {
  // Duplicate 3x for seamless scroll
  const looped = [...items, ...items, ...items];
  return (
    <div
      className="marquee-wrap"
      style={{
        WebkitMaskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
        maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div
        className="flex w-max gap-4"
        style={{
          animation: `marquee 30s linear infinite ${reverse ? "reverse" : ""}`,
        }}
      >
        {looped.map((item, i) => (
          <div
            key={`${item.title}-${i}`}
            className="group flex w-[260px] shrink-0 items-start gap-3 rounded-2xl border bg-white p-5 transition-all duration-300 hover:border-primary/40"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/[0.06] transition-colors duration-300 group-hover:bg-primary/[0.1]">
              <item.icon className="h-4 w-4 text-primary" />
            </div>
            <div className="min-w-0">
              <h3 className="text-label-md text-foreground">{item.title}</h3>
              <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function RecognitionMarqueeCards() {
  return (
    <section className="relative z-10 bg-white">
      <div className="mx-auto max-w-5xl px-6 pt-24 pb-6">
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
      </div>

      {/* Full-width marquee rows */}
      <div className="flex flex-col gap-4 overflow-hidden pb-24">
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>
    </section>
  );
}
