"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Settings2, Network, ClipboardList } from "lucide-react";

const categories = [
  {
    id: "aiops",
    icon: Brain,
    title: "AIOps",
    description:
      "Motadata AIOps is an all-in-one platform that combines the power of Artificial Intelligence and Machine Learning to provide deep insights into your IT infrastructure. It enables real-time monitoring, analysis, and proactive management of diverse IT components, including networks, servers, applications, logs, flows, and more.",
    docs: [
      { title: "Motadata AIOps User Guide", description: "Explore the Motadata AIOps User Guide, your gateway to harnessing the full potential of AI-driven IT operations.", href: "#" },
      { title: "Deployment & Installation Guide", description: "Explore the Deployment & Installation Guide, your comprehensive resource for setting up AIOps.", href: "#" },
      { title: "Release Notes", description: "Motadata release notes give insight about the features, enhancements and bug fixes of latest Motadata release.", href: "#" },
      { title: "AIOps Upgrade Guide", description: "Explore comprehensive documentation for the upgrade process including the installation links and latest upgrade patches.", href: "#" },
      { title: "API Documentation", description: "Motadata API Docs provide detailed information on API endpoints, methods, authentication, and protocols.", href: "#" },
      { title: "FAQs", description: "Frequently Asked Questions", href: "#" },
    ],
  },
  {
    id: "serviceops",
    icon: Settings2,
    title: "ServiceOps",
    description:
      "ServiceOps organizes information, automates support workflow, eliminates manual/back-end complexities and encourages self-service for maximum productivity and superior user experience.",
    docs: [
      { title: "Release Notes", description: "Motadata release notes give insight about the features, enhancements and bug fixes of latest Motadata release.", href: "#" },
      { title: "Getting Started", description: "Start exploring ServiceOps—understand its capabilities, architecture, user roles, and how to get started.", href: "#" },
      { title: "Setup and Operations", description: "The guide tells about requirements, set-up, and configuration steps for fresh Motadata installation.", href: "#" },
      { title: "Core Concepts", description: "Explore the core ServiceOps modules for managing requests, assets, changes, projects, and more.", href: "#" },
      { title: "Technician User Guide", description: "The guide helps you understand all the features for best usage of ServiceOps.", href: "#" },
      { title: "Support User Guide", description: "Learn how to create and manage your IT requests in ServiceOps.", href: "#" },
      { title: "Mobile App User Guide", description: "The guide helps you understand the features in the Mobile App.", href: "#" },
      { title: "Integration Docs", description: "Integrate ServiceOps with third party systems", href: "#" },
      { title: "FAQs", description: "Get instant answers to frequently asked questions.", href: "#" },
      { title: "How-To Articles", description: "Explore detailed articles to complete tasks quickly and efficiently.", href: "#" },
      { title: "Troubleshooting Guides", description: "Get step-by-step solutions to quickly resolve common issues.", href: "#" },
    ],
  },
  {
    id: "nms",
    icon: Network,
    title: "Network Monitoring System",
    description:
      "The unified view enables IT admins with a comprehensive picture of the overall IT health and also gives root-cause analysis, enabling them to resolve network issues before they affect business processes.",
    docs: [
      { title: "Motadata Release Notes", description: "Motadata release notes give insight about the features, enhancements and bug fixes of latest Motadata release.", href: "#" },
      { title: "Installation and Getting Started", description: "The guide tells about requirements, set-up and configuration steps for fresh Motadata installation.", href: "#" },
      { title: "Upgrade Guide", description: "The guide helps you upgrading your existing Motadata version to latest Motadata server.", href: "#" },
      { title: "Motadata User Guide", description: "This guide helps you understand the significance of all the things available on Motadata GUI.", href: "#" },
      { title: "Knowledge Base (FAQ)", description: "The collection of FAQs, How to Docs that give answers to most of your questions.", href: "#" },
      { title: "Configuration Docs", description: "A step by step procedure to configure features in your environment.", href: "#" },
      { title: "Plugin Details", description: "Technical Details of the NMS Plugins", href: "#" },
      { title: "Mobile App REST API", description: "API Details of the Mobile App.", href: "#" },
      { title: "IPAM Documents", description: "This helps you to view the IPAM user guide and release notes.", href: "#" },
    ],
  },
  {
    id: "itsm",
    icon: ClipboardList,
    title: "IT Service Management",
    description:
      "ITSM Tool organizes information, automates support workflow, eliminates manual/back-end complexities and encourages self-service for maximum productivity and superior user experience.",
    docs: [
      { title: "ITSM Release Notes", description: "ITSM release notes give insight about the features, enhancements and bug fixes of latest ITSM release.", href: "#" },
      { title: "Install and Upgrade ITSM", description: "The guide tells about requirements, set-up and configuration steps for fresh ITSM installation.", href: "#" },
      { title: "Integration Guide", description: "The guide helps you upgrading your existing ITSM version to latest ITSM server.", href: "#" },
      { title: "ITSM User Guide", description: "The guide helps you in installing and using the Motadata ITSM tool.", href: "#" },
      { title: "Knowledge Base (FAQ)", description: "The collection of FAQs, How to Docs that give answers to most of your questions.", href: "#" },
    ],
  },
];

