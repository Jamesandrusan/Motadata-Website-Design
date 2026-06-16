"use client";

import { HeroOrbs, AnimatedBadge, FadeUp } from "@/components/hero-effects";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search } from "lucide-react";

export function SupportHero() {
  return (
    <section className="relative z-10 overflow-hidden py-24 lg:py-32">
      <HeroOrbs />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <FadeUp delay={100}>
            <div className="flex justify-center">
              <AnimatedBadge text="Customer Support" />
            </div>
          </FadeUp>

          <FadeUp delay={250}>
            <h1 className="mt-6 text-[clamp(2.2rem,5.5vw,4.75rem)] font-bold leading-[1.05] tracking-tight">
              How Can We
              <br />
              Help You?
            </h1>
          </FadeUp>

          <FadeUp delay={400}>
            <p className="mx-auto mt-5 max-w-2xl text-body-md text-muted-foreground">
              24&times;7 assistance for ObserveOps and ServiceOps. Search our knowledge
              base or connect with our expert support team.
            </p>
          </FadeUp>

          <FadeUp delay={550}>
            <div className="relative mx-auto mt-8 max-w-xl">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <input
                placeholder="Search knowledge base..."
                className="w-full h-12 rounded-xl border border-border bg-white pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40"
              />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
