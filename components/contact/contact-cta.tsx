"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";

export function ContactCta() {
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
              Need Technical Assistance?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/60">
              Our dedicated support team is ready to help you with technical issues, product
              questions, and troubleshooting.
            </p>
            <div className="mx-auto mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="h-12 rounded-xl bg-white text-foreground hover:bg-white/90 px-7 text-[15px]"
              >
                Visit Customer Support <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
