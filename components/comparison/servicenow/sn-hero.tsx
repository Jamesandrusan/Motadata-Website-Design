"use client";

import { ArrowRight, CalendarClock } from "lucide-react";
import { HeroOrbs, AnimatedBadge, FadeUp } from "@/components/hero-effects";

export function SnHero() {
  return (
    <section className="relative z-10 overflow-hidden pt-16 pb-16 lg:pt-16 lg:pb-16">
      <HeroOrbs />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 text-center">
        <FadeUp delay={100}>
          <div className="flex justify-center">
            <AnimatedBadge text="Comparison" />
          </div>
        </FadeUp>

        <FadeUp delay={250}>
          <h1 className="mx-auto mt-6 max-w-4xl text-[clamp(2.1rem,5.2vw,4rem)] font-bold leading-[1.05] tracking-tight text-foreground">
            How to Choose Between Motadata vs ServiceNow
          </h1>
        </FadeUp>

        <FadeUp delay={400}>
          <p className="mx-auto mt-6 max-w-2xl text-body-md text-muted-foreground">
            Is ServiceNow worth the cost and complexity for your team size or
            business requirements? Both cover core ITSM and align with ITIL. The
            difference is how far the capabilities extend, how fast they deploy,
            and what they cost to run at scale.
          </p>
        </FadeUp>

        <FadeUp delay={520}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#"
              className="group inline-flex h-12 items-center gap-2 rounded-xl bg-primary px-6 text-label-md text-primary-foreground shadow-sm transition-all hover:opacity-90"
            >
              Start Free Trial
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#"
              className="inline-flex h-12 items-center gap-2 rounded-xl border border-border bg-card px-6 text-label-md text-foreground transition-colors hover:border-primary/40"
            >
              <CalendarClock className="h-4 w-4 text-primary" />
              Book a Demo
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
