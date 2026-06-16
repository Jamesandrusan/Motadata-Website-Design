"use client";

import { HeroOrbs, AnimatedBadge, FadeUp } from "@/components/hero-effects";
import { LdEmailGate, type DemoUser } from "./ld-email-gate";

interface LdHeroProps {
  onSubmit: (user: DemoUser) => void;
}

export function LdHero({ onSubmit }: LdHeroProps) {
  return (
    <section className="relative z-10 overflow-hidden py-16 lg:py-24">
      <HeroOrbs />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
          {/* Left — Title & Text */}
          <div className="min-w-0">
            <FadeUp delay={100}>
              <AnimatedBadge text="Live Demo" />
            </FadeUp>
            <FadeUp delay={250}>
              <h1 className="mt-6 text-display-lg leading-[1.1] tracking-tight sm:text-5xl">
                Experience the Platform
              </h1>
            </FadeUp>
            <FadeUp delay={400}>
              <p className="mt-5 max-w-lg text-body-md text-muted-foreground">
                Explore Motadata&apos;s ObserveOps and ServiceOps platforms with interactive
                dashboards. No installation required.
              </p>
            </FadeUp>
            <FadeUp delay={500}>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
                <div>
                  <div className="text-heading-lg">2</div>
                  <div className="text-body-xs text-muted-foreground">Platforms</div>
                </div>
                <div>
                  <div className="text-heading-lg">11</div>
                  <div className="text-body-xs text-muted-foreground">Modules</div>
                </div>
                <div>
                  <div className="text-heading-lg">Live</div>
                  <div className="text-body-xs text-muted-foreground">Dashboards</div>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Right — Form */}
          <div className="min-w-0">
            <FadeUp delay={300}>
              <LdEmailGate onSubmit={onSubmit} />
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
