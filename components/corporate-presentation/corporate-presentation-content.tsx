"use client";

import { useState, useRef, useCallback } from "react";
import { renderV2Slide, generateV2PPTX, type V2SlideData } from "./v2-slides";

/* ═══════════════════════════════════════════════════════════════
   THEME CONSTANTS
   ═══════════════════════════════════════════════════════════════ */
const C = {
  accent: "#F17463",
  accentLight: "#FEF1EF",
  black: "#000000",
  dark: "#111111",
  text: "#1a1a1a",
  muted: "#64748b",
  light: "#f8fafc",
  border: "#e2e8f0",
  white: "#ffffff",
  logoDark: "https://www.motadata.com/wp-content/uploads/2022/07/motadata-logo.png",
};

/* ═══════════════════════════════════════════════════════════════
   SLIDE DATA (used by both renderer and PPTX/PDF generators)
   ═══════════════════════════════════════════════════════════════ */
interface SlideData {
  type: "cover" | "agenda" | "section" | "text" | "stats" | "grid" | "pills" | "twocol" | "badges" | "list" | "timeline" | "bigtitle" | "visionmission" | "values" | "steps" | "platform" | "takeaways";
  title?: string;
  subtitle?: string;
  body?: string;
  items?: { n?: string; t: string; d?: string }[];
  stats?: { value: string; label: string }[];
  pills?: string[];
  left?: { heading: string; items: string[] };
  right?: { heading: string; items: string[] };
  columns?: { t: string; sub?: string; d: string }[];
  milestones?: { year: string; label: string }[];
  steps?: { n: string; t: string; d: string }[];
  values?: string[];
  bigNumbers?: { value: string; label: string }[];
}

