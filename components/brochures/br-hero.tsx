"use client";

import { Download } from "lucide-react";
import { HeroOrbs, AnimatedBadge, FadeUp } from "@/components/hero-effects";

export function BrHero() {
  return (
    <section className="relative z-10 overflow-hidden py-24 lg:py-32">
      <HeroOrbs />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <FadeUp delay={100}>
            <div className="flex justify-center">
              <AnimatedBadge text="Product Information" />
            </div>
          </FadeUp>
          <FadeUp delay={250}>
            <h1 className="mt-6 text-[clamp(2.2rem,5.5vw,4.75rem)] font-bold leading-[1.05] tracking-tight">
              Product Brochures
            </h1>
          </FadeUp>
          <FadeUp delay={400}>
            <p className="mx-auto mt-5 max-w-2xl text-body-md text-muted-foreground">
              Detailed product information, technical specifications, and capability
              overviews. Everything you need to evaluate Motadata for your organization.
            </p>
          </FadeUp>
          <FadeUp delay={550}>
            <div className="mt-8 flex justify-center">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-label-md text-primary-foreground transition-opacity hover:opacity-90"
              >
                <Download className="h-4 w-4" />
                Download All Brochures
              </a>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
