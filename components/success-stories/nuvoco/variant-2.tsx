"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Plus, X, Check } from "lucide-react";
import { HeroOrbs, AnimatedBadge, FadeUp } from "@/components/hero-effects";
import { BrandLogo } from "@/components/brand-logo";
import { company, stats, results, products, beforeAfter } from "./data";

/* Variant 2 — Results-First. Big numbers lead; the narrative follows. */

export function NuvocoVariant2() {
  return (
    <>
      {/* Hero — centered, metrics as the centerpiece */}
      <section className="relative z-10 overflow-hidden pt-16 pb-20 text-center">
        <HeroOrbs />
        <div className="relative z-10 mx-auto w-full max-w-4xl px-6">
          <FadeUp delay={80}>
            <div className="flex justify-center"><AnimatedBadge text="Customer Success · By the Numbers" /></div>
          </FadeUp>
          <FadeUp delay={220}>
            <h1 className="mx-auto mt-6 max-w-3xl text-[clamp(2rem,4.8vw,3.6rem)] font-bold leading-[1.05] tracking-tight">
              {company.title}
            </h1>
          </FadeUp>
          <FadeUp delay={360}>
            <p className="mx-auto mt-6 max-w-2xl text-body-lg text-muted-foreground">{company.deck}</p>
          </FadeUp>
          <FadeUp delay={480}>
            <div className="mt-8 flex items-center justify-center gap-4">
              <BrandLogo className="h-7 w-auto text-foreground" />
              <Plus className="h-4 w-4 text-primary" />
              <Image src={company.logo} alt={company.name} width={160} height={40} className="h-8 w-auto object-contain brightness-0 dark:invert" />
            </div>
          </FadeUp>
        </div>

        {/* Giant metric blocks */}
        <div className="relative z-10 mx-auto mt-16 w-full max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map((s, i) => (
              <FadeUp key={s.label} delay={560 + i * 90}>
                <div className="group rounded-3xl border border-border bg-card p-8 text-left transition-colors hover:border-primary/40">
                  <s.icon className="mb-6 h-6 w-6 text-primary" />
                  <p className="text-[clamp(2.6rem,5vw,3.6rem)] font-bold leading-none tracking-tight text-foreground">{s.value}</p>
                  <p className="mt-3 text-body-sm text-muted-foreground">{s.label}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <div className="relative z-10 bg-background">
      {/* The story — short narrative */}
      <section className="relative z-10 py-16">
        <div className="mx-auto w-full max-w-3xl px-6 text-center">
          <p className="text-overline text-primary">The Story</p>
          <p className="mt-5 text-heading-sm font-medium leading-relaxed text-foreground lg:text-[1.65rem] lg:leading-[1.5]">
            {company.name} is one of India&apos;s largest building materials producers. Its IT function had
            become a patchwork of disconnected tools, so Motadata replaced it with a single platform
            spanning infrastructure monitoring and internal support.
          </p>
        </div>
      </section>

      {/* Before / After */}
      <section className="relative z-10 py-8">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-overline text-primary">The Shift</p>
            <h2 className="mt-3 text-heading-xl lg:text-4xl">Before Motadata vs. after</h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {/* Before */}
            <div className="rounded-3xl border border-border bg-card p-8">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-rose-500/10 px-3 py-1 text-label-sm text-rose-500">
                <X className="h-3.5 w-3.5" /> Before
              </div>
              <ul className="space-y-4">
                {beforeAfter.map((b) => (
                  <li key={b.before} className="flex items-start gap-3 border-b border-border pb-4 last:border-0 last:pb-0">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-rose-400" />
                    <span className="text-body-sm text-muted-foreground">{b.before}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* After */}
            <div className="relative overflow-hidden rounded-3xl border border-primary/25 bg-primary/[0.04] p-8">
              <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-primary/10 blur-3xl" />
              <div className="relative mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-label-sm text-primary">
                <Check className="h-3.5 w-3.5" /> After
              </div>
              <ul className="relative space-y-4">
                {beforeAfter.map((b) => (
                  <li key={b.after} className="flex items-start gap-3 border-b border-primary/15 pb-4 last:border-0 last:pb-0">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-body-sm font-medium text-foreground">{b.after}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quote band */}
      <section className="relative z-10 py-16">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-3xl px-8 py-16 text-center text-white sm:px-16" style={{ background: "linear-gradient(135deg, #F17463, #D4543F)" }}>
            <p className="mx-auto max-w-3xl text-[clamp(1.4rem,2.6vw,2rem)] font-semibold leading-[1.4]">
              &ldquo;One screen now shows the whole environment at a glance, and issues are caught and cleared before they interrupt daily operations.&rdquo;
            </p>
            <p className="mt-6 text-body-sm text-white/80">{company.name} · IT Operations</p>
          </div>
        </div>
      </section>

      {/* Results grid */}
      <section className="relative z-10 py-8">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-overline text-primary">The Outcome</p>
            <h2 className="mt-3 text-heading-xl lg:text-4xl">What changed for the team</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((r) => (
              <div key={r.short} className="rounded-2xl p-6 transition-colors hover:bg-muted/40">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <p className="text-label-lg font-semibold text-foreground">{r.short}</p>
                <p className="mt-1.5 text-body-sm leading-relaxed text-muted-foreground">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="relative z-10 py-16">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-overline text-primary">Products Deployed</p>
            <h2 className="mt-3 text-heading-xl lg:text-4xl">Two products, one operating picture</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
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
