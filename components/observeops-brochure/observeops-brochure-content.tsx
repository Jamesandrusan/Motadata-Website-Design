"use client";

import { useCallback } from "react";

/* ─── Motadata ObserveOps – Professional A4 Brochure (4 pages) ──────
   210 mm × 297 mm per page — enterprise SaaS monitoring brochure.
   All backgrounds, colours, icons, and visualizations render
   identically in browser preview AND in PDF/print output.
   Includes Illustrator-editable SVG download (.ai-compatible).
   ──────────────────────────────────────────────────────────────────── */

const B = {
  primary: "#f17463",
  primaryDark: "#d9574a",
  primaryLight: "#fde8e4",
  primaryGlow: "#f1746320",
  dark: "#0f172a",
  darkAlt: "#1e293b",
  darkCard: "#1a2640",
  text: "#334155",
  muted: "#64748b",
  light: "#f8fafc",
  lighter: "#f1f5f9",
  border: "#e2e8f0",
  white: "#ffffff",
  green: "#22c55e",
  blue: "#3b82f6",
  purple: "#8b5cf6",
  amber: "#f59e0b",
  cyan: "#06b6d4",
  logoDark: "https://www.motadata.com/wp-content/uploads/2022/07/motadata-logo.png",
  logoWhite: "https://www.motadata.com/wp-content/uploads/2022/07/motadata-logo-white.png",
};

/* ═══════════════════════════════════════════════════════════════════════
   INLINE SVG ICONS — editable vector shapes
   ═══════════════════════════════════════════════════════════════════════ */
const Icons = {
  server: (c = B.primary, s = 20) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="8" rx="2" /><rect x="2" y="14" width="20" height="8" rx="2" />
      <circle cx="6" cy="6" r="1" fill={c} /><circle cx="6" cy="18" r="1" fill={c} />
      <line x1="10" y1="6" x2="18" y2="6" /><line x1="10" y1="18" x2="18" y2="18" />
    </svg>
  ),
  app: (c = B.primary, s = 20) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      <line x1="14" y1="4" x2="10" y2="20" opacity="0.5" />
    </svg>
  ),
  network: (c = B.primary, s = 20) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="3" /><circle cx="5" cy="19" r="3" /><circle cx="19" cy="19" r="3" />
      <line x1="12" y1="8" x2="5" y2="16" /><line x1="12" y1="8" x2="19" y2="16" />
      <line x1="5" y1="19" x2="19" y2="19" opacity="0.4" />
    </svg>
  ),
  log: (c = B.primary, s = 20) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14 2 14 8 20 8" /><line x1="8" y1="13" x2="16" y2="13" /><line x1="8" y1="17" x2="13" y2="17" />
    </svg>
  ),
  user: (c = B.primary, s = 20) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" />
    </svg>
  ),
  target: (c = B.primary, s = 20) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" fill={c} />
    </svg>
  ),
  brain: (c = B.primary, s = 20) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a5 5 0 015 5c0 .8-.2 1.5-.5 2.2A5 5 0 0120 14a5 5 0 01-4 4.9V22h-8v-3.1A5 5 0 014 14a5 5 0 013.5-4.8A4.8 4.8 0 017 7a5 5 0 015-5z" />
      <path d="M12 2v20" opacity="0.3" /><circle cx="9" cy="9" r="1" fill={c} /><circle cx="15" cy="9" r="1" fill={c} />
    </svg>
  ),
  bell: (c = B.primary, s = 20) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 01-3.46 0" />
    </svg>
  ),
  chart: (c = B.primary, s = 20) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
      <line x1="2" y1="20" x2="22" y2="20" opacity="0.3" />
    </svg>
  ),
  gear: (c = B.primary, s = 20) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
    </svg>
  ),
  shield: (c = B.primary, s = 20) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" />
    </svg>
  ),
  flow: (c = B.primary, s = 20) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
  layers: (c = B.primary, s = 20) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" />
    </svg>
  ),
  zap: (c = B.primary, s = 20) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill={c} stroke="none"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
  ),
  check: (c = B.primary, s = 16) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  x: (c = B.muted, s = 16) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
  download: (c = "currentColor", s = 18) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  ),
  printer: (c = "currentColor", s = 18) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 6 2 18 2 18 9" /><path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" /><rect x="6" y="14" width="12" height="8" />
    </svg>
  ),
  illustrator: (c = "#FF9A00", s = 18) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill={c}>
      <path d="M10.53 10.73c-.1-.31-.19-.61-.29-.92-.1-.31-.18-.6-.27-.89h-.03c-.08.3-.17.6-.27.9l-.28.91-1.73 5.53h4.58l-1.71-5.53zm-5.48 9.27h3.07l1.02-3.3h5.11l.98 3.3h3.23L13.27 4H10.9L5.05 20zM19 4h-2.5v16H19V4z"/>
    </svg>
  ),
};

/* ═══════════════════════════════════════════════════════════════════════
   INLINE SVG PATTERNS — tech-grid, circuit, hex, dots
   ═══════════════════════════════════════════════════════════════════════ */
function TechGridPattern({ color = "rgba(241,116,99,0.06)", dark }: { color?: string; dark?: boolean }) {
  const c = dark ? "rgba(255,255,255,0.04)" : color;
  const c2 = dark ? "rgba(241,116,99,0.08)" : "rgba(241,116,99,0.04)";
  return (
    <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
      <defs>
        <pattern id={`tg-${dark ? "d" : "l"}`} width="48" height="48" patternUnits="userSpaceOnUse">
          <path d="M48 0H0v48" fill="none" stroke={c} strokeWidth="0.5" />
          <circle cx="0" cy="0" r="1.5" fill={c2} /><circle cx="48" cy="0" r="1.5" fill={c2} />
          <circle cx="0" cy="48" r="1.5" fill={c2} /><circle cx="48" cy="48" r="1.5" fill={c2} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#tg-${dark ? "d" : "l"})`} />
    </svg>
  );
}

function HexPattern({ dark }: { dark?: boolean }) {
  const c = dark ? "rgba(241,116,99,0.06)" : "rgba(241,116,99,0.05)";
  return (
    <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
      <defs>
        <pattern id={`hex-${dark ? "d" : "l"}`} width="56" height="100" patternUnits="userSpaceOnUse" patternTransform="scale(0.8)">
          <path d="M28 2L54 18V50L28 66L2 50V18Z" fill="none" stroke={c} strokeWidth="0.8" />
          <path d="M28 68L54 84V116L28 132L2 116V84Z" fill="none" stroke={c} strokeWidth="0.8" transform="translate(28,-34)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#hex-${dark ? "d" : "l"})`} />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   DATA VISUALIZATION COMPONENTS
   ═══════════════════════════════════════════════════════════════════════ */
function MiniBarChart({ data, height = 40, width = 100 }: { data: number[]; height?: number; width?: number }) {
  const max = Math.max(...data);
  const barW = width / data.length - 3;
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      {data.map((v, i) => {
        const h = (v / max) * (height - 4);
        return (
          <rect
            key={i}
            x={i * (barW + 3) + 1}
            y={height - h}
            width={barW}
            height={h}
            rx={2}
            fill={i === data.length - 1 ? B.primary : `${B.primary}40`}
          />
        );
      })}
    </svg>
  );
}

function MiniLineChart({ height = 36, width = 90 }: { height?: number; width?: number }) {
  const pts = [28, 18, 30, 14, 22, 8, 12, 6, 16, 4];
  const maxY = Math.max(...pts);
  const points = pts.map((v, i) => `${(i / (pts.length - 1)) * width},${height - 4 - ((v / maxY) * (height - 8))}`).join(" ");
  const areaPoints = `0,${height} ${points} ${width},${height}`;
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <polygon points={areaPoints} fill={`${B.primary}12`} />
      <polyline points={points} fill="none" stroke={B.primary} strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx={width} cy={height - 4 - ((pts[pts.length - 1] / maxY) * (height - 8))} r="2.5" fill={B.primary} />
    </svg>
  );
}

function RadialProgress({ pct, size = 44, label, color = B.primary }: { pct: number; size?: number; label: string; color?: string }) {
  const r = (size - 6) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (pct / 100) * circ;
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={`${color}18`} strokeWidth="4" />
        <circle
          cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth="4"
          strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
        <text x={size / 2} y={size / 2 + 1} textAnchor="middle" dominantBaseline="middle" fill={color} fontSize="10" fontWeight="700">
          {pct}%
        </text>
      </svg>
      <span style={{ fontSize: 7, color: B.muted, textAlign: "center", lineHeight: 1.2, maxWidth: 55 }}>{label}</span>
    </div>
  );
}

