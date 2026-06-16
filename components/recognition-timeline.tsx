"use client";

import { Award, Star, ShieldCheck, TrendingUp, Trophy } from "lucide-react";

/* ══════════════════════════════════════════════════════
   Recognition Option 2 — Vertical Timeline
   Left text, right vertical timeline of milestones
   ══════════════════════════════════════════════════════ */

const milestones = [
  { year: "2024", icon: Award, title: "Gartner Market Guide", desc: "Featured in the Gartner Market Guide for IT Operations Platforms." },
  { year: "2023", icon: Trophy, title: "AIOps Leadership", desc: "Named a leader in AIOps innovation by industry analysts." },
  { year: "2023", icon: Star, title: "G2 High Performer", desc: "Achieved High Performer status across multiple G2 categories." },
  { year: "2022", icon: ShieldCheck, title: "ISO 27001 Certified", desc: "Achieved enterprise-grade security and compliance certification." },
  { year: "2022", icon: TrendingUp, title: "500+ Enterprises", desc: "Crossed the milestone of 500 enterprise customers globally." },
];

export function RecognitionTimeline() {
  return (
    <section className="relative z-10 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left text */}
          <div className="lg:sticky lg:top-24">
            <p className="text-overline text-primary">
              Industry Recognition
            </p>
            <h2 className="mt-3 text-heading-xl text-foreground sm:text-4xl">
              Recognized by Industry Leaders
            </h2>
            <p className="mt-4 max-w-md text-body-md text-muted-foreground">
              Featured in the Gartner Market Guide for IT Operations Platforms,
              showcasing our commitment to innovation and excellence in unified
              observability.
            </p>

            {/* Summary stats */}
            <div className="mt-8 flex gap-8">
              <div>
                <p className="text-heading-xl text-foreground">8+</p>
                <p className="text-caption text-muted-foreground">Awards</p>
              </div>
              <div>
                <p className="text-heading-xl text-foreground">500+</p>
                <p className="text-caption text-muted-foreground">Customers</p>
              </div>
              <div>
                <p className="text-heading-xl text-foreground">30+</p>
                <p className="text-caption text-muted-foreground">Countries</p>
              </div>
            </div>
          </div>

          {/* Right timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-5 top-0 bottom-0 w-px"
              style={{
                background: "linear-gradient(to bottom, hsl(var(--primary) / 0.2), hsl(var(--border)), transparent)",
              }}
            />

            <div className="flex flex-col gap-8">
              {milestones.map((m, i) => (
                <div key={m.title} className="group relative flex gap-5 pl-2">
                  {/* Dot on line */}
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border bg-white shadow-sm transition-all duration-300 group-hover:border-primary/40">
                    <m.icon className="h-4 w-4 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-2">
                    <span className="inline-block rounded-full bg-primary/[0.08] px-2.5 py-0.5 text-[10px] font-semibold text-primary">
                      {m.year}
                    </span>
                    <h3 className="mt-2 text-label-lg text-foreground">
                      {m.title}
                    </h3>
                    <p className="mt-1 text-body-xs text-muted-foreground">
                      {m.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
