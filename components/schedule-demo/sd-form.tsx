"use client";

import { useState } from "react";
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
  User,
  Mail,
  Building2,
  Phone,
} from "lucide-react";

const products = [
  {
    id: "observeops",
    name: "Motadata AIOps",
    desc: "Unified observability platform with AI-powered insights for complete infrastructure monitoring",
    features: [
      { icon: Activity, label: "AI-native observability" },
      { icon: Server, label: "Infrastructure monitoring" },
      { icon: FileText, label: "Log analytics" },
      { icon: Gauge, label: "Application performance monitoring" },
      { icon: Network, label: "Network monitoring" },
      { icon: Eye, label: "Real user monitoring" },
    ],
  },
  {
    id: "serviceops",
    name: "Motadata ServiceOps",
    desc: "Intelligent IT service management platform for modern enterprises",
    features: [
      { icon: AlertCircle, label: "Intelligent incident management" },
      { icon: Bot, label: "AI-powered service desk" },
      { icon: RefreshCw, label: "Change management" },
      { icon: Package, label: "Asset management" },
      { icon: Wrench, label: "Patch management" },
      { icon: BookOpen, label: "Knowledge management" },
    ],
  },
];

export function SdForm() {
  const [selected, setSelected] = useState("observeops");

  return (
    <section className="relative z-10 border-t border-border py-16">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

          {/* Left — Product selection */}
          <div className="space-y-4">
            <p className="text-overline text-muted-foreground/60 mb-4">
              Select Product for Demo
            </p>
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => setSelected(product.id)}
                className={`w-full text-left rounded-2xl border p-6 transition-colors ${
                  selected === product.id
                    ? "border-primary/40 bg-primary/[0.03]"
                    : "border-border bg-card hover:border-primary/20"
                }`}
              >
                <h3 className="text-heading-sm text-foreground">{product.name}</h3>
                <p className="mt-1.5 text-body-xs text-muted-foreground">{product.desc}</p>
                <ul className="mt-4 grid grid-cols-2 gap-2">
                  {product.features.map((f) => {
                    const Icon = f.icon;
                    return (
                      <li key={f.label} className="flex items-center gap-2">
                        <Icon className="h-3.5 w-3.5 text-primary" />
                        <span className="text-caption text-muted-foreground">{f.label}</span>
                      </li>
                    );
                  })}
                </ul>
              </button>
            ))}
          </div>

          {/* Right — Contact form */}
          <div className="rounded-2xl border border-border bg-card p-8">
            <h3 className="text-heading-md text-foreground">Request Your Demo</h3>
            <p className="mt-2 text-body-xs text-muted-foreground">
              Fill in your details and our team will reach out to schedule a personalized demo.
            </p>

            <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-caption text-foreground">First Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/50" />
                    <input
                      type="text"
                      placeholder="John"
                      className="h-11 w-full rounded-xl border border-border bg-background pl-10 pr-4 text-sm text-foreground outline-none transition-colors focus:border-primary/40"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-caption text-foreground">Last Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/50" />
                    <input
                      type="text"
                      placeholder="Doe"
                      className="h-11 w-full rounded-xl border border-border bg-background pl-10 pr-4 text-sm text-foreground outline-none transition-colors focus:border-primary/40"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-caption text-foreground">Work Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/50" />
                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="h-11 w-full rounded-xl border border-border bg-background pl-10 pr-4 text-sm text-foreground outline-none transition-colors focus:border-primary/40"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-caption text-foreground">Company</label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/50" />
                  <input
                    type="text"
                    placeholder="Company name"
                    className="h-11 w-full rounded-xl border border-border bg-background pl-10 pr-4 text-sm text-foreground outline-none transition-colors focus:border-primary/40"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-caption text-foreground">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/50" />
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="h-11 w-full rounded-xl border border-border bg-background pl-10 pr-4 text-sm text-foreground outline-none transition-colors focus:border-primary/40"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-caption text-foreground">Message (Optional)</label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your requirements..."
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary/40 resize-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-primary text-label-md text-primary-foreground transition-opacity hover:opacity-90"
              >
                Schedule Demo
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            {/* Trust line */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-center text-caption text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-primary" />
                No commitment required
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-primary" />
                Personalized walkthrough
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-primary" />
                30-min session
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
