"use client";

import { useState } from "react";
import autoRegistry from "./_auto-registry.json";

/* ── Integration Variants ── */
import { IntegrationWaterfall } from "@/components/integration-waterfall";
import { IntegrationMarquee } from "@/components/integration-marquee";
import { IntegrationGrid } from "@/components/integration-grid";
import { IntegrationPills } from "@/components/integration-pills";
import { IntegrationSection as IntegrationOrbit } from "@/components/integration-orbit";
import { IntegrationShuffle } from "@/components/integration-shuffle";
import { IntegrationHoneycomb } from "@/components/integration-honeycomb";
import { IntegrationTabs } from "@/components/integration-tabs";
import { IntegrationLogoCloud } from "@/components/integration-logo-cloud";
import { IntegrationExpandingRows } from "@/components/integration-expanding-rows";
import { IntegrationRadial } from "@/components/integration-radial";

/* ── Recognition Variants ── */
import { RecognitionBadgeWall } from "@/components/recognition-badge-wall";
import { RecognitionLogoBar } from "@/components/recognition-logo-bar";
import { RecognitionSpotlight } from "@/components/recognition-spotlight";
import { RecognitionMarqueeCards } from "@/components/recognition-marquee-cards";
import { RecognitionTimeline } from "@/components/recognition-timeline";

/* ── Product Sections ── */
import {
  ProductScrollSection,
  ProductScrollAccordion,
  ProductTextOverview,
} from "@/components/product-scroll-section";

/* ── Sections ── */
import { GlobeSection } from "@/components/globe-section";
import { CtaSection } from "@/components/cta-section";
import { UpcomingModules } from "@/components/upcoming-modules";
import { CustomerLogoMarquee } from "@/components/customer-logos";
import { FutureSection } from "@/components/future-section";
import { ObserveOpsSection } from "@/components/observeops-section";

/* ── Company ── */
import { CompanyCaseStudies } from "@/components/company/company-case-studies";

/* ── Hero & Decorative ── */
import { HeroOrbs, AnimatedBadge, FadeUp } from "@/components/hero-effects";
import { HeroSideDecorations } from "@/components/hero-side-decorations";
import { HeroCanvasTitle } from "@/components/hero-canvas-title";
import {
  FloatingTriangle,
  FloatingCircle,
  FloatingSquare,
  FloatingDiamond,
  FloatingCross,
  FloatingDots,
} from "@/components/decorative-shapes";
import {
  AnimatedHexagon,
  AnimatedStar,
  AnimatedRing,
  FloatingOrb,
  AnimatedPulse,
} from "@/components/ui/animated-shapes";

/* ── UI Primitives ── */
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GlowCard, StatCard } from "@/components/ui/glow-card";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { BrandLogo } from "@/components/brand-logo";
import { InteractiveGrid } from "@/components/interactive-grid";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

/* ══════════════════════════════════════════════════════
   Component Registry
   ══════════════════════════════════════════════════════ */

interface ComponentEntry {
  name: string;
  file: string;
  element: React.ReactNode;
}

interface ComponentCategory {
  label: string;
  id: string;
  items: ComponentEntry[];
}

