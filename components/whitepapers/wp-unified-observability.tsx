"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Download,
  FileText,
  Layers,
  Eye,
  Zap,
  Network,
  BrainCircuit,
  ShieldCheck,
  Users,
  ChevronRight,
} from "lucide-react";
import { HeroOrbs, AnimatedBadge, FadeUp } from "@/components/hero-effects";

/* ── Content ── */

const learnings = [
  "Why siloed monitoring tools slow down incident response and inflate costs",
  "The core pillars of unified observability: metrics, logs, traces, and flows",
  "How to correlate signals across infrastructure, applications, and services",
  "Where AIOps fits in: anomaly detection, root-cause analysis, and noise reduction",
  "A step-by-step roadmap to consolidate tools without disrupting operations",
  "How to measure success with MTTD, MTTR, and service availability KPIs",
];

const chapters = [
  { n: "01", title: "The Visibility Gap", desc: "How hybrid infrastructure, microservices, and tool sprawl create blind spots that traditional monitoring can't close." },
  { n: "02", title: "What Unified Observability Means", desc: "Defining observability beyond monitoring, and why a single data platform for all telemetry changes the game." },
  { n: "03", title: "The Telemetry Pillars", desc: "Metrics, logs, traces, network flows, and events: what each tells you and how they work together." },
  { n: "04", title: "Correlation & Context", desc: "Building topology-aware context so teams can move from symptoms to root cause in minutes, not hours." },
  { n: "05", title: "AIOps in Practice", desc: "Applying machine learning for dynamic baselines, anomaly detection, alert correlation, and predictive insights." },
  { n: "06", title: "Implementation Roadmap", desc: "A phased approach to tool consolidation, data onboarding, and team adoption, with pitfalls to avoid." },
];

const pillars = [
  { icon: Layers, title: "End-to-End Visibility", desc: "One view across network, servers, cloud, applications, and end-user experience." },
  { icon: Network, title: "Topology-Aware Context", desc: "Understand dependencies between services to see the true blast radius of an issue." },
  { icon: BrainCircuit, title: "AI-Driven Insights", desc: "Cut alert noise and surface probable root causes automatically." },
  { icon: Zap, title: "Faster Resolution", desc: "Shorten MTTD and MTTR by replacing tool-hopping with a single workflow." },
];

const audience = [
  { icon: Eye, label: "IT Operations & NOC teams" },
  { icon: ShieldCheck, label: "SRE & Platform Engineering" },
  { icon: Users, label: "CIOs, CTOs & IT Leaders" },
  { icon: Network, label: "Network & Infrastructure Architects" },
];

const related = [
  { tag: "AI & AIOps", title: "The State of AI-Native AIOps in 2025" },
  { tag: "Logs", title: "Modern Log Analytics Architecture" },
  { tag: "SRE", title: "SRE Practices for Enterprise Scale" },
];

/* ── Download form ── */

function DownloadForm() {
  const [form, setForm] = useState({ name: "", email: "", company: "", jobTitle: "" });
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

  const inputCls = (err?: string) =>
    `w-full rounded-lg border bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 ${err ? "border-red-400" : "border-border"}`;

  if (submitted) {
    return (
      <div className="py-6 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
          <CheckCircle className="h-7 w-7 text-green-600" />
        </div>
        <h3 className="text-heading-sm">You&apos;re all set!</h3>
        <p className="mt-2 text-body-xs text-muted-foreground">
          A download link has been sent to{" "}
          <span className="font-medium text-foreground">{form.email}</span>.
        </p>
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="mt-5 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-label-md text-primary-foreground transition-opacity hover:opacity-90"
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
    );
  }

  return (
    <>
      <div className="mb-5">
        <h3 className="text-heading-sm">Get your free copy</h3>
        <p className="mt-1 text-body-xs text-muted-foreground">
          Fill in your details and we&apos;ll send the PDF straight to your inbox.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div>
          <label className="mb-1.5 block text-label-md">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={form.name}
            onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: undefined }); }}
            className={inputCls(errors.name)}
          />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
        </div>
        <div>
          <label className="mb-1.5 block text-label-md">
            Business Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="your@company.com"
            value={form.email}
            onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: undefined }); }}
            className={inputCls(errors.email)}
          />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-label-md">Company</label>
            <input
              type="text"
              placeholder="Company name"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              className={inputCls()}
            />
          </div>
          <div>
            <label className="mb-1.5 block text-label-md">Job Title</label>
            <input
              type="text"
              placeholder="Your role"
              value={form.jobTitle}
              onChange={(e) => setForm({ ...form, jobTitle: e.target.value })}
              className={inputCls()}
            />
          </div>
        </div>
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-label-md text-primary-foreground transition-opacity hover:opacity-90"
        >
          <Download className="h-4 w-4" />
          Download Whitepaper
        </button>
        <p className="text-center text-caption text-muted-foreground">
          By downloading, you agree to our{" "}
          <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.
        </p>
      </form>
    </>
  );
}

