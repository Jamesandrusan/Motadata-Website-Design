"use client";

import { useState } from "react";
import { Star, Trophy, TrendingUp, Users, Globe, Quote, Sparkles, BadgeCheck, Medal, ArrowUpRight, Building2 } from "lucide-react";
import { Reveal, SectionHeader } from "./sn-shared";

/* ══════════════════════════════════════════════════════════════════
   Recognition — 10 switchable layout concepts.
   Pick one via the floating rail; the winner keeps its own component.
   ══════════════════════════════════════════════════════════════════ */

/* ── Brand Logos ──────────────────────────────────────────────── */

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

/* ── Shared data ──────────────────────────────────────────────── */

const stats = [
  { value: "5,800+", label: "Organizations", Icon: Users },
  { value: "4.7/5", label: "Average rating", Icon: Star },
  { value: "580+", label: "Verified reviews", Icon: Quote },
  { value: "40+", label: "Countries", Icon: Globe },
];

const g2Badges = [
  { region: "Europe", award: "High Performer", season: "Fall 2025" },
  { region: "Momentum", award: "High Performer", season: "Fall 2025" },
  { region: "United Kingdom", award: "Leader", season: "Fall 2025" },
  { region: "Latin America", award: "High Performer", season: "Fall 2025" },
];

const reviewSites = [
  { name: "Capterra", rating: "4.7", reviews: "190+", badge: "High Performer", Logo: CapterraLogo, accent: "#FF6C2F" },
  { name: "GetApp", rating: "4.7", reviews: "190+", badge: "High Performer", Logo: GetAppLogo, accent: "#7A5AF8" },
  { name: "G2", rating: "4.7", reviews: "120+", badge: "High Performer", Logo: G2Logo, accent: "#FF492C" },
  { name: "Crozdesk", rating: "4.8", reviews: "80+", badge: "High Performer", Logo: CrozdeskLogo, accent: "#0085CA" },
];

function Stars({ color = "currentColor", size = 3.5 }: { color?: string; size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} style={{ fill: color, color, width: `${size * 4}px`, height: `${size * 4}px` }} />
      ))}
    </div>
  );
}

