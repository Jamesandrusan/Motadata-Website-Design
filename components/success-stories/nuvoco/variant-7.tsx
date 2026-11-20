"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  ArrowDown,
  Check,
  X,
  Plus,
  Minus,
  Building2,
  Users,
  MapPin,
  Server,
  Network,
  Activity,
  ScrollText,
  Waypoints,
  Boxes,
  ShieldCheck,
  Workflow,
  Bot,
  BookOpen,
  Gauge,
  BellOff,
  Wrench,
  EyeOff,
  Layers,
  Timer,
  AlertTriangle,
  Target,
  DollarSign,
  Lock,
  Sparkles,
  TrendingUp,
  Cloud,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { company } from "./data";

/* ────────────────────────────────────────────────────────────
   Variant 7 — Enterprise Customer Success Story
   Flat, minimal, premium. Accent #F17463 (primary token) only.
   No gradients / glow / glassmorphism. Content grounded in the
   Motadata KB + the Nuvoco case study PDF. Percentage KPIs are
   labelled platform benchmarks, not audited Nuvoco results.
   ──────────────────────────────────────────────────────────── */

const heroStats = [
  { value: "1,000", label: "Network devices monitored" },
  { value: "5,000", label: "IT assets managed" },
  { value: "4,100", label: "Assets under patching" },
  { value: "120", label: "Service technicians enabled" },
];

const about = [
  { icon: Building2, label: "Industry", value: "Manufacturing (Building Materials)" },
  { icon: Users, label: "Company size", value: "1,001–5,000 employees" },
  { icon: MapPin, label: "Region", value: "India (national footprint)" },
  { icon: Server, label: "Environment", value: "Hybrid across plants, offices & data centre" },
];

const challenges: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Layers, title: "Tool sprawl", text: "A patchwork of individual applications, each covering a slice of the estate." },
  { icon: EyeOff, title: "Poor visibility", text: "Day-to-day visibility was split across disconnected consoles." },
  { icon: AlertTriangle, title: "Reactive operations", text: "Network disruptions surfaced only after users had already felt the impact." },
  { icon: Timer, title: "High MTTR", text: "Every issue meant checking several tools before anyone knew where to look." },
  { icon: Wrench, title: "Manual upkeep", text: "Repetitive administrative work absorbed much of each working day." },
  { icon: BellOff, title: "Context-poor tickets", text: "Requests reached the help team without enough working context." },
  { icon: Boxes, title: "Scattered records", text: "Hardware and licensing details lived in local spreadsheets." },
  { icon: Gauge, title: "Slow root-cause analysis", text: "No single place to correlate metrics, logs and events for faster RCA." },
];

const objectives: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Target, title: "Operational goals", text: "One console for the whole environment; severity-graded alerting before user impact." },
  { icon: TrendingUp, title: "Business goals", text: "Faster answers for staff, less manual upkeep, and better coordination across departments." },
  { icon: Lock, title: "Security & compliance goals", text: "Scheduled, priority-ranked patching and a defensible, single record of every asset." },
  { icon: Workflow, title: "Automation goals", text: "Automated discovery, alert correlation and repeatable service workflows on one platform." },
];

const whyMotadata: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Activity, title: "ObserveOps", text: "Unified observability across metrics, logs, flows, traces and topology in one place." },
  { icon: Boxes, title: "ServiceOps", text: "AI-enabled, ITIL v4-aligned ITSM with CMDB, asset and patch management." },
  { icon: Sparkles, title: "AI at the core (DFIT™)", text: "Adaptive AI with no pre-training, covering anomaly detection, correlation and RCA." },
  { icon: Workflow, title: "Automation", text: "Runbooks and workflow automation for closed-loop, zero-touch remediation." },
  { icon: Layers, title: "Scalability", text: "Six deployment modes, from single-box to HA, DR and HA-over-WAN." },
  { icon: ShieldCheck, title: "One trusted vendor", text: "Native ObserveOps + ServiceOps integration under one platform and one team." },
];

const archLayers = [
  { label: "Users", note: "Staff across plants, offices & field" },
  { label: "Applications", note: "Line-of-business & internal apps" },
  { label: "Servers & Compute", note: "Physical, virtual & HCI" },
  { label: "Cloud & Virtualization", note: "VMware, Hyper-V, public cloud" },
  { label: "Network", note: "WAN, LAN, SD-WAN & wireless" },
];