const categories: ComponentCategory[] = [
  {
    label: "Integration Variants",
    id: "integrations",
    items: [
      { name: "IntegrationWaterfall", file: "components/integration-waterfall.tsx", element: <IntegrationWaterfall /> },
      { name: "IntegrationMarquee", file: "components/integration-marquee.tsx", element: <IntegrationMarquee /> },
      { name: "IntegrationGrid", file: "components/integration-grid.tsx", element: <IntegrationGrid /> },
      { name: "IntegrationPills", file: "components/integration-pills.tsx", element: <IntegrationPills /> },
      { name: "IntegrationOrbit", file: "components/integration-orbit.tsx", element: <IntegrationOrbit /> },
      { name: "IntegrationShuffle", file: "components/integration-shuffle.tsx", element: <IntegrationShuffle /> },
      { name: "IntegrationHoneycomb", file: "components/integration-honeycomb.tsx", element: <IntegrationHoneycomb /> },
      { name: "IntegrationTabs", file: "components/integration-tabs.tsx", element: <IntegrationTabs /> },
      { name: "IntegrationLogoCloud", file: "components/integration-logo-cloud.tsx", element: <IntegrationLogoCloud /> },
      { name: "IntegrationExpandingRows", file: "components/integration-expanding-rows.tsx", element: <IntegrationExpandingRows /> },
      { name: "IntegrationRadial", file: "components/integration-radial.tsx", element: <IntegrationRadial /> },
    ],
  },
  {
    label: "Recognition Variants",
    id: "recognition",
    items: [
      { name: "RecognitionBadgeWall", file: "components/recognition-badge-wall.tsx", element: <RecognitionBadgeWall /> },
      { name: "RecognitionLogoBar", file: "components/recognition-logo-bar.tsx", element: <RecognitionLogoBar /> },
      { name: "RecognitionSpotlight", file: "components/recognition-spotlight.tsx", element: <RecognitionSpotlight /> },
      { name: "RecognitionMarqueeCards", file: "components/recognition-marquee-cards.tsx", element: <RecognitionMarqueeCards /> },
      { name: "RecognitionTimeline", file: "components/recognition-timeline.tsx", element: <RecognitionTimeline /> },
    ],
  },
  {
    label: "Product Sections",
    id: "products",
    items: [
      { name: "ProductBentoGrid (Option 1)", file: "components/product-scroll-section.tsx", element: <ProductScrollSection forceOption={1} /> },
      { name: "ProductTabsShowcase (Option 2)", file: "components/product-scroll-section.tsx", element: <ProductScrollSection forceOption={2} /> },
      { name: "ProductScrollDriven (Option 3)", file: "components/product-scroll-section.tsx", element: <ProductScrollSection forceOption={3} /> },
      { name: "ProductAccordionVisual (Option 4)", file: "components/product-scroll-section.tsx", element: <ProductScrollSection forceOption={4} /> },
      { name: "ProductScrollAccordion", file: "components/product-scroll-section.tsx", element: <ProductScrollAccordion /> },
      { name: "ProductTextOverview", file: "components/product-scroll-section.tsx", element: <ProductTextOverview /> },
    ],
  },
  {
    label: "Page Sections",
    id: "sections",
    items: [
      { name: "GlobeSection", file: "components/globe-section.tsx", element: <GlobeSection /> },
      { name: "CtaSection", file: "components/cta-section.tsx", element: <CtaSection /> },
      { name: "UpcomingModules", file: "components/upcoming-modules.tsx", element: <UpcomingModules /> },
      { name: "CustomerLogoMarquee", file: "components/customer-logos.tsx", element: <CustomerLogoMarquee /> },
      { name: "FutureSection", file: "components/future-section.tsx", element: <FutureSection /> },
      { name: "ObserveOpsSection", file: "components/observeops-section.tsx", element: <ObserveOpsSection /> },
      { name: "CompanyCaseStudies", file: "components/company/company-case-studies.tsx", element: <CompanyCaseStudies /> },
    ],
  },
  {
    label: "Hero & Decorative",
    id: "hero",
    items: [
      { name: "HeroCanvasTitle", file: "components/hero-canvas-title.tsx", element: <div className="bg-white py-10 text-center"><HeroCanvasTitle /></div> },
      { name: "AnimatedBadge", file: "components/hero-effects.tsx", element: <div className="bg-white py-10 flex justify-center"><AnimatedBadge text="AI-Powered IT Operations" /></div> },
      { name: "HeroSideDecorations", file: "components/hero-side-decorations.tsx", element: <div className="relative h-[300px] bg-white"><HeroSideDecorations /></div> },
      { name: "HeroOrbs", file: "components/hero-effects.tsx", element: <div className="relative h-[300px] bg-white overflow-hidden"><HeroOrbs /></div> },
      { name: "Decorative Shapes", file: "components/decorative-shapes.tsx", element: (
        <div className="bg-white py-10 flex items-center justify-center gap-12">
          <FloatingTriangle size={40} rotate={15} />
          <FloatingCircle size={40} />
          <FloatingSquare size={30} rotate={-10} />
          <FloatingDiamond size={30} />
          <FloatingCross size={30} />
          <FloatingDots />
        </div>
      )},
      { name: "Animated Shapes", file: "components/ui/animated-shapes.tsx", element: (
        <div className="bg-white py-10 flex items-center justify-center gap-12">
          <AnimatedHexagon />
          <AnimatedStar />
          <AnimatedRing />
          <FloatingOrb />
          <AnimatedPulse />
        </div>
      )},
    ],
  },
  {
    label: "UI Primitives",
    id: "ui",
    items: [
      { name: "Button", file: "components/ui/button.tsx", element: (
        <div className="bg-white py-10 flex flex-wrap items-center justify-center gap-4">
          <Button>Default</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button size="lg">Large</Button>
          <Button size="sm">Small</Button>
          <Button variant="outline">Outline Alt</Button>
        </div>
      )},
      { name: "Badge", file: "components/ui/badge.tsx", element: (
        <div className="bg-white py-10 flex flex-wrap items-center justify-center gap-4">
          <Badge>Default</Badge>
          <Badge className="border-primary/20 bg-primary/5 text-primary">Primary</Badge>
          <Badge className="border-transparent bg-muted text-muted-foreground">Muted</Badge>
        </div>
      )},
      { name: "GlowCard", file: "components/ui/glow-card.tsx", element: (
        <div className="bg-white py-10 px-6 flex justify-center">
          <GlowCard className="max-w-sm p-6">
            <h3 className="text-heading-sm">Glow Card</h3>
            <p className="mt-2 text-body-xs text-muted-foreground">A card with a subtle glow effect on hover.</p>
          </GlowCard>
        </div>
      )},
      { name: "StatCard", file: "components/ui/glow-card.tsx", element: (
        <div className="bg-white py-10 px-6 flex justify-center gap-4">
          <StatCard value="95%" label="Resolution" />
          <StatCard value="80%" label="MTTR" />
        </div>
      )},
      { name: "DottedGlowBackground", file: "components/ui/dotted-glow-background.tsx", element: (
        <div className="relative bg-white py-20 px-6 text-center">
          <DottedGlowBackground gap={14} radius={1.2} opacity={0.4} />
          <p className="relative z-10 text-label-md">Background with dotted glow pattern</p>
        </div>
      )},
      { name: "BackgroundBeams", file: "components/ui/background-beams.tsx", element: (
        <div className="relative h-[200px] bg-neutral-950 overflow-hidden rounded-xl">
          <BackgroundBeams />
          <p className="relative z-10 flex h-full items-center justify-center text-label-md text-white">Background Beams</p>
        </div>
      )},
      { name: "BrandLogo", file: "components/brand-logo.tsx", element: (
        <div className="bg-white py-10 flex justify-center"><BrandLogo className="h-8 w-auto" /></div>
      )},
      { name: "InteractiveGrid", file: "components/interactive-grid.tsx", element: (
        <div className="relative h-[200px] bg-white overflow-hidden rounded-xl border">
          <InteractiveGrid />
          <p className="relative z-10 flex h-full items-center justify-center text-label-md">Interactive Grid Background</p>
        </div>
      )},
    ],
  },
  {
    label: "Layout",
    id: "layout",
    items: [
      { name: "Navbar", file: "components/navbar.tsx", element: <Navbar /> },
      { name: "Footer", file: "components/footer.tsx", element: <Footer /> },
    ],
  },
];

