"use client";

import { useState, useRef, useEffect } from "react";
import { Search, Download, X, CheckCircle, FileText, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

/* ── Data ── */

const industries = [
  "All Industries", "Technology", "Retail", "Telecom",
  "Enterprise Services", "Travel & Hospitality",
];

const PRIMARY_COUNT = 3;

const allCustomers = [
  {
    id: "passionfroot",
    name: "Passionfroot",
    logo: "/logos/success-stories/passionfroot.png",
    industry: "Technology",
    invertDark: true,
    quote: "What once took an hour to deploy a hotfix now takes just 15 minutes, and rolling back changes happens in seconds.",
  },
  {
    id: "replicate",
    name: "Replicate",
    logo: "/logos/success-stories/replicate.png",
    industry: "Technology",
    invertDark: true,
    quote: "With Motadata, Replicate achieved 99.9% uptime and reduced our mean time to recovery by over 70%.",
  },
  {
    id: "railway",
    name: "Railway",
    logo: "/logos/success-stories/railway.png",
    industry: "Technology",
    invertDark: true,
    quote: "Switching to Motadata transformed our workflow, cutting deployment times from 10 minutes to just 2 minutes.",
  },
  {
    id: "coca-cola",
    name: "Coca-Cola",
    logo: "/logos/success-stories/coca-cola.png",
    industry: "Retail",
    invertDark: true,
    quote: "Motadata helped us scale our infrastructure to handle global demand with zero downtime during peak seasons.",
  },
  {
    id: "flatfile",
    name: "Flatfile",
    logo: "/logos/success-stories/flatfile.png",
    industry: "Technology",
    invertDark: true,
    quote: "Flatfile builds reliable data infrastructure with Motadata's unified monitoring and intelligent alerting.",
  },
  {
    id: "bravado",
    name: "Bravado",
    logo: "/logos/success-stories/bravado.png",
    industry: "Technology",
    invertDark: true,
    quote: "Bravado migrated to Motadata and drove 80% improvement in system reliability and team productivity.",
  },
  {
    id: "radwin",
    name: "RADWIN",
    logo: "/logos/success-stories/radwin.svg",
    industry: "Telecom",
    invertDark: false,
    quote: "Motadata helped RADWIN scale wireless infrastructure monitoring across 50+ countries with zero blind spots.",
  },
  {
    id: "mcmahon",
    name: "McMahon Services",
    logo: "/logos/success-stories/mcmahon.png",
    industry: "Enterprise Services",
    invertDark: false,
    quote: "With Motadata, McMahon Services reduced IT incidents by 65% and improved service delivery SLAs by 40%.",
  },
  {
    id: "airtel",
    name: "Airtel",
    logo: "/logos/success-stories/airtel.png",
    industry: "Telecom",
    invertDark: false,
    quote: "Airtel uses Motadata to monitor millions of network endpoints in real-time, ensuring seamless connectivity nationwide.",
  },
  {
    id: "kopetro",
    name: "Kopetro",
    logo: "/logos/success-stories/kopetro.png",
    industry: "Travel & Hospitality",
    invertDark: false,
    quote: "Motadata enabled Kopetro to modernize their IT operations and achieve full visibility across all distributed systems.",
  },
];

const INITIAL_COUNT = 9;

/* ── Download Modal (same style as ebook) ── */

type Customer = typeof allCustomers[number];

function DownloadModal({ customer, onClose }: { customer: Customer; onClose: () => void }) {
  const [form, setForm] = useState({ name: "", email: "", company: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const validate = () => {
    const e: typeof errors = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        transition={{ type: "spring", stiffness: 400, damping: 32 }}
        className="relative w-full max-w-md rounded-2xl border border-border bg-card shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="p-6">
          {!submitted ? (
            <>
              <div className="mb-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-heading-sm">Download Success Story</h2>
                <p className="mt-1 text-body-xs text-muted-foreground">
                  Enter your details to download:{" "}
                  <span className="font-medium text-foreground">{customer.name} Success Story</span>
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="mb-1.5 block text-label-md">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={form.name}
                    onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: undefined }); }}
                    className={`w-full rounded-lg border px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 ${errors.name ? "border-red-400" : "border-border"}`}
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                </div>

                <div>
                  <label className="mb-1.5 block text-label-md">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: undefined }); }}
                    className={`w-full rounded-lg border px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 ${errors.email ? "border-red-400" : "border-border"}`}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                </div>

                <div>
                  <label className="mb-1.5 block text-label-md">Company Name</label>
                  <input
                    type="text"
                    placeholder="Your company name"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full rounded-lg border border-border px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div className="flex gap-3 pt-1">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 rounded-lg border border-border px-4 py-2.5 text-body-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-label-md text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    <Download className="h-4 w-4" />
                    Download PDF
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="py-4 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                <CheckCircle className="h-7 w-7 text-green-600" />
              </div>
              <h2 className="text-heading-sm">You&apos;re all set!</h2>
              <p className="mt-2 text-body-xs text-muted-foreground">
                A download link has been sent to{" "}
                <span className="font-medium text-foreground">{form.email}</span>.
              </p>
              <a
                href="#"
                className="mt-5 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-label-md text-primary-foreground transition-opacity hover:opacity-90"
                onClick={(e) => { e.preventDefault(); onClose(); }}
              >
                <Download className="h-4 w-4" />
                Open PDF
              </a>
              <p className="mt-3 text-caption text-muted-foreground">
                Didn&apos;t receive the email?{" "}
                <button className="text-primary underline-offset-2 hover:underline" onClick={() => setSubmitted(false)}>
                  Try again
                </button>
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Main grid ── */

