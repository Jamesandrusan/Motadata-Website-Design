"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Plus, Eye, BellRing, Headphones, ShieldCheck, type LucideIcon } from "lucide-react";
import { HeroOrbs, AnimatedBadge, FadeUp } from "@/components/hero-effects";
import { BrandLogo } from "@/components/brand-logo";
import { company, glance, products } from "./data";

/* Variant 4 — Magazine. Alternating split spreads, editorial and visual-forward. */

const themes: { icon: LucideIcon; label: string; title: string; body: string; before: string; after: string }[] = [
  {
    icon: Eye,
    label: "Visibility",
    title: "One pane of glass for the whole estate",
    body: "Day-to-day visibility used to be split across disconnected tools. Now automatic discovery keeps every connected device on the map, and a single screen shows the whole environment at a glance.",
    before: "Disconnected tools",
    after: "One screen, whole estate",
  },
  {
    icon: BellRing,
    label: "Response",
    title: "Catch issues before users feel them",
    body: "Network disruptions once became visible only after users felt the impact. Severity-graded fault alerts now surface across the whole environment the moment something drifts.",
    before: "Noticed after impact",
    after: "Severity-graded alerts",
  },
  {
    icon: Headphones,
    label: "Support",
    title: "Requests that arrive with context",
    body: "The help team used to receive requests without enough working context. Incident, problem, and change handling now live together on one service desk, so staff get quicker answers.",
    before: "Context-poor tickets",
    after: "One unified service desk",
  },
  {
    icon: ShieldCheck,
    label: "Assets & Patching",
    title: "Every asset accounted for",
    body: "Hardware and licensing records were kept in scattered local sheets, and manual upkeep ate into every day. A central inventory now maintains a single trusted record, with patches delivered to grouped, priority-ranked systems.",
    before: "Scattered spreadsheets",
    after: "Single trusted inventory",
  },
];

export function NuvocoVariant4() {
  return (
    <>
      {/* Hero — editorial cover */}
      <section className="relative z-10 overflow-hidden pt-16 pb-16">
        <HeroOrbs />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-[32px] border border-border bg-card px-8 py-14 sm:px-14 lg:py-20">
            <div className="relative max-w-3xl">
              <FadeUp delay={80}><AnimatedBadge text="Customer Story" /></FadeUp>
              <FadeUp delay={220}>
                <h1 className="mt-6 text-[clamp(2.1rem,5vw,3.8rem)] font-bold leading-[1.04] tracking-tight">{company.title}</h1>
              </FadeUp>
              <FadeUp delay={360}>
                <p className="mt-6 max-w-2xl text-body-lg text-muted-foreground">{company.deck}</p>
              </FadeUp>
              <FadeUp delay={480}>
                <div className="mt-8 flex items-center gap-4">
                  <BrandLogo className="h-7 w-auto text-foreground" />
                  <Plus className="h-4 w-4 text-primary" />
                  <Image src={company.logo} alt={company.name} width={150} height={38} className="h-8 w-auto object-contain brightness-0 dark:invert" />
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-10 bg-background">
      {/* Alternating spreads */}
      <section className="relative z-10 py-8">
        <div className="mx-auto w-full max-w-7xl space-y-20 px-6 lg:space-y-28">
          {themes.map((t, i) => {
            const flip = i % 2 === 1;
            return (
              <FadeUp key={t.label}>
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                  {/* Text */}
                  <div className={flip ? "lg:order-2" : ""}>
                    <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-label-sm text-primary">
                      <t.icon className="h-3.5 w-3.5" /> {t.label}
                    </div>
                    <h2 className="mt-5 text-heading-xl lg:text-4xl">{t.title}</h2>
                    <p className="mt-5 text-body-lg leading-relaxed text-muted-foreground">{t.body}</p>
                    <div className="mt-7 flex flex-wrap items-center gap-3 text-body-sm">
                      <span className="rounded-lg bg-muted px-3 py-1.5 text-muted-foreground line-through decoration-rose-400/70">{t.before}</span>
                      <ArrowUpRight className="h-4 w-4 text-primary" />
                      <span className="rounded-lg bg-primary/10 px-3 py-1.5 font-medium text-primary">{t.after}</span>
                    </div>
                  </div>
                  {/* Visual */}
                  <div className={flip ? "lg:order-1" : ""}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-card">
                      <div className="pointer-events-none absolute inset-0 opacity-[0.4]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--border)) 1px, transparent 0)", backgroundSize: "22px 22px" }} />
                      <div className="relative flex h-full items-center justify-center">
                        <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-border bg-background shadow-sm">
                          <t.icon className="h-11 w-11 text-primary" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </section>

      {/* Quote spotlight */}
      <section className="relative z-10 py-20">
        <div className="mx-auto w-full max-w-4xl px-6 text-center">
          <p className="text-[clamp(1.5rem,3vw,2.4rem)] font-semibold leading-[1.35] tracking-tight text-foreground">
            &ldquo;Less time goes to manual upkeep, and more to what matters most.&rdquo;
          </p>
          <p className="mt-6 text-body-sm text-muted-foreground">{company.name} · IT Operations</p>
        </div>
      </section>

      {/* Facts strip */}
      <section className="relative z-10 py-8">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4">
            {glance.map((g) => (
              <div key={g.label} className="bg-card p-6">
                <div className="mb-2 flex items-center gap-2"><g.icon className="h-4 w-4 text-primary" /><p className="text-caption text-muted-foreground">{g.label}</p></div>
                <p className="text-body-sm font-medium text-foreground">{g.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="relative z-10 py-16">
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
