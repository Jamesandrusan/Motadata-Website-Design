"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, List } from "lucide-react";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { motion } from "framer-motion";
import { HeroOrbs, AnimatedBadge, FadeUp } from "@/components/hero-effects";

/* ── Types ── */

export interface TocItem {
  id: string;
  title: string;
  level?: number;
}

export interface RelatedTerm {
  term: string;
  slug: string;
}

export interface GlossaryDetailData {
  slug: string;
  term: string;
  intro: string;
  toc: TocItem[];
  content: string;
  relatedTerms?: RelatedTerm[];
}

/* ── TOC sidebar ── */

function GlossaryToc({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    for (const item of items) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [items]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="rounded-xl border bg-card p-5">
      <div className="flex items-center gap-2 text-[13px] font-semibold text-foreground">
        <List className="h-4 w-4" />
        Table of Contents
      </div>
      <ul className="mt-4 space-y-1">
        {items.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => handleClick(item.id)}
              className={`block w-full text-left rounded-md px-3 py-1.5 text-[12px] leading-snug transition-colors ${
                (item.level ?? 1) > 1 ? "pl-6" : ""
              } ${
                activeId === item.id
                  ? "bg-muted font-medium text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/* ── Rich content styles ── */

const richContentStyles = `
  [&>p]:mb-5 [&>p]:text-[15px] [&>p]:leading-[1.8] [&>p]:text-muted-foreground
  [&>h2]:mb-4 [&>h2]:mt-12 [&>h2]:text-xl [&>h2]:font-bold [&>h2]:tracking-tight [&>h2]:text-foreground [&>h2]:scroll-mt-24
  [&>h3]:mb-3 [&>h3]:mt-8 [&>h3]:text-lg [&>h3]:font-semibold [&>h3]:text-foreground [&>h3]:scroll-mt-24
  [&>ul]:mb-5 [&>ul]:ml-6 [&>ul]:list-disc [&>ul]:space-y-2
  [&>ul>li]:text-[15px] [&>ul>li]:leading-[1.8] [&>ul>li]:text-muted-foreground
  [&>ol]:mb-5 [&>ol]:ml-6 [&>ol]:list-decimal [&>ol]:space-y-2
  [&>ol>li]:text-[15px] [&>ol>li]:leading-[1.8] [&>ol>li]:text-muted-foreground
  [&_strong]:font-semibold [&_strong]:text-foreground
`;

/* ── Main component ── */

export function GlossaryDetail({ data }: { data: GlossaryDetailData }) {
  return (
    <>
      {/* Hero */}
      <section className="relative z-10 overflow-hidden py-24 lg:py-32">
        <HeroOrbs />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
          <FadeUp delay={50}>
            <Link
              href="/resources/glossary"
              className="inline-flex items-center gap-1.5 text-body-xs text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to IT Glossary
            </Link>
          </FadeUp>
          <div className="mx-auto max-w-3xl text-center mt-8">
            <FadeUp delay={100}>
              <div className="flex justify-center">
                <AnimatedBadge text="IT Resources" />
              </div>
            </FadeUp>
            <FadeUp delay={250}>
              <h1 className="mt-6 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-tight">
                {data.term}
              </h1>
            </FadeUp>
            <FadeUp delay={400}>
              <p className="mx-auto mt-5 max-w-2xl text-body-md text-muted-foreground">
                {data.intro}
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Content + TOC */}
      <article className="relative z-10">
        <div className="mx-auto w-full max-w-7xl px-6 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
              {/* Left: content */}
              <div>
                <div
                  className={richContentStyles}
                  dangerouslySetInnerHTML={{ __html: data.content }}
                />

                {/* CTA — orange */}
                <div
                  className="group relative my-8 overflow-hidden rounded-2xl p-8 text-white"
                  style={{ background: "linear-gradient(135deg, hsl(var(--gradient-from)), hsl(var(--gradient-to)))" }}
                >
                  <DottedGlowBackground
                    className="opacity-0 transition-opacity duration-500 group-hover:opacity-50"
                    gap={14} radius={1.8} opacity={0.6} color="rgba(255,255,255,0.3)"
                  />
                  <div className="relative z-10">
                    <h3 className="text-heading-md sm:text-2xl">Explore More IT Terms</h3>
                    <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/50">
                      Browse our comprehensive IT glossary to learn more about technology terminology.
                    </p>
                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      <Link href="/resources/glossary" className="inline-flex h-11 items-center gap-2 rounded-xl bg-white px-6 text-label-md text-foreground transition-opacity hover:bg-white/90">
                        Back to IT Glossary <ArrowRight className="h-4 w-4" />
                      </Link>
                      <Link href="/contact" className="inline-flex h-11 items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 text-label-md text-white transition-opacity hover:bg-white/20">
                        Contact Us <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* CTA — black */}
                <div className="group relative my-8 overflow-hidden rounded-2xl bg-[#111] p-8 text-white">
                  <DottedGlowBackground
                    className="opacity-0 transition-opacity duration-500 group-hover:opacity-50"
                    gap={14} radius={1.8} opacity={0.6} color="rgba(255,255,255,0.3)"
                  />
                  <div className="relative z-10">
                    <h3 className="text-heading-md sm:text-2xl">Explore More IT Terms</h3>
                    <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/50">
                      Browse our comprehensive IT glossary to learn more about technology terminology.
                    </p>
                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      <Link href="/resources/glossary" className="inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-6 text-label-md text-primary-foreground transition-opacity hover:opacity-90">
                        Back to IT Glossary <ArrowRight className="h-4 w-4" />
                      </Link>
                      <Link href="/contact" className="inline-flex h-11 items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 text-label-md text-white transition-opacity hover:bg-white/20">
                        Contact Us <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* CTA — white */}
                <div className="group relative my-8 overflow-hidden rounded-2xl border border-border/60 bg-muted/30 p-8 text-foreground">
                  <DottedGlowBackground
                    className="opacity-0 transition-opacity duration-500 group-hover:opacity-50"
                    gap={14} radius={1.8} opacity={0.6}
                  />
                  <div className="relative z-10">
                    <h3 className="text-heading-md sm:text-2xl">Explore More IT Terms</h3>
                    <p className="mt-3 max-w-lg text-body-xs text-muted-foreground">
                      Browse our comprehensive IT glossary to learn more about technology terminology.
                    </p>
                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      <Link href="/resources/glossary" className="inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-6 text-label-md text-primary-foreground transition-opacity hover:opacity-90">
                        Back to IT Glossary <ArrowRight className="h-4 w-4" />
                      </Link>
                      <Link href="/contact" className="inline-flex h-11 items-center gap-2 rounded-xl border border-border/60 bg-card px-6 text-label-md text-foreground transition-opacity hover:bg-muted">
                        Contact Us <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: sticky TOC */}
              <aside className="hidden lg:block">
                <div className="sticky top-20 space-y-6">
                  <GlossaryToc items={data.toc} />
                </div>
              </aside>
            </div>
          </motion.div>
        </div>
      </article>

      {/* Related Terms */}
      {data.relatedTerms && data.relatedTerms.length > 0 && (
        <section className="relative z-10">
          <div className="mx-auto w-full max-w-7xl px-6 pb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-heading-lg">Related Terms</h2>
              <p className="mt-2 text-body-xs text-muted-foreground">
                Continue learning with these related glossary terms
              </p>
            </motion.div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {data.relatedTerms.map((item) => (
                <Link
                  key={item.slug}
                  href={`/resources/glossary/${item.slug}`}
                  className="group flex items-center justify-between rounded-xl border border-border bg-card px-5 py-4 transition-colors hover:border-primary/40 hover:bg-muted/30"
                >
                  <span className="text-label-md text-foreground transition-colors group-hover:text-primary">
                    {item.term}
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground/40 transition-all group-hover:translate-x-0.5 group-hover:text-primary" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
