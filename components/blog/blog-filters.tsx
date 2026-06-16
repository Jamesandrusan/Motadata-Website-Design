"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Search, ArrowUpDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { BlogCategory } from "@/data/blog-posts";

/* How many categories to show as pills before "More Categories" */
const PRIMARY_COUNT = 4;

interface BlogFiltersProps {
  categories: BlogCategory[];
  activeCategory: BlogCategory | "All";
  onCategoryChange: (category: BlogCategory | "All") => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  sortOrder: "latest" | "oldest";
  onSortChange: (sort: "latest" | "oldest") => void;
}

export function BlogFilters({
  categories,
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  sortOrder,
  onSortChange,
}: BlogFiltersProps) {
  const [moreOpen, setMoreOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const [isStuck, setIsStuck] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);
  const sortRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const primaryCats = categories.slice(0, PRIMARY_COUNT);
  const moreCats = categories.slice(PRIMARY_COUNT);
  const activeIsMore = moreCats.some((c) => c === activeCategory);

  /* Close dropdowns on outside click */
  useEffect(() => {
    function onMouseDown(e: MouseEvent) {
      if (moreRef.current && !moreRef.current.contains(e.target as Node))
        setMoreOpen(false);
      if (sortRef.current && !sortRef.current.contains(e.target as Node))
        setSortOpen(false);
    }
    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, []);

  /* Detect sticky state */
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

  return (
    <>
    <div ref={sentinelRef} className="h-0" />
    <div className={`sticky top-14 z-20 py-4 transition-all duration-200 ${isStuck ? "border-b border-border bg-background/80 backdrop-blur-md" : ""}`}>
    <div className="mx-auto w-full max-w-7xl px-6">
      <div className="flex flex-wrap items-center gap-2">

        {/* ── Category pills ── */}
        <div className="flex flex-wrap items-center gap-1.5">
          {/* All Posts */}
          <button
            onClick={() => onCategoryChange("All")}
            className={`${pillBase} ${activeCategory === "All" ? pillActive : pillIdle}`}
          >
            All Posts
          </button>

          {/* Primary (pinned) categories */}
          {primaryCats.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`${pillBase} ${activeCategory === cat ? pillActive : pillIdle}`}
            >
              {cat}
            </button>
          ))}

          {/* More Categories — only rendered when there are overflow categories */}
          {moreCats.length > 0 && (
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
                    {moreCats.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => {
                          onCategoryChange(cat);
                          setMoreOpen(false);
                        }}
                        className={`flex w-full items-center px-4 py-2.5 text-left text-[13px] transition-colors hover:bg-muted/60 ${
                          activeCategory === cat
                            ? "font-semibold text-primary"
                            : "text-foreground"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>

        {/* ── Spacer pushes sort + search to the right ── */}
        <div className="flex-1" />

        {/* ── Sort By ── */}
        <div className="relative" ref={sortRef}>
          <button
            onClick={() => setSortOpen((o) => !o)}
            className={`flex items-center gap-1.5 ${pillBase} ${pillIdle}`}
          >
            <ArrowUpDown className="h-3.5 w-3.5" />
            <span>
              Sort By:{" "}
              <span className="text-foreground">
                {sortOrder === "latest" ? "Latest" : "Oldest"}
              </span>
            </span>
            <ChevronDown
              className={`h-3.5 w-3.5 transition-transform duration-200 ${
                sortOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          <AnimatePresence>
            {sortOpen && (
              <motion.div
                key="sort-dropdown"
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.15 }}
                className="absolute right-0 top-full z-50 mt-2 min-w-[152px] overflow-hidden rounded-xl border border-border/60 bg-popover shadow-lg"
              >
                {(["latest", "oldest"] as const).map((opt) => (
                  <button
                    key={opt}
                    onClick={() => {
                      onSortChange(opt);
                      setSortOpen(false);
                    }}
                    className={`flex w-full items-center px-4 py-2.5 text-left text-[13px] transition-colors hover:bg-muted/60 ${
                      sortOrder === opt
                        ? "font-semibold text-primary"
                        : "text-foreground"
                    }`}
                  >
                    {opt === "latest" ? "Latest First" : "Oldest First"}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── Search ── */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground/60" />
          <input
            type="text"
            placeholder="Search blog posts..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="h-[34px] w-[195px] rounded-lg border border-border/60 bg-background pl-9 pr-4 text-[12.5px] text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-ring/30 lg:w-[215px]"
          />
        </div>

      </div>
    </div>
    </div>
    </>
  );
}
