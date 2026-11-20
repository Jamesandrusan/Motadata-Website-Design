"use client";

import Link from "next/link";
import { ArrowDown, ArrowLeft, ArrowRight, CheckCircle, FileText } from "lucide-react";
import { HeroOrbs, AnimatedBadge, FadeUp } from "@/components/hero-effects";
import { DownloadForm } from "@/components/resources/download-form";

/* Shared detail-page layout for gated resources (whitepapers, brochures):
   content on the left, download form pinned top-right and sticky on scroll. */

export type ResourceDetailProps = {
  back: { href: string; label: string };
  badge: string;
  title: string;
  desc: string;
  hook?: string;
  overview: string[];
  highlights: { title: string; items: string[] };
  chapters: { title: string; items: { title: string; desc: string }[] };
  audience: { title: string; items: string[] };
  form: { heading: string; buttonLabel: string };
  /* Mobile-only button under the intro that jumps down to the form (hidden at lg, where the form sits beside the title). */
  mobileCta?: string;
  related: { title: string; href: string; cta: string; items: { href: string; tag: string; title: string }[] };
};

export function ResourceDetail(p: ResourceDetailProps) {
  return (
    <>
      <section className="relative z-10 overflow-x-clip pt-8 pb-20 lg:pt-12">
        <HeroOrbs />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
          <FadeUp delay={50}>
            <Link
              href={p.back.href}
              className="group mb-6 inline-flex items-center gap-1.5 text-label-md text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
              {p.back.label}
            </Link>
          </FadeUp>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_420px] lg:gap-16">
            {/* Left — title + content */}
            <article className="min-w-0">
              <FadeUp delay={100}>
                <AnimatedBadge text={p.badge} />
              </FadeUp>
              <FadeUp delay={250}>
                <h1 className="mt-6 text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.08] tracking-tight">
                  {p.title}
                </h1>
              </FadeUp>
              <FadeUp delay={400}>
                <p className="mt-5 max-w-2xl text-body-md text-muted-foreground">{p.desc}</p>
              </FadeUp>
              {p.mobileCta && (
                <FadeUp delay={450}>
                  <a
                    href="#download"
                    className="group mt-7 inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-xl bg-primary text-label-md-strong text-primary-foreground shadow-sm shadow-primary/20 transition-all hover:opacity-95 hover:shadow-md hover:shadow-primary/25 active:scale-[0.99] sm:w-auto sm:px-8 lg:hidden"
                  >
                    {p.mobileCta}
                    <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                  </a>
                </FadeUp>
              )}

              {/* Hook — quiet pull quote, no box */}
              {p.hook && (
                <figure className="mt-10">
                  <blockquote className="max-w-2xl">
                    <p className="text-pretty text-[1.25rem] leading-[1.6] tracking-tight text-foreground/80 sm:text-[1.375rem]">
                      {p.hook}
                    </p>
                  </blockquote>
                </figure>
              )}

              {/* Overview */}
              <h2 className="mt-10 text-heading-lg">Overview</h2>
              <div className="mt-4 space-y-4">
                {p.overview.map((para, i) => (
                  <p key={i} className="text-body-sm text-muted-foreground leading-relaxed">{para}</p>
                ))}
              </div>

              {/* Highlights */}
              <h2 className="mt-10 text-heading-lg">{p.highlights.title}</h2>
              <ul className="mt-5 space-y-3">
                {p.highlights.items.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-body-sm">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              {/* What's inside — numbered */}
              <h2 className="mt-10 text-heading-lg">{p.chapters.title}</h2>
              <ol className="mt-8 grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
                {p.chapters.items.map((c, i) => (
                  <li key={c.title} className="flex gap-4">
                    <span className="w-9 shrink-0 text-[1.5rem] font-semibold leading-7 tabular-nums tracking-tight text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-label-lg leading-7">{c.title}</h3>
                      <p className="mt-1.5 text-body-xs leading-relaxed text-muted-foreground">{c.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>

              {/* Audience */}
              <h2 className="mt-10 text-heading-lg">{p.audience.title}</h2>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {p.audience.items.map((a) => (
                  <span key={a} className="inline-flex items-center rounded-full border border-border bg-card px-4 py-2 text-label-md">
                    {a}
                  </span>
                ))}
              </div>
            </article>

            {/* Right — download form, pinned beside the title and sticky on scroll */}
            <aside>
              <div className="lg:sticky lg:top-24">
                <FadeUp delay={350}>
                  <div id="download" className="scroll-mt-24 rounded-2xl border border-border bg-card p-6 shadow-xl sm:p-8">
                    <DownloadForm heading={p.form.heading} buttonLabel={p.form.buttonLabel} />
                  </div>
                </FadeUp>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related */}
      {p.related.items.length > 0 && (
        <section className="relative z-10 border-t border-border py-16">
          <div className="mx-auto w-full max-w-7xl px-6">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="text-heading-lg">{p.related.title}</h2>
              <Link href={p.related.href} className="inline-flex items-center gap-1.5 text-label-md text-primary hover:underline">
                View all <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
              {p.related.items.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="group flex flex-col rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary/40"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-caption text-muted-foreground">{r.tag}</span>
                  <h3 className="mt-1 text-label-lg">{r.title}</h3>
                  <span className="mt-4 inline-flex items-center gap-1 text-label-md text-primary">
                    {p.related.cta} <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