const productObserve = {
  name: "ObserveOps",
  tagline: "Unified observability platform",
  href: "/products/observeops",
  icon: Activity,
  features: ["Infrastructure Monitoring", "Network Observability", "Application Performance (APM)", "Log Analytics", "Flow Monitoring", "Topology & Dependency Mapping", "AIOps & Alert Correlation"],
};
const productService = {
  name: "ServiceOps",
  tagline: "AI-enabled, ITIL v4 ITSM",
  href: "/products/serviceops",
  icon: Boxes,
  features: ["Incident, Problem & Change", "IT Asset Management (ITAM)", "CMDB & Service Mapping", "Patch & Package Management", "Workflow Automation", "AI Studio & Virtual Agent", "Knowledge Management"],
};

const timeline = [
  { week: "Week 1", title: "Discovery", text: "Estate mapped; auto-discovery of network devices and assets onboarded." },
  { week: "Week 2", title: "Deployment", text: "ObserveOps monitoring rolled out with severity-graded alert policies." },
  { week: "Week 3", title: "Integration", text: "ServiceOps service desk connected to monitoring for alert-to-incident flow." },
  { week: "Week 4", title: "Training", text: "Service technicians enabled on the unified console and workflows." },
  { week: "Week 5", title: "Go Live", text: "Single operating picture live across infrastructure and support." },
  { week: "Week 6", title: "Optimization", text: "Patch scheduling, CMDB and automation tuned to priority-ranked systems." },
];

const featureDeepDive: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Server, title: "Infrastructure Monitoring", text: "Real-time metrics across servers, compute, virtualization and HCI, with sub-second polling via MotaAgent." },
  { icon: Network, title: "Network Observability", text: "Auto-discovery via CDP/LLDP across WAN, LAN, SD-WAN and wireless, with switch and port-level visibility." },
  { icon: Activity, title: "Application Performance", text: "Trace intelligence with spans and flame charts for Java, .NET, Node.js, Python, Go and Kubernetes." },
  { icon: ScrollText, title: "Log Analytics", text: "Log Explorer with Live Tail and Surrounding Logs for one-click root-cause context." },
  { icon: Waypoints, title: "Topology Mapping", text: "Auto-refreshed network and cloud topology with dependency mapping." },
  { icon: Sparkles, title: "AIOps", text: "DFIT-powered anomaly detection, predictive baselines and alert correlation to cut noise." },
  { icon: Workflow, title: "Automation & Runbooks", text: "Threshold- and alert-triggered runbooks for auto-remediation and zero-touch delivery." },
  { icon: ShieldCheck, title: "Patch & Package", text: "Scheduled patch delivery to grouped, priority-ranked Windows, Linux and macOS systems." },
  { icon: Boxes, title: "CMDB", text: "Configuration items, relationships and impact analysis as a single source of truth." },
  { icon: BellOff, title: "Incident & Problem", text: "Restore service fast and eliminate recurring root causes on one ITIL v4 service desk." },
  { icon: Workflow, title: "Change & Release", text: "Control risk with structured change, approvals and release workflows." },
  { icon: Bot, title: "AI Studio & Virtual Agent", text: "Build governed AI agents and conversational self-service on Teams and Slack." },
];

const outcomes = [
  { value: "80%", label: "MTTR reduction", icon: Timer },
  { value: "95%", label: "Faster incident resolution", icon: Zap },
  { value: "45%", label: "Less downtime", icon: TrendingUp },
  { value: "55%", label: "Cost optimization", icon: DollarSign },
];

const beforeAfterRows = [
  { before: "Visibility split across disconnected tools", after: "One console for the whole environment" },
  { before: "Outages noticed only after user impact", after: "Severity-graded alerts before impact" },
  { before: "Tickets arrived without working context", after: "Incident, problem & change on one desk" },
  { before: "Days lost to manual upkeep", after: "Automation and scheduled patching" },
  { before: "Assets tracked in scattered sheets", after: "Single, trusted CMDB & asset record" },
];

