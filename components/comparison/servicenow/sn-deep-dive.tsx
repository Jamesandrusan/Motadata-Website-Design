
"use client";

import { Trophy, Check, Scale } from "lucide-react";
import {
  deepDive,
  type DeepDiveSection,
} from "@/lib/servicenow-comparison-data";
import { Reveal, BrandTag } from "./sn-shared";

type Point = DeepDiveSection["motadata"]["points"][number];

/* ── A single comparison cell — one side of a paired row.
   `point` may be undefined when this side has fewer points than the other;
   the empty cell keeps the row grid intact so both sides match height. ── */
function PointCell({
  point,
  accent,
}: {
  point?: Point;
  accent: boolean;
}) {
  return (
    <div
      className={`group flex gap-3.5 px-6 py-4 transition-colors sm:px-8 ${
        accent
          ? "bg-card hover:bg-muted/40 lg:border-r lg:border-border/60"
          : "bg-card hover:bg-muted/40"
      }`}
    >
      {point ? (
        <>
          <span
            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-transform group-hover:scale-110 ${
              accent
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground"
            }`}
          >
            <Check className="h-3 w-3" />
          </span>
          <p className="min-w-0 text-body-sm leading-relaxed text-muted-foreground">
            <span className="font-semibold text-foreground">{point.label}</span>
            {point.body ? ` ${point.body}` : ""}
          </p>
        </>
      ) : null}
    </div>
  );
}

/* ── Verdict — connected footer row of the comparison card ── */
function VerdictStrip({ winner }: { winner: DeepDiveSection["winner"] }) {
  const isSplit = winner.who === "split";
  const isMoto = winner.who === "motadata";
  const Icon = isSplit ? Scale : Trophy;
  return (
    <div className="grid border-t border-border/60 lg:grid-cols-[1fr_2fr]">
      {/* Winner label — 1/3, no divider */}
      <div className="flex items-start gap-3 bg-muted/40 px-6 py-7 sm:px-8">
        <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
        <div className="flex flex-col gap-1">
          <span className="text-overline text-muted-foreground">Winner</span>
          <span
            className={`text-heading-md ${
              isMoto ? "text-primary" : "text-foreground"
            }`}
          >
            {isSplit ? "Depends on scale" : winner.label}
          </span>
        </div>
      </div>

      {/* Verdict prose — right half */}
      <div className="bg-muted/40 px-6 py-7 sm:px-8">
        <p className="text-body-sm leading-relaxed text-muted-foreground">
          {winner.verdict}
        </p>
      </div>
    </div>
  );
}

/* ── Single full-page comparison round ───────────────────── */
function Round({ section }: { section: DeepDiveSection }) {
  const snPoints = section.servicenow.points;
  const moPoints = section.motadata.points;
  const rowCount = Math.max(snPoints.length, moPoints.length);

  return (
    <div
      id={section.id}
      className="scroll-mt-28 py-16 first:pt-0"
    >
      {/* ── Section header — title + subtext, no image ────────────── */}
      <Reveal>
        <div className="max-w-3xl">
          <span className="text-overline text-primary">
            {section.eyebrow}
          </span>
          <h3 className="mt-4 text-display-md text-foreground">
            {section.title}
          </h3>
          <p className="mt-4 text-body-md text-muted-foreground">
            {section.intro}
          </p>
        </div>
      </Reveal>

      {/* ── Connected comparison table — paired rows, matched heights ── */}
      <Reveal delay={80}>
        <div className="mt-12 overflow-hidden rounded-2xl border border-border/60">
          {/* Heading row */}
          <div className="grid lg:grid-cols-2">
            <div className="border-b border-border/60 bg-card px-6 pb-6 pt-6 sm:px-8 sm:pb-7 sm:pt-8 lg:border-b-0 lg:border-r">
              <BrandTag brand="motadata" />
              <h4 className="mt-4 text-heading-lg text-foreground">
                {section.motadata.heading}
              </h4>
            </div>
            <div className="bg-card px-6 pb-6 pt-6 sm:px-8 sm:pb-7 sm:pt-8">
              <BrandTag brand="servicenow" />
              <h4 className="mt-4 text-heading-lg text-foreground">
                {section.servicenow.heading}
              </h4>
            </div>
          </div>

          {/* Point rows — each row pairs one cell per side at equal height */}
          {Array.from({ length: rowCount }).map((_, i) => (
            <div
              key={i}
              className="grid border-t border-border/60 lg:grid-cols-2"
            >
              <PointCell point={moPoints[i]} accent />
              <PointCell point={snPoints[i]} accent={false} />
            </div>
          ))}

          {/* Winner — connected footer row */}
          <VerdictStrip winner={section.winner} />
        </div>
      </Reveal>
    </div>
  );
}

/* ── Deep Dive section ───────────────────────────────────── */
export function SnDeepDive() {
  return (
    <section
      id="deep-dive"
      className="relative z-10 scroll-mt-28 border-t border-border bg-background py-20"
    >
      <div className="mx-auto w-full max-w-7xl px-6">
        {/* Section header */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-overline text-primary">Head to Head</p>
            <h2 className="mt-3 text-display-md text-foreground">
              A detailed comparison, round by round
            </h2>
            <p className="mt-4 text-body-md text-muted-foreground">
              Six dimensions that decide the fit: core ITSM, assets and patch,
              AI, deployment, scale, and cost. Each round ends with an honest
              verdict.
            </p>
          </div>
        </Reveal>

        {/* All rounds — visible in sequence */}
        <div className="mt-12">
          {deepDive.map((section) => (
            <Round key={section.id} section={section} />
          ))}
        </div>
      </div>
    </section>
  );
}
