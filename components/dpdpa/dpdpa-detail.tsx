"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
  },
  {
    phase: "Phase 2",
    date: "Nov 2026",
    title: "Limited Rules in Force",
    description:
      "Consent-manager registration and early operational rules take effect. Teams formalise consent, retention, and processor governance.",
  },
  {
    phase: "Phase 3",
    date: "May 2027",
    title: "Full Compliance Obligations",
    description:
      "The substantive security, breach-notification, and data-lifecycle obligations apply in full. Controls must be in place and evidenced.",
  },
];

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
        points: [
          "Full-disk and application-level encryption",
          "Centralised key management",
          "Data masking and redaction",
        ],
      },
      {
        icon: KeyRound,
        title: "Access Control",
        points: [
          "Role-based, least-privilege access",
          "Privileged access management",
          "Automated joiner-mover-leaver lifecycle",
        ],
      },
      {
        icon: Eye,
        title: "Access Visibility & Logging",
        points: [
          "Centralised event collection",
          "Real-time monitoring and alerting",
          "Cross-source correlation and audit trails",
        ],
      },
      {
        icon: DatabaseBackup,
        title: "Backup & Recovery",
        points: [
          "Automated, scheduled backups",
          "Granular and full-environment restore",
          "Resilient, isolated backup storage",
        ],
      },
      {
        icon: Archive,
        title: "Log Retention (1+ Year)",
        points: [
          "Configurable 365+ day retention",
          "Tiered archiving with tamper-resistant storage",
          "On-demand access to historical logs",
        ],
      },
      {
        icon: FileSignature,
        title: "Processor Contracts",
        points: [
          "Centralised data-processing agreement tracking",
          "Processor traceability and access control",
          "Security-by-design onboarding",
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
        points: [
          "Early detection via continuous monitoring",
          "Triage and notifiability assessment",
          "Structured response workflows",
        ],
      },
      {
        icon: RefreshCw,
        title: "Recover & Remediate",
        points: [
          "Rapid restoration and containment",
          "Targeted remediation and baseline reinforcement",
          "Documented recovery actions",
        ],
      },
      {
        icon: ScrollText,
        title: "Generate Evidence Logs",
        points: [
          "Centralised, correlated forensic logging",
          "Exposure and mitigation documentation",
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
        points: [
          "Automated data discovery and classification",
          "Endpoint visibility and data-movement monitoring",
          "Compliance reporting on data footprint",
        ],
      },
      {
        icon: Trash2,
        title: "Automate Retention & Deletion",
        points: [
          "Automatic retention enforcement",
          "Controlled deletion workflows",
          "Lawful exception handling with audit evidence",
        ],
      },
      {
        icon: Activity,
        title: "Run Inactivity Checks",
        points: [
          "Inactive-account detection",
          "Automated disablement and review",
          "Evidence-based inactivity reporting",
        ],
      },
      {
        icon: Timer,
        title: "Manage Data Logs",
        points: [
          "Configurable 1+ year log retention",
          "Integrity-protected, archived storage",
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

export function DpdpaDetail() {
  const [activeRule, setActiveRule] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const rule = rules[activeRule];

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

      {/* ── Timeline ─────────────────────────────────────── */}
      <section className="relative z-10">
        <div className="mx-auto w-full max-w-7xl px-6 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-overline text-primary">Roadmap</p>
            <h2 className="mt-3 text-display-md">Implementation timeline</h2>
            <p className="mt-4 text-body-md text-muted-foreground">
              The Act rolls out in phases. Use the runway to put controls in place before
              obligations apply in full.
            </p>
          </div>
          <div className="relative mt-14 grid gap-8 lg:grid-cols-3">
            {/* connecting line */}
            <div className="pointer-events-none absolute left-0 right-0 top-5 hidden h-px bg-border lg:block" />
            {timeline.map((t, i) => (
              <motion.div
                key={t.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.12 }}
                className="relative"
              >
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-label-md-strong text-primary">
                  {i + 1}
                </div>
                <div className="mt-5 rounded-xl border border-border bg-card p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-overline text-muted-foreground/70">{t.phase}</span>
                    <span className="text-label-sm text-primary">{t.date}</span>
                  </div>
                  <h3 className="mt-3 text-heading-sm text-foreground">{t.title}</h3>
                  <p className="mt-2 text-body-xs text-muted-foreground">{t.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Framework / rules tabs ───────────────────────── */}
      <section id="framework" className="relative z-10 scroll-mt-24">
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

          {/* Tabs */}
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {rules.map((r, i) => (
              <button
                key={r.key}
                onClick={() => setActiveRule(i)}
                className={`rounded-full border px-5 py-2.5 text-label-md transition-colors ${
                  activeRule === i
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-primary/40 hover:text-primary"
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={rule.key}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <p className="mx-auto mt-8 max-w-2xl text-center text-body-sm text-muted-foreground">
                {rule.intro}
              </p>
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {rule.capabilities.map((c) => (
                  <div
                    key={c.title}
                    className="rounded-xl border border-border bg-card p-7 transition-colors hover:border-primary/40 hover:bg-muted/30"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <c.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-heading-sm text-foreground">{c.title}</h3>
                    <ul className="mt-4 space-y-2.5">
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
