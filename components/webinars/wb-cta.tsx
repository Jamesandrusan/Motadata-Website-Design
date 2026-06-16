"use client";

import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";

export function WbCta() {
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
              Never Miss a Webinar
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/60">
              Subscribe to our webinar calendar and get notified about upcoming online sessions,
              expert-led demos, and knowledge-sharing opportunities.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#"
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-white px-6 text-label-md text-foreground transition-opacity hover:opacity-90"
              >
                Subscribe to Calendar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
