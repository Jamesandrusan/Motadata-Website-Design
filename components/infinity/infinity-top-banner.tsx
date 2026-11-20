"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Sparkles, X } from "lucide-react";
import { InfinityMark } from "@/components/infinity/infinity-mark";
import { INFINITY_BANNER, INFINITY_TOP_BANNER as B } from "@/lib/infinity-launch-data";

/* All typography uses the site font (Inter), inherited from <body>. */


type Variant = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21;
const VARIANTS: { n: Variant; label: string }[] = [
  { n: 1, label: "Editorial" },
  { n: 2, label: "Centered" },
  { n: 3, label: "Pillar grid" },
  { n: 4, label: "Split glass" },
  { n: 5, label: "Stat card" },
  { n: 6, label: "Marquee" },
  { n: 7, label: "Product window" },
  { n: 8, label: "AI prompt" },
  { n: 9, label: "Bento" },
  { n: 10, label: "Glow release" },
  { n: 11, label: "Data-flow beams" },
  { n: 12, label: "Spotlight" },
  { n: 13, label: "Count-up" },
  { n: 14, label: "Feature tabs" },
  { n: 15, label: "Before / after" },
  { n: 16, label: "Orbit" },
  { n: 17, label: "Watermark" },
  { n: 18, label: "Card fan" },
  { n: 19, label: "Two-tone" },
  { n: 20, label: "Stepper" },
  { n: 21, label: "Rotating headline" },
];

/* ───────────────────────── shared pieces ───────────────────────── */

const CARD =
  "border border-white/80 bg-white/55 shadow-[0_1px_2px_rgba(15,23,42,0.04)] backdrop-blur-md";

/** Light coral gradient with soft blooms (the shared banner ground). */
function CoralGround({ soft = false }: { soft?: boolean }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div
        className="absolute inset-0"
        style={{
          background: soft
            ? "linear-gradient(180deg, #FFF8F6 0%, #FDEDE8 100%)"
            : "linear-gradient(100deg, #FFF6F3 0%, #FDE7E1 32%, #FBD5CB 64%, #F7B8AA 100%)",
        }}
      />
      <div className="absolute -left-20 -top-24 h-72 w-[520px] rounded-full bg-white/70 blur-3xl" />
      <div className="absolute -bottom-32 left-1/3 h-72 w-[560px] rounded-full bg-[#FFD9CF]/70 blur-3xl" />
      <div className="absolute -right-24 top-0 h-80 w-[420px] rounded-full bg-[#F17463]/20 blur-3xl" />
    </div>
  );
}

/** Four-point sparkle used at card joints. */
function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={`h-4 w-4 text-white ${className}`} fill="currentColor">
      <path d="M12 0c.6 6.2 5.8 11.4 12 12-6.2.6-11.4 5.8-12 12C11.4 17.8 6.2 12.6 0 12 6.2 11.4 11.4 6.2 12 0Z" />
    </svg>
  );
}

function StatusPill() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#F17463]/25 bg-white/70 px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#E0583F] backdrop-blur-sm">
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F17463] opacity-75" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#F17463]" />
      </span>
      New launch · {INFINITY_BANNER.eyebrow}
    </span>
  );
}

/** "Introducing ObserveOps Infinity." / "Four foundations. One edition." */
function Headline({ className = "", center = false }: { className?: string; center?: boolean }) {
  return (
    <h2
      className={`text-balance font-semibold tracking-[-0.025em] text-foreground ${center ? "text-center" : ""} ${className}`}
    >
      <span className="font-normal text-foreground/60">{B.headlineLead} </span>
      <span className="text-[#E0583F]">{B.headlineAccent}.</span>
      <br />
      <span>{B.headlineTail}</span>
    </h2>
  );
}

