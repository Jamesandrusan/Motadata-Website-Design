"use client";

import { useState } from "react";
import {
  ArrowRight,
  Loader2,
  Activity,
  Network,
  Shield,
  Server,
  FileSearch,
  Gauge,
  MonitorSmartphone,
} from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import type { OdTheme } from "./od-theme";

/**
 * Option 3 — Borderless / No-Box
 * Ultra-minimal approach inspired by Linear/Stripe.
 * No card container — form floats directly on the background.
 * Clean typography hierarchy, inline email + CTA.
 */

const FREE_DOMAINS = [
  "gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "aol.com",
  "icloud.com", "mail.com", "protonmail.com", "zoho.com", "yandex.com",
];

const FEATURES = [
  { icon: Network, text: "Network Observability" },
  { icon: Shield, text: "NCCM" },
  { icon: Server, text: "Hybrid Infra Monitoring" },
  { icon: FileSearch, text: "Log Monitoring" },
  { icon: Gauge, text: "Application Performance Monitoring" },
  { icon: MonitorSmartphone, text: "Real User Monitoring" },
];

interface OdLoginV3Props {
  onLogin: (email: string) => void;
  theme: OdTheme;
}

export function OdLoginV3({ onLogin, theme }: OdLoginV3Props) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) { setError("Email is required"); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError("Please enter a valid email"); return; }
    const domain = email.split("@")[1]?.toLowerCase();
    if (domain && FREE_DOMAINS.includes(domain)) { setError("Please use your business email"); return; }
    setLoading(true);
    setTimeout(() => onLogin(email), 800);
  };

  return (
    <div className="fixed inset-0 z-[100] overflow-x-hidden overflow-y-auto" style={{ backgroundColor: theme.rootBg }}>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 py-16">
        <div className="mx-auto w-full max-w-xl">
          {/* Logo */}
          <div className="mb-12 flex items-center gap-3">
            <BrandLogo className={`h-5 ${theme.logoClass}`} />
            <div className={`h-4 w-px ${theme.divider}`} />
            <div className="flex items-center gap-1.5">
              <Activity className="h-3.5 w-3.5" style={{ color: "#F17463" }} />
              <span className={`text-label-sm ${theme.textTertiary}`}>ObserveOps</span>
            </div>
          </div>

          {/* Headline — large, bold, no box */}
          <h1 className={`text-heading-xl leading-tight ${theme.textPrimary} sm:text-4xl lg:text-5xl`}>
            Explore the
            <br />
            <span style={{ color: "#F17463" }}>Live Demo</span>
          </h1>
          <p className={`mt-4 max-w-md text-base leading-relaxed ${theme.textTertiary}`}>
            Get instant access to interactive dashboards with real-time sample data. No setup required.
          </p>

          {/* Inline form — no card wrapper */}
          <form onSubmit={handleSubmit} noValidate className="mt-10">
            <label className={`mb-2 block text-label-md ${theme.textSecondary}`}>
              Enter your business email
            </label>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => { setEmail(e.target.value); if (error) setError(""); }}
                className={`h-12 min-w-0 flex-1 rounded-xl border ${theme.inputBg} px-4 text-sm ${theme.inputText} ${theme.placeholder} outline-none transition-colors focus:border-[#F17463]/60 ${
                  error ? "border-red-500" : theme.inputBorder
                }`}
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading}
                className="inline-flex h-12 shrink-0 items-center gap-2 rounded-xl px-6 text-label-md-strong text-white transition-opacity hover:opacity-90 disabled:opacity-60"
                style={{ backgroundColor: "#F17463" }}
              >
                {loading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <>
                    Launch <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
            {error && <p className="mt-2 text-xs text-red-400">{error}</p>}
            <p className={`mt-3 text-[11px] ${theme.textMuted}`}>
              No password needed — enter any business email to start exploring.
            </p>
          </form>

          {/* Divider */}
          <div className={`my-10 h-px ${theme.divider}`} />

          {/* Feature list — two columns */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-5">
            {FEATURES.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2.5">
                <Icon className="h-4 w-4 shrink-0" style={{ color: "#F17463" }} />
                <span className={`text-sm ${theme.textTertiary}`}>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