/* ══════════════════════════════════════════════════════
   Showcase Page
   ══════════════════════════════════════════════════════ */

function ShowcaseBlock({ entry }: { entry: ComponentEntry }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="rounded-xl border bg-white overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-5 py-3 text-left transition-colors hover:bg-muted/30"
      >
        <div className="flex items-center gap-3">
          <span className="text-label-md-strong text-foreground">{entry.name}</span>
          <span className="rounded bg-muted px-2 py-0.5 text-[10px] font-mono text-muted-foreground">{entry.file}</span>
        </div>
        <svg
          className={`h-4 w-4 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
        </svg>
      </button>
      {open && (
        <div className="border-t">
          {entry.element}
        </div>
      )}
    </div>
  );
}

/* ── Build a flat set of all component names that have a preview ── */
const previewedNames = new Set(
  categories.flatMap((c) => c.items.map((i) => i.name.split(" ")[0]))
);

export default function ComponentShowcase() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [indexOpen, setIndexOpen] = useState(false);

  const filtered = activeCategory
    ? categories.filter((c) => c.id === activeCategory)
    : categories;

  return (
    <main className="min-h-screen bg-muted/20">
      {/* Header */}
      <div className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-heading-sm text-foreground">Component Library</h1>
              <p className="text-caption text-muted-foreground">
                {categories.reduce((acc, c) => acc + c.items.length, 0)} previews ·{" "}
                <span className="text-primary font-medium">{autoRegistry.totalComponents} total components</span>
                {" "}across {autoRegistry.categories.length} categories
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIndexOpen((v) => !v)}
                className={`rounded-lg border px-4 py-2 text-label-md transition-colors ${
                  indexOpen
                    ? "bg-foreground text-white border-foreground"
                    : "text-muted-foreground hover:text-foreground hover:border-foreground/20"
                }`}
              >
                {indexOpen ? "Hide Index" : "Component Index"}
              </button>
              <a href="/" className="rounded-lg border px-4 py-2 text-body-xs text-muted-foreground transition-colors hover:text-foreground hover:border-foreground/20">
                Back to Site
              </a>
            </div>
          </div>

          {/* Category pills */}
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory(null)}
              className={`rounded-full px-4 py-1.5 text-caption transition-all ${
                !activeCategory
                  ? "bg-foreground text-white"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
                className={`rounded-full px-4 py-1.5 text-caption transition-all ${
                  activeCategory === cat.id
                    ? "bg-foreground text-white"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat.label}
                <span className="ml-1.5 opacity-60">{cat.items.length}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Auto-generated Component Index ── */}
      {indexOpen && (
        <div className="border-b bg-white">
          <div className="mx-auto max-w-7xl px-6 py-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-label-md-strong text-foreground">Complete Component Index</h2>
                <p className="text-caption text-muted-foreground mt-0.5">
                  Auto-scanned · {autoRegistry.totalFiles} files · {autoRegistry.totalComponents} components ·{" "}
                  last scanned {new Date(autoRegistry.generatedAt).toLocaleString()}
                </p>
              </div>
              <div className="flex items-center gap-3 text-caption text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <span className="inline-block h-2 w-2 rounded-full bg-primary" />
                  Has preview
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="inline-block h-2 w-2 rounded-full bg-muted-foreground/30" />
                  No preview yet
                </span>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {autoRegistry.categories.map((cat) => (
                <div key={cat.id} className="rounded-xl border bg-muted/30 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-overline text-muted-foreground/70">
                      {cat.label}
                    </h3>
                    <span className="rounded-full bg-white border border-border/60 px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                      {cat.totalComponents}
                    </span>
                  </div>
                  <div className="space-y-1">
                    {cat.files.flatMap((f) =>
                      f.exports.map((name) => (
                        <div key={`${f.file}-${name}`} className="flex items-center gap-2">
                          <span
                            className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                              previewedNames.has(name) ? "bg-primary" : "bg-muted-foreground/30"
                            }`}
                          />
                          <span className="text-caption text-foreground truncate">{name}</span>
                          <span className="ml-auto shrink-0 font-mono text-[9px] text-muted-foreground/50 truncate max-w-[120px]">
                            {f.file.replace("components/", "")}
                          </span>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="mx-auto max-w-7xl px-6 py-8">
        {filtered.map((cat) => (
          <div key={cat.id} id={cat.id} className="mb-12">
            <h2 className="mb-4 text-overline text-muted-foreground/60">
              {cat.label}
            </h2>
            <div className="space-y-4">
              {cat.items.map((entry) => (
                <ShowcaseBlock key={entry.name} entry={entry} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
