"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/* ── Icon CDN helper ── */
const ICON = (slug: string, hex: string) =>
  `https://cdn.simpleicons.org/${slug}/${hex}`;

interface OrbitItem {
  name: string;
  short: string;
  icon: string;
}

const ring1: OrbitItem[] = [
  { name: "AWS", short: "AWS", icon: ICON("amazonwebservices", "FF9900") },
  { name: "Azure", short: "Az", icon: ICON("microsoftazure", "0078D4") },
  { name: "Slack", short: "Sl", icon: ICON("slack", "4A154B") },
  { name: "Docker", short: "Dk", icon: ICON("docker", "2496ED") },
];

const ring2: OrbitItem[] = [
  { name: "Google Cloud", short: "GC", icon: ICON("googlecloud", "4285F4") },
  { name: "ServiceNow", short: "SN", icon: ICON("servicenow", "62B58F") },
  { name: "Jira", short: "Ji", icon: ICON("jira", "0052CC") },
  { name: "Kubernetes", short: "K8s", icon: ICON("kubernetes", "326CE5") },
  { name: "Jenkins", short: "Jk", icon: ICON("jenkins", "D24939") },
  { name: "Terraform", short: "Tf", icon: ICON("terraform", "844FBA") },
];

const ring3: OrbitItem[] = [
  { name: "Datadog", short: "DD", icon: ICON("datadog", "632CA6") },
  { name: "Splunk", short: "Sp", icon: ICON("splunk", "000000") },
  { name: "PostgreSQL", short: "Pg", icon: ICON("postgresql", "4169E1") },
  { name: "MongoDB", short: "Mg", icon: ICON("mongodb", "47A248") },
  { name: "Grafana", short: "Gr", icon: ICON("grafana", "F46800") },
  { name: "GitHub", short: "GH", icon: ICON("github", "181717") },
  { name: "Redis", short: "Rd", icon: ICON("redis", "DC382D") },
  { name: "GitLab", short: "GL", icon: ICON("gitlab", "FC6D26") },
];

const ITEM = 46;

/* ── Logo with fallback ── */
function Logo({ item }: { item: OrbitItem }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <span className="text-[9px] font-bold text-muted-foreground">{item.short}</span>;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={item.icon} alt={item.name} width={20} height={20} loading="lazy" onError={() => setFailed(true)} />
  );
}

/* ── Single orbit ring ── */
function OrbitRing({
  items, radius, duration, reverse,
}: {
  items: OrbitItem[]; radius: number; duration: number; reverse?: boolean;
}) {
  const dir = reverse ? "ccw" : "cw";
  const counterDir = reverse ? "cw" : "ccw";
  const d = radius * 2;

  return (
    <div className="orbit-ring absolute" style={{ width: d, height: d, animation: `orbit-${dir} ${duration}s linear infinite` }}>
      <svg className="absolute inset-0" width={d} height={d} viewBox={`0 0 ${d} ${d}`} fill="none">
        <circle cx={radius} cy={radius} r={radius - 1} stroke="hsl(var(--primary) / 0.08)" strokeWidth="1" strokeDasharray="4 6" />
      </svg>
      {items.map((item, i) => {
        const a = (2 * Math.PI * i) / items.length - Math.PI / 2;
        return (
          <div key={item.name} className="absolute z-10" style={{ left: radius + radius * Math.cos(a) - ITEM / 2, top: radius + radius * Math.sin(a) - ITEM / 2, width: ITEM, height: ITEM, animation: `orbit-${counterDir} ${duration}s linear infinite` }}>
            <div className="orbit-item group flex h-full w-full items-center justify-center rounded-xl border bg-white shadow-sm" title={item.name}>
              <Logo item={item} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   OPTION A — Full visible orbit, text overlaid in center
   ══════════════════════════════════════════════════════ */

export function IntegrationSection() {
  return (
    <section id="integrations" className="relative z-10 overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl px-6 py-24">
        {/* ── Orbit behind everything ── */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          {/* Radial glow */}
          <div className="absolute rounded-full" style={{ width: 500, height: 500, background: "radial-gradient(circle, hsl(var(--primary) / 0.06) 0%, hsl(var(--primary) / 0.02) 40%, transparent 70%)" }} />

          {/* Pulsing center dot */}
          <div className="absolute h-3 w-3 rounded-full bg-primary/30" style={{ animation: "orbit-pulse 3s ease-in-out infinite" }} />

          <div className="orbit-container relative flex items-center justify-center" style={{ width: 620, height: 620 }}>
            <OrbitRing items={ring1} radius={100} duration={24} />
            <OrbitRing items={ring2} radius={195} duration={40} reverse />
            <OrbitRing items={ring3} radius={290} duration={58} />
          </div>
        </div>

        {/* ── Text centered on top ── */}
        <div className="relative z-10 mx-auto flex min-h-[520px] max-w-xl flex-col items-center justify-center text-center">
          <div className="rounded-2xl bg-white/80 px-8 py-10 backdrop-blur-sm">
            <p className="text-overline text-primary">Integrations</p>
            <h2 className="mt-3 text-heading-xl text-foreground sm:text-4xl">
              200+ Out-of-the-Box Integrations
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-body-md text-muted-foreground">
              Connect with your entire technology stack instantly. No complex
              configurations, no lengthy setups — just seamless integration with
              the tools you already use.
            </p>
            <div className="mt-8">
              <Button size="lg" className="h-12 px-8 text-[15px]">
                Start Building for Free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
