"use client";

import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { HeroOrbs, AnimatedBadge, FadeUp } from "@/components/hero-effects";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

/* Shared "The problem / What we did / …" block */
function QBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-7 last:mb-0">
      <p className="text-overline text-primary">{label}</p>
      <p className="mt-2 text-body-sm text-muted-foreground">{children}</p>
    </div>
  );
}

/* Chapter header — centered, matches the site's section-heading pattern */
function ChapterHead({
  tag,
  line1,
  line2,
}: {
  tag: string;
  line1: string;
  line2: string;
}) {
  return (
    <motion.div
      {...fadeIn}
      transition={{ duration: 0.5 }}
      className="mx-auto mb-14 max-w-3xl text-center"
    >
      <p className="text-overline text-primary">{tag}</p>
      <h2 className="mt-3 text-display-md">
        {line1} {line2}
      </h2>
    </motion.div>
  );
}

function B({ children }: { children: React.ReactNode }) {
  return <span className="font-semibold text-foreground">{children}</span>;
}

/* ────────────────────────────────────────────────────────────
   HERO — same style as OOHero (orbs + badge + fade-up)
   ──────────────────────────────────────────────────────────── */
export function InfinityHero({
  version = 1,
  onVersionChange,
}: {
  version?: 1 | 2;
  onVersionChange?: (v: 1 | 2) => void;
} = {}) {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <HeroOrbs />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto max-w-5xl text-center">
          <FadeUp delay={100}>
            <div className="flex items-center justify-center gap-3">
              <AnimatedBadge text="Generally available · August 2026" />
              {onVersionChange && (
                <div className="flex items-center gap-1">
                  {([1, 2] as const).map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => onVersionChange(n)}
                      aria-label={`Page version ${n}`}
                      className={`h-6 w-6 rounded-full text-[11px] font-semibold transition-colors ${
                        version === n
                          ? "bg-primary text-primary-foreground"
                          : "bg-foreground/5 text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </FadeUp>

          <FadeUp delay={250}>
            <h1 className="mt-6 text-[clamp(2rem,4.5vw,3.75rem)] font-bold leading-[1.1] tracking-tight">
              ObserveOps Infinity.
              <br />
              Four foundations.
            </h1>
          </FadeUp>

          <FadeUp delay={400}>
            <p className="mx-auto mt-5 max-w-2xl text-body-md text-muted-foreground">
              A leaner hardware footprint. A real observability pipeline underneath.{" "}
              <B>One unified edition</B> that retires every tier. And a platform engineered
              to carry Agentic AI.
            </p>
          </FadeUp>

          <FadeUp delay={550}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#why"
                className="hero-shimmer inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-foreground px-7 text-[15px] font-medium text-background transition-colors hover:bg-foreground/90"
              >
                See what changed <ArrowRight className="ml-1 h-4 w-4" />
              </a>
              <a
                href="#licensing"
                className="inline-flex h-12 items-center justify-center rounded-md border border-border px-7 text-[15px] font-medium text-foreground transition-colors hover:bg-muted/40"
              >
                Read the licensing model
              </a>
            </div>
          </FadeUp>

          <FadeUp delay={650}>
            <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 divide-x divide-border/40 md:grid-cols-4">
              {[
                { value: "1 edition", label: "Replaces NM · NO · HIO · FSO" },
                { value: "up to 30–40%", label: "Lower hardware footprint*" },
                { value: "In base", label: "Extensible observability pipeline" },
                { value: "0 walls", label: "Upgrade gates or feature locks" },
              ].map((s) => (
                <div key={s.label} className="px-3 py-3 text-center lg:px-4">
                  <p className="whitespace-nowrap text-xl font-bold tracking-tight text-primary sm:text-2xl">
                    {s.value}
                  </p>
                  <p className="mx-auto mt-2 max-w-[180px] text-body-xs leading-snug text-muted-foreground">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────
   WHY NOW — the decision behind the release
   ──────────────────────────────────────────────────────────── */
const COSTS = [
  {
    num: "01",
    title: "The hardware cost",
    body: "Paying for servers the platform was never optimized to do without.",
    fix: "Engineered down",
  },
  {
    num: "02",
    title: "The raw-data cost",
    body: "Storing everything at full fidelity, with no control point to decide otherwise.",
    fix: "Pipeline introduced",
  },
  {
    num: "03",
    title: "The complexity cost",
    body: "Four editions, feature checklists and upgrade walls between you and the platform you bought.",
    fix: "Tiers retired",
  },
  {
    num: "04",
    title: "The re-platforming cost",
    body: "Being told the next generation of capability needs a different product.",
    fix: "Foundation laid",
  },
];

function WhyParagraphs() {
  return (
    <>
      <p className="text-body-md text-muted-foreground">
        Observability is a hungry discipline. It stores everything at full fidelity,
        forever, and bills for it twice: software and infrastructure. That model held
        while hardware got cheaper every year.
      </p>
      <p className="mt-5 text-body-md text-muted-foreground">
        It stopped holding. Server, memory and storage pricing has climbed sharply
        worldwide, and the industry has largely passed it through.{" "}
        <B>Motadata&apos;s engineers took a different brief:</B> treat the
        customer&apos;s hardware bill as a constraint we design against.
      </p>
      <p className="mt-5 text-body-md text-muted-foreground">
        Four foundations came out of that brief. Each removes a cost, and each makes the
        next one possible.
      </p>
    </>
  );
}

export function InfinityWhyNow() {
  const [variant, setVariant] = useState<1 | 2>(1);

  return (
    <section id="why" className="group/section relative z-10 scroll-mt-24 bg-white">
      {/* Layout picker — outside the container, revealed on section hover. (Remove once chosen.) */}
      <div className="absolute right-4 top-6 z-20 flex items-center gap-1 opacity-0 transition-opacity duration-300 group-hover/section:opacity-100">
        {([1, 2] as const).map((n) => (
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

        <motion.div
          {...fadeIn}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="text-overline text-primary">The decision behind the release</p>
          <h2 className="mt-3 text-display-md">
            Global hardware prices climbed sharply. We treated that as our problem to
            solve.
          </h2>
          <p className="mt-4 text-body-md text-muted-foreground">
            Infinity began with four costs our customers should never have carried, and a
            commitment to <B>engineer each one out of the product</B> before it reached a
            deal.
          </p>
        </motion.div>

        {variant === 2 ? (
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.1 }}>
              <WhyParagraphs />
            </motion.div>

            <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.2 }}>
              {COSTS.map((c, i) => (
                <div
                  key={c.num}
                  className={`flex gap-5 border-t border-border/40 py-5 ${
                    i === COSTS.length - 1 ? "border-b" : ""
                  }`}
                >
                  <p className="min-w-[26px] pt-1 text-label-sm-medium text-muted-foreground/60">
                    {c.num}
                  </p>
                  <div>
                    <h3 className="text-label-lg text-foreground">{c.title}</h3>
                    <p className="mt-1 text-body-xs text-muted-foreground">{c.body}</p>
                    <span className="mt-3 inline-flex rounded-full border border-primary/20 bg-primary/5 px-2.5 py-0.5 text-label-sm text-primary">
                      {c.fix}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        ) : (
          <>
            {/* The four costs — connected 4-column card row, narrative attached below */}
            <motion.div
              {...fadeIn}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="overflow-hidden rounded-2xl border bg-border"
            >
              <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-4">
                {COSTS.map((c) => (
                  <div key={c.num} className="feature-cell flex flex-col bg-white p-6 lg:p-7">
                    <p className="text-overline-sm text-primary">{c.num}</p>
                    <h3 className="mt-3 text-lg font-semibold">{c.title}</h3>
                    <p className="mt-2 flex-1 text-body-xs text-muted-foreground">{c.body}</p>
                    <span className="mt-4 inline-flex w-fit rounded-full border border-primary/20 bg-primary/5 px-2.5 py-0.5 text-label-sm text-primary">
                      {c.fix}
                    </span>
                  </div>
                ))}
              </div>

              {/* Connected full-width narrative cell */}
              <div className="mt-px bg-neutral-50 px-6 py-6 lg:px-7 lg:py-7">
                <p className="text-body-sm leading-relaxed text-muted-foreground">
                  Observability is a hungry discipline. It stores everything at full
                  fidelity, forever, and bills for it twice: software and infrastructure.
                  That model held while hardware got cheaper every year. It stopped
                  holding. Server, memory and storage pricing has climbed sharply
                  worldwide, and the industry has largely passed it through.{" "}
                  <B>Motadata&apos;s engineers took a different brief:</B> treat the
                  customer&apos;s hardware bill as a constraint we design against. Four
                  foundations came out of that brief. Each removes a cost, and each makes
                  the next one possible.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────
   FOUNDATION 01 — Hardware TCO
   ──────────────────────────────────────────────────────────── */
export function InfinityTco() {
  return (
    <section id="tco" className="relative z-10 scroll-mt-24 bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        <ChapterHead
          tag="Foundation one · Observability hardware TCO"
          line1="The same observability,"
          line2="on far less hardware."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.1 }}>
            <QBlock label="The problem">
              Hardware pricing has risen sharply everywhere we sell. Observability is
              compute-heavy at ingest and storage-heavy at rest, so the inflation lands on
              the customer&apos;s infrastructure bill. Most vendors call that an external
              condition. We called it a defect in our engineering.
            </QBlock>
            <QBlock label="What we did">
              We made the hardware footprint the design constraint for this release,
              re-engineering ingest paths, storage layout, rollup strategy, index
              structures and collector efficiency. Same device counts, same retention,
              same query behavior, on <B>significantly fewer resources</B>.
            </QBlock>
            <QBlock label="What it means for you">
              Fewer nodes per thousand monitored devices. Smaller storage for the same
              retention. Lower hypervisor, power and rack cost underneath. And a shorter
              path to <B>HA and DR</B>, because resilience no longer doubles an already
              high bill.
            </QBlock>
          </motion.div>

          <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.2 }}>
            <div className="overflow-hidden rounded-2xl border border-border/60 bg-white">
              <div className="p-8"><p className="text-overline-sm text-muted-foreground">
                Indicative footprint · equivalent deployment
              </p>

              <div className="mt-6">
                <div className="flex items-center justify-between">
                  <span className="text-body-xs text-muted-foreground">Previous generation</span>
                  <span className="text-label-sm text-foreground">baseline 100%</span>
                </div>
                <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-muted">
                  <div className="h-full w-full rounded-full bg-muted-foreground/40" />
                </div>
              </div>

              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <span className="text-body-xs text-muted-foreground">ObserveOps Infinity</span>
                  <span className="text-label-sm text-primary">up to 30–40% lower*</span>
                </div>
                <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-muted">
                  <div className="h-full w-[64%] rounded-full bg-primary" />
                </div>
              </div>

              <p className="mt-6 border-t border-border/40 pt-4 text-label-sm-medium leading-relaxed text-muted-foreground">
                * Indicative and workload-dependent. Actual reduction varies with device
                mix, retention policy, polling interval, add-on modules and topology.
                Every deployment is sized against the{" "}
                <span className="font-semibold text-foreground">
                  official Motadata sizing matrix
                </span>
                , and quotes come from the completed sizing worksheet.
              </p></div>

              {/* Connected footer — the compounding effect */}
              <div className="border-t border-border/40 bg-neutral-50 px-8 py-5">
                <p className="text-body-xs text-muted-foreground">
                  Foundation two compounds the saving. Data the pipeline never stores
                  needs no disk to buy.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────
   FOUNDATION 02 — Observability Pipeline
   ──────────────────────────────────────────────────────────── */
const STAGES = [
  {
    tag: "PARSE",
    title: "Enhanced parsing",
    body: "Structure at ingest across formats and vendors. Logs, events, traps, flows and metrics arrive as queryable fields.",
  },
  {
    tag: "PROCESS",
    title: "Processing & transformation",
    body: "Filter, normalize, reduce, redact, mask, sample and route. Decide what is worth keeping while it is still in motion.",
  },
  {
    tag: "ENRICH",
    title: "Context enrichment",
    body: "Attach CI, site, owner, environment, service and business-service context at ingest, so every event lands correlated.",
  },
  {
    tag: "GOVERN",
    title: "Policy-driven retention",
    body: "Tier every stream by its value. Full fidelity for what you investigate, aggregated for what you trend, dropped for what you never needed.",
  },
  {
    tag: "SCALE",
    title: "Event handling at scale",
    body: "Absorb bursts, apply backpressure and sustain delivery when a storm hits, the moment observability matters most.",
  },
  {
    tag: "EXTEND",
    title: "Built to grow",
    body: "An open ecosystem. New stages attach to the same control plane as the platform evolves, and everything you run keeps working.",
  },
];

const PIPELINE_INTRO = "What the pipeline does today, with room built in to keep growing.";

const PIPELINE_PROBLEM = (
  <>
    Telemetry arrives noisy, unstructured and unlabeled. With no control point between
    source and store, everything is kept at full fidelity forever and the bill tracks{" "}
    <B>raw volume</B>, most of which is never read. Context gets added later, by a
    human, during an incident.
  </>
);

const PIPELINE_WHAT_WE_DID = (
  <>
    An observability pipeline is a programmable control plane between source and store,
    shaping data before it is written. Infinity introduces one as a{" "}
    <B>first-class part of the platform, included in the base</B>. No separate SKU, no
    add-on line, no volume gate.
  </>
);

const PIPELINE_WHY = (
  <>
    The pipeline makes the other three foundations hold. It is{" "}
    <B>why the hardware footprint came down</B>: data that is never stored needs no
    disk. It is <B>why the platform is ready for agents</B>, since autonomous reasoning
    depends on the structure and context underneath. Built as an{" "}
    <B>extensible control plane</B>, the stages above are where it starts.
  </>
);

const PIPELINE_MEANS = (
  <>
    Cost that tracks the value of your telemetry. Retention set by policy, changed in
    minutes. Sensitive fields masked before they are written. And incidents that open
    with context already attached.
  </>
);

/* Flow strip — sources in, decisions out (card header) */
function FlowStrip() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 border-b border-border/40 bg-neutral-50 px-4 py-3 lg:px-6">
      <span className="whitespace-nowrap text-label-sm text-primary">Sources</span>
      <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground/50" />
      <span className="whitespace-nowrap text-label-sm text-muted-foreground">
        Observability Pipeline
      </span>
      <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground/50" />
      <span className="whitespace-nowrap text-label-sm text-primary">
        Store · Analyse · Act
      </span>
    </div>
  );
}

/* The bento grid of all six stages */
function StageGrid() {
  return (
    <>
      <div className="overflow-hidden rounded-2xl border bg-border">
        <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3">
          {STAGES.map((s) => (
            <div
              key={s.tag}
              className="feature-cell group relative flex flex-col overflow-hidden bg-white p-7"
            >
              <DottedGlowBackground
                className="opacity-0 transition-opacity duration-500 group-hover:opacity-60"
                gap={14}
                radius={1.2}
                opacity={0.4}
              />
              <div className="relative z-10">
                <p className="text-overline-sm text-primary">{s.tag}</p>
                <p className="mt-2 text-heading-xs">{s.title}</p>
                <p className="mt-2 text-body-xs text-muted-foreground">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/* Option 3 — horizontal numbered stepper with detail panel below */
function StageStepper() {
  const [active, setActive] = useState(0);
  const stage = STAGES[active];

  return (
    <div>
      {/* Stepper nodes */}
      <div className="border-b border-border/40 px-6 pb-6 pt-7 lg:px-10">
        <div className="flex items-start">
          {STAGES.map((s, i) => {
            const isActive = i === active;
            const isLast = i === STAGES.length - 1;
            return (
              <Fragment key={s.tag}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  className="group flex shrink-0 flex-col items-center gap-2.5"
                >
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full border text-label-sm transition-colors ${
                      isActive
                        ? "border-primary bg-primary text-primary-foreground"
                        : i < active
                          ? "border-primary/30 bg-primary/5 text-primary"
                          : "border-border bg-white text-muted-foreground group-hover:border-primary/40 group-hover:text-foreground"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`hidden text-label-sm transition-colors sm:block ${
                      isActive ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {s.tag}
                  </span>
                </button>
                {!isLast && (
                  <span
                    className={`mt-[18px] h-px min-w-3 flex-1 transition-colors ${
                      i < active ? "bg-primary/40" : "bg-border"
                    }`}
                  />
                )}
              </Fragment>
            );
          })}
        </div>
      </div>

      {/* Active stage detail */}
      <div className="p-8 text-center lg:p-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={stage.tag}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <h3 className="text-heading-lg">{stage.title}</h3>
            <p className="mx-auto mt-3 max-w-2xl text-body-md text-muted-foreground">
              {stage.body}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/* Numbered stage list — minimalist open rows, mirrors the "Why Motadata" pointers */
function StageList() {
  return (
    <div className="divide-y divide-border/40">
      {STAGES.map((s, i) => (
        <motion.div
          key={s.tag}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          className="group flex items-start gap-4 px-6 py-5 transition-all hover:bg-neutral-100 lg:px-7 lg:py-6"
        >
          <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-foreground/5 transition-colors group-hover:bg-primary/10">
            <span className="text-label-sm text-foreground/50 transition-colors group-hover:text-primary">
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <span className="shrink-0 text-label-sm text-muted-foreground/60 transition-colors group-hover:text-primary">
                {s.tag}
              </span>
            </div>
            <p className="mt-1 text-body-xs text-muted-foreground">{s.body}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* Stage tabs — vertical tab rail on the left, active stage content on the right */
function StageTabs() {
  const [active, setActive] = useState(0);
  const stage = STAGES[active];

  return (
    <div className="grid sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
      {/* Left — tab rail */}
      <div className="flex flex-col gap-1 border-b border-border/40 p-3 sm:border-b-0 sm:border-r lg:p-4">
        {STAGES.map((s, i) => {
          const isActive = i === active;
          return (
            <button
              key={s.tag}
              type="button"
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              className={`w-full rounded-lg px-4 py-3 text-left text-label-md transition-colors ${
                isActive
                  ? "bg-neutral-100 text-foreground"
                  : "text-muted-foreground hover:bg-neutral-50 hover:text-foreground"
              }`}
            >
              {s.title}
            </button>
          );
        })}
      </div>

      {/* Right — active stage content */}
      <div className="flex flex-col justify-center p-6 sm:min-h-[300px] lg:p-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={stage.tag}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-label-sm text-primary">
              {stage.tag}
            </span>
            <h3 className="mt-4 text-heading-md">{stage.title}</h3>
            <p className="mt-3 text-body-sm text-muted-foreground">{stage.body}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/* Layout 1 — Editorial: centered header, split narrative, bento grid, closing columns */
function PipelineLayoutEditorial() {
  return (
    <>
      <ChapterHead
        tag="Foundation two · Observability Pipeline"
        line1="Every signal is shaped"
        line2="before it ever lands."
      />

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.1 }}>
          <QBlock label="The problem">{PIPELINE_PROBLEM}</QBlock>
        </motion.div>
        <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.2 }}>
          <QBlock label="What we did">{PIPELINE_WHAT_WE_DID}</QBlock>
        </motion.div>
      </div>

      <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.1 }} className="mt-14">
        <StageGrid />
      </motion.div>

      <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.1 }}>
          <QBlock label="Why this counts as a foundation">{PIPELINE_WHY}</QBlock>
        </motion.div>
        <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.2 }}>
          <QBlock label="What it means for you">{PIPELINE_MEANS}</QBlock>
        </motion.div>
      </div>
    </>
  );
}

