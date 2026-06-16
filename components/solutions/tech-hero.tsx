"use client";

import { HeroOrbs, AnimatedBadge, FadeUp } from "@/components/hero-effects";

export function TechHero() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <HeroOrbs />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <FadeUp delay={100}>
            <AnimatedBadge text="Solutions | Technologies" />
          </FadeUp>

          <FadeUp delay={250}>
            <h1 className="mt-6 text-[clamp(2rem,4.5vw,3.75rem)] font-bold leading-[1.1] tracking-tight">
              Solutions by Technologies
            </h1>
          </FadeUp>

          <FadeUp delay={400}>
            <p className="mt-5 text-body-lg text-muted-foreground">
              Explore the cutting-edge technologies powering Motadata&apos;s unified
              observability and service management platform.
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