export function DocTabs() {
  const [activeId, setActiveId] = useState(categories[0].id);

  // Scroll-spy: update active tab as sections enter viewport
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    categories.forEach((cat) => {
      const el = document.getElementById(`doc-section-${cat.id}`);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(cat.id); },
        { rootMargin: "-20% 0px -55% 0px" },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(`doc-section-${id}`);
    if (!el) return;
    // 56px navbar (h-14) + 60px tab bar (py-5) ≈ 116px
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 116, behavior: "smooth" });
  };

  return (
    <section className="relative z-10 pb-24">
      <div className="mx-auto w-full max-w-7xl px-6">

        {/*
          Single wrapper with overflow:clip (NOT overflow:hidden).
          overflow:clip clips corners/hover without creating a scroll container,
          so position:sticky on the tab bar still works through it.
        */}
        <div className="rounded-2xl border border-border [overflow:clip]">

          {/* ── Sticky tab bar ── */}
          <div className="sticky top-14 z-20 border-b border-border bg-card">
            <div className="flex overflow-x-auto">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = cat.id === activeId;
                return (
                  <button
                    key={cat.id}
                    onClick={() => scrollTo(cat.id)}
                    className={`group relative flex flex-shrink-0 items-center gap-2 px-6 py-5 text-label-md transition-colors ${
                      isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Icon className={`h-4 w-4 transition-colors ${isActive ? "text-primary" : "text-foreground/40 group-hover:text-foreground/60"}`} />
                    {cat.title}
                    {isActive && (
                      <motion.div
                        layoutId="tab-indicator"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── Scrollable content ── */}
          <div className="bg-card">
            {categories.map((cat, ci) => (
              <div key={cat.id}>

                {/* Section: left info + right cards */}
                <div
                  id={`doc-section-${cat.id}`}
                  className={`flex flex-col lg:grid lg:grid-cols-2 lg:divide-x lg:divide-border ${ci > 0 ? "border-t border-border" : ""}`}
                >
                  {/* Left: icon + title + description */}
                  <div className="flex flex-col justify-center gap-4 border-b border-border px-8 py-10 lg:sticky lg:top-[116px] lg:self-start lg:border-b-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground/5">
                      <cat.icon className="h-5 w-5 text-foreground/50" />
                    </div>
                    <h3 className="text-heading-md">{cat.title}</h3>
                    <p className="text-body-xs text-muted-foreground">{cat.description}</p>
                  </div>

                  {/* Right: arrow cards */}
                  <div className="min-w-0">
                    {cat.docs.map((doc, i) => (
                      <a
                        key={doc.title}
                        href={doc.href}
                        className={`group flex items-center gap-5 px-8 py-5 transition-colors hover:bg-muted/40 ${i > 0 ? "border-t border-border" : ""}`}
                      >
                        <div className="min-w-0 flex-1">
                          <h4 className="text-[15px] font-semibold leading-snug">{doc.title}</h4>
                          <p className="mt-1 text-body-xs text-muted-foreground">{doc.description}</p>
                        </div>
                        <ArrowRight className="h-4 w-4 flex-shrink-0 text-muted-foreground/30 transition-all group-hover:translate-x-0.5 group-hover:text-primary" />
                      </a>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
