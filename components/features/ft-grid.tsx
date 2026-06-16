"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { ArrowRight, Search, Activity, Headset, ChevronDown, type LucideIcon } from "lucide-react";
import { allFeatures, categories, type ProductSwitch } from "./features-data";
import { HeroOrbs, AnimatedBadge, FadeUp } from "@/components/hero-effects";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const productMeta: Record<ProductSwitch, { label: string; icon: LucideIcon }> = {
  observeops: { label: "ObserveOps", icon: Activity },
  serviceops: { label: "ServiceOps", icon: Headset },
};

const dropdownVariants = {
  hidden: { opacity: 0, y: -4, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const MAX_PRIMARY = 3;

function slugify(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export function FtGrid() {
  const [product, setProduct] = useState<ProductSwitch>("observeops");
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [isStuck, setIsStuck] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const moreRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => setIsStuck(!e.isIntersecting), { threshold: 0 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) setMoreOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const productCategories = categories.filter((c) => c.product === product);
  const allTags = ["All", ...productCategories.map((c) => c.name)];
  const primaryTags = allTags.slice(0, MAX_PRIMARY + 1);
  const moreTags = allTags.slice(MAX_PRIMARY + 1);
  const activeIsMore = moreTags.includes(activeCategory);

  // All features for current product (search-filtered only, no category filter)
  const filtered = allFeatures.filter((f) => {
    if (f.product !== product) return false;
    if (search && !f.title.toLowerCase().includes(search.toLowerCase()) && !f.desc.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const pillBase = "rounded-lg px-3.5 py-1.5 text-[12.5px] font-medium transition-colors";
  const pillActive = "bg-primary text-primary-foreground";
  const pillIdle = "border border-border/60 bg-card text-muted-foreground hover:border-border hover:text-foreground";

  // Group by category — always show all categories
  const grouped = productCategories
    .map((c) => ({
      ...c,
      features: filtered.filter((f) => f.category === c.name),
    }))
    .filter((g) => g.features.length > 0);

  // Track active section on scroll via IntersectionObserver
  useEffect(() => {
    if (grouped.length === 0) return;
    const sectionEls = grouped.map((g) => document.getElementById(`ft-cat-${slugify(g.name)}`)).filter(Boolean) as HTMLElement[];
    if (sectionEls.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        if (isScrolling.current) return;
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id.replace("ft-cat-", "");
            const cat = grouped.find((g) => slugify(g.name) === id);
            if (cat) setActiveCategory(cat.name);
            break;
          }
        }
      },
      { rootMargin: "-140px 0px -60% 0px", threshold: 0 }
    );

    sectionEls.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [grouped]);

  // Scroll to section on tab click
  const scrollTo = useCallback((tag: string) => {
    setActiveCategory(tag);
    const offset = 140; // navbar (56px) + filter bar (~80px) + gap
    if (tag === "All") {
      const box = document.getElementById("ft-categories-box");
      if (box) {
        isScrolling.current = true;
        const y = box.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: y, behavior: "smooth" });
        setTimeout(() => { isScrolling.current = false; }, 800);
      }
      return;
    }
    const el = document.getElementById(`ft-cat-${slugify(tag)}`);
    if (el) {
      isScrolling.current = true;
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setTimeout(() => { isScrolling.current = false; }, 800);
    }
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative z-10 overflow-hidden py-24 lg:py-32">
        <HeroOrbs />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <FadeUp delay={100}>
              <div className="flex justify-center">
                <AnimatedBadge text="Features" />
              </div>
            </FadeUp>
            <FadeUp delay={250}>
              <h1 className="mt-6 text-[clamp(2.2rem,5.5vw,4.75rem)] font-bold leading-[1.05] tracking-tight">
                Platform Features
              </h1>
            </FadeUp>
            <FadeUp delay={400}>
              <p className="mx-auto mt-5 max-w-2xl text-body-md text-muted-foreground">
                Explore the complete set of capabilities across ObserveOps and ServiceOps.
                From network monitoring to service desk automation — everything you need in one platform.
              </p>
            </FadeUp>

            {/* Product switch — homepage style */}
            <FadeUp delay={550}>
              <div className="mt-10 flex justify-center">
                <div className="inline-flex items-center rounded-lg border border-border/60 p-1 bg-white">
                  {(Object.keys(productMeta) as ProductSwitch[]).map((key) => {
                    const meta = productMeta[key];
                    const MetaIcon = meta.icon;
                    const isActive = product === key;
                    return (
                      <button
                        key={key}
                        onClick={() => { setProduct(key); setActiveCategory("All"); }}
                        className={`flex items-center gap-2 rounded-md px-5 py-2.5 text-label-md transition-all ${
                          isActive
                            ? "bg-white text-foreground shadow-md ring-1 ring-primary/40"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <MetaIcon className={`h-4 w-4 transition-colors duration-300 ${isActive ? "text-primary" : ""}`} />
                        {meta.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <div ref={sentinelRef} className="h-0" />

      {/* Sticky filter bar */}
      <div className={`sticky top-14 z-20 py-4 transition-all duration-200 ${isStuck ? "border-b border-border bg-background/80 backdrop-blur-md" : ""}`}>
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="flex flex-wrap items-center gap-2">

            {/* Category pills + More dropdown */}
            <div className="flex flex-wrap items-center gap-1.5">
              {primaryTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => scrollTo(tag)}
                  className={`${pillBase} ${activeCategory === tag || (tag === "All" && !productCategories.some((c) => c.name === activeCategory)) ? pillActive : pillIdle}`}
                >
                  {tag}
                  {tag !== "All" && (
                    <span className="ml-1.5 text-[11px] opacity-60">
                      {productCategories.find((c) => c.name === tag)?.count}
                    </span>
                  )}
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
                    {activeIsMore ? activeCategory : "More Categories"}
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
                              scrollTo(tag);
                              setMoreOpen(false);
                            }}
                            className={`flex w-full items-center px-4 py-2.5 text-left text-[13px] transition-colors hover:bg-muted/60 ${
                              activeCategory === tag
                                ? "font-semibold text-primary"
                                : "text-foreground"
                            }`}
                          >
                            {tag}
                            <span className="ml-auto text-[11px] text-muted-foreground">
                              {productCategories.find((c) => c.name === tag)?.count}
                            </span>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* Spacer */}
            <div className="flex-1" />

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground/60" />
              <input
                type="text"
                placeholder="Search features..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-[34px] w-[195px] rounded-lg border border-border/60 bg-background pl-9 pr-4 text-[12.5px] text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-ring/30 lg:w-[215px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Feature sections — single connected box, all categories */}
      <section className="relative pt-10 pb-20">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div id="ft-categories-box" className="relative z-0 rounded-2xl border border-border/60 [overflow:clip] bg-card divide-y divide-border/40">
            {grouped.map((group) => (
              <div key={group.name} id={`ft-cat-${slugify(group.name)}`} className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left — sticky category */}
                <div className="lg:sticky lg:top-[140px] lg:self-start p-8 lg:p-10 z-0">
                  <h2 className="flex items-center gap-3 text-heading-lg text-foreground">
                    {group.name}
                    <span className="rounded-full border border-primary/20 bg-primary/5 px-2.5 py-0.5 text-label-sm text-primary">
                      {group.features.length}
                    </span>
                  </h2>
                  <p className="mt-2 text-body-xs text-muted-foreground">
                    {product === "observeops" ? "Observability" : "Service Management"} capabilities for {group.name.toLowerCase()}.
                  </p>
                </div>

                {/* Right — connected feature cards */}
                <div className="divide-y divide-border/40 border-t lg:border-t-0 lg:border-l border-border/40">
                  {group.features.map((f) => {
                    const Icon = f.icon;
                    return (
                      <Link
                        key={f.slug}
                        href={`/features/${f.slug}`}
                        className="group/card flex items-start gap-5 px-6 py-6 lg:px-8 lg:py-7 transition-colors hover:bg-muted/30"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover/card:bg-primary/20">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-[15px] font-semibold leading-snug text-foreground group-hover/card:text-primary transition-colors">
                            {f.title}
                          </h3>
                          <p className="mt-1 text-body-xs text-muted-foreground line-clamp-2">
                            {f.desc}
                          </p>
                        </div>
                        <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground/30 transition-all group-hover/card:translate-x-0.5 group-hover/card:text-primary" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
