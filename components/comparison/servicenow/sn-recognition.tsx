"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { Reveal, SectionHeader } from "./sn-shared";

/* ══════════════════════════════════════════════════════════════════
   Recognition — awards & badges on top, customer ratings below.
   Each column is one platform: its badge sits directly above its score.
   ══════════════════════════════════════════════════════════════════ */

const reviewSites = [
  { name: "Capterra", rating: "4.7", badge: "High Performer", logo: "/images/logos/capterra.png", accent: "#FF6C2F" },
  { name: "GetApp", rating: "4.7", badge: "High Performer", logo: "/images/logos/getapp.png", accent: "#7A5AF8" },
  { name: "G2", rating: "4.7", badge: "High Performer", logo: "/images/logos/g2.jpg", accent: "#FF492C" },
  { name: "Gartner", rating: "4.6", badge: "High Performer", logo: "/images/logos/gartner.png", accent: "#00355F" },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5 text-primary">
      {[...Array(5)].map((_, i) => {
        const fill = Math.max(0, Math.min(1, rating - i));
        return (
          <span key={i} className="relative inline-block h-3.5 w-3.5">
            {/* base outline */}
            <Star className="absolute inset-0 h-3.5 w-3.5" />
            {/* filled portion, clipped to the fraction for this star */}
            {fill > 0 && (
              <span className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
                <Star className="absolute inset-y-0 left-0 h-3.5 w-3.5 fill-current" />
              </span>
            )}
          </span>
        );
      })}
    </div>
  );
}

function PlatformLogo({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={150}
      height={40}
      className="h-8 w-auto max-w-[150px] object-contain"
    />
  );
}

/* ── Section ──────────────────────────────────────────────────── */

export function SnRecognition() {
  return (
    <section id="recognition" className="relative z-10 scroll-mt-28 border-t border-border bg-background py-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        <Reveal>
          <SectionHeader
            center
            eyebrow="Recognition"
            title="An award-winning software, loved by customers"
            intro="Global trust. Proven results. 5,800+ organizations. 4.7/5 star average."
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-12 grid grid-cols-2 overflow-hidden rounded-2xl border border-border bg-card md:grid-cols-4">
            {reviewSites.map((s, i) => (
              <div
                key={s.name}
                className={`flex flex-col items-center gap-3 px-6 py-9 text-center transition-colors hover:bg-muted/30
                  ${i % 2 !== 0 ? "border-l border-border" : ""}
                  ${i >= 2 ? "border-t border-border md:border-t-0" : ""}
                  ${i !== 0 ? "md:border-l" : ""}`}
              >
                <PlatformLogo src={s.logo} alt={s.name} />
                <div className="flex items-center gap-2">
                  <Stars rating={Number(s.rating)} />
                  <div className="flex items-baseline gap-1">
                    <span className="text-heading-md text-foreground">{s.rating}</span>
                    <span className="text-body-xs text-muted-foreground">/5</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
