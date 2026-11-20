"use client";

import { useState, useRef, useEffect, useCallback, Fragment } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Scale,
  ShieldAlert,
  TrendingUp,
  ShieldCheck,
  Lock,
  KeyRound,
  Eye,
  DatabaseBackup,
  Archive,
  FileSignature,
  Bell,
  RefreshCw,
  ScrollText,
  Search,
  Trash2,
  Activity,
  Timer,
  CheckCircle2,
} from "lucide-react";
import { HeroOrbs, AnimatedBadge, FadeUp } from "@/components/hero-effects";
import { buttonVariants } from "@/components/ui/button";
import { CtaSection } from "@/components/cta-section";
import { cn } from "@/lib/utils";

/* ── Why comply — benefit cards ───────────────────────────── */
const benefits = [
  {
    icon: ShieldAlert,
    title: "Avoid Penalties",
    description:
      "Failure to maintain reasonable security safeguards can attract penalties of up to ₹250 crore under the Act. Demonstrable controls reduce your exposure.",
  },
  {
    icon: TrendingUp,
    title: "Build Customer Trust",
    description:
      "Privacy-conscious enterprises increasingly choose vendors who can prove how personal data is governed across its lifecycle.",
  },
  {
    icon: ShieldCheck,
    title: "Reduce Breach Risk",
    description:
      "Continuous monitoring, access control, and audit-ready logging minimise operational disruption when incidents occur.",
  },
];

/* ── Implementation timeline ──────────────────────────────── */
const timeline = [
  {
    phase: "Phase 1",
    date: "Nov 2025",
    title: "Regulator Activation",
    description:
      "The Data Protection Board of India stands up. Organisations begin baselining how personal data is collected, stored, and processed.",
    status: "active" as const,
  },
  {
    phase: "Phase 2",
    date: "Nov 2026",
    title: "Limited Rules in Force",
    description:
      "Consent-manager registration and early operational rules take effect. Teams formalise consent, retention, and processor governance.",
    status: "upcoming" as const,
  },
  {
    phase: "Phase 3",
    date: "May 2027",
    title: "Full Compliance Obligations",
    description:
      "The substantive security, breach-notification, and data-lifecycle obligations apply in full. Controls must be in place and evidenced.",
    status: "future" as const,
  },
];

const statusMeta = {
  active: { label: "Now Active", dot: "bg-primary", ring: "border-primary", chip: "bg-primary/10 text-primary border-primary/20" },
  upcoming: { label: "Upcoming", dot: "bg-primary/60", ring: "border-primary/50", chip: "bg-muted text-foreground/70 border-border" },
  future: { label: "Future", dot: "bg-muted-foreground/30", ring: "border-border", chip: "bg-muted text-muted-foreground border-border" },
};

/* ── Three core rules → tabbed capabilities ───────────────── */
const rules = [
  {
    key: "rule-6",
    label: "Rule 6 — Security Safeguards",
    intro:
      "Implement reasonable technical and organisational controls to protect personal data across its lifecycle.",
    capabilities: [
      {
        icon: Lock,
        title: "Data Protection",
        subtext:
          "Personal data needs to stay protected whether it is at rest, in transit, or in use. Motadata helps you enforce encryption and masking across servers, endpoints, and applications, so sensitive fields are never exposed in plain text. Keys are managed centrally, and access to protected data is governed and audited end to end.",
        points: [
          "Full-disk and application-level encryption",
          "Centralised key management",
          "Data masking and redaction",
          "Anti-extraction controls on sensitive fields",
        ],
      },
      {
        icon: KeyRound,
        title: "Access Control",
        subtext:
          "Limiting who can reach personal data is one of the most effective safeguards. Motadata lets you grant access on a role-based, least-privilege model and tighten it further with context-aware and privileged-access controls. Joiner-mover-leaver changes are automated, so access is granted, adjusted, and revoked as identities change — without manual gaps.",
        points: [
          "Role-based, least-privilege access",
          "Context-aware access decisions",
          "Privileged access management and credential isolation",
          "Automated joiner-mover-leaver lifecycle",
        ],
      },
      {
        icon: Eye,
        title: "Access Visibility & Logging",
        subtext:
          "You cannot prove compliance without knowing who did what, and when. Motadata centralises events from across your estate and monitors them in real time, building tamper-resistant audit trails. Correlation across sources turns scattered logs into a clear, audit-ready record you can hand to the regulator on demand.",
        points: [
          "Centralised event collection",
          "Real-time monitoring and alerting",
          "Cross-source correlation and audit trails",
          "Audit-ready reporting on data access",
        ],
      },
      {
        icon: DatabaseBackup,
        title: "Backup & Recovery",
        subtext:
          "Resilience is part of protecting personal data — a breach or outage should never mean permanent loss. Motadata automates scheduled backups and supports both granular and full-environment recovery. Backup storage is isolated and resilient, so you can restore quickly and confidently after an incident.",
        points: [
          "Automated, scheduled backups",
          "Granular and full-environment restore",
          "Resilient, isolated backup storage",
          "Rapid endpoint restoration",
        ],
      },
      {
        icon: Archive,
        title: "Log Retention (1+ Year)",
        subtext:
          "The rules expect security and access logs to be retained for at least a year. Motadata supports configurable retention of 365+ days with tiered archiving that keeps recent data fast to query and older data cost-effective to store. Storage is tamper-resistant, and historical logs stay available for investigations and audits.",
        points: [
          "Configurable 365+ day retention",
          "Tiered archiving with tamper-resistant storage",
          "On-demand access to historical logs",
          "Uniform retention enforcement across sources",
        ],
      },
      {
        icon: FileSignature,
        title: "Processor Contracts",
        subtext:
          "Where you share personal data with processors, the obligation to protect it stays with you. Motadata helps you track data-processing agreements centrally and keep processors traceable across their lifecycle. Onboarding follows a security-by-design path, and processor access is controlled, monitored, and verifiable.",
        points: [
          "Centralised data-processing agreement tracking",
          "Processor traceability and lifecycle governance",
          "Security-by-design onboarding",
          "Controlled, monitored processor access",
        ],
      },
    ],
  },
  {
    key: "rule-7",
    label: "Rule 7 — Breach Notification",
    intro:
      "Detect, respond to, and document personal-data breaches — and notify the Board and affected individuals on time.",
    capabilities: [
      {
        icon: Bell,
        title: "Manage Incidents",
        subtext:
          "The clock on breach notification starts the moment an incident is detected, so speed and structure matter. Motadata surfaces issues early through continuous monitoring and helps you triage them to decide whether they are notifiable. Structured response workflows keep every step consistent, documented, and on time.",
        points: [
          "Early detection via continuous monitoring",
          "Triage and notifiability assessment",
          "Scope and impact determination",
          "Structured, documented response workflows",
        ],
      },
      {
        icon: RefreshCw,
        title: "Recover & Remediate",
        subtext:
          "Containing a breach and getting back to a known-good state is as important as reporting it. Motadata helps you isolate affected systems, apply targeted remediation, and reinforce baselines to prevent recurrence. Every recovery action is documented, giving you evidence of the steps taken.",
        points: [
          "Rapid restoration and containment",
          "Isolation of affected systems",
          "Targeted remediation and baseline reinforcement",
          "Documented recovery actions",
        ],
      },
      {
        icon: ScrollText,
        title: "Generate Evidence Logs",
        subtext:
          "A credible breach notification rests on solid evidence. Motadata captures comprehensive, correlated logs and retains them for forensics, so you can reconstruct what happened and what was exposed. The result is evidence-backed reporting you can stand behind with the Board and affected individuals.",
        points: [
          "Centralised, correlated forensic logging",
          "Exposure documentation",
          "Mitigation and recovery evidence",
          "Evidence-backed breach notifications",
        ],
      },
    ],
  },
  {
    key: "rule-8",
    label: "Rule 8 — Discovery, Retention & Deletion",
    intro:
      "Know where personal data lives, keep it only as long as needed, and delete it on a defined schedule.",
    capabilities: [
      {
        icon: Search,
        title: "Identify Storage Locations",
        subtext:
          "You can only protect and govern personal data that you can actually see. Motadata automatically discovers where data lives across servers, endpoints, and applications, then classifies it by sensitivity and risk. Continuous visibility into data movement means you always know your footprint — and can pinpoint exactly what an incident touched.",
        points: [
          "Automated data discovery and classification",
          "Risk-based sensitivity tagging",
          "Endpoint visibility and data-movement monitoring",
          "Compliance reporting on data footprint",
        ],
      },
      {
        icon: Trash2,
        title: "Automate Retention & Deletion",
        subtext:
          "Holding personal data longer than necessary creates needless risk. Motadata enforces retention rules automatically and identifies records that are eligible for deletion. Controlled deletion workflows handle lawful exceptions and leave behind audit-ready evidence that the right data was removed at the right time.",
        points: [
          "Automatic retention enforcement",
          "Identification of deletion-eligible records",
          "Controlled deletion workflows",
          "Lawful exception handling with audit evidence",
        ],
      },
      {
        icon: Activity,
        title: "Run Inactivity Checks",
        subtext:
          "Dormant accounts and stale data are easy to overlook and risky to keep. Motadata detects inactivity, builds evidence-based records, and can automatically disable accounts that are no longer in use. Regular reviews and inactivity reporting keep your data estate lean and defensible.",
        points: [
          "Inactive-account detection",
          "Evidence-based inactivity records",
          "Automated disablement and review",
          "Inactivity reporting",
        ],
      },
      {
        icon: Timer,
        title: "Manage Data Logs",
        subtext:
          "Logs themselves contain data that must be retained, protected, and eventually removed. Motadata keeps logs for a configurable period of a year or more, archives them automatically, and protects their integrity. Once the retention window closes, eligible logs are deleted consistently and on schedule.",
        points: [
          "Configurable 1+ year log retention",
          "Automated archiving",
          "Integrity-protected storage",
          "Automatic post-retention deletion",
        ],
      },
    ],
  },
];

