"use client";

import { TrendingUp, Heart, Rocket } from "lucide-react";

const reasons = [
  {
    icon: TrendingUp,
    title: "Better Margins",
    desc: "Earn attractive margins and incentives through our comprehensive partner program.",
  },
  {
    icon: Heart,
    title: "Better Relationship",
    desc: "Build lasting partnerships with dedicated support and collaborative opportunities.",
  },
  {
    icon: Rocket,
    title: "Better Business",
    desc: "Access market-leading solutions, training, and resources to expand your business.",
  },
];

export function PtWhy() {
  return (
    <section className="relative z-10 py-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="rounded-2xl border border-border/60 overflow-hidden bg-card">
          <div className="grid lg:grid-cols-[1fr,1.2fr]">

            {/* Left — Text */}
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <p className="mb-3 text-overline text-primary">
                Why Become A Partner
              </p>
              <h2 className="text-display-md">
                Built for Mutual Growth
              </h2>
              <p className="mt-4 text-body-md text-muted-foreground">
                Motadata works under the motto of being mutually beneficial and complementing each
                other&apos;s skills. We want our partners to focus on their business and customers while
                we support you with infrastructure, support, and expertise.
              </p>
            </div>

            {/* Right — Connected cards */}
            <div className="border-t lg:border-t-0 lg:border-l border-border/40 divide-y divide-border/40">
              {reasons.map((r) => {
                const Icon = r.icon;
                return (
                  <div key={r.title} className="flex flex-col px-6 py-6 lg:px-8 lg:py-7 transition-colors hover:bg-muted/30">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-base font-bold">{r.title}</h3>
                    <p className="mt-1 text-body-xs text-muted-foreground">{r.desc}</p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