export function SsGrid() {
  const [selected, setSelected] = useState<Customer | null>(null);
  const [activeIndustry, setActiveIndustry] = useState("All Industries");
  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [isStuck, setIsStuck] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const primaryIndustries = industries.slice(0, PRIMARY_COUNT);
  const moreIndustries = industries.slice(PRIMARY_COUNT);
  const activeIsMore = moreIndustries.some((i) => i === activeIndustry);

  /* Close dropdown on outside click */
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

  const filtered = allCustomers.filter((c) => {
    const matchIndustry = activeIndustry === "All Industries" || c.industry === activeIndustry;
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.quote.toLowerCase().includes(search.toLowerCase());
    return matchIndustry && matchSearch;
  });

  const visible = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);
  const hasMore = filtered.length > INITIAL_COUNT && !showAll;

  return (
    <>
      <div ref={sentinelRef} className="h-0" />
      {/* Sticky filter bar */}
      <div className={`sticky top-14 z-20 py-4 transition-all duration-200 ${isStuck ? "border-b border-border bg-background/80 backdrop-blur-md" : ""}`}>
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="flex flex-wrap items-center gap-2">

          {/* Category pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            {primaryIndustries.map((ind) => (
              <button
                key={ind}
                onClick={() => { setActiveIndustry(ind); setShowAll(false); }}
                className={`${pillBase} ${activeIndustry === ind ? pillActive : pillIdle}`}
              >
                {ind}
              </button>
            ))}

            {/* More Categories dropdown */}
            {moreIndustries.length > 0 && (
              <div className="relative" ref={moreRef}>
                <button
                  onClick={() => setMoreOpen((o) => !o)}
                  className={`flex items-center gap-1 ${pillBase} ${
                    activeIsMore ? pillActive : pillIdle
                  }`}
                >
                  {activeIsMore ? activeIndustry : "More Industries"}
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
                      {moreIndustries.map((ind) => (
                        <button
                          key={ind}
                          onClick={() => {
                            setActiveIndustry(ind);
                            setShowAll(false);
                            setMoreOpen(false);
                          }}
                          className={`flex w-full items-center px-4 py-2.5 text-left text-[13px] transition-colors hover:bg-muted/60 ${
                            activeIndustry === ind
                              ? "font-semibold text-primary"
                              : "text-foreground"
                          }`}
                        >
                          {ind}
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
              placeholder="Search customers..."
              value={search}
              onChange={(e) => { setSearch(e.target.value); setShowAll(false); }}
              className="h-[34px] w-[195px] rounded-lg border border-border/60 bg-background pl-9 pr-4 text-[12.5px] text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-ring/30 lg:w-[215px]"
            />
          </div>
          </div>
        </div>
      </div>

    <section className="relative z-10 pt-10 pb-16">
      <div className="mx-auto w-full max-w-7xl px-6">
        {/* Count */}
        <p className="mb-6 text-body-xs text-muted-foreground">
          Showing {visible.length} of {filtered.length} customers
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((c) => (
            <div
              key={c.id}
              className="group/card flex flex-col rounded-2xl border border-border bg-card overflow-hidden transition-colors hover:border-primary/40"
            >
              <div className="flex flex-1 flex-col p-8">
                {/* Logo */}
                <div className="mb-5 flex h-10 items-center">
                  <Image
                    src={c.logo}
                    alt={c.name}
                    width={200}
                    height={48}
                    className="h-9 w-auto max-w-[160px] object-contain object-left brightness-0 dark:invert"
                  />
                </div>
                {/* Industry tag */}
                <span className="mb-3 text-caption text-primary">{c.industry}</span>
                {/* Quote */}
                <p className="flex-1 text-sm leading-relaxed text-foreground">&ldquo;{c.quote}&rdquo;</p>
              </div>
              {/* CTA */}
              <button
                onClick={() => setSelected(c)}
                className="flex w-full items-center justify-between px-6 border-t border-primary/20 py-3 text-label-md text-primary transition-opacity duration-200 opacity-0 group-hover/card:opacity-100"
              >
                Download Success Story
                <Download className="h-3.5 w-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Load more */}
        {hasMore && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setShowAll(true)}
              className="rounded-lg border border-border px-6 py-2.5 text-body-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              Load More
            </button>
          </div>
        )}

      </div>
    </section>

    <AnimatePresence>
      {selected && (
        <DownloadModal customer={selected} onClose={() => setSelected(null)} />
      )}
    </AnimatePresence>
    </>
  );
}
