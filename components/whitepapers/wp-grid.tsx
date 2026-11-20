"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, FileText, Search, ChevronDown } from "lucide-react";
import Link from "next/link";
import { CtaSection } from "@/components/cta-section";
import { whitepapers } from "@/lib/whitepapers-data";

/* ── Data ── */

// Whitepaper data lives in lib/whitepapers-data.ts

/* ── Filter categories ── */

const wpTags = ["All Whitepapers", ...Array.from(new Set(whitepapers.map((w) => w.tag)))];
const PRIMARY_TAG_COUNT = 4;

/* ── Main grid ── */

export function WpGrid() {
  const [activeTag, setActiveTag] = useState("All Whitepapers");
  const [search, setSearch] = useState("");
  const [moreOpen, setMoreOpen] = useState(false);
  const [isStuck, setIsStuck] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const primaryTags = wpTags.slice(0, PRIMARY_TAG_COUNT);
  const moreTags = wpTags.slice(PRIMARY_TAG_COUNT);
  const activeIsMore = moreTags.some((t) => t === activeTag);

  useEffect(() => {
    function onMouseDown(e: MouseEvent) {
      if (moreRef.current && !moreRef.current.contains(e.target as Node))
        setMoreOpen(false);
    }
    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, []);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => setIsStuck(!e.isIntersecting), { threshold: 0 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const pillBase =
    "rounded-lg px-3.5 py-1.5 text-[12.5px] font-medium transition-colors";
  const pillActive = "bg-primary text-primary-foreground";
  const pillIdle =
    "border border-border/60 bg-card text-muted-foreground hover:border-border hover:text-foreground";

  const dropdownVariants = {
    hidden: { opacity: 0, y: 6, scale: 0.96 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  const filtered = whitepapers.filter((wp) => {
    const matchTag = activeTag === "All Whitepapers" || wp.tag === activeTag;
    const matchSearch = search === "" ||
      wp.title.toLowerCase().includes(search.toLowerCase()) ||
      wp.desc.toLowerCase().includes(search.toLowerCase());
    return matchTag && matchSearch;
  });

  return (
    <>
      <div ref={sentinelRef} className="h-0" />
      {/* Filter bar */}
      <section className={`sticky top-14 z-20 py-4 transition-all duration-200 ${isStuck ? "border-b border-border bg-background/80 backdrop-blur-md" : ""}`}>
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="flex flex-wrap items-center gap-2">

            <div className="flex flex-wrap items-center gap-1.5">
              {primaryTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`${pillBase} ${activeTag === tag ? pillActive : pillIdle}`}
                >
                  {tag}
                </button>
              ))}

              {moreTags.length > 0 && (
                <div className="relative" ref={moreRef}>
                  <button
                    onClick={() => setMoreOpen((o) => !o)}
                    className={`flex items-center gap-1 ${pillBase} ${
                      activeIsMore ? pillActive : pillIdle
                    }`}
                  >
                    {activeIsMore ? activeTag : "More Categories"}
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        moreOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {moreOpen && (
                      <motion.div
                        key="more-dropdown"
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 top-full z-50 mt-2 min-w-[172px] overflow-hidden rounded-xl border border-border/60 bg-popover shadow-lg"
                      >
                        {moreTags.map((tag) => (
                          <button
                            key={tag}
                            onClick={() => {
                              setActiveTag(tag);
                              setMoreOpen(false);
                            }}
                            className={`flex w-full items-center px-4 py-2.5 text-left text-[13px] transition-colors hover:bg-muted/60 ${
                              activeTag === tag
                                ? "font-semibold text-primary"
                                : "text-foreground"
                            }`}
                          >
                            {tag}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>

            <div className="flex-1" />

            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground/60" />
              <input
                type="text"
                placeholder="Search whitepapers..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-[34px] w-[195px] rounded-lg border border-border/60 bg-background pl-9 pr-4 text-[12.5px] text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-ring/30 lg:w-[215px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 pt-10 pb-8">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((wp) => (
              <div
                key={wp.id}
                className="group/card flex flex-col rounded-2xl border border-border bg-card overflow-hidden transition-colors hover:border-primary/40"
              >
                {/* Card content */}
                <div className="flex flex-1 flex-col p-8">
                  {/* Icon */}
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover/card:bg-primary/20">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>

                  {/* Tag */}
                  <span className="mb-2 text-caption text-muted-foreground">
                    {wp.tag}
                  </span>

                  {/* Content */}
                  <h3 className="text-heading-sm leading-snug">{wp.title}</h3>
                  <p className="mt-3 text-body-xs text-muted-foreground leading-relaxed">{wp.desc}</p>
                </div>

                {/* CTA — full width, flush to card edges */}
                <Link
                  href={`/resources/whitepapers/${wp.id}`}
                  className="flex w-full items-center justify-between px-6 border-t border-primary/20 py-3 text-label-md text-primary transition-opacity duration-200 lg:opacity-0 lg:group-hover/card:opacity-100 lg:focus-visible:opacity-100"
                >
                  Read more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/card:translate-x-0.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaSection />
    </>
  );
}
