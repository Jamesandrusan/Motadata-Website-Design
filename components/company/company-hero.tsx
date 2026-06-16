"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroOrbs, AnimatedBadge, FadeUp } from "@/components/hero-effects";

export function CompanyHero() {
  return (
    <section className="relative z-10 overflow-hidden py-24 lg:py-32">
      <HeroOrbs />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto max-w-6xl text-center">
          <FadeUp delay={100}>
            <div className="flex justify-center">
              <AnimatedBadge text="Vision" />
            </div>
          </FadeUp>

          <FadeUp delay={250}>
            <h1 className="mt-6 text-[clamp(2rem,4.5vw,3.75rem)] font-bold leading-[1.1] tracking-tight">
              Our mission to unify Observability + ServiceOps
            </h1>
          </FadeUp>

          <FadeUp delay={400}>
            <p className="mx-auto mt-5 max-w-2xl text-body-md text-muted-foreground">
              Motadata is on a mission to empower enterprises with AI-native
              unified observability and service management. We believe IT
              operations should be proactive, intelligent, and seamlessly
              integrated.
            </p>
          </FadeUp>

          <FadeUp delay={550}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" className="hero-shimmer h-12 px-7 text-[15px]">
                Start Free Trial <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-7 text-[15px]">
                Book a Demo
              </Button>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
