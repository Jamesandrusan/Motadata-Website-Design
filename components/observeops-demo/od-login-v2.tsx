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
import { OdPatternBg } from "./od-pattern-bg";
import type { OdTheme } from "./od-theme";

const FREE_DOMAINS = [
  "gmail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "aol.com",
  "icloud.com",
  "mail.com",
  "protonmail.com",
  "zoho.com",
  "yandex.com",
];

const MODULES = [
  { icon: Network, label: "Network" },
  { icon: Shield, label: "Compliance" },
  { icon: Server, label: "Infrastructure" },
  { icon: FileSearch, label: "Log Analytics" },
  { icon: Gauge, label: "APM" },
  { icon: MonitorSmartphone, label: "RUM" },
];

interface OdLoginV2Props {
  onLogin: (email: string) => void;
  theme: OdTheme;
}

export function OdLoginV2({ onLogin, theme }: OdLoginV2Props) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Email is required");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email");
      return;
    }
    const domain = email.split("@")[1]?.toLowerCase();
    if (domain && FREE_DOMAINS.includes(domain)) {
      setError("Please use your business email");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      onLogin(email);
    }, 800);
  };

  return (
    <div
      className="fixed inset-0 z-[100] overflow-x-hidden overflow-y-auto"
      style={{ backgroundColor: theme.rootBg }}
    >
      {/* Brand mark pattern — outline/stroke only */}
      <OdPatternBg markSize={64} gap={8} opacity={theme.mode === "dark" ? 0.08 : 0.06} fill={theme.patternFill} strokeOnly strokeWidth={0.8} />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center px-6 py-12">
        {/* Logo */}
        <div className="mb-10">
          <BrandLogo className={`h-8 ${theme.logoClass}`} />
        </div>

        {/* Headline */}
        <div className="mb-3 flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <Activity className="h-4 w-4" style={{ color: "#F17463" }} />
            <span className="text-label-md tracking-wider uppercase" style={{ color: "#F17463" }}>
              ObserveOps Live Demo
            </span>
          </div>
          <h1 className={`text-center text-heading-xl ${theme.textPrimary} sm:text-4xl`}>
            Experience Full-Stack Observability
          </h1>
        </div>
        <p className={`mb-10 max-w-lg text-center text-base leading-relaxed ${theme.textTertiary}`}>
          Explore live dashboards across 6 modules — no setup, no installation.
        </p>

        {/* Card */}
        <div
          className={`w-full max-w-md rounded-2xl border ${theme.cardBorder} ${theme.cardBg} px-8 py-10 shadow-2xl sm:px-10 sm:py-12`}
          style={{ backdropFilter: "blur(12px)" }}
        >
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div>
              <label className={`mb-2 block text-label-md ${theme.textSecondary}`}>
                Business Email
              </label>
              <input
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError("");
                }}
                className={`h-14 w-full rounded-xl border ${theme.inputBg} px-5 text-base ${theme.inputText} ${theme.placeholder} outline-none transition-colors focus:border-[#F17463]/60 ${
                  error ? "border-red-500" : theme.inputBorder
                }`}
                disabled={loading}
              />
              {error && (
                <p className="mt-2 text-sm text-red-400">{error}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex h-14 w-full items-center justify-center gap-2.5 rounded-xl text-base font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-90 disabled:opacity-60"
              style={{ backgroundColor: "#F17463" }}
            >
              {loading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Launching Demo...
                </>
              ) : (
                <>
                  Launch Demo
                  <ArrowRight className="h-5 w-5" />
                </>
              )}
            </button>
          </form>

          <p className={`mt-6 text-center text-sm ${theme.textMuted}`}>
            No password needed. Instant access with your business email.
          </p>
        </div>

        {/* Module chips */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
          {MODULES.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className={`inline-flex items-center gap-2 rounded-full border ${theme.chipBorder} ${theme.chipBg} px-4 py-2 text-label-md ${theme.textTertiary}`}
            >
              <span className={`flex h-6 w-6 items-center justify-center rounded-md ${theme.iconContainerBg}`}>
                <Icon className={`h-3.5 w-3.5 ${theme.textTertiary}`} />
              </span>
              {label}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