/* ── FAQ ──────────────────────────────────────────────────── */
const faqs = [
  {
    q: "What is the Digital Personal Data Protection Act (DPDPA)?",
    a: "The DPDP Act, 2023 is India's framework governing how the personal data of individuals (Data Principals) is collected, processed, stored, and protected by organisations (Data Fiduciaries).",
  },
  {
    q: "Who does the DPDPA apply to?",
    a: "It applies to the processing of digital personal data within India, and to processing outside India where it relates to offering goods or services to individuals in India.",
  },
  {
    q: "What are the penalties for non-compliance?",
    a: "Penalties are tiered by the nature of the breach and can reach up to ₹250 crore for failing to take reasonable security safeguards to prevent a personal-data breach.",
  },
  {
    q: "Does Motadata make my organisation DPDPA compliant?",
    a: "No single product makes you compliant. Motadata provides the technical controls — monitoring, access governance, audit logging, retention, and breach detection — that support several of the Act's security and data-lifecycle obligations.",
  },
  {
    q: "How does Motadata help with breach notification timelines?",
    a: "ObserveOps surfaces incidents early through continuous monitoring and correlation, while ServiceOps drives structured response workflows and audit-ready documentation so notifications can be issued on time.",
  },
  {
    q: "How long should data and logs be retained?",
    a: "The rules expect security and access logs to be retained for at least one year. Motadata supports configurable retention of 365+ days with tiered, tamper-resistant archiving and automatic deletion afterwards.",
  },
];

