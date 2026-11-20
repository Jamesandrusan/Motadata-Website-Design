"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { INFINITY_BANNER } from "@/lib/infinity-launch-data";
import { InfinityMark } from "@/components/infinity/infinity-mark";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

/* ── shared pieces ── */

function Badge({ dark = false }: { dark?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-label-sm ${
        dark
          ? "border border-white/15 bg-white/[0.06] text-white/85"
          : "border border-primary/20 bg-primary/5 text-primary"
      }`}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
      </span>
      {INFINITY_BANNER.eyebrow}
    </span>
  );
}

function Headline({ dark = false, small = false }: { dark?: boolean; small?: boolean }) {
  return (
    <h2
      id="infinity-launch-heading"
      className={`font-bold tracking-tight ${
        small
          ? "text-2xl leading-snug sm:text-[28px]"
          : "text-[clamp(1.9rem,3.4vw,2.75rem)] leading-[1.12]"
      } ${dark ? "text-white" : "text-foreground"}`}
    >
      {INFINITY_BANNER.titleLead} {INFINITY_BANNER.titleAccent} {INFINITY_BANNER.titleTail}
      <br className="hidden sm:block" /> {INFINITY_BANNER.titleSecond}
    </h2>
  );
}

function Para({ dark = false }: { dark?: boolean }) {
  const strong = dark ? "font-semibold text-white" : "font-semibold text-foreground";
  return (
    <p className={`text-body-md ${dark ? "text-white/60" : "text-muted-foreground"}`}>
      A hardware footprint engineered down by <span className={strong}>up to 30–40%</span>,
      a full <span className={strong}>observability pipeline</span> included in the base,{" "}
      <span className={strong}>one unified edition</span> that retires every tier — and a
      platform ready for <span className={strong}>agentic AI</span>.
    </p>
  );
}

function Ctas({ dark = false, center = false }: { dark?: boolean; center?: boolean }) {
  return (
    <div className={`flex flex-wrap items-center gap-4 ${center ? "justify-center" : ""}`}>
      {dark ? (
        <>
          <Link
            href={INFINITY_BANNER.primaryCta.href}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-7 text-[15px] font-medium text-foreground transition-colors hover:bg-white/90"
          >
            {INFINITY_BANNER.primaryCta.label} <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
          <Link
            href={INFINITY_BANNER.secondaryCta.href}
            className="inline-flex h-12 items-center justify-center rounded-xl border border-white/20 px-7 text-[15px] font-medium text-white transition-colors hover:bg-white/10"
          >
            {INFINITY_BANNER.secondaryCta.label}
          </Link>
        </>
      ) : (
        <>
          <Link
            href={INFINITY_BANNER.primaryCta.href}
            className="hero-shimmer inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-foreground px-7 text-[15px] font-medium text-background transition-colors hover:bg-foreground/90"
          >
            {INFINITY_BANNER.primaryCta.label} <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
          <Link
            href={INFINITY_BANNER.secondaryCta.href}
            className="inline-flex h-12 items-center justify-center rounded-md border border-border px-7 text-[15px] font-medium text-foreground transition-colors hover:bg-muted/40"
          >
            {INFINITY_BANNER.secondaryCta.label}
          </Link>
        </>
      )}
    </div>
  );
}

/* ── Option 1 — split card: content left, concept illustration right ── */
function BannerSplitConcept() {
  return (
    <motion.div
      {...fadeIn}
      transition={{ duration: 0.5 }}
      className="overflow-hidden rounded-2xl border border-border/60 bg-white"
    >
      <div className="grid lg:grid-cols-[1.3fr_1fr]">
        <div className="p-8 sm:p-10 lg:p-14">
          <Badge />
          <div className="mt-6">
            <Headline />
          </div>
          <div className="mt-5 max-w-xl">
            <Para />
          </div>
          <div className="mt-8">
            <Ctas />
          </div>
        </div>

        <div className="group relative flex flex-col items-center justify-center border-t border-border/40 bg-neutral-50/60 p-8 lg:border-l lg:border-t-0 lg:p-10">
          <DottedGlowBackground
            className="opacity-0 transition-opacity duration-500 group-hover:opacity-60"
            gap={14}
            radius={1.2}
            opacity={0.4}
          />

          <div className="relative z-10 w-full max-w-[460px]">
            <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-2.5">
              <div className="flex flex-col gap-8">
                {INFINITY_BANNER.pillars.slice(0, 2).map((p, i) => (
                  <motion.div
                    key={p.num}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.3 + i * 0.15 }}
                    className="flex items-center gap-2"
                  >
                    <span className="rounded-full border border-border/60 bg-white px-3 py-1.5 text-center text-label-sm leading-snug text-muted-foreground">
                      <span className="mr-1.5 text-primary">{p.num}</span>
                      {p.label}
                    </span>
                    <span className="h-px min-w-3 flex-1 bg-gradient-to-r from-transparent to-[#F17463]/50" />
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <InfinityMark className="w-[min(150px,34vw)] shrink-0" />
              </motion.div>

              <div className="flex flex-col gap-8">
                {INFINITY_BANNER.pillars.slice(2).map((p, i) => (
                  <motion.div
                    key={p.num}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.6 + i * 0.15 }}
                    className="flex items-center gap-2"
                  >
                    <span className="h-px min-w-3 flex-1 bg-gradient-to-l from-transparent to-[#F17463]/50" />
                    <span className="rounded-full border border-border/60 bg-white px-3 py-1.5 text-center text-label-sm leading-snug text-muted-foreground">
                      <span className="mr-1.5 text-primary">{p.num}</span>
                      {p.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1 }}
              className="mt-7 flex justify-center"
            >
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-label-sm text-primary">
                {INFINITY_BANNER.markCaption}
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Option 2 — dark launch card, centered ── */
function BannerDark() {
  return (
    <motion.div
      {...fadeIn}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-3xl bg-foreground px-8 py-14 text-center text-white sm:px-14 sm:py-16"
    >
      <DottedGlowBackground
        className="opacity-0 transition-opacity duration-500 group-hover:opacity-50"
        gap={14}
        radius={1.8}
        opacity={0.6}
        color="rgba(255,255,255,0.4)"
      />
      <div className="relative z-10">
        <InfinityMark className="mx-auto w-[120px]" />
        <div className="mt-8">
          <Badge dark />
        </div>
        <div className="mt-6">
          <Headline dark />
        </div>
        <div className="mx-auto mt-5 max-w-2xl">
          <Para dark />
        </div>
        <div className="mt-9">
          <Ctas dark center />
        </div>

        <div className="mx-auto mt-11 max-w-4xl overflow-hidden rounded-2xl border border-white/10">
          <div className="grid grid-cols-2 gap-px bg-white/10 text-left lg:grid-cols-4">
            {INFINITY_BANNER.pillars.map((p) => (
              <div key={p.num} className="bg-white/[0.04] p-5">
                <p className="text-overline-sm text-primary">{p.num}</p>
                <p className="mt-1.5 text-label-md text-white">{p.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Option 3 — centered minimal, stat-strip pillars ── */
function BannerCentered() {
  return (
    <>
      <motion.div
        {...fadeIn}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl text-center"
      >
        <Badge />
        <div className="mt-8 flex justify-center">
          <InfinityMark className="w-[140px]" />
        </div>
        <div className="mt-8">
          <Headline />
        </div>
        <div className="mx-auto mt-5 max-w-2xl">
          <Para />
        </div>
        <div className="mt-8 flex justify-center">
          <Ctas center />
        </div>
      </motion.div>

      <motion.div
        {...fadeIn}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="mx-auto mt-14 grid max-w-4xl grid-cols-2 divide-x divide-border/40 md:grid-cols-4"
      >
        {INFINITY_BANNER.pillars.map((p) => (
          <div key={p.num} className="px-3 py-2 text-center lg:px-4">
            <p className="text-overline-sm text-primary">{p.num}</p>
            <p className="mx-auto mt-1.5 max-w-[180px] text-label-md leading-snug text-foreground">
              {p.label}
            </p>
          </div>
        ))}
      </motion.div>
    </>
  );
}

/* ── Option 4 — split: content left, pillar bento right ── */
function BannerBento() {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
      <motion.div {...fadeIn} transition={{ duration: 0.5 }}>
        <Badge />
        <div className="mt-6">
          <Headline />
        </div>
        <div className="mt-5 max-w-xl">
          <Para />
        </div>
        <div className="mt-8">
          <Ctas />
        </div>
      </motion.div>

      <motion.div
        {...fadeIn}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="overflow-hidden rounded-2xl border bg-border"
      >
        <div className="grid grid-cols-2 gap-px">
          {INFINITY_BANNER.pillars.map((p) => (
            <div key={p.num} className="feature-cell bg-white p-5 lg:p-6">
              <p className="text-overline-sm text-primary">{p.num}</p>
              <p className="mt-1.5 text-label-md text-foreground">{p.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-px flex items-center justify-center gap-3 bg-neutral-50 px-5 py-4">
          <InfinityMark animated={false} className="w-[52px]" />
          <p className="text-overline-sm text-muted-foreground">{INFINITY_BANNER.markCaption}</p>
        </div>
      </motion.div>
    </div>
  );
}

/* ── Option 5 — slim announcement card with pillar footer ── */
function BannerSlim() {
  return (
    <motion.div
      {...fadeIn}
      transition={{ duration: 0.5 }}
      className="overflow-hidden rounded-2xl border border-border/60 bg-white"
    >
      <div className="flex flex-col items-center gap-8 p-8 lg:flex-row lg:gap-12 lg:p-10">
        <InfinityMark className="w-[150px] shrink-0" />
        <div className="min-w-0 flex-1 text-center lg:text-left">
          <Badge />
          <div className="mt-4">
            <Headline small />
          </div>
          <div className="mt-3">
            <Para />
          </div>
        </div>
        <div className="flex shrink-0 flex-col items-center gap-3">
          <Ctas center />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 border-t border-border/40 bg-neutral-50 px-6 py-4">
        {INFINITY_BANNER.pillars.map((p) => (
          <span key={p.num} className="text-label-sm-medium text-muted-foreground">
            <span className="mr-1.5 text-label-sm text-primary">{p.num}</span>
            {p.label}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

/* ── Option 6 — the infinity symbol formed from keywords ──
   Scattered platform keywords fly onto the lemniscate path, drawing the
   symbol out of words; content and buttons appear once it assembles. */
const INFINITY_WORDS = [
  "Observability", "Telemetry", "Metrics", "Logs", "Traces", "Flows",
  "Events", "AIOps", "Correlation", "Retention", "Parsing", "Enrichment",
  "Automation", "Topology", "Dashboards", "SLO", "NCCM", "APM", "RUM",
  "Pipeline", "Devices", "Anomalies", "Masking", "Governance", "HA & DR",
  "Per Source", "No Tiers", "Agentic AI", "Lower TCO", "Licensing",
  "One Edition", "Runbooks",
];

/* Deterministic pseudo-random (no Math.random — stable across renders) */
const prand = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

/* Bernoulli lemniscate in % canvas coordinates */
const lemniscatePoint = (t: number) => {
  const denom = 1 + Math.sin(t) ** 2;
  return {
    x: 50 + 45 * (Math.cos(t) / denom),
    y: 50 + 100 * ((Math.sin(t) * Math.cos(t)) / denom),
  };
};

/* Canvas height ÷ width — used to compute true distances and tangents */
const CANVAS_ASPECT = 0.45;
const PATH_SAMPLES = 720;

/* Canvas reference size the estimates are tuned for */
const CANVAS_W = 768;
const CANVAS_H = CANVAS_W * CANVAS_ASPECT;

/* Word-cloud infinity: three parallel lanes trace the lemniscate as a thick
   band. Words repeat to fill each lane, sizes vary, and every word occupies
   arc space proportional to its rendered width — so the band stays dense
   with no overlap, like a classic word-art infinity. */
function buildWordCloud() {
  const cum: number[] = [0];
  let total = 0;
  let prev = lemniscatePoint(0);
  for (let k = 1; k <= PATH_SAMPLES; k++) {
    const p = lemniscatePoint((k / PATH_SAMPLES) * Math.PI * 2);
    total += Math.hypot(p.x - prev.x, (p.y - prev.y) * CANVAS_ASPECT);
    cum.push(total);
    prev = p;
  }

  const pointAt = (dist: number) => {
    const d = ((dist % total) + total) % total;
    let j = cum.findIndex((c) => c >= d);
    if (j < 1) j = 1;
    const t = (j / PATH_SAMPLES) * Math.PI * 2;
    const p = lemniscatePoint(t);
    const pa = lemniscatePoint(t - 0.03);
    const pb = lemniscatePoint(t + 0.03);
    const raw =
      (Math.atan2((pb.y - pa.y) * CANVAS_ASPECT, pb.x - pa.x) * 180) / Math.PI;
    let ang = raw;
    if (ang > 90) ang -= 180;
    if (ang < -90) ang += 180;
    return { ...p, ang, raw };
  };

  const PCT_PER_PX = 100 / CANVAS_W;
  const lanes = [
    { offset: -14, sizes: [10, 11, 12] },
    { offset: 0, sizes: [12, 13, 15] },
    { offset: 14, sizes: [10, 11, 13] },
  ];

  const out: {
    key: string;
    w: string;
    x: number;
    y: number;
    ang: number;
    size: number;
  }[] = [];

  lanes.forEach((lane, li) => {
    /* Stagger each lane's start and word order so lanes never align */
    let acc = li * 18;
    let wi = li * 11;
    while (true) {
      const w = INFINITY_WORDS[wi % INFINITY_WORDS.length];
      const size = lane.sizes[Math.floor(prand(wi * 9.17 + li * 3.3) * lane.sizes.length)];
      const lenPct = (w.length * 0.62 * size + 9) * PCT_PER_PX;
      if (acc + lenPct > total + li * 18) break;
      const p = pointAt(acc + lenPct / 2);
      /* Push the word out along the curve's normal to its lane */
      const n = ((p.raw + 90) * Math.PI) / 180;
      out.push({
        key: `${li}-${wi}`,
        w,
        x: p.x + (Math.cos(n) * lane.offset * 100) / CANVAS_W,
        y: p.y + (Math.sin(n) * lane.offset * 100) / CANVAS_H,
        ang: p.ang,
        size,
      });
      acc += lenPct;
      wi++;
    }
  });

  return out;
}

function BannerWordsInfinity() {
  const layout = buildWordCloud();
  const points = layout.map((p, i) => ({
    ...p,
    dx: (prand(i * 12.9898) - 0.5) * 460,
    dy: (prand(i * 78.233) - 0.5) * 280,
    drot: (prand(i * 3.7) - 0.5) * 40,
  }));

  return (
    <div className="relative mx-auto flex min-h-[440px] w-full max-w-3xl items-center justify-center">
      {/* Act 1 — the word-formed symbol: assembles, holds, then fades away */}
      <motion.div
        initial={{ opacity: 1 }}
        whileInView={{ opacity: [1, 1, 0] }}
        viewport={{ once: true }}
        transition={{ duration: 3.2, times: [0, 0.78, 1], ease: "easeInOut" }}
        className="pointer-events-none absolute inset-0"
      >
        {points.map((p, i) => (
          <span
            key={p.key}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
          >
            <motion.span
              initial={{ x: p.dx, y: p.dy, opacity: 0.15, rotate: p.ang + p.drot }}
              whileInView={{ x: 0, y: 0, opacity: i % 5 === 0 ? 1 : 0.75, rotate: p.ang }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.15 + i * 0.012, ease: [0.2, 0.8, 0.2, 1] }}
              className={`block whitespace-nowrap font-bold leading-none ${
                i % 5 === 0 ? "text-primary" : "text-foreground/70"
              }`}
              style={{ fontSize: `${p.size}px` }}
            >
              {p.w}
            </motion.span>
          </span>
        ))}
      </motion.div>

      {/* Act 2 — content takes the symbol's place */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 3.1, ease: "easeOut" }}
        className="mx-auto max-w-3xl text-center"
      >
        <Badge />
        <div className="mt-6">
          <Headline />
        </div>
        <div className="mx-auto mt-5 max-w-2xl">
          <Para />
        </div>
        <div className="mt-8 flex justify-center">
          <Ctas center />
        </div>
      </motion.div>
    </div>
  );
}

/**
 * Homepage launch announcement for ObserveOps Infinity.
 * Six layout options behind a hover-revealed picker. (Remove once chosen.)
 */
export function InfinityLaunchBanner() {
  const [variant, setVariant] = useState<1 | 2 | 3 | 4 | 5 | 6>(1);

  return (
    <section
      aria-labelledby="infinity-launch-heading"
      className="group/section relative z-10"
    >
      {/* Layout picker — outside the container, revealed on section hover. (Remove once chosen.) */}
      <div className="absolute right-4 top-6 z-20 flex items-center gap-1 opacity-0 transition-opacity duration-300 group-hover/section:opacity-100">
        {([1, 2, 3, 4, 5, 6] as const).map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => setVariant(n)}
            aria-label={`Layout ${n}`}
            className={`h-6 w-6 rounded-full text-[11px] font-semibold transition-colors ${
              variant === n
                ? "bg-primary text-primary-foreground"
                : "bg-foreground/5 text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            {n}
          </button>
        ))}
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        {variant === 1 && <BannerSplitConcept />}
        {variant === 2 && <BannerDark />}
        {variant === 3 && <BannerCentered />}
        {variant === 4 && <BannerBento />}
        {variant === 5 && <BannerSlim />}
        {variant === 6 && <BannerWordsInfinity />}
      </div>
    </section>
  );
}