const SLIDE_DATA: SlideData[] = [
  // 1: Cover
  { type: "cover", title: "Corporate Presentation", subtitle: "UNIFIED OBSERVABILITY & ITSM PLATFORM" },
  // 2: Agenda
  {
    type: "agenda",
    title: "Agenda",
    items: [
      { n: "01", t: "About Motadata", d: "Who we are, what we do" },
      { n: "02", t: "Company Overview", d: "To Simplify IT Chaos" },
      { n: "03", t: "Vision, Mission & Values", d: "Our purpose & principles" },
      { n: "04", t: "16-Year Journey", d: "Evolution & key milestones" },
      { n: "05", t: "The IT Challenge", d: "Modern complexity & chaos" },
      { n: "06", t: "Unified Platform", d: "Unified ObserveOps and ServiceOps" },
      { n: "07", t: "AI-Driven Clarity", d: "Less noise, more signal" },
      { n: "08", t: "Customer Success", d: "Enterprise proof points" },
      { n: "09", t: "Recognition", d: "Industry awards & certifications" },
      { n: "10", t: "The Future", d: "Autonomous IT operations" },
    ],
  },
  // 3: Section - About
  { type: "section", title: "About Motadata" },
  // 4: Text - About detail
  {
    type: "text",
    title: "About Motadata",
    body: "Motadata powers modern IT with an AI-native unified observability and ITSM platform.\n\nMotadata, a subsidiary of Mindarray Systems Limited, delivers enterprise-grade IT solutions that unify monitoring, analytics, and service management into a single intelligent platform.",
  },
  // 5: Section - Company Overview
  { type: "section", title: "Company Overview" },
  // 6: Stats
  {
    type: "stats",
    title: "By the Numbers",
    stats: [
      { value: "5,000+", label: "Customers Globally" },
      { value: "25+", label: "Countries Worldwide" },
      { value: "350+", label: "Certified Partners" },
      { value: "16 Yrs", label: "Of Innovation" },
    ],
    body: "Industries Served: BFSI, Government-PSUs, Pharma, Manufacturing, Education, IT-ITeS",
  },
  // 7: Section - Trusted
  { type: "section", title: "Trusted by Enterprises Worldwide" },
  // 8: Industries pills
  {
    type: "pills",
    title: "Industries We Serve",
    pills: ["Banking, Financial Services & Insurance", "Information Technology Enabled Services (ITeS)", "Manufacturing", "Oil & Gas", "Healthcare & Education"],
  },
  // 9: Section
  { type: "section", title: "Company Overview" },
  // 10: Section
  { type: "section", title: "Verticals That We Serve" },
  // 11: Two-col verticals
  {
    type: "twocol",
    title: "Verticals",
    left: { heading: "Government & Public Sector", items: ["Ministries & Central Govt", "State-wide WAN / SWAN Projects", "Smart Cities", "Safe City Surveillance Projects", "Integrated Transportation Management"] },
    right: { heading: "CSP & Service Providers", items: ["Communications & Digital Service Provider (CSP & DSP)", "Managed Service Provider", "Internet Service Provider"] },
  },
  // 12: Section
  { type: "section", title: "Recognition & Certificates" },
  // 13: Badges
  {
    type: "badges",
    title: "Recognitions & Certificates",
    pills: ["Gartner Recognized", "IDC MarketScape", "PeopleCert Verified", "G2 High Performer", "GigaOm Radar", "ISO 27001"],
  },
  // 14: Section
  { type: "section", title: "Compliance & Certificates" },
  // 15: Compliance
  {
    type: "badges",
    title: "Compliance & Certificates",
    pills: ["SOC 1 / 2 / 3 Type 1 & Type 2", "POPIA", "ITIC", "CIS", "ISO 27001", "GDPR"],
  },
  // 16: Section
  { type: "section", title: "Why Motadata" },
  // 17: Why Motadata items
  {
    type: "grid",
    title: "Why Motadata",
    items: [
      { t: "Unified Platform", d: "Single integrated solution for Observability & ITSM" },
      { t: "Proven Expertise", d: "Extensive experience with large scale infra" },
      { t: "Comprehensive Compliance", d: "CIS, ITIL, ISO, GDPR" },
      { t: "24x7 OEM Support", d: "Dedicated support and TAC" },
      { t: "Global & Local Support", d: "350+ partners and local expertise" },
    ],
  },
  // 18: Section
  { type: "section", title: "Why Choose Motadata" },
  // 19: Big title
  { type: "bigtitle", title: "UNIFIED OBSERVABILITY &\nSERVICEOPS PLATFORM" },
  // 20: Section
  { type: "section", title: "Key Differentiator" },
  // 21: List
  {
    type: "list",
    title: "Key Differentiators",
    pills: ["Unified IT Operations Platform", "Large deployment expertise", "Recognised by Gartner, IDC, PeopleCert", "24x7 OEM support", "80% R&D workforce", "350+ partners", "Regulatory compliance"],
  },
  // 22: Section
  { type: "section", title: "Vision, Mission & Values" },
  // 23: Vision/Mission
  {
    type: "visionmission",
    title: "Vision & Mission",
    columns: [
      { t: "Vision", d: "Global leader in intelligent IT operations" },
      { t: "Mission", d: "Unified IT Ops platform for hybrid environments" },
    ],
  },
  // 24: Section
  { type: "section", title: "Our Team & Culture" },
  // 25: Values
  {
    type: "values",
    title: "Our Team & Culture",
    bigNumbers: [{ value: "275+", label: "Employees" }, { value: "80%", label: "Engineering" }],
    values: ["Innovation", "Ownership", "Collaboration", "Customer Obsession", "Learning Mindset"],
  },
  // 26: Section
  { type: "section", title: "Motadata's Journey of Innovation" },
  // 27: Timeline
  {
    type: "timeline",
    title: "16-Year Journey",
    milestones: [
      { year: "2010", label: "Inception" },
      { year: "2014", label: "Network Monitoring" },
      { year: "2016", label: "Log Analytics" },
      { year: "2017", label: "Flow Analytics" },
      { year: "2022", label: "ServiceOps" },
      { year: "2025", label: "Unified Observability" },
    ],
  },
  // 28: Section
  { type: "section", title: "The IT Challenge" },
  // 29: Big stats
  {
    type: "stats",
    title: "The IT Challenge Today",
    stats: [
      { value: "80%", label: "Visibility Gaps" },
      { value: "98%", label: "Complexity Growth" },
      { value: "78%", label: "Cloud Adoption" },
      { value: "84%", label: "Reactive Mode" },
    ],
  },
  // 30: Section
  { type: "section", title: "Motadata's Unified Platform" },
  // 31: Platform
  { type: "platform", title: "Unified Platform" },
  // 32: Section
  { type: "section", title: "ObserveOps — Unified Observability" },
  // 33: 3-col
  {
    type: "grid",
    title: "360° Visibility",
    subtitle: "Three pillars of unified observability",
    items: [
      { t: "Metrics", d: "Infrastructure & application performance metrics across hybrid environments" },
      { t: "Logs", d: "Centralized log collection, parsing, and intelligent analysis" },
      { t: "Traces", d: "End-to-end distributed tracing for microservices" },
    ],
  },
  // 34: Complete observability
  {
    type: "badges",
    title: "One Platform, Complete Observability",
    pills: ["Network Monitoring", "Log Analytics", "APM", "Cloud Monitoring", "Real User Monitoring", "NCCM"],
  },
  // 35: Log pipeline steps
  {
    type: "steps",
    title: "Intelligent Log Pipeline",
    steps: [
      { n: "1", t: "Collect", d: "Ingest logs from any source at scale" },
      { n: "2", t: "Parse", d: "AI-powered log parsing & enrichment" },
      { n: "3", t: "Analyze", d: "Pattern detection & anomaly identification" },
      { n: "4", t: "Act", d: "Automated alerts & intelligent routing" },
    ],
  },
  // 36: AI clarity stats
  {
    type: "stats",
    title: "AI-Driven Clarity",
    stats: [
      { value: "70%", label: "Noise Reduction" },
      { value: "5x", label: "Faster MTTR" },
      { value: "99.9%", label: "Alert Accuracy" },
      { value: "60%", label: "Cost Savings" },
    ],
  },
  // 37: ServiceOps
  {
    type: "badges",
    title: "ServiceOps — Enterprise ITSM",
    pills: ["Incident Management", "Problem Management", "Change Management", "IT Asset Management", "CMDB", "Knowledge Base"],
  },
  // 38: Workflow & EOSL
  {
    type: "twocol",
    title: "Workflow & EOSL",
    left: { heading: "Workflow Automation", items: ["No-code workflow builder", "Auto-routing & escalation", "SLA management", "Multi-channel ticketing"] },
    right: { heading: "EOSL Intelligence", items: ["End-of-life tracking", "Proactive replacement planning", "Vendor management", "Budget forecasting"] },
  },
  // 39: Section
  { type: "section", title: "Customer Success" },
  // 40: Who We Serve
  {
    type: "pills",
    title: "Who We Serve",
    pills: ["BFSI", "Government", "Telecom", "Manufacturing", "Education", "Healthcare", "IT-ITeS", "Oil & Gas"],
  },
  // 41: Future
  {
    type: "grid",
    title: "Future Vision",
    items: [
      { t: "Observe", d: "Full-stack visibility with AI-powered insights across your entire IT estate" },
      { t: "Serve", d: "Unified ITIL-aligned service management that scales with your organization" },
      { t: "Evolve", d: "Autonomous IT operations through predictive AI and intelligent automation" },
    ],
  },
  // 42: Takeaways
  {
    type: "takeaways",
    title: "KEY TAKEAWAYS",
    columns: [
      { t: "Observe", sub: "With Clarity", d: "One unified lens for full-stack visibility, faster insights, less noise, uninterrupted business." },
      { t: "Serve", sub: "With Confidence", d: "A unified ITIL-aligned service platform that empowers agents, delights employees, and scales effortlessly." },
      { t: "Evolve", sub: "With Intelligence", d: "AI that elevates IT — predicting failures, automating fixes, and transforming firefighting into foresight." },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   ICON HELPERS
   ═══════════════════════════════════════════════════════════════ */
const Icons = {
  check: (c = C.accent, s = 16) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>),
  building: (c = C.accent, s = 18) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" /><line x1="9" y1="6" x2="9" y2="6.01" /><line x1="15" y1="6" x2="15" y2="6.01" /><line x1="9" y1="10" x2="9" y2="10.01" /><line x1="15" y1="10" x2="15" y2="10.01" /><line x1="9" y1="14" x2="9" y2="14.01" /><line x1="15" y1="14" x2="15" y2="14.01" /><line x1="9" y1="18" x2="15" y2="18" /></svg>),
  globe: (c = C.accent, s = 18) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></svg>),
  shield: (c = C.accent, s = 18) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg>),
  layers: (c = C.accent, s = 18) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>),
  users: (c = C.accent, s = 18) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>),
  zap: (c = C.accent, s = 18) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>),
  target: (c = C.accent, s = 18) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" fill={c} /></svg>),
  eye: (c = C.accent, s = 18) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>),
  brain: (c = C.accent, s = 18) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a5 5 0 015 5c0 .8-.2 1.5-.5 2.2A5 5 0 0120 14a5 5 0 01-4 4.9V22h-8v-3.1A5 5 0 014 14a5 5 0 013.5-4.8A4.8 4.8 0 017 7a5 5 0 015-5z" /></svg>),
  headset: (c = C.accent, s = 18) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0118 0v6" /><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3v5zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3v5z" /></svg>),
  workflow: (c = C.accent, s = 18) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="6" height="6" rx="1" /><rect x="15" y="3" width="6" height="6" rx="1" /><rect x="9" y="15" width="6" height="6" rx="1" /><line x1="6" y1="9" x2="12" y2="15" /><line x1="18" y1="9" x2="12" y2="15" /></svg>),
  barChart: (c = C.accent, s = 18) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>),
  award: (c = C.accent, s = 18) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg>),
  heart: (c = C.accent, s = 18) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg>),
  server: (c = C.accent, s = 18) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" /><rect x="2" y="14" width="20" height="8" rx="2" /><circle cx="6" cy="6" r="1" fill={c} /><circle cx="6" cy="18" r="1" fill={c} /></svg>),
  download: (c = "currentColor", s = 16) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>),
  chevronLeft: (c = "currentColor", s = 20) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>),
  chevronRight: (c = "currentColor", s = 20) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>),
  fileText: (c = "currentColor", s = 16) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>),
  filePpt: (c = "currentColor", s = 16) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><rect x="8" y="12" width="8" height="6" rx="1" /></svg>),
};

/* ═══════════════════════════════════════════════════════════════
   PPTX GENERATOR — builds a real editable .pptx file
   ═══════════════════════════════════════════════════════════════ */
