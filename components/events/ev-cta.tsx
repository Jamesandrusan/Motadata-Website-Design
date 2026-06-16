"use client";

import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";

export function EvCta() {
  return (
    <section className="relative z-10">
      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        <div
          className="group relative overflow-hidden rounded-3xl px-8 py-16 text-center text-white sm:px-16 sm:py-20"
          style={{
            background:
              "linear-gradient(135deg, hsl(var(--gradient-from)), hsl(var(--gradient-to)))",
          }}
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
              Never Miss an Event
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/60">
              Subscribe to our events calendar and get notified about upcoming conferences,
              partner sessions, and webinars worldwide.
            </p>

            <div className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email address"
                className="h-12 flex-1 rounded-xl border border-white/10 bg-white/10 px-4 text-sm text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-white/20"
              />
              <button className="h-12 shrink-0 rounded-xl bg-white px-6 text-label-md text-foreground transition-opacity hover:opacity-90">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
