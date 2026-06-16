"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroOrbs, AnimatedBadge, FadeUp } from "@/components/hero-effects";

export function SOHero() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <HeroOrbs />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto max-w-5xl text-center">
          <FadeUp delay={100}>
            <AnimatedBadge text="ServiceOps | Unified IT Service Management" />
          </FadeUp>

          <FadeUp delay={250}>
            <h1 className="mt-6 text-[clamp(2rem,4.5vw,3.75rem)] font-bold leading-[1.1] tracking-tight">
              Unified Service. Intelligent Automation.
              <br />
              Enterprise Confidence.
            </h1>
          </FadeUp>

          <FadeUp delay={400}>
            <p className="mt-5 text-body-md text-muted-foreground">
              ServiceOps delivers an AI-powered, ITIL-aligned service management platform that unifies incidents, requests, changes, assets, configurations, patches, and automation — all engineered for enterprise scale and operational harmony.
            </p>
          </FadeUp>

          <FadeUp delay={550}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" className="hero-shimmer h-12 px-7 text-[15px] bg-foreground text-background hover:bg-foreground/90">
                Request a Demo <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-7 text-[15px]">
                Compare Editions
              </Button>
            </div>
          </FadeUp>

          <FadeUp delay={600}>
            <p className="mt-6 text-body-xs text-muted-foreground">
              For CIOs demanding governance, for IT Directors driving efficiency, for Service Leaders elevating experience — ServiceOps is the service backbone that aligns them all.
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
