"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { HeroOrbs, AnimatedBadge, FadeUp } from "@/components/hero-effects";

interface SDHeroProps {
  data: {
    badge: string;
    headline: string;
    tagline: string;
    description: string;
    ctaPrimary: { label: string; href: string };
    ctaSecondary: { label: string; href: string };
  };
}

export function SDHero({ data }: SDHeroProps) {
  return (
    <section className="relative z-10 overflow-hidden pt-12 pb-24 lg:pt-16 lg:pb-32">
      <HeroOrbs />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <FadeUp delay={50}>
          <Link
            href="/resources/integrations/serviceops#int-section-other"
            className="inline-flex items-center gap-1.5 text-body-xs text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Integrations
          </Link>
        </FadeUp>
        <div className="mx-auto max-w-3xl text-center mt-8">
          <FadeUp delay={100}>
            <div className="flex justify-center">
              <AnimatedBadge text={data.badge} />
            </div>
          </FadeUp>
          <FadeUp delay={200}>
            <h1 className="mt-6 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-tight">
              {data.headline}
            </h1>
          </FadeUp>
          <FadeUp delay={300}>
            <p className="mx-auto mt-3 text-lg font-medium text-primary/80">
              {data.tagline}
            </p>
          </FadeUp>
          <FadeUp delay={400}>
            <p className="mx-auto mt-5 max-w-2xl text-body-md text-muted-foreground">
              {data.description}
            </p>
          </FadeUp>
          <FadeUp delay={500}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href={data.ctaPrimary.href}
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-primary px-7 text-label-md text-primary-foreground transition-opacity hover:opacity-90"
              >
                {data.ctaPrimary.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={data.ctaSecondary.href}
                className="inline-flex h-12 items-center gap-2 rounded-xl border border-border/60 bg-card px-7 text-label-md text-foreground transition-colors hover:bg-muted"
              >
                {data.ctaSecondary.label}
              </Link>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
