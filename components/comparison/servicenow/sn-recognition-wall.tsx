"use client";

import Image from "next/image";
import { Star, Trophy } from "lucide-react";
import { Reveal, SectionHeader } from "./sn-shared";

/* ══════════════════════════════════════════════════════════════════
   Recognition — alternate concept: one unified, connected proof panel.
   A single framed card that stacks a hero rating band, a G2 wins band,
   and an analyst band — matching the page's glance/decision aesthetic.
   ══════════════════════════════════════════════════════════════════ */

/* ── Review-site brand logos ─────────────────────────────────── */

function CapterraLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 110 28" fill="none" className={className} aria-label="Capterra">
      <polygon points="0,14 11,0 11,9 22,9 22,19 11,19 11,28" fill="#FF6C2F" />
      <text x="27" y="20" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="14" fill="currentColor">Capterra</text>
    </svg>
  );
}
function GetAppLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 95 28" fill="none" className={className} aria-label="GetApp">
      <rect x="0" y="4" width="20" height="20" rx="4" fill="#7A5AF8" />
      <text x="4" y="19" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="13" fill="white">G</text>
      <text x="26" y="20" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="14" fill="currentColor">GetApp</text>
    </svg>
  );
}
function G2Logo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 24" fill="none" className={className} aria-label="G2">
      <text x="0" y="20" fontFamily="Arial Black, Arial, sans-serif" fontWeight="900" fontSize="22" fill="#FF492C" letterSpacing="-1">G2</text>
    </svg>
  );
}
function CrozdeskLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 110 28" fill="none" className={className} aria-label="Crozdesk">
      <circle cx="12" cy="14" r="11" fill="#0085CA" />
      <path d="M18 8.5 A8 8 0 1 0 18 19.5" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <text x="28" y="20" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="14" fill="currentColor">Crozdesk</text>
    </svg>
  );
}

/* ── Data ─────────────────────────────────────────────────────── */

const reviewPlatforms = [
  { name: "Capterra", rating: "4.7", reviews: "190+", Logo: CapterraLogo, accent: "#FF6C2F" },
  { name: "GetApp", rating: "4.7", reviews: "190+", Logo: GetAppLogo, accent: "#7A5AF8" },
  { name: "G2", rating: "4.7", reviews: "120+", Logo: G2Logo, accent: "#FF492C" },
  { name: "Crozdesk", rating: "4.8", reviews: "80+", Logo: CrozdeskLogo, accent: "#0085CA" },
];

function Stars({ color = "currentColor" }: { color?: string }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-4 w-4" style={{ fill: color, color }} />
      ))}
    </div>
  );
}

const g2Regions = [
  { region: "United Kingdom", award: "Leader" },
  { region: "Europe", award: "High Performer" },
  { region: "Latin America", award: "High Performer" },
  { region: "Momentum", award: "High Performer" },
];

const analysts = [
  { logo: "/logos/awards/gartner.svg", alt: "Gartner", label: "Market Guide", desc: "Network Automation & Orchestration" },
  { logo: "/logos/awards/deloitte.svg", alt: "Deloitte", label: "Technology Fast 50", desc: "Winner, 3 consecutive years" },
  { logo: "/logos/awards/idc.svg", alt: "IDC", label: "MarketScape", desc: "Recognized as a Notable Vendor" },
];

/* ── Section ──────────────────────────────────────────────────── */

export function SnRecognitionWall() {
  return (
    <section
      id="recognition-wall"
      className="relative z-10 scroll-mt-28 border-t border-border bg-background py-20"
    >
      <div className="mx-auto w-full max-w-7xl px-6">
        <Reveal>
          <SectionHeader
            center
            eyebrow="Trusted & Awarded"
            title="Proof, all in one place"
            intro="Customer ratings, G2 rankings, and analyst recognition — the full picture on a single panel."
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-12 overflow-hidden rounded-2xl border border-border">
            {/* ── Band 1 — hero rating + stat quadrants ─────────── */}
            <div className="grid lg:grid-cols-[1.15fr_1fr]">
              {/* Hero rating */}
              <div className="flex flex-col justify-center gap-6 border-b border-border bg-primary/[0.04] p-8 sm:p-10 lg:border-b-0 lg:border-r">
                <div className="flex items-end gap-4">
                  <span className="text-[clamp(3rem,8vw,5rem)] font-bold leading-none text-primary">4.7</span>
                  <div className="mb-2">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5" style={{ fill: "#F17463", color: "#F17463" }} />
                      ))}
                    </div>
                    <span className="mt-1 block text-body-sm text-muted-foreground">out of 5 · 580+ reviews</span>
                  </div>
                </div>
                <p className="max-w-md text-body-md text-muted-foreground">
                  Rated highest by the people who run it every day, across the world&apos;s leading software marketplaces.
                </p>
              </div>

              {/* Review platforms — 4 cards */}
              <div className="grid grid-cols-2">
                {reviewPlatforms.map((p, i) => {
                  const { Logo } = p;
                  return (
                    <div
                      key={p.name}
                      className={`flex flex-col justify-center gap-3 bg-card px-6 py-8 transition-colors hover:bg-muted/30
                        ${i % 2 !== 0 ? "border-l border-border" : ""}
                        ${i >= 2 ? "border-t border-border" : ""}`}
                    >
                      <Logo className="h-5 w-auto text-foreground" />
                      <Stars color={p.accent} />
                      <div className="flex items-baseline gap-1">
                        <span className="text-heading-md text-foreground">{p.rating}</span>
                        <span className="text-body-xs text-muted-foreground">/5 · {p.reviews} reviews</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ── Band 2 — G2 Grid wins ─────────────────────────── */}
            <div className="grid grid-cols-2 border-t border-border md:grid-cols-4">
              {g2Regions.map((r, i) => (
                <div
                  key={r.region}
                  className={`flex flex-col items-center gap-1.5 bg-card px-4 py-8 text-center
                    ${i % 2 !== 0 ? "border-l border-border" : ""}
                    ${i >= 2 ? "border-t border-border md:border-t-0" : ""}
                    ${i !== 0 ? "md:border-l" : ""}`}
                >
                  <span className="text-base font-black text-[#FF492C]">G2</span>
                  <span className="text-label-lg text-foreground">{r.award}</span>
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground/70">
                    Fall 2025 · {r.region}
                  </span>
                </div>
              ))}
            </div>

            {/* ── Band 3 — analyst recognition ──────────────────── */}
            <div className="grid border-t border-border bg-muted/20 md:grid-cols-3">
              {analysts.map((a, i) => (
                <div
                  key={a.alt}
                  className={`flex items-center gap-4 px-6 py-6 sm:px-8
                    ${i !== 0 ? "border-t border-border md:border-t-0 md:border-l" : ""}`}
                >
                  <div className="inline-flex h-11 shrink-0 items-center rounded-lg bg-white px-3.5">
                    <Image
                      src={a.logo}
                      alt={a.alt}
                      width={120}
                      height={32}
                      className="h-6 w-auto max-w-[120px] object-contain"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="flex items-center gap-1.5 text-label-md text-foreground">
                      <Trophy className="h-3.5 w-3.5 text-primary" />
                      {a.label}
                    </p>
                    <p className="mt-0.5 truncate text-body-xs text-muted-foreground">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
