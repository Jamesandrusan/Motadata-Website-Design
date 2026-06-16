"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Download,
  Copy,
  Check,
  CheckCircle2,
  XCircle,
  ArrowRight,
} from "lucide-react";
import { HeroOrbs, AnimatedBadge, FadeUp } from "@/components/hero-effects";
import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";

/* ─────────────────── helpers ─────────────────── */

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
      className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-caption text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
    >
      {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

function DownloadLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      download
      className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-1.5 text-caption text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
    >
      <Download className="h-3.5 w-3.5" />
      {label}
    </a>
  );
}

function SectionHeading({ title, description }: { title: string; description: string }) {
  return (
    <div className="mb-10">
      <h2 className="text-heading-lg sm:text-3xl">{title}</h2>
      <p className="mt-2 max-w-2xl text-muted-foreground">{description}</p>
    </div>
  );
}

/* ─────────────────── data ─────────────────── */

const companyFacts = [
  { label: "Founded", value: "2010" },
  { label: "Headquarters", value: "Ahmedabad, India" },
  { label: "Products", value: "ObserveOps, ServiceOps" },
  { label: "Customers", value: "50+ countries worldwide" },
  { label: "Team", value: "500+ employees" },
  { label: "Tagline", value: "Unified Observability & Service Management" },
  { label: "Website", value: "motadata.com" },
];

const shortDescription =
  "Motadata is a SaaS company specializing in unified Observability and IT Service Management solutions. Founded in 2010, the company empowers enterprises across 50+ countries with its two flagship platforms — ObserveOps for full-stack infrastructure monitoring and ServiceOps for AI-driven IT service management.";

const logoAssets = [
  {
    name: "Full Color Logo",
    description: "Primary logo — dark on white background",
    bg: "bg-white",
    logoClass: "text-[#1a1f36]",
    format: "SVG (inline)",
  },
  {
    name: "White Logo on Dark",
    description: "For dark backgrounds",
    bg: "bg-[#1a1f36]",
    logoClass: "text-white",
    format: "SVG (inline)",
  },
  {
    name: "White Logo on Brand",
    description: "For brand-colored backgrounds",
    bg: "bg-gradient-to-r from-[#ee6352] to-[#d44b6f]",
    logoClass: "text-white",
    format: "SVG (inline)",
  },
];

const executives = [
  {
    name: "Amit Shingala",
    title: "Chief Executive Officer",
    photo: "/team/amit.avif",
    bio: "Visionary entrepreneur who founded Motadata in 2010, leading the company's growth into a global provider of unified Observability and Service Management solutions serving customers in 50+ countries.",
  },
  {
    name: "Alpesh Dhamelia",
    title: "Chief Technology Officer",
    photo: "/team/alpesh.avif",
    bio: "Technology leader driving Motadata's product innovation, overseeing the architecture and development of the ObserveOps and ServiceOps platforms with cutting-edge AI/ML capabilities.",
  },
  {
    name: "Mitul Modesara",
    title: "Chief Operating Officer",
    photo: "/team/mitul.avif",
    bio: "Operations strategist responsible for scaling Motadata's global operations, partnerships, and go-to-market execution across 50+ countries.",
  },
];

const brandColors = [
  { name: "Coral Primary", hex: "#f17463", hsl: "7 84% 67%", usage: "Primary brand color, CTAs, links" },
  { name: "Foreground", hex: "#1a1f36", hsl: "230 37% 16%", usage: "Headings, body text" },
  { name: "Background", hex: "#ffffff", hsl: "0 0% 100%", usage: "Page backgrounds" },
  { name: "Muted", hex: "#f4f4f5", hsl: "240 5% 96%", usage: "Cards, subtle backgrounds" },
  { name: "Muted Foreground", hex: "#6b7280", hsl: "220 9% 46%", usage: "Secondary text, captions" },
  { name: "Border", hex: "#e4e4e7", hsl: "240 6% 90%", usage: "Dividers, card borders" },
  { name: "Gradient From", hex: "#ee6352", hsl: "7 84% 60%", usage: "CTA gradient start" },
  { name: "Gradient To", hex: "#d44b6f", hsl: "350 75% 55%", usage: "CTA gradient end" },
];

const productIcons = [
  { src: "/topology.svg", label: "Topology" },
  { src: "/apm.svg", label: "APM" },
  { src: "/rum.svg", label: "RUM" },
  { src: "/nccm.svg", label: "NCCM" },
  { src: "/hybrid.svg", label: "Hybrid" },
  { src: "/log-search.svg", label: "Log Search" },
];

const dosItems = [
  "Maintain the correct aspect ratio at all times",
  "Keep clear space around the logo (minimum half the logo height)",
  "Use the white logo on dark or busy backgrounds",
  "Use the full-color logo on light, neutral backgrounds",
];

