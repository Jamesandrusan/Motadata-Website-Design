"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, BookOpen, CheckCircle, Search, ChevronDown } from "lucide-react";
import { CtaSection } from "@/components/cta-section";

/* ── Data ── */

const ebooks = [
  {
    id: "ai-itops",
    tag: "AI & AIOps",
    title: "The Complete Guide to AI-Powered IT Operations",
    desc: "Transform your IT operations with artificial intelligence. Learn how leading organizations leverage AI for proactive monitoring and automated remediation.",
  },
  {
    id: "unified-observability",
    tag: "ObserveOps",
    title: "Unified Observability: From Silos to Synthesis",
    desc: "Break down monitoring silos and achieve comprehensive visibility across your entire technology stack with unified observability practices.",
  },
  {
    id: "modern-itsm",
    tag: "ServiceOps",
    title: "Modern ITSM: Service Excellence Through Automation",
    desc: "Discover how modern service management platforms use automation and AI to deliver exceptional service experiences at scale.",
  },
  {
    id: "network-cloud",
    tag: "Network",
    title: "Network Monitoring in the Cloud-Native Era",
    desc: "Essential strategies for monitoring hybrid and multi-cloud networks, from SDN to service mesh architectures.",
  },
  {
    id: "apm-handbook",
    tag: "APM",
    title: "Application Performance Optimization Handbook",
    desc: "Practical techniques for optimizing application performance across microservices, containers, and serverless environments.",
  },
  {
    id: "log-scale",
    tag: "Logs",
    title: "Log Management at Scale: Best Practices",
    desc: "Architect robust log management systems that handle petabyte-scale data with intelligent analytics and cost optimization.",
  },
];

/* ── Download Modal ── */

type Ebook = typeof ebooks[number];

function DownloadModal({ eb, onClose }: { eb: Ebook; onClose: () => void }) {
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
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-heading-sm">Download Ebook</h2>
                <p className="mt-1 text-body-xs text-muted-foreground">
                  Enter your details to download:{" "}
                  <span className="font-medium text-foreground">{eb.title}</span>
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

/* ── Filter categories ── */

const ebTags = ["All Ebooks", ...Array.from(new Set(ebooks.map((e) => e.tag)))];
const PRIMARY_TAG_COUNT = 4;

/* ── Main grid ── */

export function EbGrid() {
  const [selected, setSelected] = useState<Ebook | null>(null);
  const [activeTag, setActiveTag] = useState("All Ebooks");
  const [search, setSearch] = useState("");
  const [moreOpen, setMoreOpen] = useState(false);
  const [isStuck, setIsStuck] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const primaryTags = ebTags.slice(0, PRIMARY_TAG_COUNT);
  const moreTags = ebTags.slice(PRIMARY_TAG_COUNT);
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

  const filtered = ebooks.filter((eb) => {
    const matchTag = activeTag === "All Ebooks" || eb.tag === activeTag;
    const matchSearch = search === "" ||
      eb.title.toLowerCase().includes(search.toLowerCase()) ||
      eb.desc.toLowerCase().includes(search.toLowerCase());
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
                placeholder="Search ebooks..."
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
            {filtered.map((eb) => (
              <div
                key={eb.id}
                className="group/card flex flex-col rounded-2xl border border-border bg-card overflow-hidden transition-colors hover:border-primary/40"
              >
                {/* Card content */}
                <div className="flex flex-1 flex-col p-8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover/card:bg-primary/20">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <span className="mb-2 text-caption text-muted-foreground">
                    {eb.tag}
                  </span>
                  <h3 className="text-heading-sm leading-snug">{eb.title}</h3>
                  <p className="mt-3 text-body-xs text-muted-foreground leading-relaxed">{eb.desc}</p>
                </div>

                {/* CTA — full width flush */}
                <button
                  onClick={() => setSelected(eb)}
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

      <CtaSection />

      <AnimatePresence>
        {selected && (
          <DownloadModal eb={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
