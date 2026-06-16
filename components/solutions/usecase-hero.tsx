"use client";

import { HeroOrbs, AnimatedBadge, FadeUp } from "@/components/hero-effects";

export function UseCaseHero() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <HeroOrbs />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <FadeUp delay={100}>
            <AnimatedBadge text="Solutions | Use Cases" />
          </FadeUp>

          <FadeUp delay={250}>
            <h1 className="mt-6 text-[clamp(2rem,4.5vw,3.75rem)] font-bold leading-[1.1] tracking-tight">
              Solutions for Every IT Challenge
            </h1>
          </FadeUp>

          <FadeUp delay={400}>
            <p className="mt-5 text-body-lg text-muted-foreground">
              From infrastructure visibility to service automation &mdash; discover how
              Motadata unifies observability and operations for modern IT teams.
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
