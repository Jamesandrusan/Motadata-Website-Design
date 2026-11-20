"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowUpRight,
  LayoutDashboard,
  BellRing,
  Headphones,
  Clock,
  MapPin,
  Building2,
  Quote,
  ChevronRight,
} from "lucide-react";
import { HeroOrbs, AnimatedBadge, FadeUp } from "@/components/hero-effects";
import { company, products } from "./data";

/* Variant 6 — Narrative (Site24x7-style). Single-column story, benefit-framed. */

const callouts = [
  { icon: LayoutDashboard, text: "One screen for the whole estate" },
  { icon: BellRing, text: "Issues caught before impact" },
  { icon: Headphones, text: "Faster answers for everyday IT" },
  { icon: Clock, text: "Less time on manual upkeep" },
];

const highlights = [
  { id: "challenge", label: "The challenge: visibility split across disconnected tools" },
  { id: "need", label: "The need for one connected view" },
  { id: "solution", label: "The solution: one platform across infrastructure and support" },
  { id: "impact", label: "The impact: faster answers, stronger operations" },
];

export function NuvocoVariant6() {
  return (
    <>
      {/* Hero */}
      <section className="relative z-10 overflow-hidden pt-16 pb-12">
        <HeroOrbs />
        <div className="relative z-10 mx-auto w-full max-w-4xl px-6">
          <FadeUp delay={80}>
            <nav className="flex flex-wrap items-center gap-1.5 text-body-xs text-muted-foreground">
              <Link href="/resources/success-stories" className="transition-colors hover:text-primary">Success Stories</Link>
              <ChevronRight className="h-3 w-3 opacity-60" />
              <span className="text-foreground">{company.name}</span>
            </nav>
          </FadeUp>

          <FadeUp delay={160}>
            <div className="mt-7"><AnimatedBadge text="Customer Success Story" /></div>
          </FadeUp>

          <FadeUp delay={280}>
            <h1 className="mt-6 text-[clamp(1.9rem,4.4vw,3.1rem)] font-bold leading-[1.08] tracking-tight">
              From reactive to proactive: how {company.name} unified infrastructure monitoring and IT service management with Motadata
            </h1>
          </FadeUp>

          <FadeUp delay={420}>
            <p className="mt-6 text-body-lg text-muted-foreground">
              A patchwork of individual applications made oversight difficult and slowed coordination
              between departments. One Motadata platform, ObserveOps and ServiceOps, replaced it.
            </p>
          </FadeUp>

          <FadeUp delay={540}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/free-trial/aiops" className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-label-md text-primary-foreground transition-opacity hover:opacity-90">
                Start Free Trial <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a href="#challenge" className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-label-md text-foreground transition-colors hover:border-primary/40 hover:text-primary">
                Read the story
              </a>
            </div>
          </FadeUp>

          {/* 4 benefit callouts */}
          <FadeUp delay={660}>
            <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {callouts.map((c) => (
                <div key={c.text} className="rounded-2xl border border-border bg-card p-5">
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                    <c.icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-body-sm font-medium leading-snug text-foreground">{c.text}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Body */}
      <div className="relative z-10 bg-background pt-4 pb-8">
      <div className="mx-auto w-full max-w-3xl px-6">
        {/* Info box */}
        <div className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-6 sm:flex-row sm:items-center">
          <Image src={company.logo} alt={company.name} width={200} height={48} className="h-9 w-auto shrink-0 object-contain object-left brightness-0 dark:invert" />
          <div className="hidden h-14 w-px bg-border sm:block" />
          <div className="grid flex-1 gap-4 sm:grid-cols-2">
            <p className="sm:col-span-2 text-body-sm leading-relaxed text-muted-foreground">
              {company.legal} is one of India&apos;s largest building materials producers, active across
              cement, ready-mix concrete, and modern building materials.
            </p>
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-primary" />
              <span className="text-body-xs text-muted-foreground">Industry:</span>
              <span className="text-body-xs font-medium text-foreground">Building Materials</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-body-xs text-muted-foreground">Region:</span>
              <span className="text-body-xs font-medium text-foreground">India</span>
            </div>
          </div>
        </div>

        {/* Story highlights */}
        <div className="mt-8 rounded-2xl border border-border bg-card p-6">
          <p className="mb-4 text-overline text-primary">Story highlights</p>
          <ul className="space-y-2.5">
            {highlights.map((h) => (
              <li key={h.id}>
                <a href={`#${h.id}`} className="group flex items-start gap-2.5 text-body-sm text-foreground transition-colors hover:text-primary">
                  <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary transition-transform group-hover:translate-x-0.5" />
                  {h.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Narrative */}
        <article className="mt-14 space-y-14">
          {/* Challenge */}
          <section id="challenge" className="scroll-mt-28">
            <h2 className="text-heading-lg lg:text-3xl">The challenge: visibility split across disconnected tools</h2>
            <p className="mt-5 text-body-md leading-relaxed text-muted-foreground">
              As {company.name} grew, its technology footprint grew with it, into a patchwork of
              individual applications. Day-to-day visibility was split across disconnected tools, and
              network disruptions often became visible only after users had already felt the impact.
            </p>
            <p className="mt-4 text-body-md leading-relaxed text-muted-foreground">
              On the service side, requests reached the help team without enough working context.
              Repetitive administrative work absorbed much of each working day, and hardware and
              licensing records were scattered across local sheets.
            </p>
            <figure className="mt-8 border-l-2 border-primary pl-6">
              <Quote className="mb-3 h-6 w-6 text-primary/30" />
              <blockquote className="text-heading-xs font-medium leading-relaxed text-foreground lg:text-xl lg:leading-relaxed">
                &ldquo;Every issue meant checking several tools before we even knew where to look.&rdquo;
              </blockquote>
              <figcaption className="mt-3 text-body-xs text-muted-foreground">{company.name}, IT Operations</figcaption>
            </figure>
          </section>

          {/* Need */}
          <section id="need" className="scroll-mt-28">
            <h2 className="text-heading-lg lg:text-3xl">The need for one connected view</h2>
            <p className="mt-5 text-body-md leading-relaxed text-muted-foreground">
              The team needed a single place to watch the infrastructure and run internal support side
              by side, one that could discover what was connected, flag problems by severity, and give
              the help desk the context it was missing. Just as important, it had to keep a single,
              trusted record of every asset, instead of chasing details across departments.
            </p>
          </section>

          {/* Solution */}
          <section id="solution" className="scroll-mt-28">
            <h2 className="text-heading-lg lg:text-3xl">The solution: one platform across infrastructure and support</h2>
            <p className="mt-5 text-body-md leading-relaxed text-muted-foreground">
              Motadata replaced the fragmented setup with one platform. <span className="font-medium text-foreground">ObserveOps</span> took
              over infrastructure and network observability, automatically discovering and monitoring
              connected devices, and raising severity-graded fault alerts across the whole estate the
              moment something drifted.
            </p>
            <p className="mt-4 text-body-md leading-relaxed text-muted-foreground">
              <span className="font-medium text-foreground">ServiceOps</span> brought incident, problem,
              and change handling together on one service desk, backed by a central asset inventory and
              scheduled patch delivery to grouped, priority-ranked systems.
            </p>
            <figure className="mt-8 border-l-2 border-primary pl-6">
              <Quote className="mb-3 h-6 w-6 text-primary/30" />
              <blockquote className="text-heading-xs font-medium leading-relaxed text-foreground lg:text-xl lg:leading-relaxed">
                &ldquo;One screen now shows the whole environment at a glance.&rdquo;
              </blockquote>
              <figcaption className="mt-3 text-body-xs text-muted-foreground">{company.name}, IT Operations</figcaption>
            </figure>
          </section>

          {/* Impact */}
          <section id="impact" className="scroll-mt-28">
            <h2 className="text-heading-lg lg:text-3xl">The impact: faster answers, stronger operations</h2>
            <p className="mt-5 text-body-md leading-relaxed text-muted-foreground">
              With monitoring and service management sharing one platform, issues are now caught and
              cleared before they interrupt daily operations. Staff get quicker answers to their everyday
              IT needs, and less time goes to manual upkeep, leaving more for the work that matters most.
            </p>
            <p className="mt-4 text-body-md leading-relaxed text-muted-foreground">
              Every asset stays accounted for in a single trusted record, giving the organization a
              clear, shared picture of its estate for the first time.
            </p>
            <figure className="mt-8 border-l-2 border-primary pl-6">
              <Quote className="mb-3 h-6 w-6 text-primary/30" />
              <blockquote className="text-heading-xs font-medium leading-relaxed text-foreground lg:text-xl lg:leading-relaxed">
                &ldquo;Issues are caught and cleared before they interrupt daily operations.&rdquo;
              </blockquote>
              <figcaption className="mt-3 text-body-xs text-muted-foreground">{company.name}, IT Operations</figcaption>
            </figure>
          </section>

          {/* Products */}
          <section>
            <h2 className="text-heading-lg lg:text-3xl">Products deployed</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {products.map((p) => (
                <Link key={p.name} href={p.href} className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10"><p.icon className="h-5 w-5 text-primary" /></div>
                  <h3 className="text-heading-sm">Motadata {p.name}</h3>
                  <p className="mt-1 text-label-sm text-primary">{p.tagline}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-label-md text-primary">Explore {p.name}<ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>
                </Link>
              ))}
            </div>
          </section>
        </article>

        <div className="mt-12">
          <Link href="/resources/success-stories" className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-2.5 text-body-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to all success stories
          </Link>
        </div>
      </div>
      </div>
    </>
  );
}
