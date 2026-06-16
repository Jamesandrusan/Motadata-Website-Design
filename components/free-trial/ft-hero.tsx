"use client";

import { HeroOrbs, AnimatedBadge, FadeUp } from "@/components/hero-effects";

export function FtHero() {
  return (
    <section className="relative z-10 overflow-hidden pt-12 pb-12 lg:pt-16 lg:pb-16">
      <HeroOrbs />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <FadeUp delay={100}>
            <div className="flex justify-center">
              <AnimatedBadge text="Free Trial" />
            </div>
          </FadeUp>
          <FadeUp delay={250}>
            <h1 className="mt-6 text-[clamp(2.2rem,5.5vw,4.75rem)] font-bold leading-[1.05] tracking-tight">
              Start Your 30-Day Free Trial
            </h1>
          </FadeUp>
          <FadeUp delay={400}>
            <p className="mx-auto mt-5 max-w-2xl text-body-md text-muted-foreground">
              Experience the power of AI-native observability and service management.
              Choose your platform and get started in minutes.
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