async function generatePPTX() {
  const PptxGenJS = (await import("pptxgenjs")).default;
  const pres = new PptxGenJS();

  pres.layout = "LAYOUT_WIDE";
  pres.author = "Motadata";
  pres.company = "Motadata - Mindarray Systems Ltd";
  pres.subject = "Corporate Presentation";
  pres.title = "Motadata Corporate Presentation";

  // Master slide definitions
  pres.defineSlideMaster({
    title: "MOTADATA_MASTER",
    background: { color: "FFFFFF" },
    objects: [
      { rect: { x: 0, y: "93%", w: "100%", h: "7%", fill: { color: "F8FAFC" } } },
      { line: { x: 0, y: "93%", w: "100%", h: 0, line: { color: "E2E8F0", width: 0.5 } } },
      { text: { text: "CONFIDENTIAL", options: { x: 11, y: "94%", w: 2, h: 0.3, fontSize: 7, color: "94A3B8", align: "right" } } },
      { text: { text: "Motadata", options: { x: 0.5, y: "94%", w: 2, h: 0.3, fontSize: 7, color: "94A3B8" } } },
    ],
  });

  const accentHex = "F17463";
  const darkHex = "111111";
  const mutedHex = "64748B";
  const lightBg = "F8FAFC";
  const borderHex = "E2E8F0";

  for (const data of SLIDE_DATA) {
    const slide = pres.addSlide({ masterName: "MOTADATA_MASTER" });

    switch (data.type) {
      case "cover": {
        slide.background = { color: "FFFFFF" };
        slide.addText("motadata", { x: 4.5, y: 1.5, w: 4, h: 0.5, fontSize: 20, color: mutedHex, align: "center", fontFace: "Inter" });
        slide.addText(data.title || "", { x: 1.5, y: 2.5, w: 10, h: 1.2, fontSize: 40, bold: true, color: darkHex, align: "center", fontFace: "Inter" });
        slide.addShape(pres.ShapeType.rect, { x: 5.7, y: 3.9, w: 1.8, h: 0.06, fill: { color: accentHex } });
        slide.addText(data.subtitle || "", { x: 2, y: 4.2, w: 9, h: 0.5, fontSize: 12, color: mutedHex, align: "center", fontFace: "Inter", charSpacing: 3 });
        break;
      }
      case "agenda": {
        slide.addText(data.title || "Agenda", { x: 0.8, y: 0.5, w: 5, h: 0.7, fontSize: 28, bold: true, color: darkHex, fontFace: "Inter" });
        const rows: any[][] = [];
        (data.items || []).forEach(item => {
          rows.push([
            { text: item.n || "", options: { fontSize: 16, bold: true, color: accentHex, fontFace: "Inter" } },
            { text: item.t, options: { fontSize: 13, bold: true, color: darkHex, fontFace: "Inter" } },
            { text: `— ${item.d || ""}`, options: { fontSize: 11, color: mutedHex, fontFace: "Inter" } },
          ]);
        });
        slide.addTable(rows, { x: 0.8, y: 1.4, w: 11.5, colW: [0.6, 3.5, 7.4], border: { type: "none" }, rowH: 0.42 });
        break;
      }
      case "section": {
        slide.addText(data.title || "", { x: 1, y: 2, w: 11, h: 1.5, fontSize: 36, bold: true, color: darkHex, align: "center", fontFace: "Inter" });
        slide.addShape(pres.ShapeType.rect, { x: 5.7, y: 3.7, w: 1.8, h: 0.06, fill: { color: accentHex } });
        break;
      }
      case "text": {
        slide.addText(data.title || "", { x: 0.8, y: 0.5, w: 5, h: 0.7, fontSize: 24, bold: true, color: darkHex, fontFace: "Inter" });
        const paragraphs = (data.body || "").split("\n\n");
        let yPos = 1.6;
        paragraphs.forEach(p => {
          slide.addText(p, { x: 0.8, y: yPos, w: 7.5, h: 0.8, fontSize: 14, color: mutedHex, fontFace: "Inter", lineSpacingMultiple: 1.4 });
          yPos += 1;
        });
        break;
      }
      case "stats": {
        slide.addText(data.title || "", { x: 0.8, y: 0.5, w: 8, h: 0.7, fontSize: 24, bold: true, color: darkHex, fontFace: "Inter" });
        const statsArr = data.stats || [];
        const colWidth = 2.5;
        const startX = (13.33 - statsArr.length * colWidth) / 2;
        statsArr.forEach((s, i) => {
          const cx = startX + i * colWidth;
          slide.addShape(pres.ShapeType.roundRect, { x: cx, y: 1.6, w: 2.2, h: 1.8, rectRadius: 0.1, fill: { color: "FFFFFF" }, line: { color: borderHex, width: 0.75 } });
          slide.addText(s.value, { x: cx, y: 1.7, w: 2.2, h: 0.9, fontSize: 32, bold: true, color: accentHex, align: "center", fontFace: "Inter" });
          slide.addText(s.label, { x: cx, y: 2.6, w: 2.2, h: 0.5, fontSize: 11, color: mutedHex, align: "center", fontFace: "Inter" });
        });
        if (data.body) {
          slide.addShape(pres.ShapeType.roundRect, { x: 0.8, y: 3.8, w: 11.7, h: 0.7, rectRadius: 0.08, fill: { color: lightBg }, line: { color: borderHex, width: 0.5 } });
          slide.addText(data.body, { x: 1, y: 3.85, w: 11.3, h: 0.6, fontSize: 11, color: darkHex, fontFace: "Inter" });
        }
        break;
      }
      case "pills": {
        slide.addText(data.title || "", { x: 0.8, y: 0.5, w: 8, h: 0.7, fontSize: 24, bold: true, color: darkHex, fontFace: "Inter" });
        (data.pills || []).forEach((p, i) => {
          const row = Math.floor(i / 3);
          const col = i % 3;
          slide.addShape(pres.ShapeType.roundRect, { x: 0.8 + col * 3.9, y: 1.6 + row * 0.7, w: 3.6, h: 0.5, rectRadius: 0.25, fill: { color: "FFFFFF" }, line: { color: borderHex, width: 0.75 } });
          slide.addText(p, { x: 0.8 + col * 3.9, y: 1.6 + row * 0.7, w: 3.6, h: 0.5, fontSize: 11, color: darkHex, align: "center", fontFace: "Inter" });
        });
        break;
      }
      case "twocol": {
        slide.addText(data.title || "", { x: 0.8, y: 0.3, w: 8, h: 0.6, fontSize: 20, bold: true, color: darkHex, fontFace: "Inter" });
        // Left
        slide.addText(data.left?.heading || "", { x: 0.8, y: 1.1, w: 5, h: 0.5, fontSize: 14, bold: true, color: darkHex, fontFace: "Inter" });
        (data.left?.items || []).forEach((item, i) => {
          slide.addText(`✓  ${item}`, { x: 0.8, y: 1.7 + i * 0.4, w: 5.5, h: 0.35, fontSize: 11, color: darkHex, fontFace: "Inter" });
        });
        // Right
        slide.addText(data.right?.heading || "", { x: 7, y: 1.1, w: 5, h: 0.5, fontSize: 14, bold: true, color: darkHex, fontFace: "Inter" });
        (data.right?.items || []).forEach((item, i) => {
          slide.addText(`✓  ${item}`, { x: 7, y: 1.7 + i * 0.4, w: 5.5, h: 0.35, fontSize: 11, color: darkHex, fontFace: "Inter" });
        });
        break;
      }
      case "badges": {
        slide.addText(data.title || "", { x: 0.8, y: 0.5, w: 8, h: 0.7, fontSize: 24, bold: true, color: darkHex, fontFace: "Inter" });
        (data.pills || []).forEach((p, i) => {
          const row = Math.floor(i / 3);
          const col = i % 3;
          slide.addShape(pres.ShapeType.roundRect, { x: 0.8 + col * 3.9, y: 1.6 + row * 0.8, w: 3.6, h: 0.6, rectRadius: 0.08, fill: { color: "FFFFFF" }, line: { color: borderHex, width: 0.75 } });
          slide.addText(p, { x: 0.8 + col * 3.9, y: 1.6 + row * 0.8, w: 3.6, h: 0.6, fontSize: 12, color: darkHex, align: "center", fontFace: "Inter", bold: true });
        });
        break;
      }
      case "grid": {
        slide.addText(data.title || "", { x: 0.8, y: 0.5, w: 8, h: 0.7, fontSize: 24, bold: true, color: darkHex, fontFace: "Inter" });
        if (data.subtitle) {
          slide.addText(data.subtitle, { x: 0.8, y: 1.1, w: 8, h: 0.4, fontSize: 12, color: mutedHex, fontFace: "Inter" });
        }
        const startY2 = data.subtitle ? 1.7 : 1.5;
        const gItems = data.items || [];
        const cols = Math.min(gItems.length, 3);
        const cw = 11 / cols;
        gItems.forEach((item, i) => {
          const row = Math.floor(i / cols);
          const col = i % cols;
          slide.addShape(pres.ShapeType.roundRect, { x: 0.8 + col * (cw + 0.15), y: startY2 + row * 1.6, w: cw, h: 1.4, rectRadius: 0.1, fill: { color: "FFFFFF" }, line: { color: borderHex, width: 0.75 } });
          slide.addText(item.t, { x: 0.8 + col * (cw + 0.15), y: startY2 + row * 1.6, w: cw, h: 0.6, fontSize: 15, bold: true, color: accentHex, align: "center", fontFace: "Inter", valign: "bottom" });
          if (item.d) {
            slide.addText(item.d, { x: 0.8 + col * (cw + 0.15) + 0.2, y: startY2 + row * 1.6 + 0.6, w: cw - 0.4, h: 0.7, fontSize: 10, color: mutedHex, align: "center", fontFace: "Inter", lineSpacingMultiple: 1.3 });
          }
        });
        break;
      }
      case "list": {
        slide.addText(data.title || "", { x: 0.8, y: 0.5, w: 8, h: 0.7, fontSize: 24, bold: true, color: darkHex, fontFace: "Inter" });
        (data.pills || []).forEach((item, i) => {
          slide.addShape(pres.ShapeType.roundRect, { x: 0.8, y: 1.5 + i * 0.55, w: 11.5, h: 0.45, rectRadius: 0.06, fill: { color: lightBg }, line: { color: borderHex, width: 0.5 } });
          slide.addText(`●  ${item}`, { x: 1.1, y: 1.5 + i * 0.55, w: 11, h: 0.45, fontSize: 12, color: darkHex, fontFace: "Inter" });
        });
        break;
      }
      case "bigtitle": {
        const lines = (data.title || "").split("\n");
        slide.addText(lines.map((l, i) => ({
          text: l,
          options: { fontSize: 28, bold: true, color: i === 1 ? accentHex : darkHex, align: "center" as const, fontFace: "Inter", breakType: i > 0 ? "break" as const : undefined },
        })), { x: 1, y: 2, w: 11, h: 2, align: "center", valign: "middle" });
        slide.addShape(pres.ShapeType.rect, { x: 5.7, y: 4.2, w: 1.8, h: 0.06, fill: { color: accentHex } });
        break;
      }
      case "visionmission": {
        slide.addText(data.title || "", { x: 0.8, y: 0.5, w: 8, h: 0.7, fontSize: 24, bold: true, color: darkHex, fontFace: "Inter" });
        (data.columns || []).forEach((col, i) => {
          const cx = 0.8 + i * 6.2;
          slide.addShape(pres.ShapeType.roundRect, { x: cx, y: 1.5, w: 5.8, h: 2.5, rectRadius: 0.1, fill: { color: "FFFFFF" }, line: { color: borderHex, width: 0.75 } });
          slide.addText(col.t.toUpperCase(), { x: cx + 0.4, y: 1.7, w: 5, h: 0.4, fontSize: 10, bold: true, color: accentHex, fontFace: "Inter", charSpacing: 3 });
          slide.addText(col.d, { x: cx + 0.4, y: 2.3, w: 5, h: 1, fontSize: 16, bold: true, color: darkHex, fontFace: "Inter", lineSpacingMultiple: 1.3 });
        });
        break;
      }
      case "values": {
        slide.addText(data.title || "", { x: 0.8, y: 0.3, w: 8, h: 0.6, fontSize: 20, bold: true, color: darkHex, fontFace: "Inter" });
        (data.bigNumbers || []).forEach((bn, i) => {
          slide.addShape(pres.ShapeType.roundRect, { x: 0.8 + i * 3, y: 1.1, w: 2.7, h: 1.2, rectRadius: 0.1, fill: { color: lightBg }, line: { color: borderHex, width: 0.5 } });
          slide.addText(bn.value, { x: 0.8 + i * 3, y: 1.1, w: 2.7, h: 0.7, fontSize: 28, bold: true, color: accentHex, align: "center", fontFace: "Inter" });
          slide.addText(bn.label, { x: 0.8 + i * 3, y: 1.8, w: 2.7, h: 0.4, fontSize: 10, color: mutedHex, align: "center", fontFace: "Inter" });
        });
        slide.addText("CORE VALUES", { x: 0.8, y: 2.6, w: 4, h: 0.4, fontSize: 11, bold: true, color: darkHex, fontFace: "Inter", charSpacing: 2 });
        const vals = data.values || [];
        const vw = 2.2;
        vals.forEach((v, i) => {
          slide.addShape(pres.ShapeType.roundRect, { x: 0.8 + i * (vw + 0.15), y: 3.1, w: vw, h: 0.8, rectRadius: 0.08, fill: { color: "FFFFFF" }, line: { color: borderHex, width: 0.75 } });
          slide.addText(v, { x: 0.8 + i * (vw + 0.15), y: 3.1, w: vw, h: 0.8, fontSize: 10, bold: true, color: darkHex, align: "center", fontFace: "Inter" });
        });
        break;
      }
      case "timeline": {
        slide.addText(data.title || "", { x: 0.8, y: 0.5, w: 8, h: 0.7, fontSize: 24, bold: true, color: darkHex, fontFace: "Inter" });
        const ms = data.milestones || [];
        const segW = 10 / ms.length;
        // Line
        slide.addShape(pres.ShapeType.line, { x: 1.5, y: 2.3, w: 10, h: 0, line: { color: borderHex, width: 1.5 } });
        ms.forEach((m, i) => {
          const cx = 1.5 + i * segW + segW / 2;
          // Dot
          slide.addShape(pres.ShapeType.ellipse, { x: cx - 0.12, y: 2.18, w: 0.24, h: 0.24, fill: { color: i === ms.length - 1 ? accentHex : "FFFFFF" }, line: { color: accentHex, width: 1.5 } });
          slide.addText(m.year, { x: cx - 0.7, y: 2.6, w: 1.4, h: 0.4, fontSize: 16, bold: true, color: accentHex, align: "center", fontFace: "Inter" });
          slide.addText(m.label, { x: cx - 0.7, y: 3, w: 1.4, h: 0.4, fontSize: 9, color: mutedHex, align: "center", fontFace: "Inter" });
        });
        break;
      }
      case "steps": {
        slide.addText(data.title || "", { x: 0.8, y: 0.5, w: 8, h: 0.7, fontSize: 24, bold: true, color: darkHex, fontFace: "Inter" });
        const stps = data.steps || [];
        const sw = 2.8;
        stps.forEach((s, i) => {
          const sx = 0.8 + i * (sw + 0.2);
          slide.addShape(pres.ShapeType.ellipse, { x: sx, y: 1.6, w: 0.45, h: 0.45, fill: { color: accentHex } });
          slide.addText(s.n, { x: sx, y: 1.6, w: 0.45, h: 0.45, fontSize: 12, bold: true, color: "FFFFFF", align: "center", fontFace: "Inter" });
          if (i < stps.length - 1) {
            slide.addShape(pres.ShapeType.line, { x: sx + 0.5, y: 1.83, w: sw - 0.35, h: 0, line: { color: borderHex, width: 1 } });
          }
          slide.addText(s.t, { x: sx, y: 2.2, w: sw, h: 0.4, fontSize: 13, bold: true, color: darkHex, fontFace: "Inter" });
          slide.addText(s.d, { x: sx, y: 2.6, w: sw, h: 0.5, fontSize: 10, color: mutedHex, fontFace: "Inter", lineSpacingMultiple: 1.2 });
        });
        break;
      }
      case "platform": {
        slide.addShape(pres.ShapeType.roundRect, { x: 2.5, y: 1.5, w: 3.5, h: 1.5, rectRadius: 0.1, fill: { color: "FEF1EF" }, line: { color: accentHex, width: 1.5 } });
        slide.addText("ObserveOps\nUnified Observability", { x: 2.5, y: 1.5, w: 3.5, h: 1.5, fontSize: 14, bold: true, color: accentHex, align: "center", fontFace: "Inter" });
        slide.addText("+", { x: 6.2, y: 1.8, w: 0.8, h: 0.8, fontSize: 20, color: mutedHex, align: "center" });
        slide.addShape(pres.ShapeType.roundRect, { x: 7.2, y: 1.5, w: 3.5, h: 1.5, rectRadius: 0.1, fill: { color: "FEF1EF" }, line: { color: accentHex, width: 1.5 } });
        slide.addText("ServiceOps\nEnterprise ITSM", { x: 7.2, y: 1.5, w: 3.5, h: 1.5, fontSize: 14, bold: true, color: accentHex, align: "center", fontFace: "Inter" });
        slide.addText("One unified platform combining full-stack observability\nwith intelligent IT service management", { x: 2, y: 3.5, w: 9, h: 0.8, fontSize: 12, color: mutedHex, align: "center", fontFace: "Inter" });
        break;
      }
      case "takeaways": {
        slide.addText(data.title || "", { x: 0.8, y: 0.5, w: 8, h: 0.7, fontSize: 24, bold: true, color: darkHex, fontFace: "Inter" });
        (data.columns || []).forEach((col, i) => {
          const cx = 0.8 + i * 4;
          const isAccent = i !== 1;
          slide.addShape(pres.ShapeType.roundRect, { x: cx, y: 1.5, w: 3.7, h: 3, rectRadius: 0.1, fill: { color: lightBg } });
          slide.addShape(pres.ShapeType.rect, { x: cx, y: 1.5, w: 3.7, h: 0.06, fill: { color: isAccent ? accentHex : darkHex } });
          slide.addText(col.t, { x: cx + 0.3, y: 1.7, w: 3.1, h: 0.5, fontSize: 20, bold: true, color: isAccent ? accentHex : darkHex, fontFace: "Inter" });
          slide.addText(col.sub || "", { x: cx + 0.3, y: 2.2, w: 3.1, h: 0.3, fontSize: 12, bold: true, color: darkHex, fontFace: "Inter" });
          slide.addText(col.d, { x: cx + 0.3, y: 2.7, w: 3.1, h: 1.5, fontSize: 10, color: mutedHex, fontFace: "Inter", lineSpacingMultiple: 1.4 });
        });
        break;
      }
    }
  }

  return pres.writeFile({ fileName: "Motadata_Corporate_Presentation.pptx" });
}

