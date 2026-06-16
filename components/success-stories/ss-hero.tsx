"use client";

import { HeroOrbs, AnimatedBadge, FadeUp } from "@/components/hero-effects";

const stats = [
  { value: "5,000+",  label: "Happy Customers" },
  { value: "15+",     label: "Years Experience" },
  { value: "50+",     label: "Countries" },
  { value: "99.9%",   label: "Customer Retention" },
];

export function SsHero() {
  return (
    <section className="relative z-10 overflow-hidden py-24 lg:py-32">
      <HeroOrbs />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <FadeUp delay={100}>
            <div className="flex justify-center">
              <AnimatedBadge text="Customer Success" />
            </div>
          </FadeUp>
          <FadeUp delay={250}>
            <h1 className="mt-6 text-[clamp(2.2rem,5.5vw,4.75rem)] font-bold leading-[1.05] tracking-tight">
              Real Results from Real Customers
            </h1>
          </FadeUp>
          <FadeUp delay={400}>
            <p className="mx-auto mt-5 max-w-2xl text-body-md text-muted-foreground">
              Discover how leading enterprises achieve operational excellence with
              Motadata&apos;s unified observability platform.
            </p>
          </FadeUp>

          {/* Stats row */}
          <FadeUp delay={550}>
            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-border bg-card px-4 py-5 text-center">
                  <p className="text-heading-lg text-foreground">{s.value}</p>
                  <p className="mt-1 text-caption text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