const industries: { icon: LucideIcon; name: string; text: string }[] = [
  { icon: Wrench, name: "Manufacturing", text: "Uptime, OT/IT convergence and predictive maintenance across plants." },
  { icon: DollarSign, name: "Banking & BFSI", text: "Always-on core systems with PCI DSS and audit-ready controls." },
  { icon: ShieldCheck, name: "Healthcare", text: "Zero-downtime clinical systems with HIPAA-aligned patching." },
  { icon: Building2, name: "Government", text: "Secure, sovereign IT with ISO and GDPR-driven governance." },
  { icon: BookOpen, name: "Education", text: "Reliable campus networks and self-service IT for staff and students." },
  { icon: Network, name: "Telecom", text: "Network performance at scale with subscriber-experience visibility." },
  { icon: Users, name: "MSP", text: "Multi-tenant monitoring and ITSM on one platform, all clients." },
  { icon: Server, name: "IT / ITeS", text: "Data-centre and multi-cloud observability from a single console." },
];

const techStack = ["AWS", "Azure", "Google Cloud", "VMware", "Hyper-V", "Kubernetes", "Linux", "Windows", "Cisco", "Fortinet", "Palo Alto", "OpenTelemetry", "SNMP", "Syslog", "Active Directory", "LDAP", "Microsoft Teams", "Slack", "REST API"];

const businessValue: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Gauge, title: "Operational excellence", text: "One operating picture; issues caught and cleared before they interrupt work." },
  { icon: DollarSign, title: "Cost savings", text: "Consolidated tooling and less manual effort across the IT function." },
  { icon: EyeOff, title: "Visibility", text: "End-to-end view of infrastructure, applications and services." },
  { icon: Workflow, title: "Automation", text: "Repeatable workflows and runbooks reduce toil and human error." },
  { icon: Lock, title: "Compliance", text: "Scheduled patching and a defensible asset record support audits." },
  { icon: ShieldCheck, title: "Security posture", text: "Priority-ranked patching keeps critical systems current." },
  { icon: Users, title: "User experience", text: "Faster answers to everyday IT needs across the organization." },
];

const related = [
  { name: "Anant Raj Cloud", industry: "Data Centre · IT/ITeS", text: "Unifies data-centre monitoring and service management with Motadata." },
  { name: "Enterprise Telecom", industry: "Telecom", text: "Real-time visibility across millions of network endpoints." },
  { name: "National Bank", industry: "Banking & BFSI", text: "Always-on core systems with unified monitoring and ITSM." },
];

const faqs = [
  { q: "What is Motadata ObserveOps?", a: "ObserveOps is Motadata's unified observability platform. It brings metrics, logs, flows, traces and topology into one place across on-premises, private cloud, public cloud and hybrid environments, built on the DFIT deep-learning framework with adaptive AI that needs no pre-training." },
  { q: "What is Motadata ServiceOps?", a: "ServiceOps is an AI-enabled, ITIL v4-aligned ITSM platform that unifies the service desk (incident, problem, change, release), IT asset management, CMDB and patch & package management on a single platform." },
  { q: "How does Motadata help reduce MTTR?", a: "By correlating metrics, logs and events in one place, using AIOps anomaly detection and alert correlation to cut noise, and turning alerts into incidents automatically, so teams find and fix root causes faster instead of checking several tools." },
  { q: "Does Motadata support hybrid and multi-cloud monitoring?", a: "Yes. ObserveOps monitors physical, virtual and HCI infrastructure alongside VMware, Hyper-V, AWS, Azure and Google Cloud, with OpenTelemetry-native ingestion of traces, metrics and logs." },
  { q: "What is DFIT and how does Motadata's AI work?", a: "DFIT (Deep Learning Framework for IT Operations) is Motadata's proprietary AI engine shared by ObserveOps and ServiceOps. It performs causation-based correlation, dependency mapping, anomaly detection, noise reduction and forecasting, with adaptive AI that requires no pre-training." },
  { q: "Can Motadata unify infrastructure monitoring and IT service management?", a: "Yes. ObserveOps and ServiceOps integrate natively, giving one continuous workflow from observe to detect to ticket to resolve to close, the exact pattern Nuvoco adopted to replace a patchwork of tools." },
  { q: "What integrations and technology stack does Motadata support?", a: "Motadata supports major clouds, VMware and Hyper-V, Kubernetes, Linux and Windows, network vendors such as Cisco, Fortinet and Palo Alto, plus SNMP, Syslog, Active Directory, LDAP, Microsoft Teams, Slack and a full REST API." },
  { q: "Is Motadata suitable for manufacturing and large enterprises?", a: "Yes. Motadata serves manufacturing, banking, healthcare, government, telecom, education and MSPs, and scales through six deployment modes including High Availability, Disaster Recovery and HA-over-WAN." },
  { q: "How long does a Motadata implementation take?", a: "Deployments follow a structured path of discovery, deployment, integration, training, go-live and optimization, which can be delivered in a matter of weeks, depending on estate size and scope." },
  { q: "Does Motadata support ITIL v4, CMDB and asset management?", a: "Yes. ServiceOps is PeopleCert ATV ITIL 4 compliant, with a unified CMDB, an eight-stage IT asset lifecycle, and patch & package management for Windows, Linux and macOS." },
];

