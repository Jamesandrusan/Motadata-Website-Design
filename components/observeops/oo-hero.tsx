"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroOrbs, AnimatedBadge, FadeUp } from "@/components/hero-effects";

export function OOHero() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <HeroOrbs />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto max-w-5xl text-center">
          <FadeUp delay={100}>
            <AnimatedBadge text="ObserveOps | Unified Observability Platform" />
          </FadeUp>

          <FadeUp delay={250}>
            <h1 className="mt-6 text-[clamp(2rem,4.5vw,3.75rem)] font-bold leading-[1.1] tracking-tight">
              Total Visibility. Intelligent Action.
              <br />
              Enterprise Confidence.
            </h1>
          </FadeUp>

          <FadeUp delay={400}>
            <p className="mt-5 text-body-md text-muted-foreground">
              ObserveOps gives you a complete, real-time view of every system, every signal, every user journey. Powered by AI and built on Motastore — Motadata&apos;s high-performance, purpose-engineered datastore — it turns full-stack observability into precise, predictive, enterprise-scale insight.
            </p>
          </FadeUp>

          <FadeUp delay={550}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/products/observeops/live-demo"
                className="hero-shimmer inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-md px-7 text-[15px] font-medium bg-foreground text-background hover:bg-foreground/90 transition-colors"
              >
                Explore Live Demo <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
              <Button size="lg" variant="outline" className="h-12 px-7 text-[15px]">
                Schedule Demo
              </Button>
            </div>
          </FadeUp>

          <FadeUp delay={600}>
            <p className="mt-6 text-body-xs text-muted-foreground">
              For CIOs defining digital strategy, for IT Directors enforcing uptime, for NOC Engineers protecting performance — ObserveOps is the intelligence layer that unifies them all.
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
