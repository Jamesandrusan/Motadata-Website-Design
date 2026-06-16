"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/* ── Icon CDN helper ── */
const ICON = (slug: string, hex: string) =>
  `https://cdn.simpleicons.org/${slug}/${hex}`;

interface NodeItem {
  name: string;
  short: string;
  icon: string;
}

const innerNodes: NodeItem[] = [
  { name: "AWS", short: "AWS", icon: ICON("amazonwebservices", "FF9900") },
  { name: "Azure", short: "Az", icon: ICON("microsoftazure", "0078D4") },
  { name: "Google Cloud", short: "GC", icon: ICON("googlecloud", "4285F4") },
  { name: "Docker", short: "Dk", icon: ICON("docker", "2496ED") },
  { name: "Slack", short: "Sl", icon: ICON("slack", "4A154B") },
  { name: "Kubernetes", short: "K8s", icon: ICON("kubernetes", "326CE5") },
];

const outerNodes: NodeItem[] = [
  { name: "Jira", short: "Ji", icon: ICON("jira", "0052CC") },
  { name: "Jenkins", short: "Jk", icon: ICON("jenkins", "D24939") },
  { name: "Datadog", short: "DD", icon: ICON("datadog", "632CA6") },
  { name: "Grafana", short: "Gr", icon: ICON("grafana", "F46800") },
  { name: "PostgreSQL", short: "Pg", icon: ICON("postgresql", "4169E1") },
  { name: "MongoDB", short: "Mg", icon: ICON("mongodb", "47A248") },
  { name: "GitHub", short: "GH", icon: ICON("github", "181717") },
  { name: "Redis", short: "Rd", icon: ICON("redis", "DC382D") },
  { name: "Terraform", short: "Tf", icon: ICON("terraform", "844FBA") },
  { name: "GitLab", short: "GL", icon: ICON("gitlab", "FC6D26") },
  { name: "Prometheus", short: "Pr", icon: ICON("prometheus", "E6522C") },
  { name: "Nginx", short: "Nx", icon: ICON("nginx", "009639") },
];

const NODE = 48;
const CENTER_X = 310;
const CENTER_Y = 310;

/* ── Logo with fallback ── */
function NodeLogo({ item }: { item: NodeItem }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <span className="text-[9px] font-bold text-muted-foreground">{item.short}</span>;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={item.icon} alt={item.name} width={20} height={20} loading="lazy" onError={() => setFailed(true)} />
  );
}

/* ── Static node on a ring ── */
function RadialNode({
  item, cx, cy, delay,
}: {
  item: NodeItem; cx: number; cy: number; delay: number;
}) {
  return (
    <g className="radial-node" style={{ animationDelay: `${delay}s` }}>
      {/* Connection line from center */}
      <line
        x1={CENTER_X}
        y1={CENTER_Y}
        x2={cx}
        y2={cy}
        stroke="hsl(var(--primary) / 0.06)"
        strokeWidth="1"
        strokeDasharray="3 4"
      />
      {/* Small dot at node position */}
      <circle cx={cx} cy={cy} r="3" fill="hsl(var(--primary) / 0.15)" />
    </g>
  );
}

/* ══════════════════════════════════════════════════════
   OPTION B — Static radial network with connected nodes
   ══════════════════════════════════════════════════════ */

export function IntegrationRadial() {
  const innerR = 130;
  const outerR = 250;

  return (
    <section className="relative z-10 overflow-hidden bg-white">
      <div className="relative mx-auto max-w-5xl px-6 py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* ── Left: Text ── */}
          <div>
            <p className="text-overline text-primary">Integrations</p>
            <h2 className="mt-3 text-heading-xl text-foreground sm:text-4xl">
              200+ Out-of-the-Box Integrations
            </h2>
            <p className="mt-4 max-w-lg text-body-md text-muted-foreground">
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

          {/* ── Right: Radial network visualization ── */}
          <div className="relative flex items-center justify-center overflow-visible" style={{ height: 520 }}>
            <div className="relative" style={{ width: 620, height: 620, transform: "scale(0.8)", transformOrigin: "center center" }}>
            {/* Radial glow */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                width: 500,
                height: 500,
                background: "radial-gradient(circle, hsl(var(--primary) / 0.06) 0%, hsl(var(--primary) / 0.02) 40%, transparent 70%)",
              }}
            />

            {/* SVG ring outlines + connection lines */}
            <svg
              className="absolute left-0 top-0"
              width={620}
              height={620}
              viewBox="0 0 620 620"
              fill="none"
            >
              {/* Ring circles */}
              <circle cx={CENTER_X} cy={CENTER_Y} r={innerR} stroke="hsl(var(--primary) / 0.07)" strokeWidth="1" strokeDasharray="4 6" />
              <circle cx={CENTER_X} cy={CENTER_Y} r={outerR} stroke="hsl(var(--primary) / 0.07)" strokeWidth="1" strokeDasharray="4 6" />

              {/* Center pulse circle */}
              <circle cx={CENTER_X} cy={CENTER_Y} r="6" fill="hsl(var(--primary) / 0.15)">
                <animate attributeName="r" values="4;8;4" dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.4;0.15;0.4" dur="3s" repeatCount="indefinite" />
              </circle>

              {/* Connection lines to inner nodes */}
              {innerNodes.map((item, i) => {
                const a = (2 * Math.PI * i) / innerNodes.length - Math.PI / 2;
                const cx = CENTER_X + innerR * Math.cos(a);
                const cy = CENTER_Y + innerR * Math.sin(a);
                return <RadialNode key={item.name} item={item} cx={cx} cy={cy} delay={i * 0.15} />;
              })}

              {/* Connection lines to outer nodes */}
              {outerNodes.map((item, i) => {
                const a = (2 * Math.PI * i) / outerNodes.length - Math.PI / 2;
                const cx = CENTER_X + outerR * Math.cos(a);
                const cy = CENTER_Y + outerR * Math.sin(a);
                return <RadialNode key={item.name} item={item} cx={cx} cy={cy} delay={i * 0.1} />;
              })}
            </svg>

            {/* HTML logo nodes — inner ring */}
            <div className="absolute left-0 top-0" style={{ width: 620, height: 620 }}>
              {innerNodes.map((item, i) => {
                const a = (2 * Math.PI * i) / innerNodes.length - Math.PI / 2;
                const x = CENTER_X + innerR * Math.cos(a) - NODE / 2;
                const y = CENTER_Y + innerR * Math.sin(a) - NODE / 2;
                return (
                  <div
                    key={item.name}
                    className="radial-card absolute z-10 flex items-center justify-center rounded-xl border bg-white shadow-sm transition-all duration-300 hover:border-primary/40"
                    style={{ left: x, top: y, width: NODE, height: NODE, animationDelay: `${i * 0.15}s` }}
                    title={item.name}
                  >
                    <NodeLogo item={item} />
                  </div>
                );
              })}

              {/* HTML logo nodes — outer ring */}
              {outerNodes.map((item, i) => {
                const a = (2 * Math.PI * i) / outerNodes.length - Math.PI / 2;
                const x = CENTER_X + outerR * Math.cos(a) - NODE / 2;
                const y = CENTER_Y + outerR * Math.sin(a) - NODE / 2;
                return (
                  <div
                    key={item.name}
                    className="radial-card absolute z-10 flex items-center justify-center rounded-xl border bg-white shadow-sm transition-all duration-300 hover:border-primary/40"
                    style={{ left: x, top: y, width: NODE, height: NODE, animationDelay: `${i * 0.1}s` }}
                    title={item.name}
                  >
                    <NodeLogo item={item} />
                  </div>
                );
              })}
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
