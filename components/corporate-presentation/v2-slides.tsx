"use client";

import React from "react";

/* ═══════════════════════════════════════════════════════════════
   V2 THEME — White Premium Pro (presentations.ai inspired)
   Clean white with bold accent strips, soft shadows, large type
   ═══════════════════════════════════════════════════════════════ */
const T = {
  white: "#FFFFFF",
  offWhite: "#F8FAFC",
  warmGray: "#F1F5F9",
  bg: "#FFFFFF",
  accent: "#F17463",
  accentLight: "#FEF1EF",
  accentDark: "#E25A49",
  accentGradient: "linear-gradient(135deg, #F17463, #E8956C)",
  dark: "#111827",
  heading: "#0F172A",
  text: "#334155",
  muted: "#64748B",
  subtle: "#94A3B8",
  border: "#E2E8F0",
  borderLight: "#F1F5F9",
  cardShadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 24px rgba(0,0,0,0.06)",
  cardShadowLg: "0 4px 12px rgba(0,0,0,0.04), 0 8px 40px rgba(0,0,0,0.08)",
  teal: "#0D9488",
  blue: "#3B82F6",
  purple: "#7C3AED",
  indigo: "#4F46E5",
};

/* ── Decorative Elements ── */
function AccentBar({ position = "left", color = T.accent }: { position?: "left" | "top" | "bottom"; color?: string }) {
  if (position === "top") return <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: color, borderRadius: "0 0 2px 2px" }} />;
  if (position === "bottom") return <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 4, background: color }} />;
  return <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: 5, background: color }} />;
}

function DecorativeCircle({ x, y, size, color = T.accent, opacity = 0.06 }: { x: string; y: string; size: number; color?: string; opacity?: number }) {
  return (
    <div style={{
      position: "absolute", left: x, top: y, width: size, height: size,
      borderRadius: "50%", background: color, opacity,
      transform: "translate(-50%, -50%)", pointerEvents: "none",
    }} />
  );
}

function DecorativeDots({ x = "auto", y = "auto", right, bottom }: { x?: string; y?: string; right?: string; bottom?: string }) {
  const dots = [];
  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 5; c++) {
      dots.push(
        <circle key={`${r}-${c}`} cx={c * 12 + 4} cy={r * 12 + 4} r="1.5" fill={T.accent} opacity="0.15" />
      );
    }
  }
  return (
    <svg width="64" height="64" style={{ position: "absolute", left: x !== "auto" ? x : undefined, top: y !== "auto" ? y : undefined, right, bottom, pointerEvents: "none" }}>
      {dots}
    </svg>
  );
}

function DiagonalAccent() {
  return (
    <div style={{
      position: "absolute", top: -60, right: -60, width: 200, height: 200,
      background: T.accentGradient, opacity: 0.07, borderRadius: 40,
      transform: "rotate(30deg)", pointerEvents: "none",
    }} />
  );
}

function SectionTag({ text, color = T.accent }: { text: string; color?: string }) {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      padding: "5px 14px", borderRadius: 20,
      background: `${color}12`, fontSize: 10, fontWeight: 700,
      color: color, letterSpacing: "0.1em", textTransform: "uppercase",
    }}>
      <div style={{ width: 5, height: 5, borderRadius: "50%", background: color }} />
      {text}
    </div>
  );
}

/* ── Premium Card ── */
function ProCard({ children, style, accentTop, accentColor }: { children: React.ReactNode; style?: React.CSSProperties; accentTop?: boolean; accentColor?: string }) {
  return (
    <div style={{
      background: T.white,
      borderRadius: 12,
      boxShadow: T.cardShadow,
      border: `1px solid ${T.borderLight}`,
      position: "relative",
      overflow: "hidden",
      ...style,
    }}>
      {accentTop && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: accentColor || T.accent }} />}
      {children}
    </div>
  );
}