/* Narrative detail — the four blocks as a connected 2×2 grid */
function NarrativeGrid() {
  return (
    <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
      {[
        { label: "The problem", body: PIPELINE_PROBLEM },
        { label: "What we did", body: PIPELINE_WHAT_WE_DID },
        { label: "Why this counts as a foundation", body: PIPELINE_WHY },
        { label: "What it means for you", body: PIPELINE_MEANS },
      ].map((b, i) => (
        <motion.div
          key={b.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
        >
          <p className="text-overline text-primary">{b.label}</p>
          <p className="mt-3 text-body-sm text-muted-foreground">{b.body}</p>
        </motion.div>
      ))}
    </div>
  );
}

/* Layout 2 — Split rail: heading left, sticky six-stage card right, detail grid below */
function PipelineLayoutSplitRail() {
  return (
    <>
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16">
        <motion.div
          {...fadeIn}
          transition={{ duration: 0.5 }}
          className="lg:sticky lg:top-28 lg:self-start"
        >
          <p className="text-overline text-primary">Foundation two · Observability Pipeline</p>
          <h2 className="mt-3 text-display-md">Every signal is shaped before it ever lands.</h2>
          <p className="mt-4 text-body-md text-muted-foreground">{PIPELINE_INTRO}</p>
        </motion.div>

        <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.15 }}>
          <div className="overflow-hidden rounded-2xl border border-border/60 bg-white">
            <StageList />
          </div>
        </motion.div>
      </div>

      {/* The problem + the other three, as their own part below */}
      <div className="mt-12">
        <NarrativeGrid />
      </div>
    </>
  );
}

