"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroOrbs, AnimatedBadge, FadeUp } from "@/components/hero-effects";

export function UCVHero() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <HeroOrbs />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <FadeUp delay={100}>
            <AnimatedBadge text="Unified Compute Visibility" />
          </FadeUp>

          <FadeUp delay={250}>
            <h1 className="mt-6 text-[clamp(2rem,4.5vw,3.75rem)] font-bold leading-[1.1] tracking-tight">
              Every Core Counted. Every System Accounted.
            </h1>
          </FadeUp>

          <FadeUp delay={450}>
            <p className="mt-5 text-body-md text-muted-foreground">
              Monitor your entire compute layer — from physical servers to virtualized and hyper-converged systems — with unified health, utilization, and performance intelligence.
            </p>
          </FadeUp>

          <FadeUp delay={550}>
            <p className="mt-4 text-body-md text-muted-foreground">
              Motadata ObserveOps brings deep, cross-layer visibility into compute environments, enabling teams to understand how infrastructure behaves, how workloads consume resources, and how performance impacts business services — all from a single, correlated platform.
            </p>
          </FadeUp>

          <FadeUp delay={650}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/schedule-demo">
                <Button size="lg" className="hero-shimmer h-12 px-7 text-[15px] bg-foreground text-background hover:bg-foreground/90">
                  Get a Personalized Demo <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="h-12 px-7 text-[15px]">
                  Talk to a Solution Architect
                </Button>
              </Link>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
