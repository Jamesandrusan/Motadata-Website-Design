"use client";

import { HeroOrbs, AnimatedBadge, FadeUp } from "@/components/hero-effects";

export function WpHero() {
  return (
    <section className="relative z-10 overflow-hidden py-24 lg:py-32">
      <HeroOrbs />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <FadeUp delay={100}>
            <div className="flex justify-center">
              <AnimatedBadge text="Resources" />
            </div>
          </FadeUp>
          <FadeUp delay={250}>
            <h1 className="mt-6 text-[clamp(2.2rem,5.5vw,4.75rem)] font-bold leading-[1.05] tracking-tight">
              Whitepapers
            </h1>
          </FadeUp>
          <FadeUp delay={400}>
            <p className="mx-auto mt-5 max-w-2xl text-body-md text-muted-foreground">
              Research on observability, AIOps, and ITSM best practices. Download
              in-depth guides authored by Motadata experts and industry analysts.
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