function PipelineArrow() {
  return (
    <svg width="20" height="16" viewBox="0 0 20 16" style={{ flexShrink: 0 }}>
      <defs>
        <linearGradient id="arr-g" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={`${B.primary}40`} /><stop offset="100%" stopColor={B.primary} />
        </linearGradient>
      </defs>
      <path d="M0 8h14M12 4l6 4-6 4" fill="none" stroke="url(#arr-g)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   LAYOUT HELPERS
   ═══════════════════════════════════════════════════════════════════════ */
const F = "'Plus Jakarta Sans', Arial, Helvetica, sans-serif";

function A4({ children, bg, id }: { children: React.ReactNode; bg?: string; id?: string }) {
  return (
    <div id={id} className="a4-page" style={{ width: "210mm", minHeight: "297mm", maxHeight: "297mm", background: bg || B.white, fontFamily: F, color: B.text, fontSize: 11, lineHeight: 1.55, position: "relative", overflow: "hidden", boxShadow: "0 4px 40px rgba(0,0,0,0.15)", pageBreakAfter: "always", pageBreakInside: "avoid", WebkitPrintColorAdjust: "exact", printColorAdjust: "exact" } as React.CSSProperties}>
      {children}
    </div>
  );
}

function PageNum({ n, light }: { n: number; light?: boolean }) {
  return (
    <div style={{ position: "absolute", bottom: 16, right: 32, display: "flex", alignItems: "center", gap: 6 }}>
      <div style={{ width: 16, height: 1, background: light ? "rgba(255,255,255,0.2)" : B.border }} />
      <span style={{ fontSize: 8, color: light ? "rgba(255,255,255,0.4)" : B.muted, fontWeight: 600, letterSpacing: "0.1em" }}>{String(n).padStart(2, "0")} / 04</span>
    </div>
  );
}

function BottomStrip() {
  return <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 5, background: `linear-gradient(90deg, ${B.primary}, ${B.primaryDark}, ${B.primary})` }} />;
}

