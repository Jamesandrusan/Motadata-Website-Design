"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";

export function CompanyCta() {
  return (
    <section className="relative z-10">
      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        {/* Dark CTA card */}
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
              Join Us on Our Journey
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/60">
              We&apos;re hiring talented individuals to help shape the future of
              IT operations.
            </p>
            <div className="mt-10">
              <a href="/careers">
                <Button
                  size="lg"
                  className="h-12 rounded-xl bg-white text-foreground hover:bg-white/90 px-8"
                >
                  View Open Positions <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Subscribe section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 rounded-2xl border border-border/60 overflow-hidden bg-white"
        >
          <div className="group relative overflow-hidden px-8 py-12 transition-colors hover:bg-neutral-50 sm:px-16 sm:py-16">
            <DottedGlowBackground
              className="opacity-0 transition-opacity duration-500 group-hover:opacity-60"
              gap={14}
              radius={1.2}
              opacity={0.4}
            />
            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <h2 className="text-display-md">
                  Right role, right time.
                </h2>
                <p className="mt-3 max-w-md text-body-md text-muted-foreground">
                  We&apos;ll share relevant opportunities when they open up.
                </p>
              </div>
              <div className="relative shrink-0 w-full sm:w-72">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="h-12 w-full rounded-xl border-border bg-background text-foreground placeholder:text-muted-foreground focus-visible:ring-ring pr-12"
                />
                <button
                  type="button"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white transition-colors hover:bg-primary/90"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
