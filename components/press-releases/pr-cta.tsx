"use client";

import { Mail, Phone, Clock } from "lucide-react";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";

const contactItems = [
  { icon: Mail, label: "Email", value: "press@motadata.com" },
  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
  { icon: Clock, label: "Response Time", value: "Within 24 hours" },
];

export function PrCta() {
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
              Media Inquiries
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/60">
              For press inquiries, interview requests, or media coverage opportunities,
              our communications team is ready to assist.
            </p>

            {/* Contact info */}
            <div className="mx-auto mt-8 flex max-w-2xl flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex shrink-0 items-center gap-2 whitespace-nowrap text-sm text-white/80">
                    <Icon className="h-4 w-4 shrink-0 text-white/60" />
                    <span className="font-medium text-white">{item.label}:</span>
                    <span>{item.value}</span>
                  </div>
                );
              })}
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#"
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-white px-6 text-label-md text-foreground transition-opacity hover:opacity-90"
              >
                Contact PR Team
              </a>
              <a
                href="#"
                className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 text-label-md text-white transition-colors hover:bg-white/20"
              >
                Download Media Kit
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