/* ── Small building blocks ── */

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-overline text-primary">{eyebrow}</p>
      <h2 className="mt-3 text-heading-xl lg:text-4xl">{title}</h2>
      {sub && <p className="mt-4 text-body-md text-muted-foreground">{sub}</p>}
    </div>
  );
}

const wrap = "mx-auto w-full max-w-[1240px] px-6";

export function NuvocoVariant7() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Success Stories", item: "https://www.motadata.com/resources/success-stories" },
      { "@type": "ListItem", position: 2, name: "Nuvoco Vistas", item: company.href },
    ],
  };

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ── 1 · HERO ── */}
      <section className="relative z-10 pt-16 pb-20">
        <div className={wrap}>
          <nav className="flex items-center gap-1.5 text-body-xs text-muted-foreground">
            <Link href="/resources/success-stories" className="hover:text-primary">Success Stories</Link>
            <span className="opacity-40">/</span>
            <span className="text-foreground">Nuvoco Vistas</span>
          </nav>

          <div className="mt-8 grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:items-center">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <Image src={company.logo} alt="Nuvoco" width={180} height={44} className="h-8 w-auto object-contain object-left brightness-0 dark:invert" />
                <span className="rounded-md border border-border px-2.5 py-1 text-caption font-medium text-muted-foreground">Manufacturing</span>
              </div>
              <h1 className="text-[clamp(2rem,4.4vw,3.4rem)] font-bold leading-[1.06] tracking-tight">
                Nuvoco unifies infrastructure monitoring and IT service management with Motadata
              </h1>
              <p className="mt-6 max-w-xl text-body-lg text-muted-foreground">
                One of India&apos;s largest building materials producers replaced a patchwork of tools with a single
                platform, ObserveOps and ServiceOps, for one operating picture across infrastructure and support.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/schedule-demo/aiops" className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-label-md text-primary-foreground transition-opacity hover:opacity-90">
                  Schedule a Demo <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/resources/success-stories" className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-label-md text-foreground transition-colors hover:border-primary/40 hover:text-primary">
                  More customer stories
                </Link>
              </div>
            </div>

            {/* KPI cards */}
            <div className="grid grid-cols-2 gap-4">
              {heroStats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-border bg-card p-6">
                  <p className="text-[clamp(1.7rem,2.6vw,2.2rem)] font-bold tracking-tight text-foreground">{s.value}</p>
                  <p className="mt-1.5 text-body-xs leading-snug text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-10 bg-background">
      {/* ── 2 · ABOUT ── */}
      <section className="py-20">
        <div className={wrap}>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <p className="text-overline text-primary">About the customer</p>
              <h2 className="mt-3 text-heading-xl lg:text-4xl">A national building materials group</h2>
              <p className="mt-5 text-body-md leading-relaxed text-muted-foreground">
                {company.legal} is one of India&apos;s largest building materials producers, active across cement,
                ready-mix concrete and modern building materials. As the business grew, its technology footprint grew
                into a patchwork of individual applications that made oversight difficult and slowed coordination
                between departments.
              </p>
              <p className="mt-4 text-body-md leading-relaxed text-muted-foreground">
                With production, logistics and corporate systems all depending on always-on IT, the organization needed
                one dependable way to watch the estate and run internal support side by side.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
              {about.map((a) => (
                <div key={a.label} className="bg-card p-6">
                  <a.icon className="mb-3 h-5 w-5 text-primary" />
                  <p className="text-caption text-muted-foreground">{a.label}</p>
                  <p className="mt-1 text-body-sm font-medium text-foreground">{a.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3 · CHALLENGES ── */}
      <section className="py-20">
        <div className={wrap}>
          <SectionHead eyebrow="The challenge" title="The cost of a fragmented IT estate" sub="Eight frictions defined the everyday before Motadata." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {challenges.map((c) => (
              <div key={c.title} className="rounded-2xl p-6 transition-colors hover:bg-muted/40">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5">
                  <c.icon className="h-5 w-5 text-primary" />
                </div>
                <p className="text-label-lg font-semibold text-foreground">{c.title}</p>
                <p className="mt-1.5 text-body-sm leading-relaxed text-muted-foreground">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4 · OBJECTIVES ── */}
      <section className="py-20">
        <div className={wrap}>
          <SectionHead eyebrow="Objectives" title="What the team set out to achieve" />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {objectives.map((o) => (
              <div key={o.title} className="rounded-2xl p-6 transition-colors hover:bg-muted/40">
                <o.icon className="mb-4 h-6 w-6 text-primary" />
                <p className="text-label-lg font-semibold text-foreground">{o.title}</p>
                <p className="mt-2 text-body-sm leading-relaxed text-muted-foreground">{o.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5 · WHY MOTADATA ── */}
      <section className="py-20">
        <div className={wrap}>
          <SectionHead eyebrow="Why Motadata" title="Why the customer selected Motadata" sub="One platform across observability, service management and automation." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyMotadata.map((w) => (
              <div key={w.title} className="flex gap-4 rounded-2xl p-6 transition-colors hover:bg-muted/40">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/5"><w.icon className="h-5 w-5 text-primary" /></div>
                <div>
                  <p className="text-label-lg font-semibold text-foreground">{w.title}</p>
                  <p className="mt-1 text-body-sm leading-relaxed text-muted-foreground">{w.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6 · SOLUTION ARCHITECTURE ── */}
      <section className="py-20">
        <div className={wrap}>
          <SectionHead eyebrow="Solution architecture" title="One closed loop: observe → detect → ticket → resolve" sub="Signals from every layer flow into ObserveOps, are correlated by AI, and drive action through ServiceOps." />
          <div className="mx-auto mt-12 max-w-3xl">
            {/* sources */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
              {archLayers.map((l) => (
                <div key={l.label} className="rounded-lg border border-border bg-card p-3 text-center">
                  <p className="text-label-sm font-semibold text-foreground">{l.label}</p>
                  <p className="mt-0.5 text-[11px] leading-tight text-muted-foreground">{l.note}</p>
                </div>
              ))}
            </div>
            {[
              { label: "ObserveOps", note: "Metrics · logs · flows · traces · topology", strong: true },
              { label: "AI Correlation (DFIT™)", note: "Anomaly detection · noise reduction · root-cause", strong: true },
              { label: "ServiceOps", note: "Incident · problem · change · asset · CMDB", strong: true },
              { label: "Automation & Runbooks", note: "Auto-remediation · scheduled patching", strong: false },
              { label: "Resolution", note: "Issues cleared before they interrupt operations", strong: false },
            ].map((step) => (
              <div key={step.label}>
                <div className="flex justify-center py-3"><ArrowDown className="h-5 w-5 text-primary" /></div>
                <div className={`rounded-lg border p-4 text-center ${step.strong ? "border-primary/40 bg-primary/[0.04]" : "border-border bg-card"}`}>
                  <p className="text-label-lg font-semibold text-foreground">{step.label}</p>
                  <p className="mt-0.5 text-body-xs text-muted-foreground">{step.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7 · PRODUCTS USED ── */}
      <section className="py-20">
        <div className={wrap}>
          <SectionHead eyebrow="Products used" title="ObserveOps + ServiceOps" />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {[productObserve, productService].map((p) => (
              <div key={p.name} className="flex flex-col rounded-xl border border-border bg-card p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/5"><p.icon className="h-6 w-6 text-primary" /></div>
                  <div>
                    <h3 className="text-heading-sm">Motadata {p.name}</h3>
                    <p className="text-label-sm text-primary">{p.tagline}</p>
                  </div>
                </div>
                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-body-sm text-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {f}
                    </li>
                  ))}
                </ul>
                <Link href={p.href} className="mt-7 inline-flex items-center gap-1.5 text-label-md text-primary hover:underline underline-offset-4">
                  Explore {p.name} <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8 · IMPLEMENTATION TIMELINE ── */}
      <section className="py-20">
        <div className={wrap}>
          <SectionHead eyebrow="Implementation journey" title="From discovery to optimization in weeks" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {timeline.map((t, i) => (
              <div key={t.week} className="rounded-2xl p-6 transition-colors hover:bg-muted/40">
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-md bg-primary/10 px-2 py-0.5 text-caption font-semibold text-primary">{t.week}</span>
                  <span className="text-caption font-medium text-muted-foreground/50">0{i + 1}</span>
                </div>
                <p className="text-label-lg font-semibold text-foreground">{t.title}</p>
                <p className="mt-1.5 text-body-sm leading-relaxed text-muted-foreground">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9 · FEATURE DEEP DIVE ── */}
      <section className="py-20">
        <div className={wrap}>
          <SectionHead eyebrow="Feature deep dive" title="The capabilities behind the outcome" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featureDeepDive.map((f) => (
              <div key={f.title} className="rounded-2xl p-6 transition-colors hover:bg-muted/40">
                <f.icon className="mb-4 h-5 w-5 text-primary" />
                <p className="text-label-lg font-semibold text-foreground">{f.title}</p>
                <p className="mt-1.5 text-body-sm leading-relaxed text-muted-foreground">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10 · BUSINESS OUTCOMES ── */}
      <section className="py-20">
        <div className={wrap}>
          <SectionHead eyebrow="Business outcomes" title="Measurable impact for IT operations" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((o) => (
              <div key={o.label} className="rounded-xl border border-border bg-card p-7 text-center">
                <o.icon className="mx-auto mb-4 h-6 w-6 text-primary" />
                <p className="text-[clamp(2rem,3.4vw,2.8rem)] font-bold tracking-tight text-foreground">{o.value}</p>
                <p className="mt-1.5 text-body-sm text-muted-foreground">{o.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-caption text-muted-foreground/70">
            Figures reflect Motadata platform benchmarks; actual results vary by environment and scope.
          </p>
        </div>
      </section>

      {/* ── 11 · BEFORE / AFTER ── */}
      <section className="py-20">
        <div className={wrap}>
          <SectionHead eyebrow="Before / after" title="The shift, side by side" />
          <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-xl border border-border">
            <div className="grid grid-cols-[1fr_1fr] border-b border-border bg-card">
              <div className="border-r border-border px-6 py-3 text-label-sm text-muted-foreground">Before Motadata</div>
              <div className="px-6 py-3 text-label-sm text-primary">After Motadata</div>
            </div>
            {beforeAfterRows.map((r) => (
              <div key={r.after} className="grid grid-cols-[1fr_1fr] border-b border-border last:border-0">
                <div className="flex items-start gap-2 border-r border-border px-6 py-4 text-body-sm text-muted-foreground">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-rose-400" /> {r.before}
                </div>
                <div className="flex items-start gap-2 px-6 py-4 text-body-sm font-medium text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {r.after}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 12 · TESTIMONIAL ── */}
      <section className="py-20">
        <div className={wrap}>
          <figure className="mx-auto max-w-3xl rounded-xl border border-border bg-card p-10 text-center">
            <p className="text-[clamp(1.4rem,2.6vw,2rem)] font-semibold leading-[1.4] tracking-tight text-foreground">
              &ldquo;One screen now shows the whole environment at a glance, and issues are caught and cleared before they interrupt daily operations.&rdquo;
            </p>
            <figcaption className="mt-8 flex items-center justify-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-label-md font-semibold text-primary">IT</span>
              <span className="text-left">
                <span className="block text-body-sm font-semibold text-foreground">IT Operations</span>
                <span className="block text-body-xs text-muted-foreground">Nuvoco Vistas Corporation Limited</span>
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ── 13 · INDUSTRY BENEFITS ── */}
      <section className="py-20">
        <div className={wrap}>
          <SectionHead eyebrow="Industry benefits" title="Built for regulated, always-on industries" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((ind) => (
              <div key={ind.name} className="rounded-2xl p-6 transition-colors hover:bg-muted/40">
                <ind.icon className="mb-4 h-5 w-5 text-primary" />
                <p className="text-label-lg font-semibold text-foreground">{ind.name}</p>
                <p className="mt-1.5 text-body-sm leading-relaxed text-muted-foreground">{ind.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 14 · TECHNOLOGY STACK ── */}
      <section className="py-20">
        <div className={wrap}>
          <SectionHead eyebrow="Technology stack" title="Integrates with the tools you already run" sub="Open, standards-based integration across cloud, network, identity and collaboration." />
          <div className="mt-10 flex flex-wrap justify-center gap-2.5">
            {techStack.map((t) => (
              <span key={t} className="rounded-lg border border-border bg-card px-4 py-2 text-body-sm font-medium text-foreground">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 15 · BUSINESS VALUE ── */}
      <section className="py-20">
        <div className={wrap}>
          <SectionHead eyebrow="Business value" title="Value that reaches beyond IT" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {businessValue.map((b) => (
              <div key={b.title} className="rounded-2xl p-6 transition-colors hover:bg-muted/40">
                <b.icon className="mb-4 h-5 w-5 text-primary" />
                <p className="text-label-lg font-semibold text-foreground">{b.title}</p>
                <p className="mt-1.5 text-body-sm leading-relaxed text-muted-foreground">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 16 · RELATED STORIES ── */}
      <section className="py-20">
        <div className={wrap}>
          <SectionHead eyebrow="Related customer stories" title="More proof from teams like yours" />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {related.map((r) => (
              <Link key={r.name} href="/resources/success-stories" className="group flex flex-col rounded-xl border border-border bg-card p-7 transition-colors hover:border-primary/40">
                <span className="text-caption text-primary">{r.industry}</span>
                <p className="mt-2 text-heading-sm">{r.name}</p>
                <p className="mt-3 flex-1 text-body-sm leading-relaxed text-muted-foreground">{r.text}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-label-md text-primary">Read story <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 17 · FAQ ── */}
      <section className="py-20">
        <div className={wrap}>
          <SectionHead eyebrow="FAQ" title="Frequently asked questions" />
          <div className="mx-auto mt-12 max-w-3xl divide-y divide-border rounded-xl border border-border bg-card">
            {faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={f.q}>
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-label-lg font-medium text-foreground">{f.q}</span>
                    {isOpen ? <Minus className="h-4 w-4 shrink-0 text-primary" /> : <Plus className="h-4 w-4 shrink-0 text-muted-foreground" />}
                  </button>
                  {isOpen && <p className="px-6 pb-6 text-body-sm leading-relaxed text-muted-foreground">{f.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 18 · FINAL CTA ── */}
      <section className="py-20">
        <div className={wrap}>
          <div className="rounded-2xl border border-border bg-card px-8 py-16 text-center">
            <h2 className="mx-auto max-w-2xl text-[clamp(1.7rem,3.2vw,2.6rem)] font-bold tracking-tight text-foreground">
              Ready to modernize your IT operations?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-body-md text-muted-foreground">
              See how ObserveOps and ServiceOps unify observability, service management and automation on one AI-native platform.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/schedule-demo/aiops" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-label-md text-primary-foreground transition-opacity hover:opacity-90">
                Schedule Demo <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/resources/community" className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-label-md text-foreground transition-colors hover:border-primary/40 hover:text-primary">
                Talk to Experts
              </Link>
            </div>
          </div>
        </div>
      </section>

      </div>

      {/* ── Sticky CTA (clears the centered layout switcher) ── */}
      <div className="fixed bottom-5 right-5 z-30 hidden lg:block">
        <Link href="/schedule-demo/aiops" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-label-md text-primary-foreground shadow-lg transition-opacity hover:opacity-90">
          <Cloud className="h-4 w-4" /> Book a Demo
        </Link>
      </div>
    </div>
  );
}
