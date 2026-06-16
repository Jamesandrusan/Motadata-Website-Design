"use client";

import { useCallback } from "react";

/* ─── Motadata ServiceOps – Minimalist A4 Brochure (4 pages) ────────
   Strict monochrome: Black, White, #f17463 accent, light grey only.
   210 mm × 297 mm per page.
   ──────────────────────────────────────────────────────────────────── */

const C = {
  black: "#000000",
  dark: "#111111",
  text: "#222222",
  muted: "#666666",
  grey: "#999999",
  lightGrey: "#e5e5e5",
  bg: "#f5f5f5",
  white: "#ffffff",
  accent: "#f17463",
  logoDark: "https://www.motadata.com/wp-content/uploads/2022/07/motadata-logo.png",
  logoWhite: "https://www.motadata.com/wp-content/uploads/2022/07/motadata-logo-white.png",
};

/* ═══════════════════════════════════════════════════════════════════════
   ICONS — monochrome SVG
   ═══════════════════════════════════════════════════════════════════════ */
const Icons = {
  check: (c = C.accent, s = 14) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  x: (c = C.grey, s = 14) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
  download: (c = "currentColor", s = 16) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  ),
  printer: (c = "currentColor", s = 16) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 6 2 18 2 18 9" /><path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" /><rect x="6" y="14" width="12" height="8" />
    </svg>
  ),
  illustrator: (c = "#FF9A00", s = 16) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill={c}>
      <path d="M10.53 10.73c-.1-.31-.19-.61-.29-.92-.1-.31-.18-.6-.27-.89h-.03c-.08.3-.17.6-.27.9l-.28.91-1.73 5.53h4.58l-1.71-5.53zm-5.48 9.27h3.07l1.02-3.3h5.11l.98 3.3h3.23L13.27 4H10.9L5.05 20zM19 4h-2.5v16H19V4z"/>
    </svg>
  ),
  arrow: (c = C.accent) => (
    <svg width="16" height="10" viewBox="0 0 16 10" style={{ flexShrink: 0 }}>
      <path d="M0 5h12M10 1l4 4-4 4" fill="none" stroke={c} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  /* ─── ITSM domain icons ─── */
  headset: (c = C.accent, s = 14) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0118 0v6" /><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3v5zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3v5z" /></svg>),
  catalog: (c = C.accent, s = 14) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" /><line x1="9" y1="7" x2="15" y2="7" /><line x1="9" y1="11" x2="13" y2="11" /></svg>),
  wrench: (c = C.accent, s = 14) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" /></svg>),
  database: (c = C.accent, s = 14) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg>),
  shieldUpdate: (c = C.accent, s = 14) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg>),
  lock: (c = C.accent, s = 14) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>),
  workflow: (c = C.accent, s = 14) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="6" height="6" rx="1" /><rect x="15" y="3" width="6" height="6" rx="1" /><rect x="9" y="15" width="6" height="6" rx="1" /><line x1="6" y1="9" x2="12" y2="15" /><line x1="18" y1="9" x2="12" y2="15" /></svg>),
  brain: (c = C.accent, s = 14) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a5 5 0 015 5c0 .8-.2 1.5-.5 2.2A5 5 0 0120 14a5 5 0 01-4 4.9V22h-8v-3.1A5 5 0 014 14a5 5 0 013.5-4.8A4.8 4.8 0 017 7a5 5 0 015-5z" /><circle cx="9" cy="9" r="1" fill={c} /><circle cx="15" cy="9" r="1" fill={c} /></svg>),
  barChart: (c = C.accent, s = 14) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /><line x1="2" y1="20" x2="22" y2="20" /></svg>),
  shieldCheck: (c = C.accent, s = 14) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg>),
  cloud: (c = C.accent, s = 14) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" /></svg>),
  target: (c = C.accent, s = 14) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" fill={c} /></svg>),
  layers: (c = C.accent, s = 14) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>),
  zap: (c = C.accent, s = 14) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>),
  briefcase: (c = C.accent, s = 14) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" /></svg>),
  inbox: (c = C.accent, s = 14) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12" /><path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z" /></svg>),
  clock: (c = C.accent, s = 14) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>),
  users: (c = C.accent, s = 14) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>),
  search: (c = C.accent, s = 14) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>),
  box: (c = C.accent, s = 14) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>),
  certificate: (c = C.accent, s = 14) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="12" rx="2" /><line x1="7" y1="8" x2="17" y2="8" /><line x1="7" y1="12" x2="13" y2="12" /><circle cx="17" cy="18" r="3" /><path d="M17 21v-3" /></svg>),
  calendar: (c = C.accent, s = 14) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>),
  plug: (c = C.accent, s = 14) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22v-5" /><path d="M9 8V2" /><path d="M15 8V2" /><path d="M18 8v5a6 6 0 01-12 0V8z" /></svg>),
  message: (c = C.accent, s = 14) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>),
  sparkle: (c = C.accent, s = 14) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z" /></svg>),
  refresh: (c = C.accent, s = 14) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10" /><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" /></svg>),
  monitor: (c = C.accent, s = 14) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>),
  server: (c = C.accent, s = 14) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" /><rect x="2" y="14" width="20" height="8" rx="2" /><circle cx="6" cy="6" r="1" fill={c} /><circle cx="6" cy="18" r="1" fill={c} /></svg>),
  key: (c = C.accent, s = 14) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" /></svg>),
  code: (c = C.accent, s = 14) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>),
  settings: (c = C.accent, s = 14) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" /></svg>),
  globe: (c = C.accent, s = 14) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></svg>),
  api: (c = C.accent, s = 14) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 17l2-2-2-2" /><path d="M20 17l-2-2 2-2" /><line x1="7" y1="21" x2="17" y2="3" /></svg>),
};

/* ═══════════════════════════════════════════════════════════════════════
   LAYOUT HELPERS
   ═══════════════════════════════════════════════════════════════════════ */
const F = "'Plus Jakarta Sans', 'Helvetica Neue', Arial, sans-serif";

function A4({ children, bg, id }: { children: React.ReactNode; bg?: string; id?: string }) {
  return (
    <div id={id} className="a4-page" style={{ width: "210mm", minHeight: "297mm", maxHeight: "297mm", background: bg || C.white, fontFamily: F, color: C.text, fontSize: 11, lineHeight: 1.6, position: "relative", overflow: "hidden", boxShadow: "0 2px 24px rgba(0,0,0,0.1)", pageBreakAfter: "always", pageBreakInside: "avoid", WebkitPrintColorAdjust: "exact", printColorAdjust: "exact" } as React.CSSProperties}>
      {children}
    </div>
  );
}

