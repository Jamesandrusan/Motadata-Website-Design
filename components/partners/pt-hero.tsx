"use client";

import { HeroOrbs, AnimatedBadge, FadeUp } from "@/components/hero-effects";
import { Globe, MapPin, ThumbsUp, DollarSign } from "lucide-react";

const stats = [
  { icon: Globe, value: "500+", label: "Global Partners" },
  { icon: MapPin, value: "50+", label: "Countries" },
  { icon: ThumbsUp, value: "95%", label: "Partner Satisfaction" },
  { icon: DollarSign, value: "$50M+", label: "Partner Revenue" },
];

export function PtHero() {
  return (
    <section className="relative z-10 overflow-hidden py-24 lg:py-32">
      <HeroOrbs />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <FadeUp delay={100}>
            <div className="flex justify-center">
              <AnimatedBadge text="Partners" />
            </div>
          </FadeUp>
          <FadeUp delay={250}>
            <h1 className="mt-6 text-[clamp(2.2rem,5.5vw,4.75rem)] font-bold leading-[1.05] tracking-tight">
              Partner with Motadata
            </h1>
          </FadeUp>
          <FadeUp delay={400}>
            <p className="mx-auto mt-5 max-w-2xl text-body-md text-muted-foreground">
              Join our global partner ecosystem and unlock new revenue opportunities with
              industry-leading unified observability and service management solutions.
            </p>
          </FadeUp>
          <FadeUp delay={550}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#become-partner"
                className="inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-6 text-label-md text-primary-foreground transition-opacity hover:opacity-90"
              >
                Become a Partner
              </a>
              <a
                href="/resources/partners/locate"
                className="inline-flex h-11 items-center gap-2 rounded-xl border border-border bg-card px-6 text-label-md text-foreground transition-colors hover:bg-muted/40"
              >
                Locate Partner
              </a>
            </div>
          </FadeUp>
          <FadeUp delay={700}>
            <div className="mx-auto mt-12 grid max-w-2xl grid-cols-2 divide-x divide-border sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="px-6 text-center">
                  <p className="text-heading-xl text-primary">{s.value}</p>
                  <p className="mt-1 text-caption text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
