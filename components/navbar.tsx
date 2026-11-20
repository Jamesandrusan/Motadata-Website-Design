"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LanguageSwitcher } from "@/components/language-switcher";
import {
  ChevronDown,
  ChevronRight,
  Play,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Activity,
  Headset,
  Network,
  ShieldCheck,
  Server,
  ScrollText,
  Gauge,
  Users,
  TicketCheck,
  RefreshCw,
  Package,
  ClipboardList,
  BrainCircuit,
  BookOpen,
  TrendingUp,
  FileText,
  Download,
  GitCompare,
  Newspaper,
  CalendarDays,
  Video,
  MessageSquare,
  Handshake,
  Building2,
  Briefcase,
  Mail,
  LifeBuoy,
  Cloud,
  Cpu,
  Layers,
  Lock,
  Database,
  Workflow,
  Zap,
  Eye,
  AlertCircle,
  BarChart3,
  Award,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";

/* ═══════════════════════════════════════════════════════════════
   DATA MODEL
   ═══════════════════════════════════════════════════════════════ */

type MenuItem = {
  label: string;
  desc?: string;
  href?: string;
  icon?: LucideIcon;
};

const products = {
  primary: {
    label: "ObserveOps",
    tagline: "AI-native observability across hybrid IT — network, infrastructure, applications, and logs in one platform.",
    shortTagline: "AI-native observability across hybrid infrastructure",
    href: "/products/observeops",
    icon: Activity,
    items: [
      { label: "Network Observability", desc: "Unite flows, packets, and paths for clarity, control, confidence.", icon: Network },
      { label: "Configuration & Compliance", desc: "Align devices with automation and audit-readiness.", icon: ShieldCheck },
      { label: "Hybrid Infrastructure", desc: "Unify on-prem and cloud visibility, stability, scale.", href: "/products/observeops/hybrid-infrastructure-monitoring", icon: Server },
      { label: "Log Monitoring", desc: "Uncover context, correlation, clarity.", icon: ScrollText },
      { label: "Application Performance", desc: "Complete visibility from code to cloud with distributed tracing.", icon: Gauge },
      { label: "Real User Monitoring", desc: "Capture user journeys with intent.", icon: Users },
    ] as MenuItem[],
    stats: [
      { value: "2.4ms", label: "Avg latency" },
      { value: "99.8%", label: "Uptime SLA" },
      { value: "12k+", label: "Devices monitored" },
    ],
  },
  secondary: {
    label: "ServiceOps",
    tagline: "ITSM, ITAM, and intelligent automation built on a single configuration management database.",
    shortTagline: "ITSM, ITAM, and automation on one CMDB",
    href: "/products/serviceops",
    icon: Headset,
    items: [
      { label: "Service Management", desc: "AI-enhanced incident, problem, change, and request handling.", icon: TicketCheck },
      { label: "IT Asset Management", desc: "Full lifecycle visibility for hardware, software, and consumables.", icon: Package },
      { label: "CMDB", desc: "Centralized CI repository with relationship mapping.", icon: Database },
      { label: "Patch & Deployment", desc: "Automated patch discovery and deployment across all systems.", icon: RefreshCw },
      { label: "Agentic AI & Orchestration", desc: "AI classification and workflow automation.", icon: BrainCircuit },
      { label: "MSP Edition", desc: "True multi-tenancy with client isolation and branded portals.", icon: Users },
    ] as MenuItem[],
    stats: [
      { value: "60%", label: "MTTR reduction" },
      { value: "200+", label: "Asset types" },
      { value: "1.2k", label: "Avg tickets/day" },
    ],
  },
};

const productHighlights = {
  whatsNew: [
    { label: "Application Performance Monitoring", desc: "Now in GA with full distributed tracing.", icon: Gauge },
    { label: "Service Level Objectives", desc: "Define, measure, and act on reliability.", icon: TrendingUp },
    { label: "Unified Endpoint Management", desc: "One pane for every endpoint.", icon: Layers },
  ] as MenuItem[],
};

const solutions = {
  useCases: {
    heading: "Use Cases",
    href: "/solutions/by-use-cases",
    items: [
      { label: "Cloud Monitoring", desc: "Unified AWS, Azure, GCP visibility.", href: "/solutions/use-cases/cloud-monitoring", icon: Cloud },
      { label: "ITSM for MSP", desc: "Multi-tenant service desk for MSPs.", icon: Users },
      { label: "Hybrid IT Monitoring", desc: "Cross on-prem and cloud.", icon: Server },
      { label: "Log Analytics", desc: "Centralized log intelligence.", icon: ScrollText },
      { label: "NetOps", desc: "Flow and packet powered ops.", icon: Network },
      { label: "Linux Monitoring", desc: "Deep Linux fleet visibility.", icon: Cpu },
    ] as MenuItem[],
  },
  technologies: {
    heading: "Technologies",
    href: "/solutions/by-technologies",
    items: [
      { label: "Log Parsing & Indexing", desc: "Pipelines built for scale.", icon: ScrollText },
      { label: "Security & Compliance", desc: "Continuous posture management.", icon: Lock },
      { label: "IT Operations Analytics", desc: "AI-driven ops intelligence.", icon: TrendingUp },
      { label: "AI/ML Algorithms", desc: "Detection and forecasting.", icon: BrainCircuit },
      { label: "SNMP, WMI, ICMP, Syslog", desc: "Native protocol coverage.", icon: Zap },
      { label: "Workflow Automation", desc: "Build once, run everywhere.", icon: Workflow },
    ] as MenuItem[],
  },
  industries: [
    {
      label: "Banking & Finance",
      blurb: "Transaction-critical observability with SOC 2 compliance.",
      logos: [
        { name: "Bandhan Bank", src: "/logos/bandhan_bank.svg" },
        { name: "Union Bank", src: "/logos/union-bank.svg" },
        { name: "Kotak", src: "/logos/kotak.svg" },
        { name: "HDFC Life", src: "/logos/hdfc-lif.svg" },
      ],
    },
    {
      label: "Enterprise",
      blurb: "Unified hybrid IT visibility for Fortune 500 operations.",
      logos: [
        { name: "JSW Steel", src: "/logos/jsw_steel.svg" },
        { name: "NEC", src: "/logos/nec.svg", small: true },
        { name: "Kansai", src: "/logos/kansai.svg" },
        { name: "Suzuki", src: "/logos/suzuki-2.svg" },
      ],
    },
    {
      label: "Government",
      blurb: "Sovereign, audit-ready monitoring for the public sector.",
      logos: [
        { name: "ONGC", src: "/logos/ongc.svg" },
        { name: "Hindustan Petroleum", src: "/logos/hind.svg" },
        { name: "MTNL", src: "/logos/mtnl.svg" },
        { name: "Kuwait Petroleum", src: "/logos/kopetro.svg" },
      ],
    },
    {
      label: "Telecom",
      blurb: "Carrier-grade observability for critical network ops.",
      logos: [
        { name: "Vodafone", src: "/logos/vodafone.svg" },
        { name: "Airtel", src: "/logos/airtel.svg" },
        { name: "du", src: "/logos/du.svg" },
        { name: "Redington", src: "/logos/redwin-1.svg", small: true },
      ],
    },
    {
      label: "Healthcare",
      blurb: "HIPAA-aligned IT operations for hospitals and pharma.",
      logos: [
        { name: "Muthoot", src: "/logos/muthoon.svg" },
        { name: "UAB", src: "/logos/UAB.svg" },
        { name: "NEC", src: "/logos/nec.svg", small: true },
        { name: "HDFC Life", src: "/logos/hdfc-lif.svg" },
      ],
    },
  ],
};

const resources = {
  library: {
    heading: "Library",
    items: [
      { label: "Documentation", desc: "Technical guides and API reference.", href: "/resources/documentation", icon: BookOpen },
      { label: "Integrations", desc: "Connectors across infra and apps.", href: "/resources/integrations", icon: Layers },
      { label: "Whitepapers", desc: "Deep research on AIOps and ITSM.", href: "/resources/whitepapers", icon: FileText },
      { label: "Ebooks", desc: "Comprehensive guides for ITOps.", href: "/resources/ebooks", icon: BookOpen },
      { label: "Product Brochures", desc: "Specs and overviews.", href: "/resources/brochures", icon: FileText },
      { label: "Comparison", desc: "How we stack up.", href: "/resources/comparison", icon: GitCompare },
    ] as MenuItem[],
  },
  updates: {
    heading: "Updates",
    items: [
      { label: "Blog", desc: "Trends in AI-native ITOM.", href: "/blog", icon: Newspaper },
      { label: "Press Releases", desc: "Official announcements.", href: "/resources/press-releases", icon: Newspaper },
      { label: "Events", desc: "Conferences and partner forums.", href: "/resources/events", icon: CalendarDays },
      { label: "Webinars", desc: "Expert sessions and demos.", href: "/resources/webinars", icon: Video },
      { label: "Community", desc: "Peer-to-peer forums.", href: "/resources/community", icon: MessageSquare },
      { label: "Success Stories", desc: "Customers transforming IT ops.", href: "/resources/success-stories", icon: TrendingUp },
    ] as MenuItem[],
  },
  company: {
    heading: "Company",
    items: [
      { label: "About Motadata", desc: "Our mission to unify ITOps.", href: "/company", icon: Building2 },
      { label: "Careers", desc: "Join the next-gen IT platform.", href: "/careers", icon: Briefcase },
      { label: "Partner Portal", desc: "Tools for alliance partners.", href: "/resources/partners", icon: Handshake },
      { label: "Contact Us", desc: "Sales, partnerships, general.", href: "/contact", icon: Mail },
      { label: "Customer Support", desc: "24×7 platform assistance.", href: "/support", icon: LifeBuoy },
      { label: "Getting Started", desc: "Onboarding made fast.", href: "/getting-started", icon: Play },
    ] as MenuItem[],
  },
  featuredArticle: {
    label: "2025 Gartner® Magic Quadrant™",
    teaser: "Motadata named a Leader in Observability for the 13th consecutive time — read what analysts say.",
    meta: "Industry Report · 8 min read",
    href: "/resources/whitepapers",
  },
};

/* ─── Legacy data (Option 1 — unchanged) ─── */

const productMenuLegacy = {
  columns: [
    {
      heading: "OBSERVEOPS",
      items: products.primary.items.map((i) => ({ label: i.label, desc: i.desc ?? "", href: i.href })),
    },
    {
      heading: "SERVICEOPS",
      items: products.secondary.items.map((i) => ({ label: i.label, desc: i.desc ?? "", href: i.href })),
    },
    {
      heading: "WHAT'S NEW",
      items: productHighlights.whatsNew.map((i) => ({ label: i.label, desc: i.desc ?? "", href: i.href })),
    },
    {
      heading: "WHAT'S NEXT",
      items: [{ label: "Next-Gen AI Native ITOM", desc: "Where AI-native operations is going next." }],
    },
  ],
};

const resourcesMenuLegacy = {
  columns: [
    {
      heading: "OBSERVE",
      items: [
        { label: "Getting Started", desc: "Fast, clear, effective onboarding.", href: "/getting-started" },
        { label: "Documentation", desc: "Technical guides, APIs, references.", href: "/resources/documentation" },
        { label: "Integrations", desc: "Pre-built connectors.", href: "/resources/integrations" },
        { label: "IT Glossary", desc: "Common IT terminology.", href: "/resources/glossary" },
      ],
    },
    {
      heading: "INSIGHT",
      items: [
        { label: "Whitepapers", desc: "Research on AIOps and ITSM.", href: "/resources/whitepapers" },
        { label: "Ebooks", desc: "Modern IT operations.", href: "/resources/ebooks" },
        { label: "Product Brochures", desc: "Technical specifications.", href: "/resources/brochures" },
        { label: "Success Stories", desc: "Proof of impact.", href: "/resources/success-stories" },
        { label: "Downloads", desc: "Agents, collectors, trials.", href: "/resources/downloads" },
        { label: "Comparison", desc: "vs. other platforms.", href: "/resources/comparison" },
      ],
    },
    {
      heading: "PULSE",
      items: [
        { label: "Blog", desc: "AI-native ITOM trends.", href: "/blog" },
        { label: "Press Releases", desc: "Official announcements.", href: "/resources/press-releases" },
        { label: "Events", desc: "Conferences and partner sessions.", href: "/resources/events" },
        { label: "Webinars", desc: "Expert-led demos.", href: "/resources/webinars" },
        { label: "Community", desc: "Peer-to-peer exchanges.", href: "/resources/community" },
        { label: "Partner Portal", desc: "Tools for alliances.", href: "/resources/partners" },
      ],
    },
    {
      heading: "VISION",
      items: [
        { label: "Company", desc: "Our mission.", href: "/company" },
        { label: "Careers", desc: "Join us.", href: "/careers" },
        { label: "Contact Us", desc: "General queries.", href: "/contact" },
        { label: "Customer Support", desc: "24×7 assistance.", href: "/support" },
      ],
    },
  ],
};

const solutionsMenuLegacy = {
  columns: [
    {
      heading: "BY USE CASES",
      items: [
        { label: "Cloud Monitoring", desc: "AWS, Azure, GCP unified.", href: "/solutions/use-cases/cloud-monitoring" },
        { label: "ITSM for MSP", desc: "Multi-tenant service desk." },
        { label: "Hybrid IT Monitoring", desc: "On-prem and cloud unified." },
        { label: "Log Monitoring", desc: "Centralized log analytics." },
        { label: "NetOps", desc: "Flow and packet intelligence." },
        { label: "Linux Network Monitoring", desc: "Deep Linux visibility." },
      ],
    },
    {
      heading: "BY TECHNOLOGIES",
      items: [
        { label: "Log Parsing & Indexing", desc: "Pipelines built for scale." },
        { label: "Security & Compliance", desc: "Continuous posture." },
        { label: "IT Operations Analytics (ITOA)", desc: "AI-driven analytics." },
        { label: "AI/ML Algorithms", desc: "Detection and forecasting." },
        { label: "SNMP, WMI, ICMP, Syslog", desc: "Native protocol support." },
      ],
    },
  ],
};

const productEvents = [
  { title: "Service Level Objectives", desc: "Define, measure, optimize reliability.", cta: "Explore now" },
  { title: "ObserveOps Platform Update", desc: "New distributed tracing & real-time anomaly detection live.", cta: "Explore features" },
  { title: "ServiceOps Enhancement", desc: "AI-powered incident routing reduces MTTR by 60%.", cta: "See how it works" },
];

const solutionsEvents = [
  { title: "Banking & Finance Solution", desc: "End-to-end monitoring with SOC 2 compliance.", cta: "View case study" },
  { title: "Enterprise IT Operations", desc: "Unified observability for Fortune 500.", cta: "View case study" },
];

const resourcesEvents = [
  { title: "2025 Gartner® Magic Quadrant™", desc: "Motadata named a Leader 13× in Observability.", cta: "Read more" },
  { title: "AIOps Whitepaper", desc: "How AI-native ops cut MTTR by 60%.", cta: "Download now" },
];

type MenuKey = "product" | "solutions" | "resources";

const menus: { key: MenuKey; label: string }[] = [
  { key: "product", label: "Products" },
  { key: "solutions", label: "Solutions" },
  { key: "resources", label: "Resources" },
];

/* ═══════════════════════════════════════════════════════════════
   PERSONAS (for Options 5)
   ═══════════════════════════════════════════════════════════════ */

type Persona = {
  key: string;
  label: string;
  sub: string;
  modules: MenuItem[];
  metric: { value: string; label: string };
  story: { title: string; href: string };
};

const solutionsPersonas: Persona[] = [
  {
    key: "bfsi",
    label: "Banking & Finance",
    sub: "Transaction-critical observability",
    modules: [
      { label: "Compliance Reporting", icon: ShieldCheck },
      { label: "Branch Network Monitoring", icon: Network },
      { label: "SOC 2 Audit Trail", icon: Lock },
      { label: "Service Desk for BFSI", icon: Headset },
    ],
    metric: { value: "5,500+", label: "Branches observed across BFSI" },
    story: { title: "Bandhan Bank cut MTTR by 60%", href: "/resources/success-stories" },
  },
  {
    key: "enterprise",
    label: "Enterprise",
    sub: "Unified hybrid IT",
    modules: [
      { label: "Hybrid Infrastructure", icon: Server, href: "/products/observeops/hybrid-infrastructure-monitoring" },
      { label: "Asset Lifecycle", icon: Package },
      { label: "Unified ITSM", icon: TicketCheck },
      { label: "ITOA Analytics", icon: BarChart3 },
    ],
    metric: { value: "500+", label: "Enterprise customers" },
    story: { title: "JSW Steel's plant-to-cloud rollout", href: "/resources/success-stories" },
  },
  {
    key: "govt",
    label: "Government & Telecom",
    sub: "Mission-critical scale",
    modules: [
      { label: "Sovereign Deployment", icon: ShieldCheck },
      { label: "Network Observability", icon: Network },
      { label: "MSP Edition", icon: Users },
      { label: "Compliance Reporting", icon: Lock },
    ],
    metric: { value: "10M+", label: "Telecom subscribers monitored" },
    story: { title: "Carrier-grade reliability at Vodafone", href: "/resources/success-stories" },
  },
  {
    key: "msp",
    label: "MSPs",
    sub: "Multi-tenant by design",
    modules: [
      { label: "MSP Edition", icon: Users },
      { label: "Branded Client Portals", icon: Headset },
      { label: "Multi-Tenant CMDB", icon: Database },
      { label: "Automated Onboarding", icon: Workflow },
    ],
    metric: { value: "1 portal", label: "For every tenant, branded" },
    story: { title: "An MSP playbook for the AI era", href: "/blog" },
  },
];

const resourcesPersonas: Persona[] = [
  {
    key: "new",
    label: "I'm new here",
    sub: "Start with the basics",
    modules: [
      { label: "Getting Started", icon: Play, href: "/getting-started" },
      { label: "Documentation", icon: BookOpen, href: "/resources/documentation" },
      { label: "IT Glossary", icon: FileText, href: "/resources/glossary" },
      { label: "Product Brochures", icon: FileText, href: "/resources/brochures" },
    ],
    metric: { value: "< 2 min", label: "Signup to first dashboard" },
    story: { title: "The 5-step starter guide", href: "/getting-started" },
  },
  {
    key: "eval",
    label: "I'm evaluating",
    sub: "Compare and decide",
    modules: [
      { label: "Comparison", icon: GitCompare, href: "/resources/comparison" },
      { label: "Whitepapers", icon: FileText, href: "/resources/whitepapers" },
      { label: "Success Stories", icon: TrendingUp, href: "/resources/success-stories" },
      { label: "Pricing", icon: BarChart3 },
    ],
    metric: { value: "Gartner", label: "Leader 13× in observability" },
    story: { title: "Why teams switch from legacy tools", href: "/resources/comparison" },
  },
  {
    key: "build",
    label: "I'm building",
    sub: "Integrate and extend",
    modules: [
      { label: "Documentation", icon: BookOpen, href: "/resources/documentation" },
      { label: "Integrations", icon: Layers, href: "/resources/integrations" },
      { label: "Downloads", icon: Download, href: "/resources/downloads" },
      { label: "Community", icon: MessageSquare, href: "/resources/community" },
    ],
    metric: { value: "200+", label: "Pre-built integrations" },
    story: { title: "Building custom collectors", href: "/resources/documentation" },
  },
  {
    key: "run",
    label: "I'm running production",
    sub: "Operate and stay current",
    modules: [
      { label: "Customer Support", icon: LifeBuoy, href: "/support" },
      { label: "Release Notes", icon: FileText, href: "/resources/press-releases/release-notes" },
      { label: "Webinars", icon: Video, href: "/resources/webinars" },
      { label: "Events", icon: CalendarDays, href: "/resources/events" },
    ],
    metric: { value: "24×7", label: "Customer success coverage" },
    story: { title: "Latest platform updates", href: "/resources/press-releases" },
  },
];

/* ═══════════════════════════════════════════════════════════════
   DESIGN SYSTEM PRIMITIVES
   ═══════════════════════════════════════════════════════════════ */

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.018, delayChildren: 0.02 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 4 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.18, ease: "easeOut" as const } },
};

