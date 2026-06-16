"use client";

import { HeroOrbs, AnimatedBadge, FadeUp } from "@/components/hero-effects";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export function GsHero() {
  return (
    <section className="relative z-10 overflow-hidden py-24 lg:py-32">
      <HeroOrbs />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <FadeUp delay={100}>
            <div className="flex justify-center">
              <AnimatedBadge text="Get Started" />
            </div>
          </FadeUp>

          <FadeUp delay={250}>
            <h1 className="mt-6 text-[clamp(2.2rem,5.5vw,4.75rem)] font-bold leading-[1.05] tracking-tight">
              Get Started with
              <br />
              Motadata
            </h1>
          </FadeUp>

          <FadeUp delay={400}>
            <p className="mx-auto mt-5 max-w-2xl text-body-md text-muted-foreground">
              Everything you need to begin your journey with unified observability.
              Choose your path, access training resources, and join our community.
            </p>
          </FadeUp>

          <FadeUp delay={550}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button size="lg" className="h-12 rounded-xl px-7 text-base">
                Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-12 rounded-xl px-7 text-base"
              >
                <Play className="mr-2 h-4 w-4 fill-current" />
                Watch Demo
              </Button>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