/* ── Scroll-spy rule block — reports when it enters the viewport ── */
function RuleBlock({
  rule,
  index,
  onInView,
}: {
  rule: (typeof rules)[number];
  index: number;
  onInView: (i: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-45% 0px -45% 0px" });

  useEffect(() => {
    if (inView) onInView(index);
  }, [inView, index, onInView]);

  return (
    <div
      ref={ref}
      id={`dpdpa-${rule.key}`}
      className="scroll-mt-28 rounded-2xl border border-border/60 bg-white p-7 lg:p-10"
    >
      <h3 className="text-heading-lg text-foreground">{rule.label}</h3>
      <p className="mt-3 text-body-md text-muted-foreground">{rule.intro}</p>

      <div className="mt-8 divide-y divide-border/50">
        {rule.capabilities.map((c) => (
          <div key={c.title} className="py-7 first:pt-0 last:pb-0">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <c.icon className="h-5 w-5" />
              </span>
              <h4 className="text-heading-sm text-foreground">{c.title}</h4>
            </div>
            <p className="mt-4 text-body-sm text-muted-foreground">{c.subtext}</p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {c.points.map((p) => (
                <li key={p} className="flex gap-2.5 text-body-xs text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Numbered option switch (absolute, top-right of a section) ── */
function OptionSwitch({
  value,
  onChange,
  count = 5,
}: {
  value: number;
  onChange: (n: number) => void;
  count?: number;
}) {
  return (
    <div className="absolute right-6 top-6 z-20">
      <div className="inline-flex items-center gap-0.5 rounded-full border border-border/60 bg-white/90 p-1 shadow-sm backdrop-blur">
        {Array.from({ length: count }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            onClick={() => onChange(num)}
            className={`flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-semibold transition-all ${
              value === num
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
            aria-label={`Layout option ${num}`}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
}

const fade = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.25 },
};

type Capability = (typeof rules)[number]["capabilities"][number];

/* ── Shared capability card (used by tab / bento layouts) ── */
function CapabilityCard({ c }: { c: Capability }) {
  return (
    <div className="flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40 hover:bg-muted/30">
      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <c.icon className="h-5 w-5" />
      </div>
      <h4 className="mt-5 text-heading-sm text-foreground">{c.title}</h4>
      <p className="mt-2 text-body-xs text-muted-foreground">{c.subtext}</p>
      <ul className="mt-4 space-y-2">
        {c.points.map((p) => (
          <li key={p} className="flex gap-2 text-body-xs text-muted-foreground">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   APPROACH — 15 layout options
   ══════════════════════════════════════════════════════ */

/* Option 1 — Sticky left tabs + stacked right content (scroll-spy) */
function ApproachScrollSpy() {
  const [activeRule, setActiveRule] = useState(0);
  const handleRuleInView = useCallback((i: number) => setActiveRule(i), []);
  const scrollToRule = (i: number) => {
    setActiveRule(i);
    document.getElementById(`dpdpa-${rules[i].key}`)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[300px,1fr]">
      <div className="lg:sticky lg:top-24 lg:h-fit lg:self-start">
        <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-2.5 lg:overflow-visible lg:pb-0">
          {rules.map((r, i) => {
            const isActive = activeRule === i;
            return (
              <button
                key={r.key}
                onClick={() => scrollToRule(i)}
                className={`group flex w-full shrink-0 items-center justify-between gap-3 rounded-xl border px-5 py-4 text-left transition-colors lg:shrink ${
                  isActive
                    ? "border-primary/40 bg-primary/5"
                    : "border-border bg-card hover:border-primary/30 hover:bg-muted/30"
                }`}
              >
                <span
                  className={`text-label-md transition-colors ${
                    isActive ? "text-primary" : "text-foreground group-hover:text-primary"
                  }`}
                >
                  {r.label}
                </span>
                <ArrowRight
                  className={`h-4 w-4 shrink-0 transition-all ${
                    isActive
                      ? "text-primary opacity-100"
                      : "text-muted-foreground opacity-0 group-hover:opacity-100"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>
      <div className="space-y-8">
        {rules.map((r, i) => (
          <RuleBlock key={r.key} rule={r} index={i} onInView={handleRuleInView} />
        ))}
      </div>
    </div>
  );
}

/* Option 2 — Top pill tabs + capability card grid */
function ApproachTabs() {
  const [active, setActive] = useState(0);
  const rule = rules[active];
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {rules.map((r, i) => (
          <button
            key={r.key}
            onClick={() => setActive(i)}
            className={`rounded-full border px-5 py-2.5 text-label-md transition-colors ${
              active === i
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border text-muted-foreground hover:border-primary/40 hover:text-primary"
            }`}
          >
            {r.label}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={rule.key}
          {...fade}
          className="mt-10 grid items-start gap-8 lg:grid-cols-2"
        >
          {/* Left — main text */}
          <div className="lg:sticky lg:top-24">
            <h3 className="text-heading-lg text-foreground">{rule.label}</h3>
            <p className="mt-4 text-body-md text-muted-foreground">{rule.intro}</p>
          </div>
          {/* Right — capability cards */}
          <div className="grid gap-5">
            {rule.capabilities.map((c) => (
              <CapabilityCard key={c.title} c={c} />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* Option 3 — Vertical accordion of rules */
function ApproachAccordion() {
  const [open, setOpen] = useState(0);
  return (
    <div className="mx-auto max-w-4xl space-y-4">
      {rules.map((r, i) => {
        const isOpen = open === i;
        return (
          <div
            key={r.key}
            className={`overflow-hidden rounded-2xl border bg-white transition-colors ${
              isOpen ? "border-primary/40" : "border-border/60"
            }`}
          >
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left lg:px-8"
            >
              <div>
                <h3 className="text-heading-sm text-foreground">{r.label}</h3>
                <p className="mt-1 text-body-xs text-muted-foreground">{r.intro}</p>
              </div>
              <ChevronDown
                className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-primary" : "text-muted-foreground"
                }`}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="grid gap-5 px-6 pb-7 sm:grid-cols-2 lg:px-8">
                    {r.capabilities.map((c) => (
                      <div key={c.title} className="rounded-xl border border-border/60 bg-muted/10 p-5">
                        <div className="flex items-center gap-2.5">
                          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            <c.icon className="h-4 w-4" />
                          </span>
                          <h4 className="text-label-lg text-foreground">{c.title}</h4>
                        </div>
                        <p className="mt-3 text-body-xs text-muted-foreground">{c.subtext}</p>
                        <ul className="mt-3 space-y-1.5">
                          {c.points.map((p) => (
                            <li key={p} className="flex gap-2 text-body-xs text-muted-foreground">
                              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                              <span>{p}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

/* Option 4 — Segmented selector + bento card grid */
function ApproachBento() {
  const [active, setActive] = useState(0);
  const rule = rules[active];
  return (
    <div>
      <div className="flex justify-center">
        <div className="inline-flex flex-wrap items-center justify-center gap-1 rounded-xl border border-border/60 bg-muted/20 p-1">
          {rules.map((r, i) => (
            <button
              key={r.key}
              onClick={() => setActive(i)}
              className={`rounded-lg px-4 py-2 text-label-sm transition-all ${
                active === i
                  ? "bg-white text-foreground shadow-sm ring-1 ring-primary/30"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={rule.key}
          {...fade}
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {rule.capabilities.map((c) => (
            <CapabilityCard key={c.title} c={c} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* Option 5 — Split: left rule menu (click) + right detail panel */
function ApproachSplit() {
  const [active, setActive] = useState(0);
  const rule = rules[active];
  return (
    <div className="overflow-hidden rounded-2xl border border-border/60 bg-white">
      <div className="grid lg:grid-cols-[300px,1fr]">
        <div className="border-b border-border/60 p-3 lg:border-b-0 lg:border-r">
          <div className="flex gap-2 overflow-x-auto lg:flex-col lg:gap-1">
            {rules.map((r, i) => {
              const isActive = active === i;
              return (
                <button
                  key={r.key}
                  onClick={() => setActive(i)}
                  className={`flex w-full shrink-0 items-center gap-3 rounded-xl px-4 py-4 text-left transition-colors lg:shrink ${
                    isActive ? "bg-primary/5" : "hover:bg-muted/40"
                  }`}
                >
                  <span className="text-label-md-strong text-primary/70">{i + 1}</span>
                  <span
                    className={`text-label-md ${
                      isActive ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {r.label}
                  </span>
                  <ArrowRight
                    className={`ml-auto h-4 w-4 shrink-0 transition-all ${
                      isActive ? "text-primary opacity-100" : "opacity-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={rule.key} {...fade} className="p-7 lg:p-10">
            <h3 className="text-heading-lg text-foreground">{rule.label}</h3>
            <p className="mt-3 text-body-md text-muted-foreground">{rule.intro}</p>
            <div className="mt-8 divide-y divide-border/50">
              {rule.capabilities.map((c) => (
                <div key={c.title} className="py-6 first:pt-0 last:pb-0">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <h4 className="text-heading-sm text-foreground">{c.title}</h4>
                  </div>
                  <p className="mt-3 text-body-sm text-muted-foreground">{c.subtext}</p>
                  <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                    {c.points.map((p) => (
                      <li key={p} className="flex gap-2.5 text-body-xs text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/* Option 6 — Showcase: featured hero capability + card grid */
function ApproachShowcase() {
  const [active, setActive] = useState(0);
  const rule = rules[active];
  const [hero, ...rest] = rule.capabilities;
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {rules.map((r, i) => (
          <button
            key={r.key}
            onClick={() => setActive(i)}
            className={`rounded-full px-5 py-2.5 text-label-md transition-colors ${
              active === i
                ? "bg-primary text-primary-foreground"
                : "bg-muted/40 text-muted-foreground hover:text-foreground"
            }`}
          >
            {r.label}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={rule.key} {...fade} className="mt-10 space-y-5">
          <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/[0.07] to-transparent p-8 lg:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <hero.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-heading-lg text-foreground">{hero.title}</h3>
            <p className="mt-3 max-w-2xl text-body-md text-muted-foreground">{hero.subtext}</p>
            <ul className="mt-5 grid gap-2.5 sm:grid-cols-2 lg:max-w-2xl">
              {hero.points.map((p) => (
                <li key={p} className="flex gap-2.5 text-body-xs text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          {rest.length > 0 && (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((c) => (
                <CapabilityCard key={c.title} c={c} />
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* Option 7 — Alternating feature rows */
function ApproachFeatureRows() {
  const [active, setActive] = useState(0);
  const rule = rules[active];
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 border-b border-border/60">
        {rules.map((r, i) => (
          <button
            key={r.key}
            onClick={() => setActive(i)}
            className={`-mb-px border-b-2 px-1 py-3 text-label-md transition-colors ${
              active === i
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            {r.label}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={rule.key} {...fade} className="mt-10 space-y-4">
          {rule.capabilities.map((c, i) => {
            const flip = i % 2 === 1;
            return (
              <div
                key={c.title}
                className="grid items-center gap-6 rounded-2xl border border-border/60 bg-white p-6 lg:grid-cols-2 lg:p-8"
              >
                <div className={flip ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <h4 className="text-heading-sm text-foreground">{c.title}</h4>
                  </div>
                  <p className="mt-4 text-body-sm text-muted-foreground">{c.subtext}</p>
                </div>
                <ul className={`grid gap-2.5 rounded-xl bg-muted/20 p-5 ${flip ? "lg:order-1" : ""}`}>
                  {c.points.map((p) => (
                    <li key={p} className="flex gap-2.5 text-body-xs text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* Option 8 — Bento grid with a featured spanning tile */
function ApproachBentoSpan() {
  const [active, setActive] = useState(0);
  const rule = rules[active];
  return (
    <div>
      <div className="flex justify-center">
        <div className="inline-flex flex-wrap items-center justify-center gap-1 rounded-xl border border-border/60 bg-muted/20 p-1">
          {rules.map((r, i) => (
            <button
              key={r.key}
              onClick={() => setActive(i)}
              className={`rounded-lg px-4 py-2 text-label-sm transition-all ${
                active === i
                  ? "bg-white text-foreground shadow-sm ring-1 ring-primary/30"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={rule.key} {...fade} className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rule.capabilities.map((c, i) => (
            <div
              key={c.title}
              className={`flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40 ${
                i === 0 ? "bg-gradient-to-br from-primary/[0.06] to-transparent sm:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <c.icon className="h-5 w-5" />
              </div>
              <h4 className={`mt-5 text-foreground ${i === 0 ? "text-heading-lg" : "text-heading-sm"}`}>
                {c.title}
              </h4>
              <p className="mt-2 text-body-xs text-muted-foreground">{c.subtext}</p>
              {i === 0 && (
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {c.points.map((p) => (
                    <li key={p} className="flex gap-2 text-body-xs text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* Option 9 — Numbered vertical steps with connecting line */
function ApproachVerticalSteps() {
  const [active, setActive] = useState(0);
  const rule = rules[active];
  return (
    <div className="mx-auto max-w-4xl">
      <div className="flex flex-wrap justify-center gap-2">
        {rules.map((r, i) => (
          <button
            key={r.key}
            onClick={() => setActive(i)}
            className={`rounded-full border px-5 py-2.5 text-label-md transition-colors ${
              active === i
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border text-muted-foreground hover:border-primary/40 hover:text-primary"
            }`}
          >
            {r.label}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={rule.key} {...fade} className="relative mt-10">
          <div className="absolute bottom-6 left-[1.375rem] top-6 w-px bg-gradient-to-b from-primary/40 via-border to-transparent" />
          <div className="space-y-6">
            {rule.capabilities.map((c, i) => (
              <div key={c.title} className="relative flex gap-5">
                <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-white text-label-md-strong text-primary">
                  {i + 1}
                </span>
                <div className="flex-1 rounded-2xl border border-border/60 bg-white p-6">
                  <div className="flex items-center gap-2.5">
                    <c.icon className="h-5 w-5 text-primary" />
                    <h4 className="text-heading-sm text-foreground">{c.title}</h4>
                  </div>
                  <p className="mt-2 text-body-xs text-muted-foreground">{c.subtext}</p>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {c.points.map((p) => (
                      <li key={p} className="flex gap-2 text-body-xs text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* Option 10 — Horizontal scroll-snap rule cards */
function ApproachCarousel() {
  return (
    <div className="-mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4">
      {rules.map((r) => (
        <div
          key={r.key}
          className="w-[85%] shrink-0 snap-start rounded-2xl border border-border/60 bg-white p-7 sm:w-[60%] lg:w-[38%]"
        >
          <h3 className="text-heading-sm text-foreground">{r.label}</h3>
          <p className="mt-2 text-body-xs text-muted-foreground">{r.intro}</p>
          <div className="mt-5 space-y-4">
            {r.capabilities.map((c) => (
              <div key={c.title} className="flex gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <c.icon className="h-4 w-4" />
                </span>
                <div>
                  <h4 className="text-label-lg text-foreground">{c.title}</h4>
                  <p className="mt-0.5 text-body-xs text-muted-foreground">{c.subtext}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* Option 11 — Branded spotlight panel */
function ApproachSpotlight() {
  const [active, setActive] = useState(0);
  const rule = rules[active];
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {rules.map((r, i) => (
          <button
            key={r.key}
            onClick={() => setActive(i)}
            className={`rounded-full border px-5 py-2.5 text-label-md transition-colors ${
              active === i
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border text-muted-foreground hover:border-primary/40 hover:text-primary"
            }`}
          >
            {r.label}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={rule.key}
          {...fade}
          className="relative mt-10 overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/[0.08] via-white to-white p-8 lg:p-12"
        >
          <div className="grid gap-10 lg:grid-cols-[1fr,1.3fr]">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-white/70 px-3 py-1 text-label-sm text-primary">
                Compliance focus
              </span>
              <h3 className="mt-4 text-display-md text-foreground">{rule.label}</h3>
              <p className="mt-4 text-body-md text-muted-foreground">{rule.intro}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {rule.capabilities.map((c) => (
                <div key={c.title} className="rounded-2xl border border-border/60 bg-white/80 p-5 backdrop-blur">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <c.icon className="h-4 w-4" />
                    </span>
                    <h4 className="text-label-lg text-foreground">{c.title}</h4>
                  </div>
                  <p className="mt-3 text-body-xs text-muted-foreground">{c.subtext}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* Option 12 — Expandable capability tiles */
function ApproachExpandTiles() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(0);
  const rule = rules[active];
  return (
    <div>
      <div className="flex justify-center">
        <div className="inline-flex flex-wrap items-center justify-center gap-1 rounded-xl border border-border/60 bg-muted/20 p-1">
          {rules.map((r, i) => (
            <button
              key={r.key}
              onClick={() => {
                setActive(i);
                setOpen(0);
              }}
              className={`rounded-lg px-4 py-2 text-label-sm transition-all ${
                active === i
                  ? "bg-white text-foreground shadow-sm ring-1 ring-primary/30"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-10 grid max-w-4xl gap-3">
        {rule.capabilities.map((c, i) => {
          const isOpen = open === i;
          return (
            <div
              key={c.title}
              className={`overflow-hidden rounded-2xl border bg-white transition-colors ${
                isOpen ? "border-primary/40" : "border-border/60"
              }`}
            >
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center gap-4 p-5 text-left"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <c.icon className="h-5 w-5" />
                </span>
                <span className="flex-1 text-heading-sm text-foreground">{c.title}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 transition-transform ${
                    isOpen ? "rotate-180 text-primary" : "text-muted-foreground"
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-6 pl-[4.5rem]">
                      <p className="text-body-sm text-muted-foreground">{c.subtext}</p>
                      <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                        {c.points.map((p) => (
                          <li key={p} className="flex gap-2 text-body-xs text-muted-foreground">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* Option 13 — Minimal editorial list */
function ApproachMinimalList() {
  const [active, setActive] = useState(0);
  const rule = rules[active];
  return (
    <div className="mx-auto max-w-4xl">
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
        {rules.map((r, i) => (
          <button
            key={r.key}
            onClick={() => setActive(i)}
            className={`text-label-md transition-colors ${
              active === i
                ? "text-primary underline decoration-primary/40 decoration-2 underline-offset-8"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {r.label}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={rule.key} {...fade} className="mt-12 divide-y divide-border/50">
          {rule.capabilities.map((c, i) => (
            <div key={c.title} className="grid gap-4 py-8 first:pt-0 last:pb-0 sm:grid-cols-[auto,1fr]">
              <span className="select-none text-[2.5rem] font-bold leading-none text-primary/15">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h4 className="text-heading-sm text-foreground">{c.title}</h4>
                <p className="mt-2 max-w-2xl text-body-sm text-muted-foreground">{c.subtext}</p>
                <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                  {c.points.map((p) => (
                    <li key={p} className="flex gap-2 text-body-xs text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* Option 14 — Left icon rail selector */
function ApproachIconRail() {
  const [active, setActive] = useState(0);
  const rule = rules[active];
  return (
    <div className="grid gap-6 lg:grid-cols-[80px,1fr]">
      <div className="flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
        {rules.map((r, i) => {
          const Icon = r.capabilities[0].icon;
          const isActive = active === i;
          return (
            <button
              key={r.key}
              onClick={() => setActive(i)}
              title={r.label}
              className={`group flex h-16 w-16 shrink-0 flex-col items-center justify-center gap-1 rounded-2xl border transition-colors ${
                isActive
                  ? "border-primary/40 bg-primary/5 text-primary"
                  : "border-border bg-card text-muted-foreground hover:border-primary/30 hover:text-primary"
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="text-[10px] font-semibold">{i + 1}</span>
            </button>
          );
        })}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={rule.key} {...fade} className="rounded-2xl border border-border/60 bg-white p-7 lg:p-9">
          <h3 className="text-heading-lg text-foreground">{rule.label}</h3>
          <p className="mt-2 text-body-md text-muted-foreground">{rule.intro}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {rule.capabilities.map((c) => (
              <div key={c.title} className="rounded-xl border border-border/60 bg-muted/10 p-5">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <c.icon className="h-4 w-4" />
                  </span>
                  <h4 className="text-label-lg text-foreground">{c.title}</h4>
                </div>
                <p className="mt-3 text-body-xs text-muted-foreground">{c.subtext}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* Option 15 — Compact indexed stat cards */
function ApproachStatCards() {
  const [active, setActive] = useState(0);
  const rule = rules[active];
  return (
    <div>
      <div className="flex justify-center">
        <div className="inline-flex flex-wrap items-center justify-center gap-1 rounded-xl border border-border/60 bg-muted/20 p-1">
          {rules.map((r, i) => (
            <button
              key={r.key}
              onClick={() => setActive(i)}
              className={`rounded-lg px-4 py-2 text-label-sm transition-all ${
                active === i
                  ? "bg-white text-foreground shadow-sm ring-1 ring-primary/30"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={rule.key} {...fade} className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rule.capabilities.map((c, i) => (
            <div
              key={c.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
            >
              <span className="absolute right-4 top-4 text-label-md-strong text-primary/20">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <c.icon className="h-5 w-5" />
              </div>
              <h4 className="mt-5 text-heading-sm text-foreground">{c.title}</h4>
              <p className="mt-2 text-body-xs text-muted-foreground">{c.subtext}</p>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   ROADMAP — 15 layout options
   ══════════════════════════════════════════════════════ */

/* Option 1 — Cards only (no progress track / nodes) */
function RoadmapTrack() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {timeline.map((t, i) => {
        const meta = statusMeta[t.status];
        const isActive = t.status === "active";
        return (
          <motion.div
            key={t.phase}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.12 }}
            className={`rounded-xl border bg-card p-6 transition-colors ${
              isActive ? "border-primary/40 shadow-sm" : "border-border"
            }`}
          >
            <div className="flex items-center justify-between gap-2">
              <span className="text-overline text-muted-foreground/70">{t.phase}</span>
              <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-label-sm ${meta.chip}`}>
                {meta.label}
              </span>
            </div>
            <h3 className="mt-3 text-heading-sm text-foreground">{t.title}</h3>
            <p className="mt-1 text-label-sm text-primary">{t.date}</p>
            <p className="mt-3 text-body-xs text-muted-foreground">{t.description}</p>
          </motion.div>
        );
      })}
    </div>
  );
}

/* Option 2 — Vertical timeline with left rail */
function RoadmapVertical() {
  return (
    <div className="mx-auto max-w-3xl">
      {timeline.map((t, i) => {
        const meta = statusMeta[t.status];
        const isActive = t.status === "active";
        const last = i === timeline.length - 1;
        return (
          <div key={t.phase} className="relative flex gap-5">
            <div className="flex flex-col items-center">
              <span className={`relative z-10 flex h-7 w-7 items-center justify-center rounded-full border-2 bg-white ${meta.ring}`}>
                {isActive && (
                  <span className="absolute inline-flex h-2.5 w-2.5 animate-ping rounded-full bg-primary opacity-60" />
                )}
                <span className={`relative h-2.5 w-2.5 rounded-full ${meta.dot}`} />
              </span>
              {!last && <span className="w-0.5 flex-1 bg-border" />}
            </div>
            <div
              className={`mb-8 flex-1 rounded-xl border bg-card p-6 transition-colors ${
                isActive ? "border-primary/40 shadow-sm" : "border-border"
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-overline text-muted-foreground/70">{t.phase} · {t.date}</span>
                <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-label-sm ${meta.chip}`}>
                  {meta.label}
                </span>
              </div>
              <h3 className="mt-3 text-heading-sm text-foreground">{t.title}</h3>
              <p className="mt-2 text-body-xs text-muted-foreground">{t.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* Option 3 — Horizontal numbered stepper */
function RoadmapStepper() {
  return (
    <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-0">
      {timeline.map((t, i) => {
        const meta = statusMeta[t.status];
        const isActive = t.status === "active";
        const last = i === timeline.length - 1;
        return (
          <Fragment key={t.phase}>
            <div className="flex flex-1 flex-col items-center px-4 text-center">
              <span className={`relative flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white text-heading-sm ${isActive ? "border-primary text-primary" : "border-border text-muted-foreground"}`}>
                {isActive && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-20" />
                )}
                {i + 1}
              </span>
              <span className={`mt-4 inline-flex items-center rounded-full border px-2.5 py-0.5 text-label-sm ${meta.chip}`}>
                {meta.label}
              </span>
              <h3 className="mt-3 text-heading-sm text-foreground">{t.title}</h3>
              <p className="mt-1 text-label-sm text-primary">{t.date}</p>
              <p className="mt-2 max-w-xs text-body-xs text-muted-foreground">{t.description}</p>
            </div>
            {!last && (
              <div className="hidden items-center pt-6 lg:flex">
                <ArrowRight className="h-5 w-5 text-border" />
              </div>
            )}
          </Fragment>
        );
      })}
    </div>
  );
}

/* Option 4 — Gantt-style bars on a time axis */
function RoadmapGantt() {
  const bars = [
    { left: "0%", width: "42%" },
    { left: "29%", width: "46%" },
    { left: "60%", width: "40%" },
  ];
  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-3 flex justify-between text-caption text-muted-foreground">
        <span>Nov 2025</span>
        <span>Nov 2026</span>
        <span>May 2027</span>
      </div>
      <div className="space-y-3">
        {timeline.map((t, i) => {
          const meta = statusMeta[t.status];
          const bar = bars[i];
          return (
            <motion.div
              key={t.phase}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-4"
            >
              <div className="mb-2.5 flex items-center justify-between gap-2">
                <span className="text-label-md text-foreground">
                  <span className="text-muted-foreground/70">{t.phase} · </span>
                  {t.title}
                </span>
                <span className={`inline-flex shrink-0 items-center rounded-full border px-2.5 py-0.5 text-label-sm ${meta.chip}`}>
                  {meta.label}
                </span>
              </div>
              <div className="relative h-8 overflow-hidden rounded-full bg-muted/40">
                <div
                  className="absolute top-0 flex h-8 items-center rounded-full px-3"
                  style={{
                    left: bar.left,
                    width: bar.width,
                    background: "linear-gradient(90deg, hsl(var(--gradient-from)), hsl(var(--gradient-to)))",
                  }}
                >
                  <span className="truncate text-label-sm text-white">{t.date}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

/* Option 5 — Alternating zig-zag timeline */
function RoadmapZigzag() {
  return (
    <div className="relative mx-auto max-w-4xl">
      <div className="absolute bottom-0 left-1/2 top-0 hidden w-0.5 -translate-x-1/2 bg-border lg:block" />
      <div className="space-y-10">
        {timeline.map((t, i) => {
          const meta = statusMeta[t.status];
          const isActive = t.status === "active";
          const leftSide = i % 2 === 0;
          return (
            <div key={t.phase} className="relative lg:grid lg:grid-cols-2 lg:gap-12">
              <span className="absolute left-1/2 top-6 z-10 hidden h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full border-2 border-primary bg-white lg:flex">
                {isActive && (
                  <span className="absolute inline-flex h-2.5 w-2.5 animate-ping rounded-full bg-primary opacity-60" />
                )}
                <span className={`relative h-2 w-2 rounded-full ${meta.dot}`} />
              </span>
              <div className={leftSide ? "lg:col-start-1 lg:text-right" : "lg:col-start-2"}>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className={`rounded-xl border bg-card p-6 transition-colors ${
                    isActive ? "border-primary/40 shadow-sm" : "border-border"
                  }`}
                >
                  <div className={`flex flex-wrap items-center gap-2 ${leftSide ? "lg:justify-end" : ""}`}>
                    <span className="text-overline text-muted-foreground/70">{t.phase} · {t.date}</span>
                    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-label-sm ${meta.chip}`}>
                      {meta.label}
                    </span>
                  </div>
                  <h3 className="mt-3 text-heading-sm text-foreground">{t.title}</h3>
                  <p className="mt-2 text-body-xs text-muted-foreground">{t.description}</p>
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* Option 6 — Now / Next / Later product-roadmap columns */
function RoadmapColumns() {
  const headers = ["Now", "Next", "Later"];
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {timeline.map((t, i) => {
        const meta = statusMeta[t.status];
        const isActive = t.status === "active";
        return (
          <motion.div
            key={t.phase}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="rounded-2xl border border-border bg-card p-1.5"
          >
            <div
              className={`rounded-xl px-4 py-2.5 text-center text-label-md ${
                isActive ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
              }`}
            >
              {headers[i] ?? t.phase}
            </div>
            <div className="p-5">
              <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-label-sm ${meta.chip}`}>
                {meta.label}
              </span>
              <h3 className="mt-3 text-heading-sm text-foreground">{t.title}</h3>
              <p className="mt-1 text-label-sm text-primary">{t.date}</p>
              <p className="mt-3 text-body-xs text-muted-foreground">{t.description}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

/* Option 7 — Oversized index numbers, vertical list */
function RoadmapBigIndex() {
  return (
    <div className="mx-auto max-w-3xl divide-y divide-border/60">
      {timeline.map((t, i) => {
        const meta = statusMeta[t.status];
        return (
          <motion.div
            key={t.phase}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex gap-6 py-8 first:pt-0 last:pb-0"
          >
            <span className="select-none text-[3.5rem] font-bold leading-none text-primary/15">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-overline text-muted-foreground/70">{t.phase} · {t.date}</span>
                <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-label-sm ${meta.chip}`}>
                  {meta.label}
                </span>
              </div>
              <h3 className="mt-2 text-heading-sm text-foreground">{t.title}</h3>
              <p className="mt-2 text-body-xs text-muted-foreground">{t.description}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

/* Option 8 — Interactive: pick a phase, see its detail */
function RoadmapInteractive() {
  const [active, setActive] = useState(Math.max(0, timeline.findIndex((t) => t.status === "active")));
  const t = timeline[active];
  const meta = statusMeta[t.status];
  return (
    <div className="mx-auto max-w-4xl">
      <div className="grid gap-2 sm:grid-cols-3">
        {timeline.map((p, i) => {
          const sel = active === i;
          return (
            <button
              key={p.phase}
              onClick={() => setActive(i)}
              className={`rounded-xl border p-4 text-left transition-colors ${
                sel ? "border-primary/40 bg-primary/5" : "border-border bg-card hover:border-primary/30"
              }`}
            >
              <span className="text-overline text-muted-foreground/70">{p.phase}</span>
              <p className={`mt-1 text-label-md ${sel ? "text-primary" : "text-foreground"}`}>{p.date}</p>
            </button>
          );
        })}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={t.phase}
          {...fade}
          className="mt-6 rounded-2xl border border-border/60 bg-card p-7 lg:p-10"
        >
          <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-label-sm ${meta.chip}`}>
            {meta.label}
          </span>
          <h3 className="mt-4 text-heading-lg text-foreground">{t.title}</h3>
          <p className="mt-3 text-body-md text-muted-foreground">{t.description}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* Option 9 — Thin milestone progress bar + cards */
function RoadmapProgressBar() {
  const positions = ["6%", "50%", "94%"];
  return (
    <div className="mx-auto max-w-4xl">
      <div className="px-2 pt-10">
        <div className="relative h-1.5 rounded-full bg-border">
          <div
            className="absolute left-0 top-0 h-1.5 rounded-full"
            style={{
              width: "6%",
              background: "linear-gradient(90deg, hsl(var(--gradient-from)), hsl(var(--gradient-to)))",
            }}
          />
          {timeline.map((t, i) => {
            const meta = statusMeta[t.status];
            const isActive = t.status === "active";
            return (
              <div key={t.phase} className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ left: positions[i] }}>
                <span className={`relative flex h-5 w-5 items-center justify-center rounded-full border-2 bg-white ${meta.ring}`}>
                  {isActive && (
                    <span className="absolute inline-flex h-2.5 w-2.5 animate-ping rounded-full bg-primary opacity-60" />
                  )}
                  <span className={`relative h-2 w-2 rounded-full ${meta.dot}`} />
                </span>
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-label-sm text-primary">
                  {t.date}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {timeline.map((t) => {
          const meta = statusMeta[t.status];
          const isActive = t.status === "active";
          return (
            <div
              key={t.phase}
              className={`rounded-xl border bg-card p-6 ${isActive ? "border-primary/40 shadow-sm" : "border-border"}`}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-overline text-muted-foreground/70">{t.phase}</span>
                <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-label-sm ${meta.chip}`}>
                  {meta.label}
                </span>
              </div>
              <h3 className="mt-3 text-heading-sm text-foreground">{t.title}</h3>
              <p className="mt-2 text-body-xs text-muted-foreground">{t.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* Option 10 — Minimal divided rows */
function RoadmapMinimalRows() {
  return (
    <div className="mx-auto max-w-3xl divide-y divide-border/60 overflow-hidden rounded-2xl border border-border/60 bg-card">
      {timeline.map((t, i) => {
        const meta = statusMeta[t.status];
        const isActive = t.status === "active";
        return (
          <motion.div
            key={t.phase}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.08 }}
            className={`flex flex-col gap-4 p-6 sm:flex-row sm:items-center ${isActive ? "bg-primary/5" : ""}`}
          >
            <div className="shrink-0 sm:w-32">
              <p className="text-label-md text-primary">{t.date}</p>
              <p className="text-overline text-muted-foreground/70">{t.phase}</p>
            </div>
            <div className="flex-1">
              <h3 className="text-heading-sm text-foreground">{t.title}</h3>
              <p className="mt-1 text-body-xs text-muted-foreground">{t.description}</p>
            </div>
            <span className={`inline-flex shrink-0 items-center self-start rounded-full border px-2.5 py-0.5 text-label-sm sm:self-center ${meta.chip}`}>
              {meta.label}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}

/* Option 11 — Connected gradient line + glass cards */
function RoadmapConnected() {
  return (
    <div className="relative mx-auto max-w-5xl">
      <div className="absolute left-0 right-0 top-7 hidden h-0.5 bg-gradient-to-r from-primary via-primary/40 to-border lg:block" />
      <div className="grid gap-8 lg:grid-cols-3 lg:gap-6">
        {timeline.map((t, i) => {
          const meta = statusMeta[t.status];
          const isActive = t.status === "active";
          return (
            <motion.div
              key={t.phase}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              className="relative"
            >
              <div className="mb-6 flex justify-center lg:justify-start">
                <span
                  className={`relative flex h-14 w-14 items-center justify-center rounded-2xl border-2 bg-white text-heading-sm font-bold ${
                    isActive ? "border-primary text-primary shadow-sm" : "border-border text-muted-foreground"
                  }`}
                >
                  {isActive && (
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-2xl bg-primary opacity-10" />
                  )}
                  {i + 1}
                </span>
              </div>
              <div
                className={`rounded-2xl border bg-white/80 p-6 backdrop-blur transition-colors ${
                  isActive ? "border-primary/40 shadow-sm" : "border-border/60"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-overline text-muted-foreground/70">{t.phase} · {t.date}</span>
                  <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-label-sm ${meta.chip}`}>
                    {meta.label}
                  </span>
                </div>
                <h3 className="mt-3 text-heading-sm text-foreground">{t.title}</h3>
                <p className="mt-2 text-body-xs text-muted-foreground">{t.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

/* Option 12 — Spotlight active phase with clickable side list */
function RoadmapSpotlight() {
  const activeIdx = Math.max(0, timeline.findIndex((t) => t.status === "active"));
  const [sel, setSel] = useState(activeIdx);
  const t = timeline[sel];
  const meta = statusMeta[t.status];
  return (
    <div className="grid gap-6 lg:grid-cols-[1.4fr,1fr]">
      <AnimatePresence mode="wait">
        <motion.div
          key={t.phase}
          {...fade}
          className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/[0.08] via-white to-white p-8 lg:p-12"
        >
          <span className="text-overline text-muted-foreground/70">{t.phase}</span>
          <p className="mt-2 text-display-md text-primary">{t.date}</p>
          <span className={`mt-4 inline-flex items-center rounded-full border px-2.5 py-0.5 text-label-sm ${meta.chip}`}>
            {meta.label}
          </span>
          <h3 className="mt-5 text-heading-lg text-foreground">{t.title}</h3>
          <p className="mt-3 max-w-xl text-body-md text-muted-foreground">{t.description}</p>
        </motion.div>
      </AnimatePresence>
      <div className="flex flex-col gap-3">
        {timeline.map((p, i) => {
          const m = statusMeta[p.status];
          const on = sel === i;
          return (
            <button
              key={p.phase}
              onClick={() => setSel(i)}
              className={`flex items-center gap-4 rounded-2xl border p-5 text-left transition-colors ${
                on ? "border-primary/40 bg-primary/5" : "border-border bg-card hover:border-primary/30"
              }`}
            >
              <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 bg-white ${m.ring}`}>
                <span className={`h-2.5 w-2.5 rounded-full ${m.dot}`} />
              </span>
              <span className="flex-1">
                <span className="block text-label-md text-foreground">{p.title}</span>
                <span className="text-body-xs text-muted-foreground">{p.phase} · {p.date}</span>
              </span>
              <ArrowRight className={`h-4 w-4 shrink-0 transition-all ${on ? "text-primary opacity-100" : "opacity-0"}`} />
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* Option 13 — Vertical gradient rail with number nodes */
function RoadmapGradientRail() {
  return (
    <div className="relative mx-auto max-w-2xl">
      <div className="absolute bottom-6 left-6 top-6 w-0.5 bg-gradient-to-b from-primary via-primary/40 to-border" />
      <div className="space-y-6">
        {timeline.map((t, i) => {
          const meta = statusMeta[t.status];
          const isActive = t.status === "active";
          return (
            <motion.div
              key={t.phase}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative flex gap-5"
            >
              <span
                className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-label-md-strong text-white shadow-sm"
                style={{ background: "linear-gradient(135deg, hsl(var(--gradient-from)), hsl(var(--gradient-to)))" }}
              >
                {i + 1}
              </span>
              <div className={`flex-1 rounded-2xl border bg-white p-6 ${isActive ? "border-primary/40 shadow-sm" : "border-border/60"}`}>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-overline text-muted-foreground/70">{t.phase} · {t.date}</span>
                  <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-label-sm ${meta.chip}`}>
                    {meta.label}
                  </span>
                </div>
                <h3 className="mt-3 text-heading-sm text-foreground">{t.title}</h3>
                <p className="mt-2 text-body-xs text-muted-foreground">{t.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

/* Option 14 — Horizontal scroll-snap phase cards */
function RoadmapTicker() {
  return (
    <div className="-mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4">
      {timeline.map((t, i) => {
        const meta = statusMeta[t.status];
        const isActive = t.status === "active";
        return (
          <div
            key={t.phase}
            className={`relative w-[80%] shrink-0 snap-center overflow-hidden rounded-3xl border p-8 sm:w-[55%] lg:w-[40%] ${
              isActive ? "border-primary/40 bg-gradient-to-br from-primary/[0.07] to-transparent shadow-sm" : "border-border bg-card"
            }`}
          >
            <span className="select-none text-[4rem] font-bold leading-none text-primary/10">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-label-sm ${meta.chip}`}>
              {meta.label}
            </span>
            <p className="mt-4 text-label-md text-primary">{t.phase} · {t.date}</p>
            <h3 className="mt-1 text-heading-lg text-foreground">{t.title}</h3>
            <p className="mt-3 text-body-sm text-muted-foreground">{t.description}</p>
          </div>
        );
      })}
    </div>
  );
}

/* Option 15 — Dashboard-style metric tiles */
function RoadmapDashboard() {
  const progress = ["100%", "45%", "10%"];
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {timeline.map((t, i) => {
        const meta = statusMeta[t.status];
        const isActive = t.status === "active";
        return (
          <motion.div
            key={t.phase}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className={`rounded-2xl border bg-card p-6 ${isActive ? "border-primary/40 shadow-sm" : "border-border"}`}
          >
            <div className="flex items-center justify-between">
              <span className="text-overline text-muted-foreground/70">{t.phase}</span>
              <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-label-sm ${meta.chip}`}>
                {meta.label}
              </span>
            </div>
            <p className="mt-4 text-display-md text-foreground">{t.date}</p>
            <h3 className="mt-1 text-heading-sm text-foreground">{t.title}</h3>
            <p className="mt-2 text-body-xs text-muted-foreground">{t.description}</p>
            <div className="mt-5">
              <div className="mb-1.5 flex justify-between text-caption text-muted-foreground">
                <span>Readiness</span>
                <span>{progress[i]}</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full"
                  style={{ width: progress[i], background: "linear-gradient(90deg, hsl(var(--gradient-from)), hsl(var(--gradient-to)))" }}
                />
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export function DpdpaDetail() {
  const [openFaq, setOpenFaq] = useState(0);
  const [approachOption, setApproachOption] = useState(1);
  const [roadmapOption, setRoadmapOption] = useState(1);

  const approachVariants = [
    <ApproachScrollSpy key="a1" />,
    <ApproachTabs key="a2" />,
    <ApproachAccordion key="a3" />,
    <ApproachBento key="a4" />,
    <ApproachSplit key="a5" />,
    <ApproachShowcase key="a6" />,
    <ApproachFeatureRows key="a7" />,
    <ApproachBentoSpan key="a8" />,
    <ApproachVerticalSteps key="a9" />,
    <ApproachCarousel key="a10" />,
    <ApproachSpotlight key="a11" />,
    <ApproachExpandTiles key="a12" />,
    <ApproachMinimalList key="a13" />,
    <ApproachIconRail key="a14" />,
    <ApproachStatCards key="a15" />,
  ];
  const roadmapVariants = [
    <RoadmapGantt key="r4" />,
    <RoadmapVertical key="r2" />,
    <RoadmapStepper key="r3" />,
    <RoadmapTrack key="r1" />,
    <RoadmapZigzag key="r5" />,
    <RoadmapColumns key="r6" />,
    <RoadmapBigIndex key="r7" />,
    <RoadmapInteractive key="r8" />,
    <RoadmapProgressBar key="r9" />,
    <RoadmapMinimalRows key="r10" />,
    <RoadmapConnected key="r11" />,
    <RoadmapSpotlight key="r12" />,
    <RoadmapGradientRail key="r13" />,
    <RoadmapTicker key="r14" />,
    <RoadmapDashboard key="r15" />,
  ];

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative z-10 overflow-hidden py-24 lg:py-32">
        <HeroOrbs />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <FadeUp delay={100}>
              <div className="flex justify-center">
                <AnimatedBadge text="DPDPA Compliance" />
              </div>
            </FadeUp>
            <FadeUp delay={250}>
              <h1 className="mt-6 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-tight">
                Complying with India&apos;s Digital Personal Data Protection Act
              </h1>
            </FadeUp>
            <FadeUp delay={400}>
              <p className="mx-auto mt-5 max-w-2xl text-body-md text-muted-foreground">
                Protect customer privacy, streamline data governance, and reduce the risk of data
                breaches — with Motadata&apos;s unified observability and service-management platform.
              </p>
            </FadeUp>
            <FadeUp delay={550}>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/schedule-demo"
                  className={cn(buttonVariants({ size: "lg" }), "h-12 rounded-xl")}
                >
                  Talk to a Specialist <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
                <Link
                  href="#framework"
                  className={cn(buttonVariants({ size: "lg", variant: "outline" }), "h-12 rounded-xl")}
                >
                  Explore the Framework
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── What is DPDPA ────────────────────────────────── */}
      <section className="relative z-10">
        <div className="mx-auto w-full max-w-7xl px-6 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid items-start gap-10 rounded-2xl border border-border/60 bg-white p-8 lg:grid-cols-[1fr,1.1fr] lg:p-12"
          >
            <div>
              <p className="text-overline text-primary">Overview</p>
              <h2 className="mt-3 text-display-md">What is the DPDPA?</h2>
            </div>
            <div className="space-y-4 text-body-md text-muted-foreground">
              <p>
                The Digital Personal Data Protection Act, 2023 is India&apos;s comprehensive privacy
                law. It governs how organisations collect, use, store, and safeguard the personal
                data of individuals, and grants people meaningful rights over their own data.
              </p>
              <p>
                It applies to personal data processed within India — whether collected digitally or
                later digitised — and to processing outside India that is connected to offering
                goods or services to people in India. Organisations acting as Data Fiduciaries must
                implement reasonable security safeguards, honour consent, notify breaches, and
                retain data only as long as it is needed.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Why comply ───────────────────────────────────── */}
      <section className="relative z-10">
        <div className="mx-auto w-full max-w-7xl px-6 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-overline text-primary">Why It Matters</p>
            <h2 className="mt-3 text-display-md">Why comply with the DPDPA?</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-xl border border-border bg-card p-8 transition-colors hover:border-primary/40 hover:bg-muted/30"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <b.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-heading-sm text-foreground">{b.title}</h3>
                <p className="mt-2 text-body-xs text-muted-foreground">{b.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline / Roadmap ───────────────────────────── */}
      <section className="relative z-10 bg-white">
        <OptionSwitch value={roadmapOption} onChange={setRoadmapOption} count={15} />
        <div className="mx-auto w-full max-w-7xl px-6 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-overline text-primary">Roadmap</p>
            <h2 className="mt-3 text-display-md">Implementation timeline</h2>
            <p className="mt-4 text-body-md text-muted-foreground">
              The Act rolls out in phases. Use the runway to put controls in place before
              obligations apply in full.
            </p>
          </div>
          <div className="mt-16">
            <AnimatePresence mode="wait">
              <motion.div key={roadmapOption} {...fade}>
                {roadmapVariants[roadmapOption - 1]}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── Framework / The Motadata Approach ────────────── */}
      <section id="framework" className="relative z-10 scroll-mt-24">
        <OptionSwitch value={approachOption} onChange={setApproachOption} count={15} />
        <div className="mx-auto w-full max-w-7xl px-6 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-overline text-primary">The Motadata Approach</p>
            <h2 className="mt-3 text-display-md">
              How Motadata supports DPDPA compliance
            </h2>
            <p className="mt-4 text-body-md text-muted-foreground">
              Map the Act&apos;s core technical rules to capabilities across ObserveOps and
              ServiceOps. Select a rule to see the controls that help.
            </p>
          </div>

          <div className="mt-12">
            <AnimatePresence mode="wait">
              <motion.div key={approachOption} {...fade}>
                {approachVariants[approachOption - 1]}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="relative z-10">
        <div className="mx-auto w-full max-w-7xl px-6 py-16">
          <div className="rounded-2xl border border-border/60 bg-white">
            <div className="grid lg:grid-cols-[1fr,1.2fr]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col justify-center p-8 lg:p-12"
              >
                <p className="text-overline text-primary">DPDPA FAQ</p>
                <h2 className="mt-3 text-display-md">Frequently asked questions</h2>
                <p className="mt-4 text-body-md text-muted-foreground">
                  Common questions about the Act and how Motadata supports your compliance journey.
                </p>
              </motion.div>

              <div className="divide-y divide-border/40 border-t border-border/40 lg:border-l lg:border-t-0">
                {faqs.map((faq, i) => {
                  const isOpen = i === openFaq;
                  return (
                    <div key={i}>
                      <button
                        onClick={() => setOpenFaq(isOpen ? -1 : i)}
                        className="group flex w-full items-center justify-between px-6 py-6 text-left transition-colors hover:bg-muted/10 lg:px-8 lg:py-7"
                      >
                        <span className="pr-4 text-label-lg transition-colors group-hover:text-primary">
                          {faq.q}
                        </span>
                        <ChevronDown
                          className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
                            isOpen ? "rotate-180 text-primary" : "text-muted-foreground"
                          }`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <p className="px-6 pb-5 text-body-xs text-muted-foreground lg:px-8">
                              {faq.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Disclaimer ───────────────────────────────────── */}
      <section className="relative z-10">
        <div className="mx-auto w-full max-w-7xl px-6 pb-8">
          <div className="flex gap-3 rounded-xl border border-border/60 bg-muted/20 p-6">
            <Scale className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
            <p className="text-caption text-muted-foreground">
              <span className="font-semibold text-foreground">Disclaimer:</span> The capabilities
              described here represent some of the ways Motadata can help support your DPDPA
              compliance efforts. They do not constitute legal advice or a guarantee of compliance.
              Organisations should independently assess their obligations under the Act and consult
              qualified legal counsel.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <CtaSection
        title="Ready to operationalise DPDPA compliance?"
        description="See how Motadata's unified platform brings monitoring, access governance, and audit-ready logging together to support your data-protection obligations."
      >
        <Link
          href="/schedule-demo"
          className="inline-flex h-12 items-center gap-2 rounded-xl bg-white px-8 text-label-md text-foreground transition-opacity hover:bg-white/90"
        >
          Schedule a Demo <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          href="/contact"
          className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/30 bg-transparent px-8 text-label-md text-white transition-colors hover:bg-white/10"
        >
          Contact Sales
        </Link>
      </CtaSection>
    </>
  );
}