/* ═══════════════════════════════════════════════════════════════
   PDF GENERATOR — captures each slide as image and assembles
   ═══════════════════════════════════════════════════════════════ */
async function generatePDF(slidesContainerRef: React.RefObject<HTMLDivElement | null>) {
  const html2canvas = (await import("html2canvas")).default;
  const { jsPDF } = await import("jspdf");

  // Wide 16:9 format
  const pdf = new jsPDF({ orientation: "landscape", unit: "px", format: [960, 540] });

  const slideEls = slidesContainerRef.current?.querySelectorAll("[data-slide]");
  if (!slideEls || slideEls.length === 0) return;

  for (let i = 0; i < slideEls.length; i++) {
    const el = slideEls[i] as HTMLElement;
    const canvas = await html2canvas(el, {
      scale: 2,
      backgroundColor: "#ffffff",
      useCORS: true,
      logging: false,
    });
    const imgData = canvas.toDataURL("image/jpeg", 0.92);
    if (i > 0) pdf.addPage([960, 540], "landscape");
    pdf.addImage(imgData, "JPEG", 0, 0, 960, 540);
  }

  pdf.save("Motadata_Corporate_Presentation.pdf");
}

/* ═══════════════════════════════════════════════════════════════
   SLIDE VISUAL COMPONENTS (for on-screen rendering)
   ═══════════════════════════════════════════════════════════════ */
