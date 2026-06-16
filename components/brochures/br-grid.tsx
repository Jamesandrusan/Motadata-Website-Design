"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, FileText, CheckCircle, ArrowRight, Search, ChevronDown } from "lucide-react";
import Link from "next/link";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";

/* ── Brochure data ── */

const brochures = [
  { id: "aiops-platform",    tag: "AIOps",          title: "Motadata AIOps Platform Overview",      desc: "Complete technical overview of the unified observability platform. Features, architecture, deployment models, and integration capabilities." },
  { id: "observeops-suite",  tag: "ObserveOps",     title: "ObserveOps Suite Brochure",             desc: "Comprehensive monitoring across infrastructure, applications, networks, and logs. Real-time visibility and intelligent correlation." },
  { id: "serviceops-suite",  tag: "ServiceOps",     title: "ServiceOps Suite Brochure",             desc: "Modern IT service management with AI-powered automation. Service desk, incident management, change control, and asset tracking." },
  { id: "apm",               tag: "APM",            title: "Application Performance Monitoring",    desc: "Distributed tracing, code-level diagnostics, and real-time performance metrics. Monitor microservices and monolithic applications." },
  { id: "infrastructure",    tag: "Infrastructure", title: "Infrastructure & Cloud Monitoring",     desc: "Unified monitoring for on-premise, cloud, and hybrid environments. Support for AWS, Azure, GCP, and private data centers." },
  { id: "network",           tag: "Network",        title: "Network Observability Platform",        desc: "Complete network monitoring with topology discovery, flow analysis, and configuration management. Multi-vendor support." },
  { id: "logs",              tag: "Logs",           title: "Log Management & Analytics",            desc: "Centralized log aggregation, intelligent parsing, and AI-powered analytics. Real-time search and correlation at scale." },
  { id: "ai-agent",          tag: "AI Agent",       title: "AI Agent for IT Operations",            desc: "Conversational AI for IT operations. Natural language queries, automated diagnostics, and intelligent recommendations." },
  { id: "deployment",        tag: "Deployment",     title: "Enterprise Deployment Guide",           desc: "Architecture recommendations, sizing guidelines, and deployment best practices for enterprise environments." },
];

const comparisons = [
  { title: "Motadata vs Datadog",   desc: "Feature comparison & pricing analysis" },
  { title: "Motadata vs Dynatrace", desc: "Enterprise observability compared" },
  { title: "Motadata vs New Relic", desc: "Full-stack monitoring face-off" },
];

/* ── Download Modal ── */

type Brochure = typeof brochures[number];

function DownloadModal({ br, onClose }: { br: Brochure; onClose: () => void }) {
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
                <h2 className="text-heading-sm">Download Brochure</h2>
                <p className="mt-1 text-body-xs text-muted-foreground">
                  Enter your details to download:{" "}
                  <span className="font-medium text-foreground">{br.title}</span>
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

/* ── Comparison section ── */

function CompareSection() {
  return (
    <section className="relative z-10 py-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">

          {/* Left */}
          <div className="lg:w-2/5">
            <p className="mb-3 text-overline text-primary">
              Compare
            </p>
            <h2 className="text-heading-xl leading-tight lg:text-4xl">
              Compare Motadata with Leading Platforms
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              See detailed feature comparisons, pricing analysis, and migration
              guides for top observability platforms.
            </p>
          </div>

          {/* Right — connected cards */}
          <div className="lg:w-3/5">
            <div className="overflow-hidden rounded-2xl border border-border bg-card divide-y divide-border">
              {comparisons.map((c, i) => (
                <a
                  key={i}
                  href="#"
                  className="group flex items-center justify-between px-6 py-5 transition-colors hover:bg-muted/40"
                >
                  <div>
                    <p className="text-label-md text-foreground transition-colors group-hover:text-primary">
                      {c.title}
                    </p>
                    <p className="mt-0.5 text-caption text-muted-foreground">{c.desc}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground/40 transition-all group-hover:translate-x-0.5 group-hover:text-primary" />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


/* ── Filter categories ── */

const brochureTags = ["All Brochures", ...Array.from(new Set(brochures.map((b) => b.tag)))];
const PRIMARY_TAG_COUNT = 4;

/* ── Main grid ── */

export function BrGrid() {
  const [selected, setSelected] = useState<Brochure | null>(null);
  const [activeTag, setActiveTag] = useState("All Brochures");
  const [search, setSearch] = useState("");
  const [moreOpen, setMoreOpen] = useState(false);
  const [isStuck, setIsStuck] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const primaryTags = brochureTags.slice(0, PRIMARY_TAG_COUNT);
  const moreTags = brochureTags.slice(PRIMARY_TAG_COUNT);
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

  const filtered = brochures.filter((br) => {
    const matchTag = activeTag === "All Brochures" || br.tag === activeTag;
    const matchSearch = search === "" ||
      br.title.toLowerCase().includes(search.toLowerCase()) ||
      br.desc.toLowerCase().includes(search.toLowerCase());
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
                placeholder="Search brochures..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-[34px] w-[195px] rounded-lg border border-border/60 bg-background pl-9 pr-4 text-[12.5px] text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-ring/30 lg:w-[215px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brochure cards */}
      <section className="relative z-10 pt-10 pb-8">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((br) => (
              <div
                key={br.id}
                className="group/card flex flex-col rounded-2xl border border-border bg-card overflow-hidden transition-colors hover:border-primary/40"
              >
                <div className="flex flex-1 flex-col p-8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover/card:bg-primary/20">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <span className="mb-2 text-caption text-muted-foreground">{br.tag}</span>
                  <h3 className="text-heading-sm leading-snug">{br.title}</h3>
                  <p className="mt-3 text-body-xs text-muted-foreground leading-relaxed">{br.desc}</p>
                </div>
                <button
                  onClick={() => setSelected(br)}
                  className="flex w-full items-center justify-between px-6 border-t border-primary/20 py-3 text-label-md text-primary transition-opacity duration-200 opacity-0 group-hover/card:opacity-100"
                >
                  Download PDF
                  <Download className="h-3.5 w-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compare section */}
      <CompareSection />

      {/* CTA */}
      <section className="relative z-10">
        <div className="mx-auto w-full max-w-7xl px-6 py-24">
          <div className="group relative overflow-hidden rounded-3xl px-8 py-16 text-center text-white sm:px-16 sm:py-20" style={{ background: "linear-gradient(135deg, hsl(var(--gradient-from)), hsl(var(--gradient-to)))" }}>
            <DottedGlowBackground
              className="opacity-0 transition-opacity duration-500 group-hover:opacity-50"
              gap={14}
              radius={1.8}
              opacity={0.6}
              color="rgba(255,255,255,0.4)"
            />
            <div className="relative z-10">
              <h2 className="text-display-md">See Real Results in Action</h2>
              <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/60">
                Discover how leading enterprises are achieving unified observability and
                transforming their IT operations with Motadata.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-label-md text-white transition-colors hover:bg-white/20"
                >
                  View Success Stories
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-label-md text-foreground transition-colors hover:bg-white/90"
                >
                  Request Personalized Demo
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <DownloadModal br={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
