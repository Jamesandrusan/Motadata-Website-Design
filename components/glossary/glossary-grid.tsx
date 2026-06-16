"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";
import { CtaSection } from "@/components/cta-section";
import {
  glossaryTerms,
  ALPHABET,
  getAvailableLetters,
  groupByLetter,
} from "./glossary-data";

export function GlossaryGrid() {
  const [activeLetter, setActiveLetter] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [isStuck, setIsStuck] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const availableLetters = getAvailableLetters(glossaryTerms);

  /* Sticky detection */
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => setIsStuck(!e.isIntersecting),
      { threshold: 0 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  /* Filter terms */
  const filtered = search
    ? glossaryTerms.filter((t) =>
        t.term.toLowerCase().includes(search.toLowerCase())
      )
    : activeLetter
      ? glossaryTerms.filter((t) => t.letter === activeLetter)
      : glossaryTerms;

  const grouped = groupByLetter(filtered);
  const sortedLetters = Object.keys(grouped).sort();

  /* Scroll to letter section */
  const scrollToLetter = useCallback((letter: string) => {
    setSearch("");
    setActiveLetter(null);
    requestAnimationFrame(() => {
      const el = sectionRefs.current[letter];
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 130;
        window.scrollTo({ top, behavior: "smooth" });
      }
    });
  }, []);

  const handleAll = () => {
    setActiveLetter(null);
    setSearch("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const pillActive = "bg-primary text-primary-foreground";
  const pillIdle =
    "border border-border/60 bg-card text-muted-foreground hover:border-border hover:text-foreground";
  const pillDisabled =
    "border border-border/30 bg-card text-muted-foreground/30 cursor-default";

  return (
    <>
      <div ref={sentinelRef} className="h-0" />

      {/* Sticky filter bar */}
      <section
        className={`sticky top-14 z-20 py-4 transition-all duration-200 ${
          isStuck
            ? "border-b border-border bg-background/80 backdrop-blur-md"
            : ""
        }`}
      >
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="flex items-center gap-1.5">
            <button
              onClick={handleAll}
              className={`shrink-0 rounded-lg px-3.5 py-1.5 text-[12.5px] font-medium transition-colors ${
                !activeLetter && !search
                  ? pillActive
                  : "border border-border/60 bg-card text-muted-foreground hover:border-border hover:text-foreground"
              }`}
            >
              All
            </button>

            <div className="flex items-center gap-[3px]">
              {ALPHABET.map((letter) => {
                const hasTerms = availableLetters.has(letter);
                const isActive = activeLetter === letter;
                return (
                  <button
                    key={letter}
                    onClick={() => hasTerms && scrollToLetter(letter)}
                    disabled={!hasTerms}
                    className={`flex h-8 w-8 items-center justify-center rounded-lg text-[12.5px] font-medium transition-colors ${
                      isActive
                        ? pillActive
                        : hasTerms
                          ? pillIdle
                          : pillDisabled
                    }`}
                  >
                    {letter}
                  </button>
                );
              })}
            </div>

            <div className="relative shrink-0 ml-auto">
              <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground/60" />
              <input
                type="text"
                placeholder="Search terms..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setActiveLetter(null);
                }}
                className="h-[34px] w-[180px] rounded-lg border border-border/60 bg-background pl-9 pr-4 text-[12.5px] text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-ring/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Glossary listing */}
      <section className="relative z-10 pt-10 pb-8">
        <div className="mx-auto w-full max-w-7xl px-6">
          {sortedLetters.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-lg font-semibold text-muted-foreground">
                No terms found
              </p>
              <p className="mt-2 text-body-xs text-muted-foreground/70">
                Try a different search or browse by letter.
              </p>
            </div>
          ) : (
            <div className="space-y-12">
              {sortedLetters.map((letter) => (
                <div
                  key={letter}
                  ref={(el) => {
                    sectionRefs.current[letter] = el;
                  }}
                  data-letter={letter}
                >
                  {/* Letter heading */}
                  <div className="mb-5 flex items-center gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-heading-sm text-primary">
                      {letter}
                    </span>
                    <div className="h-px flex-1 bg-border" />
                  </div>

                  {/* Terms grid */}
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                    {grouped[letter].map((item) => (
                      <Link
                        key={item.term}
                        href={`/resources/glossary/${item.slug}`}
                        className="group flex items-center justify-between rounded-xl border border-border bg-card px-5 py-3.5 transition-colors hover:border-primary/40 hover:bg-muted/30"
                      >
                        <span className="text-label-md text-foreground transition-colors group-hover:text-primary">
                          {item.term}
                        </span>
                        <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground/40 transition-all group-hover:translate-x-0.5 group-hover:text-primary" />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <CtaSection />
    </>
  );
}
