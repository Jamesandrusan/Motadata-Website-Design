"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Palette,
  Type,
  Space,
  RectangleHorizontal,
  Component,
  MousePointerClick,
  Sparkles,
  SwatchBook,
  Blend,
  Grid3X3,
  Activity,
  AlertCircle,
  ArrowRight,
  BarChart3,
  Bell,
  BookOpen,
  Calendar,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock,
  Cloud,
  Code,
  Cpu,
  Database,
  Download,
  ExternalLink,
  Eye,
  FileText,
  Filter,
  Globe,
  HardDrive,
  Heart,
  Info,
  Layers,
  Link,
  Lock,
  Mail,
  MapPin,
  Menu,
  Monitor,
  Network,
  Phone,
  Play,
  Plus,
  Search,
  Server,
  Settings,
  Shield,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { HeroOrbs, AnimatedBadge, FadeUp } from "@/components/hero-effects";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";

/* ── Theme data (duplicated from theme-switcher.tsx) ── */

const themes = [
  { name: "Coral", swatch: "#f17463", primary: "7 84% 67%", gradientFrom: "7 84% 60%", gradientTo: "350 75% 55%" },
  { name: "Commander", swatch: "#da4a3a", primary: "6 72% 54%", gradientFrom: "6 72% 50%", gradientTo: "340 65% 45%" },
  { name: "Titan", swatch: "#1d4ed8", primary: "226 71% 48%", gradientFrom: "226 71% 45%", gradientTo: "250 65% 42%" },
  { name: "Obsidian", swatch: "#18181b", primary: "240 6% 10%", gradientFrom: "240 6% 10%", gradientTo: "220 10% 22%" },
  { name: "Valor", swatch: "#9f1239", primary: "343 88% 35%", gradientFrom: "343 88% 32%", gradientTo: "10 70% 40%" },
  { name: "Forge", swatch: "#c2410c", primary: "21 90% 40%", gradientFrom: "21 90% 38%", gradientTo: "38 92% 45%" },
  { name: "Imperial", swatch: "#a855f7", primary: "271 81% 65%", gradientFrom: "271 81% 56%", gradientTo: "310 70% 50%" },
  { name: "Apex", swatch: "#0891b2", primary: "192 91% 37%", gradientFrom: "192 91% 34%", gradientTo: "210 80% 42%" },
  { name: "Crown", swatch: "#b45309", primary: "32 95% 37%", gradientFrom: "32 95% 34%", gradientTo: "15 80% 38%" },
  { name: "Stealth", swatch: "#475569", primary: "215 19% 35%", gradientFrom: "215 19% 30%", gradientTo: "240 10% 20%" },
  { name: "Crimson", swatch: "#dc2626", primary: "0 72% 51%", gradientFrom: "0 72% 46%", gradientTo: "330 65% 42%" },
];

/* ── Sidebar categories ── */

const categories = [
  { id: "colors", label: "Colors", icon: Palette },
  { id: "typography", label: "Typography", icon: Type },
  { id: "spacing", label: "Spacing & Layout", icon: Space },
  { id: "radii", label: "Border Radius", icon: RectangleHorizontal },
  { id: "components", label: "Components", icon: Component },
  { id: "hover-effects", label: "Cards & Hover", icon: MousePointerClick },
  { id: "animations", label: "Animations", icon: Sparkles },
  { id: "theme-palettes", label: "Theme Palettes", icon: SwatchBook },
  { id: "gradients", label: "Gradients", icon: Blend },
  { id: "icons", label: "Icons", icon: Grid3X3 },
];

/* ── Helpers ── */

