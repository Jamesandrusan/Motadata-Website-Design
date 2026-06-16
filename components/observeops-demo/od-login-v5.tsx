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
  Play,
} from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import type { OdTheme } from "./od-theme";

/**
 * Option 5 — Product-Led Split
 * Left: compact login form. Right: animated product preview with module cards.
 * Shows exactly what the user will explore — product-led growth style.
 */

const FREE_DOMAINS = [
  "gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "aol.com",
  "icloud.com", "mail.com", "protonmail.com", "zoho.com", "yandex.com",
];

const MODULES = [
  { icon: Network, label: "Network Observability", desc: "Real-time topology & performance" },
  { icon: Shield, label: "NCCM", desc: "Automated audit & policy checks" },
  { icon: Server, label: "Hybrid Infra Monitoring", desc: "Server & cloud metrics" },
  { icon: FileSearch, label: "Log Monitoring", desc: "Centralized log search" },
  { icon: Gauge, label: "Application Performance Monitoring", desc: "Application traces & errors" },
  { icon: MonitorSmartphone, label: "Real User Monitoring", desc: "End-user experience" },
];

interface OdLoginV5Props {
  onLogin: (email: string) => void;
  theme: OdTheme;
}

export function OdLoginV5({ onLogin, theme }: OdLoginV5Props) {
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
      <div className="mx-auto flex min-h-screen w-full max-w-7xl">
        {/* Left Panel — Branding */}
        <div className="hidden w-2/3 flex-col justify-between px-6 py-12 lg:flex xl:px-16">
          <div>
            <div className="flex items-center gap-3">
              <BrandLogo className={`h-6 ${theme.logoClass}`} />
              <span className="rounded-full bg-[#F17463]/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider" style={{ color: "#F17463" }}>
                Demo
              </span>
            </div>
          </div>

          <div>
            <div className="mb-6 flex items-center gap-2">
              <Activity className="h-5 w-5" style={{ color: "#F17463" }} />
              <span className="text-label-md tracking-wider uppercase" style={{ color: "#F17463" }}>
                ObserveOps
              </span>
            </div>
            <h2 className={`text-display-lg leading-tight ${theme.textPrimary} lg:text-5xl`}>
              See it in action
            </h2>
            <p className={`mt-5 max-w-md text-lg leading-relaxed ${theme.textTertiary}`}>
              Enter your email to explore the full ObserveOps platform with live sample data.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5">
              {MODULES.map(({ icon: Icon, label }) => (
                <div key={label} className={`flex items-center gap-2.5 text-sm ${theme.textTertiary}`}>
                  <Icon className="h-4 w-4 shrink-0" style={{ color: "#F17463" }} />
                  {label}
                </div>
              ))}
            </div>
            <div className="mt-8 flex items-center gap-3">
              <span className={`inline-flex items-center gap-1.5 rounded-full border ${theme.chipBorder} ${theme.chipBg} px-4 py-2 text-sm ${theme.textSecondary}`}>
                <span className={`font-bold ${theme.textPrimary}`}>50+</span> Widgets
              </span>
              <span className={`inline-flex items-center gap-1.5 rounded-full border ${theme.chipBorder} ${theme.chipBg} px-4 py-2 text-sm ${theme.textSecondary}`}>
                <span className={`font-bold ${theme.textPrimary}`}>AI</span> Powered
              </span>
            </div>
          </div>

          <p className={`text-xs ${theme.textFaint}`}>
            &copy; {new Date().getFullYear()} Motadata. All rights reserved.
          </p>
        </div>

        {/* Right Panel — Login Form */}
        <div className="flex w-full items-center justify-center px-6 py-12 lg:w-1/3 lg:px-0">
          <div className={`w-full max-w-md rounded-2xl border ${theme.cardBorder} ${theme.cardBg} p-8 sm:p-10`}>
            {/* Mobile logo */}
            <div className="mb-8 flex items-center gap-2 lg:hidden">
              <BrandLogo className={`h-5 ${theme.logoClass}`} />
            </div>

            <h2 className={`text-heading-lg ${theme.textPrimary}`}>Start Exploring</h2>
            <p className={`mt-2 text-base ${theme.textTertiary}`}>
              Enter your business email to access the live demo
            </p>

            <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
              <div>
                <label className={`mb-1.5 block text-label-md ${theme.textSecondary}`}>
                  Business Email
                </label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); if (error) setError(""); }}
                  className={`h-14 w-full rounded-xl border ${theme.inputBg} px-5 text-base ${theme.inputText} ${theme.placeholder} outline-none transition-colors focus:border-[#F17463]/60 ${
                    error ? "border-red-500" : theme.inputBorder
                  }`}
                  disabled={loading}
                />
                {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex h-14 w-full items-center justify-center gap-2.5 rounded-xl text-base font-bold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
                style={{ backgroundColor: "#F17463" }}
              >
                {loading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Launching...
                  </>
                ) : (
                  <>
                    <Play className="h-5 w-5" />
                    Start Exploring
                  </>
                )}
              </button>
            </form>

            <p className={`mt-6 text-center text-sm ${theme.textMuted}`}>
              No password or credit card required. Instant access.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