/* Showcase card — sliding-pill segmented control, directional spotlight,
   ghost numeral, prev/next controls, synced auto-advance progress */
function StageShowcase() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const stage = STAGES[active];

  const go = (i: number) => {
    setDirection(i > active ? 1 : -1);
    setActive((i + STAGES.length) % STAGES.length);
  };
  const step = (d: number) => {
    setDirection(d);
    setActive((a) => (a + d + STAGES.length) % STAGES.length);
  };

  return (
    <div
      className="overflow-hidden rounded-2xl border border-border/60 bg-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Sliding-pill segmented control */}
      <div className="flex justify-center border-b border-border/40 bg-neutral-50/60 px-4 py-4">
        <div className="flex flex-wrap justify-center gap-1 rounded-full bg-neutral-100 p-1">
          {STAGES.map((s, i) => {
            const isActive = i === active;
            return (
              <button
                key={s.tag}
                type="button"
                onClick={() => go(i)}
                className={`relative rounded-full px-4 py-2 text-label-sm transition-colors ${
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="stage-pill"
                    className="absolute inset-0 rounded-full bg-white shadow-sm ring-1 ring-border/60"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{s.tag}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Spotlight */}
      <div className="relative overflow-hidden">
        {/* Ghost numeral */}
        <AnimatePresence mode="wait">
          <motion.span
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="stat-number pointer-events-none absolute right-8 top-1/2 hidden -translate-y-1/2 select-none text-[140px] font-bold !text-foreground/[0.05] lg:block"
          >
            {String(active + 1).padStart(2, "0")}
          </motion.span>
        </AnimatePresence>

        <div className="flex items-center gap-6 p-8 lg:p-12">
          {/* Prev */}
          <button
            type="button"
            onClick={() => step(-1)}
            aria-label="Previous stage"
            className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted/40 sm:flex"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div className="min-h-[190px] min-w-0 flex-1 sm:min-h-[160px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={stage.tag}
                custom={direction}
                initial={{ opacity: 0, x: direction * 44 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -44 }}
                transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
                className="max-w-2xl"
              >
                <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-label-sm text-primary">
                  {stage.tag}
                </span>
                <h3 className="mt-4 text-heading-lg">{stage.title}</h3>
                <p className="mt-3 text-body-md text-muted-foreground">{stage.body}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next */}
          <button
            type="button"
            onClick={() => step(1)}
            aria-label="Next stage"
            className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted/40 sm:flex"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Auto-advance progress — drives the next stage when it completes */}
        <div className="h-0.5 w-full bg-border/40">
          <div
            key={active}
            onAnimationEnd={() => step(1)}
            className={`stage-progress h-full bg-primary ${
              paused ? "stage-progress--paused" : ""
            }`}
          />
        </div>
      </div>
    </div>
  );
}

/* Layout 3 — Modern SaaS stack: centered header, stepper widget card, 2×2 narrative grid */
function PipelineLayoutImmersive() {
  return (
    <>
      <motion.div
        {...fadeIn}
        transition={{ duration: 0.5 }}
        className="mx-auto mb-14 max-w-3xl text-center"
      >
        <p className="text-overline text-primary">Foundation two · Observability Pipeline</p>
        <h2 className="mt-3 text-display-md">Every signal is shaped before it ever lands.</h2>
        <p className="mt-4 text-body-md text-muted-foreground">{PIPELINE_INTRO}</p>
      </motion.div>

      <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.1 }}>
        <StageShowcase />
      </motion.div>

      <div className="mt-8">
        <NarrativeGrid />
      </div>
    </>
  );
}

/* Auto-advancing numbered switcher — 01–06 cycle on their own, click to pin, pauses on hover */
function StageAutoSwitcher() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const stage = STAGES[active];

  useEffect(() => {
    if (paused) return;
    const t = window.setInterval(
      () => setActive((a) => (a + 1) % STAGES.length),
      3500
    );
    return () => window.clearInterval(t);
  }, [paused]);

  return (
    <div
      className="overflow-hidden rounded-2xl border border-border/60 bg-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Numbered switcher */}
      <div className="flex flex-wrap items-center justify-center gap-2 border-b border-border/40 bg-neutral-50 px-6 py-4">
        {STAGES.map((s, i) => (
          <button
            key={s.tag}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Stage ${i + 1}: ${s.title}`}
            className={`flex h-8 w-8 items-center justify-center rounded-full text-label-sm transition-colors duration-300 ${
              i === active
                ? "bg-primary text-primary-foreground"
                : "border border-border bg-white text-muted-foreground hover:border-primary/40 hover:text-foreground"
            }`}
          >
            {String(i + 1).padStart(2, "0")}
          </button>
        ))}
      </div>

      {/* Relative content */}
      <div className="flex min-h-[230px] flex-col items-center justify-center px-6 py-10 text-center lg:px-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={stage.tag}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-label-sm text-primary">
              {stage.tag}
            </span>
            <h3 className="mt-4 text-heading-md">{stage.title}</h3>
            <p className="mx-auto mt-3 max-w-2xl text-body-sm text-muted-foreground">
              {stage.body}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/* Expanding stage panels — hovered stage grows and reveals its full text */
function StageExpand() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="overflow-hidden rounded-2xl border border-border/60 bg-white">
      <div className="flex flex-col divide-y divide-border/40 lg:flex-row lg:divide-y-0 lg:divide-x">
        {STAGES.map((s, i) => {
          const isActive = i === activeIndex;
          return (
            <div
              key={s.tag}
              className={`cursor-pointer transition-[flex,background-color] duration-500 ease-in-out ${
                isActive ? "bg-neutral-50 lg:flex-[2.4]" : "bg-white lg:flex-[1]"
              }`}
              onClick={() => setActiveIndex(i)}
              onMouseEnter={() => setActiveIndex(i)}
            >
              <div className="flex h-full flex-col px-5 py-6 lg:px-6 lg:py-9">
                <p
                  className={`text-overline-sm transition-colors duration-300 ${
                    isActive ? "text-primary" : "text-muted-foreground/60"
                  }`}
                >
                  {s.tag}
                </p>
                <h3 className="mt-2 text-base font-semibold text-foreground">{s.title}</h3>
                <div
                  className={`hidden overflow-hidden transition-all duration-500 ease-in-out lg:block ${
                    isActive ? "mt-3 max-h-[300px] opacity-100" : "mt-0 max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-body-xs text-muted-foreground">{s.body}</p>
                </div>
                <p className="mt-2 text-body-xs text-muted-foreground lg:hidden">{s.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* Layout 5 — centered header, expanding stage panels, detail grid below */
function PipelineLayoutExpandPanels() {
  return (
    <>
      <motion.div
        {...fadeIn}
        transition={{ duration: 0.5 }}
        className="mx-auto mb-14 max-w-3xl text-center"
      >
        <p className="text-overline text-primary">Foundation two · Observability Pipeline</p>
        <h2 className="mt-3 text-display-md">Every signal is shaped before it ever lands.</h2>
        <p className="mt-4 text-body-md text-muted-foreground">{PIPELINE_INTRO}</p>
      </motion.div>

      <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.1 }}>
        <StageExpand />
      </motion.div>

      <div className="mt-8">
        <NarrativeGrid />
      </div>
    </>
  );
}

/* Story rail — every stage carries its own progress bar; they fill in sequence */
function StageStories() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const stage = STAGES[active];

  return (
    <div
      className="overflow-hidden rounded-2xl border border-border/60 bg-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
        {/* Left — the story rail */}
        <div className="flex flex-col justify-center gap-5 border-b border-border/40 p-7 lg:border-b-0 lg:border-r lg:p-8">
          {STAGES.map((s, i) => {
            const isActive = i === active;
            const isDone = i < active;
            return (
              <button
                key={s.tag}
                type="button"
                onClick={() => setActive(i)}
                className="group/story w-full text-left"
              >
                <span
                  className={`flex items-center justify-between gap-3 text-label-md transition-colors ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground group-hover/story:text-foreground"
                  }`}
                >
                  {s.title}
                  <span
                    className={`shrink-0 text-label-sm transition-colors ${
                      isActive ? "text-primary" : "text-muted-foreground/50"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </span>
                <span className="mt-2 block h-0.5 w-full overflow-hidden rounded-full bg-border/50">
                  {isActive ? (
                    <span
                      key={active}
                      onAnimationEnd={() => setActive((a) => (a + 1) % STAGES.length)}
                      className={`stage-progress block h-full bg-primary ${
                        paused ? "stage-progress--paused" : ""
                      }`}
                    />
                  ) : (
                    <span
                      className={`block h-full rounded-full ${
                        isDone ? "w-full bg-primary/30" : "w-0"
                      }`}
                    />
                  )}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right — the active stage */}
        <div className="relative flex min-h-[300px] flex-col justify-center overflow-hidden p-8 lg:p-12">
          <AnimatePresence mode="wait">
            <motion.span
              key={`ghost-${active}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="stat-number pointer-events-none absolute right-8 top-6 select-none text-[110px] font-bold !text-foreground/[0.05]"
            >
              {String(active + 1).padStart(2, "0")}
            </motion.span>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={stage.tag}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
              className="relative z-10 max-w-xl"
            >
              <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-label-sm text-primary">
                {stage.tag}
              </span>
              <h3 className="mt-4 text-heading-lg">{stage.title}</h3>
              <p className="mt-3 text-body-md text-muted-foreground">{stage.body}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

/* Narrative split — mirrors the story rail's proportions: titles left, reading panel right */
function NarrativeTabs() {
  const [active, setActive] = useState(0);
  const items = [
    { label: "The problem", body: PIPELINE_PROBLEM },
    { label: "What we did", body: PIPELINE_WHAT_WE_DID },
    { label: "Why this counts as a foundation", body: PIPELINE_WHY },
    { label: "What it means for you", body: PIPELINE_MEANS },
  ];
  const item = items[active];

  return (
    <div className="overflow-hidden rounded-2xl border border-border/60 bg-white">
      <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
        {/* Left — titles rail */}
        <div className="flex flex-col justify-center gap-1 border-b border-border/40 p-3 lg:border-b-0 lg:border-r lg:p-4">
          {items.map((b, i) => {
            const isActive = i === active;
            return (
              <button
                key={b.label}
                type="button"
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                className={`w-full rounded-lg px-4 py-3.5 text-left text-label-md transition-colors ${
                  isActive
                    ? "bg-neutral-100 text-foreground"
                    : "text-muted-foreground hover:bg-neutral-50 hover:text-foreground"
                }`}
              >
                {b.label}
              </button>
            );
          })}
        </div>

        {/* Right — reading panel */}
        <div className="flex min-h-[240px] flex-col justify-center p-7 lg:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <p className="text-overline-sm text-primary">{item.label}</p>
              <p className="mt-3 text-body-md text-muted-foreground">{item.body}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

/* Layout 4 — premium story rail with sequential progress, narrative tabs below */
function PipelineLayoutExpand() {
  return (
    <>
      <motion.div
        {...fadeIn}
        transition={{ duration: 0.5 }}
        className="mx-auto mb-14 max-w-3xl text-center"
      >
        <p className="text-overline text-primary">Foundation two · Observability Pipeline</p>
        <h2 className="mt-3 text-display-md">Every signal is shaped before it ever lands.</h2>
        <p className="mt-4 text-body-md text-muted-foreground">{PIPELINE_INTRO}</p>
      </motion.div>

      <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.1 }}>
        <StageStories />
      </motion.div>

      <div className="mt-8">
        <NarrativeGrid />
      </div>
    </>
  );
}

/* Flat stage grid — 3 across, 2 rows: 01–03 on top, 04–06 below */
function StageSpine() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {STAGES.map((s, i) => (
        <motion.div
          key={s.tag}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
          className="relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-white p-7"
        >
          <span className="stat-number pointer-events-none absolute -right-2 -top-5 select-none text-[88px] font-bold !text-foreground/[0.05]">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="inline-flex w-fit rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-label-sm text-primary">
            {s.tag}
          </span>
          <h3 className="mt-4 text-heading-md">{s.title}</h3>
          <p className="mt-2 flex-1 text-body-sm text-muted-foreground">{s.body}</p>
        </motion.div>
      ))}
    </div>
  );
}

/* Layout 6 — centre-spine timeline: header, alternating stage cards, detail grid below */
function PipelineLayoutScrolly() {
  return (
    <>
      <motion.div
        {...fadeIn}
        transition={{ duration: 0.5 }}
        className="mx-auto mb-14 max-w-3xl text-center"
      >
        <p className="text-overline text-primary">Foundation two · Observability Pipeline</p>
        <h2 className="mt-3 text-display-md">Every signal is shaped before it ever lands.</h2>
        <p className="mt-4 text-body-md text-muted-foreground">{PIPELINE_INTRO}</p>
      </motion.div>

      <StageSpine />

      {/* Narrative — plain text, no card */}
      <motion.div
        {...fadeIn}
        transition={{ duration: 0.5 }}
        className="mt-14 grid gap-x-16 gap-y-7 lg:grid-cols-2"
      >
        <QBlock label="The problem">{PIPELINE_PROBLEM}</QBlock>
        <QBlock label="What we did">{PIPELINE_WHAT_WE_DID}</QBlock>
        <QBlock label="Why this counts as a foundation">{PIPELINE_WHY}</QBlock>
        <QBlock label="What it means for you">{PIPELINE_MEANS}</QBlock>
      </motion.div>
    </>
  );
}

export function InfinityPipeline() {
  const [variant, setVariant] = useState<1 | 2 | 3 | 4 | 5 | 6>(1);

  return (
    <section id="pipeline" className="group/section relative z-10 scroll-mt-24 bg-white">
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

        {variant === 1 && <PipelineLayoutExpand />}
        {variant === 2 && <PipelineLayoutEditorial />}
        {variant === 3 && <PipelineLayoutImmersive />}
        {variant === 4 && <PipelineLayoutSplitRail />}
        {variant === 5 && <PipelineLayoutExpandPanels />}
        {variant === 6 && <PipelineLayoutScrolly />}
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────
   FOUNDATION 03 — Unified Infinity licensing
   ──────────────────────────────────────────────────────────── */
const LICENSING_ROWS = [
  {
    module: "ObserveOps Infinity Platform",
    sub: "Base · full platform, including pipeline and AIOps",
    licensedBy: "Monitored Device",
    units: ["DEV"],
    base: true,
  },
  { module: "Flow Monitoring", licensedBy: "Flow Source / Exporter", units: ["FSRC"] },
  { module: "Log Monitoring", licensedBy: "Log Source", units: ["LSRC"] },
  { module: "NCCM", licensedBy: "Managed Network Device", units: ["NDEV"] },
  { module: "APM", licensedBy: "Instrumented App / Agent", units: ["APP", "AGT"] },
  { module: "RUM", licensedBy: "Front-end Application", units: ["FEA"] },
];

const LIC_PROBLEM = (
  <>
    Four ObserveOps editions: <s className="text-muted-foreground/60">NM</s>{" "}
    <s className="text-muted-foreground/60">NO</s>{" "}
    <s className="text-muted-foreground/60">HIO</s>{" "}
    <s className="text-muted-foreground/60">FSO</s>. Feature comparison grids. Upgrade
    walls in front of capability they had already deployed for. Weeks spent on{" "}
    <i>&ldquo;which edition do I need?&rdquo;</i> when the real question was{" "}
    <i>&ldquo;what do I need to monitor?&rdquo;</i>
  </>
);

const LIC_WHAT = (
  <>
    One edition: <B>ObserveOps Infinity</B>. The complete platform from day one:
    monitoring, topology, SLO, dashboards, AIOps, automation, the observability pipeline
    and security. Metered only by <B>what you monitor</B>. Nothing sits behind a higher
    plan, because there is no higher plan.
  </>
);

const LIC_SECOND = (
  <>
    Log and Flow licensing moved from <B>per GB per day</B> to <B>per source</B>. You
    are licensed by how many things you watch. A chattier application leaves your
    license where it was.
  </>
);

/* The licensing meter table (inner, unwrapped) */
function LicensingTableInner() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[480px] text-left">
        <thead>
          <tr className="border-b border-border/40 bg-muted/40">
            <th className="px-5 py-3.5 text-overline-sm font-semibold text-muted-foreground">
              Module
            </th>
            <th className="px-5 py-3.5 text-overline-sm font-semibold text-muted-foreground">
              Licensed by
            </th>
            <th className="px-5 py-3.5 text-overline-sm font-semibold text-muted-foreground">
              Unit
            </th>
          </tr>
        </thead>
        <tbody>
          {LICENSING_ROWS.map((row) => (
            <tr
              key={row.module}
              className={`border-b border-border/40 transition-colors last:border-b-0 hover:bg-neutral-50 ${
                row.base ? "bg-primary/5" : ""
              }`}
            >
              <td className="px-5 py-3.5">
                <p className="text-label-md-medium text-foreground">{row.module}</p>
                {row.sub && (
                  <p className="mt-0.5 text-label-sm-medium text-muted-foreground">
                    {row.sub}
                  </p>
                )}
              </td>
              <td className="px-5 py-3.5 text-body-xs text-muted-foreground">
                {row.licensedBy}
              </td>
              <td className="px-5 py-3.5">
                <span className="flex flex-wrap gap-1.5">
                  {row.units.map((u) => (
                    <span
                      key={u}
                      className={`inline-flex rounded-md px-2 py-0.5 text-label-sm ${
                        row.base
                          ? "bg-primary/10 text-primary"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {u}
                    </span>
                  ))}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* Terms + existing-customers notes */
function LicensingNotes() {
  return (
    <>
      <p className="text-label-sm-medium leading-relaxed text-muted-foreground">
        Terms: <span className="font-semibold text-foreground">1-Year · 3-Year · Perpetual + ATS</span>.
        Base SKU family <span className="font-semibold text-foreground">MD-OO-PLT</span>. Add-ons
        attach in any combination to the same edition. Quantities move within volume
        bands; the edition never changes.
      </p>
      <p className="mt-3.5 text-label-sm-medium leading-relaxed text-muted-foreground">
        <span className="font-semibold text-primary">Existing customers:</span> there
        is no forced migration. Live deployments continue on their current contract
        and move to Infinity when it suits.
      </p>
    </>
  );
}

/* Option 3 — the model as a pricing-style module list */
function ModuleList() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border/60 bg-white">
      <div className="divide-y divide-border/40">
        {LICENSING_ROWS.map((row) => (
          <div
            key={row.module}
            className={`flex flex-wrap items-center gap-x-6 gap-y-2 px-6 py-4 transition-colors hover:bg-neutral-50 lg:px-7 lg:py-5 ${
              row.base ? "bg-primary/5" : ""
            }`}
          >
            <div className="min-w-0 flex-1">
              <p className="text-label-md-medium text-foreground">{row.module}</p>
              {row.sub && (
                <p className="mt-0.5 text-label-sm-medium text-muted-foreground">{row.sub}</p>
              )}
            </div>
            <p className="text-body-xs text-muted-foreground">{row.licensedBy}</p>
            <span className="flex shrink-0 flex-wrap justify-end gap-1.5">
              {row.units.map((u) => (
                <span
                  key={u}
                  className={`inline-flex rounded-md px-2 py-0.5 text-label-sm ${
                    row.base ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {u}
                </span>
              ))}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function InfinityLicensing() {
  const [variant, setVariant] = useState<1 | 2 | 3 | 4>(1);

  return (
    <section id="licensing" className="group/section relative z-10 scroll-mt-24 bg-white">
      {/* Layout picker — outside the container, revealed on section hover. (Remove once chosen.) */}
      <div className="absolute right-4 top-6 z-20 flex items-center gap-1 opacity-0 transition-opacity duration-300 group-hover/section:opacity-100">
        {([1, 2, 3, 4] as const).map((n) => (
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

        {variant === 4 && (
          <>
            <ChapterHead
              tag="Foundation three · Unified Infinity licensing"
              line1="We retired the tiers."
              line2="What's left is infinity."
            />

            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.1 }}>
                <QBlock label="The problem">{LIC_PROBLEM}</QBlock>
                <QBlock label="What we did">{LIC_WHAT}</QBlock>
                <QBlock label="And a second change that matters">{LIC_SECOND}</QBlock>
              </motion.div>

              <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.2 }}>
                <div className="overflow-hidden rounded-2xl border border-border/60 bg-white">
                  <LicensingTableInner />
                </div>
                <div className="mt-5">
                  <LicensingNotes />
                </div>
              </motion.div>
            </div>
          </>
        )}

        {variant === 2 && (
          <>
            <ChapterHead
              tag="Foundation three · Unified Infinity licensing"
              line1="We retired the tiers."
              line2="What's left is infinity."
            />

            {/* Narrative — connected 3-column band */}
            <motion.div
              {...fadeIn}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="overflow-hidden rounded-2xl border border-border/60 bg-white"
            >
              <div className="grid md:grid-cols-3">
                {[
                  { label: "The problem", body: LIC_PROBLEM },
                  { label: "What we did", body: LIC_WHAT },
                  { label: "And a second change that matters", body: LIC_SECOND },
                ].map((b, i) => (
                  <div
                    key={b.label}
                    className={`group p-6 transition-colors hover:bg-neutral-50 lg:p-7 ${
                      i > 0 ? "border-t border-border/40 md:border-l md:border-t-0" : ""
                    }`}
                  >
                    <p className="text-overline-sm text-primary">{b.label}</p>
                    <p className="mt-3 text-body-sm text-muted-foreground">{b.body}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* The model — full-width table with notes footer */}
            <motion.div
              {...fadeIn}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-8 overflow-hidden rounded-2xl border border-border/60 bg-white"
            >
              <LicensingTableInner />
              <div className="border-t border-border/40 bg-neutral-50 px-6 py-5 lg:px-7">
                <LicensingNotes />
              </div>
            </motion.div>
          </>
        )}

        {variant === 3 && (
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16">
            <motion.div
              {...fadeIn}
              transition={{ duration: 0.5 }}
              className="lg:sticky lg:top-28 lg:self-start"
            >
              <p className="text-overline text-primary">Foundation three · Unified Infinity licensing</p>
              <h2 className="mt-3 text-display-md">
                We retired the tiers. What&apos;s left is infinity.
              </h2>
              <div className="mt-8">
                <QBlock label="The problem">{LIC_PROBLEM}</QBlock>
                <QBlock label="What we did">{LIC_WHAT}</QBlock>
                <QBlock label="And a second change that matters">{LIC_SECOND}</QBlock>
              </div>
            </motion.div>

            <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.15 }}>
              <ModuleList />
              <div className="mt-6">
                <LicensingNotes />
              </div>
            </motion.div>
          </div>
        )}

        {variant === 1 && (
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16">
            <motion.div
              {...fadeIn}
              transition={{ duration: 0.5 }}
              className="lg:sticky lg:top-28 lg:self-start"
            >
              <p className="text-overline text-primary">Foundation three · Unified Infinity licensing</p>
              <h2 className="mt-3 text-display-md">
                We retired the tiers. What&apos;s left is infinity.
              </h2>
              <div className="mt-8">
                <QBlock label="The problem">{LIC_PROBLEM}</QBlock>
                <QBlock label="What we did">{LIC_WHAT}</QBlock>
                <QBlock label="And a second change that matters">{LIC_SECOND}</QBlock>
              </div>
            </motion.div>

            {/* Minimalist — plain rows with separators on a light monochrome panel */}
            <motion.div
              {...fadeIn}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="rounded-2xl bg-neutral-100 p-6 lg:p-8"
            >
              <div>
                {LICENSING_ROWS.map((row, i) => (
                  <div
                    key={row.module}
                    className={`flex flex-wrap items-center justify-between gap-x-6 gap-y-1.5 py-5 first:pt-0 last:pb-0 ${
                      i === LICENSING_ROWS.length - 1 ? "" : "border-b border-border/60"
                    }`}
                  >
                    <div className="min-w-0 flex-1">
                      <p className="text-label-md-medium text-foreground">{row.module}</p>
                      {row.sub && (
                        <p className="mt-0.5 text-label-sm-medium text-muted-foreground">
                          {row.sub}
                        </p>
                      )}
                    </div>
                    <p
                      className={`shrink-0 text-body-xs ${
                        row.base ? "font-semibold text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {row.licensedBy}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <LicensingNotes />
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────
   FOUNDATION 04 — Agentic AI readiness
   ──────────────────────────────────────────────────────────── */
const LADDER = [
  {
    title: "Structured, context-carrying telemetry",
    body: "Parsing and enrichment at ingest, the starting point for anything an agent reasons over.",
    status: "Shipped",
    done: true,
  },
  {
    title: "Governed data lifecycle",
    body: "Policy-driven retention and masking, the guardrails that make autonomy auditable.",
    status: "Shipped",
    done: true,
  },
  {
    title: "AIOps, correlation & anomaly detection",
    body: "Noise reduction and pattern detection, included in the base platform today.",
    status: "Shipped",
    done: true,
  },
  {
    title: "Runbook automation & approval workflow",
    body: "The safe execution path, the hands an agent will eventually use.",
    status: "Shipped",
    done: true,
  },
  {
    title: "Agentic capabilities",
    body: "Autonomous investigation and guided remediation, on this same platform and license.",
    status: "Releasing soon",
    done: false,
  },
];

export function InfinityAgenticAi() {
  return (
    <section id="ai" className="relative z-10 scroll-mt-24 bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        <ChapterHead
          tag="Foundation four · Agentic AI for observability"
          line1="The platform is ready."
          line2="The agents are next."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.1 }}>
            <QBlock label="The problem">
              Most &ldquo;AI in observability&rdquo; is bolted onto a data layer that
              cannot support it. An agent cannot reason over unstructured telemetry, act
              on data with no ownership or service context, or be trusted where its blast
              radius is undefined. The gap shows when a demo becomes a deployment.
            </QBlock>
            <QBlock label="What we did">
              We built the prerequisites first, and they are the other three foundations.{" "}
              <B>Structured, enriched, policy-governed telemetry</B> gives an agent
              something to reason on. <B>One edition with nothing gated</B> brings agentic
              capability to every customer on the plan they hold.{" "}
              <B>Headroom in the hardware envelope</B> leaves room to run it.
            </QBlock>
            <QBlock label="What it means for you">
              Agentic capability will be released <B>onto this platform, on this
              license</B>, leaving your deployment, procurement and instrumentation as
              they are. Deploying Infinity today is how you get ready.
            </QBlock>
          </motion.div>

          <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.2 }}>
            {LADDER.map((r, i) => (
              <div
                key={r.title}
                className={`flex items-start gap-4 py-5 first:pt-0 last:pb-0 ${
                  i === LADDER.length - 1 ? "" : "border-b border-border/40"
                }`}
              >
                <span
                  className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${
                    r.done ? "bg-primary" : "border-[1.5px] border-muted-foreground/60"
                  }`}
                />
                <div className="min-w-0 flex-1">
                  <h3 className={`text-label-lg ${r.done ? "text-foreground" : "text-muted-foreground"}`}>
                    {r.title}
                  </h3>
                  <p className="mt-1 text-body-xs text-muted-foreground">{r.body}</p>
                </div>
                <span
                  className={`shrink-0 pt-1 text-overline-sm ${
                    r.done ? "text-primary" : "text-muted-foreground/60"
                  }`}
                >
                  {r.status}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────
   BY ROLE — read it from where you sit
   ──────────────────────────────────────────────────────────── */
const AUDIENCES = [
  {
    role: "CIO · CFO",
    headline: "A lower total cost, and a predictable one.",
    points: [
      "Infrastructure spend engineered down at the product level",
      "License cost tied to the things you watch",
      "One edition, with no upgrade budget hiding in year two",
      "No re-platforming cost as agentic capability arrives",
    ],
  },
  {
    role: "Head of Infrastructure · NOC",
    headline: "Less to run, more to see.",
    points: [
      "Fewer nodes to operate, patch and keep highly available",
      "Retention becomes a policy decision you can change in minutes",
      "Alerts arrive with CI, site, owner and service context attached",
      "Bursts and event storms absorbed and delivered in full",
    ],
  },
  {
    role: "Partners · Resellers",
    headline: "A quote you can build in minutes.",
    points: [
      "No edition selection. Count devices, attach the modules they need",
      "Six clean units, one SKU family, three terms",
      "A lower hardware ask means a smaller barrier on the infrastructure line",
      "A clear, honest upgrade story for the installed base",
    ],
  },
];

export function InfinityAudiences() {
  return (
    <section className="relative z-10 bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        <motion.div
          {...fadeIn}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="text-overline text-primary">Read it from where you sit</p>
          <h2 className="mt-3 text-display-md">
            Four foundations, three different balance sheets.
          </h2>
        </motion.div>

        <motion.div
          {...fadeIn}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="overflow-hidden rounded-2xl border bg-border"
        >
          <div className="grid gap-px md:grid-cols-3">
            {AUDIENCES.map((a) => (
              <div key={a.role} className="feature-cell group relative flex flex-col overflow-hidden bg-white p-8">
                <DottedGlowBackground
                  className="opacity-0 transition-opacity duration-500 group-hover:opacity-60"
                  gap={14}
                  radius={1.2}
                  opacity={0.4}
                />
                <div className="relative z-10">
                  <p className="text-overline-sm text-primary">{a.role}</p>
                  <h3 className="mt-3 text-heading-md">{a.headline}</h3>
                  <ul className="mt-5 space-y-3">
                    {a.points.map((p) => (
                      <li key={p} className="flex items-start gap-3">
                        <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span className="text-body-xs text-muted-foreground">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────
   FAQ — split panel, mirrors the modules/ObserveOps FAQ
   ──────────────────────────────────────────────────────────── */
const INFINITY_FAQ = [
  {
    q: "Is this a price increase in disguise?",
    a: "No. Two things moved and both move in your favour: hardware requirements went down, and Log/Flow moved from per GB/day to per source, which decouples your licence from your data growth. The edition consolidation means capabilities that used to sit behind a higher tier are now included. Your specific commercials are a conversation with your account manager — but the direction of the model is toward less cost and more predictability, not more.",
  },
  {
    q: "One edition means I'm paying for modules I don't use.",
    a: "No — the base is the platform, and the add-ons are genuinely optional and separately metered. If you don't need Flow, you don't buy it. What “one edition” removes is the tier: the artificial wall that used to hold a feature you'd already deployed the platform for behind a bigger plan.",
  },
  {
    q: "30–40% sounds like marketing. Prove it.",
    a: "It's an indicative range and it is workload-dependent — we won't pretend otherwise. The proof is the sizing exercise: give us your device counts, log and flow sources, retention requirement and topology, and we'll size it properly against the official matrix. Then compare it to what you're running today. That number is the one that goes in your proposal.",
  },
  {
    q: "What does “agentic AI ready” actually mean?",
    a: "It means the prerequisites are shipped and demonstrable today: structured, enriched telemetry from the pipeline; policy governance and masking; correlation and anomaly detection; and runbook automation with approval workflow. That's the substrate and the safe execution path. What isn't shipped is the agentic layer on top, and we won't sell you that or give you a date. What we will commit to is that it releases onto this platform and this licence — you won't re-platform for it.",
  },
  {
    q: "We're on an existing edition today — are we being forced onto this?",
    a: "No. There is no forced migration. Your contract continues as-is, and nothing is being switched off. When it makes sense for you — a renewal, an expansion, a hardware refresh — we'll look at the move to Infinity together.",
  },
];

export function InfinityFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative z-10">
      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        <div className="overflow-hidden rounded-2xl border border-border/60 bg-white">
          <div className="grid lg:grid-cols-[1fr,1.2fr]">
            {/* Left — heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center p-8 lg:p-12"
            >
              <p className="text-overline text-primary">FAQ</p>
              <h2 className="mt-3 text-display-md">Frequently Asked Questions</h2>
              <p className="mt-4 text-body-md text-muted-foreground">
                Find answers to common questions about ObserveOps Infinity and our
                platform capabilities.
              </p>
            </motion.div>

            {/* Right — accordion */}
            <div className="divide-y divide-border/40 border-t border-border/40 lg:border-l lg:border-t-0">
              {INFINITY_FAQ.map((faq, i) => {
                const isOpen = i === openIndex;
                return (
                  <motion.div
                    key={faq.q}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? -1 : i)}
                      className="group flex w-full items-center justify-between px-6 py-6 text-left transition-colors hover:bg-muted/10 lg:px-8 lg:py-7"
                    >
                      <span className="text-label-lg pr-4 transition-colors group-hover:text-primary">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-primary" : "text-muted-foreground"
                        }`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="px-6 pb-5 text-body-xs text-muted-foreground lg:px-8">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────
   COMMITMENT — dark close, mirrors OOCta
   ──────────────────────────────────────────────────────────── */
export function InfinityCommitment() {
  return (
    <section id="talk" className="relative z-10 scroll-mt-24">
      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        <div className="group relative overflow-hidden rounded-3xl bg-foreground px-8 py-16 text-center text-white sm:px-16 sm:py-20">
          <DottedGlowBackground
            className="opacity-0 transition-opacity duration-500 group-hover:opacity-50"
            gap={14}
            radius={1.8}
            opacity={0.6}
            color="rgba(255,255,255,0.4)"
          />
          <div className="relative z-10">
            <h2 className="text-display-md">
              This is what customer-centric means to us.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/60">
              Every foundation cost us something: engineering years, license revenue we
              chose to leave on the table, and a pricing model that stays flat as a
              customer&apos;s data grows. We consider that the correct trade. A product
              ecosystem is worth building when the customer receives the benefit of the
              engineering.
            </p>
            <div className="mx-auto mt-12 grid max-w-4xl gap-6 text-left sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  num: "Commitment 01",
                  title: "We absorb the complexity",
                  body: "If a decision is hard, we take it on ourselves and keep it out of your deal.",
                },
                {
                  num: "Commitment 02",
                  title: "No upgrade walls",
                  body: "The platform you deploy is the whole platform. Capability stays switched on, whatever the deal size.",
                },
                {
                  num: "Commitment 03",
                  title: "No forced migration",
                  body: "Existing customers move to Infinity when it suits them. Everything they run today keeps running.",
                },
                {
                  num: "Commitment 04",
                  title: "Grow without re-platforming",
                  body: "Scale up, add modules, adopt what comes next on the same edition, license and deployment.",
                },
              ].map((c) => (
                <div key={c.num}>
                  <p className="text-overline-sm text-white/40">{c.num}</p>
                  <p className="mt-2 text-[15px] font-semibold text-white">{c.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/60">{c.body}</p>
                </div>
              ))}
            </div>

            <div className="mx-auto mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-7 text-[15px] font-medium text-foreground transition-colors hover:bg-white/90"
              >
                Talk to licensing <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
              <a
                href="#licensing"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-white/20 px-7 text-[15px] font-medium text-white transition-colors hover:bg-white/10"
              >
                Read the licensing guide
              </a>
              <a
                href="#tco"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-white/20 px-7 text-[15px] font-medium text-white transition-colors hover:bg-white/10"
              >
                See the sizing worksheet
              </a>
            </div>
            <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-white/40">
              On the 30–40% figure. This range is indicative and workload-dependent,
              given for an equivalent deployment, and carries no commitment. Realized
              reduction varies with device mix, polling interval, retention policy,
              enabled add-ons and topology. Every opportunity is sized against the
              official Motadata sizing matrix, and only the figure from the completed
              worksheet may appear in a proposal, BoQ or contract.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
