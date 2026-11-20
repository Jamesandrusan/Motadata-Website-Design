"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Plus, Quote } from "lucide-react";
import { HeroOrbs, AnimatedBadge, FadeUp } from "@/components/hero-effects";
import { BrandLogo } from "@/components/brand-logo";
import { company, challenges, solutions, results, products } from "./data";

/* Variant 3 — The Journey. A narrative timeline, light on raw numbers. */

const phases = [
  {
    step: "01",
    kicker: "Where they started",
    title: "A patchwork that slowed everyone down",
    intro: "Oversight was hard and coordination between departments was slow. Five frictions defined the everyday:",
    items: challenges,
    tone: "muted" as const,
  },
  {
    step: "02",
    kicker: "What changed",
    title: "One platform across infrastructure and support",
    intro: "Motadata brought monitoring and service management together, with each friction met by a capability:",
    items: solutions,
    tone: "primary" as const,
  },
  {
    step: "03",
    kicker: "Where they are now",
    title: "A calmer, more visible operation",
    intro: "With one operating picture, the day-to-day changed in ways the whole organization could feel:",
    items: results.map((r) => ({ icon: undefined, lead: r.short, text: r.text })),
    tone: "primary" as const,
  },
];

export function NuvocoVariant3() {
  return (
    <>
      {/* Hero */}
      <section className="relative z-10 overflow-hidden pt-16 pb-14">
        <HeroOrbs />
        <div className="relative z-10 mx-auto w-full max-w-4xl px-6">
          <FadeUp delay={80}><AnimatedBadge text="A Customer Journey" /></FadeUp>
          <FadeUp delay={220}>
            <h1 className="mt-6 text-[clamp(2rem,4.6vw,3.4rem)] font-bold leading-[1.07] tracking-tight">{company.title}</h1>
          </FadeUp>
          <FadeUp delay={360}>
            <p className="mt-6 max-w-2xl text-body-lg text-muted-foreground">{company.deck}</p>
          </FadeUp>
          <FadeUp delay={480}>
            <div className="mt-8 inline-flex items-center gap-4 rounded-2xl border border-border bg-card px-6 py-4">
              <BrandLogo className="h-6 w-auto text-foreground" />
              <Plus className="h-3.5 w-3.5 text-primary" />
              <Image src={company.logo} alt={company.name} width={150} height={38} className="h-7 w-auto object-contain brightness-0 dark:invert" />
            </div>
          </FadeUp>
        </div>
      </section>

      <div className="relative z-10 bg-background">
      {/* Timeline */}
      <section className="relative z-10 pb-8">
        <div className="mx-auto w-full max-w-4xl px-6">
          <div className="relative">
            {/* vertical rail */}
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border md:left-[27px]" aria-hidden />
            <div className="space-y-14">
              {phases.map((phase) => (
                <FadeUp key={phase.step}>
                  <div className="relative pl-14 md:pl-20">
                    {/* node */}
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-label-sm font-semibold text-primary md:h-14 md:w-14 md:text-base">
                      {phase.step}
                    </div>
                    <p className="text-overline text-primary">{phase.kicker}</p>
                    <h2 className="mt-2 text-heading-lg lg:text-3xl">{phase.title}</h2>
                    <p className="mt-3 max-w-2xl text-body-md leading-relaxed text-muted-foreground">{phase.intro}</p>

                    <div className="mt-6 space-y-3">
                      {phase.items.map((it) => (
                        <div
                          key={it.lead}
                          className={`flex items-start gap-4 rounded-2xl border p-5 ${
                            phase.tone === "primary" ? "border-border bg-card" : "border-border/70 bg-card"
                          }`}
                        >
                          <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${phase.tone === "primary" ? "bg-primary" : "bg-rose-400"}`} />
                          <div>
                            <p className="text-label-lg font-semibold text-foreground">{it.lead}</p>
                            <p className="mt-1 text-body-sm leading-relaxed text-muted-foreground">{it.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Single highlight + quote */}
      <section className="relative z-10 py-16">
        <div className="mx-auto w-full max-w-4xl px-6">
          <figure className="relative overflow-hidden rounded-3xl border border-primary/20 bg-primary/5 p-10 text-center">
            <Quote className="mx-auto mb-5 h-8 w-8 text-primary/30" />
            <blockquote className="mx-auto max-w-2xl text-heading-sm font-medium leading-relaxed text-foreground lg:text-[1.5rem] lg:leading-[1.5]">
              &ldquo;Every asset stays accounted for in a single trusted record, and issues are caught before they interrupt daily operations.&rdquo;
            </blockquote>
            <figcaption className="mt-5 text-body-xs text-muted-foreground">{company.name} · IT Operations</figcaption>
          </figure>
        </div>
      </section>

      {/* Products */}
      <section className="relative z-10 pb-16">
        <div className="mx-auto w-full max-w-4xl px-6">
          <h2 className="text-heading-lg lg:text-3xl">Products behind the journey</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {products.map((p) => (
              <Link key={p.name} href={p.href} className="group flex flex-col rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary/40">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10"><p.icon className="h-6 w-6 text-primary" /></div>
                <h3 className="text-heading-sm">Motadata {p.name}</h3>
                <p className="mt-1 text-label-sm text-primary">{p.tagline}</p>
                <p className="mt-4 flex-1 text-body-sm leading-relaxed text-muted-foreground">{p.description}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-label-md text-primary">Explore {p.name}<ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>
              </Link>
            ))}
          </div>
          <div className="mt-12">
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
