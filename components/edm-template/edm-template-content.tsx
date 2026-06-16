"use client";

import { useEffect, useState } from "react";
import { Copy, Check, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroOrbs, AnimatedBadge, FadeUp } from "@/components/hero-effects";
import { DotPattern, DiagPattern } from "@/components/patterns";

/* ── Brand constants extracted from the Motadata website ── */
const B = {
  primary: "#f17463",
  primaryDark: "#d9574a",
  dark: "#0f172a",
  darkAlt: "#1e293b",
  text: "#334155",
  muted: "#64748b",
  light: "#f8fafc",
  border: "#e2e8f0",
  white: "#ffffff",
  black: "#000000",
  font: "'Plus Jakarta Sans', Arial, Helvetica, sans-serif",
  fontSafe: "Arial, Helvetica, sans-serif",
  logoUrl: "https://www.motadata.com/wp-content/uploads/2022/07/motadata-logo.png",
  logoWhiteUrl: "https://www.motadata.com/wp-content/uploads/2022/07/motadata-logo-white.png",
  patternUrl: "https://www.motadata.com/wp-content/uploads/pattern-motadata.svg",
  tagline: "Observe. Serve. Evolve.",
  website: "https://www.motadata.com",
};

/* ── Animation wrapper ── */
function AnimateIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setMounted(true);
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  const hidden = mounted && !visible;
  return (
    <div
      className={`transition-all duration-700 ease-out ${
        hidden ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════
   EDM HTML GENERATORS — 600px wide, table-based, inline CSS
   ══════════════════════════════════════════════════════════════ */

/* ── Shared email footer HTML ── */
function emailFooter(bg: string, textColor: string, linkColor: string) {
  return `
    <tr>
      <td style="padding:30px 40px;background:${bg};text-align:center;">
        <table cellpadding="0" cellspacing="0" border="0" style="margin:0 auto;">
          <tr>
            <td style="padding:0 8px;"><a href="#" style="color:${linkColor};text-decoration:none;font-size:13px;font-family:${B.fontSafe};">LinkedIn</a></td>
            <td style="padding:0 8px;"><a href="#" style="color:${linkColor};text-decoration:none;font-size:13px;font-family:${B.fontSafe};">Twitter</a></td>
            <td style="padding:0 8px;"><a href="#" style="color:${linkColor};text-decoration:none;font-size:13px;font-family:${B.fontSafe};">YouTube</a></td>
            <td style="padding:0 8px;"><a href="#" style="color:${linkColor};text-decoration:none;font-size:13px;font-family:${B.fontSafe};">Facebook</a></td>
          </tr>
        </table>
        <p style="margin:16px 0 0;font-size:12px;color:${textColor};font-family:${B.fontSafe};line-height:1.6;">
          Motadata &mdash; Unified Observability Platform for Modern IT Operations<br/>
          &copy; 2026 Motadata. All rights reserved.
        </p>
        <p style="margin:8px 0 0;font-size:11px;">
          <a href="#" style="color:${linkColor};text-decoration:underline;font-family:${B.fontSafe};">Unsubscribe</a>
          &nbsp;&middot;&nbsp;
          <a href="#" style="color:${linkColor};text-decoration:underline;font-family:${B.fontSafe};">View in browser</a>
        </p>
      </td>
    </tr>`;
}

/* ── OPTION 1: Minimal Corporate SaaS ── */
function minimalCorporateHTML() {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/><title>Motadata — Observe. Serve. Evolve.</title></head>
<body style="margin:0;padding:0;background:${B.light};font-family:${B.fontSafe};">
<table cellpadding="0" cellspacing="0" border="0" width="100%" style="background:${B.light};">
  <tr><td align="center" style="padding:20px 0;">
    <table cellpadding="0" cellspacing="0" border="0" width="600" style="background:${B.white};border:1px solid ${B.border};border-radius:8px;overflow:hidden;">
      <!-- Header -->
      <tr>
        <td style="padding:28px 40px;border-bottom:1px solid ${B.border};">
          <img src="${B.logoUrl}" alt="Motadata" width="140" style="display:block;" />
        </td>
      </tr>
      <!-- Hero -->
      <tr>
        <td style="padding:48px 40px 32px;">
          <h1 style="margin:0;font-size:28px;font-weight:700;color:${B.dark};line-height:1.3;font-family:${B.fontSafe};">Transform Your IT Operations with Unified Observability</h1>
          <p style="margin:16px 0 0;font-size:15px;color:${B.text};line-height:1.7;font-family:${B.fontSafe};">
            Motadata brings together infrastructure monitoring, log analytics, and service management into one powerful platform — giving your IT team complete visibility and control.
          </p>
          <table cellpadding="0" cellspacing="0" border="0" style="margin:24px 0 0;">
            <tr><td style="background:${B.primary};border-radius:6px;padding:12px 28px;">
              <a href="#" style="color:${B.white};text-decoration:none;font-size:14px;font-weight:600;font-family:${B.fontSafe};">Schedule a Demo &rarr;</a>
            </td></tr>
          </table>
        </td>
      </tr>
      <!-- Divider -->
      <tr><td style="padding:0 40px;"><div style="height:1px;background:${B.border};"></div></td></tr>
      <!-- Features -->
      <tr>
        <td style="padding:32px 40px;">
          <h2 style="margin:0 0 20px;font-size:18px;font-weight:700;color:${B.dark};font-family:${B.fontSafe};">Why IT Leaders Choose Motadata</h2>
          <table cellpadding="0" cellspacing="0" border="0" width="100%">
            <tr>
              <td width="50%" style="padding:0 12px 20px 0;vertical-align:top;">
                <h3 style="margin:0;font-size:14px;font-weight:700;color:${B.primary};font-family:${B.fontSafe};">Hybrid Infrastructure</h3>
                <p style="margin:6px 0 0;font-size:13px;color:${B.muted};line-height:1.6;font-family:${B.fontSafe};">Monitor cloud, on-prem, and hybrid environments from a single pane of glass.</p>
              </td>
              <td width="50%" style="padding:0 0 20px 12px;vertical-align:top;">
                <h3 style="margin:0;font-size:14px;font-weight:700;color:${B.primary};font-family:${B.fontSafe};">AI-Powered Analytics</h3>
                <p style="margin:6px 0 0;font-size:13px;color:${B.muted};line-height:1.6;font-family:${B.fontSafe};">Reduce MTTR with intelligent anomaly detection and root cause analysis.</p>
              </td>
            </tr>
            <tr>
              <td width="50%" style="padding:0 12px 0 0;vertical-align:top;">
                <h3 style="margin:0;font-size:14px;font-weight:700;color:${B.primary};font-family:${B.fontSafe};">Log Management</h3>
                <p style="margin:6px 0 0;font-size:13px;color:${B.muted};line-height:1.6;font-family:${B.fontSafe};">Centralize, search, and analyze logs at scale with real-time indexing.</p>
              </td>
              <td width="50%" style="padding:0 0 0 12px;vertical-align:top;">
                <h3 style="margin:0;font-size:14px;font-weight:700;color:${B.primary};font-family:${B.fontSafe};">Service Management</h3>
                <p style="margin:6px 0 0;font-size:13px;color:${B.muted};line-height:1.6;font-family:${B.fontSafe};">ITIL-aligned ITSM with asset management and automated workflows.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <!-- Highlight -->
      <tr>
        <td style="padding:0 40px 32px;">
          <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background:${B.light};border-radius:8px;">
            <tr><td style="padding:24px 28px;text-align:center;">
              <p style="margin:0;font-size:32px;font-weight:700;color:${B.primary};font-family:${B.fontSafe};">60%</p>
              <p style="margin:4px 0 0;font-size:14px;color:${B.text};font-family:${B.fontSafe};">Average reduction in incident resolution time</p>
            </td></tr>
          </table>
        </td>
      </tr>
      <!-- Secondary CTA -->
      <tr>
        <td style="padding:0 40px 40px;text-align:center;">
          <p style="margin:0 0 16px;font-size:16px;font-weight:600;color:${B.dark};font-family:${B.fontSafe};">Ready to elevate your IT operations?</p>
          <table cellpadding="0" cellspacing="0" border="0" style="margin:0 auto;">
            <tr><td style="border:2px solid ${B.primary};border-radius:6px;padding:10px 24px;">
              <a href="#" style="color:${B.primary};text-decoration:none;font-size:14px;font-weight:600;font-family:${B.fontSafe};">Start Free Trial</a>
            </td></tr>
          </table>
        </td>
      </tr>
      <!-- Footer -->
      ${emailFooter(B.light, B.muted, B.muted)}
    </table>
  </td></tr>
</table>
</body>
</html>`;
}

/* ── OPTION 2: Dark Mode Tech ── */
function darkModeTechHTML() {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/><title>Motadata — Observe. Serve. Evolve.</title></head>
<body style="margin:0;padding:0;background:#0b1120;font-family:${B.fontSafe};">
<table cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#0b1120;">
  <tr><td align="center" style="padding:20px 0;">
    <table cellpadding="0" cellspacing="0" border="0" width="600" style="background:${B.dark};border-radius:8px;overflow:hidden;">
      <!-- Header -->
      <tr>
        <td style="padding:28px 40px;border-bottom:1px solid #1e293b;">
          <img src="${B.logoWhiteUrl}" alt="Motadata" width="140" style="display:block;" />
        </td>
      </tr>
      <!-- Hero -->
      <tr>
        <td style="padding:48px 40px 36px;background-image:url('${B.patternUrl}');background-repeat:repeat;background-size:500px;">
          <div style="background:rgba(15,23,42,0.90);padding:36px;border-radius:8px;border:1px solid #1e293b;">
            <p style="margin:0 0 8px;font-size:12px;letter-spacing:2px;color:${B.primary};text-transform:uppercase;font-family:${B.fontSafe};">Next-Gen Observability</p>
            <h1 style="margin:0;font-size:28px;font-weight:700;color:${B.white};line-height:1.3;font-family:${B.fontSafe};">See Everything.<br/>Fix Faster.<br/>Stay Ahead.</h1>
            <p style="margin:16px 0 0;font-size:15px;color:#94a3b8;line-height:1.7;font-family:${B.fontSafe};">
              Real-time monitoring, AI-driven insights, and automated remediation — purpose-built for modern IT infrastructure.
            </p>
            <table cellpadding="0" cellspacing="0" border="0" style="margin:24px 0 0;">
              <tr><td style="background:${B.primary};border-radius:6px;padding:12px 28px;">
                <a href="#" style="color:${B.white};text-decoration:none;font-size:14px;font-weight:600;font-family:${B.fontSafe};">Explore Platform &rarr;</a>
              </td></tr>
            </table>
          </div>
        </td>
      </tr>
      <!-- Features -->
      <tr>
        <td style="padding:36px 40px;">
          <table cellpadding="0" cellspacing="0" border="0" width="100%">
            <tr>
              <td width="33%" style="padding:0 8px 0 0;vertical-align:top;">
                <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#1e293b;border-radius:8px;border:1px solid #334155;">
                  <tr><td style="padding:20px;">
                    <p style="margin:0;font-size:24px;font-weight:700;color:${B.primary};font-family:${B.fontSafe};">5K+</p>
                    <p style="margin:6px 0 0;font-size:12px;color:#94a3b8;font-family:${B.fontSafe};">Devices Monitored</p>
                  </td></tr>
                </table>
              </td>
              <td width="33%" style="padding:0 4px;vertical-align:top;">
                <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#1e293b;border-radius:8px;border:1px solid #334155;">
                  <tr><td style="padding:20px;">
                    <p style="margin:0;font-size:24px;font-weight:700;color:${B.primary};font-family:${B.fontSafe};">99.9%</p>
                    <p style="margin:6px 0 0;font-size:12px;color:#94a3b8;font-family:${B.fontSafe};">Uptime SLA</p>
                  </td></tr>
                </table>
              </td>
              <td width="33%" style="padding:0 0 0 8px;vertical-align:top;">
                <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#1e293b;border-radius:8px;border:1px solid #334155;">
                  <tr><td style="padding:20px;">
                    <p style="margin:0;font-size:24px;font-weight:700;color:${B.primary};font-family:${B.fontSafe};">60%</p>
                    <p style="margin:6px 0 0;font-size:12px;color:#94a3b8;font-family:${B.fontSafe};">Faster MTTR</p>
                  </td></tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <!-- Feature list -->
      <tr>
        <td style="padding:0 40px 36px;">
          <table cellpadding="0" cellspacing="0" border="0" width="100%">
            <tr>
              <td style="padding:14px 0;border-top:1px solid #1e293b;">
                <table cellpadding="0" cellspacing="0" border="0"><tr>
                  <td style="width:8px;height:8px;background:${B.primary};border-radius:50%;"></td>
                  <td style="padding-left:12px;font-size:14px;color:#e2e8f0;font-family:${B.fontSafe};">Network topology mapping with auto-discovery</td>
                </tr></table>
              </td>
            </tr>
            <tr>
              <td style="padding:14px 0;border-top:1px solid #1e293b;">
                <table cellpadding="0" cellspacing="0" border="0"><tr>
                  <td style="width:8px;height:8px;background:${B.primary};border-radius:50%;"></td>
                  <td style="padding-left:12px;font-size:14px;color:#e2e8f0;font-family:${B.fontSafe};">APM with distributed tracing and code-level insights</td>
                </tr></table>
              </td>
            </tr>
            <tr>
              <td style="padding:14px 0;border-top:1px solid #1e293b;">
                <table cellpadding="0" cellspacing="0" border="0"><tr>
                  <td style="width:8px;height:8px;background:${B.primary};border-radius:50%;"></td>
                  <td style="padding-left:12px;font-size:14px;color:#e2e8f0;font-family:${B.fontSafe};">AI-powered anomaly detection and predictive alerts</td>
                </tr></table>
              </td>
            </tr>
            <tr>
              <td style="padding:14px 0;border-top:1px solid #1e293b;border-bottom:1px solid #1e293b;">
                <table cellpadding="0" cellspacing="0" border="0"><tr>
                  <td style="width:8px;height:8px;background:${B.primary};border-radius:50%;"></td>
                  <td style="padding-left:12px;font-size:14px;color:#e2e8f0;font-family:${B.fontSafe};">Unified log management with real-time search</td>
                </tr></table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <!-- CTA -->
      <tr>
        <td style="padding:0 40px 40px;text-align:center;">
          <h2 style="margin:0 0 12px;font-size:20px;color:${B.white};font-family:${B.fontSafe};">Start monitoring in under 10 minutes</h2>
          <table cellpadding="0" cellspacing="0" border="0" style="margin:0 auto;">
            <tr><td style="background:${B.primary};border-radius:6px;padding:12px 32px;">
              <a href="#" style="color:${B.white};text-decoration:none;font-size:14px;font-weight:600;font-family:${B.fontSafe};">Get Started Free &rarr;</a>
            </td></tr>
          </table>
        </td>
      </tr>
      <!-- Footer -->
      ${emailFooter("#0b1120", "#64748b", "#94a3b8")}
    </table>
  </td></tr>
</table>
</body>
</html>`;
}

/* ── OPTION 3: Product-Centric ── */
function productCentricHTML() {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/><title>Motadata — Observe. Serve. Evolve.</title></head>
<body style="margin:0;padding:0;background:#eef2f7;font-family:${B.fontSafe};">
<table cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#eef2f7;">
  <tr><td align="center" style="padding:20px 0;">
    <table cellpadding="0" cellspacing="0" border="0" width="600" style="background:${B.white};border-radius:8px;overflow:hidden;">
      <!-- Header -->
      <tr>
        <td style="padding:24px 40px;">
          <table cellpadding="0" cellspacing="0" border="0" width="100%">
            <tr>
              <td><img src="${B.logoUrl}" alt="Motadata" width="130" style="display:block;" /></td>
              <td style="text-align:right;">
                <a href="#" style="color:${B.muted};text-decoration:none;font-size:13px;font-family:${B.fontSafe};padding:0 8px;">Products</a>
                <a href="#" style="color:${B.muted};text-decoration:none;font-size:13px;font-family:${B.fontSafe};padding:0 8px;">Pricing</a>
                <a href="#" style="color:${B.primary};text-decoration:none;font-size:13px;font-weight:600;font-family:${B.fontSafe};padding:0 0 0 8px;">Demo</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <!-- Hero with product screenshot placeholder -->
      <tr>
        <td style="padding:20px 40px 32px;">
          <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background:linear-gradient(135deg,${B.dark} 0%,#1e293b 100%);border-radius:12px;overflow:hidden;">
            <tr><td style="padding:36px 32px;">
              <p style="margin:0 0 4px;font-size:11px;letter-spacing:2px;color:${B.primary};text-transform:uppercase;font-family:${B.fontSafe};">Product Update</p>
              <h1 style="margin:0;font-size:24px;font-weight:700;color:${B.white};line-height:1.35;font-family:${B.fontSafe};">New: AI-Powered Root Cause Analysis for Faster Incident Resolution</h1>
              <p style="margin:12px 0 0;font-size:14px;color:#94a3b8;line-height:1.6;font-family:${B.fontSafe};">Automatically correlate alerts, identify root causes, and suggest remediation steps — reducing MTTR by up to 60%.</p>
            </td></tr>
            <tr><td style="padding:0 32px 28px;">
              <!-- Dashboard placeholder -->
              <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#0f172a;border:1px solid #334155;border-radius:8px;">
                <tr><td style="padding:20px;text-align:center;">
                  <p style="margin:0;font-size:11px;color:#64748b;font-family:${B.fontSafe};">[ Dashboard Screenshot Placeholder ]</p>
                  <p style="margin:8px 0 0;font-size:11px;color:#475569;font-family:${B.fontSafe};">Replace with actual product screenshot (520 &times; 280px)</p>
                </td></tr>
              </table>
            </td></tr>
          </table>
        </td>
      </tr>
      <!-- Feature cards -->
      <tr>
        <td style="padding:8px 40px 32px;">
          <h2 style="margin:0 0 16px;font-size:18px;font-weight:700;color:${B.dark};font-family:${B.fontSafe};">What&rsquo;s Included</h2>
          <table cellpadding="0" cellspacing="0" border="0" width="100%">
            <tr>
              <td width="50%" style="padding:0 8px 12px 0;vertical-align:top;">
                <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border:1px solid ${B.border};border-radius:8px;">
                  <tr><td style="padding:20px;">
                    <p style="margin:0;font-size:20px;font-weight:700;color:${B.primary};font-family:${B.fontSafe};">&#9679;</p>
                    <h3 style="margin:8px 0 4px;font-size:14px;font-weight:700;color:${B.dark};font-family:${B.fontSafe};">Alert Correlation</h3>
                    <p style="margin:0;font-size:12px;color:${B.muted};line-height:1.5;font-family:${B.fontSafe};">Group related alerts to reduce noise by 80%.</p>
                  </td></tr>
                </table>
              </td>
              <td width="50%" style="padding:0 0 12px 8px;vertical-align:top;">
                <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border:1px solid ${B.border};border-radius:8px;">
                  <tr><td style="padding:20px;">
                    <p style="margin:0;font-size:20px;font-weight:700;color:${B.primary};font-family:${B.fontSafe};">&#9650;</p>
                    <h3 style="margin:8px 0 4px;font-size:14px;font-weight:700;color:${B.dark};font-family:${B.fontSafe};">Topology Maps</h3>
                    <p style="margin:0;font-size:12px;color:${B.muted};line-height:1.5;font-family:${B.fontSafe};">Visualize dependencies across your entire stack.</p>
                  </td></tr>
                </table>
              </td>
            </tr>
            <tr>
              <td width="50%" style="padding:0 8px 0 0;vertical-align:top;">
                <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border:1px solid ${B.border};border-radius:8px;">
                  <tr><td style="padding:20px;">
                    <p style="margin:0;font-size:20px;font-weight:700;color:${B.primary};font-family:${B.fontSafe};">&#9632;</p>
                    <h3 style="margin:8px 0 4px;font-size:14px;font-weight:700;color:${B.dark};font-family:${B.fontSafe};">Log Search</h3>
                    <p style="margin:0;font-size:12px;color:${B.muted};line-height:1.5;font-family:${B.fontSafe};">Search billions of log entries in milliseconds.</p>
                  </td></tr>
                </table>
              </td>
              <td width="50%" style="padding:0 0 0 8px;vertical-align:top;">
                <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border:1px solid ${B.border};border-radius:8px;">
                  <tr><td style="padding:20px;">
                    <p style="margin:0;font-size:20px;font-weight:700;color:${B.primary};font-family:${B.fontSafe};">&#9733;</p>
                    <h3 style="margin:8px 0 4px;font-size:14px;font-weight:700;color:${B.dark};font-family:${B.fontSafe};">SLA Tracking</h3>
                    <p style="margin:0;font-size:12px;color:${B.muted};line-height:1.5;font-family:${B.fontSafe};">Monitor SLA compliance with automated reporting.</p>
                  </td></tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <!-- CTA -->
      <tr>
        <td style="padding:8px 40px 40px;text-align:center;">
          <table cellpadding="0" cellspacing="0" border="0" style="margin:0 auto;background:${B.primary};border-radius:6px;">
            <tr><td style="padding:12px 32px;">
              <a href="#" style="color:${B.white};text-decoration:none;font-size:14px;font-weight:600;font-family:${B.fontSafe};">Try It Free for 30 Days &rarr;</a>
            </td></tr>
          </table>
        </td>
      </tr>
      ${emailFooter(B.light, B.muted, B.muted)}
    </table>
  </td></tr>
</table>
</body>
</html>`;
}

/* ── OPTION 4: Bold Marketing ── */
function boldMarketingHTML() {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/><title>Motadata — Observe. Serve. Evolve.</title></head>
<body style="margin:0;padding:0;background:${B.light};font-family:${B.fontSafe};">
<table cellpadding="0" cellspacing="0" border="0" width="100%" style="background:${B.light};">
  <tr><td align="center" style="padding:20px 0;">
    <table cellpadding="0" cellspacing="0" border="0" width="600" style="background:${B.white};border-radius:8px;overflow:hidden;">
      <!-- Coral header banner -->
      <tr>
        <td style="background:${B.primary};padding:28px 40px;background-image:url('${B.patternUrl}');background-repeat:repeat;background-size:400px;">
          <table cellpadding="0" cellspacing="0" border="0" width="100%">
            <tr>
              <td><img src="${B.logoWhiteUrl}" alt="Motadata" width="130" style="display:block;" /></td>
              <td style="text-align:right;">
                <a href="#" style="color:rgba(255,255,255,0.9);text-decoration:none;font-size:13px;font-family:${B.fontSafe};">View in browser</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <!-- Hero -->
      <tr>
        <td style="background:${B.primary};padding:24px 40px 44px;text-align:center;">
          <h1 style="margin:0;font-size:32px;font-weight:700;color:${B.white};line-height:1.25;font-family:${B.fontSafe};">Stop Firefighting.<br/>Start Observing.</h1>
          <p style="margin:16px 0 0;font-size:16px;color:rgba(255,255,255,0.85);line-height:1.6;font-family:${B.fontSafe};">
            Join 500+ enterprises using Motadata to transform reactive IT into proactive operations.
          </p>
          <table cellpadding="0" cellspacing="0" border="0" style="margin:28px auto 0;">
            <tr><td style="background:${B.white};border-radius:6px;padding:14px 36px;">
              <a href="#" style="color:${B.primary};text-decoration:none;font-size:15px;font-weight:700;font-family:${B.fontSafe};">Book a Demo &rarr;</a>
            </td></tr>
          </table>
        </td>
      </tr>
      <!-- Stats bar -->
      <tr>
        <td style="background:${B.dark};padding:24px 40px;">
          <table cellpadding="0" cellspacing="0" border="0" width="100%">
            <tr>
              <td width="33%" style="text-align:center;">
                <p style="margin:0;font-size:28px;font-weight:700;color:${B.primary};font-family:${B.fontSafe};">500+</p>
                <p style="margin:4px 0 0;font-size:11px;color:#94a3b8;text-transform:uppercase;letter-spacing:1px;font-family:${B.fontSafe};">Enterprises</p>
              </td>
              <td width="33%" style="text-align:center;border-left:1px solid #334155;border-right:1px solid #334155;">
                <p style="margin:0;font-size:28px;font-weight:700;color:${B.primary};font-family:${B.fontSafe};">1M+</p>
                <p style="margin:4px 0 0;font-size:11px;color:#94a3b8;text-transform:uppercase;letter-spacing:1px;font-family:${B.fontSafe};">Devices</p>
              </td>
              <td width="33%" style="text-align:center;">
                <p style="margin:0;font-size:28px;font-weight:700;color:${B.primary};font-family:${B.fontSafe};">40+</p>
                <p style="margin:4px 0 0;font-size:11px;color:#94a3b8;text-transform:uppercase;letter-spacing:1px;font-family:${B.fontSafe};">Countries</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <!-- Features -->
      <tr>
        <td style="padding:36px 40px;">
          <table cellpadding="0" cellspacing="0" border="0" width="100%">
            <tr>
              <td style="padding:16px 0;border-bottom:1px solid ${B.border};">
                <h3 style="margin:0;font-size:15px;font-weight:700;color:${B.dark};font-family:${B.fontSafe};">&#x1F50D; Full-Stack Observability</h3>
                <p style="margin:6px 0 0;font-size:13px;color:${B.muted};line-height:1.6;font-family:${B.fontSafe};">Infrastructure, apps, logs, and network — all in one platform. No tool sprawl.</p>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 0;border-bottom:1px solid ${B.border};">
                <h3 style="margin:0;font-size:15px;font-weight:700;color:${B.dark};font-family:${B.fontSafe};">&#x26A1; AIOps Engine</h3>
                <p style="margin:6px 0 0;font-size:13px;color:${B.muted};line-height:1.6;font-family:${B.fontSafe};">ML-driven anomaly detection, predictive alerts, and automated root cause analysis.</p>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 0;">
                <h3 style="margin:0;font-size:15px;font-weight:700;color:${B.dark};font-family:${B.fontSafe};">&#x1F6E0; IT Service Management</h3>
                <p style="margin:6px 0 0;font-size:13px;color:${B.muted};line-height:1.6;font-family:${B.fontSafe};">ITIL-aligned ticketing, asset management, change management — fully integrated.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <!-- CTA banner -->
      <tr>
        <td style="padding:0 40px 40px;">
          <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background:${B.primary};border-radius:8px;">
            <tr><td style="padding:28px;text-align:center;">
              <h2 style="margin:0 0 8px;font-size:20px;color:${B.white};font-family:${B.fontSafe};">Start your 30-day free trial</h2>
              <p style="margin:0 0 20px;font-size:14px;color:rgba(255,255,255,0.8);font-family:${B.fontSafe};">No credit card required. Deploy in minutes.</p>
              <table cellpadding="0" cellspacing="0" border="0" style="margin:0 auto;">
                <tr><td style="background:${B.white};border-radius:6px;padding:12px 32px;">
                  <a href="#" style="color:${B.primary};text-decoration:none;font-size:14px;font-weight:700;font-family:${B.fontSafe};">Get Started &rarr;</a>
                </td></tr>
              </table>
            </td></tr>
          </table>
        </td>
      </tr>
      ${emailFooter(B.light, B.muted, B.muted)}
    </table>
  </td></tr>
</table>
</body>
</html>`;
}

/* ── OPTION 5: Enterprise Elegant ── */
function enterpriseElegantHTML() {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/><title>Motadata — Observe. Serve. Evolve.</title></head>
<body style="margin:0;padding:0;background:#f0f0f0;font-family:${B.fontSafe};">
<table cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#f0f0f0;">
  <tr><td align="center" style="padding:20px 0;">
    <table cellpadding="0" cellspacing="0" border="0" width="600" style="background:${B.white};overflow:hidden;">
      <!-- Header -->
      <tr>
        <td style="padding:32px 48px;text-align:center;">
          <img src="${B.logoUrl}" alt="Motadata" width="150" style="display:inline-block;" />
          <p style="margin:8px 0 0;font-size:12px;letter-spacing:2px;color:${B.muted};text-transform:uppercase;font-family:${B.fontSafe};">${B.tagline}</p>
        </td>
      </tr>
      <!-- Soft gradient hero -->
      <tr>
        <td style="padding:48px 48px 40px;background:linear-gradient(180deg, #fff5f3 0%, ${B.white} 100%);">
          <h1 style="margin:0;font-size:26px;font-weight:700;color:${B.dark};line-height:1.35;text-align:center;font-family:${B.fontSafe};">Enterprise-Grade Observability for the Modern CIO</h1>
          <p style="margin:16px auto 0;max-width:460px;font-size:15px;color:${B.text};line-height:1.7;text-align:center;font-family:${B.fontSafe};">
            Empower your IT organization with a unified platform that combines observability, service management, and AI-driven automation — trusted by enterprises worldwide.
          </p>
          <table cellpadding="0" cellspacing="0" border="0" style="margin:28px auto 0;">
            <tr>
              <td style="background:${B.primary};border-radius:6px;padding:13px 32px;">
                <a href="#" style="color:${B.white};text-decoration:none;font-size:14px;font-weight:600;font-family:${B.fontSafe};">Request Executive Briefing</a>
              </td>
              <td style="padding-left:12px;">
                <table cellpadding="0" cellspacing="0" border="0" style="border:1px solid ${B.border};border-radius:6px;">
                  <tr><td style="padding:12px 24px;">
                    <a href="#" style="color:${B.text};text-decoration:none;font-size:14px;font-family:${B.fontSafe};">Learn More</a>
                  </td></tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <!-- Divider -->
      <tr><td style="padding:0 48px;"><div style="height:1px;background:linear-gradient(90deg, transparent, ${B.border}, transparent);"></div></td></tr>
      <!-- Features -->
      <tr>
        <td style="padding:40px 48px;">
          <p style="margin:0 0 24px;font-size:12px;letter-spacing:2px;color:${B.primary};text-transform:uppercase;text-align:center;font-family:${B.fontSafe};">Platform Capabilities</p>
          <table cellpadding="0" cellspacing="0" border="0" width="100%">
            <tr>
              <td width="50%" style="padding:0 12px 24px 0;vertical-align:top;">
                <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-radius:8px;background:#fafafa;">
                  <tr><td style="padding:24px;">
                    <p style="margin:0 0 2px;font-size:10px;letter-spacing:1.5px;color:${B.primary};text-transform:uppercase;font-family:${B.fontSafe};">ObserveOps</p>
                    <h3 style="margin:0 0 6px;font-size:15px;font-weight:600;color:${B.dark};font-family:${B.fontSafe};">Infrastructure Monitoring</h3>
                    <p style="margin:0;font-size:12px;color:${B.muted};line-height:1.6;font-family:${B.fontSafe};">End-to-end visibility across cloud, on-prem, and hybrid environments.</p>
                  </td></tr>
                </table>
              </td>
              <td width="50%" style="padding:0 0 24px 12px;vertical-align:top;">
                <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-radius:8px;background:#fafafa;">
                  <tr><td style="padding:24px;">
                    <p style="margin:0 0 2px;font-size:10px;letter-spacing:1.5px;color:${B.primary};text-transform:uppercase;font-family:${B.fontSafe};">ObserveOps</p>
                    <h3 style="margin:0 0 6px;font-size:15px;font-weight:600;color:${B.dark};font-family:${B.fontSafe};">APM & Tracing</h3>
                    <p style="margin:0;font-size:12px;color:${B.muted};line-height:1.6;font-family:${B.fontSafe};">Deep application performance insights with distributed tracing.</p>
                  </td></tr>
                </table>
              </td>
            </tr>
            <tr>
              <td width="50%" style="padding:0 12px 0 0;vertical-align:top;">
                <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-radius:8px;background:#fafafa;">
                  <tr><td style="padding:24px;">
                    <p style="margin:0 0 2px;font-size:10px;letter-spacing:1.5px;color:${B.primary};text-transform:uppercase;font-family:${B.fontSafe};">ServiceOps</p>
                    <h3 style="margin:0 0 6px;font-size:15px;font-weight:600;color:${B.dark};font-family:${B.fontSafe};">ITSM Suite</h3>
                    <p style="margin:0;font-size:12px;color:${B.muted};line-height:1.6;font-family:${B.fontSafe};">ITIL-certified service management with automation & AI.</p>
                  </td></tr>
                </table>
              </td>
              <td width="50%" style="padding:0 0 0 12px;vertical-align:top;">
                <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-radius:8px;background:#fafafa;">
                  <tr><td style="padding:24px;">
                    <p style="margin:0 0 2px;font-size:10px;letter-spacing:1.5px;color:${B.primary};text-transform:uppercase;font-family:${B.fontSafe};">ServiceOps</p>
                    <h3 style="margin:0 0 6px;font-size:15px;font-weight:600;color:${B.dark};font-family:${B.fontSafe};">Asset Management</h3>
                    <p style="margin:0;font-size:12px;color:${B.muted};line-height:1.6;font-family:${B.fontSafe};">Complete IT asset lifecycle management with CMDB.</p>
                  </td></tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <!-- Testimonial / highlight -->
      <tr>
        <td style="padding:0 48px 40px;">
          <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-left:3px solid ${B.primary};background:#fafafa;border-radius:0 8px 8px 0;">
            <tr><td style="padding:24px 28px;">
              <p style="margin:0;font-size:15px;color:${B.text};line-height:1.7;font-style:italic;font-family:${B.fontSafe};">
                &ldquo;Motadata reduced our mean time to resolve from 4 hours to under 45 minutes. The unified platform eliminated our tool sprawl completely.&rdquo;
              </p>
              <p style="margin:12px 0 0;font-size:13px;color:${B.muted};font-family:${B.fontSafe};">&mdash; VP of IT Operations, Fortune 500 Enterprise</p>
            </td></tr>
          </table>
        </td>
      </tr>
      <!-- CTA -->
      <tr>
        <td style="padding:0 48px 48px;text-align:center;">
          <p style="margin:0 0 16px;font-size:17px;font-weight:600;color:${B.dark};font-family:${B.fontSafe};">See how Motadata can transform your IT operations</p>
          <table cellpadding="0" cellspacing="0" border="0" style="margin:0 auto;">
            <tr><td style="background:${B.primary};border-radius:6px;padding:13px 36px;">
              <a href="#" style="color:${B.white};text-decoration:none;font-size:14px;font-weight:600;font-family:${B.fontSafe};">Schedule a Personalized Demo</a>
            </td></tr>
          </table>
        </td>
      </tr>
      ${emailFooter("#fafafa", B.muted, B.muted)}
    </table>
  </td></tr>
</table>
</body>
</html>`;
}

/* ── Template definitions ── */
const templates = [
  {
    id: "minimal-corporate",
    name: "Minimal Corporate SaaS",
    description: "Clean white layout with subtle dividers and typography-focused design. Perfect for professional B2B communication.",
    style: "Clean &middot; Professional &middot; Typography-first",
    getHTML: minimalCorporateHTML,
  },
  {
    id: "dark-mode",
    name: "Dark Mode Tech",
    description: "Dark background with coral accent highlights and the brand pattern. Modern observability feel for tech-savvy audiences.",
    style: "Dark &middot; Modern &middot; Data-driven",
    getHTML: darkModeTechHTML,
  },
  {
    id: "product-centric",
    name: "Product-Centric",
    description: "Dashboard-style layout with feature cards and screenshot placeholders. Ideal for product launches and updates.",
    style: "Product &middot; Feature-focused &middot; Cards",
    getHTML: productCentricHTML,
  },
  {
    id: "bold-marketing",
    name: "Bold Marketing",
    description: "High-contrast design with bold coral hero banner, stats bar, and strong CTAs. Built for lead generation campaigns.",
    style: "Bold &middot; High-contrast &middot; Conversion",
    getHTML: boldMarketingHTML,
  },
  {
    id: "enterprise-elegant",
    name: "Enterprise Elegant",
    description: "Premium layout with soft gradients, generous spacing, and a testimonial section. Designed for enterprise buyers and CIOs.",
    style: "Elegant &middot; Premium &middot; Executive",
    getHTML: enterpriseElegantHTML,
  },
];

/* ── Copy button with feedback ── */
function CopyButton({ getHTML }: { getHTML: () => string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    const html = getHTML();
    try {
      const blob = new Blob([html], { type: "text/html" });
      await navigator.clipboard.write([
        new ClipboardItem({ "text/html": blob, "text/plain": new Blob([html], { type: "text/plain" }) }),
      ]);
    } catch {
      await navigator.clipboard.writeText(html);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <Button variant="outline" size="sm" className="gap-2" onClick={handleCopy}>
      {copied ? (
        <>
          <Check className="h-4 w-4 text-green-500" />
          Copied!
        </>
      ) : (
        <>
          <Copy className="h-4 w-4" />
          Copy HTML
        </>
      )}
    </Button>
  );
}

/* ── Collapsible preview card ── */
function EdmCard({
  template,
  index,
}: {
  template: (typeof templates)[0];
  index: number;
}) {
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <AnimateIn delay={400 + index * 100}>
      <div className="overflow-hidden rounded-xl border border-border bg-card/50 backdrop-blur-sm">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-5">
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <span className="inline-block rounded-full border border-primary/20 bg-primary/5 px-3 py-0.5 text-label-sm text-primary">
                Option {index + 1}
              </span>
              <h3 className="text-base font-bold text-foreground">{template.name}</h3>
            </div>
            <p className="mt-1 text-body-xs text-muted-foreground">{template.description}</p>
          </div>
          <div className="flex items-center gap-2">
            <CopyButton getHTML={template.getHTML} />
            <Button
              variant="ghost"
              size="sm"
              className="gap-1 text-muted-foreground"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? (
                <>
                  Collapse
                  <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  Preview
                  <ChevronDown className="h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Preview iframe */}
        {expanded && (
          <div className="border-t border-border bg-[#e5e5e5] p-4">
            <div className="mx-auto max-w-[620px] overflow-hidden rounded-lg shadow-lg">
              <iframe
                srcDoc={template.getHTML()}
                title={template.name}
                className="w-full border-0 bg-white"
                style={{ height: "800px" }}
                sandbox="allow-same-origin"
              />
            </div>
          </div>
        )}
      </div>
    </AnimateIn>
  );
}

/* ── Main export ── */
export function EdmTemplateContent() {
  return (
    <section className="relative z-10 overflow-hidden pb-24 pt-32">
      <HeroOrbs />
      <DotPattern fade="radial" />
      <DiagPattern fade="radial" className="opacity-50" />

      {/* Hero */}
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <FadeUp>
          <AnimatedBadge text="EDM Templates" />
        </FadeUp>

        <FadeUp delay={150}>
          <h1 className="mt-6 text-display-lg tracking-tight text-foreground sm:text-5xl">
            Email Marketing Templates
          </h1>
        </FadeUp>

        <FadeUp delay={300}>
          <p className="mt-4 text-body-lg text-muted-foreground">
            Production-ready, brand-consistent email templates for lead generation,
            product awareness, and demo booking. Copy the HTML and use in any
            email marketing platform.
          </p>
        </FadeUp>

        <FadeUp delay={400}>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-md border border-border bg-background px-3 py-1 text-caption text-muted-foreground">600px Standard Width</span>
            <span className="rounded-md border border-border bg-background px-3 py-1 text-caption text-muted-foreground">Table-Based Layout</span>
            <span className="rounded-md border border-border bg-background px-3 py-1 text-caption text-muted-foreground">Inline CSS</span>
            <span className="rounded-md border border-border bg-background px-3 py-1 text-caption text-muted-foreground">Gmail + Outlook Compatible</span>
          </div>
        </FadeUp>
      </div>

      {/* Templates */}
      <div className="relative mx-auto mt-16 max-w-4xl space-y-8 px-6">
        {templates.map((tpl, i) => (
          <EdmCard key={tpl.id} template={tpl} index={i} />
        ))}
      </div>

      {/* Color mapping section */}
      <div className="relative mx-auto mt-20 max-w-4xl px-6">
        <AnimateIn delay={200}>
          <div className="rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm">
            <h2 className="text-heading-sm text-foreground">Brand Color &amp; Font Mapping</h2>
            <p className="mt-1 text-body-xs text-muted-foreground">All templates strictly follow Motadata&apos;s extracted brand system.</p>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { label: "Primary", color: B.primary },
                { label: "Dark", color: B.dark },
                { label: "Text", color: B.text },
                { label: "Muted", color: B.muted },
                { label: "Background", color: B.light },
                { label: "White", color: B.white },
                { label: "Border", color: B.border },
                { label: "Accent Dark", color: B.primaryDark },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-2 rounded-md border border-border px-3 py-2">
                  <div className="h-4 w-4 rounded-full border border-border" style={{ background: c.color }} />
                  <div>
                    <p className="text-caption text-foreground">{c.label}</p>
                    <p className="text-[10px] text-muted-foreground">{c.color}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-md border border-border px-3 py-2">
              <p className="text-caption text-foreground">Font Stack</p>
              <p className="text-[11px] text-muted-foreground">Plus Jakarta Sans (web) &rarr; Arial, Helvetica, sans-serif (email-safe fallback)</p>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
