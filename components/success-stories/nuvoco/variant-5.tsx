"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Plus, ArrowRight, Check, X, TrendingUp } from "lucide-react";
import { HeroOrbs, AnimatedBadge, FadeUp } from "@/components/hero-effects";
import { BrandLogo } from "@/components/brand-logo";
import { company, stats, challenges, solutions, results, products, beforeAfter } from "./data";

/* Variant 5 — Scorecard. A product-led, dashboard-style readout. */

export function NuvocoVariant5() {
  return (
    <>
      {/* Hero + scorecard */}
      <section className="relative z-10 overflow-hidden pt-16 pb-14">
        <HeroOrbs />
        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <FadeUp delay={80}><AnimatedBadge text="Customer Scorecard" /></FadeUp>
            <FadeUp delay={220}>
              <h1 className="mt-6 text-[clamp(2rem,4.4vw,3.3rem)] font-bold leading-[1.06] tracking-tight">{company.title}</h1>
            </FadeUp>
            <FadeUp delay={360}>
              <p className="mt-6 max-w-xl text-body-lg text-muted-foreground">{company.deck}</p>
            </FadeUp>
            <FadeUp delay={480}>
              <div className="mt-8 flex items-center gap-4">
                <BrandLogo className="h-7 w-auto text-foreground" />
                <Plus className="h-4 w-4 text-primary" />
                <Image src={company.logo} alt={company.name} width={150} height={38} className="h-8 w-auto object-contain brightness-0 dark:invert" />
              </div>
            </FadeUp>
          </div>

          {/* Scorecard card */}
          <FadeUp delay={420}>
            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <p className="text-label-md font-semibold text-foreground">Deployment Scorecard</p>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-caption font-medium text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Live
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-2xl border border-border bg-background p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <s.icon className="h-4 w-4 text-primary" />
                      <TrendingUp className="h-3.5 w-3.5 text-emerald-500" />
                    </div>
                    <p className="text-heading-md font-bold tracking-tight text-foreground">{s.value}</p>
                    <p className="mt-0.5 text-caption text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-3 flex items-center gap-2 rounded-2xl border border-primary/20 bg-primary/5 px-4 py-3">
                <span className="text-caption text-muted-foreground">Products</span>
                <span className="ml-auto text-label-sm font-medium text-primary">ObserveOps + ServiceOps</span>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <div className="relative z-10 bg-background">
      {/* Challenge → Solution matrix */}
      <section className="relative z-10 py-14">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-overline text-primary">Capability Map</p>
            <h2 className="mt-3 text-heading-xl lg:text-4xl">Every gap, mapped to a capability</h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s, i) => (
              <div key={s.lead} className="group flex flex-col rounded-2xl p-6 transition-colors hover:bg-muted/40">
                <div className="mb-4 flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10"><s.icon className="h-5 w-5 text-primary" /></span>
                  <span className="text-caption font-medium text-muted-foreground/60">0{i + 1}</span>
                </div>
                <p className="text-label-lg font-semibold text-foreground">{s.lead}</p>
                <p className="mt-2 flex-1 text-body-sm leading-relaxed text-muted-foreground">{s.text}</p>
                <div className="mt-4 flex items-start gap-2 border-t border-border pt-4">
                  <X className="mt-0.5 h-3.5 w-3.5 shrink-0 text-rose-400" />
                  <span className="text-caption text-muted-foreground line-through">{challenges[i]?.text}</span>
                </div>
              </div>
            ))}
            {/* Fill tile */}
            <div className="flex flex-col justify-center rounded-2xl border border-dashed border-border p-6">
              <p className="text-label-lg font-semibold text-foreground">One platform</p>
              <p className="mt-2 text-body-sm leading-relaxed text-muted-foreground">Infrastructure monitoring and IT service management, running side by side.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Before vs After table */}
      <section className="relative z-10 py-8">
        <div className="mx-auto w-full max-w-5xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-overline text-primary">Before / After</p>
            <h2 className="mt-3 text-heading-xl lg:text-4xl">The measurable shift</h2>
          </div>
          <div className="mt-10 overflow-hidden rounded-2xl border border-border">
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 border-b border-border bg-muted/30 px-6 py-3">
              <p className="text-label-sm text-muted-foreground">Before Motadata</p>
              <span className="w-8" />
              <p className="text-label-sm text-primary">After Motadata</p>
            </div>
            {beforeAfter.map((b) => (
              <div key={b.after} className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 border-b border-border px-6 py-4 last:border-0">
                <p className="flex items-start gap-2 text-body-sm text-muted-foreground">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-rose-400" /> {b.before}
                </p>
                <ArrowRight className="h-4 w-4 text-border" />
                <p className="flex items-start gap-2 text-body-sm font-medium text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {b.after}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact readout */}
      <section className="relative z-10 py-16">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-overline text-primary">Impact</p>
            <h2 className="mt-3 text-heading-xl lg:text-4xl">Outcomes the team feels daily</h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {results.map((r) => (
              <div key={r.short} className="rounded-2xl p-5 text-center transition-colors hover:bg-muted/40">
                <div className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-primary/10"><Check className="h-4 w-4 text-primary" /></div>
                <p className="text-label-md font-semibold leading-snug text-foreground">{r.short}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="relative z-10 pb-16">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="grid gap-5 md:grid-cols-2">
            {products.map((p) => (
              <Link key={p.name} href={p.href} className="group flex flex-col rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/40">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10"><p.icon className="h-6 w-6 text-primary" /></div>
                <h3 className="text-heading-sm">Motadata {p.name}</h3>
                <p className="mt-1 text-label-sm text-primary">{p.tagline}</p>
                <p className="mt-4 flex-1 text-body-sm leading-relaxed text-muted-foreground">{p.description}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-label-md text-primary">Explore {p.name}<ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>
              </Link>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Link href="/resources/success-stories" className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-2.5 text-body-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary">
              <ArrowLeft className="h-3.5 w-3.5" /> Back to all success stories
            </Link>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
