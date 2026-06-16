"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import {
  Activity,
  ArrowRight,
  ArrowRightLeft,
  Blocks,
  Bot,
  BrainCircuit,
  Building2,
  Check,
  ChevronDown,
  ChevronRight,
  Code,
  Cog,
  Cpu,
  Database,
  Download,
  Eye,
  Factory,
  FileText,
  Headset,
  HeartPulse,
  Landmark,
  Layers,
  Monitor,
  Network,
  PackageSearch,
  Radio,
  Scale,
  Scan,
  Server,
  Settings2,
  ShieldCheck,
  ShoppingCart,
  TrendingUp,
  Users,
  Workflow,
  Zap,
  Globe,
  Search,
  type LucideIcon,
} from "lucide-react";

/* ── Types ── */
interface SectionIcon {
  icon: LucideIcon;
  label: string;
  context: string;
}

interface PageSection {
  section: string;
  icons: SectionIcon[];
}

interface PageEntry {
  page: string;
  href: string;
  category: "Products" | "Solutions" | "Resources" | "Company" | "Other";
  sections: PageSection[];
}

/* ── Complete Icon Data ── */
const pages: PageEntry[] = [
  /* ── ObserveOps ── */
  {
    page: "ObserveOps",
    href: "/products/observeops",
    category: "Products",
    sections: [
      {
        section: "Hero",
        icons: [{ icon: ArrowRight, label: "ArrowRight", context: "CTA button" }],
      },
      {
        section: "Core Platform Features",
        icons: [
          { icon: Eye, label: "Eye", context: "Unified Observability" },
          { icon: BrainCircuit, label: "BrainCircuit", context: "AI at the Core" },
          { icon: Database, label: "Database", context: "Motastore Engine" },
          { icon: Blocks, label: "Blocks", context: "Modular Architecture" },
          { icon: ShieldCheck, label: "ShieldCheck", context: "Enterprise-Grade Security" },
          { icon: Scan, label: "Scan", context: "Absolute Insight" },
        ],
      },
      {
        section: "The ObserveOps Suite",
        icons: [
          { icon: Network, label: "Network", context: "Network Observability — Unite flows, packets, paths for clarity, control, confidence" },
          { icon: Settings2, label: "Settings2", context: "Network Configuration & Compliance Management — Align devices with automation, assurance, audit-readiness" },
          { icon: Server, label: "Server", context: "Hybrid Infrastructure Monitoring — Unity on-prem & cloud for visibility, stability, scale" },
          { icon: FileText, label: "FileText", context: "Log Monitoring — Uncover context, correlation, clarity" },
          { icon: Activity, label: "Activity", context: "Application Performance Monitoring — Complete visibility from code to cloud with distributed tracing" },
          { icon: Users, label: "Users", context: "Real User Monitoring — Capture clicks with insight, impact, intuition" },
        ],
      },
      {
        section: "Motastore Engine",
        icons: [
          { icon: Zap, label: "Zap", context: "Extreme Performance" },
          { icon: Layers, label: "Layers", context: "Unified Data Fabric" },
          { icon: BrainCircuit, label: "BrainCircuit", context: "AI-Native Architecture" },
          { icon: ShieldCheck, label: "ShieldCheck", context: "Security & Retention" },
        ],
      },
      {
        section: "Precision for Every Role",
        icons: [
          { icon: TrendingUp, label: "TrendingUp", context: "CIO / CTO" },
          { icon: Monitor, label: "Monitor", context: "IT Director / Manager" },
          { icon: Radio, label: "Radio", context: "NOC Engineer / SRE" },
          { icon: Code, label: "Code", context: "Application Owner / DevOps" },
        ],
      },
      {
        section: "Industry Solutions",
        icons: [
          { icon: Landmark, label: "Landmark", context: "BFSI" },
          { icon: Radio, label: "Radio", context: "Telecom" },
          { icon: HeartPulse, label: "HeartPulse", context: "Healthcare" },
          { icon: Building2, label: "Building2", context: "Government & Public Sector" },
          { icon: Factory, label: "Factory", context: "Manufacturing" },
          { icon: ShoppingCart, label: "ShoppingCart", context: "Retail & eCommerce" },
        ],
      },
      {
        section: "Editions",
        icons: [
          { icon: Check, label: "Check", context: "Capability checkmarks" },
          { icon: ArrowRight, label: "ArrowRight", context: "CTA button" },
        ],
      },
      {
        section: "FAQ",
        icons: [{ icon: ChevronDown, label: "ChevronDown", context: "Accordion toggle" }],
      },
    ],
  },

  /* ── ServiceOps ── */
  {
    page: "ServiceOps",
    href: "/products/serviceops",
    category: "Products",
    sections: [
      {
        section: "Hero",
        icons: [{ icon: ArrowRight, label: "ArrowRight", context: "CTA button" }],
      },
      {
        section: "Core Platform Features",
        icons: [
          { icon: Layers, label: "Layers", context: "Unified Service Management" },
          { icon: BrainCircuit, label: "BrainCircuit", context: "AI at the Core" },
          { icon: Blocks, label: "Blocks", context: "Modular Architecture" },
          { icon: ShieldCheck, label: "ShieldCheck", context: "Enterprise Security" },
          { icon: Scale, label: "Scale", context: "Scalable Foundation" },
          { icon: Scan, label: "Scan", context: "Absolute Control" },
        ],
      },
      {
        section: "The ServiceOps Suite",
        icons: [
          { icon: Headset, label: "Headset", context: "Service Management" },
          { icon: PackageSearch, label: "PackageSearch", context: "IT Asset Management" },
          { icon: Network, label: "Network", context: "Configuration Management (CMDB)" },
          { icon: Download, label: "Download", context: "Patch & Deployment Management" },
          { icon: Bot, label: "Bot", context: "Agentic AI & Orchestration" },
          { icon: Building2, label: "Building2", context: "MSP Edition" },
        ],
      },
      {
        section: "IntelliCore Engine",
        icons: [
          { icon: Zap, label: "Zap", context: "AI Classification & Auto-Routing" },
          { icon: TrendingUp, label: "TrendingUp", context: "Predictive Analytics" },
          { icon: Workflow, label: "Workflow", context: "Workflow Orchestration" },
          { icon: Cog, label: "Cog", context: "Process Automation" },
        ],
      },
      {
        section: "Built for Every Stakeholder",
        icons: [
          { icon: TrendingUp, label: "TrendingUp", context: "CIO / CTO" },
          { icon: Monitor, label: "Monitor", context: "IT Director / Manager" },
          { icon: Headset, label: "Headset", context: "Service Desk Leader" },
          { icon: PackageSearch, label: "PackageSearch", context: "IT Asset Manager" },
          { icon: ArrowRightLeft, label: "ArrowRightLeft", context: "IT Change Manager" },
          { icon: Building2, label: "Building2", context: "MSP Executive" },
        ],
      },
      {
        section: "Industry Solutions",
        icons: [
          { icon: Landmark, label: "Landmark", context: "BFSI" },
          { icon: Radio, label: "Radio", context: "Telecom" },
          { icon: HeartPulse, label: "HeartPulse", context: "Healthcare" },
          { icon: Building2, label: "Building2", context: "Government & Public Sector" },
          { icon: Factory, label: "Factory", context: "Manufacturing" },
          { icon: ShoppingCart, label: "ShoppingCart", context: "Retail & eCommerce" },
        ],
      },
      {
        section: "CTA Cards",
        icons: [
          { icon: Monitor, label: "Monitor", context: "Executive Demo" },
          { icon: Users, label: "Users", context: "ServiceOps Architect" },
          { icon: Cpu, label: "Cpu", context: "AI ITOM Platform" },
          { icon: ArrowRight, label: "ArrowRight", context: "CTA button" },
        ],
      },
      {
        section: "Editions",
        icons: [
          { icon: Check, label: "Check", context: "Capability checkmarks" },
          { icon: ArrowRight, label: "ArrowRight", context: "CTA button" },
        ],
      },
      {
        section: "FAQ",
        icons: [{ icon: ChevronDown, label: "ChevronDown", context: "Accordion toggle" }],
      },
    ],
  },

  /* ── HIM Sub-page ── */
  {
    page: "Hybrid Infrastructure Monitoring",
    href: "/products/observeops/hybrid-infrastructure-monitoring",
    category: "Products",
    sections: [
      {
        section: "Core Features",
        icons: [
          { icon: Server, label: "Server", context: "Infrastructure monitoring" },
          { icon: Activity, label: "Activity", context: "Performance tracking" },
          { icon: ShieldCheck, label: "ShieldCheck", context: "Security monitoring" },
          { icon: Network, label: "Network", context: "Network visibility" },
        ],
      },
    ],
  },

  /* ── Features ── */
  {
    page: "Features",
    href: "/features",
    category: "Products",
    sections: [
      {
        section: "Feature Categories",
        icons: [
          { icon: Activity, label: "Activity", context: "Observability features" },
          { icon: Headset, label: "Headset", context: "Service management features" },
          { icon: Search, label: "Search", context: "Feature search" },
          { icon: ChevronRight, label: "ChevronRight", context: "Feature navigation" },
        ],
      },
    ],
  },

  /* ── Solutions ── */
  {
    page: "Solutions — By Use Cases",
    href: "/solutions/by-use-cases",
    category: "Solutions",
    sections: [
      {
        section: "Use Case Cards",
        icons: [
          { icon: Globe, label: "Globe", context: "Cloud Monitoring" },
          { icon: Server, label: "Server", context: "Hybrid IT Monitoring" },
          { icon: FileText, label: "FileText", context: "Log Monitoring" },
          { icon: Network, label: "Network", context: "NetOps" },
          { icon: Headset, label: "Headset", context: "ITSM for MSP" },
          { icon: Monitor, label: "Monitor", context: "Linux Network Monitoring" },
        ],
      },
    ],
  },
  {
    page: "Solutions — By Technologies",
    href: "/solutions/by-technologies",
    category: "Solutions",
    sections: [
      {
        section: "Technology Cards",
        icons: [
          { icon: FileText, label: "FileText", context: "Log Parsing & Indexing" },
          { icon: ShieldCheck, label: "ShieldCheck", context: "Security & Compliance" },
          { icon: BrainCircuit, label: "BrainCircuit", context: "AI/ML Algorithms" },
          { icon: Database, label: "Database", context: "IT Operations Analytics" },
          { icon: Network, label: "Network", context: "SNMP, WMI, ICMP, Syslog" },
        ],
      },
    ],
  },
  {
    page: "Cloud Monitoring",
    href: "/solutions/use-cases/cloud-monitoring",
    category: "Solutions",
    sections: [
      {
        section: "Cloud Features",
        icons: [
          { icon: Globe, label: "Globe", context: "Cloud overview" },
          { icon: Activity, label: "Activity", context: "Performance monitoring" },
          { icon: ShieldCheck, label: "ShieldCheck", context: "Compliance" },
          { icon: TrendingUp, label: "TrendingUp", context: "Cost optimization" },
        ],
      },
    ],
  },

  /* ── Resources ── */
  {
    page: "Documentation",
    href: "/resources/documentation",
    category: "Resources",
    sections: [
      {
        section: "Documentation",
        icons: [
          { icon: FileText, label: "FileText", context: "Documentation pages" },
          { icon: Search, label: "Search", context: "Doc search" },
        ],
      },
    ],
  },
  {
    page: "Integrations",
    href: "/resources/integrations",
    category: "Resources",
    sections: [
      {
        section: "Integration Cards",
        icons: [
          { icon: Blocks, label: "Blocks", context: "Integration modules" },
          { icon: Network, label: "Network", context: "Connection types" },
        ],
      },
    ],
  },
  {
    page: "Comparison",
    href: "/resources/comparison",
    category: "Resources",
    sections: [
      {
        section: "Comparison Cards",
        icons: [
          { icon: Scale, label: "Scale", context: "Product comparison" },
          { icon: Check, label: "Check", context: "Feature checkmarks" },
        ],
      },
    ],
  },
  {
    page: "IT Glossary",
    href: "/resources/glossary",
    category: "Resources",
    sections: [
      {
        section: "Glossary",
        icons: [
          { icon: FileText, label: "FileText", context: "Glossary entries" },
          { icon: Search, label: "Search", context: "Term search" },
        ],
      },
    ],
  },
  {
    page: "Blog",
    href: "/blog",
    category: "Resources",
    sections: [
      {
        section: "Blog Listing",
        icons: [
          { icon: FileText, label: "FileText", context: "Blog posts" },
          { icon: Search, label: "Search", context: "Blog search" },
          { icon: ChevronRight, label: "ChevronRight", context: "Read more" },
        ],
      },
    ],
  },

  /* ── Company ── */
  {
    page: "Company",
    href: "/company",
    category: "Company",
    sections: [
      {
        section: "About",
        icons: [
          { icon: Building2, label: "Building2", context: "Company overview" },
          { icon: Users, label: "Users", context: "Team" },
          { icon: Globe, label: "Globe", context: "Global presence" },
        ],
      },
    ],
  },
  {
    page: "Careers",
    href: "/careers",
    category: "Company",
    sections: [
      {
        section: "Careers",
        icons: [
          { icon: Users, label: "Users", context: "Open positions" },
          { icon: ArrowRight, label: "ArrowRight", context: "Apply CTA" },
        ],
      },
    ],
  },
  {
    page: "Contact",
    href: "/contact",
    category: "Company",
    sections: [
      {
        section: "Contact",
        icons: [
          { icon: Headset, label: "Headset", context: "Support contact" },
          { icon: Globe, label: "Globe", context: "Office locations" },
        ],
      },
    ],
  },
  {
    page: "Support",
    href: "/support",
    category: "Company",
    sections: [
      {
        section: "Support",
        icons: [
          { icon: Headset, label: "Headset", context: "Customer support" },
          { icon: FileText, label: "FileText", context: "Knowledge base" },
        ],
      },
    ],
  },

  /* ── Other ── */
  {
    page: "Schedule Demo",
    href: "/schedule-demo",
    category: "Other",
    sections: [
      {
        section: "Demo Form",
        icons: [
          { icon: Monitor, label: "Monitor", context: "Demo scheduling" },
          { icon: ArrowRight, label: "ArrowRight", context: "Submit CTA" },
        ],
      },
    ],
  },
  {
    page: "Free Trial",
    href: "/free-trial",
    category: "Other",
    sections: [
      {
        section: "Trial Form",
        icons: [
          { icon: Zap, label: "Zap", context: "Start trial" },
          { icon: ArrowRight, label: "ArrowRight", context: "Submit CTA" },
        ],
      },
    ],
  },
  {
    page: "Getting Started",
    href: "/getting-started",
    category: "Other",
    sections: [
      {
        section: "Onboarding",
        icons: [
          { icon: ArrowRight, label: "ArrowRight", context: "Step navigation" },
          { icon: Check, label: "Check", context: "Step completion" },
        ],
      },
    ],
  },
];