/* ── V2 Slide Frame ── */
function V2Frame({ children, idx }: { children: React.ReactNode; idx: number }) {
  return (
    <div
      data-slide={idx}
      style={{
        width: 960,
        height: 540,
        background: T.white,
        overflow: "hidden",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
        flexShrink: 0,
      }}
    >
      {children}
      {/* Footer */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 32,
        background: T.offWhite, borderTop: `1px solid ${T.border}`,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 28px", zIndex: 2,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: T.accent }} />
          <span style={{ fontSize: 9, fontWeight: 600, color: T.subtle, letterSpacing: "0.12em", textTransform: "uppercase" }}>Motadata</span>
        </div>
        <span style={{ fontSize: 9, color: T.subtle, fontVariantNumeric: "tabular-nums" }}>
          {String(idx + 1).padStart(2, "0")} / 42
        </span>
      </div>
    </div>
  );
}

/* ── Stat Block ── */
function StatBlock({ value, label, color = T.accent }: { value: string; label: string; color?: string }) {
  return (
    <ProCard accentTop accentColor={color} style={{ padding: "28px 20px", textAlign: "center", flex: 1 }}>
      <div style={{ fontSize: 42, fontWeight: 800, color: color, letterSpacing: "-0.03em", lineHeight: 1, marginTop: 4 }}>{value}</div>
      <div style={{ fontSize: 11, color: T.muted, marginTop: 12, letterSpacing: "0.03em", fontWeight: 500 }}>{label}</div>
    </ProCard>
  );
}

/* ── Icon Box ── */
function IconBox({ color = T.accent, children }: { color?: string; children?: React.ReactNode }) {
  return (
    <div style={{
      width: 40, height: 40, borderRadius: 10,
      background: `${color}10`,
      display: "flex", alignItems: "center", justifyContent: "center",
      flexShrink: 0,
    }}>
      {children || (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SLIDE DATA TYPE
   ═══════════════════════════════════════════════════════════════ */
export interface V2SlideData {
  type: string;
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

/* ═══════════════════════════════════════════════════════════════
   V2 SLIDE RENDERER — White Premium
   ═══════════════════════════════════════════════════════════════ */
export function renderV2Slide(data: V2SlideData, idx: number): React.ReactNode {
  switch (data.type) {

    /* ──────── COVER ──────── */
    case "cover":
      return (
        <V2Frame idx={idx}>
          {/* Decorative background elements */}
          <DecorativeCircle x="85%" y="25%" size={300} opacity={0.05} />
          <DecorativeCircle x="10%" y="75%" size={180} opacity={0.04} />
          <div style={{ position: "absolute", top: 0, left: 0, width: 8, height: "100%", background: T.accentGradient }} />
          <DecorativeDots right="60px" bottom="80px" />
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "60px 80px", zIndex: 1 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 10, padding: "8px 20px",
              background: T.accentLight, borderRadius: 24, marginBottom: 32,
            }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: T.accent }} />
              <span style={{ fontSize: 12, fontWeight: 700, color: T.accent, letterSpacing: "0.15em", textTransform: "uppercase" }}>Motadata</span>
            </div>
            <h1 style={{
              fontSize: 56, fontWeight: 800, color: T.heading, letterSpacing: "-0.04em",
              textAlign: "center", lineHeight: 1.1, margin: 0,
            }}>
              Corporate
              <br />
              <span style={{ color: T.accent }}>Presentation</span>
            </h1>
            <div style={{ width: 60, height: 4, borderRadius: 2, marginTop: 28, background: T.accentGradient }} />
            <p style={{ fontSize: 13, color: T.muted, marginTop: 20, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 500 }}>{data.subtitle}</p>
          </div>
        </V2Frame>
      );

    /* ──────── AGENDA ──────── */
    case "agenda":
      return (
        <V2Frame idx={idx}>
          <div style={{ position: "absolute", top: 0, left: 0, width: 5, height: "100%", background: T.accentGradient }} />
          <DiagonalAccent />
          <div style={{ flex: 1, padding: "44px 56px 44px 64px", zIndex: 1 }}>
            <SectionTag text="Overview" />
            <h2 style={{ fontSize: 36, fontWeight: 800, color: T.heading, marginTop: 12, marginBottom: 28, letterSpacing: "-0.03em" }}>Agenda</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 36px" }}>
              {(data.items || []).map(i => (
                <div key={i.n} style={{
                  display: "flex", alignItems: "center", gap: 16,
                  padding: "12px 16px", borderRadius: 10,
                  background: T.offWhite, border: `1px solid ${T.borderLight}`,
                  transition: "box-shadow 0.2s",
                }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 8, flexShrink: 0,
                    background: T.accentGradient,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 14, fontWeight: 800, color: T.white,
                  }}>{i.n}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: T.heading }}>{i.t}</div>
                    <div style={{ fontSize: 11, color: T.muted, marginTop: 1 }}>{i.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </V2Frame>
      );

    /* ──────── SECTION DIVIDER ──────── */
    case "section":
      return (
        <V2Frame idx={idx}>
          {/* Large geometric accent background */}
          <div style={{
            position: "absolute", top: "50%", left: "50%", width: 380, height: 380,
            borderRadius: "50%", transform: "translate(-50%, -50%)",
            background: T.accentLight, opacity: 0.6, pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", top: "50%", left: "50%", width: 260, height: 260,
            borderRadius: "50%", transform: "translate(-50%, -50%)",
            border: `2px solid ${T.accent}20`, pointerEvents: "none",
          }} />
          <DecorativeDots x="60px" y="60px" />
          <DecorativeDots right="60px" bottom="80px" />
          <div style={{ position: "absolute", top: 0, left: 0, width: 5, height: "100%", background: T.accentGradient }} />
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 60, zIndex: 1 }}>
            <h2 style={{ fontSize: 44, fontWeight: 800, color: T.heading, letterSpacing: "-0.03em", textAlign: "center", lineHeight: 1.2 }}>{data.title}</h2>
            <div style={{ width: 50, height: 4, borderRadius: 2, marginTop: 20, background: T.accentGradient }} />
          </div>
        </V2Frame>
      );

    /* ──────── TEXT CONTENT ──────── */
    case "text":
      return (
        <V2Frame idx={idx}>
          <div style={{ position: "absolute", top: 0, left: 0, width: 5, height: "100%", background: T.accentGradient }} />
          <DecorativeCircle x="90%" y="30%" size={200} opacity={0.04} />
          <DecorativeDots right="60px" bottom="80px" />
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "48px 72px 48px 72px", zIndex: 1 }}>
            <SectionTag text="About" />
            <p style={{ fontSize: 30, fontWeight: 800, color: T.heading, lineHeight: 1.35, marginTop: 20, marginBottom: 20 }}>
              Motadata powers modern IT with an{" "}
              <span style={{ color: T.accent }}>AI-native unified observability and ITSM platform</span>
            </p>
            <div style={{
              padding: "16px 24px", borderRadius: 12, background: T.offWhite,
              borderLeft: `4px solid ${T.accent}`,
            }}>
              <p style={{ fontSize: 15, color: T.text, lineHeight: 1.8, margin: 0 }}>
                Motadata, a subsidiary of Mindarray Systems Limited, delivers enterprise-grade IT solutions that unify monitoring, analytics, and service management into a single intelligent platform.
              </p>
            </div>
          </div>
        </V2Frame>
      );

    /* ──────── STATS ──────── */
    case "stats":
      return (
        <V2Frame idx={idx}>
          <div style={{ position: "absolute", top: 0, left: 0, width: 5, height: "100%", background: T.accentGradient }} />
          <DiagonalAccent />
          <div style={{ flex: 1, padding: "44px 56px 44px 64px", zIndex: 1, display: "flex", flexDirection: "column" }}>
            <SectionTag text={data.title || "Stats"} />
            <h2 style={{ fontSize: 34, fontWeight: 800, color: T.heading, marginTop: 12, marginBottom: 32, letterSpacing: "-0.03em" }}>{data.title}</h2>
            <div style={{ display: "flex", gap: 16, flex: 1 }}>
              {(data.stats || []).map((s, i) => {
                const colors = [T.accent, T.teal, T.blue, T.purple];
                return <StatBlock key={s.label} value={s.value} label={s.label} color={colors[i % colors.length]} />;
              })}
            </div>
            {data.body && (
              <div style={{
                padding: "14px 24px", marginTop: 20, borderRadius: 10,
                background: T.offWhite, borderLeft: `4px solid ${T.accent}`,
                display: "flex", alignItems: "center", gap: 12,
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={T.accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>
                <p style={{ fontSize: 13, color: T.text, margin: 0 }}>{data.body}</p>
              </div>
            )}
          </div>
        </V2Frame>
      );

    /* ──────── PILLS ──────── */
    case "pills":
      return (
        <V2Frame idx={idx}>
          <div style={{ position: "absolute", top: 0, left: 0, width: 5, height: "100%", background: T.accentGradient }} />
          <DecorativeCircle x="90%" y="60%" size={200} opacity={0.04} />
          <div style={{ flex: 1, padding: "44px 56px 44px 64px", zIndex: 1 }}>
            <SectionTag text={data.title || ""} />
            <h2 style={{ fontSize: 34, fontWeight: 800, color: T.heading, marginTop: 12, marginBottom: 32, letterSpacing: "-0.03em" }}>{data.title}</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              {(data.pills || []).map((p, i) => {
                const colors = [T.accent, T.teal, T.blue, T.purple, T.indigo];
                const c = colors[i % colors.length];
                return (
                  <div key={p} style={{
                    display: "inline-flex", alignItems: "center", gap: 10,
                    padding: "12px 22px", borderRadius: 12,
                    background: T.white, boxShadow: T.cardShadow,
                    border: `1px solid ${T.borderLight}`,
                  }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: c, flexShrink: 0 }} />
                    <span style={{ fontSize: 14, fontWeight: 600, color: T.heading }}>{p}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </V2Frame>
      );

    /* ──────── TWO COLUMNS ──────── */
    case "twocol":
      return (
        <V2Frame idx={idx}>
          <div style={{ position: "absolute", top: 0, left: 0, width: 5, height: "100%", background: T.accentGradient }} />
          <div style={{ flex: 1, padding: "44px 48px 44px 64px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, zIndex: 1 }}>
            {/* Left */}
            <ProCard accentTop accentColor={T.accent} style={{ padding: "28px 24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20, marginTop: 4 }}>
                <IconBox color={T.accent}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={T.accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" /><line x1="9" y1="6" x2="9" y2="6.01" /><line x1="15" y1="6" x2="15" y2="6.01" /><line x1="9" y1="10" x2="9" y2="10.01" /><line x1="15" y1="10" x2="15" y2="10.01" /><line x1="9" y1="18" x2="15" y2="18" /></svg>
                </IconBox>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: T.heading, margin: 0 }}>{data.left?.heading}</h3>
              </div>
              {(data.left?.items || []).map(i => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: 10,
                  padding: "10px 0", borderBottom: `1px solid ${T.borderLight}`,
                }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={T.accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  <span style={{ fontSize: 13, fontWeight: 500, color: T.text }}>{i}</span>
                </div>
              ))}
            </ProCard>
            {/* Right */}
            <ProCard accentTop accentColor={T.teal} style={{ padding: "28px 24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20, marginTop: 4 }}>
                <IconBox color={T.teal}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={T.teal} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></svg>
                </IconBox>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: T.heading, margin: 0 }}>{data.right?.heading}</h3>
              </div>
              {(data.right?.items || []).map(i => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: 10,
                  padding: "10px 0", borderBottom: `1px solid ${T.borderLight}`,
                }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={T.teal} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  <span style={{ fontSize: 13, fontWeight: 500, color: T.text }}>{i}</span>
                </div>
              ))}
            </ProCard>
          </div>
        </V2Frame>
      );

    /* ──────── BADGES / AWARDS ──────── */
    case "badges":
      return (
        <V2Frame idx={idx}>
          <div style={{ position: "absolute", top: 0, left: 0, width: 5, height: "100%", background: T.accentGradient }} />
          <DecorativeCircle x="90%" y="20%" size={180} opacity={0.04} />
          <div style={{ flex: 1, padding: "44px 56px 44px 64px", zIndex: 1 }}>
            <SectionTag text={data.title || "Awards"} />
            <h2 style={{ fontSize: 32, fontWeight: 800, color: T.heading, marginTop: 12, marginBottom: 28, letterSpacing: "-0.02em" }}>{data.title}</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14 }}>
              {(data.pills || []).map((b, i) => {
                const colors = [T.accent, T.teal, T.blue, T.purple, T.indigo, T.accentDark];
                const c = colors[i % colors.length];
                return (
                  <ProCard key={b} style={{ padding: "18px 20px", display: "flex", alignItems: "center", gap: 14 }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                      background: `${c}10`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg>
                    </div>
                    <span style={{ fontSize: 13, fontWeight: 600, color: T.heading, lineHeight: 1.3 }}>{b}</span>
                  </ProCard>
                );
              })}
            </div>
          </div>
        </V2Frame>
      );

    /* ──────── GRID (features/items) ──────── */
    case "grid":
      return (
        <V2Frame idx={idx}>
          <div style={{ position: "absolute", top: 0, left: 0, width: 5, height: "100%", background: T.accentGradient }} />
          <DecorativeDots right="50px" y="50px" />
          <div style={{ flex: 1, padding: "44px 56px 44px 64px", zIndex: 1 }}>
            <SectionTag text={data.title || ""} />
            <h2 style={{ fontSize: 32, fontWeight: 800, color: T.heading, marginTop: 12, marginBottom: data.subtitle ? 4 : 28, letterSpacing: "-0.02em" }}>{data.title}</h2>
            {data.subtitle && <p style={{ fontSize: 14, color: T.muted, marginBottom: 24 }}>{data.subtitle}</p>}
            <div style={{ display: "grid", gridTemplateColumns: `repeat(${Math.min((data.items || []).length, 3)}, 1fr)`, gap: 16 }}>
              {(data.items || []).map((i, idx2) => {
                const colors = [T.accent, T.teal, T.blue, T.purple, T.indigo];
                const c = colors[idx2 % colors.length];
                return (
                  <ProCard key={i.t} style={{ padding: "24px 22px", borderLeft: `4px solid ${c}` }}>
                    <div style={{ fontSize: 20, fontWeight: 800, color: c, marginBottom: 10, lineHeight: 1.2 }}>{i.t}</div>
                    {i.d && <div style={{ fontSize: 13, color: T.text, lineHeight: 1.7 }}>{i.d}</div>}
                  </ProCard>
                );
              })}
            </div>
          </div>
        </V2Frame>
      );

    /* ──────── LIST ──────── */
    case "list":
      return (
        <V2Frame idx={idx}>
          <div style={{ position: "absolute", top: 0, left: 0, width: 5, height: "100%", background: T.accentGradient }} />
          <DecorativeCircle x="92%" y="50%" size={200} opacity={0.04} />
          <div style={{ flex: 1, padding: "44px 56px 44px 64px", zIndex: 1 }}>
            <h2 style={{ fontSize: 32, fontWeight: 800, color: T.heading, marginBottom: 24, letterSpacing: "-0.02em" }}>{data.title}</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {(data.pills || []).map((item, i) => (
                <div key={item} style={{
                  display: "flex", alignItems: "center", gap: 16,
                  padding: "14px 20px", borderRadius: 12,
                  background: T.white, boxShadow: T.cardShadow,
                  border: `1px solid ${T.borderLight}`,
                }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: 8,
                    background: T.accentGradient,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  <span style={{ fontSize: 15, fontWeight: 600, color: T.heading }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </V2Frame>
      );

    /* ──────── BIG TITLE ──────── */
    case "bigtitle":
      return (
        <V2Frame idx={idx}>
          <div style={{ position: "absolute", top: 0, left: 0, width: 8, height: "100%", background: T.accentGradient }} />
          <DecorativeCircle x="80%" y="30%" size={300} opacity={0.05} />
          <DecorativeCircle x="20%" y="70%" size={200} opacity={0.04} />
          <DecorativeDots right="80px" y="80px" />
          <DecorativeDots x="80px" bottom="80px" />
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 60, zIndex: 1 }}>
            <h2 style={{ fontSize: 40, fontWeight: 800, textAlign: "center", textTransform: "uppercase", lineHeight: 1.25, letterSpacing: "-0.02em" }}>
              {(data.title || "").split("\n").map((l, i) => (
                <span key={i} style={{ display: "block", color: i === 1 ? T.accent : T.heading }}>{l}</span>
              ))}
            </h2>
            <div style={{ width: 60, height: 4, borderRadius: 2, marginTop: 24, background: T.accentGradient }} />
          </div>
        </V2Frame>
      );

    /* ──────── VISION / MISSION ──────── */
    case "visionmission":
      return (
        <V2Frame idx={idx}>
          <div style={{ position: "absolute", top: 0, left: 0, width: 5, height: "100%", background: T.accentGradient }} />
          <DecorativeCircle x="50%" y="50%" size={300} opacity={0.03} />
          <div style={{ flex: 1, padding: "44px 56px 44px 64px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, zIndex: 1 }}>
            {(data.columns || []).map((col, i) => {
              const c = i === 0 ? T.accent : T.teal;
              return (
                <ProCard key={col.t} accentTop accentColor={c} style={{ padding: "32px 28px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <div style={{
                    display: "inline-flex", alignItems: "center", gap: 10,
                    marginBottom: 20, marginTop: 4,
                  }}>
                    <IconBox color={c}>
                      {i === 0 ? (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                      ) : (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" fill={c} /></svg>
                      )}
                    </IconBox>
                    <span style={{ fontSize: 12, fontWeight: 700, color: c, textTransform: "uppercase", letterSpacing: "0.12em" }}>{col.t}</span>
                  </div>
                  <p style={{ fontSize: 24, fontWeight: 700, color: T.heading, lineHeight: 1.4, margin: 0 }}>{col.d}</p>
                </ProCard>
              );
            })}
          </div>
        </V2Frame>
      );

    /* ──────── VALUES ──────── */
    case "values":
      return (
        <V2Frame idx={idx}>
          <div style={{ position: "absolute", top: 0, left: 0, width: 5, height: "100%", background: T.accentGradient }} />
          <DiagonalAccent />
          <div style={{ flex: 1, padding: "44px 56px 44px 64px", zIndex: 1 }}>
            <div style={{ display: "flex", gap: 20, marginBottom: 32 }}>
              {(data.bigNumbers || []).map((bn, i) => {
                const c = i === 0 ? T.accent : T.teal;
                return (
                  <ProCard key={bn.label} accentTop accentColor={c} style={{ padding: "24px 40px", textAlign: "center" }}>
                    <div style={{ fontSize: 48, fontWeight: 800, color: c, letterSpacing: "-0.03em", marginTop: 4 }}>{bn.value}</div>
                    <div style={{ fontSize: 12, color: T.muted, marginTop: 8, fontWeight: 500, letterSpacing: "0.03em" }}>{bn.label}</div>
                  </ProCard>
                );
              })}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
              <SectionTag text="Core Values" />
              <div style={{ flex: 1, height: 1, background: T.border }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: `repeat(${(data.values || []).length}, 1fr)`, gap: 12 }}>
              {(data.values || []).map((v, i) => {
                const colors = [T.accent, T.teal, T.blue, T.purple, T.indigo];
                return (
                  <ProCard key={v} style={{ padding: "18px 12px", textAlign: "center", borderTop: `3px solid ${colors[i % colors.length]}` }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: T.heading }}>{v}</span>
                  </ProCard>
                );
              })}
            </div>
          </div>
        </V2Frame>
      );

    /* ──────── TIMELINE ──────── */
    case "timeline":
      return (
        <V2Frame idx={idx}>
          <div style={{ position: "absolute", top: 0, left: 0, width: 5, height: "100%", background: T.accentGradient }} />
          <div style={{ flex: 1, padding: "44px 56px 44px 64px", zIndex: 1 }}>
            <SectionTag text="Journey" />
            <h2 style={{ fontSize: 34, fontWeight: 800, color: T.heading, marginTop: 12, marginBottom: 56, letterSpacing: "-0.03em" }}>{data.title}</h2>
            <div style={{ position: "relative", display: "flex", justifyContent: "space-between" }}>
              {/* Connecting line */}
              <div style={{
                position: "absolute", top: 16, left: "5%", right: "5%", height: 3,
                background: `linear-gradient(90deg, ${T.accent}30, ${T.accent}, ${T.accent}30)`,
                borderRadius: 2,
              }} />
              {(data.milestones || []).map((m, i, arr) => (
                <div key={m.year} style={{ position: "relative", textAlign: "center", flex: 1 }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: "50%", margin: "0 auto", position: "relative", zIndex: 1,
                    background: i === arr.length - 1 ? T.accent : T.white,
                    border: `3px solid ${T.accent}`,
                    boxShadow: i === arr.length - 1 ? `0 0 0 6px ${T.accent}20` : T.cardShadow,
                  }} />
                  <div style={{ marginTop: 16 }}>
                    <div style={{ fontSize: 24, fontWeight: 800, color: T.accent }}>{m.year}</div>
                    <div style={{ fontSize: 12, color: T.muted, marginTop: 4, fontWeight: 500 }}>{m.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </V2Frame>
      );

    /* ──────── STEPS ──────── */
    case "steps":
      return (
        <V2Frame idx={idx}>
          <div style={{ position: "absolute", top: 0, left: 0, width: 5, height: "100%", background: T.accentGradient }} />
          <div style={{ flex: 1, padding: "44px 56px 44px 64px", zIndex: 1 }}>
            <SectionTag text="Process" />
            <h2 style={{ fontSize: 32, fontWeight: 800, color: T.heading, marginTop: 12, marginBottom: 36, letterSpacing: "-0.02em" }}>{data.title}</h2>
            <div style={{ display: "flex", gap: 16 }}>
              {(data.steps || []).map((s, i, arr) => {
                const colors = [T.accent, T.teal, T.blue, T.purple];
                const c = colors[i % colors.length];
                return (
                  <div key={s.n} style={{ flex: 1, position: "relative" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                      <div style={{
                        width: 40, height: 40, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                        background: c, fontSize: 16, fontWeight: 800, color: T.white, flexShrink: 0,
                        boxShadow: `0 4px 12px ${c}30`,
                      }}>{s.n}</div>
                      {i < arr.length - 1 && <div style={{ flex: 1, height: 2, background: `linear-gradient(90deg, ${c}40, transparent)` }} />}
                    </div>
                    <ProCard style={{ padding: "18px 16px", borderTop: `3px solid ${c}` }}>
                      <div style={{ fontSize: 16, fontWeight: 700, color: T.heading, marginBottom: 6 }}>{s.t}</div>
                      <div style={{ fontSize: 12, color: T.text, lineHeight: 1.6 }}>{s.d}</div>
                    </ProCard>
                  </div>
                );
              })}
            </div>
          </div>
        </V2Frame>
      );

    /* ──────── PLATFORM ──────── */
    case "platform":
      return (
        <V2Frame idx={idx}>
          <div style={{ position: "absolute", top: 0, left: 0, width: 8, height: "100%", background: T.accentGradient }} />
          <DecorativeCircle x="50%" y="45%" size={400} opacity={0.04} />
          <DecorativeDots right="60px" y="60px" />
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "48px 60px", zIndex: 1 }}>
            <SectionTag text="Unified Platform" />
            <div style={{ display: "flex", alignItems: "center", gap: 32, marginTop: 28, marginBottom: 32 }}>
              <ProCard accentTop accentColor={T.accent} style={{ padding: "28px 40px", textAlign: "center", minWidth: 220 }}>
                <div style={{ fontSize: 22, fontWeight: 800, color: T.accent, marginTop: 4 }}>ObserveOps</div>
                <div style={{ fontSize: 13, color: T.muted, marginTop: 8 }}>Unified Observability</div>
              </ProCard>
              <div style={{
                width: 44, height: 44, borderRadius: "50%",
                background: T.offWhite, border: `2px solid ${T.border}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 20, color: T.muted, fontWeight: 300,
              }}>+</div>
              <ProCard accentTop accentColor={T.teal} style={{ padding: "28px 40px", textAlign: "center", minWidth: 220 }}>
                <div style={{ fontSize: 22, fontWeight: 800, color: T.teal, marginTop: 4 }}>ServiceOps</div>
                <div style={{ fontSize: 13, color: T.muted, marginTop: 8 }}>Enterprise ITSM</div>
              </ProCard>
            </div>
            <p style={{ fontSize: 15, color: T.text, textAlign: "center", maxWidth: 520, lineHeight: 1.7 }}>One unified platform combining full-stack observability with intelligent IT service management</p>
          </div>
        </V2Frame>
      );

    /* ──────── TAKEAWAYS ──────── */
    case "takeaways":
      return (
        <V2Frame idx={idx}>
          <div style={{ position: "absolute", top: 0, left: 0, width: 5, height: "100%", background: T.accentGradient }} />
          <DiagonalAccent />
          <div style={{ flex: 1, padding: "44px 56px 44px 64px", zIndex: 1 }}>
            <SectionTag text="Summary" />
            <h2 style={{ fontSize: 28, fontWeight: 800, color: T.heading, marginTop: 10, marginBottom: 28, letterSpacing: "0.06em", textTransform: "uppercase" }}>{data.title}</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
              {(data.columns || []).map((col, i) => {
                const colors = [T.accent, T.teal, T.blue];
                const c = colors[i];
                return (
                  <ProCard key={col.t} accentTop accentColor={c} style={{ padding: 28 }}>
                    <div style={{ fontSize: 28, fontWeight: 800, color: c, marginTop: 4 }}>{col.t}</div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: T.heading, marginTop: 6 }}>{col.sub}</div>
                    <p style={{ fontSize: 13, color: T.text, lineHeight: 1.7, marginTop: 14 }}>{col.d}</p>
                  </ProCard>
                );
              })}
            </div>
          </div>
        </V2Frame>
      );

    /* ──────── DEFAULT FALLBACK ──────── */
    default:
      return (
        <V2Frame idx={idx}>
          <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: T.muted }}>Slide {idx + 1}</span>
          </div>
        </V2Frame>
      );
  }
}

/* ═══════════════════════════════════════════════════════════════
   V2 PPTX GENERATOR — White Premium
   ═══════════════════════════════════════════════════════════════ */
export async function generateV2PPTX(slideData: V2SlideData[]) {
  const PptxGenJS = (await import("pptxgenjs")).default;
  const pres = new PptxGenJS();

  pres.layout = "LAYOUT_WIDE";
  pres.author = "Motadata";
  pres.company = "Motadata - Mindarray Systems Ltd";
  pres.title = "Motadata Corporate Presentation V2";

  const accentHex = "F17463";
  const darkHex = "111827";
  const headingHex = "0F172A";
  const textHex = "334155";
  const mutedHex = "64748B";
  const lightBg = "F8FAFC";
  const borderHex = "E2E8F0";
  const tealHex = "0D9488";
  const blueHex = "3B82F6";
  const purpleHex = "7C3AED";

  pres.defineSlideMaster({
    title: "V2_MASTER",
    background: { color: "FFFFFF" },
    objects: [
      // Left accent bar
      { rect: { x: 0, y: 0, w: 0.06, h: "100%", fill: { color: accentHex } } },
      // Footer
      { rect: { x: 0, y: "94%", w: "100%", h: "6%", fill: { color: lightBg } } },
      { line: { x: 0, y: "94%", w: "100%", h: 0, line: { color: borderHex, width: 0.5 } } },
      { text: { text: "● MOTADATA", options: { x: 0.3, y: "95%", w: 2, h: 0.3, fontSize: 7, color: mutedHex, charSpacing: 2 } } },
    ],
  });

  for (let si = 0; si < slideData.length; si++) {
    const data = slideData[si];
    const slide = pres.addSlide({ masterName: "V2_MASTER" });
    const slideNum = `${String(si + 1).padStart(2, "0")} / ${slideData.length}`;
    slide.addText(slideNum, { x: 11.5, y: "95%", w: 1.5, h: 0.3, fontSize: 7, color: mutedHex, align: "right" });

    switch (data.type) {
      case "cover": {
        // Wider accent bar for cover
        slide.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: 0.1, h: "100%", fill: { color: accentHex } });
        // Brand badge
        slide.addShape(pres.ShapeType.roundRect, { x: 5, y: 1.2, w: 3.3, h: 0.5, rectRadius: 0.2, fill: { color: "FEF1EF" } });
        slide.addText("● MOTADATA", { x: 5, y: 1.2, w: 3.3, h: 0.5, fontSize: 10, bold: true, color: accentHex, align: "center", charSpacing: 3 });
        // Title
        slide.addText([
          { text: "Corporate\n", options: { fontSize: 50, bold: true, color: headingHex, fontFace: "Inter" } },
          { text: "Presentation", options: { fontSize: 50, bold: true, color: accentHex, fontFace: "Inter" } },
        ], { x: 1, y: 2, w: 11, h: 2.5, align: "center" });
        // Accent line
        slide.addShape(pres.ShapeType.rect, { x: 5.7, y: 4.5, w: 1.8, h: 0.07, fill: { color: accentHex } });
        slide.addText(data.subtitle || "", { x: 2, y: 4.8, w: 9, h: 0.4, fontSize: 11, color: mutedHex, align: "center", charSpacing: 2.5 });
        break;
      }
      case "section": {
        // Decorative circle
        slide.addShape(pres.ShapeType.ellipse, { x: 4.5, y: 0.8, w: 4.3, h: 4.3, fill: { color: "FEF1EF", transparency: 50 } });
        slide.addText(data.title || "", { x: 1, y: 2, w: 11, h: 1.5, fontSize: 40, bold: true, color: headingHex, align: "center", fontFace: "Inter" });
        slide.addShape(pres.ShapeType.rect, { x: 5.7, y: 3.7, w: 1.8, h: 0.07, fill: { color: accentHex } });
        break;
      }
      case "agenda": {
        // Section tag
        slide.addShape(pres.ShapeType.roundRect, { x: 0.8, y: 0.4, w: 1.4, h: 0.35, rectRadius: 0.15, fill: { color: "FEF1EF" } });
        slide.addText("● OVERVIEW", { x: 0.8, y: 0.4, w: 1.4, h: 0.35, fontSize: 7, bold: true, color: accentHex, align: "center", charSpacing: 2 });
        slide.addText("Agenda", { x: 0.8, y: 0.9, w: 5, h: 0.7, fontSize: 34, bold: true, color: headingHex, fontFace: "Inter" });
        const items = data.items || [];
        items.forEach((item, i) => {
          const row = Math.floor(i / 2);
          const col = i % 2;
          const cx = 0.8 + col * 6;
          const cy = 1.9 + row * 0.58;
          // Numbered box
          slide.addShape(pres.ShapeType.roundRect, { x: cx, y: cy, w: 0.4, h: 0.4, rectRadius: 0.06, fill: { color: accentHex } });
          slide.addText(item.n || "", { x: cx, y: cy, w: 0.4, h: 0.4, fontSize: 11, bold: true, color: "FFFFFF", align: "center" });
          slide.addText(item.t, { x: cx + 0.55, y: cy, w: 3, h: 0.22, fontSize: 12, bold: true, color: headingHex, fontFace: "Inter" });
          slide.addText(item.d || "", { x: cx + 0.55, y: cy + 0.2, w: 3, h: 0.2, fontSize: 9, color: mutedHex, fontFace: "Inter" });
        });
        break;
      }
      case "text": {
        slide.addShape(pres.ShapeType.roundRect, { x: 0.8, y: 1, w: 1, h: 0.35, rectRadius: 0.15, fill: { color: "FEF1EF" } });
        slide.addText("● ABOUT", { x: 0.8, y: 1, w: 1, h: 0.35, fontSize: 7, bold: true, color: accentHex, align: "center", charSpacing: 2 });
        const bodyParts = (data.body || "").split("\n\n");
        slide.addText(bodyParts[0] || "", { x: 0.8, y: 1.6, w: 10, h: 1.2, fontSize: 26, bold: true, color: headingHex, fontFace: "Inter", lineSpacingMultiple: 1.2 });
        if (bodyParts[1]) {
          slide.addShape(pres.ShapeType.rect, { x: 0.8, y: 3.2, w: 0.06, h: 0.8, fill: { color: accentHex } });
          slide.addText(bodyParts[1], { x: 1.1, y: 3.2, w: 9.5, h: 0.8, fontSize: 13, color: textHex, fontFace: "Inter", lineSpacingMultiple: 1.5 });
        }
        break;
      }
      case "stats": {
        slide.addShape(pres.ShapeType.roundRect, { x: 0.8, y: 0.3, w: 1.2, h: 0.35, rectRadius: 0.15, fill: { color: "FEF1EF" } });
        slide.addText("● STATS", { x: 0.8, y: 0.3, w: 1.2, h: 0.35, fontSize: 7, bold: true, color: accentHex, align: "center", charSpacing: 2 });
        slide.addText(data.title || "", { x: 0.8, y: 0.8, w: 8, h: 0.6, fontSize: 30, bold: true, color: headingHex, fontFace: "Inter" });
        const sArr = data.stats || [];
        const colors = [accentHex, tealHex, blueHex, purpleHex];
        const cw2 = 2.6;
        const sx = (13.33 - sArr.length * cw2) / 2;
        sArr.forEach((s, i) => {
          const cx = sx + i * cw2;
          const c = colors[i % colors.length];
          slide.addShape(pres.ShapeType.roundRect, { x: cx, y: 1.7, w: 2.4, h: 2, rectRadius: 0.1, fill: { color: "FFFFFF" }, line: { color: borderHex, width: 0.5 }, shadow: { type: "outer", blur: 6, offset: 2, opacity: 0.08, color: "000000" } });
          // Top accent
          slide.addShape(pres.ShapeType.rect, { x: cx, y: 1.7, w: 2.4, h: 0.05, fill: { color: c } });
          slide.addText(s.value, { x: cx, y: 1.85, w: 2.4, h: 1, fontSize: 38, bold: true, color: c, align: "center", fontFace: "Inter" });
          slide.addText(s.label, { x: cx, y: 2.9, w: 2.4, h: 0.5, fontSize: 10, color: mutedHex, align: "center", fontFace: "Inter" });
        });
        if (data.body) {
          slide.addShape(pres.ShapeType.rect, { x: 0.8, y: 4.1, w: 0.06, h: 0.5, fill: { color: accentHex } });
          slide.addText(data.body, { x: 1.1, y: 4.1, w: 11, h: 0.5, fontSize: 11, color: textHex, fontFace: "Inter" });
        }
        break;
      }
      default: {
        // For all other slide types, render title + content as text
        if (data.title) {
          slide.addShape(pres.ShapeType.roundRect, { x: 0.8, y: 0.3, w: 1.8, h: 0.35, rectRadius: 0.15, fill: { color: "FEF1EF" } });
          slide.addText(`● ${(data.title).toUpperCase().slice(0, 16)}`, { x: 0.8, y: 0.3, w: 1.8, h: 0.35, fontSize: 7, bold: true, color: accentHex, align: "center", charSpacing: 1 });
          slide.addText(data.title, { x: 0.8, y: 0.8, w: 10, h: 0.6, fontSize: 28, bold: true, color: headingHex, fontFace: "Inter" });
        }
        // Pills
        if (data.pills) {
          data.pills.forEach((p, i) => {
            const row = Math.floor(i / 3);
            const col = i % 3;
            const colors = [accentHex, tealHex, blueHex, purpleHex, "4F46E5", "E25A49"];
            const c = colors[i % colors.length];
            slide.addShape(pres.ShapeType.roundRect, { x: 0.8 + col * 3.9, y: 1.7 + row * 0.75, w: 3.6, h: 0.6, rectRadius: 0.1, fill: { color: "FFFFFF" }, line: { color: borderHex, width: 0.5 }, shadow: { type: "outer", blur: 4, offset: 1, opacity: 0.06, color: "000000" } });
            slide.addShape(pres.ShapeType.ellipse, { x: 0.95 + col * 3.9, y: 1.87 + row * 0.75, w: 0.12, h: 0.12, fill: { color: c } });
            slide.addText(p, { x: 1.2 + col * 3.9, y: 1.7 + row * 0.75, w: 3.1, h: 0.6, fontSize: 11, bold: true, color: headingHex, fontFace: "Inter" });
          });
        }
        // Items (grid)
        if (data.items) {
          const gItems = data.items;
          const cols = Math.min(gItems.length, 3);
          const cw3 = 3.5;
          gItems.forEach((item, i) => {
            const row = Math.floor(i / cols);
            const col = i % cols;
            const colors = [accentHex, tealHex, blueHex, purpleHex, "4F46E5"];
            const c = colors[i % colors.length];
            const cx = 0.8 + col * (cw3 + 0.2);
            const cy = 1.7 + row * 1.5;
            slide.addShape(pres.ShapeType.roundRect, { x: cx, y: cy, w: cw3, h: 1.3, rectRadius: 0.1, fill: { color: "FFFFFF" }, line: { color: borderHex, width: 0.5 }, shadow: { type: "outer", blur: 4, offset: 1, opacity: 0.06, color: "000000" } });
            // Left accent
            slide.addShape(pres.ShapeType.rect, { x: cx, y: cy, w: 0.06, h: 1.3, fill: { color: c } });
            slide.addText(item.t, { x: cx + 0.2, y: cy + 0.1, w: cw3 - 0.4, h: 0.4, fontSize: 15, bold: true, color: c, fontFace: "Inter" });
            if (item.d) slide.addText(item.d, { x: cx + 0.2, y: cy + 0.5, w: cw3 - 0.4, h: 0.7, fontSize: 10, color: textHex, fontFace: "Inter", lineSpacingMultiple: 1.4 });
          });
        }
        // Columns
        if (data.columns) {
          const colors = [accentHex, tealHex, blueHex];
          data.columns.forEach((col, i) => {
            const cw4 = 3.5;
            const cx = 0.8 + i * (cw4 + 0.3);
            slide.addShape(pres.ShapeType.roundRect, { x: cx, y: 1.7, w: cw4, h: 2.8, rectRadius: 0.1, fill: { color: "FFFFFF" }, line: { color: borderHex, width: 0.5 }, shadow: { type: "outer", blur: 4, offset: 1, opacity: 0.06, color: "000000" } });
            slide.addShape(pres.ShapeType.rect, { x: cx, y: 1.7, w: cw4, h: 0.06, fill: { color: colors[i] || accentHex } });
            slide.addText(col.t, { x: cx + 0.3, y: 1.9, w: cw4 - 0.6, h: 0.5, fontSize: 22, bold: true, color: colors[i] || accentHex, fontFace: "Inter" });
            if (col.sub) slide.addText(col.sub, { x: cx + 0.3, y: 2.4, w: cw4 - 0.6, h: 0.3, fontSize: 12, bold: true, color: headingHex, fontFace: "Inter" });
            slide.addText(col.d, { x: cx + 0.3, y: 2.8, w: cw4 - 0.6, h: 1.5, fontSize: 10, color: textHex, fontFace: "Inter", lineSpacingMultiple: 1.4 });
          });
        }
        // Two-col
        if (data.left && data.right) {
          [data.left, data.right].forEach((side, i) => {
            const cx2 = 0.8 + i * 6.2;
            const c = i === 0 ? accentHex : tealHex;
            slide.addShape(pres.ShapeType.roundRect, { x: cx2, y: 1.5, w: 5.8, h: 3, rectRadius: 0.1, fill: { color: "FFFFFF" }, line: { color: borderHex, width: 0.5 }, shadow: { type: "outer", blur: 4, offset: 1, opacity: 0.06, color: "000000" } });
            slide.addShape(pres.ShapeType.rect, { x: cx2, y: 1.5, w: 5.8, h: 0.05, fill: { color: c } });
            slide.addText(side.heading, { x: cx2 + 0.3, y: 1.7, w: 5.2, h: 0.4, fontSize: 14, bold: true, color: headingHex, fontFace: "Inter" });
            side.items.forEach((item2, j) => {
              slide.addText(`✓  ${item2}`, { x: cx2 + 0.3, y: 2.2 + j * 0.38, w: 5.2, h: 0.3, fontSize: 11, color: textHex, fontFace: "Inter" });
            });
          });
        }
        // Timeline
        if (data.milestones) {
          const ms2 = data.milestones;
          slide.addShape(pres.ShapeType.line, { x: 1.5, y: 2.5, w: 10, h: 0, line: { color: accentHex, width: 2, transparency: 60 } });
          const segW2 = 10 / ms2.length;
          ms2.forEach((m2, i2) => {
            const cx3 = 1.5 + i2 * segW2 + segW2 / 2;
            slide.addShape(pres.ShapeType.ellipse, {
              x: cx3 - 0.2, y: 2.3, w: 0.4, h: 0.4,
              fill: { color: i2 === ms2.length - 1 ? accentHex : "FFFFFF" },
              line: { color: accentHex, width: 2 },
            });
            slide.addText(m2.year, { x: cx3 - 0.7, y: 2.9, w: 1.4, h: 0.4, fontSize: 20, bold: true, color: accentHex, align: "center", fontFace: "Inter" });
            slide.addText(m2.label, { x: cx3 - 0.7, y: 3.3, w: 1.4, h: 0.3, fontSize: 10, color: mutedHex, align: "center", fontFace: "Inter" });
          });
        }
        // Steps
        if (data.steps) {
          const colors = [accentHex, tealHex, blueHex, purpleHex];
          data.steps.forEach((s2, i2) => {
            const sw2 = 2.7;
            const sx2 = 0.8 + i2 * (sw2 + 0.15);
            const c = colors[i2 % colors.length];
            slide.addShape(pres.ShapeType.ellipse, { x: sx2 + 0.1, y: 1.7, w: 0.45, h: 0.45, fill: { color: c } });
            slide.addText(s2.n, { x: sx2 + 0.1, y: 1.7, w: 0.45, h: 0.45, fontSize: 13, bold: true, color: "FFFFFF", align: "center" });
            slide.addShape(pres.ShapeType.roundRect, { x: sx2, y: 2.3, w: sw2, h: 1.3, rectRadius: 0.1, fill: { color: "FFFFFF" }, line: { color: borderHex, width: 0.5 } });
            slide.addShape(pres.ShapeType.rect, { x: sx2, y: 2.3, w: sw2, h: 0.05, fill: { color: c } });
            slide.addText(s2.t, { x: sx2 + 0.2, y: 2.45, w: sw2 - 0.4, h: 0.35, fontSize: 13, bold: true, color: headingHex, fontFace: "Inter" });
            slide.addText(s2.d, { x: sx2 + 0.2, y: 2.8, w: sw2 - 0.4, h: 0.7, fontSize: 9, color: textHex, fontFace: "Inter", lineSpacingMultiple: 1.3 });
          });
        }
        // Big numbers + values
        if (data.bigNumbers) {
          const colors = [accentHex, tealHex];
          data.bigNumbers.forEach((bn2, i2) => {
            const c = colors[i2 % colors.length];
            slide.addShape(pres.ShapeType.roundRect, { x: 0.8 + i2 * 3, y: 1.5, w: 2.7, h: 1.4, rectRadius: 0.1, fill: { color: "FFFFFF" }, line: { color: borderHex, width: 0.5 }, shadow: { type: "outer", blur: 4, offset: 1, opacity: 0.06, color: "000000" } });
            slide.addShape(pres.ShapeType.rect, { x: 0.8 + i2 * 3, y: 1.5, w: 2.7, h: 0.05, fill: { color: c } });
            slide.addText(bn2.value, { x: 0.8 + i2 * 3, y: 1.6, w: 2.7, h: 0.8, fontSize: 40, bold: true, color: c, align: "center", fontFace: "Inter" });
            slide.addText(bn2.label, { x: 0.8 + i2 * 3, y: 2.4, w: 2.7, h: 0.4, fontSize: 10, color: mutedHex, align: "center" });
          });
          if (data.values) {
            const vColors = [accentHex, tealHex, blueHex, purpleHex, "4F46E5"];
            const vw2 = 2;
            data.values.forEach((v2, i2) => {
              slide.addShape(pres.ShapeType.roundRect, { x: 0.8 + i2 * (vw2 + 0.15), y: 3.4, w: vw2, h: 0.7, rectRadius: 0.08, fill: { color: "FFFFFF" }, line: { color: borderHex, width: 0.5 } });
              slide.addShape(pres.ShapeType.rect, { x: 0.8 + i2 * (vw2 + 0.15), y: 3.4, w: vw2, h: 0.05, fill: { color: vColors[i2 % vColors.length] } });
              slide.addText(v2, { x: 0.8 + i2 * (vw2 + 0.15), y: 3.4, w: vw2, h: 0.7, fontSize: 10, bold: true, color: headingHex, align: "center" });
            });
          }
        }
        break;
      }
    }
  }

  return pres.writeFile({ fileName: "Motadata_Corporate_Presentation_V2.pptx" });
}