const dontsItems = [
  "Stretch, skew, or distort the logo in any way",
  "Change the logo colors or apply custom fills",
  "Add drop shadows, glows, or other effects to the logo",
  "Place the logo on busy or low-contrast backgrounds",
  "Pair the logo with a non-brand typeface",
  "Render the logo smaller than 80 px wide",
];

/* ─────────────────── component ─────────────────── */

export function MediaKitContent() {
  return (
    <div className="relative z-10">
      {/* ── Section 1: Hero ── */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <HeroOrbs />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <FadeUp>
            <AnimatedBadge text="Press & Partners" />
          </FadeUp>
          <FadeUp delay={150}>
            <h1 className="mt-6 text-display-lg lg:text-6xl">
              Media Kit
            </h1>
          </FadeUp>
          <FadeUp delay={300}>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Official logos, product screenshots, executive photos, brand colors, and
              company information — everything you need for press coverage,
              partnerships, and co-marketing.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Section 2: Company Overview ── */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          title="Company Overview"
          description="Key facts and an approved press description for Motadata."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left — description */}
          <div>
            <p className="text-body-xs text-muted-foreground">
              Motadata is a leading SaaS company founded in 2010 and headquartered in
              Ahmedabad, India. The company provides two flagship platforms —{" "}
              <strong className="text-foreground">ObserveOps</strong> for full-stack
              infrastructure monitoring and{" "}
              <strong className="text-foreground">ServiceOps</strong> for AI-driven IT
              service management. Serving enterprises, MSSPs, and government agencies
              across 50+ countries, Motadata unifies observability and service
              management to help modern IT teams move faster, reduce downtime, and
              deliver better digital experiences.
            </p>

            <div className="mt-8 rounded-lg border border-border bg-muted/50 p-5">
              <div className="flex items-center justify-between">
                <span className="text-label-sm uppercase tracking-wider text-muted-foreground">
                  Short Description (for press use)
                </span>
                <CopyButton text={shortDescription} />
              </div>
              <p className="mt-3 text-body-xs text-muted-foreground">
                {shortDescription}
              </p>
            </div>
          </div>

          {/* Right — facts table */}
          <div className="rounded-lg border border-border">
            <table className="w-full text-sm">
              <tbody>
                {companyFacts.map((fact, i) => (
                  <tr
                    key={fact.label}
                    className={i < companyFacts.length - 1 ? "border-b border-border" : ""}
                  >
                    <td className="px-5 py-3.5 font-medium text-foreground">
                      {fact.label}
                    </td>
                    <td className="px-5 py-3.5 text-muted-foreground">{fact.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Section 3: Logo Assets ── */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          title="Logo Assets"
          description="Official Motadata logos for different background contexts."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {logoAssets.map((asset) => (
            <div key={asset.name} className="overflow-hidden rounded-lg border border-border">
              <div
                className={`flex h-40 items-center justify-center ${asset.bg}`}
              >
                <BrandLogo className={`h-8 w-auto ${asset.logoClass}`} />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{asset.name}</h3>
                <p className="mt-1 text-caption text-muted-foreground">
                  {asset.description}
                </p>
                <p className="mt-1 text-caption text-muted-foreground/60">
                  {asset.format}
                </p>
              </div>
            </div>
          ))}

          {/* Icon mark card */}
          <div className="overflow-hidden rounded-lg border border-border">
            <div className="flex h-40 items-center justify-center bg-white">
              <svg className="h-12 w-12 text-[#1a1f36]" viewBox="0 0 56 56" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M46.8396 16.3714V7.92607C51.1551 8.64945 54.5648 12.0533 55.2885 16.3714H46.8396Z" />
                <path d="M55.4262 18.3152C55.3107 23.9025 50.7377 28.3981 45.1214 28.3981C39.5051 28.3981 34.8123 23.7826 34.8123 18.0933C34.8123 17.5075 34.8611 16.9305 34.9544 16.3758C35.758 11.574 39.8914 7.89944 44.8994 7.79293V12.0577C42.2711 12.1554 40.069 13.9438 39.3542 16.3758C39.1943 16.9172 39.1055 17.4942 39.1055 18.0933C39.1055 21.4261 41.8005 24.1288 45.1214 24.1288C45.7164 24.1288 46.2935 24.0445 46.8396 23.8803C49.2549 23.1613 51.0352 20.9513 51.1285 18.3152H55.4262Z" />
              </svg>
            </div>
            <div className="p-4">
              <h3 className="font-semibold">Favicon / Icon Mark</h3>
              <p className="mt-1 text-caption text-muted-foreground">
                Square icon mark for favicons and app icons
              </p>
              <p className="mt-1 text-caption text-muted-foreground/60">SVG (inline)</p>
            </div>
          </div>

          {/* Brand pattern card */}
          <div className="overflow-hidden rounded-lg border border-border">
            <div className="flex h-40 items-center justify-center bg-muted/50 p-4">
              <img
                src="/pattern-motadata.svg"
                alt="Motadata brand pattern"
                className="h-auto w-full max-w-[200px] opacity-60"
              />
            </div>
            <div className="flex items-center justify-between p-4">
              <div>
                <h3 className="font-semibold">Brand Pattern</h3>
                <p className="mt-1 text-caption text-muted-foreground">
                  Repeatable pattern for backgrounds and print
                </p>
                <p className="mt-1 text-caption text-muted-foreground/60">SVG</p>
              </div>
              <DownloadLink href="/pattern-motadata.svg" label="Download" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Product Screenshots ── */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          title="Product Screenshots"
          description="High-resolution dashboard screenshots for editorial and co-marketing use."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {[
            {
              name: "ObserveOps Dashboard",
              description: "Full-stack infrastructure monitoring dashboard",
              src: "/him-dashboard.png",
            },
            {
              name: "ServiceOps Dashboard",
              description: "AI-driven IT service management dashboard",
              src: "/him-dashboard.png",
            },
          ].map((shot) => (
            <div key={shot.name} className="overflow-hidden rounded-lg border border-border">
              <div className="relative aspect-video bg-muted">
                <img
                  src={shot.src}
                  alt={shot.name}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="flex items-center justify-between p-4">
                <div>
                  <h3 className="font-semibold">{shot.name}</h3>
                  <p className="mt-1 text-caption text-muted-foreground">
                    {shot.description}
                  </p>
                </div>
                <DownloadLink href={shot.src} label="Download" />
              </div>
            </div>
          ))}
        </div>

        {/* Product module icons */}
        <div className="mt-10">
          <h3 className="mb-4 text-label-md uppercase tracking-wider text-muted-foreground">
            Product Module Icons
          </h3>
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
            {productIcons.map((icon) => (
              <a
                key={icon.label}
                href={icon.src}
                download
                className="group flex flex-col items-center gap-2 rounded-lg border border-border p-4 transition-colors hover:border-primary/50"
              >
                <img
                  src={icon.src}
                  alt={icon.label}
                  className="h-10 w-10"
                />
                <span className="text-caption text-muted-foreground group-hover:text-primary">
                  {icon.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Leadership ── */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          title="Leadership"
          description="Executive headshots and bios for press use."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {executives.map((exec) => (
            <div key={exec.name} className="overflow-hidden rounded-lg border border-border">
              <div className="relative aspect-[4/5] bg-muted">
                <img
                  src={exec.photo}
                  alt={exec.name}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold">{exec.name}</h3>
                <p className="text-sm text-primary">{exec.title}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {exec.bio}
                </p>
                <div className="mt-4">
                  <DownloadLink href={exec.photo} label="Download headshot" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 6: Brand Colors ── */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          title="Brand Colors"
          description="Official color palette with hex and HSL values."
        />

        <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
          {brandColors.map((color) => (
            <div key={color.name} className="overflow-hidden rounded-lg border border-border">
              <div
                className="h-20"
                style={{ backgroundColor: color.hex }}
              />
              <div className="p-4">
                <h3 className="text-label-md">{color.name}</h3>
                <p className="mt-1 font-mono text-caption text-muted-foreground">
                  {color.hex}
                </p>
                <p className="font-mono text-caption text-muted-foreground/60">
                  hsl({color.hsl})
                </p>
                <p className="mt-2 text-caption text-muted-foreground">{color.usage}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA gradient preview */}
        <div className="mt-8">
          <p className="mb-3 text-label-sm uppercase tracking-wider text-muted-foreground">
            CTA Gradient Preview
          </p>
          <div className="h-12 w-full rounded-lg bg-gradient-to-r from-[#ee6352] to-[#d44b6f]" />
        </div>
      </section>

      {/* ── Section 7: Usage Guidelines ── */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          title="Usage Guidelines"
          description="Do's and Don'ts for using Motadata brand assets."
        />

        <div className="grid gap-8 sm:grid-cols-2">
          {/* Do's */}
          <div className="rounded-lg border border-green-200 bg-green-50/50 p-6">
            <h3 className="flex items-center gap-2 font-semibold text-green-700">
              <CheckCircle2 className="h-5 w-5" />
              Do
            </h3>
            <ul className="mt-4 space-y-3">
              {dosItems.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-green-800/80">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Don'ts */}
          <div className="rounded-lg border border-red-200 bg-red-50/50 p-6">
            <h3 className="flex items-center gap-2 font-semibold text-red-700">
              <XCircle className="h-5 w-5" />
              Don&apos;t
            </h3>
            <ul className="mt-4 space-y-3">
              {dontsItems.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-red-800/80">
                  <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Section 8: Brand Guidelines CTA ── */}
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-10">
        <div className="mx-auto max-w-2xl rounded-xl border border-border bg-muted/30 p-10 text-center">
          <h2 className="text-heading-lg">
            Need more details?
          </h2>
          <p className="mt-2 text-muted-foreground">
            Explore our full brand guidelines for typography, spacing, components,
            and design tokens.
          </p>
          <div className="mt-6">
            <Link href="/brand-guidelines">
              <Button>
                View Brand Guidelines
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
