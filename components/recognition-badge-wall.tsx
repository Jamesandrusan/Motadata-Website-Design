"use client";

import { Award, ShieldCheck, Users, Sparkles, Star, Trophy, Globe, TrendingUp } from "lucide-react";

/* ══════════════════════════════════════════════════════
   Recognition Option 1 — Badge Wall
   Centered heading with a grid of recognition badges
   ══════════════════════════════════════════════════════ */

const badges = [
  { icon: Award, title: "Gartner Market Guide", desc: "Featured in Gartner Market Guide for IT Operations Platforms" },
  { icon: Trophy, title: "Leader in AIOps", desc: "Named a leader in AIOps by top industry analysts" },
  { icon: Star, title: "G2 High Performer", desc: "Consistently rated as a High Performer on G2" },
  { icon: ShieldCheck, title: "ISO 27001 Certified", desc: "Enterprise-grade security and compliance standards" },
  { icon: Users, title: "500+ Enterprises", desc: "Trusted by over 500 enterprise customers worldwide" },
  { icon: Globe, title: "Global Presence", desc: "Serving customers across 30+ countries" },
  { icon: TrendingUp, title: "99.9% Uptime SLA", desc: "Industry-leading reliability and availability" },
  { icon: Sparkles, title: "Award-Winning UX", desc: "Recognized for exceptional platform design and usability" },
];

export function RecognitionBadgeWall() {
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

        {/* Badge grid */}
        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {badges.map((badge) => (
            <div
              key={badge.title}
              className="group flex flex-col items-center rounded-2xl border bg-white p-6 text-center transition-all duration-300 hover:border-primary/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/[0.06] transition-colors duration-300 group-hover:bg-primary/[0.1]">
                <badge.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 text-label-md text-foreground">
                {badge.title}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                {badge.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
