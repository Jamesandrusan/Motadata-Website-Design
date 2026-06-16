"use client";

import { MapPin, Award, ArrowRight } from "lucide-react";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";

export function PtCta() {
  return (
    <section className="relative z-10">
      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        {/* Gradient CTA */}
        <div
          className="group relative overflow-hidden rounded-3xl px-8 py-16 text-center text-white sm:px-16 sm:py-20"
          style={{ background: "linear-gradient(135deg, hsl(var(--gradient-from)), hsl(var(--gradient-to)))" }}
        >
          <DottedGlowBackground
            className="opacity-0 transition-opacity duration-500 group-hover:opacity-50"
            gap={14}
            radius={1.8}
            opacity={0.6}
            color="rgba(255,255,255,0.4)"
          />
          <div className="relative z-10">
            <h2 className="text-display-md">
              Ready to Partner with Motadata?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/60">
              Join our global partner ecosystem and unlock new revenue opportunities with
              industry-leading unified observability and service management solutions.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#become-partner"
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-white px-6 text-label-md text-foreground transition-colors hover:bg-white/90"
              >
                Become a Partner
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/resources/partners/locate"
                className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 text-label-md text-white transition-colors hover:bg-white/20"
              >
                Find a Partner
              </a>
            </div>
          </div>
        </div>

        {/* Secondary links — outside CTA */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <a
            href="#"
            className="group/card flex items-center gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover/card:bg-primary/20">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-label-md-strong text-foreground">Don&apos;t see a partner in your region?</p>
              <p className="mt-0.5 text-caption text-muted-foreground">Contact us to hear about other support options.</p>
            </div>
          </a>
          <a
            href="#"
            className="group/card flex items-center gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover/card:bg-primary/20">
              <Award className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-label-md-strong text-foreground">Individual consultant?</p>
              <p className="mt-0.5 text-caption text-muted-foreground">Check out our Certified Pro Program.</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