function hslToHex(hsl: string): string {
  const parts = hsl.trim().split(/\s+/);
  if (parts.length < 3) return "#000000";
  const h = parseFloat(parts[0]);
  const s = parseFloat(parts[1]) / 100;
  const l = parseFloat(parts[2]) / 100;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

function SectionWrapper({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-32 lg:scroll-mt-24 rounded-2xl border border-border/60 bg-card p-8">
      <h2 className="text-xl font-semibold text-foreground">{title}</h2>
      <p className="mt-1 text-body-xs text-muted-foreground">{description}</p>
      <div className="mt-6">{children}</div>
    </section>
  );
}

/* ── Lucide icons for Section 10 ── */

const iconList = [
  { name: "Activity", Icon: Activity },
  { name: "AlertCircle", Icon: AlertCircle },
  { name: "ArrowRight", Icon: ArrowRight },
  { name: "BarChart3", Icon: BarChart3 },
  { name: "Bell", Icon: Bell },
  { name: "BookOpen", Icon: BookOpen },
  { name: "Calendar", Icon: Calendar },
  { name: "Check", Icon: Check },
  { name: "CheckCircle2", Icon: CheckCircle2 },
  { name: "ChevronDown", Icon: ChevronDown },
  { name: "ChevronRight", Icon: ChevronRight },
  { name: "Clock", Icon: Clock },
  { name: "Cloud", Icon: Cloud },
  { name: "Code", Icon: Code },
  { name: "Cpu", Icon: Cpu },
  { name: "Database", Icon: Database },
  { name: "Download", Icon: Download },
  { name: "ExternalLink", Icon: ExternalLink },
  { name: "Eye", Icon: Eye },
  { name: "FileText", Icon: FileText },
  { name: "Filter", Icon: Filter },
  { name: "Globe", Icon: Globe },
  { name: "HardDrive", Icon: HardDrive },
  { name: "Heart", Icon: Heart },
  { name: "Info", Icon: Info },
  { name: "Layers", Icon: Layers },
  { name: "Link", Icon: Link },
  { name: "Lock", Icon: Lock },
  { name: "Mail", Icon: Mail },
  { name: "MapPin", Icon: MapPin },
  { name: "Menu", Icon: Menu },
  { name: "Monitor", Icon: Monitor },
  { name: "Network", Icon: Network },
  { name: "Phone", Icon: Phone },
  { name: "Play", Icon: Play },
  { name: "Plus", Icon: Plus },
  { name: "Search", Icon: Search },
  { name: "Server", Icon: Server },
  { name: "Settings", Icon: Settings },
  { name: "Shield", Icon: Shield },
  { name: "Star", Icon: Star },
  { name: "TrendingUp", Icon: TrendingUp },
  { name: "Users", Icon: Users },
  { name: "Zap", Icon: Zap },
];

/* ── Main Component ── */

export function BrandGuidelinesContent() {
  const [activeId, setActiveId] = useState("colors");
  const [cssVars, setCssVars] = useState<Record<string, string>>({});

  /* Read live CSS variables (updates on theme change) */
  const readVars = useCallback(() => {
    if (typeof window === "undefined") return;
    const style = getComputedStyle(document.documentElement);
    const vars: Record<string, string> = {};
    const keys = [
      "--primary",
      "--background",
      "--foreground",
      "--border",
      "--muted",
      "--muted-foreground",
      "--card",
      "--card-foreground",
      "--secondary",
      "--accent",
      "--ring",
      "--gradient-from",
      "--gradient-to",
      "--destructive",
      "--primary-foreground",
    ];
    for (const k of keys) {
      vars[k] = style.getPropertyValue(k).trim();
    }
    setCssVars(vars);
  }, []);

  useEffect(() => {
    readVars();

    /* Watch for theme-switcher changes via MutationObserver on <html> style */
    const observer = new MutationObserver(() => readVars());
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["style"],
    });

    return () => observer.disconnect();
  }, [readVars]);

  /* IntersectionObserver for sidebar active tracking */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-120px 0px -60% 0px", threshold: 0 }
    );

    for (const cat of categories) {
      const el = document.getElementById(cat.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  const handleNav = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const applyTheme = (index: number) => {
    const t = themes[index];
    const root = document.documentElement;
    root.style.setProperty("--primary", t.primary);
    root.style.setProperty("--ring", t.primary);
    root.style.setProperty("--gradient-from", t.gradientFrom);
    root.style.setProperty("--gradient-to", t.gradientTo);
  };

  /* Color swatches data */
  const colorTokens = [
    { name: "--primary", label: "Primary" },
    { name: "--background", label: "Background" },
    { name: "--foreground", label: "Foreground" },
    { name: "--border", label: "Border" },
    { name: "--muted", label: "Muted" },
    { name: "--muted-foreground", label: "Muted Foreground" },
    { name: "--card", label: "Card" },
    { name: "--secondary", label: "Secondary" },
    { name: "--accent", label: "Accent" },
    { name: "--ring", label: "Ring" },
    { name: "--gradient-from", label: "Gradient From" },
    { name: "--gradient-to", label: "Gradient To" },
    { name: "--destructive", label: "Destructive" },
    { name: "--primary-foreground", label: "Primary Fg" },
  ];

  return (
    <div className="relative z-10">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-32 pb-16">
        <HeroOrbs />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <FadeUp>
            <AnimatedBadge text="Design System" />
          </FadeUp>
          <FadeUp delay={150}>
            <h1 className="mt-6 text-display-lg tracking-tight text-foreground sm:text-5xl">
              Brand Guidelines
            </h1>
          </FadeUp>
          <FadeUp delay={300}>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              The complete design system reference for Motadata — colors, typography,
              components, animations, and theme palettes.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Content Grid ── */}
      <div className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
          {/* Sidebar — desktop */}
          <aside className="hidden lg:block">
            <nav className="sticky top-24 space-y-1">
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleNav(cat.id)}
                    className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-[13px] transition-colors ${
                      activeId === cat.id
                        ? "bg-muted font-medium text-primary"
                        : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                    }`}
                  >
                    <Icon className="h-4 w-4 flex-shrink-0" />
                    {cat.label}
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Sidebar — mobile pill bar */}
          <div className="sticky top-14 z-30 -mx-6 overflow-x-auto bg-background/95 px-6 py-3 backdrop-blur lg:hidden">
            <div className="flex gap-2">
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleNav(cat.id)}
                    className={`flex flex-shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs transition-colors ${
                      activeId === cat.id
                        ? "border-primary/30 bg-primary/10 font-medium text-primary"
                        : "border-border text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── Right Content — 10 Sections ── */}
          <div className="space-y-8">
            {/* 1. Colors */}
            <SectionWrapper
              id="colors"
              title="Colors"
              description="Live CSS variable swatches — updates when theme changes."
            >
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                {colorTokens.map((token) => {
                  const hsl = cssVars[token.name] || "";
                  const hex = hsl ? hslToHex(hsl) : "#---";
                  return (
                    <div key={token.name} className="group rounded-xl border border-border/60 p-3 transition-colors hover:border-primary/30">
                      <div
                        className="h-16 w-full rounded-lg border border-border/30"
                        style={{ background: hsl ? `hsl(${hsl})` : "transparent" }}
                      />
                      <p className="mt-2 text-label-sm text-foreground">{token.label}</p>
                      <p className="text-[10px] font-mono text-muted-foreground">{token.name}</p>
                      <p className="text-[10px] font-mono text-muted-foreground">
                        {hsl ? `hsl(${hsl})` : "—"} &middot; {hex}
                      </p>
                    </div>
                  );
                })}
              </div>
            </SectionWrapper>

            {/* 2. Typography */}
            <SectionWrapper
              id="typography"
              title="Typography"
              description="Plus Jakarta Sans — all sizes and weights used across the site."
            >
              <div className="space-y-6">
                {/* Size samples */}
                {[
                  { label: "Hero (clamp)", className: "text-4xl sm:text-5xl font-bold tracking-tight", size: "text-4xl / 5xl" },
                  { label: "Page Title", className: "text-heading-xl", size: "text-3xl" },
                  { label: "Section Heading", className: "text-2xl font-semibold", size: "text-2xl" },
                  { label: "Card Title", className: "text-xl font-semibold", size: "text-xl" },
                  { label: "Large Body", className: "text-lg", size: "text-lg" },
                  { label: "Body", className: "text-base", size: "text-base (16px)" },
                  { label: "Small", className: "text-sm", size: "text-sm (14px)" },
                  { label: "Extra Small", className: "text-xs", size: "text-xs (12px)" },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col gap-1 border-b border-border/30 pb-4 last:border-0">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">{item.size}</span>
                    <span className={item.className}>
                      {item.label}: The quick brown fox jumps
                    </span>
                  </div>
                ))}

                {/* Weight samples */}
                <div className="mt-4">
                  <h3 className="mb-3 text-label-md text-foreground">Font Weights</h3>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {[
                      { weight: 400, label: "Regular" },
                      { weight: 500, label: "Medium" },
                      { weight: 600, label: "Semibold" },
                      { weight: 700, label: "Bold" },
                    ].map((w) => (
                      <div key={w.weight} className="rounded-lg border border-border/40 p-3">
                        <p style={{ fontWeight: w.weight }} className="text-lg text-foreground">Aa Bb Cc</p>
                        <p className="mt-1 text-[10px] font-mono text-muted-foreground">{w.weight} — {w.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SectionWrapper>

            {/* 3. Spacing & Layout */}
            <SectionWrapper
              id="spacing"
              title="Spacing & Layout"
              description="Common spacing tokens and layout patterns."
            >
              <div className="space-y-6">
                {/* Spacing bars */}
                <div>
                  <h3 className="mb-3 text-label-md text-foreground">Common Spacing</h3>
                  <div className="space-y-2">
                    {[
                      { label: "px-6 (24px)", width: "96px" },
                      { label: "gap-6 (24px)", width: "96px" },
                      { label: "py-24 (96px)", width: "384px" },
                      { label: "gap-8 (32px)", width: "128px" },
                      { label: "gap-4 (16px)", width: "64px" },
                      { label: "gap-2 (8px)", width: "32px" },
                    ].map((s) => (
                      <div key={s.label} className="flex items-center gap-3">
                        <div
                          className="h-5 rounded bg-primary/20 border border-primary/30"
                          style={{ width: s.width }}
                        />
                        <span className="text-xs font-mono text-muted-foreground">{s.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Container */}
                <div>
                  <h3 className="mb-3 text-label-md text-foreground">Container</h3>
                  <div className="rounded-lg border border-dashed border-primary/30 p-4">
                    <div className="mx-auto rounded border border-primary/20 bg-primary/5 py-6 text-center text-xs font-mono text-muted-foreground" style={{ maxWidth: "80rem" }}>
                      max-w-7xl (1280px) + px-6
                    </div>
                  </div>
                </div>

                {/* Grid patterns */}
                <div>
                  <h3 className="mb-3 text-label-md text-foreground">Grid Patterns</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="mb-1 text-[10px] font-mono text-muted-foreground">grid-cols-3 gap-6</p>
                      <div className="grid grid-cols-3 gap-3">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="h-12 rounded-lg border border-primary/20 bg-primary/5" />
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="mb-1 text-[10px] font-mono text-muted-foreground">grid-cols-4 gap-6</p>
                      <div className="grid grid-cols-4 gap-3">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="h-12 rounded-lg border border-primary/20 bg-primary/5" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SectionWrapper>

            {/* 4. Border Radius */}
            <SectionWrapper
              id="radii"
              title="Border Radius"
              description="All border-radius values used across components."
            >
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
                {[
                  { label: "rounded-sm", radius: "0.125rem", className: "rounded-sm" },
                  { label: "rounded", radius: "0.25rem", className: "rounded" },
                  { label: "rounded-md", radius: "0.375rem", className: "rounded-md" },
                  { label: "rounded-lg", radius: "0.5rem", className: "rounded-lg" },
                  { label: "rounded-xl", radius: "0.75rem", className: "rounded-xl" },
                  { label: "rounded-2xl", radius: "1rem", className: "rounded-2xl" },
                  { label: "rounded-3xl", radius: "1.5rem", className: "rounded-3xl" },
                  { label: "rounded-full", radius: "9999px", className: "rounded-full" },
                ].map((r) => (
                  <div key={r.label} className="flex flex-col items-center gap-2">
                    <div
                      className={`h-20 w-20 border-2 border-primary/40 bg-primary/10 ${r.className}`}
                    />
                    <span className="text-xs font-mono text-foreground">{r.label}</span>
                    <span className="text-[10px] text-muted-foreground">{r.radius}</span>
                  </div>
                ))}
              </div>
            </SectionWrapper>

            {/* 5. Components */}
            <SectionWrapper
              id="components"
              title="Components"
              description="Live-rendered UI primitives from the design system."
            >
              <div className="space-y-8">
                {/* Buttons */}
                <div>
                  <h3 className="mb-3 text-label-md text-foreground">Button Variants</h3>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="default">Default</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                  </div>
                  <h3 className="mb-3 mt-6 text-label-md text-foreground">Button Sizes</h3>
                  <div className="flex flex-wrap items-center gap-3">
                    <Button size="sm">Small</Button>
                    <Button size="default">Default</Button>
                    <Button size="lg">Large</Button>
                    <Button size="icon"><Plus className="h-4 w-4" /></Button>
                  </div>
                </div>

                {/* Badge */}
                <div>
                  <h3 className="mb-3 text-label-md text-foreground">Badge</h3>
                  <div className="flex flex-wrap gap-3">
                    <Badge>Default Badge</Badge>
                    <Badge className="border-primary/20 bg-primary/5 text-primary">Primary Badge</Badge>
                    <Badge className="border-green-200 bg-green-50 text-green-700">Success</Badge>
                    <Badge className="border-red-200 bg-red-50 text-red-700">Error</Badge>
                  </div>
                </div>

                {/* AnimatedBadge */}
                <div>
                  <h3 className="mb-3 text-label-md text-foreground">Animated Badge</h3>
                  <AnimatedBadge text="Live Indicator" />
                </div>

                {/* Input */}
                <div>
                  <h3 className="mb-3 text-label-md text-foreground">Input</h3>
                  <div className="max-w-sm">
                    <Input placeholder="Type something..." />
                  </div>
                </div>

                {/* Card */}
                <div>
                  <h3 className="mb-3 text-label-md text-foreground">Card</h3>
                  <div className="max-w-sm">
                    <Card>
                      <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription>Card description text goes here.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-body-xs text-muted-foreground">
                          Card content area with body text and supporting information.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </SectionWrapper>

            {/* 6. Cards & Hover Effects */}
            <SectionWrapper
              id="hover-effects"
              title="Cards & Hover Effects"
              description="Interactive hover states — hover over each card to preview."
            >
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {/* hover:border-primary/40 */}
                <div className="group rounded-xl border border-border/60 bg-card p-5 transition-colors hover:border-primary/40">
                  <h4 className="text-label-md text-foreground">Border Highlight</h4>
                  <p className="mt-1 text-caption text-muted-foreground">
                    <code className="text-[10px]">hover:border-primary/40</code>
                  </p>
                </div>

                {/* hover:bg-muted/30 */}
                <div className="group rounded-xl border border-border/60 bg-card p-5 transition-colors hover:bg-muted/30">
                  <h4 className="text-label-md text-foreground">Background Fill</h4>
                  <p className="mt-1 text-caption text-muted-foreground">
                    <code className="text-[10px]">hover:bg-muted/30</code>
                  </p>
                </div>

                {/* group-hover:text-primary */}
                <div className="group rounded-xl border border-border/60 bg-card p-5 transition-colors hover:border-primary/40">
                  <h4 className="text-label-md transition-colors group-hover:text-primary">
                    Text Color Shift
                  </h4>
                  <p className="mt-1 text-caption text-muted-foreground">
                    <code className="text-[10px]">group-hover:text-primary</code>
                  </p>
                </div>

                {/* hover-lift */}
                <div className="hover-lift rounded-xl border border-border/60 bg-card p-5">
                  <h4 className="text-label-md text-foreground">Hover Lift</h4>
                  <p className="mt-1 text-caption text-muted-foreground">
                    <code className="text-[10px]">.hover-lift</code> — translateY(-2px) + shadow
                  </p>
                </div>

                {/* Combined */}
                <div className="hover-lift group rounded-xl border border-border/60 bg-card p-5 transition-colors hover:border-primary/40 hover:bg-muted/10">
                  <h4 className="text-label-md transition-colors group-hover:text-primary">
                    Combined Effects
                  </h4>
                  <p className="mt-1 text-caption text-muted-foreground">
                    Lift + border + bg + text color
                  </p>
                </div>

                {/* Scale */}
                <div className="rounded-xl border border-border/60 bg-card p-5 transition-transform hover:scale-[1.02]">
                  <h4 className="text-label-md text-foreground">Scale Up</h4>
                  <p className="mt-1 text-caption text-muted-foreground">
                    <code className="text-[10px]">hover:scale-[1.02]</code>
                  </p>
                </div>
              </div>
            </SectionWrapper>

            {/* 7. Animations */}
            <SectionWrapper
              id="animations"
              title="Animations"
              description="Live animation demos from the global stylesheet."
            >
              <div className="grid gap-4 sm:grid-cols-2">
                {/* Dotted Glow Background */}
                <div className="relative h-[200px] overflow-hidden rounded-xl border border-border/60">
                  <DottedGlowBackground className="opacity-100" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="rounded-full border bg-white/90 px-3 py-1 text-caption text-foreground backdrop-blur">
                      DottedGlowBackground
                    </span>
                  </div>
                </div>

                {/* Shimmer */}
                <div className="relative h-[200px] overflow-hidden rounded-xl border border-border/60 bg-card">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="hero-shimmer w-full rounded-lg border border-border/30 bg-muted/30 py-8 text-center text-caption text-foreground">
                      .hero-shimmer
                    </div>
                  </div>
                </div>

                {/* Glow Pulse */}
                <div className="relative h-[200px] overflow-hidden rounded-xl border border-border/60 bg-card flex items-center justify-center">
                  <div className="glow-pulse h-20 w-20 rounded-full bg-primary/20 border border-primary/30" />
                  <span className="absolute bottom-3 left-3 text-[10px] font-mono text-muted-foreground">.glow-pulse</span>
                </div>

                {/* Gradient Shift */}
                <div className="relative h-[200px] overflow-hidden rounded-xl border border-border/60 bg-card flex items-center justify-center">
                  <div
                    className="gradient-shift h-20 w-40 rounded-xl"
                    style={{
                      background: `linear-gradient(135deg, hsl(var(--gradient-from)), hsl(var(--gradient-to)), hsl(var(--primary)))`,
                      backgroundSize: "200% 200%",
                    }}
                  />
                  <span className="absolute bottom-3 left-3 text-[10px] font-mono text-muted-foreground">.gradient-shift</span>
                </div>

                {/* Border Glow */}
                <div className="relative h-[200px] overflow-hidden rounded-xl border border-border/60 bg-card flex items-center justify-center">
                  <div className="border-glow h-24 w-24 rounded-xl border-2 bg-card flex items-center justify-center">
                    <span className="text-caption text-muted-foreground">Box</span>
                  </div>
                  <span className="absolute bottom-3 left-3 text-[10px] font-mono text-muted-foreground">.border-glow</span>
                </div>

                {/* Float */}
                <div className="relative h-[200px] overflow-hidden rounded-xl border border-border/60 bg-card flex items-center justify-center">
                  <div
                    className="h-16 w-16 rounded-xl bg-primary/15 border border-primary/30"
                    style={{ animation: "float 4s ease-in-out infinite" }}
                  />
                  <span className="absolute bottom-3 left-3 text-[10px] font-mono text-muted-foreground">float animation</span>
                </div>
              </div>
            </SectionWrapper>

            {/* 8. Theme Palettes */}
            <SectionWrapper
              id="theme-palettes"
              title="Theme Palettes"
              description="All 11 brand archetypes — click &quot;Try Theme&quot; to apply live."
            >
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {themes.map((theme, i) => (
                  <div key={theme.name} className="rounded-xl border border-border/60 p-4 transition-colors hover:border-primary/30">
                    {/* Swatch + name */}
                    <div className="flex items-center gap-3">
                      <span
                        className="h-10 w-10 rounded-full border border-border/40 flex-shrink-0"
                        style={{ background: theme.swatch }}
                      />
                      <div>
                        <h4 className="text-label-md text-foreground">{theme.name}</h4>
                        <p className="text-[10px] font-mono text-muted-foreground">{theme.swatch}</p>
                      </div>
                    </div>

                    {/* Gradient bar */}
                    <div
                      className="mt-3 h-6 w-full rounded-lg"
                      style={{
                        background: `linear-gradient(135deg, hsl(${theme.gradientFrom}), hsl(${theme.gradientTo}))`,
                      }}
                    />

                    {/* HSL values */}
                    <div className="mt-2 space-y-0.5 text-[10px] font-mono text-muted-foreground">
                      <p>primary: {theme.primary}</p>
                      <p>from: {theme.gradientFrom}</p>
                      <p>to: {theme.gradientTo}</p>
                    </div>

                    {/* Try Theme button */}
                    <button
                      onClick={() => applyTheme(i)}
                      className="mt-3 w-full rounded-lg border border-border/60 bg-muted/30 py-1.5 text-caption text-foreground transition-colors hover:bg-primary/10 hover:text-primary hover:border-primary/30"
                    >
                      Try Theme
                    </button>
                  </div>
                ))}
              </div>
            </SectionWrapper>

            {/* 9. Gradients */}
            <SectionWrapper
              id="gradients"
              title="Gradients"
              description="Key gradient styles used across the site."
            >
              <div className="space-y-6">
                {/* CTA Gradient */}
                <div>
                  <h3 className="mb-2 text-label-md text-foreground">CTA Gradient</h3>
                  <div className="cta-gradient h-24 rounded-xl flex items-center justify-center">
                    <span className="text-label-md text-white">
                      .cta-gradient — 135deg from/to
                    </span>
                  </div>
                  <p className="mt-1 text-[10px] font-mono text-muted-foreground">
                    linear-gradient(135deg, hsl(--gradient-from), hsl(--gradient-to))
                  </p>
                </div>

                {/* Hero gradient text */}
                <div>
                  <h3 className="mb-2 text-label-md text-foreground">Hero Gradient Text</h3>
                  <p className="hero-gradient-text text-heading-xl">
                    Gradient text effect
                  </p>
                  <p className="mt-1 text-[10px] font-mono text-muted-foreground">
                    .hero-gradient-text — foreground → gradient-from → gradient-to
                  </p>
                </div>

                {/* Section Divider */}
                <div>
                  <h3 className="mb-2 text-label-md text-foreground">Section Divider</h3>
                  <div className="py-4">
                    <div className="section-divider" />
                  </div>
                  <p className="text-[10px] font-mono text-muted-foreground">
                    .section-divider — center diamond + gradient line
                  </p>
                </div>

                {/* Shimmer Label */}
                <div>
                  <h3 className="mb-2 text-label-md text-foreground">Shimmer Label</h3>
                  <p className="shimmer-label text-heading-md">
                    Animated shimmer text
                  </p>
                  <p className="mt-1 text-[10px] font-mono text-muted-foreground">
                    .shimmer-label — sweeping gradient on text
                  </p>
                </div>
              </div>
            </SectionWrapper>

            {/* 10. Icons */}
            <SectionWrapper
              id="icons"
              title="Icons"
              description="Most-used Lucide icons across the site."
            >
              <div className="grid grid-cols-4 gap-3 sm:grid-cols-6 md:grid-cols-8">
                {iconList.map(({ name, Icon }) => (
                  <div
                    key={name}
                    className="flex flex-col items-center gap-1.5 rounded-lg border border-border/40 p-3 transition-colors hover:border-primary/30 hover:bg-muted/20"
                  >
                    <Icon className="h-5 w-5 text-foreground" />
                    <span className="text-[9px] font-mono text-muted-foreground text-center leading-tight">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </SectionWrapper>
          </div>
        </div>
      </div>
    </div>
  );
}
