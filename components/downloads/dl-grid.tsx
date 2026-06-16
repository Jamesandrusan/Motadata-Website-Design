"use client";

import { useState, useRef, useEffect } from "react";
import {
  Download, Search, ChevronDown, Box, Container, Cloud,
  Smartphone, Plug, Mail, BookOpen, GraduationCap, Terminal, Server,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface DownloadItem {
  icon: LucideIcon;
  name: string;
  description: string;
  version: string;
  size: string;
  tag: string;
  downloads: string;
  category: string;
}

const allDownloads: DownloadItem[] = [
  {
    icon: Box,
    name: "Kubernetes Operator",
    description: "Native Kubernetes monitoring with pod-level insights",
    version: "v4.2.1",
    size: "35 MB",
    tag: "Kubernetes",
    downloads: "50K downloads",
    category: "Agents",
  },
  {
    icon: Container,
    name: "Docker Container Agent",
    description: "Container-optimized monitoring for Docker environments",
    version: "v4.2.1",
    size: "31 MB",
    tag: "Docker",
    downloads: "45K downloads",
    category: "Agents",
  },
  {
    icon: Terminal,
    name: "CLI Tools",
    description: "Command-line tools for Motadata platform management",
    version: "v4.2.1",
    size: "12 MB",
    tag: "Best-in-class",
    downloads: "30K downloads",
    category: "Tools",
  },
  {
    icon: Cloud,
    name: "AWS CloudWatch Collector",
    description: "Collect metrics and logs from AWS services",
    version: "v3.1.5",
    size: "29 MB",
    tag: "Cloud",
    downloads: "42K downloads",
    category: "Collectors",
  },
  {
    icon: Server,
    name: "Azure Monitor Collector",
    description: "Unified monitoring for Azure infrastructure and applications",
    version: "v3.1.5",
    size: "30 MB",
    tag: "Cloud",
    downloads: "38K downloads",
    category: "Collectors",
  },
  {
    icon: Smartphone,
    name: "Mobile App Monitoring SDK",
    description: "Real-time performance monitoring for iOS and Android",
    version: "v2.8.0",
    size: "18 MB",
    tag: "APM",
    downloads: "35K downloads",
    category: "Tools",
  },
  {
    icon: Plug,
    name: "Slack Integration Plugin",
    description: "Real-time alerts and notifications to Slack channels",
    version: "v1.6.2",
    size: "8 MB",
    tag: "Integrations",
    downloads: "28K downloads",
    category: "Integrations",
  },
  {
    icon: Mail,
    name: "Email Gateway Plugin",
    description: "Intelligent email notification system with rich formatting",
    version: "v2.3.1",
    size: "12 MB",
    tag: "Integrations",
    downloads: "32K downloads",
    category: "Integrations",
  },
  {
    icon: BookOpen,
    name: "API Documentation Package",
    description: "Complete API reference with examples and SDKs",
    version: "v4.0",
    size: "45 MB",
    tag: "Documentation",
    downloads: "22K downloads",
    category: "Documentation",
  },
  {
    icon: GraduationCap,
    name: "Training Materials Bundle",
    description: "Comprehensive training guides and video tutorials",
    version: "v2024.1",
    size: "128 MB",
    tag: "Documentation",
    downloads: "18K downloads",
    category: "Documentation",
  },
];

const tabs = ["All Downloads", "Agents", "Collectors", "Integrations", "Tools", "Documentation"];
const PRIMARY_TAB_COUNT = 4;

export function DlGrid() {
  const [activeTab, setActiveTab] = useState("All Downloads");
  const [query, setQuery] = useState("");
  const [moreOpen, setMoreOpen] = useState(false);
  const [isStuck, setIsStuck] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const primaryTabs = tabs.slice(0, PRIMARY_TAB_COUNT);
  const moreTabs = tabs.slice(PRIMARY_TAB_COUNT);
  const activeIsMore = moreTabs.some((t) => t === activeTab);

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

  const filtered = allDownloads.filter((item) => {
    const matchesTab = activeTab === "All Downloads" || item.category === activeTab;
    const matchesSearch =
      query === "" ||
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <>
      <div ref={sentinelRef} className="h-0" />
      {/* Sticky filter bar */}
      <div className={`sticky top-14 z-20 py-4 transition-all duration-200 ${isStuck ? "border-b border-border bg-background/80 backdrop-blur-md" : ""}`}>
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="flex flex-wrap items-center gap-2">

          {/* Category pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            {primaryTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`${pillBase} ${activeTab === tab ? pillActive : pillIdle}`}
              >
                {tab}
              </button>
            ))}

            {moreTabs.length > 0 && (
              <div className="relative" ref={moreRef}>
                <button
                  onClick={() => setMoreOpen((o) => !o)}
                  className={`flex items-center gap-1 ${pillBase} ${
                    activeIsMore ? pillActive : pillIdle
                  }`}
                >
                  {activeIsMore ? activeTab : "More Categories"}
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
                      {moreTabs.map((tab) => (
                        <button
                          key={tab}
                          onClick={() => {
                            setActiveTab(tab);
                            setMoreOpen(false);
                          }}
                          className={`flex w-full items-center px-4 py-2.5 text-left text-[13px] transition-colors hover:bg-muted/60 ${
                            activeTab === tab
                              ? "font-semibold text-primary"
                              : "text-foreground"
                          }`}
                        >
                          {tab}
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
              placeholder="Search downloads..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="h-[34px] w-[195px] rounded-lg border border-border/60 bg-background pl-9 pr-4 text-[12.5px] text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-ring/30 lg:w-[215px]"
            />
          </div>
          </div>
        </div>
      </div>

    <section className="relative z-10 pt-10 pb-16">
      <div className="mx-auto w-full max-w-7xl px-6">
        {/* Results count */}
        <p className="mb-6 text-body-xs text-muted-foreground">
          {filtered.length} result{filtered.length !== 1 ? "s" : ""} found
        </p>

        {/* Card Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                className="group/card flex flex-col rounded-2xl border border-border bg-card overflow-hidden transition-colors hover:border-primary/40"
              >
                <div className="flex flex-1 flex-col p-8">
                  {/* Icon */}
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover/card:bg-primary/20">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>

                  {/* Category */}
                  <span className="mb-2 text-caption text-primary">{item.category}</span>

                  {/* Title */}
                  <h3 className="text-heading-sm leading-snug">{item.name}</h3>

                  {/* Description */}
                  <p className="mt-2 flex-1 text-body-xs text-muted-foreground">
                    {item.description}
                  </p>

                  {/* Meta */}
                  <div className="mt-4 flex flex-wrap items-center gap-2 text-caption text-muted-foreground">
                    <span>{item.version}</span>
                    <span>•</span>
                    <span>{item.size}</span>
                    <span>•</span>
                    <span>{item.downloads}</span>
                  </div>
                </div>

                {/* CTA */}
                <a
                  href="#"
                  className="flex w-full items-center justify-between px-6 border-t border-primary/20 py-3 text-label-md text-primary transition-opacity duration-200 opacity-0 group-hover/card:opacity-100"
                >
                  Download
                  <Download className="h-3.5 w-3.5" />
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
    </>
  );
}