function PrimaryDot({ className = "" }: { className?: string }) {
  return (
    <span
      aria-label="Primary product"
      className={`inline-block h-[5px] w-[5px] rounded-full bg-primary align-middle ${className}`}
    />
  );
}

function CapsHeading({
  children,
  href,
  primary = false,
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  primary?: boolean;
  className?: string;
}) {
  const inner = (
    <span
      className={`inline-flex items-baseline gap-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground/70 ${className}`}
    >
      {children}
      {primary && <PrimaryDot />}
    </span>
  );
  return href ? (
    <Link href={href} className="hover:text-foreground transition-colors">
      {inner}
    </Link>
  ) : (
    inner
  );
}

/** Rich item row with icon + label + optional description. */
function ItemRow({ item, dense = false }: { item: MenuItem; dense?: boolean }) {
  const Icon = item.icon ?? Sparkles;
  return (
    <Link
      href={item.href || "#"}
      className="group/i flex items-start gap-3 rounded-md px-2.5 py-2 transition-colors hover:bg-muted/40"
    >
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-muted-foreground transition-colors group-hover/i:text-primary">
        <Icon className="h-4 w-4" strokeWidth={1.75} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-[13px] font-semibold text-foreground transition-colors group-hover/i:text-primary">
          {item.label}
        </span>
        {!dense && item.desc && (
          <span className="mt-0.5 block text-[12px] leading-snug text-muted-foreground">{item.desc}</span>
        )}
      </span>
      <ChevronRight className="mt-0.5 h-3 w-3 shrink-0 text-primary opacity-0 transition-all group-hover/i:opacity-100 group-hover/i:translate-x-0.5" />
    </Link>
  );
}

function PlainLink({ item }: { item: MenuItem }) {
  return (
    <Link
      href={item.href || "#"}
      className="group/i flex items-center justify-between gap-3 py-1 text-[13px] font-medium text-foreground/85 transition-colors hover:text-primary"
    >
      <span>{item.label}</span>
      <ChevronRight className="h-3 w-3 shrink-0 text-primary opacity-0 transition-all group-hover/i:opacity-100 group-hover/i:translate-x-0.5" />
    </Link>
  );
}