/* ══ OPTION 1 — Bento grid ═══════════════════════════════════════ */
function RecognitionBento() {
  return (
    <div className="grid gap-4 md:grid-cols-4 md:grid-rows-2">
      <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl p-8 md:col-span-2 md:row-span-2"
        style={{ background: "linear-gradient(145deg, #F17463, #D4543F)" }}>
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
        <div className="relative">
          <Trophy className="h-7 w-7 text-white/90" />
          <p className="mt-6 text-[clamp(3rem,7vw,4.75rem)] font-bold leading-none text-white">4.7/5</p>
          <div className="mt-4"><Stars color="#ffffff" size={4} /></div>
        </div>
        <p className="relative mt-8 max-w-xs text-body-md text-white/85">
          Average rating across 580+ verified reviews from 5,800+ organizations in 40+ countries.
        </p>
      </div>
      {reviewSites.map((site) => {
        const { Logo } = site;
        return (
          <div key={site.name}
            className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
            <Logo className="h-5 w-auto text-foreground" />
            <div className="mt-6">
              <div className="mb-1"><Stars color={site.accent} size={3} /></div>
              <div className="flex items-baseline gap-1">
                <span className="text-heading-md text-foreground">{site.rating}</span>
                <span className="text-body-xs text-muted-foreground">/5 · {site.reviews}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ══ OPTION 2 — Trust marquee ════════════════════════════════════ */
function RecognitionMarquee() {
  const rowA = [...g2Badges, ...g2Badges];
  const rowB = [...reviewSites, ...reviewSites];
  return (
    <div>
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
        {stats.map(({ value, label, Icon }) => (
          <div key={label} className="flex flex-col items-center justify-center gap-2 bg-card px-4 py-8 text-center">
            <Icon className="h-5 w-5 text-primary" />
            <span className="text-heading-lg text-foreground">{value}</span>
            <span className="text-label-sm text-muted-foreground">{label}</span>
          </div>
        ))}
      </div>
      <div className="relative mt-6 space-y-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />
        <div className="flex overflow-hidden">
          <div className="sn-mq flex shrink-0 gap-4 pr-4">
            {rowA.map((b, i) => (
              <div key={i} className="flex shrink-0 items-center gap-3 rounded-xl border border-border bg-card px-5 py-3.5">
                <span className="text-base font-black text-[#FF492C]">G2</span>
                <div className="flex flex-col">
                  <span className="text-label-md text-foreground">{b.award}</span>
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground/70">{b.season} · {b.region}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex overflow-hidden">
          <div className="sn-mq-rev flex shrink-0 gap-4 pr-4">
            {rowB.map((s, i) => {
              const { Logo } = s;
              return (
                <div key={i} className="flex shrink-0 items-center gap-3 rounded-xl border border-border bg-card px-5 py-3.5">
                  <Logo className="h-5 w-auto text-foreground" />
                  <div className="flex items-center gap-1.5">
                    <Star className="h-3.5 w-3.5" style={{ fill: s.accent, color: s.accent }} />
                    <span className="text-label-md-strong text-foreground">{s.rating}</span>
                    <span className="text-[10px] text-muted-foreground">· {s.reviews}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes sn-mq { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes sn-mq-rev { from { transform: translateX(-50%); } to { transform: translateX(0); } }
        .sn-mq { animation: sn-mq 34s linear infinite; }
        .sn-mq-rev { animation: sn-mq-rev 34s linear infinite; }
        .sn-mq:hover, .sn-mq-rev:hover { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) { .sn-mq, .sn-mq-rev { animation: none; } }
      `}</style>
    </div>
  );
}

/* ══ OPTION 3 — Editorial split ══════════════════════════════════ */
function RecognitionEditorial() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border">
      <div className="grid lg:grid-cols-2">
        <div className="flex flex-col justify-center gap-5 border-b border-border bg-primary/[0.04] p-10 lg:border-b-0 lg:border-r lg:p-12">
          <div className="flex items-end gap-4">
            <span className="text-[clamp(3.5rem,9vw,6rem)] font-bold leading-none text-primary">4.7</span>
            <div className="mb-2">
              <Stars color="#F17463" size={4.5} />
              <span className="mt-1 block text-body-sm text-muted-foreground">out of 5</span>
            </div>
          </div>
          <p className="max-w-sm text-body-md text-muted-foreground">
            Averaged across 580+ verified reviews on the world&apos;s leading software marketplaces.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2">
            {reviewSites.map((s) => {
              const { Logo } = s;
              return <Logo key={s.name} className="h-5 w-auto text-foreground opacity-70" />;
            })}
          </div>
        </div>
        <div className="grid grid-cols-2">
          {g2Badges.map((b, i) => (
            <div key={b.region}
              className={`flex flex-col gap-2 bg-card p-7 transition-colors hover:bg-muted/40
                ${i % 2 !== 0 ? "border-l border-border" : ""}
                ${i >= 2 ? "border-t border-border" : ""}`}>
              <span className="text-base font-black text-[#FF492C]">G2</span>
              <span className="text-heading-md text-foreground">{b.award}</span>
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground/70">{b.season} · {b.region}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ══ OPTION 4 — Ranked (G2 rankings on top, ratings below) ═══════ */
function RecognitionRanked() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      {/* Top — awards & badges (one per platform) */}
      <div className="flex items-center gap-2.5 border-b border-border px-6 py-4 sm:px-8">
        <Trophy className="h-4 w-4 text-primary" />
        <span className="text-label-md text-foreground">Awards & Badges · Fall 2025</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4">
        {reviewSites.map((s, i) => {
          const { Logo } = s;
          return (
            <div
              key={s.name}
              className={`flex flex-col items-center gap-3 px-4 py-9 text-center transition-colors hover:bg-muted/30
                ${i % 2 !== 0 ? "border-l border-border" : ""}
                ${i >= 2 ? "border-t border-border md:border-t-0" : ""}
                ${i !== 0 ? "md:border-l" : ""}`}
            >
              <Logo className="h-5 w-auto text-foreground" />
              <span className="rounded-full bg-primary/10 px-3 py-1 text-label-sm text-primary">{s.badge}</span>
            </div>
          );
        })}
      </div>

      {/* Bottom — customer ratings */}
      <div className="flex items-center gap-2.5 border-y border-border bg-muted/20 px-6 py-4 sm:px-8">
        <Star className="h-4 w-4 text-primary" style={{ fill: "#F17463" }} />
        <span className="text-label-md text-foreground">Customer Ratings</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4">
        {reviewSites.map((s, i) => {
          const { Logo } = s;
          return (
            <div
              key={s.name}
              className={`flex flex-col items-center gap-3 px-6 py-9 text-center transition-colors hover:bg-muted/30
                ${i % 2 !== 0 ? "border-l border-border" : ""}
                ${i >= 2 ? "border-t border-border md:border-t-0" : ""}
                ${i !== 0 ? "md:border-l" : ""}`}
            >
              <Logo className="h-5 w-auto text-foreground" />
              <Stars color={s.accent} size={3} />
              <div className="flex items-baseline gap-1">
                <span className="text-heading-md text-foreground">{s.rating}</span>
                <span className="text-body-xs text-muted-foreground">/5</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ══ OPTION 5 — Spotlight wall ═══════════════════════════════════ */
function RecognitionSpotlight() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      <div className="relative overflow-hidden rounded-2xl p-[1.5px] lg:col-span-1"
        style={{ background: "linear-gradient(145deg, #F17463, rgba(212,84,63,0.15))" }}>
        <div className="flex h-full flex-col justify-between rounded-[15px] bg-card p-8">
          <div className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-primary" />
            <span className="text-overline text-primary">Category Leader</span>
          </div>
          <div className="mt-8">
            <span className="text-[clamp(2.5rem,6vw,3.5rem)] font-black leading-none text-[#FF492C]">G2</span>
            <p className="mt-3 text-heading-lg text-foreground">Leader — United Kingdom</p>
            <p className="mt-1 text-body-sm text-muted-foreground">Fall 2025 Grid® Report</p>
          </div>
          <div className="mt-8 flex items-center gap-2 border-t border-border pt-5">
            <TrendingUp className="h-4 w-4 text-primary" />
            <span className="text-body-sm text-muted-foreground">High Performer across 3 more regions</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 lg:col-span-2">
        {reviewSites.map((site) => {
          const { Logo } = site;
          return (
            <div key={site.name}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:border-primary/40">
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40"
                style={{ background: site.accent }} />
              <div className="relative flex h-full flex-col justify-between gap-6">
                <Logo className="h-5 w-auto text-foreground" />
                <div>
                  <div className="mb-1.5"><Stars color={site.accent} size={3.5} /></div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-heading-lg text-foreground">{site.rating}</span>
                    <span className="text-body-xs text-muted-foreground">/5 · {site.reviews} reviews</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ══ OPTION 6 — Scoreboard ═══════════════════════════════════════ */
function RecognitionScoreboard() {
  return (
    <div className="overflow-hidden rounded-3xl text-white"
      style={{ background: "linear-gradient(150deg, #14142B 0%, #1E2247 55%, #2A2140 100%)" }}>
      <div className="relative">
        <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-primary/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-[#7A5AF8]/20 blur-3xl" />
        <div className="relative grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ value, label, Icon }) => (
            <div key={label} className="flex flex-col gap-3 bg-transparent px-8 py-12">
              <Icon className="h-5 w-5 text-primary" />
              <span className="text-[clamp(2.5rem,5vw,3.5rem)] font-bold leading-none">{value}</span>
              <span className="text-label-sm uppercase tracking-widest text-white/60">{label}</span>
            </div>
          ))}
        </div>
        <div className="relative flex flex-wrap items-center justify-center gap-x-8 gap-y-4 border-t border-white/10 px-8 py-6">
          <span className="text-label-sm uppercase tracking-widest text-white/50">Recognized on</span>
          {[...g2Badges.slice(0, 1), ...reviewSites].map((item, i) => (
            <span key={i} className="flex items-center gap-2 text-white/90">
              <Star className="h-3.5 w-3.5 text-primary" style={{ fill: "#F17463" }} />
              <span className="text-label-md">{"name" in item ? item.name : "G2 Leader"}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ══ OPTION 7 — Orbit constellation ══════════════════════════════ */
function RecognitionOrbit() {
  const points = [
    { top: "2%", left: "50%" },
    { top: "50%", left: "96%" },
    { top: "96%", left: "50%" },
    { top: "50%", left: "4%" },
  ];
  return (
    <div className="mx-auto flex max-w-md flex-col items-center">
      <div className="relative aspect-square w-full">
        <div className="absolute inset-0 rounded-full border border-border/60" />
        <div className="absolute inset-[16%] rounded-full border border-dashed border-border/50" />
        <div className="absolute inset-[32%] rounded-full border border-border/40" />
        <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-2xl" />
        <div className="absolute left-1/2 top-1/2 flex h-[34%] w-[34%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-primary/30 bg-card shadow-lg">
          <span className="text-[clamp(1.75rem,7vw,2.75rem)] font-bold leading-none text-primary">4.7</span>
          <div className="mt-1"><Stars color="#F17463" size={2.5} /></div>
          <span className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">Avg score</span>
        </div>
        {reviewSites.map((s, i) => {
          const { Logo } = s;
          return (
            <div key={s.name}
              className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1 rounded-2xl border border-border bg-card px-4 py-3 shadow-sm"
              style={{ top: points[i].top, left: points[i].left }}>
              <Logo className="h-4 w-auto text-foreground" />
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3" style={{ fill: s.accent, color: s.accent }} />
                <span className="text-label-sm text-foreground">{s.rating}</span>
              </div>
            </div>
          );
        })}
      </div>
      <p className="mt-6 text-center text-body-sm text-muted-foreground">
        Consistently top-rated across every major software marketplace.
      </p>
    </div>
  );
}

/* ══ OPTION 8 — Featured quote + trust rail ══════════════════════ */
function RecognitionQuote() {
  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-8 sm:p-10 lg:col-span-3">
        <Quote className="h-9 w-9 text-primary/25" />
        <blockquote className="mt-4 text-[clamp(1.25rem,2.4vw,1.75rem)] font-medium leading-snug text-foreground">
          &ldquo;We consolidated three tools into Motadata ServiceOps and cut our mean time to resolution by 40% in the first quarter.&rdquo;
        </blockquote>
        <div className="mt-8 flex items-center gap-3 border-t border-border pt-6">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Building2 className="h-5 w-5" />
          </span>
          <div>
            <p className="text-label-md text-foreground">IT Director</p>
            <p className="text-body-xs text-muted-foreground">Global Manufacturing Enterprise</p>
          </div>
          <div className="ml-auto"><Stars color="#F17463" size={3.5} /></div>
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:col-span-2">
        <div className="flex items-center gap-3 rounded-2xl border border-primary/30 bg-primary/[0.04] p-5">
          <Trophy className="h-6 w-6 shrink-0 text-primary" />
          <div>
            <p className="text-label-md text-foreground">G2 Leader — Fall 2025</p>
            <p className="text-body-xs text-muted-foreground">+ High Performer in 3 regions</p>
          </div>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border">
          {reviewSites.map((s) => {
            const { Logo } = s;
            return (
              <div key={s.name} className="flex flex-col items-center justify-center gap-2 bg-card px-4 py-5 text-center">
                <Logo className="h-4 w-auto text-foreground" />
                <div className="flex items-center gap-1">
                  <Star className="h-3 w-3" style={{ fill: s.accent, color: s.accent }} />
                  <span className="text-label-md-strong text-foreground">{s.rating}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ══ OPTION 9 — Accolade timeline ════════════════════════════════ */
const accolades = [
  { year: "2025", title: "G2 Leader — United Kingdom", note: "Fall 2025 Grid® Report", Icon: Trophy },
  { year: "2025", title: "High Performer — Europe · LATAM · Momentum", note: "G2 Fall 2025", Icon: Medal },
  { year: "2024", title: "4.7/5 across 580+ verified reviews", note: "Capterra · GetApp · Crozdesk", Icon: Star },
  { year: "2020", title: "Featured in Gartner Market Guide", note: "Network Automation & Orchestration", Icon: BadgeCheck },
  { year: "2019–21", title: "Deloitte Technology Fast 50", note: "3 consecutive years — India & APAC", Icon: TrendingUp },
];
function RecognitionTimeline() {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="relative pl-8 sm:pl-10">
        <div className="absolute bottom-4 left-[11px] top-4 w-px bg-gradient-to-b from-primary via-border to-transparent sm:left-[15px]" />
        <div className="space-y-6">
          {accolades.map(({ year, title, note, Icon }) => (
            <div key={title} className="relative">
              <span className="absolute -left-8 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-primary/30 bg-card text-primary sm:-left-10 sm:h-8 sm:w-8">
                <Icon className="h-3 w-3 sm:h-4 sm:w-4" />
              </span>
              <div className="rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40 sm:p-6">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-label-sm text-primary">{year}</span>
                  <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground/40" />
                </div>
                <h3 className="mt-3 text-heading-md text-foreground">{title}</h3>
                <p className="mt-1 text-body-sm text-muted-foreground">{note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ══ OPTION 10 — Poster band ═════════════════════════════════════ */
function RecognitionPoster() {
  return (
    <div className="relative overflow-hidden rounded-3xl px-8 py-16 text-center sm:px-14 sm:py-20"
      style={{ background: "linear-gradient(135deg, #F17463, #D4543F)" }}>
      <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-black/10 blur-3xl" />
      <div className="relative">
        <div className="flex items-center justify-center gap-2">
          <Sparkles className="h-4 w-4 text-white/80" />
          <span className="text-overline text-white/80">Loved by 5,800+ teams</span>
        </div>
        <div className="mt-6 flex items-center justify-center gap-4">
          <span className="text-[clamp(4rem,14vw,8rem)] font-black leading-none text-white">4.7</span>
          <div className="text-left">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-white sm:h-8 sm:w-8" style={{ fill: "white" }} />
              ))}
            </div>
            <span className="mt-1 block text-body-md text-white/80">out of 5 · 580+ reviews</span>
          </div>
        </div>
        <h3 className="mx-auto mt-6 max-w-xl text-heading-xl text-white">
          An award-winning platform, rated highest by the people who use it daily.
        </h3>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {reviewSites.map((s) => {
            const { Logo } = s;
            return <Logo key={s.name} className="h-6 w-auto text-white opacity-90 [&_polygon]:fill-white [&_rect]:fill-white/30 [&_circle]:fill-white/40" />;
          })}
          <span className="flex items-center gap-1.5 text-white">
            <Trophy className="h-5 w-5" />
            <span className="text-label-lg">G2 Leader</span>
          </span>
        </div>
      </div>
    </div>
  );
}

/* ── Switcher shell ───────────────────────────────────────────── */

const options = [
  { id: 1, name: "Bento", Component: RecognitionBento },
  { id: 2, name: "Marquee", Component: RecognitionMarquee },
  { id: 3, name: "Editorial", Component: RecognitionEditorial },
  { id: 4, name: "Ranked", Component: RecognitionRanked },
  { id: 5, name: "Spotlight", Component: RecognitionSpotlight },
  { id: 6, name: "Scoreboard", Component: RecognitionScoreboard },
  { id: 7, name: "Orbit", Component: RecognitionOrbit },
  { id: 8, name: "Quote", Component: RecognitionQuote },
  { id: 9, name: "Timeline", Component: RecognitionTimeline },
  { id: 10, name: "Poster", Component: RecognitionPoster },
];

export function SnRecognitionOptions() {
  const [active, setActive] = useState(1);
  const Active = options.find((o) => o.id === active)!.Component;

  return (
    <section id="recognition-options" className="relative z-10 scroll-mt-28 border-t border-border bg-background py-20">
      <div className="relative mx-auto w-full max-w-7xl px-6">
        {/* Minimalist floating layout switcher — remove once chosen */}
        <div className="absolute right-6 top-0 z-20 flex flex-col gap-1.5 lg:-right-4">
          {options.map((o) => (
            <button
              key={o.id}
              onClick={() => setActive(o.id)}
              title={o.name}
              aria-label={`Layout ${o.id}: ${o.name}`}
              className={`flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-semibold transition-all ${
                active === o.id
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-card text-muted-foreground ring-1 ring-border hover:text-foreground hover:ring-primary/40"
              }`}
            >
              {o.id}
            </button>
          ))}
        </div>

        <Reveal>
          <SectionHeader
            center
            eyebrow="Recognition — 10 concepts"
            title="An award-winning software, loved by customers"
            intro="Global trust. Proven results. 5,800+ organizations. 4.7/5 star average."
          />
        </Reveal>

        <Reveal key={active} delay={80}>
          <div className="mt-12">
            <Active />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
