"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HeroOrbs, AnimatedBadge, FadeUp } from "@/components/hero-effects";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function CareersHero() {
  return (
    <section className="relative z-10 overflow-hidden py-24 lg:py-32">
      <HeroOrbs />

      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <FadeUp delay={100}>
            <div className="flex justify-center">
              <AnimatedBadge text="Careers" />
            </div>
          </FadeUp>

          <FadeUp delay={250}>
            <h1 className="mt-6 text-[clamp(2rem,4.5vw,3.75rem)] font-bold leading-[1.1] tracking-tight">
              Build your future in the
              <br />
              next-gen IT world with us
            </h1>
          </FadeUp>

          <FadeUp delay={400}>
            <p className="mx-auto mt-5 max-w-2xl text-body-md text-muted-foreground">
              Join a team of innovators shaping the future of IT operations.
              We&apos;re building the next generation of observability and service
              management that empowers enterprises worldwide.
            </p>
          </FadeUp>

          <FadeUp delay={550}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#openings"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 px-7 text-[15px]"
                )}
              >
                View Open Positions <ArrowRight className="ml-1 h-4 w-4" />
              </a>
              <a
                href="#culture"
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "h-12 px-7 text-[15px]"
                )}
              >
                Learn About Culture
              </a>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