function PrimaryCta({ className = "" }: { className?: string }) {
  return (
    <Link
      href={B.primaryCta.href}
      className={`group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-foreground px-6 text-[14px] font-semibold text-white transition-colors hover:bg-[#E0583F] ${className}`}
    >
      {B.primaryCta.label}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}

function SecondaryCta({ boxed = false }: { boxed?: boolean }) {
  return boxed ? (
    <Link
      href={B.secondaryCta.href}
      className="inline-flex h-12 items-center justify-center rounded-lg border border-foreground/15 bg-white/70 px-6 text-[14px] font-semibold text-foreground backdrop-blur-sm transition-colors hover:border-[#F17463]/50 hover:text-[#E0583F]"
    >
      {B.secondaryCta.label}
    </Link>
  ) : (
    <Link
      href={B.secondaryCta.href}
      className="text-[14px] font-medium text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:text-[#E0583F] hover:decoration-[#F17463]"
    >
      {B.secondaryCta.label}
    </Link>
  );
}

const PILLARS = INFINITY_BANNER.pillars;

/* ───────────────────────── 1 · Split glass ─────────────────────────
   The approved reference layout: overline + headline card, attached
   status/CTA card, sparkles at the joints. */
function V1SplitGlass() {
  return (
    <div className="relative">
      <CoralGround />
      <div className="relative mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:py-10">
        <div
          className={`${CARD} grid gap-4 rounded-2xl p-6 sm:p-8 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] lg:items-center lg:gap-10 lg:rounded-br-none lg:px-10 lg:py-9`}
        >
          <p className="max-w-[18rem] text-[13px] font-semibold uppercase leading-relaxed tracking-[0.12em] text-foreground/70 sm:text-[14px]">
            {B.overline}
          </p>
          <Headline className="text-[28px] leading-[1.15] sm:text-[34px] lg:text-[40px]" />
        </div>

        <div className="grid lg:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] lg:gap-10">
          <div className="hidden items-center pl-10 lg:flex">
            <InfinityMark animated={false} className="w-[92px] opacity-90" strokeWidth={12} />
          </div>
          <div
            className={`${CARD} relative mt-3 flex flex-col gap-4 rounded-2xl p-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:-ml-10 lg:mt-0 lg:rounded-t-none lg:border-t-0`}
          >
            <Sparkle className="absolute -left-2 -top-2 hidden lg:block" />
            <Sparkle className="absolute -right-2 -top-2 hidden lg:block" />
            <p className="text-[18px] font-semibold tracking-[-0.015em] text-foreground sm:text-[22px]">
              {B.status}
            </p>
            <div className="flex items-center gap-5">
              <SecondaryCta />
              <PrimaryCta />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── 2 · Centered ─────────────────────────
   Calm, symmetrical announcement: pill, big headline, pillars line, CTAs. */
function V2Centered() {
  return (
    <div className="relative">
      <CoralGround />
      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center px-4 py-10 text-center sm:px-6 lg:py-14">
        <StatusPill />
        <Headline center className="mt-5 text-[30px] leading-[1.12] sm:text-[40px] lg:text-[48px]" />
        <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[14px] text-foreground/65">
          {PILLARS.map((p, i) => (
            <li key={p.num} className="flex items-center gap-5">
              {i > 0 && <span aria-hidden className="h-1 w-1 rounded-full bg-[#F17463]/50" />}
              <span>
                <span className="mr-1.5 font-semibold text-[#E0583F]">{p.num}</span>
                {p.label}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <PrimaryCta />
          <SecondaryCta boxed />
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── 3 · Pillar grid ─────────────────────────
   Message + CTAs left, the four foundations as glass tiles right. */
function V3PillarGrid() {
  return (
    <div className="relative">
      <CoralGround />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:gap-14 lg:py-12">
        <div>
          <StatusPill />
          <Headline className="mt-5 text-[28px] leading-[1.15] sm:text-[36px] lg:text-[42px]" />
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-foreground/65">{B.overline}</p>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <PrimaryCta />
            <SecondaryCta />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {PILLARS.map((p) => (
            <div key={p.num} className={`${CARD} rounded-xl p-5 transition-colors hover:bg-white/80`}>
              <p className="text-[13px] font-semibold tracking-[0.08em] text-[#E0583F]">{p.num}</p>
              <p className="mt-2 text-[16px] font-semibold leading-snug tracking-[-0.01em] text-foreground">
                {p.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── 4 · Editorial ─────────────────────────
   Oversized product name on a soft ground with a dotted texture,
   status + CTA column, hairline-divided pillars row. */
function V4Editorial() {
  return (
    <div className="relative">
      <CoralGround soft />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage: "radial-gradient(rgba(241,116,99,0.35) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          maskImage: "linear-gradient(180deg, black, transparent 85%)",
          WebkitMaskImage: "linear-gradient(180deg, black, transparent 85%)",
        }}
      />
      <div className="relative mx-auto w-full max-w-7xl px-4 pt-8 sm:px-6 lg:pt-12">
        <div className="grid items-end gap-6 lg:grid-cols-[1fr_auto] lg:gap-12">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#E0583F]">
              Introducing
            </p>
            <h2 className="mt-2 text-[44px] font-bold leading-[0.95] tracking-[-0.045em] text-foreground sm:text-[64px] lg:text-[84px]">
              ObserveOps <span className="text-[#F17463]">Infinity</span>
            </h2>
          </div>
          <div className="flex flex-col gap-4 lg:max-w-[340px] lg:pb-2">
            <p className="text-[17px] font-medium leading-snug tracking-[-0.01em] text-foreground/75">
              Four foundations. One edition.{" "}
              <span className="font-semibold text-foreground">{B.status}</span>
            </p>
            <div className="flex items-center gap-5">
              <PrimaryCta />
              <SecondaryCta />
            </div>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 border-t border-foreground/10 lg:mt-10 lg:grid-cols-4">
          {PILLARS.map((p, i) => (
            <div
              key={p.num}
              className={`flex items-baseline gap-2 border-foreground/10 py-4 lg:py-5 ${
                i % 2 === 1 ? "border-l pl-4" : ""
              } ${i === 2 ? "lg:border-l" : ""} ${i > 0 ? "lg:pl-6" : ""}`}
            >
              <span className="text-[12px] font-semibold text-[#E0583F]">{p.num}</span>
              <span className="text-[14px] font-medium text-foreground/80">{p.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── 5 · Stat card ─────────────────────────
   A single light card on white: mark, message, CTAs and a stat row. */
const STATS = [
  { value: "30–40%", label: "Lower hardware footprint" },
  { value: "1", label: "Unified edition" },
  { value: "4", label: "Foundations" },
  { value: "0", label: "Feature limits" },
];

function V5StatCard() {
  return (
    <div className="relative bg-white">
      <div className="relative mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:py-8">
        <div className="relative overflow-hidden rounded-3xl border border-[#F17463]/20">
          <CoralGround />
          <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-10 lg:p-10">
            <div className={`${CARD} hidden h-28 w-28 items-center justify-center rounded-2xl lg:flex`}>
              <InfinityMark className="w-[76px]" strokeWidth={13} />
            </div>
            <div>
              <StatusPill />
              <Headline className="mt-4 text-[26px] leading-[1.15] sm:text-[32px] lg:text-[36px]" />
            </div>
            <div className="flex flex-wrap items-center gap-3 lg:flex-col lg:items-stretch">
              <PrimaryCta />
              <SecondaryCta boxed />
            </div>
          </div>
          <div className="relative grid grid-cols-2 border-t border-white/70 bg-white/45 backdrop-blur-sm lg:grid-cols-4">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className={`border-white/70 px-6 py-4 sm:px-8 lg:px-10 ${i % 2 === 1 ? "border-l" : ""} ${
                  i === 2 ? "lg:border-l" : ""
                } ${i > 1 ? "border-t lg:border-t-0" : ""}`}
              >
                <p className="text-[24px] font-bold tracking-[-0.03em] text-foreground">{s.value}</p>
                <p className="text-[13px] font-medium text-foreground/60">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── 6 · Marquee ─────────────────────────
   Headline row with CTAs, then an endless ribbon of the foundations. */
const RIBBON = [
  "One edition",
  "No feature limits",
  ...PILLARS.map((p) => p.label),
  "Now generally available",
];

function V6Marquee() {
  const items = [...RIBBON, ...RIBBON];
  return (
    <div className="relative">
      <CoralGround />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-6 px-4 pb-6 pt-8 sm:px-6 lg:grid-cols-[1fr_auto] lg:gap-12 lg:pb-8 lg:pt-12">
        <div>
          <StatusPill />
          <Headline className="mt-4 text-[28px] leading-[1.15] sm:text-[36px] lg:text-[44px]" />
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <PrimaryCta />
          <SecondaryCta />
        </div>
      </div>
      <div
        className="relative overflow-hidden border-y border-white/70 bg-white/45 py-3.5 backdrop-blur-sm"
        style={{
          maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <motion.div
          className="flex w-max items-center gap-8 pr-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        >
          {items.map((t, i) => (
            <span key={i} className="flex items-center gap-8 whitespace-nowrap text-[15px] font-semibold tracking-[-0.01em] text-foreground/75">
              <InfinityMark animated={false} className="w-6" strokeWidth={16} />
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

/* ═════════════════════ Modern SaaS / AI options (7–11) ═════════════════════ */

/* ───────────────────────── 7 · Product window ─────────────────────────
   Copy left, a floating app-window preview right (Linear/Vercel style). */
const BARS = [38, 52, 46, 64, 58, 72, 49, 41, 35, 30, 27, 24];

function V7ProductWindow() {
  return (
    <div className="relative">
      <CoralGround soft />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:gap-14 lg:py-10">
        <div>
          <StatusPill />
          <Headline className="mt-5 text-[28px] leading-[1.12] sm:text-[36px] lg:text-[42px]" />
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-foreground/60">{B.overline}</p>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <PrimaryCta />
            <SecondaryCta />
          </div>
        </div>

        {/* App window */}
        <div className="relative hidden lg:block">
          <div className="absolute -inset-6 rounded-[32px] bg-[#F17463]/15 blur-2xl" aria-hidden />
          <div className="relative overflow-hidden rounded-2xl border border-foreground/10 bg-white/90 shadow-[0_30px_80px_-24px_rgba(224,88,63,0.45)] backdrop-blur">
            <div className="flex items-center gap-2 border-b border-foreground/[0.06] px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
              <span className="ml-3 text-[12px] font-medium text-foreground/45">
                observeops <span className="text-foreground/25">/</span>{" "}
                <span className="text-foreground/70">infinity</span>
              </span>
            </div>
            <div className="grid grid-cols-[150px_1fr]">
              <ul className="space-y-0.5 border-r border-foreground/[0.06] p-2.5">
                {PILLARS.map((p, i) => (
                  <li
                    key={p.num}
                    className={`rounded-md px-2.5 py-2 text-[12px] font-medium ${
                      i === 0 ? "bg-[#F17463]/10 text-[#E0583F]" : "text-foreground/55"
                    }`}
                  >
                    {p.label}
                  </li>
                ))}
              </ul>
              <div className="p-4">
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="rounded-lg border border-foreground/[0.06] p-3">
                    <p className="text-[11px] font-medium text-foreground/45">Hardware footprint</p>
                    <p className="mt-1 text-[20px] font-bold tracking-[-0.03em] text-foreground">
                      ↓ 30–40%
                    </p>
                  </div>
                  <div className="rounded-lg border border-foreground/[0.06] p-3">
                    <p className="text-[11px] font-medium text-foreground/45">Edition</p>
                    <p className="mt-1 text-[20px] font-bold tracking-[-0.03em] text-foreground">
                      One · Unified
                    </p>
                  </div>
                </div>
                <div className="mt-3 flex h-[86px] items-end gap-1.5 rounded-lg border border-foreground/[0.06] px-3 pb-2 pt-3">
                  {BARS.map((h, i) => (
                    <motion.span
                      key={i}
                      className={`flex-1 rounded-sm ${i >= 8 ? "bg-[#F17463]" : "bg-foreground/10"}`}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 0.6, delay: 0.2 + i * 0.04, ease: "easeOut" }}
                    />
                  ))}
                </div>
                <div className="mt-3 flex items-center gap-1.5 text-[11px] font-medium text-foreground/55">
                  {["Collect", "Parse", "Enrich", "Route"].map((s, i) => (
                    <span key={s} className="flex items-center gap-1.5">
                      {i > 0 && <ArrowRight className="h-3 w-3 text-[#F17463]" />}
                      <span className="rounded-full border border-foreground/[0.08] bg-white px-2 py-0.5">{s}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Floating chip */}
          <div className="absolute -bottom-4 -left-6 flex items-center gap-2 rounded-xl border border-foreground/10 bg-white px-3.5 py-2.5 shadow-lg">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#F17463]/10">
              <Sparkles className="h-4 w-4 text-[#E0583F]" />
            </span>
            <span className="text-[13px] font-semibold text-foreground">Agentic-AI ready</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── 8 · AI prompt ─────────────────────────
   An AI-assistant style prompt bar that types questions, with
   suggestion chips, the "ask anything" pattern of AI tools. */
const PROMPTS = [
  "What's new in ObserveOps Infinity?",
  "How much hardware footprint can I save?",
  "Is the observability pipeline included?",
  "What does one unified edition replace?",
];

function useTypewriter(lines: readonly string[]) {
  const [text, setText] = useState("");
  useEffect(() => {
    let line = 0;
    let pos = 0;
    let deleting = false;
    let t: ReturnType<typeof setTimeout>;
    const tick = () => {
      const full = lines[line];
      if (!deleting) {
        pos++;
        setText(full.slice(0, pos));
        if (pos === full.length) {
          deleting = true;
          t = setTimeout(tick, 1800);
          return;
        }
        t = setTimeout(tick, 45);
      } else {
        pos--;
        setText(full.slice(0, pos));
        if (pos === 0) {
          deleting = false;
          line = (line + 1) % lines.length;
          t = setTimeout(tick, 350);
          return;
        }
        t = setTimeout(tick, 22);
      }
    };
    t = setTimeout(tick, 500);
    return () => clearTimeout(t);
  }, [lines]);
  return text;
}

function V8AiPrompt() {
  const typed = useTypewriter(PROMPTS);
  return (
    <div className="relative">
      <CoralGround />
      <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center px-4 py-10 text-center sm:px-6 lg:py-12">
        <StatusPill />
        <Headline center className="mt-5 text-[28px] leading-[1.12] sm:text-[36px] lg:text-[42px]" />

        <Link
          href={B.primaryCta.href}
          aria-label={B.primaryCta.label}
          className="group mt-7 flex w-full items-center gap-3 rounded-2xl border border-white bg-white/85 p-2 pl-4 text-left shadow-[0_12px_40px_-12px_rgba(224,88,63,0.35)] ring-1 ring-[#F17463]/15 backdrop-blur-md transition-shadow hover:ring-[#F17463]/40"
        >
          <Sparkles className="h-5 w-5 shrink-0 text-[#F17463]" />
          <span className="min-w-0 flex-1 truncate text-[15px] text-foreground/80 sm:text-[16px]">
            {typed}
            <span className="ml-0.5 inline-block h-[1.1em] w-[2px] translate-y-[3px] animate-pulse bg-[#F17463]" />
          </span>
          <span className="flex h-10 shrink-0 items-center gap-2 rounded-xl bg-foreground px-4 text-[13px] font-semibold text-white transition-colors group-hover:bg-[#E0583F]">
            <span className="hidden sm:inline">Ask Infinity</span>
            <ArrowRight className="h-4 w-4" />
          </span>
        </Link>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          {PILLARS.map((p) => (
            <Link
              key={p.num}
              href={B.primaryCta.href}
              className="rounded-full border border-white/80 bg-white/55 px-3 py-1.5 text-[12.5px] font-medium text-foreground/70 backdrop-blur-sm transition-colors hover:border-[#F17463]/40 hover:text-[#E0583F]"
            >
              {p.label}
            </Link>
          ))}
          <SecondaryCta />
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── 9 · Bento ─────────────────────────
   Headline tile plus four small feature tiles, each with a micro-visual. */
function BentoTile({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`${CARD} relative overflow-hidden rounded-2xl p-5 transition-colors hover:bg-white/75 ${className}`}>
      {children}
    </div>
  );
}

function V9Bento() {
  return (
    <div className="relative">
      <CoralGround />
      <div className="relative mx-auto grid w-full max-w-7xl gap-3 px-4 py-6 sm:px-6 lg:grid-cols-4 lg:grid-rows-2 lg:py-8">
        <BentoTile className="flex flex-col justify-between gap-6 lg:col-span-2 lg:row-span-2 lg:p-8">
          <div>
            <StatusPill />
            <Headline className="mt-5 text-[28px] leading-[1.12] sm:text-[34px] lg:text-[38px]" />
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <PrimaryCta />
            <SecondaryCta />
          </div>
        </BentoTile>

        <BentoTile className="hidden sm:block">
          <p className="text-[12px] font-semibold text-[#E0583F]">01 · Lower hardware TCO</p>
          <p className="mt-2 text-[30px] font-bold leading-none tracking-[-0.04em] text-foreground">30–40%</p>
          <p className="mt-1 text-[13px] text-foreground/55">smaller footprint</p>
          <svg viewBox="0 0 120 36" className="absolute bottom-3 right-4 h-9 w-28" aria-hidden>
            <motion.path
              d="M2 6 C 30 6, 40 14, 60 18 S 95 30, 118 32"
              fill="none"
              stroke="#F17463"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
          </svg>
        </BentoTile>

        <BentoTile className="hidden sm:block">
          <p className="text-[12px] font-semibold text-[#E0583F]">02 · Pipeline included</p>
          <p className="mt-2 text-[17px] font-semibold tracking-[-0.01em] text-foreground">
            Full observability pipeline in the base
          </p>
          <div className="relative mt-4 h-1.5 overflow-hidden rounded-full bg-foreground/[0.07]">
            <motion.span
              className="absolute inset-y-0 w-1/3 rounded-full bg-gradient-to-r from-transparent via-[#F17463] to-transparent"
              animate={{ x: ["-100%", "300%"] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </BentoTile>

        <BentoTile className="hidden sm:block">
          <p className="text-[12px] font-semibold text-[#E0583F]">03 · Unified licensing</p>
          <p className="mt-2 text-[17px] font-semibold tracking-[-0.01em] text-foreground">
            One edition. Every tier retired.
          </p>
          <div className="mt-3 flex items-center gap-1.5">
            {["Tiers", "Limits"].map((t) => (
              <span key={t} className="rounded-md border border-foreground/10 px-2 py-0.5 text-[11px] text-foreground/35 line-through">
                {t}
              </span>
            ))}
            <ArrowRight className="h-3.5 w-3.5 text-[#F17463]" />
            <span className="rounded-md bg-[#F17463] px-2 py-0.5 text-[11px] font-semibold text-white">One</span>
          </div>
        </BentoTile>

        <BentoTile className="hidden sm:block">
          <p className="text-[12px] font-semibold text-[#E0583F]">04 · Agentic-AI ready</p>
          <p className="mt-2 text-[17px] font-semibold tracking-[-0.01em] text-foreground">
            A platform built for AI agents
          </p>
          <motion.div
            className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#F17463]/10"
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles className="h-5 w-5 text-[#E0583F]" />
          </motion.div>
        </BentoTile>
      </div>
    </div>
  );
}

/* ───────────────────────── 10 · Glow release card ─────────────────────────
   A release card with a slowly rotating gradient border and a
   "what's new" list, the changelog pattern of modern SaaS. */
function V10GlowRelease() {
  return (
    <div className="relative">
      <CoralGround soft />
      <div className="relative mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:py-9">
        <div className="relative overflow-hidden rounded-3xl p-[2px] shadow-[0_20px_60px_-24px_rgba(224,88,63,0.45)]">
          <motion.div
            aria-hidden
            className="absolute left-1/2 top-1/2 aspect-square w-[160%] -translate-x-1/2 -translate-y-1/2"
            style={{
              background:
                "conic-gradient(from 0deg, rgba(241,116,99,0.35) 0deg, #F17463 60deg, #FFB39F 110deg, rgba(241,116,99,0.35) 180deg, rgba(241,116,99,0.35) 360deg)",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <div className="relative grid gap-8 rounded-[22px] bg-white/95 p-6 backdrop-blur sm:p-8 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-12 lg:p-10">
            <div>
              <div className="flex items-center gap-3">
                <InfinityMark animated={false} className="w-10" strokeWidth={16} />
                <span className="rounded-md bg-foreground px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-white">
                  Release
                </span>
                <span className="text-[13px] font-medium text-foreground/50">{INFINITY_BANNER.eyebrow}</span>
              </div>
              <Headline className="mt-5 text-[28px] leading-[1.12] sm:text-[34px] lg:text-[38px]" />
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <PrimaryCta />
                <SecondaryCta />
              </div>
            </div>
            <div className="hidden sm:block">
              <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-foreground/45">
                What&apos;s new
              </p>
              <ul className="mt-3 divide-y divide-foreground/[0.07] border-y border-foreground/[0.07]">
                {PILLARS.map((p) => (
                  <li key={p.num}>
                    <Link
                      href={B.primaryCta.href}
                      className="group flex items-center gap-4 py-3 transition-colors hover:text-[#E0583F]"
                    >
                      <span className="text-[12px] font-semibold text-[#F17463]">{p.num}</span>
                      <span className="flex-1 text-[15px] font-medium text-foreground group-hover:text-[#E0583F]">
                        {p.label}
                      </span>
                      <ArrowRight className="h-4 w-4 -translate-x-1 text-foreground/30 opacity-0 transition-all group-hover:translate-x-0 group-hover:text-[#E0583F] group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── 11 · Data-flow beams ─────────────────────────
   Telemetry sources stream into the Infinity hub and out as outcomes,
   with animated light pulses along each beam. */
const SOURCES = ["Metrics", "Logs", "Traces", "Flows"];
const OUTCOMES = ["Lower TCO", "One edition", "Agentic AI"];

function V11FlowBeams() {
  const W = 560;
  const H = 260;
  const cx = W / 2;
  const cy = H / 2;
  const srcY = SOURCES.map((_, i) => 40 + i * 60);
  const outY = OUTCOMES.map((_, i) => 60 + i * 70);
  const inPath = (y: number) => `M 96 ${y} C 180 ${y}, 200 ${cy}, ${cx - 46} ${cy}`;
  const outPath = (y: number) => `M ${cx + 46} ${cy} C ${cx + 110} ${cy}, ${W - 200} ${y}, ${W - 108} ${y}`;

  return (
    <div className="relative">
      <CoralGround />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-10 lg:py-10">
        <div>
          <StatusPill />
          <Headline className="mt-5 text-[28px] leading-[1.12] sm:text-[36px] lg:text-[42px]" />
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <PrimaryCta />
            <SecondaryCta />
          </div>
        </div>

        <div className="relative hidden lg:block">
          <svg viewBox={`0 0 ${W} ${H}`} className="w-full" aria-hidden style={{ fontFamily: "inherit" }}>
            {srcY.map((y, i) => (
              <g key={`in-${i}`}>
                <path d={inPath(y)} fill="none" stroke="rgba(15,23,42,0.12)" strokeWidth="1.5" />
                <circle r="3.5" fill="#F17463">
                  <animateMotion dur="2.4s" begin={`${i * 0.5}s`} repeatCount="indefinite" path={inPath(y)} />
                </circle>
              </g>
            ))}
            {outY.map((y, i) => (
              <g key={`out-${i}`}>
                <path d={outPath(y)} fill="none" stroke="rgba(241,116,99,0.45)" strokeWidth="1.5" />
                <circle r="3.5" fill="#E0583F">
                  <animateMotion dur="2.4s" begin={`${1.2 + i * 0.5}s`} repeatCount="indefinite" path={outPath(y)} />
                </circle>
              </g>
            ))}
            {SOURCES.map((s, i) => (
              <g key={s}>
                <rect x="8" y={srcY[i] - 15} width="88" height="30" rx="15" fill="rgba(255,255,255,0.85)" stroke="rgba(15,23,42,0.1)" />
                <text x="52" y={srcY[i] + 4.5} textAnchor="middle" fontSize="12.5" fontWeight="500" fill="rgba(15,23,42,0.7)">
                  {s}
                </text>
              </g>
            ))}
            {OUTCOMES.map((s, i) => (
              <g key={s}>
                <rect x={W - 108} y={outY[i] - 15} width="100" height="30" rx="15" fill="#FFFFFF" stroke="rgba(241,116,99,0.45)" />
                <text x={W - 58} y={outY[i] + 4.5} textAnchor="middle" fontSize="12.5" fontWeight="600" fill="#E0583F">
                  {s}
                </text>
              </g>
            ))}
          </svg>
          {/* Hub */}
          <div className="absolute left-1/2 top-1/2 flex h-[92px] w-[92px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl border border-white bg-white/90 shadow-[0_16px_40px_-12px_rgba(224,88,63,0.5)] backdrop-blur">
            <span className="absolute inset-0 animate-ping rounded-3xl border border-[#F17463]/30 [animation-duration:2.6s]" aria-hidden />
            <InfinityMark className="w-[60px]" strokeWidth={14} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═════════════════════ More modern options (12–16) ═════════════════════ */

/* Short descriptions per foundation, taken from the approved launch copy. */
const PILLAR_COPY = [
  "A hardware footprint engineered down by up to 30–40%.",
  "A full observability pipeline, included in the base.",
  "One unified edition that retires every tier.",
  "A platform ready for agentic AI.",
];

/* ───────────────────────── 12 · Spotlight ─────────────────────────
   Dot grid lit by a soft spotlight that follows the cursor, with a
   shimmering product name. */
function V12Spotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className="relative bg-[#FFF8F6] [--mx:50%] [--my:40%]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(rgba(15,23,42,0.13) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx) var(--my), rgba(241,116,99,0.22), transparent 70%)",
        }}
      />
      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center px-4 py-12 text-center sm:px-6 lg:py-14">
        <StatusPill />
        <h2 className="mt-5 text-balance text-[32px] font-semibold leading-[1.08] tracking-[-0.03em] text-foreground sm:text-[44px] lg:text-[54px]">
          <span className="font-normal text-foreground/60">{B.headlineLead} </span>
          <motion.span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #E0583F 0%, #F17463 30%, #FFB39F 50%, #F17463 70%, #E0583F 100%)",
              backgroundSize: "200% 100%",
            }}
            animate={{ backgroundPosition: ["0% 0%", "200% 0%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          >
            {B.headlineAccent}.
          </motion.span>
        </h2>
        <p className="mt-4 text-[17px] font-medium tracking-[-0.01em] text-foreground/70">{B.headlineTail}</p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <PrimaryCta />
          <SecondaryCta boxed />
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── 13 · Count-up ─────────────────────────
   The headline figure counts up on load, beside the message. */
function useCountUp(to: number, ms = 1400) {
  const [v, setV] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / ms);
      setV(Math.round(to * (1 - Math.pow(1 - t, 3))));
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [to, ms]);
  return v;
}

function V13CountUp() {
  const lo = useCountUp(30);
  const hi = useCountUp(40);
  return (
    <div className="relative">
      <CoralGround />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[auto_1fr] lg:gap-16 lg:py-10">
        <div className={`${CARD} rounded-3xl px-8 py-7 text-center lg:min-w-[360px]`}>
          <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-foreground/50">Up to</p>
          <p className="mt-1 text-[64px] font-bold leading-none tracking-[-0.05em] text-foreground tabular-nums lg:text-[84px]">
            {lo}–{hi}
            <span className="text-[#F17463]">%</span>
          </p>
          <p className="mt-2 text-[14px] font-medium text-foreground/60">lower hardware footprint</p>
        </div>
        <div>
          <StatusPill />
          <Headline className="mt-5 text-[28px] leading-[1.12] sm:text-[36px] lg:text-[42px]" />
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <PrimaryCta />
            <SecondaryCta />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── 14 · Feature tabs ─────────────────────────
   The four foundations as auto-advancing tabs with a progress bar;
   hover pauses, click selects. */
function V14Tabs() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % PILLARS.length), 4000);
    return () => clearTimeout(t);
  }, [active, paused]);

  return (
    <div className="relative">
      <CoralGround />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:gap-14 lg:py-10">
        <div>
          <StatusPill />
          <Headline className="mt-5 text-[28px] leading-[1.12] sm:text-[36px] lg:text-[42px]" />
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <PrimaryCta />
            <SecondaryCta />
          </div>
        </div>

        <div
          className={`${CARD} hidden overflow-hidden rounded-2xl sm:block`}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div role="tablist" aria-label="Four foundations" className="grid grid-cols-4 border-b border-white/80">
            {PILLARS.map((p, i) => (
              <button
                key={p.num}
                role="tab"
                type="button"
                aria-selected={active === i}
                onClick={() => setActive(i)}
                className={`relative px-3 py-3 text-left text-[12.5px] font-semibold leading-snug transition-colors ${
                  active === i ? "bg-white/70 text-foreground" : "text-foreground/50 hover:text-foreground/80"
                }`}
              >
                <span className="block text-[11px] text-[#E0583F]">{p.num}</span>
                {p.label}
                {active === i && (
                  <motion.span
                    key={`bar-${i}-${paused}`}
                    className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-[#F17463]"
                    initial={{ scaleX: paused ? 1 : 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: paused ? 0.2 : 4, ease: "linear" }}
                  />
                )}
              </button>
            ))}
          </div>
          <div className="relative h-[132px] p-6">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="flex h-full items-center gap-5"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#F17463]/10 text-[20px] font-bold text-[#E0583F]">
                {PILLARS[active].num}
              </span>
              <div>
                <p className="text-[18px] font-semibold tracking-[-0.015em] text-foreground">{PILLARS[active].label}</p>
                <p className="mt-1 text-[14.5px] leading-relaxed text-foreground/65">{PILLAR_COPY[active]}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── 15 · Before / after ─────────────────────────
   What changes with Infinity, as a two-column comparison. */
const BEFORE = ["Multiple editions and tiers", "Pipeline outside the base", "Heavier hardware footprint", "Feature limits per tier"];
const AFTER = ["One unified edition", "Observability pipeline included", "Up to 30–40% lighter footprint", "No feature limits"];

function V15BeforeAfter() {
  return (
    <div className="relative">
      <CoralGround />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_1.15fr] lg:gap-12 lg:py-10">
        <div>
          <StatusPill />
          <Headline className="mt-5 text-[28px] leading-[1.12] sm:text-[34px] lg:text-[36px]" />
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <PrimaryCta />
            <SecondaryCta />
          </div>
        </div>
        <div className="hidden grid-cols-2 gap-3 sm:grid">
          <div className="rounded-2xl border border-foreground/[0.07] bg-white/40 p-5">
            <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-foreground/40">Before</p>
            <ul className="mt-3 space-y-2.5">
              {BEFORE.map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-[14px] text-foreground/45">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-foreground/30" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative rounded-2xl border border-[#F17463]/30 bg-white/85 p-5 shadow-[0_16px_40px_-16px_rgba(224,88,63,0.45)]">
            <p className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#E0583F]">
              <InfinityMark animated={false} className="w-6" strokeWidth={16} />
              With Infinity
            </p>
            <ul className="mt-3 space-y-2.5">
              {AFTER.map((t, i) => (
                <motion.li
                  key={t}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.12 }}
                  className="flex items-start gap-2.5 text-[14px] font-medium text-foreground"
                >
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#F17463]">
                    <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" aria-hidden>
                      <path d="M2.5 6.2 5 8.5l4.5-5" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {t}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── 16 · Orbit ─────────────────────────
   The Infinity mark at the centre with the four foundations orbiting
   slowly on a dashed ring (labels stay upright). */
function V16Orbit() {
  const R = 118;
  return (
    <div className="relative">
      <CoralGround />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-10 lg:py-6">
        <div>
          <StatusPill />
          <Headline className="mt-5 text-[28px] leading-[1.12] sm:text-[36px] lg:text-[42px]" />
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-foreground/60">{B.overline}</p>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <PrimaryCta />
            <SecondaryCta />
          </div>
        </div>

        <div className="relative mx-auto hidden h-[300px] w-[300px] lg:block" aria-hidden>
          <div className="absolute inset-[32px] rounded-full border border-dashed border-[#F17463]/40" />
          <div className="absolute inset-[92px] rounded-full bg-white/50 blur-xl" />
          <div className="absolute left-1/2 top-1/2 flex h-[96px] w-[96px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white bg-white/90 shadow-[0_16px_40px_-12px_rgba(224,88,63,0.5)]">
            <InfinityMark className="w-[62px]" strokeWidth={14} />
          </div>
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {PILLARS.map((p, i) => {
              const a = (i / PILLARS.length) * Math.PI * 2 - Math.PI / 2;
              return (
                <div
                  key={p.num}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    transform: `translate(calc(${Math.cos(a) * R}px - 50%), calc(${Math.sin(a) * R}px - 50%))`,
                  }}
                >
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  >
                    <span className="block whitespace-nowrap rounded-full border border-white bg-white/90 px-3 py-1.5 text-[12px] font-semibold text-foreground shadow-sm">
                      <span className="mr-1 text-[#E0583F]">{p.num}</span>
                      {p.label}
                    </span>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/* ═════════════════════ More options (17–21) ═════════════════════ */

/* ───────────────────────── 17 · Watermark ─────────────────────────
   A giant, slowly drawing Infinity mark sits behind centered copy. */
function V17Watermark() {
  return (
    <div className="relative overflow-hidden">
      <CoralGround soft />
      <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.22]">
        <InfinityMark className="w-[min(900px,130vw)]" strokeWidth={6} />
      </div>
      <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center px-4 py-12 text-center sm:px-6 lg:py-14">
        <StatusPill />
        <Headline center className="mt-5 text-[30px] leading-[1.1] sm:text-[42px] lg:text-[50px]" />
        <p className="mt-4 text-[15px] font-medium text-foreground/60">{B.overline}</p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <PrimaryCta />
          <SecondaryCta boxed />
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── 18 · Card fan ─────────────────────────
   The four foundations as a fanned deck that spreads on hover. */
function V18CardFan() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <CoralGround />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-10 lg:py-10">
        <div>
          <StatusPill />
          <Headline className="mt-5 text-[28px] leading-[1.12] sm:text-[36px] lg:text-[42px]" />
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <PrimaryCta />
            <SecondaryCta />
          </div>
        </div>
        <div
          className="relative mx-auto hidden h-[220px] w-full max-w-[600px] lg:block"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          {PILLARS.map((p, i) => {
            const mid = (PILLARS.length - 1) / 2;
            const off = i - mid;
            return (
              <motion.div
                key={p.num}
                className="absolute left-1/2 top-1/2 w-[148px] rounded-2xl border border-white bg-white/95 p-4 shadow-[0_18px_40px_-18px_rgba(224,88,63,0.55)] backdrop-blur"
                style={{ marginLeft: -74, marginTop: -62, zIndex: i + 1 }}
                whileHover={{ y: -12, zIndex: 20 }}
                animate={{
                  x: off * (open ? 150 : 52),
                  y: Math.abs(off) * (open ? 2 : 10),
                  rotate: off * (open ? 2 : 7),
                }}
                transition={{ type: "spring", stiffness: 220, damping: 22 }}
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F17463]/10 text-[12px] font-bold text-[#E0583F]">
                  {p.num}
                </span>
                <p className="mt-3 text-[15px] font-semibold leading-snug tracking-[-0.01em] text-foreground">{p.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── 19 · Two-tone ─────────────────────────
   A bold coral block for the message beside a light block for the
   foundations and CTA. */
function V19TwoTone() {
  return (
    <div className="relative bg-[#FFF6F3]">
      <div className="relative mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:py-8">
        <div className="grid overflow-hidden rounded-3xl border border-[#F17463]/20 lg:grid-cols-[1.25fr_1fr]">
          <div className="relative overflow-hidden bg-[#F17463] p-7 text-white sm:p-9 lg:p-10">
            <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/15 blur-2xl" />
            <div aria-hidden className="pointer-events-none absolute -bottom-10 right-6 hidden opacity-25 lg:block">
              <InfinityMark animated={false} className="w-[180px] [&_path]:!stroke-white" strokeWidth={10} />
            </div>
            <p className="relative inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.08em]">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              New launch · {INFINITY_BANNER.eyebrow}
            </p>
            <h2 className="relative mt-5 text-balance text-[30px] font-semibold leading-[1.1] tracking-[-0.03em] sm:text-[38px] lg:text-[44px]">
              <span className="font-normal text-white/80">{B.headlineLead} </span>
              {B.headlineAccent}.
              <br />
              {B.headlineTail}
            </h2>
          </div>
          <div className="flex flex-col justify-between gap-6 bg-white p-7 sm:p-9 lg:p-10">
            <ul className="hidden grid-cols-2 gap-x-6 gap-y-4 sm:grid">
              {PILLARS.map((p) => (
                <li key={p.num}>
                  <p className="text-[12px] font-semibold text-[#E0583F]">{p.num}</p>
                  <p className="mt-0.5 text-[15px] font-semibold leading-snug tracking-[-0.01em] text-foreground">{p.label}</p>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap items-center gap-4">
              <PrimaryCta />
              <SecondaryCta />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── 20 · Stepper ─────────────────────────
   Headline and CTA on one row, then a progress line that fills
   across the four foundations. */
function V20Stepper() {
  return (
    <div className="relative">
      <CoralGround />
      <div className="relative mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:py-10">
        <div className="grid items-end gap-6 lg:grid-cols-[1fr_auto] lg:gap-12">
          <div>
            <StatusPill />
            <Headline className="mt-5 text-[28px] leading-[1.12] sm:text-[36px] lg:text-[42px]" />
          </div>
          <div className="flex flex-wrap items-center gap-4 lg:pb-1.5">
            <PrimaryCta />
            <SecondaryCta />
          </div>
        </div>

        <div className="relative mt-9 hidden sm:block">
          <div className="absolute left-[12.5%] right-[12.5%] top-[15px] h-[2px] rounded-full bg-foreground/10" />
          <motion.div
            className="absolute left-[12.5%] top-[15px] h-[2px] rounded-full bg-[#F17463]"
            initial={{ width: "0%" }}
            animate={{ width: "75%" }}
            transition={{ duration: 2.2, ease: "easeInOut", delay: 0.3 }}
          />
          <ol className="relative grid grid-cols-4">
            {PILLARS.map((p, i) => (
              <li key={p.num} className="flex flex-col items-center text-center">
                <motion.span
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#F17463] bg-white text-[12px] font-bold text-[#E0583F]"
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3 + i * 0.7, type: "spring", stiffness: 260, damping: 18 }}
                >
                  {p.num}
                </motion.span>
                <p className="mt-3 text-[15px] font-semibold tracking-[-0.01em] text-foreground">{p.label}</p>
                <p className="mt-1 max-w-[220px] text-[13px] leading-snug text-foreground/55">{PILLAR_COPY[i]}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── 21 · Rotating headline ─────────────────────────
   The key phrase cycles through each foundation with a vertical slide. */
const ROTATING = ["lower hardware TCO.", "an observability pipeline.", "unified licensing.", "agentic-AI readiness."];

function V21Rotating() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % ROTATING.length), 2600);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="relative">
      <CoralGround />
      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center px-4 py-12 text-center sm:px-6 lg:py-14">
        <StatusPill />
        <h2 className="mt-5 text-[30px] font-semibold leading-[1.15] tracking-[-0.03em] text-foreground sm:text-[42px] lg:text-[50px]">
          <span className="font-normal text-foreground/60">ObserveOps </span>
          <span className="text-[#E0583F]">Infinity</span>
          <span className="font-normal text-foreground/60"> brings</span>
          <span className="relative block h-[1.2em] overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={i}
                className="absolute inset-x-0 block"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                {ROTATING[i]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h2>
        <div className="mt-4 flex items-center gap-1.5" aria-hidden>
          {ROTATING.map((_, k) => (
            <span
              key={k}
              className={`h-1.5 rounded-full transition-all duration-300 ${k === i ? "w-6 bg-[#F17463]" : "w-1.5 bg-foreground/15"}`}
            />
          ))}
        </div>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <PrimaryCta />
          <SecondaryCta boxed />
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── Banner + switcher ───────────────────────── */

/**
 * Tall, light launch banner for ObserveOps Infinity at the very top of the
 * page. It is sticky at the top and sits behind the page layer (z-0), so it
 * stays in place while the page, strip and navbar scroll up over it.
 * Twenty-one layout options behind a hover-revealed switcher. (Remove once chosen.)
 */
export function InfinityTopBanner() {
  const ref = useRef<HTMLElement>(null);
  const [variant, setVariant] = useState<Variant>(1);

  /* Every refresh opens on option 1 (Editorial); the switcher only
     previews other layouts for the current visit. */
  const pick = (n: Variant) => setVariant(n);


  return (
    <section
      ref={ref}
      aria-label="ObserveOps Infinity launch announcement"
      className="group/banner sticky top-[var(--event-bar-h,0px)] z-0 overflow-hidden"
    >
      {variant === 1 && <V4Editorial />}
      {variant === 2 && <V2Centered />}
      {variant === 3 && <V3PillarGrid />}
      {variant === 4 && <V1SplitGlass />}
      {variant === 5 && <V5StatCard />}
      {variant === 6 && <V6Marquee />}
      {variant === 7 && <V7ProductWindow />}
      {variant === 8 && <V8AiPrompt />}
      {variant === 9 && <V9Bento />}
      {variant === 10 && <V10GlowRelease />}
      {variant === 11 && <V11FlowBeams />}
      {variant === 12 && <V12Spotlight />}
      {variant === 13 && <V13CountUp />}
      {variant === 14 && <V14Tabs />}
      {variant === 15 && <V15BeforeAfter />}
      {variant === 16 && <V16Orbit />}
      {variant === 17 && <V17Watermark />}
      {variant === 18 && <V18CardFan />}
      {variant === 19 && <V19TwoTone />}
      {variant === 20 && <V20Stepper />}
      {variant === 21 && <V21Rotating />}

      {/* Layout switcher, revealed on banner hover (always on touch). (Remove once chosen.) */}
      <div className="absolute right-3 top-3 z-20 flex items-center gap-1 rounded-full border border-foreground/10 bg-white/85 p-1 shadow-sm backdrop-blur-md transition-opacity duration-300 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover/banner:opacity-100">
        {VARIANTS.map((v) => (
          <Fragment key={v.n}>
          {(v.n === 7 || v.n === 12 || v.n === 17) && <span aria-hidden className="mx-0.5 h-4 w-px bg-foreground/15" />}
          <button
            type="button"
            onClick={() => pick(v.n)}
            title={v.label}
            aria-label={`Banner layout ${v.n}: ${v.label}`}
            aria-pressed={variant === v.n}
            className={`h-6 min-w-6 rounded-full px-1.5 text-[11px] font-semibold transition-colors ${
              variant === v.n
                ? "bg-[#F17463] text-white"
                : "text-foreground/60 hover:bg-foreground/5 hover:text-foreground"
            }`}
          >
            {v.n}
          </button>
          </Fragment>
        ))}
      </div>
    </section>
  );
}

/**
 * Slim bordered announcement strip that pins to the top of the viewport
 * (above the sticky navbar) once the hero banner has scrolled away. The page
 * scrolls underneath it. Its height is published as --announce-strip-h so
 * the navbar sticks directly below it.
 */
export function InfinityStickyStrip() {
  const ref = useRef<HTMLDivElement>(null);

  /* Always visible: no close button and no remembered dismissal. */
  useEffect(() => {
    const root = document.documentElement;
    const el = ref.current;
    if (!el) return;
    const apply = () => root.style.setProperty("--announce-strip-h", `${el.offsetHeight}px`);
    apply();
    const ro = new ResizeObserver(apply);
    ro.observe(el);
    return () => {
      ro.disconnect();
      root.style.setProperty("--announce-strip-h", "0px");
    };
  }, []);

  return (
    <div
      ref={ref}
      role="region"
      aria-label="ObserveOps Infinity announcement"
      className="sticky top-[var(--event-bar-h,0px)] z-[55] bg-[#F17463] text-white"
    >
      <div className="relative mx-auto flex h-8 w-full max-w-7xl items-center justify-center gap-2.5 px-4 sm:px-6">
        <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-white px-2 py-px text-[10.5px] font-bold uppercase tracking-[0.06em] text-[#E0583F]">
          <Sparkles className="h-3 w-3" />
          {B.strip.label}
        </span>
        <p className="min-w-0 truncate text-[12.5px] font-medium text-white/95">
          <span className="hidden md:inline">{B.strip.text}</span>
          <span className="md:hidden">ObserveOps Infinity is live</span>
        </p>
        <Link
          href={B.strip.cta.href}
          className="group inline-flex shrink-0 items-center gap-1 text-[12.5px] font-semibold text-white underline decoration-white/50 underline-offset-[3px] transition-colors hover:decoration-white"
        >
          {B.strip.cta.label}
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}
