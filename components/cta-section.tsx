"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";

interface CtaSectionProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

export function CtaSection({ title, description, children }: CtaSectionProps = {}) {
  return (
    <section className="relative z-10">
      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        <div className="group relative overflow-hidden rounded-3xl px-8 py-16 text-center text-white sm:px-16 sm:py-20" style={{ background: "linear-gradient(135deg, #F17463, #D4543F)" }}>
          <DottedGlowBackground
            className="opacity-0 transition-opacity duration-500 group-hover:opacity-50"
            gap={14}
            radius={1.8}
            opacity={0.6}
            color="rgba(255,255,255,0.4)"
          />
          <div className="relative z-10">
            <h2 className="text-display-md">
              {title ?? "See It. Try It. Transform IT."}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/60">
              {description ?? "From observability to service excellence, see Motadata in action and experience unified IT like never before."}
            </p>
            {children ? (
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                {children}
              </div>
            ) : (
              <div className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row" suppressHydrationWarning>
                <Input
                  type="email"
                  placeholder="you@company.com"
                  className="h-12 flex-1 rounded-xl border-white/10 bg-white/10 text-white placeholder:text-white/40 focus-visible:ring-white/20"
                />
                <Button size="lg" className="h-12 rounded-xl bg-white text-foreground hover:bg-white/90">
                  Get Started <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