function HeaderBar({ right, dark }: { right: string; dark?: boolean }) {
  return (
    <div style={{ padding: "20px 38px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: dark ? "1px solid rgba(255,255,255,0.06)" : `1px solid ${B.border}` }}>
      <img src={dark ? B.logoWhite : B.logoDark} alt="Motadata" style={{ height: 20 }} crossOrigin="anonymous" />
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{ width: 20, height: 2, background: B.primary, borderRadius: 1 }} />
        <span style={{ fontSize: 8, fontWeight: 700, color: dark ? "rgba(255,255,255,0.4)" : B.muted, letterSpacing: "0.12em", textTransform: "uppercase" }}>{right}</span>
      </div>
    </div>
  );
}

function SectionHead({ children, icon }: { children: React.ReactNode; icon?: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
      {icon && <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 26, height: 26, borderRadius: 6, background: `${B.primary}10` }}>{icon}</div>}
      <h3 style={{ fontSize: 14, fontWeight: 800, color: B.dark, textTransform: "uppercase", letterSpacing: "0.04em", margin: 0 }}>{children}</h3>
      <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${B.primary}40, transparent)`, marginLeft: 4 }} />
    </div>
  );
}

function SectionHeadLight({ children, icon }: { children: React.ReactNode; icon?: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
      {icon && <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 26, height: 26, borderRadius: 6, background: "rgba(241,116,99,0.15)" }}>{icon}</div>}
      <h3 style={{ fontSize: 14, fontWeight: 800, color: B.white, textTransform: "uppercase", letterSpacing: "0.04em", margin: 0 }}>{children}</h3>
      <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, rgba(241,116,99,0.4), transparent)", marginLeft: 4 }} />
    </div>
  );
}

function Bullet({ children, color = B.primary }: { children: React.ReactNode; color?: string }) {
  return (
    <li style={{ display: "flex", alignItems: "flex-start", gap: 7, marginBottom: 3.5 }}>
      <svg width="6" height="6" viewBox="0 0 6 6" style={{ flexShrink: 0, marginTop: 5 }}><rect width="6" height="6" rx="1.5" fill={color} /></svg>
      <span>{children}</span>
    </li>
  );
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 7, padding: "6px 10px", background: B.light, borderRadius: 5, border: `1px solid ${B.border}` }}>
      <div style={{ width: 16, height: 16, borderRadius: 4, background: `${B.primary}12`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        {Icons.check(B.primary, 10)}
      </div>
      <span style={{ fontSize: 9, color: B.text }}>{children}</span>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   PAGE 1 — COVER
   ═══════════════════════════════════════════════════════════════════════ */
function Page1() {
  return (
    <A4 bg={B.dark} id="bp1">
      {/* Background patterns */}
      <HexPattern dark />
      <TechGridPattern dark />

      {/* Decorative orbs */}
      <div style={{ position: "absolute", top: -80, right: -80, width: 320, height: 320, borderRadius: "50%", background: `radial-gradient(circle, ${B.primary}12, transparent 65%)`, pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: -60, left: -80, width: 240, height: 240, borderRadius: "50%", background: `radial-gradient(circle, ${B.blue}08, transparent 65%)`, pointerEvents: "none" }} />

      {/* Accent corner lines */}
      <svg style={{ position: "absolute", top: 0, right: 0, pointerEvents: "none" }} width="180" height="180" viewBox="0 0 180 180">
        <line x1="180" y1="0" x2="80" y2="100" stroke={`${B.primary}15`} strokeWidth="1" />
        <line x1="180" y1="0" x2="100" y2="80" stroke={`${B.primary}10`} strokeWidth="1" />
        <circle cx="80" cy="100" r="3" fill={`${B.primary}30`} />
      </svg>

      {/* Top bar */}
      <div style={{ padding: "30px 38px 0", position: "relative", zIndex: 1, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <img src={B.logoWhite} alt="Motadata" style={{ height: 26 }} crossOrigin="anonymous" />
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 8, color: "rgba(255,255,255,0.35)", letterSpacing: "0.12em", fontWeight: 600, textTransform: "uppercase" }}>Product Brochure 2025</span>
          <div style={{ width: 24, height: 2, background: B.primary, borderRadius: 1 }} />
        </div>
      </div>

      {/* Hero content */}
      <div style={{ position: "relative", zIndex: 1, padding: "58px 38px 0" }}>
        {/* Accent line */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
          <div style={{ width: 48, height: 3, borderRadius: 2, background: `linear-gradient(90deg, ${B.primary}, ${B.primaryDark})` }} />
          <span style={{ fontSize: 9, color: B.primary, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>ObserveOps Platform</span>
        </div>

        <h1 style={{ fontSize: 42, fontWeight: 800, color: B.white, lineHeight: 1.15, marginBottom: 6, letterSpacing: "-0.02em" }}>
          Motadata
        </h1>
        <h1 style={{ fontSize: 42, fontWeight: 800, lineHeight: 1.15, marginBottom: 16, letterSpacing: "-0.02em", background: `linear-gradient(135deg, ${B.primary}, #ff9a76)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } as React.CSSProperties}>
          Unified Observability
        </h1>

        <p style={{ fontSize: 14.5, color: "rgba(255,255,255,0.6)", lineHeight: 1.65, maxWidth: "80%", marginBottom: 28 }}>
          Full-stack, AI-driven observability across infrastructure, applications, networks, logs, and user experience.
        </p>

        {/* Capability pills */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          {[
            { label: "Infrastructure", icon: Icons.server("rgba(255,255,255,0.7)", 12) },
            { label: "Applications", icon: Icons.app("rgba(255,255,255,0.7)", 12) },
            { label: "Network", icon: Icons.network("rgba(255,255,255,0.7)", 12) },
            { label: "Logs", icon: Icons.log("rgba(255,255,255,0.7)", 12) },
            { label: "RUM", icon: Icons.user("rgba(255,255,255,0.7)", 12) },
          ].map((t) => (
            <span key={t.label} style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "5px 14px", borderRadius: 20, border: `1px solid ${B.primary}35`, background: `${B.primary}08`, color: "rgba(255,255,255,0.7)", fontSize: 9, fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase" }}>
              {t.icon}{t.label}
            </span>
          ))}
        </div>
      </div>

      {/* Stats bar */}
      <div style={{ position: "relative", zIndex: 1, margin: "0 38px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 24 }}>
        {[
          { num: "99.9%", label: "Uptime SLA", icon: Icons.shield(B.primary, 14) },
          { num: "10x", label: "Faster MTTR", icon: Icons.zap(B.primary, 14) },
          { num: "50K+", label: "Metrics/sec", icon: Icons.flow(B.primary, 14) },
          { num: "500+", label: "Integrations", icon: Icons.layers(B.primary, 14) },
        ].map((s) => (
          <div key={s.label} style={{ padding: "14px 16px", borderRadius: 10, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", backdropFilter: "blur(8px)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>{s.icon}</div>
            <div style={{ fontSize: 22, fontWeight: 800, color: B.white, letterSpacing: "-0.02em", lineHeight: 1 }}>{s.num}</div>
            <div style={{ fontSize: 8, color: "rgba(255,255,255,0.4)", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", marginTop: 4 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Executive overview */}
      <div style={{ position: "relative", zIndex: 1, margin: "0 38px", padding: "20px 24px", background: "rgba(255,255,255,0.03)", borderRadius: 10, border: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
          <div style={{ width: 5, height: 16, borderRadius: 2, background: B.primary }} />
          <h3 style={{ fontSize: 11, fontWeight: 700, color: B.primary, textTransform: "uppercase", letterSpacing: "0.08em", margin: 0 }}>Executive Overview</h3>
        </div>
        <p style={{ fontSize: 9.5, color: "rgba(255,255,255,0.55)", lineHeight: 1.65, marginBottom: 10 }}>
          Modern IT environments generate massive volumes of telemetry. Motadata eliminates tool silos by delivering a single, AI-powered platform that unifies metrics, logs, traces, flows, and real user data into a cohesive operational intelligence layer.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px 14px" }}>
          {["Detect anomalies in real time", "Correlate signals across domains", "Identify root cause with precision", "Automate response workflows"].map((t) => (
            <div key={t} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 9, color: "rgba(255,255,255,0.65)" }}>
              <div style={{ width: 14, height: 14, borderRadius: 3, background: `${B.primary}15`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{Icons.check(B.primary, 8)}</div>
              {t}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div style={{ position: "absolute", bottom: 20, left: 38, zIndex: 1, display: "flex", alignItems: "center", gap: 12 }}>
        <p style={{ fontSize: 9, color: "rgba(255,255,255,0.25)", letterSpacing: "0.12em", fontWeight: 600 }}>OBSERVE. SERVE. EVOLVE.</p>
        <div style={{ width: 30, height: 1, background: "rgba(255,255,255,0.1)" }} />
        <p style={{ fontSize: 8, color: "rgba(255,255,255,0.2)" }}>www.motadata.com</p>
      </div>

      <PageNum n={1} light />
      <BottomStrip />
    </A4>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   PAGE 2 — ARCHITECTURE & DIFFERENTIATORS
   ═══════════════════════════════════════════════════════════════════════ */
function Page2() {
  return (
    <A4 id="bp2">
      <TechGridPattern />
      <HeaderBar right="Architecture" />

      <div style={{ padding: "20px 38px 0" }}>
        <SectionHead icon={Icons.layers(B.primary, 14)}>Unified Observability Architecture</SectionHead>
        <p style={{ fontSize: 10, lineHeight: 1.6, marginBottom: 14, color: B.text }}>
          Built on a pipeline-first architecture ensuring continuous data flow and contextual intelligence across all observability signals.
        </p>

        {/* Pipeline flow */}
        <div style={{ background: `linear-gradient(135deg, ${B.dark}, ${B.darkAlt})`, borderRadius: 10, padding: "16px 20px", marginBottom: 14, position: "relative", overflow: "hidden" }}>
          <HexPattern dark />
          <div style={{ position: "relative", zIndex: 1 }}>
            <p style={{ fontSize: 8, color: B.primary, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>Continuous Observability Pipeline</p>
            <div style={{ display: "flex", alignItems: "center", gap: 4, flexWrap: "wrap" }}>
              {[
                { step: "Ingestion", icon: Icons.download(B.primary, 10) },
                { step: "Parsing", icon: Icons.log(B.primary, 10) },
                { step: "Enrichment", icon: Icons.layers(B.primary, 10) },
                { step: "Normalization", icon: Icons.gear(B.primary, 10) },
                { step: "Detection", icon: Icons.brain(B.primary, 10) },
                { step: "Action", icon: Icons.zap(B.primary, 10) },
              ].map((s, i, arr) => (
                <span key={s.step} style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "5px 12px", borderRadius: 6, background: "rgba(241,116,99,0.12)", border: "1px solid rgba(241,116,99,0.15)" }}>
                    {s.icon}
                    <span style={{ color: B.primary, fontSize: 9, fontWeight: 600 }}>{s.step}</span>
                  </span>
                  {i < arr.length - 1 && <PipelineArrow />}
                </span>
              ))}
            </div>
            <p style={{ fontSize: 9, color: "rgba(255,255,255,0.45)", marginTop: 8, lineHeight: 1.5 }}>
              Unified pipeline — no data silos — metrics, logs, traces, flows, events, and configurations processed consistently.
            </p>
          </div>
        </div>

        {/* Three architecture pillars */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 16 }}>
          {[
            { title: "Multi-Source Telemetry", icon: Icons.server(B.primary, 16), color: B.primary, items: ["Metrics, logs, traces, flows, events", "Agent, agentless & API collection", "On-prem, cloud, and containers"] },
            { title: "AI-Powered Intelligence", icon: Icons.brain(B.blue, 16), color: B.blue, items: ["Anomaly detection & baselining", "Pattern recognition across signals", "Forecasting & trend prediction"] },
            { title: "Visualization & Action", icon: Icons.chart(B.purple, 16), color: B.purple, items: ["Real-time dashboards & analytics", "Policy-driven alerting", "Automated runbooks & workflows"] },
          ].map((bl) => (
            <div key={bl.title} style={{ padding: "14px 14px", background: B.light, borderRadius: 8, border: `1px solid ${B.border}`, borderTop: `3px solid ${bl.color}` }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
                <div style={{ width: 28, height: 28, borderRadius: 6, background: `${bl.color}10`, display: "flex", alignItems: "center", justifyContent: "center" }}>{bl.icon}</div>
                <h4 style={{ fontSize: 9.5, fontWeight: 700, color: B.dark, margin: 0 }}>{bl.title}</h4>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {bl.items.map((it) => (<Bullet key={it} color={bl.color}><span style={{ fontSize: 8.5, color: B.text }}>{it}</span></Bullet>))}
              </ul>
            </div>
          ))}
        </div>

        {/* Key Differentiators */}
        <SectionHead icon={Icons.zap(B.primary, 14)}>Key Differentiators</SectionHead>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 10 }}>
          {[
            { title: "True Full-Stack Observability", desc: "Monitor infrastructure, apps, networks, logs, and UX in one native platform.", icon: Icons.layers(B.primary, 16) },
            { title: "Pipeline-First Intelligence", desc: "Continuous stage-driven pipeline enables deeper correlation and faster insights.", icon: Icons.flow(B.blue, 16) },
            { title: "AI-Driven Noise Reduction", desc: "Log pattern intelligence and behavior-aware alerting minimize false positives.", icon: Icons.brain(B.purple, 16) },
            { title: "Deep Network Visibility", desc: "Unified NetFlow, NetRoute, traps, and SLO for complete network observability.", icon: Icons.network(B.cyan, 16) },
            { title: "Closed-Loop Observability", desc: "Detect → Analyze → Act through integrated automation and runbooks.", icon: Icons.gear(B.amber, 16) },
            { title: "Vendor-Agnostic Hybrid", desc: "Multi-vendor, hybrid environments without dependency constraints.", icon: Icons.shield(B.green, 16) },
          ].map((d) => (
            <div key={d.title} style={{ display: "flex", gap: 10, padding: "10px 12px", borderRadius: 8, background: B.white, border: `1px solid ${B.border}`, boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: B.light, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: `1px solid ${B.border}` }}>{d.icon}</div>
              <div>
                <h4 style={{ fontSize: 9.5, fontWeight: 700, color: B.dark, marginBottom: 2 }}>{d.title}</h4>
                <p style={{ fontSize: 8, color: B.muted, lineHeight: 1.45 }}>{d.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mini metrics strip */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 20px", background: `linear-gradient(135deg, ${B.dark}, ${B.darkAlt})`, borderRadius: 8 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <RadialProgress pct={95} label="Noise Reduced" color={B.primary} size={40} />
            <RadialProgress pct={80} label="Faster MTTR" color={B.blue} size={40} />
            <RadialProgress pct={99} label="Uptime" color={B.green} size={40} />
          </div>
          <div style={{ textAlign: "right" }}>
            <MiniLineChart width={120} height={36} />
            <span style={{ fontSize: 7, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Anomaly Detection Trend</span>
          </div>
        </div>
      </div>

      <PageNum n={2} />
      <BottomStrip />
    </A4>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   PAGE 3 — CORE CAPABILITIES
   ═══════════════════════════════════════════════════════════════════════ */
function Page3() {
  const caps = [
    { title: "Hybrid Infrastructure Monitoring", icon: Icons.server, color: B.primary, desc: "Unified visibility across servers, VMs, containers, cloud, storage, and network.", bullets: ["Automated discovery & inventory", "Deep performance metrics (CPU, memory, disk)", "Synthetic monitoring & API validation", "Agent and agentless collection"], chart: <MiniBarChart data={[5, 8, 6, 9, 7, 12, 10]} height={32} width={80} /> },
    { title: "Application Performance Monitoring", icon: Icons.app, color: B.blue, desc: "Deep visibility into application behaviour through distributed tracing.", bullets: ["End-to-end trace & span analysis", "API endpoint performance monitoring", "Service dependency mapping", "JVM and runtime diagnostics"], chart: <MiniLineChart height={32} width={80} /> },
    { title: "Log Monitoring & Intelligence", icon: Icons.log, color: B.purple, desc: "Transform high-volume, unstructured logs into structured, actionable insights.", bullets: ["Unified log ingestion & parsing pipeline", "Pattern detection & noise reduction", "Facet-based search & filtering", "Log-based alerting & metrics"], chart: <MiniBarChart data={[12, 10, 8, 6, 4, 3, 2]} height={32} width={80} /> },
    { title: "Network Observability", icon: Icons.network, color: B.cyan, desc: "Complete visibility into network performance, traffic, and service-levels.", bullets: ["Flow monitoring (NetFlow, sFlow, IPFIX)", "NetRoute path analysis with hop-level", "SNMP trap monitoring & routing", "Bandwidth and traffic analytics"], chart: <MiniLineChart height={32} width={80} /> },
    { title: "Real User Monitoring (RUM)", icon: Icons.user, color: B.amber, desc: "Understand real user experience from browsers and client environments.", bullets: ["Core Web Vitals (LCP, FCP, CLS, INP)", "Session-level diagnostics & journeys", "Error tracking & frustration signals", "Global & device-level insights"], chart: <MiniBarChart data={[3, 5, 4, 7, 6, 9, 8]} height={32} width={80} /> },
    { title: "SLO & Service Reliability", icon: Icons.target, color: B.green, desc: "Align observability with business objectives through SLO tracking.", bullets: ["Error budget monitoring", "Burn rate & reliability analysis", "SLA/SLO compliance dashboards"], chart: <RadialProgress pct={99} label="SLO Met" color={B.green} size={36} /> },
  ];

  return (
    <A4 id="bp3">
      <TechGridPattern />
      <HeaderBar right="Capabilities" />

      <div style={{ padding: "18px 38px 0" }}>
        <SectionHead icon={Icons.layers(B.primary, 14)}>Core Observability Capabilities</SectionHead>
        <p style={{ fontSize: 10, color: B.text, lineHeight: 1.55, marginBottom: 12 }}>
          End-to-end observability across your entire IT ecosystem — from infrastructure to user experience.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {caps.map((c) => (
            <div key={c.title} style={{ padding: "14px 14px", borderRadius: 8, background: B.white, border: `1px solid ${B.border}`, boxShadow: "0 1px 4px rgba(0,0,0,0.04)", position: "relative", overflow: "hidden" }}>
              {/* Color top accent */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${c.color}, ${c.color}60)` }} />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 30, height: 30, borderRadius: 7, background: `${c.color}10`, display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${c.color}20` }}>
                    {c.icon(c.color, 16)}
                  </div>
                  <h4 style={{ fontSize: 10, fontWeight: 700, color: B.dark, margin: 0, lineHeight: 1.3 }}>{c.title}</h4>
                </div>
                <div style={{ flexShrink: 0 }}>{c.chart}</div>
              </div>
              <p style={{ fontSize: 8.5, color: B.muted, lineHeight: 1.4, marginBottom: 6 }}>{c.desc}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {c.bullets.map((b) => (<Bullet key={b} color={c.color}><span style={{ fontSize: 8, color: B.text }}>{b}</span></Bullet>))}
              </ul>
            </div>
          ))}
        </div>

        {/* Cross-domain insight strip */}
        <div style={{ marginTop: 12, padding: "14px 18px", background: `linear-gradient(135deg, ${B.dark}, ${B.darkAlt})`, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative", overflow: "hidden" }}>
          <HexPattern dark />
          <div style={{ position: "relative", zIndex: 1 }}>
            <h4 style={{ fontSize: 10, fontWeight: 700, color: B.primary, marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.06em" }}>Cross-Domain Correlation</h4>
            <p style={{ fontSize: 8.5, color: "rgba(255,255,255,0.5)", lineHeight: 1.45, maxWidth: 380 }}>
              Infrastructure signals align with logs, network traffic, and application performance — enabling rapid root cause analysis across every layer of your stack.
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, position: "relative", zIndex: 1 }}>
            {[Icons.server, Icons.app, Icons.network, Icons.log, Icons.user].map((Ic, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(241,116,99,0.1)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(241,116,99,0.15)" }}>
                  {Ic(B.primary, 12)}
                </div>
                {i < 4 && <div style={{ width: 10, height: 1, background: `${B.primary}30` }} />}
              </div>
            ))}
          </div>
        </div>
      </div>

      <PageNum n={3} />
      <BottomStrip />
    </A4>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   PAGE 4 — AI, AUTOMATION, USE CASES, COMPARISON & CTA
   ═══════════════════════════════════════════════════════════════════════ */
function Page4() {
  return (
    <A4 id="bp4">
      <TechGridPattern />
      <HeaderBar right="Intelligence & Action" />

      <div style={{ padding: "16px 38px 0" }}>
        {/* AI & Analytics */}
        <SectionHead icon={Icons.brain(B.primary, 14)}>AI &amp; Advanced Analytics</SectionHead>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 14 }}>
          <div style={{ padding: "12px 14px", borderRadius: 8, background: `linear-gradient(135deg, ${B.dark}, ${B.darkAlt})`, position: "relative", overflow: "hidden" }}>
            <HexPattern dark />
            <div style={{ position: "relative", zIndex: 1 }}>
              <h4 style={{ fontSize: 9, fontWeight: 700, color: B.primary, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.06em" }}>Capabilities</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {["Real-time anomaly detection", "Predictive forecasting & capacity planning", "Behavioral baselining", "Pattern-based intelligence"].map((t) => (
                  <Bullet key={t} color={B.primary}><span style={{ fontSize: 8.5, color: "rgba(255,255,255,0.7)" }}>{t}</span></Bullet>
                ))}
              </ul>
              <div style={{ marginTop: 8 }}><MiniLineChart width={140} height={28} /></div>
            </div>
          </div>
          <div style={{ padding: "12px 14px", borderRadius: 8, background: `${B.primary}06`, border: `1px solid ${B.primary}15` }}>
            <h4 style={{ fontSize: 9, fontWeight: 700, color: B.primary, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.06em" }}>Outcomes</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {["Reduced alert noise by up to 95%", "Faster root cause identification", "Proactive issue prevention", "Improved operational efficiency"].map((t) => (
                <Bullet key={t}><span style={{ fontSize: 8.5, color: B.text }}>{t}</span></Bullet>
              ))}
            </ul>
            <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
              <RadialProgress pct={95} label="Noise Cut" color={B.primary} size={36} />
              <RadialProgress pct={80} label="MTTR Drop" color={B.blue} size={36} />
              <RadialProgress pct={70} label="Auto Fixed" color={B.green} size={36} />
            </div>
          </div>
        </div>

        {/* Alerting & Automation */}
        <SectionHead icon={Icons.bell(B.primary, 14)}>Alerting, Automation &amp; Remediation</SectionHead>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 14 }}>
          {["Policy-based alerting with multi-condition logic", "Context-rich alert notifications", "Automated runbooks (API, SSH, scripts, integrations)", "Closed-loop remediation workflows"].map((t) => (
            <CheckItem key={t}>{t}</CheckItem>
          ))}
        </div>

        {/* Use Cases */}
        <div style={{ background: `linear-gradient(135deg, ${B.dark}, ${B.darkAlt})`, borderRadius: 10, padding: "14px 18px", marginBottom: 12, position: "relative", overflow: "hidden" }}>
          <HexPattern dark />
          <div style={{ position: "relative", zIndex: 1 }}>
            <SectionHeadLight icon={Icons.target(B.primary, 14)}>Key Use Cases</SectionHeadLight>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
              {[
                { t: "Full-Stack Incident Mgmt", d: "Correlate logs, metrics, traces & network for rapid RCA", ic: Icons.flow },
                { t: "Network Optimization", d: "Identify bandwidth bottlenecks & route-level issues", ic: Icons.network },
                { t: "Digital Experience", d: "Link frontend UX with backend performance", ic: Icons.user },
                { t: "Capacity Planning", d: "Predict infrastructure & app growth trends", ic: Icons.chart },
                { t: "Compliance & Governance", d: "Leverage logs & config for audit readiness", ic: Icons.shield },
                { t: "Proactive Operations", d: "AI-driven prediction prevents outages before impact", ic: Icons.brain },
              ].map((uc) => (
                <div key={uc.t} style={{ padding: "8px 10px", borderRadius: 6, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 3 }}>
                    {uc.ic(B.primary, 12)}
                    <h4 style={{ fontSize: 8.5, fontWeight: 700, color: B.white, margin: 0 }}>{uc.t}</h4>
                  </div>
                  <p style={{ fontSize: 7.5, color: "rgba(255,255,255,0.4)", lineHeight: 1.35 }}>{uc.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Comparison table */}
        <SectionHead icon={Icons.check(B.primary, 14)}>Why Motadata</SectionHead>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 9, marginBottom: 12, borderRadius: 8, overflow: "hidden" }}>
          <thead>
            <tr style={{ background: B.dark }}>
              <th style={{ padding: "7px 12px", textAlign: "left", color: B.white, fontWeight: 700, fontSize: 8 }}>Capability</th>
              <th style={{ padding: "7px 12px", textAlign: "center", color: B.primary, fontWeight: 700, fontSize: 8 }}>Motadata</th>
              <th style={{ padding: "7px 12px", textAlign: "center", color: "rgba(255,255,255,0.4)", fontWeight: 600, fontSize: 8 }}>Typical Tools</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Full-stack observability", true, "Fragmented"],
              ["Pipeline-driven architecture", true, "No"],
              ["Network + Flow + Route + SLO", true, "Separate tools"],
              ["AI-driven correlation", true, "Add-on"],
              ["Automation & remediation", true, "External"],
            ].map((row, i) => (
              <tr key={row[0] as string} style={{ background: i % 2 === 0 ? B.light : B.white }}>
                <td style={{ padding: "5px 12px", borderBottom: `1px solid ${B.border}`, color: B.text, fontWeight: 600 }}>{row[0] as string}</td>
                <td style={{ padding: "5px 12px", borderBottom: `1px solid ${B.border}`, textAlign: "center" }}>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                    <div style={{ width: 16, height: 16, borderRadius: 4, background: `${B.green}15`, display: "flex", alignItems: "center", justifyContent: "center" }}>{Icons.check(B.green, 10)}</div>
                    <span style={{ color: B.primary, fontWeight: 700 }}>Native</span>
                  </div>
                </td>
                <td style={{ padding: "5px 12px", borderBottom: `1px solid ${B.border}`, textAlign: "center" }}>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                    {Icons.x(B.muted, 10)}
                    <span style={{ color: B.muted }}>{row[2] as string}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* CTA */}
        <div style={{ background: `linear-gradient(135deg, ${B.primary}, ${B.primaryDark})`, borderRadius: 10, padding: "18px 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, opacity: 0.06 }}><HexPattern /></div>
          <div style={{ position: "relative", zIndex: 1 }}>
            <h3 style={{ fontSize: 16, fontWeight: 800, color: B.white, marginBottom: 5 }}>Start Your Journey Toward Intelligent IT Operations</h3>
            <p style={{ fontSize: 9, color: "rgba(255,255,255,0.75)", marginBottom: 12 }}>From ingestion to insight to action — transform how your team monitors, detects, and resolves.</p>
            <div style={{ display: "flex", justifyContent: "center", gap: 10 }}>
              {["Book a Demo", "Start Free Trial", "Contact Sales"].map((cta) => (
                <span key={cta} style={{ padding: "7px 20px", borderRadius: 6, background: B.white, color: B.primaryDark, fontSize: 9, fontWeight: 700, letterSpacing: "0.02em", boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}>{cta}</span>
              ))}
            </div>
            <p style={{ fontSize: 8, color: "rgba(255,255,255,0.5)", marginTop: 10 }}>sales@motadata.com &nbsp;|&nbsp; www.motadata.com</p>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 16, left: 38, display: "flex", alignItems: "center", gap: 8 }}>
        <p style={{ fontSize: 8, color: B.muted, letterSpacing: "0.1em", fontWeight: 600 }}>OBSERVE. SERVE. EVOLVE.</p>
      </div>

      <PageNum n={4} />
      <BottomStrip />
    </A4>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   SVG GENERATION — Illustrator-editable download (.svg → openable as .ai)
   ═══════════════════════════════════════════════════════════════════════ */
function generateIllustratorSVG(): string {
  const W = 595.28; // A4 width in pt
  const H = 841.89; // A4 height in pt
  const pageH = H;
  const totalH = pageH * 4;

  // Build a comprehensive editable SVG with all 4 pages stacked
  return `<?xml version="1.0" encoding="UTF-8"?>
<!-- Motadata ObserveOps Brochure — Editable in Adobe Illustrator -->
<!-- Open this file in Illustrator for full vector editing capability -->
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
     viewBox="0 0 ${W} ${totalH}" width="${W}pt" height="${totalH}pt"
     style="font-family:'Plus Jakarta Sans',Arial,Helvetica,sans-serif">

  <defs>
    <!-- Brand gradients -->
    <linearGradient id="brand-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${B.primary}"/>
      <stop offset="100%" stop-color="${B.primaryDark}"/>
    </linearGradient>
    <linearGradient id="brand-grad-h" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${B.primary}"/>
      <stop offset="100%" stop-color="${B.primaryDark}"/>
    </linearGradient>
    <linearGradient id="dark-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${B.dark}"/>
      <stop offset="100%" stop-color="${B.darkAlt}"/>
    </linearGradient>
    <linearGradient id="text-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${B.primary}"/>
      <stop offset="100%" stop-color="#ff9a76"/>
    </linearGradient>
    <radialGradient id="orb1" cx="85%" cy="10%" r="40%">
      <stop offset="0%" stop-color="${B.primary}" stop-opacity="0.07"/>
      <stop offset="100%" stop-color="${B.primary}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="orb2" cx="15%" cy="90%" r="30%">
      <stop offset="0%" stop-color="${B.blue}" stop-opacity="0.05"/>
      <stop offset="100%" stop-color="${B.blue}" stop-opacity="0"/>
    </radialGradient>
    <!-- Hex pattern -->
    <pattern id="ai-hex" width="44.8" height="80" patternUnits="userSpaceOnUse">
      <path d="M22.4 1.6L43.2 14.4V36.8L22.4 52.8L1.6 36.8V14.4Z" fill="none" stroke="${B.primary}" stroke-opacity="0.06" stroke-width="0.6"/>
    </pattern>
    <!-- Grid pattern -->
    <pattern id="ai-grid" width="38.4" height="38.4" patternUnits="userSpaceOnUse">
      <path d="M38.4 0H0v38.4" fill="none" stroke="${B.primary}" stroke-opacity="0.04" stroke-width="0.4"/>
      <circle cx="0" cy="0" r="1.2" fill="${B.primary}" fill-opacity="0.05"/>
      <circle cx="38.4" cy="0" r="1.2" fill="${B.primary}" fill-opacity="0.05"/>
    </pattern>
  </defs>

  <!-- ════════ PAGE 1: COVER ════════ -->
  <g id="Page-1-Cover">
    <rect width="${W}" height="${pageH}" fill="url(#dark-grad)"/>
    <rect width="${W}" height="${pageH}" fill="url(#ai-hex)"/>
    <rect width="${W}" height="${pageH}" fill="url(#ai-grid)"/>
    <!-- Decorative orbs -->
    <rect width="${W}" height="${pageH}" fill="url(#orb1)"/>
    <rect width="${W}" height="${pageH}" fill="url(#orb2)"/>
    <!-- Corner accent lines -->
    <line x1="${W}" y1="0" x2="${W - 80}" y2="80" stroke="${B.primary}" stroke-opacity="0.12" stroke-width="0.8"/>
    <circle cx="${W - 80}" cy="80" r="2.4" fill="${B.primary}" fill-opacity="0.25"/>
    <!-- Top bar -->
    <text x="30" y="38" font-size="20" font-weight="800" fill="${B.white}" letter-spacing="0.5">motadata</text>
    <text x="${W - 30}" y="34" font-size="6.5" font-weight="600" fill="rgba(255,255,255,0.35)" text-anchor="end" letter-spacing="1.2" text-transform="uppercase">PRODUCT BROCHURE 2025</text>
    <rect x="${W - 50}" y="38" width="20" height="1.6" rx="0.8" fill="${B.primary}"/>
    <!-- Accent line -->
    <rect x="30" y="100" width="38" height="2.5" rx="1.2" fill="url(#brand-grad-h)"/>
    <text x="76" y="107" font-size="7" font-weight="700" fill="${B.primary}" letter-spacing="1" text-transform="uppercase">OBSERVEOPS PLATFORM</text>
    <!-- Title -->
    <text x="30" y="155" font-size="34" font-weight="800" fill="${B.white}" letter-spacing="-0.5">Motadata</text>
    <text x="30" y="195" font-size="34" font-weight="800" fill="url(#text-grad)" letter-spacing="-0.5">Unified Observability</text>
    <!-- Subtitle -->
    <text x="30" y="230" font-size="12" fill="rgba(255,255,255,0.6)" letter-spacing="0.2">
      <tspan x="30" dy="0">Full-stack, AI-driven observability across infrastructure,</tspan>
      <tspan x="30" dy="16">applications, networks, logs, and user experience.</tspan>
    </text>
    <!-- Capability pills -->
    ${["Infrastructure", "Applications", "Network", "Logs", "RUM"].map((label, i) => {
      const x = 30 + i * 88;
      return `<g>
        <rect x="${x}" y="270" width="80" height="22" rx="11" fill="${B.primary}" fill-opacity="0.06" stroke="${B.primary}" stroke-opacity="0.25" stroke-width="0.8"/>
        <text x="${x + 40}" y="284" font-size="7" font-weight="600" fill="rgba(255,255,255,0.7)" text-anchor="middle" letter-spacing="0.5">${label.toUpperCase()}</text>
      </g>`;
    }).join("\n    ")}
    <!-- Stats -->
    ${[
      { num: "99.9%", label: "UPTIME SLA", x: 30 },
      { num: "10x", label: "FASTER MTTR", x: 164 },
      { num: "50K+", label: "METRICS/SEC", x: 298 },
      { num: "500+", label: "INTEGRATIONS", x: 432 },
    ].map((s) => `<g>
      <rect x="${s.x}" y="320" width="126" height="72" rx="8" fill="rgba(255,255,255,0.025)" stroke="rgba(255,255,255,0.05)" stroke-width="0.8"/>
      <text x="${s.x + 14}" y="358" font-size="18" font-weight="800" fill="${B.white}">${s.num}</text>
      <text x="${s.x + 14}" y="374" font-size="6" font-weight="600" fill="rgba(255,255,255,0.35)" letter-spacing="0.8">${s.label}</text>
    </g>`).join("\n    ")}
    <!-- Executive Overview -->
    <rect x="30" y="410" width="${W - 60}" height="140" rx="8" fill="rgba(255,255,255,0.025)" stroke="rgba(255,255,255,0.05)" stroke-width="0.8"/>
    <rect x="44" y="425" width="4" height="13" rx="2" fill="${B.primary}"/>
    <text x="55" y="436" font-size="9" font-weight="700" fill="${B.primary}" letter-spacing="0.8">EXECUTIVE OVERVIEW</text>
    <text x="44" y="458" font-size="8" fill="rgba(255,255,255,0.55)" letter-spacing="0.2">
      <tspan x="44" dy="0">Modern IT environments generate massive volumes of telemetry. Motadata eliminates tool</tspan>
      <tspan x="44" dy="12">silos by delivering a single, AI-powered platform that unifies metrics, logs, traces, flows,</tspan>
      <tspan x="44" dy="12">and real user data into a cohesive operational intelligence layer.</tspan>
    </text>
    ${["Detect anomalies in real time", "Correlate signals across domains", "Identify root cause with precision", "Automate response workflows"].map((t, i) => {
      const col = i % 2;
      const row = Math.floor(i / 2);
      const x = 44 + col * 250;
      const y = 506 + row * 15;
      return `<g>
        <rect x="${x}" y="${y - 5}" width="10" height="10" rx="2" fill="${B.primary}" fill-opacity="0.12"/>
        <text x="${x + 16}" y="${y + 3}" font-size="7.5" fill="rgba(255,255,255,0.6)">${t}</text>
      </g>`;
    }).join("\n    ")}
    <!-- Bottom tagline -->
    <text x="30" y="${pageH - 20}" font-size="7" font-weight="600" fill="rgba(255,255,255,0.22)" letter-spacing="1.5">OBSERVE. SERVE. EVOLVE.</text>
    <line x1="160" y1="${pageH - 23}" x2="190" y2="${pageH - 23}" stroke="rgba(255,255,255,0.1)" stroke-width="0.8"/>
    <text x="198" y="${pageH - 20}" font-size="6.5" fill="rgba(255,255,255,0.18)">www.motadata.com</text>
    <!-- Page number -->
    <line x1="${W - 60}" y1="${pageH - 22}" x2="${W - 46}" y2="${pageH - 22}" stroke="rgba(255,255,255,0.15)" stroke-width="0.8"/>
    <text x="${W - 30}" y="${pageH - 18}" font-size="7" font-weight="600" fill="rgba(255,255,255,0.3)" text-anchor="end" letter-spacing="1">01 / 04</text>
    <!-- Bottom strip -->
    <rect y="${pageH - 4}" width="${W}" height="4" fill="url(#brand-grad-h)"/>
  </g>

  <!-- ════════ PAGE 2: ARCHITECTURE ════════ -->
  <g id="Page-2-Architecture" transform="translate(0, ${pageH})">
    <rect width="${W}" height="${pageH}" fill="${B.white}"/>
    <rect width="${W}" height="${pageH}" fill="url(#ai-grid)"/>
    <!-- Header -->
    <line x1="0" y1="48" x2="${W}" y2="48" stroke="${B.border}" stroke-width="0.8"/>
    <text x="30" y="32" font-size="16" font-weight="800" fill="${B.dark}">motadata</text>
    <rect x="${W - 150}" y="26" width="16" height="1.6" rx="0.8" fill="${B.primary}"/>
    <text x="${W - 30}" y="32" font-size="6.5" font-weight="700" fill="${B.muted}" text-anchor="end" letter-spacing="1.2">ARCHITECTURE</text>
    <!-- Section: Architecture -->
    <text x="30" y="76" font-size="12" font-weight="800" fill="${B.dark}" letter-spacing="0.5">UNIFIED OBSERVABILITY ARCHITECTURE</text>
    <line x1="310" y1="73" x2="${W - 30}" y2="73" stroke="${B.primary}" stroke-opacity="0.3" stroke-width="0.8"/>
    <text x="30" y="96" font-size="8.5" fill="${B.text}">Built on a pipeline-first architecture ensuring continuous data flow and contextual intelligence.</text>
    <!-- Pipeline box -->
    <rect x="30" y="110" width="${W - 60}" height="70" rx="8" fill="url(#dark-grad)"/>
    <text x="46" y="130" font-size="6.5" font-weight="700" fill="${B.primary}" letter-spacing="1">CONTINUOUS OBSERVABILITY PIPELINE</text>
    ${["Ingestion", "Parsing", "Enrichment", "Normalization", "Detection", "Action"].map((step, i) => {
      const x = 46 + i * 86;
      return `<g>
        <rect x="${x}" y="140" width="72" height="22" rx="4" fill="${B.primary}" fill-opacity="0.1" stroke="${B.primary}" stroke-opacity="0.12" stroke-width="0.6"/>
        <text x="${x + 36}" y="154" font-size="7.5" font-weight="600" fill="${B.primary}" text-anchor="middle">${step}</text>
        ${i < 5 ? `<path d="M${x + 76} 151l6 0" stroke="${B.primary}" stroke-opacity="0.4" stroke-width="1" marker-end="none"/>` : ""}
      </g>`;
    }).join("\n    ")}
    <text x="46" y="174" font-size="7.5" fill="rgba(255,255,255,0.4)">Unified pipeline — no data silos — metrics, logs, traces, flows, events processed consistently.</text>
    <!-- 3 Architecture pillars -->
    ${[
      { title: "Multi-Source Telemetry", color: B.primary, items: ["Metrics, logs, traces, flows", "Agent, agentless & API", "On-prem, cloud, containers"] },
      { title: "AI-Powered Intelligence", color: B.blue, items: ["Anomaly detection", "Pattern recognition", "Forecasting & prediction"] },
      { title: "Visualization & Action", color: B.purple, items: ["Real-time dashboards", "Policy-driven alerting", "Automated runbooks"] },
    ].map((bl, i) => {
      const x = 30 + i * 180;
      return `<g>
        <rect x="${x}" y="195" width="170" height="100" rx="6" fill="${B.light}" stroke="${B.border}" stroke-width="0.6"/>
        <rect x="${x}" y="195" width="170" height="3" rx="1.5" fill="${bl.color}"/>
        <text x="${x + 12}" y="218" font-size="8" font-weight="700" fill="${B.dark}">${bl.title}</text>
        ${bl.items.map((it, j) => `<g>
          <rect x="${x + 12}" y="${232 + j * 16}" width="5" height="5" rx="1" fill="${bl.color}"/>
          <text x="${x + 22}" y="${237 + j * 16}" font-size="7" fill="${B.text}">${it}</text>
        </g>`).join("")}
      </g>`;
    }).join("\n    ")}
    <!-- Section: Key Differentiators -->
    <text x="30" y="320" font-size="12" font-weight="800" fill="${B.dark}" letter-spacing="0.5">KEY DIFFERENTIATORS</text>
    <line x1="220" y1="317" x2="${W - 30}" y2="317" stroke="${B.primary}" stroke-opacity="0.3" stroke-width="0.8"/>
    ${[
      { t: "True Full-Stack Observability", d: "One native platform for infra, apps, network, logs & UX." },
      { t: "Pipeline-First Intelligence", d: "Continuous pipeline for deeper correlation & faster insights." },
      { t: "AI-Driven Noise Reduction", d: "Pattern intelligence & behavior-aware alerting." },
      { t: "Deep Network Visibility", d: "Unified NetFlow, NetRoute, traps & SLO." },
      { t: "Closed-Loop Observability", d: "Detect → Analyze → Act with integrated automation." },
      { t: "Vendor-Agnostic Hybrid", d: "Multi-vendor, hybrid environments with no constraints." },
    ].map((d, i) => {
      const col = i % 2;
      const row = Math.floor(i / 2);
      const x = 30 + col * 272;
      const y = 338 + row * 55;
      return `<g>
        <rect x="${x}" y="${y}" width="260" height="46" rx="6" fill="${B.white}" stroke="${B.border}" stroke-width="0.6"/>
        <rect x="${x + 10}" y="${y + 10}" width="24" height="24" rx="5" fill="${B.light}" stroke="${B.border}" stroke-width="0.5"/>
        <text x="${x + 44}" y="${y + 20}" font-size="8" font-weight="700" fill="${B.dark}">${d.t}</text>
        <text x="${x + 44}" y="${y + 32}" font-size="6.5" fill="${B.muted}">${d.d}</text>
      </g>`;
    }).join("\n    ")}
    <!-- Metrics strip -->
    <rect x="30" y="510" width="${W - 60}" height="55" rx="6" fill="url(#dark-grad)"/>
    <!-- Radial progress circles -->
    ${[
      { pct: 95, label: "Noise Reduced", color: B.primary, cx: 70 },
      { pct: 80, label: "Faster MTTR", color: B.blue, cx: 150 },
      { pct: 99, label: "Uptime", color: B.green, cx: 230 },
    ].map((rp) => {
      const r = 14;
      const circ = 2 * Math.PI * r;
      const offset = circ - (rp.pct / 100) * circ;
      return `<g>
        <circle cx="${rp.cx}" cy="537" r="${r}" fill="none" stroke="${rp.color}" stroke-opacity="0.15" stroke-width="3"/>
        <circle cx="${rp.cx}" cy="537" r="${r}" fill="none" stroke="${rp.color}" stroke-width="3" stroke-dasharray="${circ}" stroke-dashoffset="${offset}" stroke-linecap="round" transform="rotate(-90 ${rp.cx} 537)"/>
        <text x="${rp.cx}" y="540" font-size="8" font-weight="700" fill="${rp.color}" text-anchor="middle">${rp.pct}%</text>
        <text x="${rp.cx}" y="558" font-size="5.5" fill="rgba(255,255,255,0.35)" text-anchor="middle">${rp.label}</text>
      </g>`;
    }).join("\n    ")}
    <!-- Page number -->
    <line x1="${W - 60}" y1="${pageH - 22}" x2="${W - 46}" y2="${pageH - 22}" stroke="${B.border}" stroke-width="0.8"/>
    <text x="${W - 30}" y="${pageH - 18}" font-size="7" font-weight="600" fill="${B.muted}" text-anchor="end" letter-spacing="1">02 / 04</text>
    <rect y="${pageH - 4}" width="${W}" height="4" fill="url(#brand-grad-h)"/>
  </g>

  <!-- ════════ PAGE 3: CAPABILITIES ════════ -->
  <g id="Page-3-Capabilities" transform="translate(0, ${pageH * 2})">
    <rect width="${W}" height="${pageH}" fill="${B.white}"/>
    <rect width="${W}" height="${pageH}" fill="url(#ai-grid)"/>
    <line x1="0" y1="48" x2="${W}" y2="48" stroke="${B.border}" stroke-width="0.8"/>
    <text x="30" y="32" font-size="16" font-weight="800" fill="${B.dark}">motadata</text>
    <text x="${W - 30}" y="32" font-size="6.5" font-weight="700" fill="${B.muted}" text-anchor="end" letter-spacing="1.2">CAPABILITIES</text>
    <text x="30" y="76" font-size="12" font-weight="800" fill="${B.dark}" letter-spacing="0.5">CORE OBSERVABILITY CAPABILITIES</text>
    <line x1="310" y1="73" x2="${W - 30}" y2="73" stroke="${B.primary}" stroke-opacity="0.3" stroke-width="0.8"/>
    <text x="30" y="94" font-size="8.5" fill="${B.text}">End-to-end observability across your entire IT ecosystem.</text>
    ${[
      { t: "Hybrid Infrastructure Monitoring", d: "Servers, VMs, containers, cloud, storage & network.", color: B.primary, bs: ["Discovery & inventory", "CPU, memory, disk metrics", "Synthetic monitoring", "Agent/agentless collection"] },
      { t: "Application Performance Monitoring", d: "Distributed tracing & service-level analytics.", color: B.blue, bs: ["Trace & span analysis", "API endpoint monitoring", "Dependency mapping", "JVM diagnostics"] },
      { t: "Log Monitoring & Intelligence", d: "Transform logs into structured, actionable insights.", color: B.purple, bs: ["Log ingestion & parsing", "Pattern detection", "Facet-based search", "Log-based alerting"] },
      { t: "Network Observability", d: "Network performance, traffic & service-levels.", color: B.cyan, bs: ["NetFlow, sFlow, IPFIX", "Route path analysis", "SNMP trap monitoring", "Traffic analytics"] },
      { t: "Real User Monitoring (RUM)", d: "Real user experience from browsers & clients.", color: B.amber, bs: ["Core Web Vitals", "Session diagnostics", "Error tracking", "Device-level insights"] },
      { t: "SLO & Service Reliability", d: "Align observability with business objectives.", color: B.green, bs: ["Error budget monitoring", "Burn rate analysis", "SLA/SLO dashboards"] },
    ].map((cap, i) => {
      const col = i % 2;
      const row = Math.floor(i / 2);
      const x = 30 + col * 272;
      const y = 110 + row * 140;
      return `<g>
        <rect x="${x}" y="${y}" width="260" height="128" rx="6" fill="${B.white}" stroke="${B.border}" stroke-width="0.6"/>
        <rect x="${x}" y="${y}" width="260" height="2.5" rx="1" fill="${cap.color}"/>
        <rect x="${x + 10}" y="${y + 12}" width="24" height="24" rx="5" fill="${cap.color}" fill-opacity="0.08" stroke="${cap.color}" stroke-opacity="0.15" stroke-width="0.5"/>
        <text x="${x + 42}" y="${y + 24}" font-size="8.5" font-weight="700" fill="${B.dark}">${cap.t}</text>
        <text x="${x + 42}" y="${y + 36}" font-size="7" fill="${B.muted}">${cap.d}</text>
        ${cap.bs.map((b, j) => `<g>
          <rect x="${x + 12}" y="${y + 50 + j * 16}" width="4.5" height="4.5" rx="1" fill="${cap.color}"/>
          <text x="${x + 22}" y="${y + 55 + j * 16}" font-size="7" fill="${B.text}">${b}</text>
        </g>`).join("")}
      </g>`;
    }).join("\n    ")}
    <!-- Cross-domain strip -->
    <rect x="30" y="540" width="${W - 60}" height="55" rx="6" fill="url(#dark-grad)"/>
    <text x="46" y="558" font-size="8" font-weight="700" fill="${B.primary}" letter-spacing="0.8">CROSS-DOMAIN CORRELATION</text>
    <text x="46" y="574" font-size="7" fill="rgba(255,255,255,0.45)">Infrastructure signals align with logs, network traffic, and application performance for rapid RCA.</text>
    ${["Infra", "APM", "Network", "Logs", "RUM"].map((lbl, i) => {
      const cx = 400 + i * 34;
      return `<g>
        <circle cx="${cx}" cy="560" r="11" fill="${B.primary}" fill-opacity="0.08" stroke="${B.primary}" stroke-opacity="0.15" stroke-width="0.6"/>
        <text x="${cx}" y="563" font-size="5.5" font-weight="600" fill="${B.primary}" text-anchor="middle">${lbl}</text>
        ${i < 4 ? `<line x1="${cx + 12}" y1="560" x2="${cx + 22}" y2="560" stroke="${B.primary}" stroke-opacity="0.25" stroke-width="0.8"/>` : ""}
      </g>`;
    }).join("\n    ")}
    <line x1="${W - 60}" y1="${pageH - 22}" x2="${W - 46}" y2="${pageH - 22}" stroke="${B.border}" stroke-width="0.8"/>
    <text x="${W - 30}" y="${pageH - 18}" font-size="7" font-weight="600" fill="${B.muted}" text-anchor="end" letter-spacing="1">03 / 04</text>
    <rect y="${pageH - 4}" width="${W}" height="4" fill="url(#brand-grad-h)"/>
  </g>

  <!-- ════════ PAGE 4: AI, USE CASES, CTA ════════ -->
  <g id="Page-4-Intelligence" transform="translate(0, ${pageH * 3})">
    <rect width="${W}" height="${pageH}" fill="${B.white}"/>
    <rect width="${W}" height="${pageH}" fill="url(#ai-grid)"/>
    <line x1="0" y1="48" x2="${W}" y2="48" stroke="${B.border}" stroke-width="0.8"/>
    <text x="30" y="32" font-size="16" font-weight="800" fill="${B.dark}">motadata</text>
    <text x="${W - 30}" y="32" font-size="6.5" font-weight="700" fill="${B.muted}" text-anchor="end" letter-spacing="1.2">INTELLIGENCE &amp; ACTION</text>
    <!-- AI Section -->
    <text x="30" y="74" font-size="12" font-weight="800" fill="${B.dark}" letter-spacing="0.5">AI &amp; ADVANCED ANALYTICS</text>
    <line x1="250" y1="71" x2="${W - 30}" y2="71" stroke="${B.primary}" stroke-opacity="0.3" stroke-width="0.8"/>
    <!-- AI capabilities (dark) -->
    <rect x="30" y="86" width="260" height="110" rx="6" fill="url(#dark-grad)"/>
    <text x="44" y="104" font-size="7" font-weight="700" fill="${B.primary}" letter-spacing="0.8">CAPABILITIES</text>
    ${["Real-time anomaly detection", "Predictive forecasting", "Behavioral baselining", "Pattern-based intelligence"].map((t, i) => `<g>
      <rect x="44" y="${114 + i * 16}" width="4.5" height="4.5" rx="1" fill="${B.primary}"/>
      <text x="54" y="${119 + i * 16}" font-size="7" fill="rgba(255,255,255,0.7)">${t}</text>
    </g>`).join("\n    ")}
    <!-- Outcomes -->
    <rect x="300" y="86" width="264" height="110" rx="6" fill="${B.primary}" fill-opacity="0.04" stroke="${B.primary}" stroke-opacity="0.12" stroke-width="0.6"/>
    <text x="314" y="104" font-size="7" font-weight="700" fill="${B.primary}" letter-spacing="0.8">OUTCOMES</text>
    ${["Reduced alert noise by 95%", "Faster root cause ID", "Proactive issue prevention", "Improved efficiency"].map((t, i) => `<g>
      <rect x="314" y="${114 + i * 16}" width="4.5" height="4.5" rx="1" fill="${B.primary}"/>
      <text x="324" y="${119 + i * 16}" font-size="7" fill="${B.text}">${t}</text>
    </g>`).join("\n    ")}
    <!-- Radial progress in outcomes -->
    ${[
      { pct: 95, label: "Noise Cut", color: B.primary, cx: 330 },
      { pct: 80, label: "MTTR Drop", color: B.blue, cx: 395 },
      { pct: 70, label: "Auto Fixed", color: B.green, cx: 460 },
    ].map((rp) => {
      const r = 11;
      const circ = 2 * Math.PI * r;
      const offset = circ - (rp.pct / 100) * circ;
      return `<g>
        <circle cx="${rp.cx}" cy="182" r="${r}" fill="none" stroke="${rp.color}" stroke-opacity="0.15" stroke-width="2.5"/>
        <circle cx="${rp.cx}" cy="182" r="${r}" fill="none" stroke="${rp.color}" stroke-width="2.5" stroke-dasharray="${circ}" stroke-dashoffset="${offset}" stroke-linecap="round" transform="rotate(-90 ${rp.cx} 182)"/>
        <text x="${rp.cx}" y="185" font-size="7" font-weight="700" fill="${rp.color}" text-anchor="middle">${rp.pct}%</text>
      </g>`;
    }).join("\n    ")}
    <!-- Alerting checks -->
    <text x="30" y="220" font-size="12" font-weight="800" fill="${B.dark}" letter-spacing="0.5">ALERTING &amp; AUTOMATION</text>
    <line x1="260" y1="217" x2="${W - 30}" y2="217" stroke="${B.primary}" stroke-opacity="0.3" stroke-width="0.8"/>
    ${["Policy-based alerting with multi-condition logic", "Context-rich alert notifications", "Automated runbooks (API, SSH, scripts)", "Closed-loop remediation workflows"].map((t, i) => {
      const col = i % 2;
      const row = Math.floor(i / 2);
      const x = 30 + col * 272;
      const y = 232 + row * 25;
      return `<g>
        <rect x="${x}" y="${y}" width="260" height="20" rx="4" fill="${B.light}" stroke="${B.border}" stroke-width="0.5"/>
        <rect x="${x + 6}" y="${y + 3}" width="13" height="13" rx="3" fill="${B.primary}" fill-opacity="0.08"/>
        <polyline points="${x + 9},${y + 10} ${x + 11},${y + 12} ${x + 16},${y + 7}" fill="none" stroke="${B.primary}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <text x="${x + 24}" y="${y + 13}" font-size="7" fill="${B.text}">${t}</text>
      </g>`;
    }).join("\n    ")}
    <!-- Use Cases -->
    <rect x="30" y="290" width="${W - 60}" height="120" rx="8" fill="url(#dark-grad)"/>
    <text x="46" y="312" font-size="10" font-weight="800" fill="${B.white}" letter-spacing="0.5">KEY USE CASES</text>
    ${[
      { t: "Full-Stack Incident Mgmt", d: "Correlate signals for rapid RCA" },
      { t: "Network Optimization", d: "Bandwidth & route-level issues" },
      { t: "Digital Experience", d: "Link frontend UX with backend" },
      { t: "Capacity Planning", d: "Predict growth trends" },
      { t: "Compliance & Governance", d: "Audit readiness" },
      { t: "Proactive Operations", d: "AI prevents outages" },
    ].map((uc, i) => {
      const col = i % 3;
      const row = Math.floor(i / 3);
      const x = 46 + col * 172;
      const y = 326 + row * 38;
      return `<g>
        <rect x="${x}" y="${y}" width="160" height="30" rx="4" fill="rgba(255,255,255,0.025)" stroke="rgba(255,255,255,0.05)" stroke-width="0.6"/>
        <text x="${x + 8}" y="${y + 13}" font-size="7" font-weight="700" fill="${B.white}">${uc.t}</text>
        <text x="${x + 8}" y="${y + 23}" font-size="6" fill="rgba(255,255,255,0.4)">${uc.d}</text>
      </g>`;
    }).join("\n    ")}
    <!-- Comparison table -->
    <text x="30" y="432" font-size="12" font-weight="800" fill="${B.dark}" letter-spacing="0.5">WHY MOTADATA</text>
    <line x1="180" y1="429" x2="${W - 30}" y2="429" stroke="${B.primary}" stroke-opacity="0.3" stroke-width="0.8"/>
    <!-- Table header -->
    <rect x="30" y="442" width="${W - 60}" height="20" rx="4" fill="${B.dark}"/>
    <text x="44" y="455" font-size="7" font-weight="700" fill="${B.white}">Capability</text>
    <text x="370" y="455" font-size="7" font-weight="700" fill="${B.primary}" text-anchor="middle">Motadata</text>
    <text x="500" y="455" font-size="7" font-weight="600" fill="rgba(255,255,255,0.4)" text-anchor="middle">Typical Tools</text>
    ${[
      ["Full-stack observability", "Native", "Fragmented"],
      ["Pipeline-driven architecture", "Yes", "No"],
      ["Network + Flow + Route + SLO", "Unified", "Separate"],
      ["AI-driven correlation", "Built-in", "Add-on"],
      ["Automation & remediation", "Native", "External"],
    ].map((r, i) => {
      const y = 465 + i * 18;
      return `<g>
        <rect x="30" y="${y}" width="${W - 60}" height="18" fill="${i % 2 === 0 ? B.light : B.white}"/>
        <text x="44" y="${y + 12}" font-size="7" font-weight="600" fill="${B.text}">${r[0]}</text>
        <text x="370" y="${y + 12}" font-size="7" font-weight="700" fill="${B.primary}" text-anchor="middle">${r[1]}</text>
        <text x="500" y="${y + 12}" font-size="7" fill="${B.muted}" text-anchor="middle">${r[2]}</text>
      </g>`;
    }).join("\n    ")}
    <!-- CTA -->
    <rect x="30" y="570" width="${W - 60}" height="100" rx="8" fill="url(#brand-grad)"/>
    <text x="${W / 2}" y="600" font-size="14" font-weight="800" fill="${B.white}" text-anchor="middle">Start Your Journey Toward Intelligent IT Operations</text>
    <text x="${W / 2}" y="616" font-size="8" fill="rgba(255,255,255,0.75)" text-anchor="middle">From ingestion to insight to action — transform how your team monitors, detects, and resolves.</text>
    ${["Book a Demo", "Start Free Trial", "Contact Sales"].map((cta, i) => {
      const x = W / 2 - 120 + i * 106;
      return `<g>
        <rect x="${x}" y="626" width="96" height="22" rx="4" fill="${B.white}"/>
        <text x="${x + 48}" y="640" font-size="7.5" font-weight="700" fill="${B.primaryDark}" text-anchor="middle">${cta}</text>
      </g>`;
    }).join("\n    ")}
    <text x="${W / 2}" y="660" font-size="6.5" fill="rgba(255,255,255,0.5)" text-anchor="middle">sales@motadata.com  |  www.motadata.com</text>
    <!-- Bottom -->
    <text x="30" y="${pageH - 18}" font-size="7" font-weight="600" fill="${B.muted}" letter-spacing="1">OBSERVE. SERVE. EVOLVE.</text>
    <line x1="${W - 60}" y1="${pageH - 22}" x2="${W - 46}" y2="${pageH - 22}" stroke="${B.border}" stroke-width="0.8"/>
    <text x="${W - 30}" y="${pageH - 18}" font-size="7" font-weight="600" fill="${B.muted}" text-anchor="end" letter-spacing="1">04 / 04</text>
    <rect y="${pageH - 4}" width="${W}" height="4" fill="url(#brand-grad-h)"/>
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
export function ObserveOpsBrochureContent() {
  const handlePrint = useCallback(() => window.print(), []);

  const handleDownloadSVG = useCallback(() => {
    const svg = generateIllustratorSVG();
    downloadBlob(svg, "Motadata-ObserveOps-Brochure.svg", "image/svg+xml");
  }, []);

  const handleDownloadAI = useCallback(() => {
    // .ai files can open SVG natively in Illustrator — we generate
    // an SVG with proper artboard dimensions that Illustrator reads as editable vectors
    const svg = generateIllustratorSVG();
    downloadBlob(svg, "Motadata-ObserveOps-Brochure.ai", "application/illustrator");
  }, []);

  return (
    <section className="relative z-10 py-20">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-6 text-center mb-12">
        <span className="inline-block rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-label-sm tracking-wide text-primary uppercase mb-4">
          Product Brochure
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
          ObserveOps Brochure
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Professional A4 brochure — all backgrounds, colours, icons and visualizations
          are preserved identically in downloaded PDF and Illustrator formats.
        </p>

        {/* Action buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button onClick={handlePrint} className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-label-md text-white shadow-lg hover:bg-primary/90 transition-colors cursor-pointer">
            {Icons.printer()}
            Print / Save as PDF
          </button>
          <button onClick={handleDownloadSVG} className="inline-flex items-center gap-2 rounded-lg border-2 border-primary/30 bg-white px-6 py-3 text-label-md text-primary shadow hover:border-primary/60 transition-colors cursor-pointer">
            {Icons.download(B.primary)}
            Download SVG (Editable)
          </button>
          <button onClick={handleDownloadAI} className="inline-flex items-center gap-2 rounded-lg border-2 border-amber-400/40 bg-amber-50 px-6 py-3 text-label-md text-amber-700 shadow hover:border-amber-400/70 transition-colors cursor-pointer">
            {Icons.illustrator()}
            Download for Illustrator (.ai)
          </button>
        </div>
        <p className="mt-3 text-caption text-muted-foreground">
          The .ai and .svg files open directly in Adobe Illustrator with fully editable vector text, shapes, gradients, and icons.
        </p>
      </div>

      {/* A4 Pages */}
      <div className="flex flex-col items-center gap-10 brochure-pages">
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
      </div>

      {/* Print styles — force identical output in PDF */}
      <style>{`
        @media print {
          *, *::before, *::after {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }

          html, body { margin: 0 !important; padding: 0 !important; }

          body > * { display: none !important; }
          body > main,
          body > div > main { display: block !important; }
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
            width: 210mm !important;
            height: 297mm !important;
            min-height: 297mm !important;
            max-height: 297mm !important;
            box-shadow: none !important;
            margin: 0 !important;
            page-break-after: always !important;
            page-break-inside: avoid !important;
            break-after: page !important;
            break-inside: avoid !important;
          }
          .a4-page:last-child {
            page-break-after: auto !important;
            break-after: auto !important;
          }

          @page {
            size: 210mm 297mm;
            margin: 0;
          }
        }
      `}</style>
    </section>
  );
}
