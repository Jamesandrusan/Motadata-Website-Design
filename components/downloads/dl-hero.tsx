"use client";

import { HeroOrbs, AnimatedBadge, FadeUp } from "@/components/hero-effects";

export function DlHero() {
  return (
    <section className="relative z-10 overflow-hidden py-24 lg:py-32">
      <HeroOrbs />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <FadeUp delay={100}>
            <div className="flex justify-center">
              <AnimatedBadge text="Downloads" />
            </div>
          </FadeUp>
          <FadeUp delay={250}>
            <h1 className="mt-6 text-[clamp(2.2rem,5.5vw,4.75rem)] font-bold leading-[1.05] tracking-tight">
              Everything You Need to Get Started
            </h1>
          </FadeUp>
          <FadeUp delay={400}>
            <p className="mx-auto mt-5 max-w-2xl text-body-md text-muted-foreground">
              Agents, collectors, and trial packages. Get everything you need to start monitoring
              your infrastructure across all platforms.
            </p>
          </FadeUp>
          <FadeUp delay={550}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#"
                className="inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-6 text-label-md text-primary-foreground transition-opacity hover:opacity-90"
              >
                Start Free Trial
              </a>
              <a
                href="#"
                className="inline-flex h-11 items-center gap-2 rounded-xl border border-border bg-card px-6 text-label-md text-foreground transition-colors hover:bg-muted/40"
              >
                View Documentation
              </a>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