/* ── Page ── */

export function WpUnifiedObservability() {
  return (
    <>
      {/* Hero */}
      <section className="relative z-10 overflow-hidden pt-20 pb-16 lg:pt-28 lg:pb-24">
        <HeroOrbs />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
          {/* Breadcrumb */}
          <FadeUp delay={50}>
            <nav className="mb-8 flex flex-wrap items-center gap-1.5 text-caption text-muted-foreground">
              <Link href="/resources/whitepapers" className="inline-flex items-center gap-1 hover:text-foreground">
                <ArrowLeft className="h-3.5 w-3.5" /> Whitepapers
              </Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-foreground">Unified Observability</span>
            </nav>
          </FadeUp>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_420px] lg:gap-16">
            {/* Left */}
            <div>
              <FadeUp delay={100}>
                <AnimatedBadge text="ObserveOps · Whitepaper" />
              </FadeUp>
              <FadeUp delay={250}>
                <h1 className="mt-6 text-[clamp(2rem,4.5vw,3.75rem)] font-bold leading-[1.08] tracking-tight">
                  Unified Observability: A Complete Guide
                </h1>
              </FadeUp>
              <FadeUp delay={400}>
                <p className="mt-5 max-w-2xl text-body-md text-muted-foreground">
                  Learn how to break down silos and achieve end-to-end visibility across
                  infrastructure, applications, and services. This guide walks IT leaders
                  through the why, what, and how of moving from fragmented monitoring tools
                  to a single, AI-powered observability platform.
                </p>
              </FadeUp>
              <FadeUp delay={500}>
                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-body-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-2"><FileText className="h-4 w-4 text-primary" /> PDF Guide</span>
                  <span className="inline-flex items-center gap-2"><Layers className="h-4 w-4 text-primary" /> 6 Chapters</span>
                  <span className="inline-flex items-center gap-2"><Download className="h-4 w-4 text-primary" /> Free Download</span>
                </div>
              </FadeUp>

              {/* What you'll learn */}
              <FadeUp delay={600}>
                <div className="mt-12">
                  <h2 className="text-heading-sm">What you&apos;ll learn</h2>
                  <ul className="mt-5 space-y-3">
                    {learnings.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-body-sm">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            </div>

            {/* Right: sticky form */}
            <div className="lg:relative">
              <FadeUp delay={350}>
                <div id="download" className="rounded-2xl border border-border bg-card p-6 shadow-xl lg:sticky lg:top-24 sm:p-8">
                  <DownloadForm />
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* Why unified observability */}
      <section className="relative z-10 border-t border-border py-20">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="max-w-2xl">
            <span className="text-caption text-primary">Why it matters</span>
            <h2 className="mt-2 text-heading-lg">One platform. Complete context.</h2>
            <p className="mt-3 text-body-sm text-muted-foreground">
              Unified observability brings every signal together so teams stop switching
              between tools and start resolving issues.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-label-lg font-semibold">{title}</h3>
                <p className="mt-2 text-body-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inside the whitepaper */}
      <section className="relative z-10 border-t border-border py-20">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="max-w-2xl">
            <span className="text-caption text-primary">Inside the whitepaper</span>
            <h2 className="mt-2 text-heading-lg">What&apos;s covered</h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {chapters.map((c) => (
              <div key={c.n} className="bg-card p-7">
                <span className="font-mono text-caption text-primary">Chapter {c.n}</span>
                <h3 className="mt-2 text-label-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-body-xs text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who should read */}
      <section className="relative z-10 border-t border-border py-20">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2">
          <div>
            <span className="text-caption text-primary">Who should read this</span>
            <h2 className="mt-2 text-heading-lg">Built for teams who keep IT running</h2>
            <p className="mt-3 text-body-sm text-muted-foreground">
              Whether you run a NOC, own platform reliability, or set IT strategy, this guide
              gives you a practical framework for evaluating and adopting unified observability.
            </p>
            <a
              href="#download"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-label-md text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Download className="h-4 w-4" /> Download the Guide
            </a>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {audience.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 rounded-xl border border-border bg-card p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-label-md">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="relative z-10 border-t border-border py-20">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-heading-lg">Related whitepapers</h2>
            <Link href="/resources/whitepapers" className="inline-flex items-center gap-1.5 text-label-md text-primary hover:underline">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.title}
                href="/resources/whitepapers"
                className="group flex flex-col rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary/40"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <span className="text-caption text-muted-foreground">{r.tag}</span>
                <h3 className="mt-1 text-label-lg font-semibold">{r.title}</h3>
                <span className="mt-4 inline-flex items-center gap-1 text-label-md text-primary">
                  Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
