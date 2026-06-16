"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Cloud, Server, Clock, ArrowUpRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroOrbs, AnimatedBadge, FadeUp } from "@/components/hero-effects";

/* ── Infrastructure Monitoring Dashboard (16:9) ── */
function HeroDashboard() {
  const kpis = [
    { icon: Cloud, label: "CLOUD NODES", value: "161", color: "text-sky-500", bgLine: "bg-sky-400" },
    { icon: Server, label: "ON-PREM SERVERS", value: "85", color: "text-emerald-500", bgLine: "bg-emerald-400" },
    { icon: Clock, label: "AVG LATENCY", value: "2.3", unit: "ms", color: "text-amber-500", bgLine: "bg-amber-400" },
    { icon: ArrowUpRight, label: "UPTIME", value: "99.7", unit: "%", color: "text-violet-500", bgLine: "bg-violet-400" },
  ];

  const honeycomb = [
    "bg-emerald-400", "bg-emerald-400", "bg-emerald-500", "bg-lime-400", "bg-emerald-400", "bg-emerald-400", "bg-lime-400",
    "bg-emerald-400", "bg-lime-400", "bg-emerald-500", "bg-emerald-400", "bg-amber-400", "bg-emerald-400", "bg-emerald-400",
    "bg-emerald-500", "bg-emerald-400", "bg-emerald-400", "bg-lime-400", "bg-emerald-400", "bg-lime-400", "bg-emerald-400",
    "bg-lime-400", "bg-emerald-400", "bg-amber-400", "bg-emerald-400", "bg-emerald-400", "bg-emerald-500", "bg-red-400",
    "bg-emerald-400", "bg-emerald-500", "bg-emerald-400", "bg-orange-400", "bg-lime-400", "bg-emerald-400", "bg-emerald-400",
    "bg-lime-400", "bg-emerald-400", "bg-emerald-400", "bg-emerald-400", "bg-emerald-400", "bg-amber-400", "bg-emerald-400",
    "bg-emerald-400", "bg-lime-400", "bg-emerald-500", "bg-emerald-400", "bg-emerald-400", "bg-emerald-400", "bg-lime-400",
  ];

  const flowSources = [
    { ip: "10.20.40.157" }, { ip: "10.20.40.124" }, { ip: "10.20.40.74" },
    { ip: "10.20.40.162" }, { ip: "10.20.40.26" }, { ip: "172.16.13.71" },
  ];
  const flowDests = [
    { ip: "3.107.138.13", port: "443" }, { ip: "3.107.138.13", port: "443" },
    { ip: "23.55.95.148", port: "443" }, { ip: "23.55.95.102", port: "80" },
    { ip: "23.52.142.18", port: "443" }, { ip: "194.29.28.122", port: "80" },
  ];

  const latencyMonitors = [
    { name: "HB3.hb3.com", latency: "7 ms", color: "text-sky-500" },
    { name: "HB1.hb1.com", latency: "7 ms", color: "text-emerald-500" },
    { name: "dlink-48", latency: "6 ms", color: "text-amber-500" },
    { name: "mpls4.mpls4.com", latency: "6 ms", color: "text-violet-500" },
  ];

  const sparklines = [
    "M0,8 L4,6 L8,9 L12,5 L16,7 L20,4 L24,6 L28,3 L32,5 L36,7 L40,4",
    "M0,6 L4,8 L8,5 L12,7 L16,4 L20,6 L24,8 L28,5 L32,7 L36,4 L40,6",
    "M0,5 L4,7 L8,4 L12,8 L16,6 L20,3 L24,5 L28,7 L32,4 L36,6 L40,8",
    "M0,7 L4,5 L8,8 L12,4 L16,6 L20,8 L24,5 L28,3 L32,6 L36,8 L40,5",
  ];
  const sparkColors = ["#38bdf8", "#34d399", "#fbbf24", "#a78bfa"];

  return (
    <div className="relative rounded-l-2xl border border-border/60 border-r-0 bg-white shadow-lg overflow-hidden" style={{ aspectRatio: "3839/2399" }}>
      <div className="absolute inset-0 flex flex-col p-4 lg:p-5">
        {/* Row 1: KPI Cards */}
        <div className="grid grid-cols-4 gap-3 mb-3">
          {kpis.map((kpi) => {
            const Icon = kpi.icon;
            return (
              <div key={kpi.label} className="rounded-xl border border-border/40 bg-white p-3 relative overflow-hidden">
                <div className={`absolute bottom-0 left-0 right-0 h-[2px] ${kpi.bgLine} opacity-40`} />
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Icon className={`h-3 w-3 ${kpi.color}`} />
                  <span className="text-[8px] font-semibold text-foreground/40 uppercase tracking-wider">{kpi.label}</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-heading-lg text-foreground/80">{kpi.value}</span>
                  {kpi.unit && <span className="text-[10px] font-medium text-foreground/35">{kpi.unit}</span>}
                </div>
              </div>
            );
          })}
        </div>

        {/* Row 2: Heatmap + Network Flow */}
        <div className="grid grid-cols-2 gap-3 mb-3 flex-1 min-h-0">
          <div className="rounded-xl border border-border/40 bg-white p-3 flex flex-col">
            <div className="flex items-center justify-between mb-1">
              <div>
                <span className="text-[11px] font-semibold text-foreground/70">Infrastructure Heatmap</span>
                <p className="text-[8px] text-foreground/35">Server health monitoring</p>
              </div>
              <div className="flex items-center gap-1">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[8px] text-foreground/35 font-medium">Live</span>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div className="grid grid-cols-7 gap-[3px]">
                {honeycomb.map((color, i) => (
                  <div key={i} className={`w-4 h-4 lg:w-5 lg:h-5 rounded-md ${color} opacity-70`}
                    style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                  />
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2 mt-1.5">
              {[
                { color: "bg-red-500", label: "Down" },
                { color: "bg-orange-500", label: "Critical" },
                { color: "bg-amber-400", label: "Major" },
                { color: "bg-lime-400", label: "Warning" },
                { color: "bg-emerald-400", label: "Clear" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-0.5">
                  <div className={`h-1.5 w-1.5 rounded-full ${s.color}`} />
                  <span className="text-[7px] text-foreground/35">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border/40 bg-white p-3 flex flex-col">
            <div className="flex items-center justify-between mb-1">
              <div>
                <span className="text-[11px] font-semibold text-foreground/70">Network Flow</span>
                <p className="text-[8px] text-foreground/35">Traffic routing analysis</p>
              </div>
              <div className="flex items-center gap-1">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[8px] text-foreground/35 font-medium">Live</span>
              </div>
            </div>
            <div className="flex-1 flex items-center">
              <div className="w-full grid grid-cols-[1fr,auto,1fr] gap-1 items-center">
                <div className="space-y-[2px]">
                  <span className="text-[7px] font-semibold text-foreground/35 uppercase">Source IPs</span>
                  {flowSources.map((s, i) => (
                    <div key={i} className="text-[8px] text-foreground/50 font-mono leading-tight">{s.ip}</div>
                  ))}
                  <div className="text-[7px] text-foreground/25 mt-0.5">Port: 0 (Unknown)</div>
                </div>
                <div className="flex flex-col items-center gap-[2px] px-1">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="flex items-center">
                      <div className={`h-[1.5px] w-8 lg:w-12 ${
                        i === 0 ? "bg-sky-400" : i === 1 ? "bg-emerald-400" : i === 2 ? "bg-amber-400" : i === 3 ? "bg-violet-400" : i === 4 ? "bg-rose-400" : "bg-teal-400"
                      } opacity-50 rounded-full`} />
                      <ChevronDown className="h-2 w-2 -rotate-90 text-foreground/20" />
                    </div>
                  ))}
                </div>
                <div className="space-y-[2px]">
                  <span className="text-[7px] font-semibold text-foreground/35 uppercase">Destination IPs</span>
                  {flowDests.map((d, i) => (
                    <div key={i} className="text-[8px] text-foreground/50 font-mono leading-tight">{d.ip}</div>
                  ))}
                  <div className="text-[7px] text-foreground/25 mt-0.5">Port: 443 / 80</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 3: Latency Table */}
        <div className="rounded-xl border border-border/40 bg-white p-3">
          <div className="flex items-center justify-between mb-2">
            <div>
              <span className="text-[11px] font-semibold text-foreground/70">Top Network Monitor by Latency</span>
              <span className="ml-2 text-[8px] text-foreground/35">Real-time latency monitoring</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[8px] text-foreground/35 font-medium">Live</span>
            </div>
          </div>
          <div className="grid grid-cols-[1.5fr,0.5fr,1fr] gap-2 mb-1 px-1">
            <span className="text-[8px] font-semibold text-foreground/30 uppercase">Monitor</span>
            <span className="text-[8px] font-semibold text-foreground/30 uppercase">Latency</span>
            <span className="text-[8px] font-semibold text-foreground/30 uppercase">Sparkline</span>
          </div>
          <div className="space-y-[3px]">
            {latencyMonitors.map((m, i) => (
              <div key={m.name} className="grid grid-cols-[1.5fr,0.5fr,1fr] gap-2 items-center rounded-lg bg-foreground/[0.02] px-2 py-1.5">
                <span className={`text-[9px] font-medium ${m.color}`}>{m.name}</span>
                <span className="text-[9px] font-semibold text-foreground/60">{m.latency}</span>
                <svg viewBox="0 0 40 12" className="w-full h-3" preserveAspectRatio="none">
                  <path d={sparklines[i]} fill="none" stroke={sparkColors[i]} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function HIMHero() {
  const [showScreenshot, setShowScreenshot] = useState(true);

  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <HeroOrbs />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr,1fr] lg:gap-8">

          {/* ── Left: Text Content ── */}
          <div className="max-w-xl">
            <FadeUp delay={100}>
              <AnimatedBadge text="Hybrid Infrastructure Monitoring" />
            </FadeUp>

            <FadeUp delay={250}>
              <h1 className="mt-6 text-[clamp(2rem,4.5vw,3.75rem)] font-bold leading-[1.1] tracking-tight">
                Performance, Assured.
              </h1>
            </FadeUp>

            <FadeUp delay={400}>
              <p className="mt-5 text-body-md text-muted-foreground">
                From servers to services, from cloud to containers — assuring visibility, performance, and continuity across your hybrid ecosystem. Monitor servers, applications, databases, storage, and containers — all from a single intelligent platform powered by AI-driven analytics.
              </p>
            </FadeUp>

            <FadeUp delay={550}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button size="lg" className="hero-shimmer h-12 px-7 text-[15px] bg-foreground text-background hover:bg-foreground/90">
                  Start Free Trial <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-7 text-[15px]">
                  Schedule Demo
                </Button>
              </div>
            </FadeUp>

            <FadeUp delay={600}>
              <p className="mt-6 max-w-md text-body-xs text-muted-foreground">
                From physical to virtual, from on-premise to cloud — assuring stability, scalability, and seamless operations.
              </p>
            </FadeUp>
          </div>

          {/* ── Right: Dashboard — starts from the second half, bleeds to right viewport edge ── */}
          <FadeUp delay={500}>
            <div
              className="relative lg:-mr-[calc((100vw-80rem)/2+1.5rem)] lg:w-[calc(100%+(100vw-80rem)/2+1.5rem)] cursor-pointer"
              onClick={() => setShowScreenshot((prev) => !prev)}
            >
              {/* Orange rectangle behind the dashboard — offset 32px left & 32px bottom */}
              <div className="absolute -left-8 -bottom-8 w-full h-full rounded-l-2xl bg-primary/15" />

              <div className="relative">
                {showScreenshot ? (
                  <div className="relative rounded-l-2xl border border-border/60 border-r-0 bg-white shadow-lg overflow-hidden">
                    <Image
                      src="/him-dashboard.png"
                      alt="Motadata ObserveOps Performance Summary Dashboard"
                      width={3839}
                      height={2399}
                      className="w-full h-auto"
                      priority
                    />
                  </div>
                ) : (
                  <HeroDashboard />
                )}
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