function InlineCTA({ label, href }: { label: string; href: string }) {
  return (
    <Link
      href={href}
      className="group/cta inline-flex items-center gap-1 text-[12.5px] font-semibold text-primary"
    >
      {label}
      <ArrowRight className="h-3 w-3 transition-transform group-hover/cta:translate-x-0.5" />
    </Link>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PRODUCT DUAL-CARD SCAFFOLD
   Used by Options 2–8. Same structure (1/2 + 1/2 + What's New strip),
   only the *bottom UI element* of each card and the *card chrome* varies.
   ═══════════════════════════════════════════════════════════════ */

type DualCardData = {
  label: string;
  tagline: string;
  shortTagline: string;
  href: string;
  icon: LucideIcon;
  primary?: boolean;
  items: MenuItem[];
  stats: { value: string; label: string }[];
};

function ProductCardHeader({ data }: { data: DualCardData }) {
  const Icon = data.icon;
  return (
    <Link href={data.href} className="group/h flex items-start gap-3">
      <span
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border bg-white ${
          data.primary ? "border-primary/20 text-primary" : "border-border/40 text-foreground/80"
        }`}
      >
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <h3 className="text-[17px] font-bold tracking-tight text-foreground transition-colors group-hover/h:text-primary">
            {data.label}
          </h3>
          {data.primary && <PrimaryDot />}
        </div>
        <p className="mt-1 text-[12.5px] leading-snug text-muted-foreground">{data.tagline}</p>
      </div>
    </Link>
  );
}

function ModuleListPlain({ items }: { items: MenuItem[] }) {
  return (
    <motion.ul
      className="grid grid-cols-2 gap-x-4 gap-y-0"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {items.map((m) => (
        <motion.li key={m.label} variants={itemVariants}>
          <PlainLink item={m} />
        </motion.li>
      ))}
    </motion.ul>
  );
}

function WhatsNewStrip() {
  return (
    <div className="flex items-center justify-between gap-4 rounded-lg border border-border/40 bg-muted/30 px-4 py-3">
      <div className="flex items-center gap-2">
        <Sparkles className="h-3.5 w-3.5 text-primary" />
        <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground/70">
          What&apos;s New
        </span>
      </div>
      <div className="flex flex-1 flex-wrap items-center gap-x-5 gap-y-1">
        {productHighlights.whatsNew.map((m) => (
          <Link
            key={m.label}
            href={m.href || "#"}
            className="group/n inline-flex items-center gap-1 text-[12.5px] font-medium text-foreground/85 hover:text-primary"
          >
            <span>{m.label}</span>
          </Link>
        ))}
      </div>
      <Link
        href="/blog"
        className="shrink-0 inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground/60 hover:text-primary"
      >
        See all
        <ArrowRight className="h-3 w-3" />
      </Link>
    </div>
  );
}

/* ─── Variants of the bottom UI element inside each product card ─── */

function StatStrip({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <div className="grid grid-cols-3 divide-x divide-border/40 rounded-lg border border-border/40 bg-muted/20">
      {stats.map((s) => (
        <div key={s.label} className="px-3 py-2.5 text-center">
          <div className="text-[15px] font-bold tabular-nums tracking-tight text-foreground">{s.value}</div>
          <div className="mt-0.5 text-[10.5px] uppercase tracking-wider text-muted-foreground">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

function SparklineRow({ seed, primary }: { seed: string; primary?: boolean }) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  const bars = Array.from({ length: 28 }, (_, i) => {
    h = (h * 1103515245 + 12345) >>> 0;
    return 8 + ((h >>> (i % 13)) & 0x1f);
  });
  return (
    <div className="rounded-lg border border-border/40 bg-muted/20 p-3">
      <div className="mb-1.5 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground/70">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-50" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
          Live signal
        </span>
        <span className="text-[10.5px] tabular-nums text-muted-foreground">last 24h</span>
      </div>
      <div className="flex h-10 items-end gap-[3px]">
        {bars.map((b, i) => (
          <div
            key={i}
            className={`flex-1 rounded-sm ${primary ? "bg-gradient-to-t from-primary/50 to-primary/15" : "bg-gradient-to-t from-foreground/35 to-foreground/10"}`}
            style={{ height: `${b}px` }}
          />
        ))}
      </div>
    </div>
  );
}

function DashboardMock({ data }: { data: DualCardData }) {
  return (
    <div className="rounded-lg border border-border/40 bg-white p-3">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-[10.5px] font-semibold uppercase tracking-wider text-muted-foreground/70">
          {data.label} · live dashboard
        </span>
        <span className="inline-flex items-center gap-1 text-[10px] text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" /> healthy
        </span>
      </div>
      <div className="space-y-1.5">
        {data.items.slice(0, 3).map((m, i) => {
          const fill = [82, 64, 91][i % 3];
          return (
            <div key={m.label} className="flex items-center gap-2.5">
              <span className="w-[110px] truncate text-[11px] font-medium text-foreground/80">
                {m.label}
              </span>
              <div className="flex-1 overflow-hidden rounded-full bg-muted/60 h-1.5">
                <div
                  className={`h-full rounded-full ${data.primary ? "bg-primary" : "bg-foreground/70"}`}
                  style={{ width: `${fill}%` }}
                />
              </div>
              <span className="w-[34px] text-right text-[10.5px] tabular-nums text-muted-foreground">
                {fill}%
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ScreenshotMock({ data }: { data: DualCardData }) {
  return (
    <div className="overflow-hidden rounded-lg border border-border/40 bg-gradient-to-br from-muted/30 via-muted/10 to-transparent">
      <div className="flex items-center gap-1 border-b border-border/40 px-2.5 py-1.5">
        <span className="h-2 w-2 rounded-full bg-muted-foreground/30" />
        <span className="h-2 w-2 rounded-full bg-muted-foreground/30" />
        <span className="h-2 w-2 rounded-full bg-muted-foreground/30" />
        <span className="ml-2 text-[9.5px] text-muted-foreground/70">{data.label.toLowerCase()}.motadata.io</span>
      </div>
      <div className="p-3">
        <div className="flex items-center justify-between text-[10px] text-muted-foreground/80">
          <span>Dashboard</span>
          <span>{new Date().getHours()}:{(new Date().getMinutes() + "").padStart(2, "0")}</span>
        </div>
        <div className="mt-2 grid grid-cols-4 gap-1.5">
          {data.stats.map((s, i) => (
            <div key={i} className="rounded bg-white p-1.5">
              <div className="text-[10px] font-bold text-foreground">{s.value}</div>
              <div className="text-[8.5px] text-muted-foreground">{s.label}</div>
            </div>
          ))}
          <div className={`rounded p-1.5 ${data.primary ? "bg-primary/10" : "bg-muted/40"}`}>
            <div className={`text-[10px] font-bold ${data.primary ? "text-primary" : "text-foreground"}`}>OK</div>
            <div className="text-[8.5px] text-muted-foreground">All systems</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCallout({ data }: { data: DualCardData }) {
  const newest = productHighlights.whatsNew[0];
  const Icon = newest.icon ?? Sparkles;
  return (
    <div
      className={`flex items-center gap-3 rounded-lg border px-3 py-2.5 ${
        data.primary ? "border-primary/20 bg-primary/[0.04]" : "border-border/40 bg-muted/20"
      }`}
    >
      <span
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md border bg-white ${
          data.primary ? "border-primary/20 text-primary" : "border-border/40 text-foreground/80"
        }`}
      >
        <Icon className="h-3.5 w-3.5" strokeWidth={1.75} />
      </span>
      <div className="min-w-0 flex-1">
        <div className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-primary">New</div>
        <div className="truncate text-[12px] font-semibold text-foreground">{newest.label}</div>
      </div>
      <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
    </div>
  );
}

/* ─── The shell — accepts a bottomRenderer to vary per option ─── */

function ProductDualCard({
  data,
  bottom,
}: {
  data: DualCardData;
  bottom: (d: DualCardData) => React.ReactNode;
}) {
  return (
    <div
      className={`flex flex-col gap-4 rounded-xl border p-5 ${
        data.primary
          ? "border-primary/20 bg-gradient-to-b from-primary/[0.025] to-transparent"
          : "border-border/60 bg-white"
      }`}
    >
      <ProductCardHeader data={data} />
      <ModuleListPlain items={data.items} />
      <div>{bottom(data)}</div>
      <div className="mt-auto border-t border-border/40 pt-3">
        <InlineCTA label={`Explore ${data.label}`} href={data.href} />
      </div>
    </div>
  );
}

function ProductDualCardLayout({ bottom }: { bottom: (d: DualCardData) => React.ReactNode }) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4 items-stretch">
        <ProductDualCard data={products.primary as DualCardData} bottom={bottom} />
        <ProductDualCard data={products.secondary as DualCardData} bottom={bottom} />
      </div>
      <WhatsNewStrip />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   EVENTS SLIDER (Option 1 only)
   ═══════════════════════════════════════════════════════════════ */

function EventsSlider({ events }: { events: typeof productEvents }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % events.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [events.length]);

  const item = events[active];

  return (
    <div className="mx-6 mb-5 rounded-xl border border-border/60 bg-muted/40 px-5 py-4">
      <div className="flex items-center justify-between gap-4">
        <AnimatePresence mode="wait">
          <motion.a
            key={active}
            href="#"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="group flex min-w-0 items-center gap-3 text-[12px]"
          >
            <span className="font-semibold text-foreground whitespace-nowrap">{item.title}</span>
            <span className="truncate text-muted-foreground">{item.desc}</span>
            <span className="inline-flex shrink-0 items-center gap-0.5 font-semibold text-primary transition-colors group-hover:text-primary/80">
              {item.cta}
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
            </span>
          </motion.a>
        </AnimatePresence>

        <div className="flex shrink-0 items-center gap-1.5">
          {events.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-[5px] rounded-full transition-all duration-500 ease-in-out ${
                i === active ? "w-4 bg-primary" : "w-[5px] bg-border hover:bg-muted-foreground/40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   OPTION 1 — Current 4-col (unchanged)
   ═══════════════════════════════════════════════════════════════ */

function MenuColumn1({
  heading,
  headingHref,
  items,
  border = true,
}: {
  heading: string;
  headingHref?: string;
  items: { label: string; desc: string; href?: string }[];
  border?: boolean;
}) {
  return (
    <div className={border ? "border-r border-border/40 pr-6" : ""}>
      {headingHref ? (
        <Link
          href={headingHref}
          className="mb-3 block text-[12px] font-bold uppercase tracking-widest text-muted-foreground/60 hover:text-primary transition-colors"
        >
          {heading}
        </Link>
      ) : (
        <h3 className="mb-3 text-[12px] font-bold uppercase tracking-widest text-muted-foreground/60">
          {heading}
        </h3>
      )}
      <motion.ul className="space-y-0.5" variants={containerVariants} initial="hidden" animate="visible">
        {items.map((item) => (
          <motion.li key={item.label} variants={itemVariants}>
            <Link
              href={item.href || "#"}
              className="group/item block rounded-lg border border-transparent px-3 py-2 transition-all hover:border-border hover:bg-muted/30"
            >
              <p className="text-[13px] font-medium text-foreground transition-colors group-hover/item:text-primary">
                {item.label}
              </p>
              <p className="mt-0.5 text-[12px] leading-snug text-muted-foreground/90">{item.desc}</p>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

function ProductPanel1() {
  const cols = productMenuLegacy.columns;
  return (
    <div className="grid grid-cols-4 gap-6 items-start">
      <MenuColumn1 heading={cols[0].heading} headingHref="/products/observeops" items={cols[0].items} />
      <MenuColumn1 heading={cols[1].heading} headingHref="/products/serviceops" items={cols[1].items} />
      <MenuColumn1 heading={cols[2].heading} items={cols[2].items} />
      <MenuColumn1 heading={cols[3].heading} items={cols[3].items} border={false} />
    </div>
  );
}

function SolutionsPanel1() {
  const col0 = solutionsMenuLegacy.columns[0];
  const col1 = solutionsMenuLegacy.columns[1];
  const industries = solutions.industries;

  return (
    <div className="grid grid-cols-3 gap-6 items-start">
      <MenuColumn1 heading={col0.heading} headingHref="/solutions/by-use-cases" items={col0.items} />
      <MenuColumn1 heading={col1.heading} headingHref="/solutions/by-technologies" items={col1.items} />
      <div>
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-overline-sm text-muted-foreground/60">BY INDUSTRY</h3>
          <a
            href="#"
            className="group/cta inline-flex items-center gap-1 text-overline-sm text-muted-foreground/60 transition-colors hover:text-primary"
          >
            SEE MORE CASE STUDIES
            <ArrowRight className="h-3 w-3 transition-transform group-hover/cta:translate-x-0.5" />
          </a>
        </div>
        <motion.div className="space-y-1.5" variants={containerVariants} initial="hidden" animate="visible">
          {industries.map((industry) => (
            <motion.div
              key={industry.label}
              variants={itemVariants}
              className="flex items-center gap-3 rounded-lg px-3 py-2 transition-colors hover:bg-muted/30"
            >
              <span className="w-[110px] shrink-0 text-[13px] font-medium text-foreground">{industry.label}</span>
              <div className="flex flex-1 items-center gap-1.5">
                {industry.logos.map((logo, li) => (
                  <a
                    key={`${industry.label}-${li}`}
                    href="#"
                    title={logo.name}
                    className="flex h-8 flex-1 items-center justify-center rounded border border-border/40 bg-white px-2 grayscale opacity-60 transition-all duration-200 hover:border-primary/40 hover:grayscale-0 hover:opacity-100"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={70}
                      height={24}
                      className={`${logo.small ? "h-3.5" : "h-5"} w-auto object-contain`}
                    />
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function ResourcesPanel1() {
  const cols = resourcesMenuLegacy.columns;
  return (
    <div className="grid grid-cols-4 gap-6 items-start">
      <MenuColumn1 heading={cols[0].heading} items={cols[0].items} />
      <MenuColumn1 heading={cols[1].heading} items={cols[1].items} />
      <MenuColumn1 heading={cols[2].heading} items={cols[2].items} />
      <MenuColumn1 heading={cols[3].heading} items={cols[3].items} border={false} />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   OPTION 2 — CURRENT UPGRADE
   Same as Option 1 for Solutions and Resources. Only Products is
   reworked: each main product gets a prominent header card with a
   solid "Explore [Product] →" CTA button so the path to the product
   page is unmissable. Modules are listed in the same dense format
   below the header card.
   ═══════════════════════════════════════════════════════════════ */

/** Hero product card. Brand: white card, black type & icons, coral only on hover/CTA. */
function ProductHeroCard({
  data,
  modules,
}: {
  data: DualCardData;
  modules: { label: string; href?: string }[];
}) {
  const Icon = data.icon;
  return (
    <div className="flex h-full flex-col rounded-xl border border-border/60 bg-white p-6 transition-colors hover:border-foreground/30">
      {/* Clickable header — name, tagline, explore */}
      <Link href={data.href} className="group/h block">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border/60 bg-white text-foreground">
            <Icon className="h-[18px] w-[18px]" strokeWidth={1.5} />
          </span>
          <div className="flex items-center gap-1.5">
            <h3 className="text-[18px] font-bold tracking-tight text-foreground transition-colors group-hover/h:text-primary">
              {data.label}
            </h3>
            {data.primary && <PrimaryDot />}
          </div>
        </div>
        <p className="mt-3 text-[12.5px] leading-relaxed text-muted-foreground">
          {data.shortTagline}.
        </p>
        <span className="mt-3 inline-flex items-center gap-1 text-[12.5px] font-semibold text-primary">
          Explore {data.label}
          <ArrowRight className="h-3 w-3 transition-transform group-hover/h:translate-x-0.5" />
        </span>
      </Link>

      {/* Separator */}
      <div className="my-5 h-px bg-border/60" />

      {/* Modules — single-line rows; coral wash + coral text on hover */}
      <motion.ul
        className="space-y-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {modules.map((m) => (
          <motion.li key={m.label} variants={itemVariants}>
            <Link
              href={m.href || "#"}
              className="group/item flex items-center justify-between gap-2 rounded-md px-2.5 py-2 text-[13px] font-medium text-foreground/85 transition-colors hover:bg-primary/10 hover:text-primary"
            >
              <span>{m.label}</span>
              <ChevronRight className="h-3 w-3 shrink-0 text-primary opacity-0 transition-all group-hover/item:opacity-100 group-hover/item:translate-x-0.5" />
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

/** Module list — single titles only, no descriptions. */
function ProductModuleListMinimal({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <motion.ul className="space-y-0" variants={containerVariants} initial="hidden" animate="visible">
      {items.map((item) => (
        <motion.li key={item.label} variants={itemVariants}>
          <Link
            href={item.href || "#"}
            className="group/item flex items-center justify-between gap-2 rounded-md px-3 py-2 text-[13px] font-medium text-foreground/85 transition-colors hover:bg-primary/10 hover:text-primary"
          >
            <span>{item.label}</span>
            <ChevronRight className="h-3 w-3 shrink-0 text-primary opacity-0 transition-all group-hover/item:opacity-100 group-hover/item:translate-x-0.5" />
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
}

function ProductModuleList({ items }: { items: { label: string; desc: string; href?: string }[] }) {
  return (
    <motion.ul className="space-y-0.5" variants={containerVariants} initial="hidden" animate="visible">
      {items.map((item) => (
        <motion.li key={item.label} variants={itemVariants}>
          <Link
            href={item.href || "#"}
            className="group/item block rounded-lg border border-transparent px-3 py-2 transition-all hover:border-border hover:bg-muted/30"
          >
            <p className="text-[13px] font-medium text-foreground transition-colors group-hover/item:text-primary">
              {item.label}
            </p>
            {item.desc && (
              <p className="mt-0.5 text-[12px] leading-snug text-muted-foreground/90">{item.desc}</p>
            )}
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
}

function ProductPanelCU() {
  const observeModules = productMenuLegacy.columns[0].items;
  const serviceModules = productMenuLegacy.columns[1].items;
  const whatsNew = productMenuLegacy.columns[2].items;
  const whatsNext = productMenuLegacy.columns[3].items;

  return (
    <div className="grid grid-cols-12 gap-5 items-stretch">
      {/* ── Hero card: ObserveOps (flagship) ── */}
      <div className="col-span-5">
        <ProductHeroCard data={products.primary as DualCardData} modules={observeModules} />
      </div>

      {/* ── Hero card: ServiceOps ── */}
      <div className="col-span-5">
        <ProductHeroCard data={products.secondary as DualCardData} modules={serviceModules} />
      </div>

      {/* ── Right rail: What's New + What's Next ── */}
      <div className="col-span-2 flex flex-col gap-5 pl-1">
        <div>
          <h3 className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground/70">
            What&apos;s New
          </h3>
          <ProductModuleListMinimal items={whatsNew} />
        </div>
        <div className="h-px bg-border/40" />
        <div>
          <h3 className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground/70">
            What&apos;s Next
          </h3>
          <ProductModuleListMinimal items={whatsNext} />
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   OPTION 3 — STUDIO (was Option 2 — Stripe-clean)
   Products: dual cards + stat strip at card bottom
   Solutions: 3-col with industries LOGO WALL in middle
   Resources: 4-col with featured BLOG (image + title) inside Updates
   ═══════════════════════════════════════════════════════════════ */

function ProductPanel2() {
  return <ProductDualCardLayout bottom={(d) => <StatStrip stats={d.stats} />} />;
}

function SolutionsPanel2() {
  return (
    <div className="grid grid-cols-12 gap-7 items-start">
      <div className="col-span-3">
        <CapsHeading href={solutions.useCases.href} className="mb-3 block">Use Cases</CapsHeading>
        <motion.ul className="space-y-0" variants={containerVariants} initial="hidden" animate="visible">
          {solutions.useCases.items.map((m) => (
            <motion.li key={m.label} variants={itemVariants}>
              <PlainLink item={m} />
            </motion.li>
          ))}
        </motion.ul>
        <div className="mt-4 border-t border-border/40 pt-3">
          <InlineCTA label="All use cases" href={solutions.useCases.href} />
        </div>
      </div>

      <div className="col-span-6 border-x border-border/40 px-7">
        <div className="mb-3 flex items-center justify-between">
          <CapsHeading>Industries</CapsHeading>
          <Link href="/resources/success-stories" className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground/60 hover:text-primary">
            Customer stories →
          </Link>
        </div>
        <motion.div className="space-y-2" variants={containerVariants} initial="hidden" animate="visible">
          {solutions.industries.map((industry) => (
            <motion.div
              key={industry.label}
              variants={itemVariants}
              className="flex items-center gap-3 rounded-md px-2 py-1.5 transition-colors hover:bg-muted/30"
            >
              <span className="w-[140px] shrink-0 text-[12.5px] font-semibold text-foreground">{industry.label}</span>
              <div className="flex flex-1 items-center gap-1.5">
                {industry.logos.map((logo, li) => (
                  <a
                    key={`${industry.label}-${li}`}
                    href="#"
                    title={logo.name}
                    className="flex h-8 flex-1 items-center justify-center rounded border border-border/40 bg-white px-2 grayscale opacity-60 transition-all duration-200 hover:border-primary/40 hover:grayscale-0 hover:opacity-100"
                  >
                    <Image src={logo.src} alt={logo.name} width={70} height={24} className={`${logo.small ? "h-3.5" : "h-5"} w-auto object-contain`} />
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="col-span-3">
        <CapsHeading href={solutions.technologies.href} className="mb-3 block">Technologies</CapsHeading>
        <motion.ul className="space-y-0" variants={containerVariants} initial="hidden" animate="visible">
          {solutions.technologies.items.map((m) => (
            <motion.li key={m.label} variants={itemVariants}>
              <PlainLink item={m} />
            </motion.li>
          ))}
        </motion.ul>
        <div className="mt-4 border-t border-border/40 pt-3">
          <InlineCTA label="All technologies" href={solutions.technologies.href} />
        </div>
      </div>
    </div>
  );
}

function ResourcesPanel2() {
  return (
    <div className="grid grid-cols-4 gap-7 items-start">
      <div>
        <CapsHeading className="mb-3 block">Library</CapsHeading>
        <motion.ul className="space-y-0" variants={containerVariants} initial="hidden" animate="visible">
          {resources.library.items.map((m) => (
            <motion.li key={m.label} variants={itemVariants}>
              <PlainLink item={m} />
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <div className="border-l border-border/40 pl-6">
        <CapsHeading className="mb-3 block">Updates</CapsHeading>
        <Link
          href={resources.featuredArticle.href}
          className="group/f mb-3 block overflow-hidden rounded-lg border border-border/60 transition-colors hover:border-primary/30"
        >
          <div className="relative h-[88px] overflow-hidden bg-gradient-to-br from-primary/15 via-primary/5 to-transparent">
            <Award className="absolute right-3 top-3 h-8 w-8 text-primary/40" strokeWidth={1.5} />
            <span className="absolute bottom-2 left-3 rounded-full bg-white/80 px-2 py-0.5 text-[9.5px] font-bold uppercase tracking-[0.14em] text-primary backdrop-blur">
              Featured
            </span>
          </div>
          <div className="p-3">
            <p className="text-[12.5px] font-semibold leading-snug text-foreground transition-colors group-hover/f:text-primary">
              {resources.featuredArticle.label}
            </p>
            <p className="mt-1 text-[10.5px] uppercase tracking-wider text-muted-foreground">
              {resources.featuredArticle.meta}
            </p>
          </div>
        </Link>
        <motion.ul className="space-y-0" variants={containerVariants} initial="hidden" animate="visible">
          {resources.updates.items.slice(0, 4).map((m) => (
            <motion.li key={m.label} variants={itemVariants}>
              <PlainLink item={m} />
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <div className="border-l border-border/40 pl-6">
        <CapsHeading className="mb-3 block">Customers</CapsHeading>
        <motion.ul className="space-y-0" variants={containerVariants} initial="hidden" animate="visible">
          {[
            { label: "Success Stories", href: "/resources/success-stories" },
            { label: "Case Studies", href: "/resources/success-stories" },
            { label: "Comparison", href: "/resources/comparison" },
            { label: "Customer Logos", href: "/resources/success-stories" },
            { label: "Webinars", href: "/resources/webinars" },
            { label: "Community", href: "/resources/community" },
          ].map((m) => (
            <motion.li key={m.label} variants={itemVariants}>
              <PlainLink item={m} />
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <div className="border-l border-border/40 pl-6">
        <CapsHeading className="mb-3 block">Company</CapsHeading>
        <motion.ul className="space-y-0" variants={containerVariants} initial="hidden" animate="visible">
          {resources.company.items.map((m) => (
            <motion.li key={m.label} variants={itemVariants}>
              <PlainLink item={m} />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   OPTION 4 — EDITORIAL (Linear-clean)
   Products: dual cards + sparkline at card bottom
   Solutions: 2-col text + LOGO WALL on right side, full-bleed
   Resources: NEWSROOM — featured article hero (4 cols) + 3 supporting columns
   ═══════════════════════════════════════════════════════════════ */

function ProductPanel3() {
  return <ProductDualCardLayout bottom={(d) => <SparklineRow seed={d.label} primary={d.primary} />} />;
}

function SolutionsPanel3() {
  return (
    <div className="grid grid-cols-12 gap-8 items-start">
      <div className="col-span-5">
        <CapsHeading href={solutions.useCases.href} className="mb-3 block">Use Cases</CapsHeading>
        <motion.ul className="grid grid-cols-2 gap-x-6 gap-y-0" variants={containerVariants} initial="hidden" animate="visible">
          {solutions.useCases.items.map((m) => (
            <motion.li key={m.label} variants={itemVariants}>
              <PlainLink item={m} />
            </motion.li>
          ))}
        </motion.ul>
        <CapsHeading href={solutions.technologies.href} className="mt-6 mb-3 block">Technologies</CapsHeading>
        <motion.ul className="grid grid-cols-2 gap-x-6 gap-y-0" variants={containerVariants} initial="hidden" animate="visible">
          {solutions.technologies.items.map((m) => (
            <motion.li key={m.label} variants={itemVariants}>
              <PlainLink item={m} />
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <div className="col-span-7 border-l border-border/40 pl-8">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <CapsHeading>Trusted in every industry</CapsHeading>
            <p className="mt-1 text-[12.5px] text-muted-foreground">
              500+ enterprises across BFSI, government, telecom, healthcare and beyond.
            </p>
          </div>
          <Link href="/resources/success-stories" className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground/60 hover:text-primary">
            All stories →
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {solutions.industries.map((industry) => (
            <div
              key={industry.label}
              className="rounded-lg border border-border/40 bg-white p-3 transition-colors hover:border-primary/30"
            >
              <div className="text-[12.5px] font-semibold text-foreground">{industry.label}</div>
              <div className="mt-2 grid grid-cols-4 gap-1">
                {industry.logos.map((logo, li) => (
                  <div
                    key={li}
                    title={logo.name}
                    className="flex h-7 items-center justify-center rounded border border-border/40 bg-white px-1.5 grayscale opacity-70"
                  >
                    <Image src={logo.src} alt={logo.name} width={50} height={20} className="h-4 w-auto object-contain" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ResourcesPanel3() {
  return (
    <div className="grid grid-cols-12 gap-7 items-start">
      <Link
        href={resources.featuredArticle.href}
        className="group/f col-span-5 overflow-hidden rounded-xl border border-border/60 transition-colors hover:border-primary/30"
      >
        <div className="relative h-[180px] overflow-hidden bg-gradient-to-br from-primary/15 via-primary/5 to-transparent">
          <Award className="absolute right-6 top-6 h-16 w-16 text-primary/40" strokeWidth={1.5} />
          <div className="absolute bottom-4 left-5 right-5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/80 px-2.5 py-1 text-[9.5px] font-bold uppercase tracking-[0.14em] text-primary backdrop-blur">
              <Sparkles className="h-3 w-3" /> Featured
            </span>
          </div>
        </div>
        <div className="p-4">
          <p className="text-[10.5px] uppercase tracking-wider text-muted-foreground">{resources.featuredArticle.meta}</p>
          <p className="mt-1.5 text-[16px] font-bold leading-tight tracking-tight text-foreground transition-colors group-hover/f:text-primary">
            {resources.featuredArticle.label}
          </p>
          <p className="mt-1.5 text-[12.5px] leading-relaxed text-muted-foreground">
            {resources.featuredArticle.teaser}
          </p>
          <div className="mt-3">
            <InlineCTA label="Read the report" href={resources.featuredArticle.href} />
          </div>
        </div>
      </Link>

      <div className="col-span-7 grid grid-cols-3 gap-6 border-l border-border/40 pl-7">
        <div>
          <CapsHeading className="mb-3 block">Library</CapsHeading>
          <motion.ul className="space-y-0" variants={containerVariants} initial="hidden" animate="visible">
            {resources.library.items.map((m) => (
              <motion.li key={m.label} variants={itemVariants}>
                <PlainLink item={m} />
              </motion.li>
            ))}
          </motion.ul>
        </div>
        <div>
          <CapsHeading className="mb-3 block">Updates</CapsHeading>
          <motion.ul className="space-y-0" variants={containerVariants} initial="hidden" animate="visible">
            {resources.updates.items.map((m) => (
              <motion.li key={m.label} variants={itemVariants}>
                <PlainLink item={m} />
              </motion.li>
            ))}
          </motion.ul>
        </div>
        <div>
          <CapsHeading className="mb-3 block">Company</CapsHeading>
          <motion.ul className="space-y-0" variants={containerVariants} initial="hidden" animate="visible">
            {resources.company.items.map((m) => (
              <motion.li key={m.label} variants={itemVariants}>
                <PlainLink item={m} />
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   OPTION 5 — OUTCOMES (job-to-be-done IA)
   Products: dual cards + DASHBOARD mock at bottom
   Solutions: 4-col by BUSINESS OUTCOME (Reduce Downtime / Cut Cost / Comply / Scale)
   Resources: 4-col by FUNNEL STAGE (Learn / Evaluate / Implement / Operate)
   ═══════════════════════════════════════════════════════════════ */

function ProductPanel4() {
  return <ProductDualCardLayout bottom={(d) => <DashboardMock data={d} />} />;
}

const solutionOutcomes = [
  {
    heading: "Reduce Downtime",
    desc: "Faster detection, faster fixes.",
    icon: AlertCircle,
    items: [
      { label: "Cloud Monitoring", icon: Cloud, href: "/solutions/use-cases/cloud-monitoring" },
      { label: "Hybrid IT Monitoring", icon: Server },
      { label: "NetOps", icon: Network },
    ] as MenuItem[],
  },
  {
    heading: "Cut Operating Cost",
    desc: "Unify tools, automate work.",
    icon: TrendingUp,
    items: [
      { label: "ITSM for MSP", icon: Users },
      { label: "Workflow Automation", icon: Workflow },
      { label: "IT Asset Management", icon: Package },
    ] as MenuItem[],
  },
  {
    heading: "Meet Compliance",
    desc: "Audit-ready by default.",
    icon: ShieldCheck,
    items: [
      { label: "Security & Compliance", icon: Lock },
      { label: "Configuration & Compliance", icon: ShieldCheck },
      { label: "Log Analytics", icon: ScrollText },
    ] as MenuItem[],
  },
  {
    heading: "Scale Operations",
    desc: "Grow without growing chaos.",
    icon: Layers,
    items: [
      { label: "Linux Monitoring", icon: Cpu },
      { label: "IT Operations Analytics", icon: BarChart3 },
      { label: "AI/ML Algorithms", icon: BrainCircuit },
    ] as MenuItem[],
  },
];

const resourceFunnel = [
  {
    heading: "Learn",
    desc: "Get up to speed quickly.",
    icon: BookOpen,
    items: [
      { label: "Documentation", icon: BookOpen, href: "/resources/documentation" },
      { label: "Getting Started", icon: Play, href: "/getting-started" },
      { label: "IT Glossary", icon: FileText, href: "/resources/glossary" },
    ] as MenuItem[],
  },
  {
    heading: "Evaluate",
    desc: "Make the right decision.",
    icon: GitCompare,
    items: [
      { label: "Whitepapers", icon: FileText, href: "/resources/whitepapers" },
      { label: "Comparison", icon: GitCompare, href: "/resources/comparison" },
      { label: "Success Stories", icon: TrendingUp, href: "/resources/success-stories" },
    ] as MenuItem[],
  },
  {
    heading: "Implement",
    desc: "Roll it out smoothly.",
    icon: Layers,
    items: [
      { label: "Integrations", icon: Layers, href: "/resources/integrations" },
      { label: "Downloads", icon: Download, href: "/resources/downloads" },
      { label: "Community", icon: MessageSquare, href: "/resources/community" },
    ] as MenuItem[],
  },
  {
    heading: "Operate",
    desc: "Run with confidence.",
    icon: LifeBuoy,
    items: [
      { label: "Customer Support", icon: LifeBuoy, href: "/support" },
      { label: "Release Notes", icon: FileText, href: "/resources/press-releases/release-notes" },
      { label: "Webinars", icon: Video, href: "/resources/webinars" },
    ] as MenuItem[],
  },
];

function OutcomeColumn({
  o,
  withDivider,
}: {
  o: { heading: string; desc: string; icon: LucideIcon; items: MenuItem[] };
  withDivider?: boolean;
}) {
  const Icon = o.icon;
  return (
    <div className={withDivider ? "border-l border-border/40 pl-6" : ""}>
      <div className="mb-4 flex items-start gap-2.5">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-border/40 bg-white text-primary">
          <Icon className="h-3.5 w-3.5" strokeWidth={1.75} />
        </span>
        <div className="min-w-0">
          <h3 className="text-[13px] font-bold tracking-tight text-foreground">{o.heading}</h3>
          <p className="text-[12px] leading-snug text-muted-foreground">{o.desc}</p>
        </div>
      </div>
      <motion.ul className="space-y-0" variants={containerVariants} initial="hidden" animate="visible">
        {o.items.map((m) => (
          <motion.li key={m.label} variants={itemVariants}>
            <ItemRow item={m} dense />
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

function SolutionsPanel4() {
  return (
    <div className="grid grid-cols-4 gap-6 items-start">
      {solutionOutcomes.map((o, i) => (
        <OutcomeColumn key={o.heading} o={o} withDivider={i > 0} />
      ))}
    </div>
  );
}

function ResourcesPanel4() {
  return (
    <div className="grid grid-cols-4 gap-6 items-start">
      {resourceFunnel.map((o, i) => (
        <OutcomeColumn key={o.heading} o={o} withDivider={i > 0} />
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   OPTION 6 — PIVOT (persona-led)
   Products: dual cards + FEATURE CALLOUT (newest release) at bottom
   Solutions: TOP PERSONA TABS — content adapts
   Resources: TOP FUNNEL TABS — content adapts
   ═══════════════════════════════════════════════════════════════ */

function ProductPanel5() {
  return <ProductDualCardLayout bottom={(d) => <FeatureCallout data={d} />} />;
}

function PersonaPanel({ personas, primaryKey, label }: { personas: Persona[]; primaryKey?: string; label: string }) {
  const [active, setActive] = useState<string>(personas[0].key);
  const current = personas.find((p) => p.key === active) ?? personas[0];

  return (
    <div>
      <div className="flex flex-wrap items-center gap-1.5 border-b border-border/40 pb-4">
        <span className="mr-2 text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground/70">
          {label}
        </span>
        {personas.map((p) => {
          const isActive = active === p.key;
          const isPrimary = p.key === primaryKey;
          return (
            <button
              key={p.key}
              onMouseEnter={() => setActive(p.key)}
              onClick={() => setActive(p.key)}
              className={`relative rounded-full px-3.5 py-1.5 text-[12.5px] font-semibold transition-colors ${
                isActive ? "bg-muted/60 text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="inline-flex items-center gap-1.5">
                {p.label}
                {isPrimary && <PrimaryDot />}
              </span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.key}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.18 }}
          className="mt-5 grid grid-cols-12 gap-6"
        >
          <div className="col-span-3">
            <h3 className="text-[17px] font-bold tracking-tight text-foreground">{current.label}</h3>
            <p className="mt-1 text-[12.5px] leading-relaxed text-muted-foreground">{current.sub}</p>
            <div className="mt-5 rounded-lg border border-border/40 p-4">
              <p className="text-[24px] font-bold tracking-tight text-foreground">{current.metric.value}</p>
              <p className="mt-0.5 text-[12px] leading-snug text-muted-foreground">{current.metric.label}</p>
            </div>
          </div>

          <div className="col-span-6 border-l border-border/40 pl-6">
            <CapsHeading className="mb-3 block">Most relevant</CapsHeading>
            <motion.ul className="grid grid-cols-2 gap-x-4 gap-y-0" variants={containerVariants} initial="hidden" animate="visible">
              {current.modules.map((m) => (
                <motion.li key={m.label} variants={itemVariants}>
                  <ItemRow item={m} dense />
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <div className="col-span-3 border-l border-border/40 pl-6">
            <CapsHeading className="mb-3 block">Recommended reading</CapsHeading>
            <Link
              href={current.story.href}
              className="group/s block rounded-lg border border-border/40 p-4 transition-colors hover:border-primary/30 hover:bg-muted/20"
            >
              <p className="text-[13px] font-semibold leading-snug text-foreground transition-colors group-hover/s:text-primary">
                {current.story.title}
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-[11.5px] font-semibold text-primary">
                Read
                <ArrowRight className="h-3 w-3 transition-transform group-hover/s:translate-x-0.5" />
              </span>
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function SolutionsPanel5() {
  return <PersonaPanel personas={solutionsPersonas} label="By industry" />;
}

function ResourcesPanel5() {
  return <PersonaPanel personas={resourcesPersonas} label="I am" />;
}

/* ═══════════════════════════════════════════════════════════════
   OPTION 7 — VISUAL (Vercel-style image-heavy)
   Products: dual cards + SCREENSHOT mock at bottom
   Solutions: INDUSTRY TILES — big tiles with logo wall per industry
   Resources: ARTICLE GRID — image-card style
   ═══════════════════════════════════════════════════════════════ */

function ProductPanel6() {
  return <ProductDualCardLayout bottom={(d) => <ScreenshotMock data={d} />} />;
}

function SolutionsPanel6() {
  return (
    <div className="grid grid-cols-12 gap-6 items-start">
      <div className="col-span-3">
        <CapsHeading href={solutions.useCases.href} className="mb-3 block">By Use Case</CapsHeading>
        <motion.ul className="space-y-0" variants={containerVariants} initial="hidden" animate="visible">
          {solutions.useCases.items.map((m) => (
            <motion.li key={m.label} variants={itemVariants}>
              <PlainLink item={m} />
            </motion.li>
          ))}
        </motion.ul>
        <CapsHeading href={solutions.technologies.href} className="mt-6 mb-3 block">By Technology</CapsHeading>
        <motion.ul className="space-y-0" variants={containerVariants} initial="hidden" animate="visible">
          {solutions.technologies.items.slice(0, 4).map((m) => (
            <motion.li key={m.label} variants={itemVariants}>
              <PlainLink item={m} />
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <div className="col-span-9 border-l border-border/40 pl-6">
        <div className="mb-3 flex items-center justify-between">
          <CapsHeading>By Industry</CapsHeading>
          <Link href="/resources/success-stories" className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground/60 hover:text-primary">
            All stories →
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {solutions.industries.slice(0, 3).map((industry) => (
            <Link
              key={industry.label}
              href="#"
              className="group/i overflow-hidden rounded-lg border border-border/60 transition-colors hover:border-primary/30"
            >
              <div className="relative h-[72px] overflow-hidden bg-gradient-to-br from-muted/40 via-muted/20 to-transparent">
                <Building2 className="absolute right-3 top-3 h-7 w-7 text-foreground/15" strokeWidth={1.5} />
                <div className="absolute bottom-2.5 left-3">
                  <p className="text-[13px] font-bold text-foreground transition-colors group-hover/i:text-primary">
                    {industry.label}
                  </p>
                </div>
              </div>
              <div className="p-3">
                <p className="line-clamp-2 text-[12px] leading-snug text-muted-foreground">{industry.blurb}</p>
                <div className="mt-2 flex items-center gap-1.5">
                  {industry.logos.slice(0, 4).map((logo, li) => (
                    <span
                      key={li}
                      title={logo.name}
                      className="flex h-6 flex-1 items-center justify-center rounded border border-border/40 bg-white px-1.5 grayscale opacity-70"
                    >
                      <Image src={logo.src} alt={logo.name} width={48} height={18} className="h-3.5 w-auto object-contain" />
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-3 grid grid-cols-2 gap-3">
          {solutions.industries.slice(3, 5).map((industry) => (
            <Link
              key={industry.label}
              href="#"
              className="group/i flex items-center gap-3 overflow-hidden rounded-lg border border-border/60 p-3 transition-colors hover:border-primary/30"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-border/40 bg-muted/30">
                <Building2 className="h-5 w-5 text-foreground/40" strokeWidth={1.5} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[13px] font-bold text-foreground transition-colors group-hover/i:text-primary">
                  {industry.label}
                </p>
                <p className="line-clamp-1 text-[12px] text-muted-foreground">{industry.blurb}</p>
              </div>
              <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground/60 transition-all group-hover/i:-translate-y-0.5 group-hover/i:translate-x-0.5 group-hover/i:text-primary" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function ResourcesPanel6() {
  const articles = [
    { label: resources.featuredArticle.label, teaser: resources.featuredArticle.teaser, meta: resources.featuredArticle.meta, href: resources.featuredArticle.href, icon: Award, primary: true },
    { label: "Distributed Tracing 101", teaser: "How tracing closes the observability gap for cloud-native teams.", meta: "Engineering · 6 min", href: "/blog", icon: Network },
    { label: "Cutting MTTR with Agentic AI", teaser: "How autonomous routing and workflows compress incident response.", meta: "AIOps · 7 min", href: "/blog", icon: BrainCircuit },
    { label: "MSP playbook for AI era", teaser: "Multi-tenant service desk design patterns from the field.", meta: "MSP · 9 min", href: "/blog", icon: Users },
  ];

  return (
    <div className="grid grid-cols-12 gap-6 items-start">
      <div className="col-span-9 grid grid-cols-4 gap-3">
        {articles.map((a) => {
          const Icon = a.icon;
          return (
            <Link
              key={a.label}
              href={a.href}
              className={`group/a overflow-hidden rounded-lg border transition-colors ${
                a.primary ? "border-primary/25 hover:border-primary/40" : "border-border/60 hover:border-primary/30"
              }`}
            >
              <div
                className={`relative h-[88px] overflow-hidden ${
                  a.primary
                    ? "bg-gradient-to-br from-primary/15 via-primary/5 to-transparent"
                    : "bg-gradient-to-br from-muted/40 via-muted/20 to-transparent"
                }`}
              >
                <Icon
                  className={`absolute right-3 top-3 h-10 w-10 ${a.primary ? "text-primary/40" : "text-foreground/20"}`}
                  strokeWidth={1.5}
                />
                {a.primary && (
                  <span className="absolute bottom-2 left-3 rounded-full bg-white/80 px-2 py-0.5 text-[9.5px] font-bold uppercase tracking-[0.14em] text-primary backdrop-blur">
                    Featured
                  </span>
                )}
              </div>
              <div className="p-3">
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{a.meta}</p>
                <p className="mt-1 text-[12.5px] font-bold leading-snug text-foreground transition-colors group-hover/a:text-primary">
                  {a.label}
                </p>
                <p className="mt-1 line-clamp-2 text-[12px] leading-snug text-muted-foreground">{a.teaser}</p>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="col-span-3 border-l border-border/40 pl-6">
        <CapsHeading className="mb-3 block">Library & Company</CapsHeading>
        <motion.ul className="space-y-0" variants={containerVariants} initial="hidden" animate="visible">
          {[
            ...resources.library.items.slice(0, 3),
            ...resources.company.items.slice(0, 3),
          ].map((m) => (
            <motion.li key={m.label} variants={itemVariants}>
              <PlainLink item={m} />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   OPTION 8 — FEATURED (LlamaIndex hero-per-column)
   Products: dual cards + STAT STRIP (same as Option 2 — featured header style)
   Solutions: 3 FEATURED HERO CARDS each with sub-items below
   Resources: 3 FEATURED HERO CARDS each with sub-items below
   ═══════════════════════════════════════════════════════════════ */

function ProductPanel7() {
  return <ProductDualCardLayout bottom={(d) => <StatStrip stats={d.stats} />} />;
}

function FeaturedHeroCard({
  icon: Icon,
  title,
  tagline,
  href,
  primary,
  items,
  viewAll,
}: {
  icon: LucideIcon;
  title: string;
  tagline: string;
  href: string;
  primary?: boolean;
  items: MenuItem[];
  viewAll?: { label: string; href: string };
}) {
  return (
    <div className="flex h-full flex-col">
      <Link
        href={href}
        className={`group/f block rounded-xl border p-4 transition-colors ${
          primary
            ? "border-primary/20 bg-primary/[0.04] hover:border-primary/30"
            : "border-border/60 bg-muted/30 hover:border-border hover:bg-muted/40"
        }`}
      >
        <div className="flex items-start gap-3">
          <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border bg-white ${primary ? "border-primary/20 text-primary" : "border-border/40 text-foreground/80"}`}>
            <Icon className="h-5 w-5" strokeWidth={1.75} />
          </span>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <h3 className="text-[15px] font-bold tracking-tight text-foreground transition-colors group-hover/f:text-primary">
                {title}
              </h3>
              {primary && <PrimaryDot />}
            </div>
            <p className="mt-1 text-[12px] leading-snug text-muted-foreground">{tagline}</p>
          </div>
        </div>
      </Link>
      <motion.ul className="mt-3 space-y-0" variants={containerVariants} initial="hidden" animate="visible">
        {items.map((m) => (
          <motion.li key={m.label} variants={itemVariants}>
            <ItemRow item={m} />
          </motion.li>
        ))}
      </motion.ul>
      {viewAll && (
        <div className="mt-auto pt-3 pl-2.5">
          <Link
            href={viewAll.href}
            className="group/v inline-flex items-center gap-1 text-[11.5px] font-semibold uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-primary"
          >
            {viewAll.label}
            <ArrowRight className="h-3 w-3 transition-transform group-hover/v:translate-x-0.5" />
          </Link>
        </div>
      )}
    </div>
  );
}

function SolutionsPanel7() {
  const industryItems: MenuItem[] = solutions.industries.slice(0, 3).map((i) => ({
    label: i.label,
    desc: `${i.logos.length}+ enterprise customers`,
    icon: Building2,
  }));
  return (
    <div className="grid grid-cols-3 gap-5 items-stretch">
      <FeaturedHeroCard
        icon={Workflow}
        title="Use Cases"
        tagline="Solutions organized by what you want to achieve."
        href={solutions.useCases.href}
        items={solutions.useCases.items.slice(0, 3)}
        viewAll={{ label: `All ${solutions.useCases.items.length} use cases`, href: solutions.useCases.href }}
      />
      <FeaturedHeroCard
        icon={Building2}
        title="Industries"
        tagline="Built for the realities of your vertical."
        href="#"
        items={industryItems}
        viewAll={{ label: `All ${solutions.industries.length} industries`, href: "/resources/success-stories" }}
      />
      <FeaturedHeroCard
        icon={Cpu}
        title="Technologies"
        tagline="Protocols, models, and pipelines under the hood."
        href={solutions.technologies.href}
        items={solutions.technologies.items.slice(0, 3)}
        viewAll={{ label: `All ${solutions.technologies.items.length} technologies`, href: solutions.technologies.href }}
      />
    </div>
  );
}

function ResourcesPanel7() {
  return (
    <div className="grid grid-cols-3 gap-5 items-stretch">
      <FeaturedHeroCard
        icon={BookOpen}
        title="Library"
        tagline="Documentation, integrations, and deep research."
        href="/resources/documentation"
        items={resources.library.items.slice(0, 3)}
        viewAll={{ label: "Browse the docs", href: "/resources/documentation" }}
      />
      <FeaturedHeroCard
        icon={Newspaper}
        title="Updates"
        tagline="Releases, blog posts, and live sessions."
        href="/blog"
        items={resources.updates.items.slice(0, 3)}
        viewAll={{ label: "Visit the blog", href: "/blog" }}
      />
      <FeaturedHeroCard
        icon={Building2}
        title="Company"
        tagline="Who we are and how to reach us."
        href="/company"
        items={resources.company.items.slice(0, 3)}
        viewAll={{ label: "Talk to us", href: "/contact" }}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   OPTION 9 — LIVE PREVIEW (DOSS-style)
   Products: dual cards + LIVE bar-chart at bottom
   Solutions: industry rail + live preview pane
   Resources: article rail + live preview pane
   ═══════════════════════════════════════════════════════════════ */

function LiveBarChart({ seed, primary }: { seed: string; primary?: boolean }) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  const bars = Array.from({ length: 22 }, (_, i) => {
    h = (h * 1103515245 + 12345) >>> 0;
    return 14 + ((h >>> (i % 13)) & 0x2f);
  });
  return (
    <div className="rounded-lg border border-border/40 bg-gradient-to-br from-muted/30 via-muted/10 to-transparent p-3">
      <div className="mb-1.5 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-primary">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-50" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
          Live
        </span>
        <span className="text-[10.5px] tabular-nums text-muted-foreground">streaming</span>
      </div>
      <div className="flex h-12 items-end gap-1">
        {bars.map((b, i) => (
          <div
            key={i}
            className={`flex-1 rounded-sm ${primary ? "bg-gradient-to-t from-primary/55 to-primary/15" : "bg-gradient-to-t from-foreground/40 to-foreground/10"}`}
            style={{ height: `${b}px` }}
          />
        ))}
      </div>
    </div>
  );
}

function ProductPanel8() {
  return <ProductDualCardLayout bottom={(d) => <LiveBarChart seed={d.label} primary={d.primary} />} />;
}

type PreviewItem = MenuItem & { teaser?: string; meta?: string };

function PreviewShell({
  rail,
  defaultIndex = 0,
}: {
  rail: { heading: string; items: PreviewItem[] }[];
  defaultIndex?: number;
}) {
  const flat = rail.flatMap((g) => g.items);
  const [active, setActive] = useState<PreviewItem>(flat[defaultIndex]);
  const Icon = active.icon ?? Sparkles;

  return (
    <div className="grid grid-cols-12 gap-6 items-stretch">
      <div className="col-span-5 max-h-[400px] overflow-y-auto pr-3">
        {rail.map((g, gi) => (
          <div key={g.heading} className={gi > 0 ? "mt-4" : ""}>
            <CapsHeading className="mb-2 block">{g.heading}</CapsHeading>
            <ul className="space-y-0">
              {g.items.map((m) => {
                const isActive = active.label === m.label;
                const ItemIcon = m.icon ?? Sparkles;
                return (
                  <li key={m.label}>
                    <button
                      onMouseEnter={() => setActive(m)}
                      onClick={() => setActive(m)}
                      className={`flex w-full items-center gap-2.5 rounded-md px-2.5 py-1.5 text-left transition-colors ${
                        isActive ? "bg-muted/60" : "hover:bg-muted/40"
                      }`}
                    >
                      <ItemIcon className={`h-3.5 w-3.5 shrink-0 ${isActive ? "text-primary" : "text-muted-foreground"}`} strokeWidth={1.75} />
                      <span className={`flex-1 truncate text-[13px] font-medium ${isActive ? "text-foreground" : "text-foreground/85"}`}>
                        {m.label}
                      </span>
                      <ChevronRight className={`h-3 w-3 shrink-0 text-primary ${isActive ? "opacity-100" : "opacity-0"}`} />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      <div className="col-span-7">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.label}
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.99 }}
            transition={{ duration: 0.18 }}
            className="relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-xl border border-border/60 bg-gradient-to-br from-muted/40 via-muted/15 to-transparent p-6"
          >
            <Icon aria-hidden className="pointer-events-none absolute -right-4 -bottom-4 h-44 w-44 text-primary/[0.06]" strokeWidth={1.25} />
            <div className="relative z-10 flex h-full flex-col">
              {active.meta && (
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-primary">
                  {active.meta}
                </span>
              )}
              <h3 className="mt-2 text-[20px] font-bold leading-tight tracking-tight text-foreground">
                {active.label}
              </h3>
              {(active.teaser || active.desc) && (
                <p className="mt-2 max-w-md text-[12px] leading-relaxed text-muted-foreground">
                  {active.teaser ?? active.desc}
                </p>
              )}
              <div className="mt-auto pt-5">
                <Link
                  href={active.href || "#"}
                  className="group/c inline-flex items-center gap-1.5 rounded-md bg-foreground px-3.5 py-2 text-[12.5px] font-semibold text-white transition-colors hover:bg-foreground/90"
                >
                  Explore {active.label}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/c:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function SolutionsPanel8() {
  const industryItems: PreviewItem[] = solutions.industries.map((i) => ({
    label: i.label,
    teaser: i.blurb,
    meta: "Industry",
    icon: Building2,
  }));
  const useCaseItems: PreviewItem[] = solutions.useCases.items.map((i) => ({
    ...i,
    meta: "Use case",
    teaser: i.desc,
  }));
  return (
    <PreviewShell
      rail={[
        { heading: "Industries", items: industryItems },
        { heading: "Use Cases", items: useCaseItems },
      ]}
    />
  );
}

function ResourcesPanel8() {
  const featured: PreviewItem = {
    label: resources.featuredArticle.label,
    teaser: resources.featuredArticle.teaser,
    meta: resources.featuredArticle.meta,
    href: resources.featuredArticle.href,
    icon: Award,
  };
  const library: PreviewItem[] = resources.library.items.map((i) => ({ ...i, teaser: i.desc, meta: "Library" }));
  const updates: PreviewItem[] = resources.updates.items.map((i) => ({ ...i, teaser: i.desc, meta: "Update" }));
  return (
    <PreviewShell
      defaultIndex={0}
      rail={[
        { heading: "Featured", items: [featured] },
        { heading: "Library", items: library },
        { heading: "Updates", items: updates },
      ]}
    />
  );
}

/* ═══════════════════════════════════════════════════════════════
   OPTION 10 — SPREAD (editorial chapter bands)
   A radical departure: horizontal numbered "chapters" instead of columns.
   Each band runs full-width with a giant stroked-outline numeral, the
   product/section header on the left, and a 3×2 feature grid on the right.
   Brand: monochrome with controlled coral signal (dot, Explore link, hover).
   ═══════════════════════════════════════════════════════════════ */

/** Big outlined chapter numeral — stroked text, no fill. Pure brand-aligned. */
function ChapterNumeral({ value }: { value: string }) {
  return (
    <div
      aria-hidden
      className="select-none font-black leading-none tracking-tight"
      style={{
        fontSize: "72px",
        WebkitTextStroke: "1px hsl(var(--foreground) / 0.18)",
        color: "transparent",
      }}
    >
      {value}
    </div>
  );
}

/** Mono "tag" used for chapter labels like "01 / PRODUCT". */
function ChapterTag({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="text-[10.5px] font-bold uppercase tracking-[0.22em] text-muted-foreground/70"
      style={{ fontFeatureSettings: '"tnum" 1' }}
    >
      {children}
    </span>
  );
}

type SpreadItem = MenuItem & { newLabel?: string };

/** One editorial band — left: chapter info, right: 3×2 feature grid. */
function SpreadBand({
  number,
  category,
  title,
  primary = false,
  tagline,
  ctaLabel,
  ctaHref,
  items,
  rightExtra,
}: {
  number: string;
  category: string;
  title: string;
  primary?: boolean;
  tagline: string;
  ctaLabel: string;
  ctaHref: string;
  items: SpreadItem[];
  rightExtra?: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-12 gap-8 py-7">
      {/* Left ── chapter info ── */}
      <div className="col-span-4 flex flex-col">
        <div className="flex items-start gap-4">
          <ChapterNumeral value={number} />
          <div className="pt-2">
            <ChapterTag>{category}</ChapterTag>
            <div className="mt-1 h-px w-10 bg-foreground/25" />
          </div>
        </div>
        <div className="mt-5 flex items-center gap-1.5">
          <Link href={ctaHref} className="group/h">
            <h3 className="text-[22px] font-bold leading-tight tracking-tight text-foreground transition-colors group-hover/h:text-primary">
              {title}
            </h3>
          </Link>
          {primary && <PrimaryDot />}
        </div>
        <p className="mt-2 max-w-[260px] text-[12.5px] leading-relaxed text-muted-foreground">
          {tagline}
        </p>
        <Link
          href={ctaHref}
          className="group/c mt-4 inline-flex items-center gap-1 text-[12.5px] font-semibold text-primary"
        >
          {ctaLabel}
          <ArrowRight className="h-3 w-3 transition-transform group-hover/c:translate-x-0.5" />
        </Link>
      </div>

      {/* Right ── 3×2 feature grid ── */}
      <div className="col-span-8">
        {rightExtra ?? (
          <motion.div
            className="grid grid-cols-3 gap-x-6 gap-y-5"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {items.map((m, idx) => (
              <motion.div key={m.label} variants={itemVariants}>
                <Link
                  href={m.href || "#"}
                  className="group/m block border-t border-border/40 pt-3 transition-colors hover:border-primary/30"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className="font-mono text-[10px] font-bold tracking-[0.14em] text-muted-foreground/50"
                      style={{ fontFeatureSettings: '"tnum" 1' }}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    {m.newLabel && (
                      <span className="rounded-full bg-primary/10 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.14em] text-primary">
                        {m.newLabel}
                      </span>
                    )}
                  </div>
                  <h4 className="mt-1.5 text-[13px] font-semibold tracking-tight text-foreground transition-colors group-hover/m:text-primary">
                    {m.label}
                  </h4>
                  {m.desc && (
                    <p className="mt-1 line-clamp-2 text-[12px] leading-snug text-muted-foreground">
                      {m.desc}
                    </p>
                  )}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}

/** Industry logo wall used inside SpreadBand for Solutions / Industries band. */
function SpreadIndustryWall() {
  return (
    <motion.div
      className="grid grid-cols-3 gap-x-6 gap-y-5"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {solutions.industries.slice(0, 3).map((industry, idx) => (
        <motion.div key={industry.label} variants={itemVariants}>
          <Link href="#" className="group/m block border-t border-border/40 pt-3 transition-colors hover:border-primary/30">
            <span
              className="font-mono text-[10px] font-bold tracking-[0.14em] text-muted-foreground/50"
              style={{ fontFeatureSettings: '"tnum" 1' }}
            >
              {String(idx + 1).padStart(2, "0")}
            </span>
            <h4 className="mt-1.5 text-[13px] font-semibold tracking-tight text-foreground transition-colors group-hover/m:text-primary">
              {industry.label}
            </h4>
            <p className="mt-1 line-clamp-2 text-[12px] leading-snug text-muted-foreground">{industry.blurb}</p>
            <div className="mt-2 flex items-center gap-1">
              {industry.logos.slice(0, 4).map((logo) => (
                <span
                  key={logo.name}
                  title={logo.name}
                  className="flex h-6 flex-1 items-center justify-center rounded border border-border/40 bg-white px-1.5 grayscale opacity-70 transition-all group-hover/m:opacity-100 group-hover/m:grayscale-0"
                >
                  <Image src={logo.src} alt={logo.name} width={48} height={18} className="h-3.5 w-auto object-contain" />
                </span>
              ))}
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}

function ProductPanel10() {
  const observeItems: SpreadItem[] = products.primary.items;
  const serviceItems: SpreadItem[] = products.secondary.items;
  return (
    <div className="divide-y divide-border/40">
      <SpreadBand
        number="01"
        category="Product"
        title={products.primary.label}
        primary
        tagline={products.primary.tagline}
        ctaLabel={`Explore ${products.primary.label}`}
        ctaHref={products.primary.href}
        items={observeItems}
      />
      <SpreadBand
        number="02"
        category="Product"
        title={products.secondary.label}
        tagline={products.secondary.tagline}
        ctaLabel={`Explore ${products.secondary.label}`}
        ctaHref={products.secondary.href}
        items={serviceItems}
      />
      {/* Footer rail — What's New + What's Next as a single horizontal strip */}
      <div className="grid grid-cols-12 gap-8 pt-5">
        <div className="col-span-4">
          <ChapterTag>What&apos;s Live</ChapterTag>
          <div className="mt-1 h-px w-10 bg-foreground/25" />
        </div>
        <div className="col-span-8 flex flex-wrap items-center gap-x-6 gap-y-2">
          <span className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-primary">
            New
          </span>
          {productHighlights.whatsNew.map((m) => (
            <Link
              key={m.label}
              href={m.href || "#"}
              className="text-[13px] font-medium text-foreground/85 transition-colors hover:text-primary"
            >
              {m.label}
            </Link>
          ))}
          <span className="ml-2 h-3 w-px bg-border/60" />
          <span className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-muted-foreground/70">
            Next
          </span>
          <Link
            href="#"
            className="text-[13px] font-medium text-foreground/85 transition-colors hover:text-primary"
          >
            Next-Gen AI Native ITOM
          </Link>
        </div>
      </div>
    </div>
  );
}

function SolutionsPanel10() {
  const useCaseItems: SpreadItem[] = solutions.useCases.items;
  const techItems: SpreadItem[] = solutions.technologies.items;
  return (
    <div className="divide-y divide-border/40">
      <SpreadBand
        number="01"
        category="By Use Case"
        title="Use Cases"
        tagline="Solutions organized by what you actually want to accomplish."
        ctaLabel="All use cases"
        ctaHref={solutions.useCases.href}
        items={useCaseItems}
      />
      <SpreadBand
        number="02"
        category="By Industry"
        title="Industries"
        tagline="Built for the realities of regulated, mission-critical verticals."
        ctaLabel="Customer stories"
        ctaHref="/resources/success-stories"
        items={[]}
        rightExtra={<SpreadIndustryWall />}
      />
      <SpreadBand
        number="03"
        category="By Technology"
        title="Technologies"
        tagline="The protocols, models, and pipelines that power the platform."
        ctaLabel="All technologies"
        ctaHref={solutions.technologies.href}
        items={techItems}
      />
    </div>
  );
}

function ResourcesPanel10() {
  const libraryItems: SpreadItem[] = resources.library.items;
  const updateItems: SpreadItem[] = resources.updates.items;
  const companyItems: SpreadItem[] = resources.company.items;
  return (
    <div className="divide-y divide-border/40">
      <SpreadBand
        number="01"
        category="Library"
        title="Read the docs"
        tagline="Technical guides, integrations, whitepapers, and reference for engineers."
        ctaLabel="Browse documentation"
        ctaHref="/resources/documentation"
        items={libraryItems}
      />
      <SpreadBand
        number="02"
        category="Latest"
        title="Stay current"
        tagline="Releases, posts, live sessions, and customer voices."
        ctaLabel="Visit the blog"
        ctaHref="/blog"
        items={updateItems}
      />
      <SpreadBand
        number="03"
        category="Company"
        title="About Motadata"
        tagline="Who we are, where we're going, and how to reach us."
        ctaLabel="Talk to us"
        ctaHref="/contact"
        items={companyItems}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ROUTER
   ═══════════════════════════════════════════════════════════════ */

function PanelRouter({ openMenu, option }: { openMenu: MenuKey; option: number }) {
  if (openMenu === "product") {
    if (option === 1) return <ProductPanel1 />;
    if (option === 2) return <ProductPanelCU />;
    if (option === 3) return <ProductPanel2 />;
    if (option === 4) return <ProductPanel3 />;
    if (option === 5) return <ProductPanel4 />;
    if (option === 6) return <ProductPanel5 />;
    if (option === 7) return <ProductPanel6 />;
    if (option === 8) return <ProductPanel7 />;
    if (option === 9) return <ProductPanel8 />;
    if (option === 10) return <ProductPanel10 />;
  }
  if (openMenu === "solutions") {
    if (option === 1) return <SolutionsPanel1 />;
    if (option === 2) return <SolutionsPanel1 />; // Current Upgrade keeps current Solutions
    if (option === 3) return <SolutionsPanel2 />;
    if (option === 4) return <SolutionsPanel3 />;
    if (option === 5) return <SolutionsPanel4 />;
    if (option === 6) return <SolutionsPanel5 />;
    if (option === 7) return <SolutionsPanel6 />;
    if (option === 8) return <SolutionsPanel7 />;
    if (option === 9) return <SolutionsPanel8 />;
    if (option === 10) return <SolutionsPanel10 />;
  }
  if (openMenu === "resources") {
    if (option === 1) return <ResourcesPanel1 />;
    if (option === 2) return <ResourcesPanel1 />; // Current Upgrade keeps current Resources
    if (option === 3) return <ResourcesPanel2 />;
    if (option === 4) return <ResourcesPanel3 />;
    if (option === 5) return <ResourcesPanel4 />;
    if (option === 6) return <ResourcesPanel5 />;
    if (option === 7) return <ResourcesPanel6 />;
    if (option === 8) return <ResourcesPanel7 />;
    if (option === 9) return <ResourcesPanel8 />;
    if (option === 10) return <ResourcesPanel10 />;
  }
  return null;
}

/* ═══════════════════════════════════════════════════════════════
   OPTION META + SWITCHER
   ═══════════════════════════════════════════════════════════════ */

const OPTION_META: { num: number; name: string; hint: string }[] = [
  { num: 1, name: "Current", hint: "Original 4-col mega + bottom slider" },
  { num: 2, name: "Current Upgrade", hint: "Same as Current, but each product gets a header card + solid CTA button" },
  { num: 3, name: "Studio", hint: "Dual cards + 3-col solutions (logo wall) + 4-col resources (featured blog)" },
  { num: 4, name: "Editorial", hint: "Dual cards (sparkline) + industry logo wall right + newsroom resources" },
  { num: 5, name: "Outcomes", hint: "Dual cards (dashboard) + outcome columns + funnel-stage resources" },
  { num: 6, name: "Pivot", hint: "Dual cards (new release) + persona tabs in Solutions & Resources" },
  { num: 7, name: "Visual", hint: "Dual cards (screenshot) + industry tiles + article grid (image cards)" },
  { num: 8, name: "Featured", hint: "Dual cards + 3 hero-card columns (LlamaIndex style)" },
  { num: 9, name: "Live", hint: "Dual cards (live bars) + rail + preview pane (DOSS style)" },
  { num: 10, name: "Spread", hint: "Editorial magazine spread — stroked numerals, chapter bands, feature grids" },
];

function NavOptionSwitcher({
  option,
  setOption,
}: {
  option: number;
  setOption: (n: number) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const current = OPTION_META.find((o) => o.num === option)!;

  return (
    <div className="fixed bottom-6 left-6 z-[200]">
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.18 }}
            className="mb-2 w-[360px] rounded-xl border border-border/60 bg-white p-3 shadow-xl"
          >
            <div className="mb-2 px-1 text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground/70">
              Navbar Approach
            </div>
            <ul className="space-y-0.5">
              {OPTION_META.map((o) => {
                const isActive = option === o.num;
                return (
                  <li key={o.num}>
                    <button
                      onClick={() => {
                        setOption(o.num);
                        setExpanded(false);
                      }}
                      className={`flex w-full items-start gap-3 rounded-lg p-2.5 text-left transition-colors ${
                        isActive ? "bg-primary/10" : "hover:bg-muted/50"
                      }`}
                    >
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-[12px] font-bold ${
                          isActive ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {o.num}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[12.5px] font-semibold text-foreground">{o.name}</span>
                        <span className="block text-[12px] leading-snug text-muted-foreground">{o.hint}</span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setExpanded((v) => !v)}
        className="flex items-center gap-2 rounded-full border border-border/60 bg-white px-3 py-2 text-[12px] font-semibold shadow-lg hover:border-primary/40"
      >
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
          {option}
        </span>
        <span className="text-foreground">Nav: {current.name}</span>
        <ChevronDown
          className={`h-3 w-3 text-muted-foreground transition-transform ${expanded ? "rotate-180" : ""}`}
        />
      </button>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   NAVBAR
   ═══════════════════════════════════════════════════════════════ */

export function Navbar({ forceOption }: { forceOption?: number } = {}) {
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const [option, setOption] = useState<number>(forceOption ?? 1);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  /* Viewport offset of the header's bottom edge. Anything above the navbar
     (e.g. the top announcement banner) pushes it down, so the mega menu and
     backdrop anchor to the real header edge instead of a fixed 3.5rem. */
  const [menuTop, setMenuTop] = useState(56);

  useEffect(() => {
    if (!openMenu) return;
    const update = () => {
      const el = headerRef.current;
      if (el) setMenuTop(Math.max(0, el.getBoundingClientRect().bottom));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [openMenu]);

  useEffect(() => {
    setOpenMenu(null);
  }, [pathname]);

  useEffect(() => {
    if (forceOption !== undefined) setOption(forceOption);
  }, [forceOption]);

  const clearClose = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    clearClose();
    closeTimer.current = setTimeout(() => setOpenMenu(null), 150);
  }, [clearClose]);

  const handleEnter = useCallback(
    (key: MenuKey) => {
      clearClose();
      setOpenMenu(key);
    },
    [clearClose],
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMenu(null);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  const showBottomSlider = option === 1 || option === 2;
  const sliderEvents =
    openMenu === "product"
      ? productEvents
      : openMenu === "solutions"
        ? solutionsEvents
        : resourcesEvents;

  return (
    <>
      <header
        ref={headerRef}
        className="sticky top-[calc(var(--event-bar-h,0px)+var(--announce-strip-h,0px))] z-50 bg-white/80 backdrop-blur-lg"
        style={{ boxShadow: "0 1px 0 hsl(var(--border))" }}
      >
        <div
          ref={navRef}
          className="relative mx-auto flex h-14 w-full max-w-7xl items-center justify-center px-6"
        >
          <Link href="/" className="absolute left-6 text-foreground">
            <BrandLogo className="h-6" />
          </Link>

          <nav
            className="hidden items-center gap-1 text-[14px] font-medium leading-[21px] text-[#0F1729] md:flex"
            style={{ fontFamily: 'Inter, "Inter Fallback", system-ui, sans-serif' }}
          >
            {menus.map((m) => (
              <button
                key={m.key}
                onMouseEnter={() => handleEnter(m.key)}
                onMouseLeave={scheduleClose}
                onClick={() => setOpenMenu(openMenu === m.key ? null : m.key)}
                className="relative flex items-center gap-1 rounded-md px-3 py-1.5 transition-colors hover:text-foreground"
              >
                <span className={openMenu === m.key ? "text-foreground" : ""}>{m.label}</span>
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    openMenu === m.key ? "rotate-180 text-foreground" : ""
                  }`}
                />
                {openMenu === m.key && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-[0.45rem] left-3 right-3 h-px rounded-full bg-primary/60"
                    transition={{ type: "spring", stiffness: 300, damping: 28 }}
                  />
                )}
              </button>
            ))}
          </nav>

          <div className="absolute right-6 flex items-center gap-2">
            {/* Language sits between the menu and the actions, set off by a divider */}
            <LanguageSwitcher />
            <span aria-hidden className="mx-1 hidden h-5 w-px bg-border sm:block" />
            <Link href="/schedule-demo">
              <Button
                variant="ghost"
                size="sm"
                className="hidden text-[14px] font-medium leading-[21px] xl:inline-flex"
                style={{ fontFamily: 'Inter, "Inter Fallback", system-ui, sans-serif' }}
              >
                Schedule Demo
              </Button>
            </Link>
            <Link href="/free-trial">
              <Button
                size="sm"
                className="text-[14px] font-medium leading-[21px]"
                style={{ fontFamily: 'Inter, "Inter Fallback", system-ui, sans-serif' }}
              >
                Start Free Trial
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[60] bg-black/[0.03]"
            style={{ top: menuTop }}
            onClick={() => setOpenMenu(null)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {openMenu && (
          <motion.div
            key={`${openMenu}-${option}`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 z-[70] mx-auto w-[calc(100%-2rem)] max-w-7xl overflow-hidden rounded-b-xl border border-t-0 border-border/60 bg-white"
            style={{
              top: menuTop,
              boxShadow: "0 12px 40px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.03)",
            }}
            onMouseEnter={clearClose}
            onMouseLeave={scheduleClose}
          >
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <div className="p-6">
              <PanelRouter openMenu={openMenu} option={option} />
            </div>
            {showBottomSlider && <EventsSlider events={sliderEvents} />}
          </motion.div>
        )}
      </AnimatePresence>

      {forceOption === undefined && (
        <NavOptionSwitcher option={option} setOption={setOption} />
      )}
    </>
  );
}
