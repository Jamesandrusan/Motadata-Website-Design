"use client";

import Link from "next/link";
import {
  Activity,
  Server,
  FileText,
  Gauge,
  Network,
  Eye,
  AlertCircle,
  Bot,
  RefreshCw,
  Package,
  Wrench,
  BookOpen,
  Check,
  ArrowRight,
} from "lucide-react";

const plans = [
  {
    name: "Motadata ObserveOps",
    desc: "Unified observability platform with AI-powered insights for complete infrastructure monitoring",
    href: "/free-trial/aiops",
    features: [
      { icon: Network, label: "Network Observability" },
      { icon: FileText, label: "Network Configuration & Compliance Management" },
      { icon: Server, label: "Hybrid Infrastructure Monitoring" },
      { icon: Activity, label: "Log Monitoring" },
      { icon: Gauge, label: "Application Performance Monitoring" },
      { icon: Eye, label: "Real User Monitoring" },
    ],
  },
  {
    name: "Motadata ServiceOps",
    desc: "Intelligent IT service management platform for modern enterprises",
    href: "/free-trial/serviceops",
    features: [
      { icon: AlertCircle, label: "Service Management" },
      { icon: Package, label: "IT Asset & Configuration Management" },
      { icon: Wrench, label: "Patch & Deployment Management" },
      { icon: Bot, label: "Agentic AI & Orchestration" },
      { icon: BookOpen, label: "MSP Edition" },
    ],
  },
];

export function FtPlans() {
  return (
    <section className="relative z-10 border-t border-border py-16">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="group flex flex-col rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/40"
            >
              {/* Header */}
              <h3 className="text-heading-md text-foreground">{plan.name}</h3>
              <p className="mt-2 text-body-xs text-muted-foreground">{plan.desc}</p>

              {/* Features */}
              <div className="mt-6">
                <p className="text-overline text-muted-foreground/60">
                  Key Features
                </p>
                <ul className="mt-3 space-y-2.5">
                  {plan.features.map((f) => {
                    const Icon = f.icon;
                    return (
                      <li key={f.label} className="flex items-center gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <Icon className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-sm text-foreground">{f.label}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* CTA */}
              <div className="mt-auto pt-8">
                <Link
                  href={plan.href}
                  className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-primary text-label-md text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Start Free Trial
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Trust line */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-center text-body-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Check className="h-4 w-4 text-primary" />
            No credit card required
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="h-4 w-4 text-primary" />
            Full access to all features
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="h-4 w-4 text-primary" />
            30-day trial period
          </span>
        </div>
      </div>
    </section>
  );
}