function PageNum({ n, light }: { n: number; light?: boolean }) {
  return (
    <div style={{ position: "absolute", bottom: 20, right: 38, fontSize: 8, fontWeight: 500, color: light ? "rgba(255,255,255,0.35)" : C.grey, letterSpacing: "0.1em" }}>
      {String(n).padStart(2, "0")} / 04
    </div>
  );
}

function AccentBar() {
  return <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, background: C.accent }} />;
}

function SectionTitle({ children, icon }: { children: React.ReactNode; icon?: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
      {icon && <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{icon}</span>}
      <h3 style={{ fontSize: 13, fontWeight: 800, color: C.black, textTransform: "uppercase", letterSpacing: "0.06em", margin: 0, whiteSpace: "nowrap" }}>{children}</h3>
      <div style={{ flex: 1, height: 1, background: C.lightGrey }} />
    </div>
  );
}

function SectionTitleLight({ children, icon }: { children: React.ReactNode; icon?: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
      {icon && <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{icon}</span>}
      <h3 style={{ fontSize: 13, fontWeight: 800, color: C.white, textTransform: "uppercase", letterSpacing: "0.06em", margin: 0, whiteSpace: "nowrap" }}>{children}</h3>
      <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.15)" }} />
    </div>
  );
}

function Bullet({ children, accent, icon }: { children: React.ReactNode; accent?: boolean; icon?: React.ReactNode }) {
  return (
    <li style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 4 }}>
      {icon ? <span style={{ flexShrink: 0, marginTop: 2, display: "inline-flex" }}>{icon}</span> : <div style={{ width: 5, height: 5, borderRadius: 1, background: accent ? C.accent : C.black, flexShrink: 0, marginTop: 5 }} />}
      <span>{children}</span>
    </li>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   PAGE 1 — COVER
   ═══════════════════════════════════════════════════════════════════════ */
