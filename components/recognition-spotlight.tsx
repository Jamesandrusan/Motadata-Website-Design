"use client";

import { Award, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

/* ══════════════════════════════════════════════════════
   Recognition Option 4 — Spotlight Card
   Large centered featured card with Gartner highlight,
   supporting bullet points below
   ══════════════════════════════════════════════════════ */

const points = [
  "Recognized in Gartner Market Guide for IT Operations Platforms",
  "Trusted by 500+ enterprise customers across 30+ countries",
  "99.9% uptime SLA with enterprise-grade security certifications",
  "Award-winning platform design and user experience",
  "Comprehensive AIOps and unified observability capabilities",
  "Continuous innovation in IT infrastructure monitoring",
];

export function RecognitionSpotlight() {
  return (
    <section className="relative z-10 bg-white">
      <div className="mx-auto max-w-5xl px-6 py-24">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-overline text-primary">
            Industry Recognition
          </p>
          <h2 className="mt-3 text-heading-xl text-foreground sm:text-4xl">
            Recognized by Industry Leaders
          </h2>
        </div>

        {/* Spotlight card */}
        <div className="mx-auto mt-14 max-w-3xl overflow-hidden rounded-3xl border">
          {/* Top gradient banner */}
          <div
            className="flex items-center justify-center gap-3 px-6 py-8"
            style={{
              background: "linear-gradient(135deg, hsl(var(--primary) / 0.06), hsl(var(--primary) / 0.02))",
            }}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border bg-white shadow-sm">
              <Award className="h-7 w-7 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-heading-sm text-foreground">Gartner Market Guide</p>
              <p className="text-body-xs text-muted-foreground">IT Operations Platforms — 2024</p>
            </div>
          </div>

          {/* Content */}
          <div className="px-8 py-8 sm:px-12">
            <p className="text-body-md text-muted-foreground">
              Featured in the Gartner Market Guide for IT Operations Platforms,
              showcasing our commitment to innovation and excellence in unified
              observability. This recognition validates our vision of delivering
              comprehensive, AI-powered IT operations management.
            </p>

            {/* Check points */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {points.map((point) => (
                <div key={point} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm leading-snug text-foreground">{point}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button size="lg" className="h-11 px-7 text-sm">
                Read the Full Report
              </Button>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-label-md text-primary hover:underline"
              >
                Learn More <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
