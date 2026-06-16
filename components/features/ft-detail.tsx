"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ChevronDown, Quote, Lightbulb } from "lucide-react";
import { getFeatureBySlug, getRelatedFeatures } from "./features-data";
import { featureContentMap, type Interstitial } from "./ft-detail-content";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";

export function FtDetail({ slug }: { slug: string }) {
  const feature = getFeatureBySlug(slug)!;
  const Icon = feature.icon;
  const content = featureContentMap[slug];
  const related = content
    ? content.relatedSlugs.map((s) => getFeatureBySlug(s)).filter(Boolean)
    : getRelatedFeatures(feature, 6);

  const [activeSection, setActiveSection] = useState("");
  const isScrolling = useRef(false);

  // If no rich content, render a default layout
  if (!content) return <FtDetailDefault slug={slug} />;

  /* ── Scroll spy for TOC highlight ── */
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const ids = [...content.sections.map((s) => s.id), "faqs"];
    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrolling.current) return;
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-100px 0px -60% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [content.sections]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    isScrolling.current = true;
    setActiveSection(id);
    const y = el.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top: y, behavior: "smooth" });
    setTimeout(() => { isScrolling.current = false; }, 800);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative z-10 pt-8 pb-10">
        <div className="mx-auto w-full max-w-7xl px-6">
          <Link
            href="/features"
            className="inline-flex items-center gap-1.5 text-body-xs text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All Features
          </Link>

          <div className="mt-8 max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-label-sm text-primary">
                {feature.category}
              </span>
            </div>
            <h1 className="text-display-md lg:text-5xl">
              {feature.title}
            </h1>
            <p className="mt-5 text-body-lg text-muted-foreground">
              {content.heroDesc}
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-6 text-label-md text-primary-foreground transition-opacity hover:opacity-90"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main content: left TOC + right blog */}
      <section className="relative bg-background pb-20">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="flex gap-10 pt-6">

            {/* Left sidebar — sticky */}
            <aside className="hidden lg:block w-64 shrink-0">
              <div className="sticky top-[80px] space-y-8">
                {/* Table of Contents */}
                <div>
                  <p className="mb-3 text-overline text-muted-foreground/50">
                    Table of Contents
                  </p>
                  <nav className="space-y-0.5">
                    {content.sections.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => scrollTo(s.id)}
                        className={`block w-full text-left rounded-lg px-3 py-2 text-sm transition-colors ${
                          activeSection === s.id
                            ? "bg-primary/5 text-primary font-medium"
                            : "text-muted-foreground hover:bg-muted/40 hover:text-foreground"
                        }`}
                      >
                        {s.title}
                      </button>
                    ))}
                    {content.faqs.length > 0 && (
                      <button
                        onClick={() => scrollTo("faqs")}
                        className={`block w-full text-left rounded-lg px-3 py-2 text-sm transition-colors ${
                          activeSection === "faqs"
                            ? "bg-primary/5 text-primary font-medium"
                            : "text-muted-foreground hover:bg-muted/40 hover:text-foreground"
                        }`}
                      >
                        FAQs
                      </button>
                    )}
                  </nav>
                </div>

                {/* Related Topics */}
                <div>
                  <p className="mb-3 text-overline text-muted-foreground/50">
                    Related Topics
                  </p>
                  <nav className="space-y-0.5">
                    {related.map((f) => f && (
                      <Link
                        key={f.slug}
                        href={`/features/${f.slug}`}
                        className="block rounded-lg px-3 py-2 text-body-xs text-muted-foreground transition-colors hover:bg-muted/40 hover:text-primary"
                      >
                        {f.title}
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
            </aside>

            {/* Right — blog content */}
            <div className="min-w-0 flex-1 border-l border-border/40 pl-10">
              {content.sections.map((section, i) => (
                <div key={section.id}>
                  <div id={section.id} className={`pb-10 scroll-mt-24 ${i > 0 ? "pt-10 border-t border-border/40" : ""}`}>
                    <h2 className="text-heading-lg text-foreground mb-6">
                      {section.title}
                    </h2>
                    <div
                      className="prose-detail"
                      dangerouslySetInnerHTML={{ __html: section.body }}
                    />
                  </div>

                  {/* Interstitial after this section */}
                  {content.interstitials?.[i] && (
                    <InterstitialBlock data={content.interstitials[i]} />
                  )}
                </div>
              ))}

              {/* FAQs */}
              {content.faqs.length > 0 && (
                <div id="faqs" className="pt-10 pb-10 border-t border-border/40 scroll-mt-24">
                  <h2 className="text-heading-lg text-foreground mb-6">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-0 divide-y divide-border/40 rounded-xl border border-border/40 overflow-hidden">
                    {content.faqs.map((faq, i) => (
                      <FaqAccordion key={i} q={faq.q} a={faq.a} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10">
        <div className="mx-auto w-full max-w-7xl px-6 py-24">
          <div
            className="group relative overflow-hidden rounded-3xl px-8 py-16 text-center text-white sm:px-16 sm:py-20"
            style={{ background: "linear-gradient(135deg, hsl(var(--gradient-from)), hsl(var(--gradient-to)))" }}
          >
            <DottedGlowBackground
              className="opacity-0 transition-opacity duration-500 group-hover:opacity-50"
              gap={14}
              radius={1.8}
              opacity={0.6}
              color="rgba(255,255,255,0.4)"
            />
            <div className="relative z-10">
              <h2 className="text-display-md">
                Ready to implement {feature.title}?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/60">
                Discover how Motadata AIOps can help you monitor your infrastructure in real-time and respond to issues instantly.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#"
                  className="inline-flex h-12 items-center gap-2 rounded-xl bg-white px-6 text-label-md text-foreground transition-colors hover:bg-white/90"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href="/features"
                  className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 text-label-md text-white transition-colors hover:bg-white/20"
                >
                  View All Features
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ── Interstitial break elements ── */
function InterstitialBlock({ data }: { data: Interstitial }) {
  if (data.type === "stats") {
    return (
      <div className="group relative my-2 overflow-hidden rounded-xl border border-primary/40 bg-primary/[0.03] p-6">
        <DottedGlowBackground className="opacity-0 transition-opacity duration-500 group-hover:opacity-100" gap={18} radius={1} opacity={0.3} />
        <div className="relative z-10 grid grid-cols-3 divide-x divide-border/40">
          {data.items.map((item, i) => (
            <div key={i} className="px-4 text-center first:pl-0 last:pr-0">
              <p className="text-heading-lg text-primary">{item.value}</p>
              <p className="mt-1 text-caption text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (data.type === "testimonial") {
    return (
      <div className="group relative my-2 overflow-hidden rounded-xl border border-primary/40 bg-primary/[0.03] p-6">
        <DottedGlowBackground className="opacity-0 transition-opacity duration-500 group-hover:opacity-100" gap={18} radius={1} opacity={0.3} />
        <div className="relative z-10">
          <Quote className="h-5 w-5 text-primary/40 mb-3" />
          <p className="text-sm leading-relaxed text-foreground/80 italic">
            &ldquo;{data.quote}&rdquo;
          </p>
          <div className="mt-4 flex items-center gap-2">
            <div className="h-px flex-1 bg-border/40" />
            <p className="text-caption text-muted-foreground shrink-0">
              {data.author} &middot; {data.role}
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (data.type === "callout") {
    return (
      <div className="group relative my-2 overflow-hidden rounded-xl border border-primary/40 bg-primary/[0.03] p-6">
        <DottedGlowBackground className="opacity-0 transition-opacity duration-500 group-hover:opacity-100" gap={18} radius={1} opacity={0.25} />
        <div className="relative z-10 flex items-start gap-3">
          <Lightbulb className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <div>
            <p className="text-label-md text-foreground">{data.title}</p>
            <p className="mt-2 text-body-xs text-muted-foreground">{data.body}</p>
          </div>
        </div>
      </div>
    );
  }

  if (data.type === "cta") {
    const v = data.variant || "black";
    const wrapperClass =
      v === "black"
        ? "bg-[#111] text-white"
        : v === "orange"
          ? "text-white"
          : "bg-muted/30 border border-border/60 text-foreground";
    const wrapperStyle =
      v === "orange"
        ? { background: "linear-gradient(135deg, hsl(var(--gradient-from)), hsl(var(--gradient-to)))" }
        : undefined;
    const dotColor = v === "white" ? undefined : "rgba(255,255,255,0.3)";
    const descClass = v === "white" ? "text-muted-foreground" : "text-white/50";
    const btnClass =
      v === "black"
        ? "bg-primary text-primary-foreground hover:opacity-90"
        : v === "orange"
          ? "bg-white text-foreground hover:bg-white/90"
          : "bg-primary text-primary-foreground hover:opacity-90";

    return (
      <div className={`group relative my-2 overflow-hidden rounded-2xl p-8 ${wrapperClass}`} style={wrapperStyle}>
        <DottedGlowBackground className="opacity-0 transition-opacity duration-500 group-hover:opacity-50" gap={14} radius={1.8} opacity={0.6} color={dotColor} />
        <div className="relative z-10">
          <h3 className="text-heading-md sm:text-2xl">{data.title}</h3>
          <p className={`mt-3 max-w-lg text-sm leading-relaxed ${descClass}`}>{data.body}</p>
          <div className="mt-6">
            <a
              href={data.buttonHref || "#"}
              className={`inline-flex h-11 items-center gap-2 rounded-xl px-6 text-label-md transition-opacity ${btnClass}`}
            >
              {data.buttonText || "Learn More"}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

/* ── FAQ accordion item ── */
function FaqAccordion({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen((o) => !o)}
        className="group flex w-full items-center justify-between px-5 py-5 text-left transition-colors hover:bg-muted/20"
      >
        <span className="text-label-md pr-4 transition-colors group-hover:text-primary">
          {q}
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 transition-transform duration-300 ${
            open ? "rotate-180 text-primary" : "text-muted-foreground"
          }`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5">
          <p className="text-body-xs text-muted-foreground">{a}</p>
        </div>
      )}
    </div>
  );
}

/* ── Default detail layout for features without rich content ── */
function FtDetailDefault({ slug }: { slug: string }) {
  const feature = getFeatureBySlug(slug)!;
  const Icon = feature.icon;
  const related = getRelatedFeatures(feature, 6);

  return (
    <>
      {/* Hero */}
      <section className="relative z-10 pt-8 pb-10">
        <div className="mx-auto w-full max-w-7xl px-6">
          <Link
            href="/features"
            className="inline-flex items-center gap-1.5 text-body-xs text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All Features
          </Link>

          <div className="mt-8 max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-label-sm text-primary">
                {feature.category}
              </span>
            </div>
            <h1 className="text-display-md lg:text-5xl">
              {feature.title}
            </h1>
            <p className="mt-5 text-body-lg text-muted-foreground">
              {feature.desc}
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-6 text-label-md text-primary-foreground transition-opacity hover:opacity-90"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Content with sidebar */}
      <section className="relative pb-20">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="flex gap-10 pt-6">

            {/* Left sidebar */}
            <aside className="hidden lg:block w-64 shrink-0">
              <div className="sticky top-[80px] space-y-8">
                <div>
                  <p className="mb-3 text-overline text-muted-foreground/50">
                    Related Topics
                  </p>
                  <nav className="space-y-0.5">
                    {related.map((f) => (
                      <Link
                        key={f.slug}
                        href={`/features/${f.slug}`}
                        className="block rounded-lg px-3 py-2 text-body-xs text-muted-foreground transition-colors hover:bg-muted/40 hover:text-primary"
                      >
                        {f.title}
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
            </aside>

            {/* Right — content */}
            <div className="min-w-0 flex-1">
              <div className="rounded-2xl border border-border/60 bg-card overflow-hidden">
                <div className="px-8 py-10 lg:px-10 lg:py-12">
                  <div className="flex items-start gap-5 mb-8">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-heading-md">Key Highlights</h2>
                      <p className="mt-1 text-body-xs text-muted-foreground">Core capabilities of {feature.title}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <p className="text-body-xs text-muted-foreground">{feature.desc}</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <p className="text-body-xs text-muted-foreground">
                        Seamlessly integrates with your existing {feature.product === "observeops" ? "monitoring" : "service management"} workflows and tools.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <p className="text-body-xs text-muted-foreground">
                        Built with AI-native intelligence for proactive {feature.product === "observeops" ? "anomaly detection and resolution" : "automation and optimization"}.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <p className="text-body-xs text-muted-foreground">
                        Enterprise-grade scalability designed for organizations of any size.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10">
        <div className="mx-auto w-full max-w-7xl px-6 py-24">
          <div
            className="group relative overflow-hidden rounded-3xl px-8 py-16 text-center text-white sm:px-16 sm:py-20"
            style={{ background: "linear-gradient(135deg, hsl(var(--gradient-from)), hsl(var(--gradient-to)))" }}
          >
            <DottedGlowBackground
              className="opacity-0 transition-opacity duration-500 group-hover:opacity-50"
              gap={14}
              radius={1.8}
              opacity={0.6}
              color="rgba(255,255,255,0.4)"
            />
            <div className="relative z-10">
              <h2 className="text-display-md">
                See It in Action
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/60">
                Experience {feature.title} and the full Motadata platform with a personalized demo.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#"
                  className="inline-flex h-12 items-center gap-2 rounded-xl bg-white px-6 text-label-md text-foreground transition-colors hover:bg-white/90"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href="/features"
                  className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 text-label-md text-white transition-colors hover:bg-white/20"
                >
                  View All Features
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