function Page1() {
  return (
    <A4 bg={C.black} id="sp1">
      {/* Subtle grid */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
        <defs>
          <pattern id="cg" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M60 0H0v60" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cg)" />
      </svg>

      {/* Top bar */}
      <div style={{ padding: "32px 42px 0", position: "relative", zIndex: 1, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <img src={C.logoWhite} alt="Motadata" style={{ height: 22 }} crossOrigin="anonymous" />
        <span style={{ fontSize: 7.5, color: "rgba(255,255,255,0.3)", letterSpacing: "0.15em", fontWeight: 500, textTransform: "uppercase" }}>Product Brochure 2025</span>
      </div>

      {/* Hero */}
      <div style={{ position: "relative", zIndex: 1, padding: "72px 42px 0" }}>
        <div style={{ width: 40, height: 3, background: C.accent, marginBottom: 24 }} />

        <h1 style={{ fontSize: 44, fontWeight: 800, color: C.white, lineHeight: 1.1, marginBottom: 4, letterSpacing: "-0.03em" }}>
          Motadata ServiceOps
        </h1>
        <h2 style={{ fontSize: 22, fontWeight: 400, color: C.accent, lineHeight: 1.3, marginBottom: 24, letterSpacing: "-0.01em" }}>
          Unified IT Service Management
        </h2>

        <p style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, maxWidth: "88%", marginBottom: 40 }}>
          AI-powered, ITIL-aligned service management unifying service delivery, asset intelligence, endpoint management, and automation into a single control plane.
        </p>

        {/* Capability tags */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 48 }}>
          {[
            { t: "Service Desk", icon: Icons.headset("rgba(255,255,255,0.6)", 11) },
            { t: "IT Asset Management", icon: Icons.box("rgba(255,255,255,0.6)", 11) },
            { t: "Patch & Endpoint Mgmt", icon: Icons.shieldUpdate("rgba(255,255,255,0.6)", 11) },
            { t: "Automation & AI", icon: Icons.brain("rgba(255,255,255,0.6)", 11) },
          ].map(({ t, icon }) => (
            <span key={t} style={{ padding: "6px 16px", borderRadius: 2, border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.6)", fontSize: 9, fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: 6 }}>
              {icon}{t}
            </span>
          ))}
        </div>
      </div>

      {/* Executive Overview */}
      <div style={{ position: "relative", zIndex: 1, margin: "0 42px", padding: "24px 28px", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 2 }}>
        <h3 style={{ fontSize: 10, fontWeight: 700, color: C.accent, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>Executive Overview</h3>
        <p style={{ fontSize: 9.5, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: 12 }}>
          Modern IT service management is often fragmented across ticketing systems, asset tools, patching solutions, and automation platforms—resulting in disconnected workflows, delayed resolutions, and lack of operational visibility.
        </p>
        <p style={{ fontSize: 9.5, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: 14 }}>
          Motadata ServiceOps eliminates these silos by delivering a unified IT service management platform that integrates Service Desk, IT Asset Management, Patch &amp; Endpoint Management, and Automation &amp; AI into a single, AI-driven service lifecycle platform.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px 20px" }}>
          {[
            { t: "Accelerate service delivery", icon: Icons.zap(C.accent, 10) },
            { t: "Improve governance and compliance", icon: Icons.shieldCheck(C.accent, 10) },
            { t: "Reduce operational overhead", icon: Icons.settings(C.accent, 10) },
            { t: "Enable autonomous operations", icon: Icons.workflow(C.accent, 10) },
          ].map(({ t, icon }) => (
            <div key={t} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 9, color: "rgba(255,255,255,0.6)" }}>
              <span style={{ flexShrink: 0, display: "inline-flex" }}>{icon}</span>
              {t}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div style={{ position: "absolute", bottom: 22, left: 42, zIndex: 1 }}>
        <span style={{ fontSize: 7.5, color: "rgba(255,255,255,0.2)", letterSpacing: "0.15em", fontWeight: 500 }}>OBSERVE. SERVE. EVOLVE.</span>
      </div>

      <PageNum n={1} light />
      <AccentBar />
    </A4>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   PAGE 2 — ARCHITECTURE & DIFFERENTIATORS
   ═══════════════════════════════════════════════════════════════════════ */
function Page2() {
  return (
    <A4 id="sp2">
      {/* Header */}
      <div style={{ padding: "22px 42px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: `1px solid ${C.lightGrey}` }}>
        <img src={C.logoDark} alt="Motadata" style={{ height: 18 }} crossOrigin="anonymous" />
        <span style={{ fontSize: 7.5, fontWeight: 600, color: C.grey, letterSpacing: "0.12em", textTransform: "uppercase" }}>Architecture &amp; Differentiators</span>
      </div>

      <div style={{ padding: "22px 42px 0" }}>
        {/* Architecture */}
        <SectionTitle icon={Icons.layers(C.accent, 16)}>Unified ServiceOps Architecture</SectionTitle>
        <p style={{ fontSize: 10, color: C.text, lineHeight: 1.65, marginBottom: 16 }}>
          Motadata ServiceOps is built on a workflow-first architecture, where every service operation is connected through intelligent workflows and shared data context.
        </p>

        {/* Lifecycle flow */}
        <div style={{ background: C.black, borderRadius: 2, padding: "18px 22px", marginBottom: 16 }}>
          <p style={{ fontSize: 8, color: C.accent, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>Unified Service Lifecycle</p>
          <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
            {["Request", "Incident", "Problem", "Change", "Release", "Resolution"].map((s, i, arr) => (
              <span key={s} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ padding: "5px 14px", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 2, color: "rgba(255,255,255,0.7)", fontSize: 9, fontWeight: 600 }}>{s}</span>
                {i < arr.length - 1 && Icons.arrow()}
              </span>
            ))}
          </div>
          <p style={{ fontSize: 8.5, color: "rgba(255,255,255,0.35)", marginTop: 10, lineHeight: 1.5 }}>
            Continuous flow without tool switching
          </p>
        </div>

        {/* Four layers */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 18 }}>
          {[
            { title: "Connected Data Layer", items: ["Tickets, assets, endpoints, contracts and configurations", "CMDB-driven relationship intelligence"] },
            { title: "AI-Driven Decision Layer", items: ["AI triage, clustering, and recommendations", "Predictive insights and automation triggers"] },
            { title: "Execution & Automation Layer", items: ["No-code workflow orchestration", "Automated remediation and endpoint actions"] },
            { title: "Unified Service Lifecycle", items: ["Request → Incident → Problem → Change → Release → Resolution", "Continuous flow without tool switching"] },
          ].map((bl) => (
            <div key={bl.title} style={{ padding: "14px 16px", border: `1px solid ${C.lightGrey}`, borderRadius: 2, borderTop: `2px solid ${C.black}` }}>
              <h4 style={{ fontSize: 10, fontWeight: 700, color: C.black, marginBottom: 8 }}>{bl.title}</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {bl.items.map((it) => (<Bullet key={it}><span style={{ fontSize: 8.5, color: C.text }}>{it}</span></Bullet>))}
              </ul>
            </div>
          ))}
        </div>

        {/* Differentiators */}
        <SectionTitle>Key Differentiators</SectionTitle>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {[
            { title: "Unified ITSM + ITOM + Endpoint Management", desc: "Unlike traditional ITSM tools, Motadata combines Service Management, Asset Intelligence, and Patch & Vulnerability Management in one platform." },
            { title: "AI Embedded Across Lifecycle", desc: "AI is not an add-on: AI triage at intake, AI clustering for problem management, AI knowledge generation." },
            { title: "Closed-Loop Service Execution", desc: "From detection (ticket or vulnerability) to resolution (automation or patch), everything happens within a single system." },
            { title: "Deep CMDB with Live Intelligence", desc: "Relationship mapping, drift detection, real-time asset context." },
            { title: "Enterprise-Ready MSP & Multi-Tenant Support", desc: "Isolated portals, white-label capabilities, tenant-level governance." },
          ].map((d) => (
            <div key={d.title} style={{ padding: "12px 14px", border: `1px solid ${C.lightGrey}`, borderRadius: 2 }}>
              <h4 style={{ fontSize: 9.5, fontWeight: 700, color: C.black, marginBottom: 3 }}>{d.title}</h4>
              <p style={{ fontSize: 8.5, color: C.muted, lineHeight: 1.5 }}>{d.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <PageNum n={2} />
      <AccentBar />
    </A4>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   PAGE 3 — CORE CAPABILITIES
   ═══════════════════════════════════════════════════════════════════════ */
function Page3() {
  const caps = [
    {
      title: "Service Desk (ITSM Core)",
      pos: "AI-enabled, ITIL v4-aligned service management platform for complete service lifecycle control.",
      bullets: ["Multi-channel ticket intake (email, portal, Teams, Slack, WhatsApp, etc.)", "AI-powered triage (categorization, sentiment, summarization)", "Incident, problem, change, release management", "SLA tracking and escalation"],
      note: "Service Desk unifies ticket handling, approvals, knowledge, and automation into a continuous workflow, eliminating operational fragmentation.",
    },
    {
      title: "Service Request & Self-Service",
      pos: "Enable standardized service delivery with minimal manual intervention.",
      bullets: ["Service catalog with configurable workflows", "Multi-level approvals with cost tracking", "AI-powered service recommendations", "Self-service portal with virtual agent"],
      note: "AI-powered self-service ensures users resolve issues independently, reducing ticket load and improving user experience.",
    },
    {
      title: "Problem & Change Management",
      pos: "Move from reactive incident handling to proactive problem elimination and controlled change execution.",
      bullets: ["AI-driven incident clustering for problem identification", "Known Error Database (KEDB)", "Change classification with CAB approvals", "Change calendar with conflict detection"],
      note: "Motadata enables proactive root cause elimination and governed change execution with full traceability.",
    },
    {
      title: "IT Asset Management (ITAM & CMDB)",
      pos: "Gain complete visibility and control over all assets across their lifecycle.",
      bullets: ["Agent-based, agentless, and cloud discovery", "Hardware, software, and mobile inventory", "License compliance and software metering", "CMDB with relationship mapping and drift detection"],
      note: "Motadata transforms CMDB into a living, self-correcting system through AI-driven relationship inference and configuration intelligence.",
    },
    {
      title: "Patch & Endpoint Management",
      pos: "Unified detect-to-remediate lifecycle for endpoint security and compliance.",
      bullets: ["Automated patch discovery and deployment", "Vulnerability detection with risk prioritization", "Multi-OS support (Windows, Linux, macOS)", "Third-party application patching"],
      note: "Motadata eliminates tool switching by combining vulnerability detection and remediation in a single workflow.",
    },
    {
      title: "Endpoint Security & Compliance",
      pos: "Maintain continuous security posture across distributed endpoint environments.",
      bullets: ["Risk-based vulnerability prioritization", "Compliance reporting and audit trails", "Air-gapped and distributed environment support", "Real-time security dashboards"],
      note: "This ensures organizations can close vulnerabilities faster while maintaining governance and stability.",
    },
  ];

  return (
    <A4 id="sp3">
      <div style={{ padding: "22px 42px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: `1px solid ${C.lightGrey}` }}>
        <img src={C.logoDark} alt="Motadata" style={{ height: 18 }} crossOrigin="anonymous" />
        <span style={{ fontSize: 7.5, fontWeight: 600, color: C.grey, letterSpacing: "0.12em", textTransform: "uppercase" }}>Core Capabilities</span>
      </div>

      <div style={{ padding: "18px 42px 0" }}>
        <SectionTitle>Core ServiceOps Capabilities</SectionTitle>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {caps.map((c) => (
            <div key={c.title} style={{ padding: "13px 15px", border: `1px solid ${C.lightGrey}`, borderRadius: 2, borderLeft: `3px solid ${C.accent}` }}>
              <h4 style={{ fontSize: 10, fontWeight: 700, color: C.black, marginBottom: 3, lineHeight: 1.3 }}>{c.title}</h4>
              <p style={{ fontSize: 8, color: C.muted, lineHeight: 1.45, marginBottom: 6, fontStyle: "italic" }}>{c.pos}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 6px 0" }}>
                {c.bullets.map((b) => (<Bullet key={b} accent><span style={{ fontSize: 8, color: C.text }}>{b}</span></Bullet>))}
              </ul>
              <p style={{ fontSize: 7.5, color: C.muted, lineHeight: 1.45, borderTop: `1px solid ${C.lightGrey}`, paddingTop: 5 }}>{c.note}</p>
            </div>
          ))}
        </div>
      </div>

      <PageNum n={3} />
      <AccentBar />
    </A4>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   PAGE 4 — AI, ANALYTICS, GOVERNANCE, USE CASES, COMPARISON & CTA
   ═══════════════════════════════════════════════════════════════════════ */
function Page4() {
  return (
    <A4 id="sp4">
      <div style={{ padding: "22px 42px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: `1px solid ${C.lightGrey}` }}>
        <img src={C.logoDark} alt="Motadata" style={{ height: 18 }} crossOrigin="anonymous" />
        <span style={{ fontSize: 7.5, fontWeight: 600, color: C.grey, letterSpacing: "0.12em", textTransform: "uppercase" }}>Intelligence, Governance &amp; CTA</span>
      </div>

      <div style={{ padding: "16px 42px 0" }}>
        {/* Automation & Orchestration + AI Studio */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 14 }}>
          <div style={{ padding: "13px 15px", border: `1px solid ${C.lightGrey}`, borderRadius: 2, borderLeft: `3px solid ${C.accent}` }}>
            <h4 style={{ fontSize: 10, fontWeight: 700, color: C.black, marginBottom: 3 }}>Automation &amp; Orchestration</h4>
            <p style={{ fontSize: 8, color: C.muted, fontStyle: "italic", marginBottom: 6 }}>Eliminate repetitive tasks and enable autonomous IT operations.</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {["No-code workflow designer", "Event, schedule, and webhook triggers", "External API integrations", "Pre-built automation templates"].map((b) => (<Bullet key={b} accent><span style={{ fontSize: 8, color: C.text }}>{b}</span></Bullet>))}
            </ul>
            <p style={{ fontSize: 7.5, color: C.muted, marginTop: 5, borderTop: `1px solid ${C.lightGrey}`, paddingTop: 5 }}>Automation workflows ensure consistent, repeatable execution across service operations without coding complexity.</p>
          </div>
          <div style={{ padding: "13px 15px", border: `1px solid ${C.lightGrey}`, borderRadius: 2, borderLeft: `3px solid ${C.accent}` }}>
            <h4 style={{ fontSize: 10, fontWeight: 700, color: C.black, marginBottom: 3 }}>AI Studio &amp; Agentic AI</h4>
            <p style={{ fontSize: 8, color: C.muted, fontStyle: "italic", marginBottom: 6 }}>Bring intelligence into every service interaction and operational workflow.</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {["AI-powered text intelligence (summarization, response generation)", "No-code AI agent creation", "Multi-agent orchestration", "Conversational AI interface"].map((b) => (<Bullet key={b} accent><span style={{ fontSize: 8, color: C.text }}>{b}</span></Bullet>))}
            </ul>
            <p style={{ fontSize: 7.5, color: C.muted, marginTop: 5, borderTop: `1px solid ${C.lightGrey}`, paddingTop: 5 }}>AI agents assist technicians and users while enabling intelligent service automation at scale.</p>
          </div>
        </div>

        {/* AI & Intelligent Automation */}
        <div style={{ background: C.black, borderRadius: 2, padding: "14px 18px", marginBottom: 14 }}>
          <SectionTitleLight>AI &amp; Intelligent Automation</SectionTitleLight>
          <p style={{ fontSize: 9, color: "rgba(255,255,255,0.45)", lineHeight: 1.6, marginBottom: 10 }}>Motadata ServiceOps embeds AI across every stage of service delivery.</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <div>
              <h4 style={{ fontSize: 8.5, fontWeight: 700, color: C.accent, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>Capabilities</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {["AI-based ticket triage and routing", "Incident clustering and pattern detection", "Knowledge auto-generation", "Predictive insights and recommendations"].map((t) => (
                  <li key={t} style={{ display: "flex", alignItems: "flex-start", gap: 7, marginBottom: 3 }}>
                    <div style={{ width: 4, height: 4, background: C.accent, borderRadius: 1, flexShrink: 0, marginTop: 4 }} />
                    <span style={{ fontSize: 8.5, color: "rgba(255,255,255,0.6)" }}>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{ fontSize: 8.5, fontWeight: 700, color: C.accent, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>Outcomes</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {["Faster resolution times", "Reduced manual effort", "Proactive service management"].map((t) => (
                  <li key={t} style={{ display: "flex", alignItems: "flex-start", gap: 7, marginBottom: 3 }}>
                    <div style={{ width: 4, height: 4, background: C.accent, borderRadius: 1, flexShrink: 0, marginTop: 4 }} />
                    <span style={{ fontSize: 8.5, color: "rgba(255,255,255,0.6)" }}>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Dashboards + Security row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 14 }}>
          <div style={{ padding: "12px 14px", border: `1px solid ${C.lightGrey}`, borderRadius: 2 }}>
            <h4 style={{ fontSize: 9.5, fontWeight: 700, color: C.black, marginBottom: 5 }}>Dashboards, Reporting &amp; Analytics</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {["Pre-built dashboards (incident trends, SLA compliance, workload)", "Custom reports (tabular, matrix, summary-based)", "Real-time KPI tracking", "Compliance and audit reporting"].map((b) => (<Bullet key={b}><span style={{ fontSize: 8, color: C.text }}>{b}</span></Bullet>))}
            </ul>
          </div>
          <div style={{ padding: "12px 14px", border: `1px solid ${C.lightGrey}`, borderRadius: 2 }}>
            <h4 style={{ fontSize: 9.5, fontWeight: 700, color: C.black, marginBottom: 5 }}>Security, Integration &amp; Governance</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {["SSO (Okta, Azure AD, Google Workspace)", "LDAP/LDAPS integration", "REST API for extensibility", "Role-based and attribute-based access control"].map((b) => (<Bullet key={b}><span style={{ fontSize: 8, color: C.text }}>{b}</span></Bullet>))}
            </ul>
          </div>
        </div>

        {/* Deployment */}
        <div style={{ padding: "10px 14px", border: `1px solid ${C.lightGrey}`, borderRadius: 2, marginBottom: 14, display: "flex", gap: 20 }}>
          <h4 style={{ fontSize: 9.5, fontWeight: 700, color: C.black, whiteSpace: "nowrap" }}>Deployment &amp; Scalability</h4>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            {["On-prem, SaaS, and hybrid deployment", "Multi-tenant MSP architecture", "High scalability for enterprise environments", "Distributed and HA deployments"].map((t) => (
              <span key={t} style={{ fontSize: 8, color: C.muted, display: "flex", alignItems: "center", gap: 5 }}>
                <span style={{ width: 4, height: 4, background: C.accent, borderRadius: 1 }} />{t}
              </span>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <SectionTitle>Key Use Cases</SectionTitle>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 14 }}>
          {[
            { t: "End-to-End IT Service Management", d: "Manage incidents, requests, problems, and changes in a unified workflow" },
            { t: "Asset & License Optimization", d: "Reduce software costs and improve compliance" },
            { t: "Endpoint Security & Patch Compliance", d: "Close vulnerabilities quickly with unified remediation" },
            { t: "Automation-Driven IT Operations", d: "Reduce manual workload through no-code workflows" },
            { t: "MSP Service Delivery", d: "Deliver multi-tenant, white-labeled service management" },
          ].map((uc) => (
            <div key={uc.t} style={{ padding: "10px 12px", background: C.bg, borderRadius: 2, borderLeft: `2px solid ${C.black}` }}>
              <h4 style={{ fontSize: 8.5, fontWeight: 700, color: C.black, marginBottom: 2 }}>{uc.t}</h4>
              <p style={{ fontSize: 7.5, color: C.muted, lineHeight: 1.4 }}>{uc.d}</p>
            </div>
          ))}
        </div>

        {/* Comparison */}
        <SectionTitle>Why Motadata ServiceOps</SectionTitle>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 9, marginBottom: 14 }}>
          <thead>
            <tr style={{ background: C.black }}>
              <th style={{ padding: "7px 12px", textAlign: "left", color: C.white, fontWeight: 700, fontSize: 8 }}>Capability</th>
              <th style={{ padding: "7px 12px", textAlign: "center", color: C.accent, fontWeight: 700, fontSize: 8 }}>Motadata</th>
              <th style={{ padding: "7px 12px", textAlign: "center", color: "rgba(255,255,255,0.4)", fontWeight: 600, fontSize: 8 }}>Traditional ITSM</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["ITSM + ITAM + Patch", "Unified", "Separate tools"],
              ["AI across lifecycle", "Native", "Limited"],
              ["CMDB intelligence", "Dynamic", "Static"],
              ["Automation", "No-code, built-in", "Add-on"],
              ["Endpoint + Service integration", "Native", "Disconnected"],
            ].map((row, i) => (
              <tr key={row[0]} style={{ background: i % 2 === 0 ? C.bg : C.white }}>
                <td style={{ padding: "5px 12px", borderBottom: `1px solid ${C.lightGrey}`, color: C.text, fontWeight: 600 }}>{row[0]}</td>
                <td style={{ padding: "5px 12px", borderBottom: `1px solid ${C.lightGrey}`, textAlign: "center" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                    {Icons.check(C.accent, 10)}
                    <span style={{ color: C.black, fontWeight: 700 }}>{row[1]}</span>
                  </span>
                </td>
                <td style={{ padding: "5px 12px", borderBottom: `1px solid ${C.lightGrey}`, textAlign: "center" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                    {Icons.x(C.grey, 10)}
                    <span style={{ color: C.grey }}>{row[2]}</span>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* CTA */}
        <div style={{ background: C.black, borderRadius: 2, padding: "20px 28px", textAlign: "center" }}>
          <h3 style={{ fontSize: 16, fontWeight: 800, color: C.white, marginBottom: 5 }}>Get Started</h3>
          <p style={{ fontSize: 9.5, color: "rgba(255,255,255,0.5)", marginBottom: 14 }}>Transform your IT operations into intelligent, automated service delivery.</p>
          <div style={{ display: "flex", justifyContent: "center", gap: 12 }}>
            {[
              { label: "Book a Demo", fill: true },
              { label: "Start Free Trial", fill: false },
              { label: "Contact Sales", fill: false },
            ].map((cta) => (
              <span key={cta.label} style={{ padding: "8px 22px", borderRadius: 2, background: cta.fill ? C.accent : "transparent", border: cta.fill ? "none" : "1px solid rgba(255,255,255,0.2)", color: cta.fill ? C.white : "rgba(255,255,255,0.6)", fontSize: 9, fontWeight: 700, letterSpacing: "0.02em" }}>{cta.label}</span>
            ))}
          </div>
          <p style={{ fontSize: 7.5, color: "rgba(255,255,255,0.3)", marginTop: 10 }}>sales@motadata.com &nbsp;|&nbsp; www.motadata.com</p>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 22, left: 42 }}>
        <span style={{ fontSize: 7.5, color: C.grey, letterSpacing: "0.12em", fontWeight: 500 }}>OBSERVE. SERVE. EVOLVE.</span>
      </div>

      <PageNum n={4} />
      <AccentBar />
    </A4>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   SVG GENERATION — Illustrator-editable download
   ═══════════════════════════════════════════════════════════════════════ */
function generateIllustratorSVG(): string {
  const W = 595.28;
  const H = 841.89;
  const pageH = H;
  const totalH = pageH * 4;

  return `<?xml version="1.0" encoding="UTF-8"?>
<!-- Motadata ServiceOps Brochure — Minimalist Monochrome -->
<svg xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 ${W} ${totalH}" width="${W}pt" height="${totalH}pt"
     style="font-family:'Plus Jakarta Sans',Arial,Helvetica,sans-serif">

  <defs>
    <pattern id="mg" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M48 0H0v48" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="0.5"/>
    </pattern>
  </defs>

  <!-- PAGE 1: COVER -->
  <g id="P1">
    <rect width="${W}" height="${pageH}" fill="${C.black}"/>
    <rect width="${W}" height="${pageH}" fill="url(#mg)"/>
    <text x="42" y="42" font-size="18" font-weight="800" fill="${C.white}">motadata</text>
    <text x="${W - 42}" y="38" font-size="6" font-weight="500" fill="rgba(255,255,255,0.3)" text-anchor="end" letter-spacing="1.5">PRODUCT BROCHURE 2025</text>
    <rect x="42" y="110" width="32" height="2.5" fill="${C.accent}"/>
    <text x="42" y="155" font-size="36" font-weight="800" fill="${C.white}" letter-spacing="-0.5">Motadata ServiceOps</text>
    <text x="42" y="185" font-size="18" fill="${C.accent}" font-weight="400">Unified IT Service Management</text>
    <text x="42" y="215" font-size="10" fill="rgba(255,255,255,0.5)">
      <tspan x="42" dy="0">AI-powered, ITIL-aligned service management unifying service delivery,</tspan>
      <tspan x="42" dy="14">asset intelligence, endpoint management, and automation into a single control plane.</tspan>
    </text>
    ${["Service Desk", "IT Asset Management", "Patch & Endpoint Mgmt", "Automation & AI"].map((t, i) => {
      const x = 42 + i * 125;
      return `<rect x="${x}" y="260" width="118" height="22" rx="1" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="0.8"/>
      <text x="${x + 59}" y="274" font-size="7" font-weight="600" fill="rgba(255,255,255,0.55)" text-anchor="middle" letter-spacing="0.4">${t.toUpperCase()}</text>`;
    }).join("\n    ")}
    <rect x="42" y="310" width="${W - 84}" height="1" fill="rgba(255,255,255,0.06)"/>
    <text x="42" y="340" font-size="8.5" font-weight="700" fill="${C.accent}" letter-spacing="1">EXECUTIVE OVERVIEW</text>
    <text x="42" y="360" font-size="8" fill="rgba(255,255,255,0.45)" letter-spacing="0.2">
      <tspan x="42" dy="0">Modern IT service management is often fragmented across ticketing systems, asset tools,</tspan>
      <tspan x="42" dy="12">patching solutions, and automation platforms—resulting in disconnected workflows, delayed</tspan>
      <tspan x="42" dy="12">resolutions, and lack of operational visibility.</tspan>
      <tspan x="42" dy="18">Motadata ServiceOps eliminates these silos by delivering a unified IT service management</tspan>
      <tspan x="42" dy="12">platform that integrates Service Desk, IT Asset Management, Patch &amp; Endpoint Management,</tspan>
      <tspan x="42" dy="12">and Automation &amp; AI into a single, AI-driven service lifecycle platform.</tspan>
    </text>
    ${["Accelerate service delivery", "Improve governance and compliance", "Reduce operational overhead", "Enable autonomous operations"].map((t, i) => {
      const col = i % 2;
      const row = Math.floor(i / 2);
      const x = 42 + col * 250;
      const y = 460 + row * 14;
      return `<rect x="${x}" y="${y}" width="4" height="4" rx="1" fill="${C.accent}"/>
      <text x="${x + 10}" y="${y + 3}" font-size="7.5" fill="rgba(255,255,255,0.55)">${t}</text>`;
    }).join("\n    ")}
    <text x="42" y="${pageH - 20}" font-size="6.5" font-weight="500" fill="rgba(255,255,255,0.18)" letter-spacing="1.5">OBSERVE. SERVE. EVOLVE.</text>
    <text x="${W - 42}" y="${pageH - 20}" font-size="7" font-weight="500" fill="rgba(255,255,255,0.3)" text-anchor="end" letter-spacing="1">01 / 04</text>
    <rect y="${pageH - 3}" width="${W}" height="3" fill="${C.accent}"/>
  </g>

  <!-- PAGE 2: ARCHITECTURE -->
  <g id="P2" transform="translate(0,${pageH})">
    <rect width="${W}" height="${pageH}" fill="${C.white}"/>
    <line x1="0" y1="48" x2="${W}" y2="48" stroke="${C.lightGrey}" stroke-width="0.8"/>
    <text x="42" y="34" font-size="14" font-weight="800" fill="${C.black}">motadata</text>
    <text x="${W - 42}" y="34" font-size="6.5" font-weight="600" fill="${C.grey}" text-anchor="end" letter-spacing="1.2">ARCHITECTURE &amp; DIFFERENTIATORS</text>
    <text x="42" y="76" font-size="12" font-weight="800" fill="${C.black}" letter-spacing="0.5">UNIFIED SERVICEOPS ARCHITECTURE</text>
    <line x1="310" y1="73" x2="${W - 42}" y2="73" stroke="${C.lightGrey}" stroke-width="0.8"/>
    <text x="42" y="96" font-size="8.5" fill="${C.text}">Built on a workflow-first architecture with intelligent workflows and shared data context.</text>
    <rect x="42" y="112" width="${W - 84}" height="60" rx="1" fill="${C.black}"/>
    <text x="56" y="130" font-size="6.5" font-weight="700" fill="${C.accent}" letter-spacing="1">UNIFIED SERVICE LIFECYCLE</text>
    ${["Request", "Incident", "Problem", "Change", "Release", "Resolution"].map((s, i) => {
      const x = 56 + i * 82;
      return `<rect x="${x}" y="140" width="68" height="20" rx="1" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="0.8"/>
      <text x="${x + 34}" y="153" font-size="7" font-weight="600" fill="rgba(255,255,255,0.7)" text-anchor="middle">${s}</text>`;
    }).join("\n    ")}
    <text x="42" y="200" font-size="12" font-weight="800" fill="${C.black}" letter-spacing="0.5">KEY DIFFERENTIATORS</text>
    <line x1="220" y1="197" x2="${W - 42}" y2="197" stroke="${C.lightGrey}" stroke-width="0.8"/>
    ${[
      "Unified ITSM + ITOM + Endpoint Management",
      "AI Embedded Across Lifecycle",
      "Closed-Loop Service Execution",
      "Deep CMDB with Live Intelligence",
      "Enterprise-Ready MSP & Multi-Tenant Support",
    ].map((d, i) => {
      const y = 218 + i * 22;
      return `<rect x="42" y="${y}" width="4" height="4" rx="1" fill="${C.accent}"/>
      <text x="54" y="${y + 3}" font-size="8" font-weight="700" fill="${C.black}">${d}</text>`;
    }).join("\n    ")}
    <text x="${W - 42}" y="${pageH - 20}" font-size="7" font-weight="500" fill="${C.grey}" text-anchor="end" letter-spacing="1">02 / 04</text>
    <rect y="${pageH - 3}" width="${W}" height="3" fill="${C.accent}"/>
  </g>

  <!-- PAGE 3: CAPABILITIES -->
  <g id="P3" transform="translate(0,${pageH * 2})">
    <rect width="${W}" height="${pageH}" fill="${C.white}"/>
    <line x1="0" y1="48" x2="${W}" y2="48" stroke="${C.lightGrey}" stroke-width="0.8"/>
    <text x="42" y="34" font-size="14" font-weight="800" fill="${C.black}">motadata</text>
    <text x="${W - 42}" y="34" font-size="6.5" font-weight="600" fill="${C.grey}" text-anchor="end" letter-spacing="1.2">CORE CAPABILITIES</text>
    <text x="42" y="76" font-size="12" font-weight="800" fill="${C.black}" letter-spacing="0.5">CORE SERVICEOPS CAPABILITIES</text>
    <line x1="310" y1="73" x2="${W - 42}" y2="73" stroke="${C.lightGrey}" stroke-width="0.8"/>
    ${[
      { t: "Service Desk (ITSM Core)", bs: ["Multi-channel ticket intake", "AI-powered triage", "Incident/problem/change/release mgmt", "SLA tracking & escalation"] },
      { t: "Service Request & Self-Service", bs: ["Service catalog workflows", "Multi-level approvals", "AI recommendations", "Self-service portal"] },
      { t: "Problem & Change Management", bs: ["AI incident clustering", "Known Error Database", "CAB approvals", "Conflict detection"] },
      { t: "IT Asset Management (ITAM & CMDB)", bs: ["Agent/agentless discovery", "HW, SW, mobile inventory", "License compliance", "CMDB relationship mapping"] },
      { t: "Patch & Endpoint Management", bs: ["Auto patch deployment", "Vulnerability detection", "Multi-OS support", "3rd-party patching"] },
      { t: "Endpoint Security & Compliance", bs: ["Risk-based prioritization", "Compliance reporting", "Air-gapped support", "Security dashboards"] },
    ].map((cap, i) => {
      const col = i % 2;
      const row = Math.floor(i / 2);
      const x = 42 + col * 260;
      const y = 92 + row * 110;
      return `<g>
        <rect x="${x}" y="${y}" width="248" height="100" rx="1" fill="${C.white}" stroke="${C.lightGrey}" stroke-width="0.8"/>
        <rect x="${x}" y="${y}" width="3" height="100" fill="${C.accent}"/>
        <text x="${x + 14}" y="${y + 16}" font-size="8.5" font-weight="700" fill="${C.black}">${cap.t}</text>
        ${cap.bs.map((b, j) => `<g>
          <rect x="${x + 14}" y="${y + 28 + j * 14}" width="4" height="4" rx="1" fill="${C.accent}"/>
          <text x="${x + 24}" y="${y + 32 + j * 14}" font-size="7" fill="${C.text}">${b}</text>
        </g>`).join("")}
      </g>`;
    }).join("\n    ")}
    <text x="${W - 42}" y="${pageH - 20}" font-size="7" font-weight="500" fill="${C.grey}" text-anchor="end" letter-spacing="1">03 / 04</text>
    <rect y="${pageH - 3}" width="${W}" height="3" fill="${C.accent}"/>
  </g>

  <!-- PAGE 4: AI, USE CASES, CTA -->
  <g id="P4" transform="translate(0,${pageH * 3})">
    <rect width="${W}" height="${pageH}" fill="${C.white}"/>
    <line x1="0" y1="48" x2="${W}" y2="48" stroke="${C.lightGrey}" stroke-width="0.8"/>
    <text x="42" y="34" font-size="14" font-weight="800" fill="${C.black}">motadata</text>
    <text x="${W - 42}" y="34" font-size="6.5" font-weight="600" fill="${C.grey}" text-anchor="end" letter-spacing="1.2">INTELLIGENCE &amp; CTA</text>
    <text x="42" y="76" font-size="12" font-weight="800" fill="${C.black}" letter-spacing="0.5">WHY MOTADATA SERVICEOPS</text>
    <line x1="260" y1="73" x2="${W - 42}" y2="73" stroke="${C.lightGrey}" stroke-width="0.8"/>
    <rect x="42" y="88" width="${W - 84}" height="20" rx="1" fill="${C.black}"/>
    <text x="56" y="101" font-size="7" font-weight="700" fill="${C.white}">Capability</text>
    <text x="370" y="101" font-size="7" font-weight="700" fill="${C.accent}" text-anchor="middle">Motadata</text>
    <text x="490" y="101" font-size="7" font-weight="600" fill="rgba(255,255,255,0.4)" text-anchor="middle">Traditional ITSM</text>
    ${[
      ["ITSM + ITAM + Patch", "Unified", "Separate tools"],
      ["AI across lifecycle", "Native", "Limited"],
      ["CMDB intelligence", "Dynamic", "Static"],
      ["Automation", "No-code, built-in", "Add-on"],
      ["Endpoint + Service integration", "Native", "Disconnected"],
    ].map((r, i) => {
      const y = 110 + i * 18;
      return `<rect x="42" y="${y}" width="${W - 84}" height="18" fill="${i % 2 === 0 ? C.bg : C.white}"/>
      <text x="56" y="${y + 12}" font-size="7" font-weight="600" fill="${C.text}">${r[0]}</text>
      <text x="370" y="${y + 12}" font-size="7" font-weight="700" fill="${C.black}" text-anchor="middle">${r[1]}</text>
      <text x="490" y="${y + 12}" font-size="7" fill="${C.grey}" text-anchor="middle">${r[2]}</text>`;
    }).join("\n    ")}
    <text x="42" y="230" font-size="12" font-weight="800" fill="${C.black}" letter-spacing="0.5">KEY USE CASES</text>
    <line x1="180" y1="227" x2="${W - 42}" y2="227" stroke="${C.lightGrey}" stroke-width="0.8"/>
    ${[
      "End-to-End IT Service Management",
      "Asset & License Optimization",
      "Endpoint Security & Patch Compliance",
      "Automation-Driven IT Operations",
      "MSP Service Delivery",
    ].map((uc, i) => {
      const y = 248 + i * 18;
      return `<rect x="42" y="${y}" width="4" height="4" rx="1" fill="${C.accent}"/>
      <text x="54" y="${y + 3}" font-size="8" font-weight="600" fill="${C.black}">${uc}</text>`;
    }).join("\n    ")}
    <rect x="42" y="360" width="${W - 84}" height="80" rx="1" fill="${C.black}"/>
    <text x="${W / 2}" y="388" font-size="14" font-weight="800" fill="${C.white}" text-anchor="middle">Get Started</text>
    <text x="${W / 2}" y="404" font-size="8" fill="rgba(255,255,255,0.5)" text-anchor="middle">Transform your IT operations into intelligent, automated service delivery.</text>
    ${["Book a Demo", "Start Free Trial", "Contact Sales"].map((cta, i) => {
      const x = W / 2 - 130 + i * 110;
      const fill = i === 0;
      return `<rect x="${x}" y="416" width="100" height="18" rx="1" fill="${fill ? C.accent : "none"}" ${fill ? "" : `stroke="rgba(255,255,255,0.2)" stroke-width="0.8"`}/>
      <text x="${x + 50}" y="428" font-size="7.5" font-weight="700" fill="${fill ? C.white : "rgba(255,255,255,0.6)"}" text-anchor="middle">${cta}</text>`;
    }).join("\n    ")}
    <text x="42" y="${pageH - 20}" font-size="6.5" font-weight="500" fill="${C.grey}" letter-spacing="1.2">OBSERVE. SERVE. EVOLVE.</text>
    <text x="${W - 42}" y="${pageH - 20}" font-size="7" font-weight="500" fill="${C.grey}" text-anchor="end" letter-spacing="1">04 / 04</text>
    <rect y="${pageH - 3}" width="${W}" height="3" fill="${C.accent}"/>
  </g>

</svg>`;
}

/* ═══════════════════════════════════════════════════════════════════════
   DOWNLOAD HANDLERS
   ═══════════════════════════════════════════════════════════════════════ */
function downloadBlob(content: string, filename: string, mime: string) {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/* ═══════════════════════════════════════════════════════════════════════
   MAIN EXPORT
   ═══════════════════════════════════════════════════════════════════════ */
export function ServiceOpsBrochureContent() {
  const handlePrint = useCallback(() => window.print(), []);

  const handleDownloadSVG = useCallback(() => {
    const svg = generateIllustratorSVG();
    downloadBlob(svg, "Motadata-ServiceOps-Brochure.svg", "image/svg+xml");
  }, []);

  const handleDownloadAI = useCallback(() => {
    const svg = generateIllustratorSVG();
    downloadBlob(svg, "Motadata-ServiceOps-Brochure.ai", "application/illustrator");
  }, []);

  return (
    <section className="relative z-10 py-20">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-6 text-center mb-12">
        <span style={{ display: "inline-block", padding: "6px 16px", border: `1px solid ${C.lightGrey}`, borderRadius: 2, fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: C.text, marginBottom: 16 }}>
          Product Brochure
        </span>
        <h1 style={{ fontSize: 36, fontWeight: 800, letterSpacing: "-0.02em", color: C.black }}>
          ServiceOps Brochure
        </h1>
        <p style={{ marginTop: 12, fontSize: 16, color: C.muted, maxWidth: 520, marginLeft: "auto", marginRight: "auto" }}>
          Professional A4 brochure — minimalist monochrome design with all content preserved identically in PDF and Illustrator formats.
        </p>

        {/* Action buttons */}
        <div style={{ marginTop: 28, display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 12 }}>
          <button onClick={handlePrint} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 24px", borderRadius: 2, background: C.black, color: C.white, fontSize: 13, fontWeight: 600, border: "none", cursor: "pointer" }}>
            {Icons.printer(C.white)}
            Print / Save as PDF
          </button>
          <button onClick={handleDownloadSVG} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 24px", borderRadius: 2, background: C.white, color: C.black, fontSize: 13, fontWeight: 600, border: `1px solid ${C.lightGrey}`, cursor: "pointer" }}>
            {Icons.download(C.black)}
            Download SVG
          </button>
          <button onClick={handleDownloadAI} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 24px", borderRadius: 2, background: C.white, color: "#FF9A00", fontSize: 13, fontWeight: 600, border: "1px solid #FFD89920", cursor: "pointer" }}>
            {Icons.illustrator()}
            Download .ai
          </button>
        </div>
      </div>

      {/* A4 Pages */}
      <div className="flex flex-col items-center gap-10 brochure-pages">
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
      </div>

      {/* Print styles */}
      <style>{`
        @media print {
          *, *::before, *::after {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
          html, body { margin: 0 !important; padding: 0 !important; }
          body > * { display: none !important; }
          body > main, body > div > main { display: block !important; }
          main > * { display: none !important; }
          main > section { display: block !important; }
          section > * { display: none !important; }
          section > .brochure-pages { display: flex !important; }
          nav, footer, header,
          [class*="interactive-grid"],
          [class*="ThemeSwitcher"],
          [class*="theme-switcher"] { display: none !important; }
          .brochure-pages { gap: 0 !important; padding: 0 !important; margin: 0 !important; }
          .a4-page {
            width: 210mm !important; height: 297mm !important;
            min-height: 297mm !important; max-height: 297mm !important;
            box-shadow: none !important; margin: 0 !important;
            page-break-after: always !important; page-break-inside: avoid !important;
            break-after: page !important; break-inside: avoid !important;
          }
          .a4-page:last-child { page-break-after: auto !important; break-after: auto !important; }
          @page { size: 210mm 297mm; margin: 0; }
        }
      `}</style>
    </section>
  );
}
