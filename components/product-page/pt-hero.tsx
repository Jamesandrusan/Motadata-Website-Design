"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroOrbs, AnimatedBadge, FadeUp } from "@/components/hero-effects";
import type { HeroData } from "./types";

export function PTHero({ data }: { data: HeroData }) {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <HeroOrbs />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr,1fr] lg:gap-8">
          <div className="max-w-xl">
            <FadeUp delay={100}>
              <AnimatedBadge text={data.badge} />
            </FadeUp>
            <FadeUp delay={250}>
              <h1 className="mt-6 text-[clamp(2rem,4.5vw,3.75rem)] font-bold leading-[1.1] tracking-tight">
                {data.headline}
              </h1>
            </FadeUp>
            <FadeUp delay={400}>
              <p className="mt-5 text-body-md text-muted-foreground">
                {data.description}
              </p>
            </FadeUp>
            <FadeUp delay={550}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link href={data.ctaPrimary.href}>
                  <Button size="lg" className="hero-shimmer h-12 px-7 text-[15px] bg-foreground text-background hover:bg-foreground/90">
                    {data.ctaPrimary.label} <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
                <Link href={data.ctaSecondary.href}>
                  <Button size="lg" variant="outline" className="h-12 px-7 text-[15px]">
                    {data.ctaSecondary.label}
                  </Button>
                </Link>
              </div>
            </FadeUp>
            <FadeUp delay={600}>
              <p className="mt-6 max-w-md text-body-xs text-muted-foreground">
                {data.subtext}
              </p>
            </FadeUp>
          </div>
          <FadeUp delay={500}>
            <div className="relative lg:-mr-[calc((100vw-80rem)/2+1.5rem)] lg:w-[calc(100%+(100vw-80rem)/2+1.5rem)]">
              <div className="absolute -left-8 -bottom-8 w-full h-full rounded-l-2xl bg-primary/15" />
              <div className="relative rounded-l-2xl border border-border/60 border-r-0 bg-white shadow-lg overflow-hidden">
                {data.dashboardImage && (
                  <Image
                    src={data.dashboardImage}
                    alt={`${data.badge} Dashboard`}
                    width={3839}
                    height={2399}
                    className="w-full h-auto"
                    priority
                  />
                )}
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
