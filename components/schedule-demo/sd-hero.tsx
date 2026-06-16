"use client";

import { HeroOrbs, AnimatedBadge, FadeUp } from "@/components/hero-effects";

export function SdHero() {
  return (
    <section className="relative z-10 overflow-hidden pt-12 pb-12 lg:pt-16 lg:pb-16">
      <HeroOrbs />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <FadeUp delay={100}>
            <div className="flex justify-center">
              <AnimatedBadge text="Schedule Demo" />
            </div>
          </FadeUp>
          <FadeUp delay={250}>
            <h1 className="mt-6 text-[clamp(2.2rem,5.5vw,4.75rem)] font-bold leading-[1.05] tracking-tight">
              See Motadata in Action
            </h1>
          </FadeUp>
          <FadeUp delay={400}>
            <p className="mx-auto mt-5 max-w-2xl text-body-md text-muted-foreground">
              Get a personalized demo of our AI-native observability and service management platform.
              Choose your product and schedule a walkthrough with our experts.
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
