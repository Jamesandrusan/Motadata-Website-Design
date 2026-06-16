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
  Sparkles,
} from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { OdPatternBg } from "./od-pattern-bg";
import type { OdTheme } from "./od-theme";

/**
 * Option 6 — Pure Black + Stroke Pattern
 * Same as Option 4 but with outline/stroke-only brand mark pattern.
 */

const FREE_DOMAINS = [
  "gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "aol.com",
  "icloud.com", "mail.com", "protonmail.com", "zoho.com", "yandex.com",
];

const MODULES = [
  { icon: Network, label: "Network" },
  { icon: Shield, label: "Compliance" },
  { icon: Server, label: "Infra" },
  { icon: FileSearch, label: "Logs" },
  { icon: Gauge, label: "APM" },
  { icon: MonitorSmartphone, label: "RUM" },
];

interface OdLoginV6Props {
  onLogin: (email: string) => void;
  theme: OdTheme;
}

export function OdLoginV6({ onLogin, theme }: OdLoginV6Props) {
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
      {/* Brand mark pattern — stroke only at low opacity */}
      <OdPatternBg markSize={64} gap={12} opacity={theme.mode === "dark" ? 0.08 : 0.06} fill={theme.patternFill} strokeOnly strokeWidth={0.8} />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center px-6 py-12">
        {/* Logo */}
        <BrandLogo className={`mb-12 h-8 ${theme.logoClass}`} />

        {/* Card with inner glow */}
        <div
          className={`w-full max-w-md rounded-2xl border ${theme.cardBorder} ${theme.cardBg} px-8 py-10 sm:px-10 sm:py-12`}
          style={{
            backdropFilter: "blur(2px)",
            WebkitBackdropFilter: "blur(2px)",
            boxShadow: theme.cardShadow,
          }}
        >
          {/* Badge */}
          <div className="mb-6 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#F17463]/10 px-4 py-1.5">
              <Sparkles className="h-3.5 w-3.5" style={{ color: "#F17463" }} />
              <span className="text-label-md" style={{ color: "#F17463" }}>
                Interactive Demo
              </span>
            </div>
          </div>

          <h2 className={`text-center text-heading-lg ${theme.textPrimary} sm:text-3xl`}>
            Try ObserveOps Now
          </h2>
          <p className={`mt-2 text-center text-base ${theme.textTertiary}`}>
            Instant access — no sign-up required
          </p>

          <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
            <div>
              <input
                type="email"
                placeholder="Business email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); if (error) setError(""); }}
                className={`h-14 w-full rounded-xl border ${theme.inputBg} px-5 text-base ${theme.inputText} ${theme.placeholder} outline-none transition-colors focus:border-[#F17463]/50 ${
                  error ? "border-red-500" : theme.inputBorder
                }`}
                disabled={loading}
              />
              {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex h-14 w-full items-center justify-center gap-2.5 rounded-xl text-base font-bold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
              style={{
                background: "linear-gradient(135deg, #F17463 0%, #e85d4a 100%)",
              }}
            >
              {loading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Loading...
                </>
              ) : (
                <>
                  Open Live Demo
                  <ArrowRight className="h-5 w-5" />
                </>
              )}
            </button>
          </form>

          {/* Module icons row */}
          <div className="mt-8 flex items-center justify-center gap-4">
            {MODULES.map(({ icon: Icon, label }) => (
              <div key={label} className="group relative">
                <Icon className={`h-5 w-5 ${theme.moduleIconDefault} transition-colors ${theme.moduleIconHover}`} />
                <span className={`pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded ${theme.tooltipBg} px-2.5 py-1 text-xs ${theme.tooltipText} opacity-0 transition-opacity group-hover:opacity-100`}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Social proof */}
        <p className={`mt-10 text-center text-base ${theme.textMuted}`}>
          Trusted by <span className={`font-semibold ${theme.textTertiary}`}>500+</span> enterprise teams worldwide
        </p>

        {/* Trust indicators */}
        <div className={`mt-4 flex items-center gap-6 text-sm ${theme.textFaint}`}>
          <span className="flex items-center gap-2">
            <Activity className="h-4 w-4" /> Live Data
          </span>
          <span className={`h-4 w-px ${theme.divider}`} />
          <span>No Credit Card</span>
          <span className={`h-4 w-px ${theme.divider}`} />
          <span>Instant Access</span>
        </div>
      </div>
    </div>
  );
}