function SlideFrame({ children, bg = C.white, slideIdx }: { children: React.ReactNode; bg?: string; slideIdx: number }) {
  return (
    <div
      data-slide={slideIdx}
      style={{
        width: 960,
        height: 540,
        background: bg,
        overflow: "hidden",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        fontFamily: "'Inter', system-ui, sans-serif",
        flexShrink: 0,
      }}
    >
      {children}
    </div>
  );
}

function SlideFooterBar() {
  return (
    <div style={{ height: 36, background: C.light, borderTop: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 24px", flexShrink: 0 }}>
      <span style={{ fontSize: 9, color: C.muted, fontWeight: 500 }}>motadata</span>
      <span style={{ fontSize: 9, color: C.muted, letterSpacing: "0.05em" }}>CONFIDENTIAL</span>
    </div>
  );
}

function StatCardV({ value, label }: { value: string; label: string }) {
  return (
    <div style={{ textAlign: "center", padding: "20px 12px", border: `1px solid ${C.border}`, borderRadius: 10, background: C.white }}>
      <div style={{ fontSize: 32, fontWeight: 800, color: C.accent, letterSpacing: "-0.02em" }}>{value}</div>
      <div style={{ fontSize: 12, color: C.muted, marginTop: 6, lineHeight: 1.4 }}>{label}</div>
    </div>
  );
}

function PillV({ text }: { text: string }) {
  return (
    <span style={{ display: "inline-block", padding: "8px 18px", border: `1px solid ${C.border}`, borderRadius: 24, fontSize: 13, color: C.text, background: C.white, margin: 4 }}>{text}</span>
  );
}

function renderSlide(data: SlideData, idx: number): React.ReactNode {
  switch (data.type) {
    case "cover":
      return (
        <SlideFrame slideIdx={idx}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 60 }}>
            <span style={{ fontSize: 20, color: C.muted, marginBottom: 24, fontWeight: 500 }}>motadata</span>
            <h1 style={{ fontSize: 40, fontWeight: 800, color: C.dark, letterSpacing: "-0.03em", textAlign: "center", lineHeight: 1.2 }}>{data.title}</h1>
            <div style={{ width: 48, height: 3, background: C.accent, borderRadius: 2, marginTop: 20 }} />
            <p style={{ fontSize: 14, color: C.muted, marginTop: 16, letterSpacing: "0.05em" }}>{data.subtitle}</p>
          </div>
        </SlideFrame>
      );
    case "agenda":
      return (
        <SlideFrame slideIdx={idx}>
          <div style={{ flex: 1, padding: "48px 60px" }}>
            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.dark, marginBottom: 28 }}>{data.title}</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 40px" }}>
              {(data.items || []).map(i => (
                <div key={i.n} style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
                  <span style={{ fontSize: 18, fontWeight: 800, color: C.accent, minWidth: 28, fontVariantNumeric: "tabular-nums" }}>{i.n}</span>
                  <div>
                    <span style={{ fontSize: 14, fontWeight: 600, color: C.dark }}>{i.t}</span>
                    <span style={{ fontSize: 12, color: C.muted, marginLeft: 6 }}>— {i.d}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <SlideFooterBar />
        </SlideFrame>
      );
    case "section":
      return (
        <SlideFrame slideIdx={idx}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 60 }}>
            <h2 style={{ fontSize: 36, fontWeight: 700, color: C.dark, letterSpacing: "-0.02em", textAlign: "center" }}>{data.title}</h2>
            <div style={{ width: 48, height: 3, background: C.accent, borderRadius: 2, marginTop: 16 }} />
          </div>
          <SlideFooterBar />
        </SlideFrame>
      );
    case "text":
      return (
        <SlideFrame slideIdx={idx}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "48px 60px", maxWidth: "65%" }}>
            {(data.body || "").split("\n\n").map((p, i) => (
              <p key={i} style={{ fontSize: i === 0 ? 22 : 14, fontWeight: i === 0 ? 600 : 400, color: i === 0 ? C.dark : C.muted, lineHeight: 1.6, marginBottom: 16 }}>
                {i === 0 ? <>Motadata powers modern IT with an{" "}<span style={{ color: C.accent }}>AI-native unified observability and ITSM platform</span></> : p}
              </p>
            ))}
          </div>
          <SlideFooterBar />
        </SlideFrame>
      );
    case "stats":
      return (
        <SlideFrame slideIdx={idx}>
          <div style={{ flex: 1, padding: "48px 60px" }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: C.dark, marginBottom: 32 }}>{data.title}</h2>
            <div style={{ display: "grid", gridTemplateColumns: `repeat(${(data.stats || []).length}, 1fr)`, gap: 20 }}>
              {(data.stats || []).map(s => <StatCardV key={s.label} value={s.value} label={s.label} />)}
            </div>
            {data.body && (
              <div style={{ marginTop: 28, padding: "14px 20px", background: C.light, borderRadius: 8, border: `1px solid ${C.border}` }}>
                <p style={{ fontSize: 13, color: C.text }}>{data.body}</p>
              </div>
            )}
          </div>
          <SlideFooterBar />
        </SlideFrame>
      );
    case "pills":
      return (
        <SlideFrame slideIdx={idx}>
          <div style={{ flex: 1, padding: "48px 60px" }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: C.dark, marginBottom: 28 }}>{data.title}</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {(data.pills || []).map(p => <PillV key={p} text={p} />)}
            </div>
          </div>
          <SlideFooterBar />
        </SlideFrame>
      );
    case "twocol":
      return (
        <SlideFrame slideIdx={idx}>
          <div style={{ flex: 1, padding: "48px 60px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>{Icons.building(C.accent)}<h3 style={{ fontSize: 16, fontWeight: 700, color: C.dark }}>{data.left?.heading}</h3></div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {(data.left?.items || []).map(i => (
                  <li key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: C.text }}>{Icons.check(C.accent, 14)}{i}</li>
                ))}
              </ul>
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>{Icons.globe(C.accent)}<h3 style={{ fontSize: 16, fontWeight: 700, color: C.dark }}>{data.right?.heading}</h3></div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {(data.right?.items || []).map(i => (
                  <li key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: C.text }}>{Icons.check(C.accent, 14)}{i}</li>
                ))}
              </ul>
            </div>
          </div>
          <SlideFooterBar />
        </SlideFrame>
      );
    case "badges":
      return (
        <SlideFrame slideIdx={idx}>
          <div style={{ flex: 1, padding: "48px 60px" }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: C.dark, marginBottom: 28 }}>{data.title}</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14 }}>
              {(data.pills || []).map(b => (
                <div key={b} style={{ display: "flex", alignItems: "center", gap: 10, padding: "14px 18px", border: `1px solid ${C.border}`, borderRadius: 8, background: C.white }}>
                  {Icons.award(C.accent)}<span style={{ fontSize: 13, fontWeight: 600, color: C.text }}>{b}</span>
                </div>
              ))}
            </div>
          </div>
          <SlideFooterBar />
        </SlideFrame>
      );
    case "grid":
      return (
        <SlideFrame slideIdx={idx}>
          <div style={{ flex: 1, padding: "48px 60px" }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: C.dark, marginBottom: data.subtitle ? 4 : 28 }}>{data.title}</h2>
            {data.subtitle && <p style={{ fontSize: 13, color: C.muted, marginBottom: 24 }}>{data.subtitle}</p>}
            <div style={{ display: "grid", gridTemplateColumns: `repeat(${Math.min((data.items || []).length, 3)}, 1fr)`, gap: "16px 20px" }}>
              {(data.items || []).map(i => (
                <div key={i.t} style={{ padding: 24, borderRadius: 12, border: `1px solid ${C.border}`, background: C.white }}>
                  <div style={{ fontSize: 18, fontWeight: 700, color: C.accent, marginBottom: 8 }}>{i.t}</div>
                  {i.d && <div style={{ fontSize: 12, color: C.muted, lineHeight: 1.6 }}>{i.d}</div>}
                </div>
              ))}
            </div>
          </div>
          <SlideFooterBar />
        </SlideFrame>
      );
    case "list":
      return (
        <SlideFrame slideIdx={idx}>
          <div style={{ flex: 1, padding: "48px 60px" }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: C.dark, marginBottom: 24 }}>{data.title}</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {(data.pills || []).map(item => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 16px", borderRadius: 8, background: C.light, border: `1px solid ${C.border}` }}>
                  {Icons.check(C.accent, 14)}<span style={{ fontSize: 14, fontWeight: 500, color: C.text }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <SlideFooterBar />
        </SlideFrame>
      );
    case "bigtitle":
      return (
        <SlideFrame slideIdx={idx}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 60 }}>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: C.dark, textAlign: "center", textTransform: "uppercase", lineHeight: 1.4 }}>
              {(data.title || "").split("\n").map((l, i) => <span key={i} style={{ display: "block", color: i === 1 ? C.accent : C.dark }}>{l}</span>)}
            </h2>
            <div style={{ width: 48, height: 3, background: C.accent, borderRadius: 2, marginTop: 16 }} />
          </div>
          <SlideFooterBar />
        </SlideFrame>
      );
    case "visionmission":
      return (
        <SlideFrame slideIdx={idx}>
          <div style={{ flex: 1, padding: "48px 60px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
            {(data.columns || []).map(col => (
              <div key={col.t} style={{ padding: 28, borderRadius: 12, border: `1px solid ${C.border}`, background: C.white }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                  {col.t === "Vision" ? Icons.eye(C.accent) : Icons.target(C.accent)}
                  <span style={{ fontSize: 11, fontWeight: 700, color: C.accent, textTransform: "uppercase", letterSpacing: "0.1em" }}>{col.t}</span>
                </div>
                <p style={{ fontSize: 18, fontWeight: 600, color: C.dark, lineHeight: 1.5 }}>{col.d}</p>
              </div>
            ))}
          </div>
          <SlideFooterBar />
        </SlideFrame>
      );
    case "values":
      return (
        <SlideFrame slideIdx={idx}>
          <div style={{ flex: 1, padding: "48px 60px" }}>
            <div style={{ display: "flex", gap: 24, marginBottom: 32 }}>
              {(data.bigNumbers || []).map(bn => (
                <div key={bn.label} style={{ textAlign: "center", padding: "18px 32px", background: C.light, borderRadius: 12, border: `1px solid ${C.border}` }}>
                  <div style={{ fontSize: 36, fontWeight: 800, color: C.accent }}>{bn.value}</div>
                  <div style={{ fontSize: 12, color: C.muted, marginTop: 4 }}>{bn.label}</div>
                </div>
              ))}
            </div>
            <h3 style={{ fontSize: 14, fontWeight: 700, color: C.dark, marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.05em" }}>Core Values</h3>
            <div style={{ display: "grid", gridTemplateColumns: `repeat(${(data.values || []).length}, 1fr)`, gap: 12 }}>
              {(data.values || []).map(v => (
                <div key={v} style={{ textAlign: "center", padding: "16px 8px", borderRadius: 10, border: `1px solid ${C.border}`, background: C.white }}>
                  <span style={{ fontSize: 11, fontWeight: 600, color: C.text }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
          <SlideFooterBar />
        </SlideFrame>
      );
    case "timeline":
      return (
        <SlideFrame slideIdx={idx}>
          <div style={{ flex: 1, padding: "48px 60px" }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: C.dark, marginBottom: 48 }}>{data.title}</h2>
            <div style={{ position: "relative", display: "flex", justifyContent: "space-between" }}>
              <div style={{ position: "absolute", top: 8, left: 0, right: 0, height: 2, background: C.border }} />
              {(data.milestones || []).map((m, i, arr) => (
                <div key={m.year} style={{ position: "relative", textAlign: "center", flex: 1 }}>
                  <div style={{ width: 16, height: 16, borderRadius: "50%", background: i === arr.length - 1 ? C.accent : C.white, border: `2px solid ${C.accent}`, margin: "0 auto", position: "relative", zIndex: 1 }} />
                  <div style={{ marginTop: 12 }}>
                    <div style={{ fontSize: 18, fontWeight: 800, color: C.accent }}>{m.year}</div>
                    <div style={{ fontSize: 11, color: C.muted, marginTop: 4 }}>{m.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <SlideFooterBar />
        </SlideFrame>
      );
    case "steps":
      return (
        <SlideFrame slideIdx={idx}>
          <div style={{ flex: 1, padding: "48px 60px" }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: C.dark, marginBottom: 32 }}>{data.title}</h2>
            <div style={{ display: "flex", gap: 16 }}>
              {(data.steps || []).map((s, i, arr) => (
                <div key={s.n} style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                    <div style={{ width: 28, height: 28, borderRadius: "50%", background: C.accent, color: C.white, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, flexShrink: 0 }}>{s.n}</div>
                    {i < arr.length - 1 && <div style={{ flex: 1, height: 1, background: C.border }} />}
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: C.dark }}>{s.t}</div>
                  <div style={{ fontSize: 11, color: C.muted, marginTop: 4, lineHeight: 1.4 }}>{s.d}</div>
                </div>
              ))}
            </div>
          </div>
          <SlideFooterBar />
        </SlideFrame>
      );
    case "platform":
      return (
        <SlideFrame slideIdx={idx}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "48px 60px" }}>
            <div style={{ display: "flex", gap: 24, marginBottom: 32 }}>
              <div style={{ padding: "20px 32px", borderRadius: 12, background: C.accentLight, border: `2px solid ${C.accent}`, textAlign: "center" }}>
                <div style={{ fontSize: 16, fontWeight: 700, color: C.accent }}>ObserveOps</div>
                <div style={{ fontSize: 11, color: C.muted, marginTop: 4 }}>Unified Observability</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", fontSize: 20, color: C.muted }}>+</div>
              <div style={{ padding: "20px 32px", borderRadius: 12, background: C.accentLight, border: `2px solid ${C.accent}`, textAlign: "center" }}>
                <div style={{ fontSize: 16, fontWeight: 700, color: C.accent }}>ServiceOps</div>
                <div style={{ fontSize: 11, color: C.muted, marginTop: 4 }}>Enterprise ITSM</div>
              </div>
            </div>
            <p style={{ fontSize: 14, color: C.muted, textAlign: "center", maxWidth: 480 }}>One unified platform combining full-stack observability with intelligent IT service management</p>
          </div>
          <SlideFooterBar />
        </SlideFrame>
      );
    case "takeaways":
      return (
        <SlideFrame slideIdx={idx}>
          <div style={{ flex: 1, padding: "48px 60px" }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: C.dark, marginBottom: 28, textTransform: "uppercase", letterSpacing: "0.02em" }}>{data.title}</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }}>
              {(data.columns || []).map((col, i) => {
                const isAccent = i !== 1;
                return (
                  <div key={col.t} style={{ padding: 24, borderRadius: 12, borderTop: `3px solid ${isAccent ? C.accent : C.dark}`, background: C.light }}>
                    <div style={{ fontSize: 22, fontWeight: 800, color: isAccent ? C.accent : C.dark }}>{col.t}</div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: C.dark, marginTop: 4 }}>{col.sub}</div>
                    <p style={{ fontSize: 12, color: C.muted, lineHeight: 1.6, marginTop: 12 }}>{col.d}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <SlideFooterBar />
        </SlideFrame>
      );
    default:
      return null;
  }
}

/* ═══════════════════════════════════════════════════════════════
   MAIN EXPORT COMPONENT
   ═══════════════════════════════════════════════════════════════ */
export function CorporatePresentationContent() {
  const [current, setCurrent] = useState(0);
  const [viewMode, setViewMode] = useState<"slide" | "grid">("slide");
  const [version, setVersion] = useState<"v1" | "v2">("v2");
  const [exporting, setExporting] = useState<"" | "pptx" | "pdf">("");
  const allSlidesRef = useRef<HTMLDivElement>(null);
  const total = SLIDE_DATA.length;

  const isV2 = version === "v2";

  const currentRenderSlide = isV2 ? renderV2Slide : renderSlide;

  const handlePPTX = useCallback(async () => {
    setExporting("pptx");
    try {
      if (isV2) {
        await generateV2PPTX(SLIDE_DATA as V2SlideData[]);
      } else {
        await generatePPTX();
      }
    } catch (e) {
      console.error("PPTX generation failed:", e);
      alert("Failed to generate PPTX. Check console for details.");
    }
    setExporting("");
  }, [isV2]);

  const handlePDF = useCallback(async () => {
    setExporting("pdf");
    try {
      await generatePDF(allSlidesRef);
    } catch (e) {
      console.error("PDF generation failed:", e);
      alert("Failed to generate PDF. Check console for details.");
    }
    setExporting("");
  }, []);

  const btnStyle = (primary = false): React.CSSProperties => ({
    display: "flex", alignItems: "center", gap: 6, padding: "8px 16px",
    fontSize: 13, fontWeight: 500, borderRadius: 8, cursor: exporting ? "wait" : "pointer",
    fontFamily: "'Inter', system-ui, sans-serif",
    border: primary ? "none" : `1px solid ${C.border}`,
    color: primary ? "#fff" : C.text,
    background: primary ? C.accent : C.white,
    opacity: exporting ? 0.6 : 1, transition: "all 0.2s",
  });

  return (
    <section className="relative z-10 py-24 px-4" style={{ background: "transparent", minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ maxWidth: 960, margin: "0 auto", marginBottom: 32 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div>
            <h1 style={{ fontSize: 28, fontWeight: 700, color: C.dark, fontFamily: "'Inter', system-ui, sans-serif" }}>Product Corporate Presentation</h1>
            <p style={{ fontSize: 14, color: C.muted, marginTop: 4, fontFamily: "'Inter', system-ui, sans-serif" }}>
              Motadata — Unified Observability & ITSM Platform &bull; {total} Slides
            </p>
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
            {/* V1/V2 Toggle */}
            <div style={{
              display: "flex", borderRadius: 8, overflow: "hidden",
              border: `1px solid ${C.border}`,
              background: "#f1f5f9",
            }}>
              <button
                onClick={() => { setVersion("v1"); setCurrent(0); }}
                style={{
                  padding: "8px 16px", fontSize: 12, fontWeight: 600, border: "none", cursor: "pointer",
                  fontFamily: "'Inter', system-ui, sans-serif", transition: "all 0.2s",
                  background: version === "v1" ? C.accent : "transparent",
                  color: version === "v1" ? "#fff" : C.muted,
                }}
              >
                V1 Classic
              </button>
              <button
                onClick={() => { setVersion("v2"); setCurrent(0); }}
                style={{
                  padding: "8px 16px", fontSize: 12, fontWeight: 600, border: "none", cursor: "pointer",
                  fontFamily: "'Inter', system-ui, sans-serif", transition: "all 0.2s",
                  background: version === "v2" ? C.accent : "transparent",
                  color: version === "v2" ? "#fff" : C.muted,
                }}
              >
                V2 Premium
              </button>
            </div>
            <button onClick={() => setViewMode(viewMode === "slide" ? "grid" : "slide")} style={btnStyle()}>
              {viewMode === "slide" ? "Grid View" : "Slide View"}
            </button>
            <button onClick={handlePPTX} disabled={!!exporting} style={btnStyle()}>
              {Icons.filePpt(C.accent, 14)} {exporting === "pptx" ? "Generating..." : "Download PPTX"}
            </button>
            <button onClick={handlePDF} disabled={!!exporting} style={btnStyle(true)}>
              {Icons.fileText("#fff", 14)} {exporting === "pdf" ? "Generating..." : "Download PDF"}
            </button>
          </div>
        </div>
      </div>

      {viewMode === "slide" ? (
        <>
          {/* Current slide */}
          <div style={{
            maxWidth: 960, margin: "0 auto", borderRadius: 12, overflow: "hidden",
            boxShadow: "0 1px 3px rgba(0,0,0,.08), 0 8px 32px rgba(0,0,0,.06)",
          }}>
            {currentRenderSlide(SLIDE_DATA[current], current)}
          </div>

          {/* Navigation */}
          <div style={{ maxWidth: 960, margin: "24px auto 0", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <button onClick={() => setCurrent(Math.max(0, current - 1))} disabled={current === 0} style={{ ...btnStyle(), opacity: current === 0 ? 0.3 : 1 }}>
              {Icons.chevronLeft()} Previous
            </button>
            <span style={{ fontSize: 13, color: C.muted, fontFamily: "'Inter', system-ui, sans-serif" }}>
              Slide <strong style={{ color: C.dark }}>{current + 1}</strong> of {total}
            </span>
            <button onClick={() => setCurrent(Math.min(total - 1, current + 1))} disabled={current === total - 1} style={{ ...btnStyle(), opacity: current === total - 1 ? 0.3 : 1 }}>
              Next {Icons.chevronRight()}
            </button>
          </div>

          {/* Thumbnail strip */}
          <div style={{ maxWidth: 960, margin: "20px auto 0", display: "flex", gap: 6, overflowX: "auto", paddingBottom: 8 }}>
            {SLIDE_DATA.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                style={{
                  flexShrink: 0, width: 80, height: 45, borderRadius: 6, overflow: "hidden",
                  border: i === current ? `2px solid ${C.accent}` : `1px solid ${C.border}`,
                  background: C.white,
                  cursor: "pointer", padding: 0, display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "all 0.2s",
                }}
              >
                <span style={{ fontSize: 10, fontWeight: 600, color: i === current ? C.accent : C.muted, fontFamily: "'Inter', system-ui, sans-serif" }}>{i + 1}</span>
              </button>
            ))}
          </div>
        </>
      ) : (
        /* Grid view */
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {SLIDE_DATA.map((data, i) => (
            <button
              key={i}
              onClick={() => { setCurrent(i); setViewMode("slide"); }}
              style={{
                cursor: "pointer", borderRadius: 10, overflow: "hidden", padding: 0, textAlign: "left",
                border: `1px solid ${C.border}`,
                background: C.white,
                transition: "all 0.2s",
              }}
            >
              <div style={{ padding: "14px 18px", minHeight: 90, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <span style={{ fontSize: 10, fontWeight: 700, color: C.accent, marginBottom: 4, letterSpacing: "0.08em" }}>SLIDE {i + 1}</span>
                <span style={{ fontSize: 13, fontWeight: 600, color: C.dark }}>{data.title || data.type}</span>
                {data.body && <span style={{ fontSize: 11, color: C.muted, marginTop: 3, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{data.body.slice(0, 80)}...</span>}
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Hidden container for PDF rendering — all slides at full size */}
      <div
        ref={allSlidesRef}
        style={{ position: "absolute", left: "-9999px", top: 0, width: 960 }}
        aria-hidden="true"
      >
        {SLIDE_DATA.map((data, i) => <div key={i}>{currentRenderSlide(data, i)}</div>)}
      </div>
    </section>
  );
}