const CATEGORIES = ["Products", "Solutions", "Resources", "Company", "Other"] as const;

/* ── Page Component ── */
export default function IconLibraryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [expandedPage, setExpandedPage] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = pages.filter((p) => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      p.page.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.sections.some(
        (s) =>
          s.section.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.icons.some(
            (ic) =>
              ic.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
              ic.context.toLowerCase().includes(searchQuery.toLowerCase())
          )
      );
    return matchesCategory && matchesSearch;
  });

  const totalIcons = pages.reduce(
    (sum, p) => sum + p.sections.reduce((s2, sec) => s2 + sec.icons.length, 0),
    0
  );

  const uniqueIcons = new Set(
    pages.flatMap((p) => p.sections.flatMap((s) => s.icons.map((ic) => ic.label)))
  );

  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />

      <section className="relative z-10 pt-32 pb-24">
        <div className="mx-auto w-full max-w-7xl px-6">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center mb-10">
            <p className="text-overline text-primary">
              Design System
            </p>
            <h1 className="mt-3 text-display-md">
              Icon Library
            </h1>
            <p className="mt-4 text-body-md text-muted-foreground">
              All icons used across the Motadata website — organized by page and section.
            </p>
          </div>

          {/* Stats bar */}
          <div className="flex items-center justify-center gap-6 mb-10">
            <div className="rounded-lg border border-border/60 bg-white px-4 py-2 text-center">
              <span className="text-heading-sm text-foreground">{pages.length}</span>
              <span className="ml-1.5 text-caption text-muted-foreground">Pages</span>
            </div>
            <div className="rounded-lg border border-border/60 bg-white px-4 py-2 text-center">
              <span className="text-heading-sm text-foreground">{uniqueIcons.size}</span>
              <span className="ml-1.5 text-caption text-muted-foreground">Unique Icons</span>
            </div>
            <div className="rounded-lg border border-border/60 bg-white px-4 py-2 text-center">
              <span className="text-heading-sm text-foreground">{totalIcons}</span>
              <span className="ml-1.5 text-caption text-muted-foreground">Total Usages</span>
            </div>
          </div>

          {/* Search + Category filters */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search pages, sections, or icons..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-border/60 bg-white py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40"
              />
            </div>
            <div className="flex items-center gap-1.5 rounded-lg border border-border/60 bg-white p-1">
              {["All", ...CATEGORIES].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-md px-3 py-1.5 text-caption transition-all ${
                    activeCategory === cat
                      ? "bg-foreground text-white shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Page cards — single column */}
          <div className="space-y-3">
            {filtered.map((pageEntry) => {
              const isExpanded = expandedPage === pageEntry.page;
              const iconCount = pageEntry.sections.reduce((s, sec) => s + sec.icons.length, 0);

              return (
                <div
                  key={pageEntry.page}
                  className="rounded-xl border border-border/60 bg-white overflow-hidden transition-shadow hover:shadow-sm"
                >
                  {/* Page header row */}
                  <button
                    onClick={() => setExpandedPage(isExpanded ? null : pageEntry.page)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left transition-colors hover:bg-neutral-50"
                  >
                    <div className="flex items-center gap-4">
                      {/* First icon as page icon */}
                      {(() => {
                        const FirstIcon = pageEntry.sections[0]?.icons[0]?.icon || FileText;
                        return (
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground/5">
                            <FirstIcon className="h-5 w-5 text-foreground/50" />
                          </div>
                        );
                      })()}
                      <div>
                        <h3 className="text-label-md text-foreground">
                          {pageEntry.page}
                        </h3>
                        <p className="text-caption text-muted-foreground">
                          {pageEntry.sections.length} sections &middot; {iconCount} icons
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-foreground/5 px-2.5 py-1 text-[10px] font-medium text-muted-foreground">
                        {pageEntry.category}
                      </span>
                      <a
                        href={pageEntry.href}
                        onClick={(e) => e.stopPropagation()}
                        className="rounded-md border border-border/40 px-3 py-1.5 text-[11px] font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                      >
                        Open Page
                      </a>
                      <ChevronDown
                        className={`h-4 w-4 text-muted-foreground transition-transform ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </button>

                  {/* Expanded sections */}
                  {isExpanded && (
                    <div className="border-t border-border/40 bg-neutral-50/50">
                      {pageEntry.sections.map((sec) => (
                        <div key={sec.section} className="border-b border-border/20 last:border-0 px-6 py-4">
                          <h4 className="text-overline text-muted-foreground/60 mb-3">
                            {sec.section}
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                            {sec.icons.map((ic, idx) => {
                              const Icon = ic.icon;
                              return (
                                <div
                                  key={`${ic.label}-${idx}`}
                                  className="group flex items-center gap-3 rounded-lg border border-border/30 bg-white p-3 transition-all hover:border-primary/30 hover:shadow-sm"
                                >
                                  <div className="flex h-9 w-9 items-center justify-center rounded-md bg-foreground/5 transition-colors group-hover:bg-primary/10">
                                    <Icon className="h-[18px] w-[18px] text-foreground/60 transition-colors group-hover:text-primary" />
                                  </div>
                                  <div className="min-w-0 flex-1">
                                    <span className="text-label-sm text-foreground block truncate">
                                      {ic.label}
                                    </span>
                                    <span className="text-[11px] text-muted-foreground block truncate">
                                      {ic.context}
                                    </span>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-muted-foreground">No pages match your search.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
