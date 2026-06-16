"use client";

import { Button } from "@/components/ui/button";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { CalendarDays, Headphones } from "lucide-react";

export function GsCta() {
  return (
    <section className="relative z-10">
      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        <div className="group relative overflow-hidden rounded-3xl bg-foreground px-8 py-16 text-center text-white sm:px-16 sm:py-20">
          <DottedGlowBackground
            className="opacity-0 transition-opacity duration-500 group-hover:opacity-50"
            gap={14}
            radius={1.8}
            opacity={0.6}
            color="rgba(255,255,255,0.4)"
          />
          <div className="relative z-10">
            <h2 className="text-display-md">
              Need Help Getting Started?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/60">
              Our team of experts is available to guide you through setup,
              answer questions, and help you get the most out of Motadata.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button
                size="lg"
                className="h-12 rounded-xl bg-white px-7 text-foreground hover:bg-white/90"
              >
                <CalendarDays className="mr-2 h-4 w-4" />
                Schedule a Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 rounded-xl border-white/20 px-7 text-white hover:bg-white/10"
              >
                <Headphones className="mr-2 h-4 w-4" />
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
