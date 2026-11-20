"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowUpRight,
  Quote,
} from "lucide-react";
import { HeroOrbs, AnimatedBadge, FadeUp } from "@/components/hero-effects";
import { PatternBullet } from "./pattern-bullet";
import { StoryVideo } from "./story-video";
import { company, glance, stats, challenges, solutions, results, products, video } from "./data";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "video", label: "Video" },
  { id: "challenge", label: "The Challenge" },
  { id: "solution", label: "The Solution" },
  { id: "products", label: "Products Deployed" },
  { id: "results", label: "The Results" },
];

function CheckBullet() {
  return (
    <svg viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 shrink-0 text-primary" fill="none" aria-hidden>
      <rect x="1" y="1" width="18" height="18" rx="6" className="fill-primary/10" />
      <path d="M5.75 10.25l2.75 2.75 5.75-6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DashBullet() {
  return (
    <svg viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 shrink-0 text-rose-500" fill="none" aria-hidden>
      <rect x="1" y="1" width="18" height="18" rx="6" className="fill-rose-500/10" />
      <path d="M6.25 10h7.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

export function NuvocoVariant1() {
  const [active, setActive] = useState("overview");
  const heroRef = useRef<HTMLElement>(null);
  const [showSubnav, setShowSubnav] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-35% 0px -60% 0px" }
    );
    toc.forEach((t) => {
      const el = document.getElementById(t.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  /* Sub-nav shows only once the hero has scrolled up under the navbar */
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => setShowSubnav(!e.isIntersecting),
      { rootMargin: "-120px 0px 0px 0px", threshold: 0 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative z-10 overflow-hidden pt-16 pb-16">
        <HeroOrbs />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-[2fr_1fr]">
            <div>
              <FadeUp delay={150}><AnimatedBadge text="Customer Success Story" /></FadeUp>
              <FadeUp delay={280}>
                <h1 className="mt-6 text-[clamp(2rem,4.6vw,3.5rem)] font-bold leading-[1.06] tracking-tight">
                  {company.title}
                </h1>
              </FadeUp>
              <FadeUp delay={420}>
                <p className="mt-6 max-w-xl text-body-lg text-muted-foreground">
                  How <span className="font-medium text-foreground">{company.name}</span> replaced a
                  patchwork of applications with one Motadata platform that unifies infrastructure
                  monitoring and IT service management across the organization.
                </p>
              </FadeUp>
            </div>

            <FadeUp delay={480}>
              <div className="lg:pl-8">
                <Image src={company.logo} alt={company.name} width={225} height={146} className="h-28 w-auto object-contain object-left" />
              </div>
            </FadeUp>
          </div>

        </div>
      </section>

      {/* Scroll-reveal section sub-nav — hidden by default, fades in once the hero scrolls under the navbar */}
      <div
        className={`fixed inset-x-0 top-14 z-30 border-b border-border bg-background/90 backdrop-blur-md transition-all duration-200 ${
          showSubnav ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl gap-1 overflow-x-auto px-6 py-2.5">
          {toc.map((t) => (
            <a
              key={t.id}
              href={`#${t.id}`}
              className={`shrink-0 rounded-lg px-3 py-1.5 text-body-xs font-medium transition-colors ${
                active === t.id
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {t.label}
            </a>
          ))}
        </div>
      </div>

      {/* Article */}
      <div className="relative z-10 bg-background pt-12 pb-8">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          {/* LEFT — At a Glance (sticky) */}
          <aside className="hidden lg:block lg:pr-10">
            <div className="sticky top-36">
              <p className="mb-5 text-overline text-muted-foreground">At a Glance</p>
              <ul className="space-y-8">
                {glance.map((g) => (
                  <li key={g.label} className="flex items-center gap-3.5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <g.icon className="h-6 w-6 text-primary" />
                    </span>
                    <div>
                      <p className="text-body-xs text-muted-foreground">{g.label}</p>
                      <p className="text-body-md font-medium text-foreground">{g.value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <article className="min-w-0">
            <section id="overview" className="scroll-mt-36">
              <h2 className="text-heading-lg lg:text-3xl">Overview</h2>
              <p className="mt-5 text-body-md leading-relaxed text-muted-foreground">{company.intro}</p>
              <p className="mt-4 text-body-md leading-relaxed text-muted-foreground">
                Nuvoco set out to replace that fragmented setup with a single platform, one that could
                watch the infrastructure and run internal support side by side. Motadata delivered
                exactly that, pairing <span className="font-medium text-foreground">ObserveOps</span> for
                infrastructure and network observability with{" "}
                <span className="font-medium text-foreground">ServiceOps</span> for IT service management.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-x-8 gap-y-5">
                {stats.map((s) => (
                  <li key={s.label}>
                    <p className="text-heading-md font-bold tracking-tight text-foreground">{s.value}</p>
                    <p className="mt-0.5 text-body-sm text-muted-foreground">{s.label}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section id="video" className="mt-16 scroll-mt-36">
              <StoryVideo youtubeId={video.youtubeId} title={video.title} />
            </section>

            <section id="challenge" className="mt-16 scroll-mt-36">
              <h2 className="text-heading-lg lg:text-3xl">The Challenge</h2>
              <p className="mt-5 text-body-md leading-relaxed text-muted-foreground">
                Before Motadata, the everyday reality for {company.name}&apos;s IT team was defined by five recurring frictions:
              </p>
              <ul className="mt-6 space-y-4">
                {challenges.map((c) => (
                  <li key={c.lead} className="flex items-start gap-3.5">
                    <DashBullet />
                    <p className="text-body-md leading-relaxed text-foreground">
                      <span className="font-semibold">{c.lead}.</span> <span className="text-muted-foreground">{c.text}</span>
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            <section id="solution" className="mt-16 scroll-mt-36">
              <h2 className="text-heading-lg lg:text-3xl">The Solution</h2>
              <p className="mt-5 text-body-md leading-relaxed text-muted-foreground">
                One platform, deployed across infrastructure and support, answered each of those frictions directly:
              </p>
              <ul className="mt-6 space-y-6">
                {solutions.map((s) => (
                  <li key={s.lead} className="flex items-start gap-4">
                    <PatternBullet className="mt-1 h-6 w-6" />
                    <div>
                      <p className="text-label-lg font-semibold text-foreground">{s.lead}</p>
                      <p className="mt-1 text-body-sm leading-relaxed text-muted-foreground">{s.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* Mid-article pull quote — modern SaaS testimonial */}
            <figure className="my-20">
              <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 sm:p-12">
                <Quote aria-hidden className="pointer-events-none absolute -right-4 -top-4 h-24 w-24 fill-primary/[0.06] text-transparent" />
                <blockquote className="relative text-[clamp(1.35rem,2.7vw,2rem)] font-medium leading-[1.42] tracking-tight text-foreground">
                  Staff get quicker answers to their everyday IT needs, and less time goes to manual upkeep.
                </blockquote>
                <figcaption className="relative mt-8 flex items-center gap-3.5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-label-lg font-bold text-primary">N</span>
                  <span className="leading-tight">
                    <span className="block text-body-md font-semibold text-foreground">IT Operations</span>
                    <span className="block text-body-xs text-muted-foreground">Nuvoco Vistas Corporation Limited</span>
                  </span>
                </figcaption>
              </div>
            </figure>

            <section id="products" className="mt-16 scroll-mt-36">
              <h2 className="text-heading-lg lg:text-3xl">Two products, one unified platform</h2>
              <p className="mt-5 text-body-md leading-relaxed text-muted-foreground">
                Nuvoco runs two Motadata products side by side on one platform: ObserveOps for
                infrastructure observability and ServiceOps for IT service management.
              </p>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {products.map((p) => (
                  <Link key={p.name} href={p.href} className="group flex items-center justify-between rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                        <p.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-heading-sm">Motadata {p.name}</h3>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-primary transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                ))}
              </div>
            </section>

            <section id="results" className="mt-16 scroll-mt-36">
              <h2 className="text-heading-lg lg:text-3xl">The Results</h2>
              <p className="mt-5 text-body-md leading-relaxed text-muted-foreground">
                With monitoring and service management sharing one platform, the day-to-day changed in ways the whole organization could feel:
              </p>
              <ul className="mt-6 space-y-4">
                {results.map((r) => (
                  <li key={r.short} className="flex items-start gap-3.5">
                    <CheckBullet />
                    <p className="text-body-md leading-relaxed text-foreground">{r.text}</p>
                  </li>
                ))}
              </ul>

              <figure className="relative mt-10 overflow-hidden rounded-2xl border border-primary/20 bg-primary/5 p-8">
                <Quote className="absolute right-6 top-6 h-10 w-10 text-primary/15" />
                <blockquote className="relative text-heading-sm font-medium leading-relaxed text-foreground">
                  &ldquo;One screen now shows the whole environment at a glance, and issues are caught and cleared before they interrupt daily operations.&rdquo;
                </blockquote>
                <figcaption className="relative mt-4 text-body-xs text-muted-foreground">The bottom line for {company.name}&apos;s IT operations</figcaption>
              </figure>

              <div className="mt-12">
                <Link href="/resources/success-stories" className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-2.5 text-body-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary">
                  <ArrowLeft className="h-3.5 w-3.5" /> Back to all success stories
                </Link>
              </div>
            </section>
          </article>
        </div>
      </div>
      </div>
    </>
  );
}
