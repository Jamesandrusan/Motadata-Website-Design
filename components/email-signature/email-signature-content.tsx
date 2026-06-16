"use client";

import { useEffect, useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/brand-logo";
import { HeroOrbs, AnimatedBadge, FadeUp } from "@/components/hero-effects";
import { DotPattern, DiagPattern } from "@/components/patterns";

/* ── Animation wrapper (same pattern as login-portal-selection) ── */
function AnimateIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setMounted(true);
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  const hidden = mounted && !visible;
  return (
    <div
      className={`transition-all duration-700 ease-out ${
        hidden ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* ── BrandLogo watermark (same as login-layout) ── */
function BrandLogoWatermark() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.02]"
      style={{
        maskImage:
          "radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 80%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 80%)",
      }}
    >
      <div
        className="absolute inset-[-20%] grid grid-cols-6 gap-16"
        style={{ transform: "rotate(-12deg)" }}
      >
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} className="flex items-center justify-center">
            <BrandLogo className="h-10 w-auto text-foreground" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Brand pattern overlay for signature preview cards ── */
function PatternOverlay({ position = "right" }: { position?: "left" | "right" | "full" }) {
  const pos = position;
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
      style={{
        maskImage:
          pos === "full"
            ? "linear-gradient(to bottom, black 0%, transparent 100%)"
            : pos === "right"
            ? "linear-gradient(to left, black 0%, transparent 60%)"
            : "linear-gradient(to right, black 0%, transparent 60%)",
        WebkitMaskImage:
          pos === "full"
            ? "linear-gradient(to bottom, black 0%, transparent 100%)"
            : pos === "right"
            ? "linear-gradient(to left, black 0%, transparent 60%)"
            : "linear-gradient(to right, black 0%, transparent 60%)",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/pattern-motadata.svg')",
          backgroundRepeat: "repeat",
          backgroundSize: "500px",
          opacity: 0.04,
        }}
      />
    </div>
  );
}

/* ── Placeholder signature data ── */
const SIG = {
  name: "John Smith",
  title: "Senior Product Manager",
  department: "Product & Engineering",
  phone: "+1 (408) 555-0192",
  email: "john.smith@motadata.com",
  website: "www.motadata.com",
  tagline: "Observe. Serve. Evolve.",
  linkedin: "https://linkedin.com/in/johnsmith",
  twitter: "https://twitter.com/johnsmith",
  logoUrl: "https://www.motadata.com/wp-content/uploads/2022/07/motadata-logo.png",
  patternUrl: "https://www.motadata.com/wp-content/uploads/pattern-motadata.svg",
};

/* ── Email-safe HTML generators (table-based, inline styles, with pattern background) ── */

function classicHorizontalHTML() {
  return `<table cellpadding="0" cellspacing="0" border="0" style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#333333;max-width:600px;background-image:url('${SIG.patternUrl}');background-repeat:repeat;background-size:400px;background-position:right center;">
  <tr>
    <td style="padding:16px;background:linear-gradient(to right, #ffffff 50%, rgba(255,255,255,0.92) 100%);">
      <table cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td style="padding-right:16px;vertical-align:middle;">
            <img src="${SIG.logoUrl}" alt="Motadata" width="130" style="display:block;" />
          </td>
          <td style="border-left:3px solid #f17463;padding-left:16px;vertical-align:middle;">
            <table cellpadding="0" cellspacing="0" border="0">
              <tr><td style="font-size:16px;font-weight:bold;color:#1a1a1a;padding-bottom:2px;">${SIG.name}</td></tr>
              <tr><td style="font-size:13px;color:#f17463;padding-bottom:6px;">${SIG.title} &mdash; ${SIG.department}</td></tr>
              <tr><td style="font-size:12px;color:#666666;padding-bottom:2px;">Phone: <a href="tel:${SIG.phone}" style="color:#333333;text-decoration:none;">${SIG.phone}</a></td></tr>
              <tr><td style="font-size:12px;color:#666666;padding-bottom:2px;">Email: <a href="mailto:${SIG.email}" style="color:#f17463;text-decoration:none;">${SIG.email}</a></td></tr>
              <tr><td style="font-size:12px;color:#666666;padding-bottom:6px;">Web: <a href="https://${SIG.website}" style="color:#f17463;text-decoration:none;">${SIG.website}</a></td></tr>
              <tr><td style="font-size:11px;color:#999999;font-style:italic;">${SIG.tagline}</td></tr>
              <tr><td style="padding-top:6px;font-size:12px;"><a href="${SIG.linkedin}" style="color:#f17463;text-decoration:none;">LinkedIn</a> &nbsp;|&nbsp; <a href="${SIG.twitter}" style="color:#f17463;text-decoration:none;">Twitter</a></td></tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`;
}

function stackedVerticalHTML() {
  return `<table cellpadding="0" cellspacing="0" border="0" style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#333333;max-width:600px;text-align:center;background-image:url('${SIG.patternUrl}');background-repeat:repeat;background-size:500px;background-position:center top;">
  <tr>
    <td style="padding:16px;background:linear-gradient(to bottom, rgba(255,255,255,0.95) 0%, #ffffff 100%);">
      <table cellpadding="0" cellspacing="0" border="0" style="width:100%;">
        <tr><td style="padding-bottom:10px;"><img src="${SIG.logoUrl}" alt="Motadata" width="120" style="display:inline-block;" /></td></tr>
        <tr><td style="font-size:18px;font-weight:bold;color:#1a1a1a;padding-bottom:2px;">${SIG.name}</td></tr>
        <tr><td style="font-size:13px;color:#f17463;padding-bottom:8px;">${SIG.title} &mdash; ${SIG.department}</td></tr>
        <tr><td><table cellpadding="0" cellspacing="0" border="0" style="margin:0 auto;"><tr><td style="width:60px;height:1px;background:#e5e5e5;"></td></tr></table></td></tr>
        <tr><td style="font-size:12px;color:#666666;padding-top:8px;padding-bottom:2px;"><a href="tel:${SIG.phone}" style="color:#333333;text-decoration:none;">${SIG.phone}</a> &nbsp;|&nbsp; <a href="mailto:${SIG.email}" style="color:#f17463;text-decoration:none;">${SIG.email}</a></td></tr>
        <tr><td style="font-size:12px;color:#666666;padding-bottom:8px;"><a href="https://${SIG.website}" style="color:#f17463;text-decoration:none;">${SIG.website}</a></td></tr>
        <tr><td><table cellpadding="0" cellspacing="0" border="0" style="margin:0 auto;"><tr><td style="width:60px;height:1px;background:#e5e5e5;"></td></tr></table></td></tr>
        <tr><td style="font-size:11px;color:#999999;font-style:italic;padding-top:8px;padding-bottom:4px;">${SIG.tagline}</td></tr>
        <tr><td style="font-size:12px;"><a href="${SIG.linkedin}" style="color:#f17463;text-decoration:none;">LinkedIn</a> &nbsp;|&nbsp; <a href="${SIG.twitter}" style="color:#f17463;text-decoration:none;">Twitter</a></td></tr>
      </table>
    </td>
  </tr>
</table>`;
}

function minimalHTML() {
  return `<table cellpadding="0" cellspacing="0" border="0" style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#333333;max-width:600px;">
  <tr><td style="font-size:16px;font-weight:bold;color:#1a1a1a;padding-bottom:1px;">${SIG.name}</td></tr>
  <tr><td style="font-size:13px;color:#888888;padding-bottom:6px;">${SIG.title}, ${SIG.department}</td></tr>
  <tr><td style="font-size:12px;color:#666666;padding-bottom:2px;"><a href="tel:${SIG.phone}" style="color:#666666;text-decoration:none;">${SIG.phone}</a> &nbsp;&middot;&nbsp; <a href="mailto:${SIG.email}" style="color:#666666;text-decoration:none;">${SIG.email}</a></td></tr>
  <tr><td style="font-size:12px;color:#666666;padding-bottom:6px;"><a href="https://${SIG.website}" style="color:#666666;text-decoration:none;">${SIG.website}</a></td></tr>
  <tr><td style="font-size:11px;color:#aaaaaa;font-style:italic;padding-bottom:4px;">${SIG.tagline}</td></tr>
  <tr><td style="font-size:12px;"><a href="${SIG.linkedin}" style="color:#888888;text-decoration:none;">LinkedIn</a> &nbsp;&middot;&nbsp; <a href="${SIG.twitter}" style="color:#888888;text-decoration:none;">Twitter</a></td></tr>
</table>`;
}

function modernCardHTML() {
  return `<table cellpadding="0" cellspacing="0" border="0" style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#333333;max-width:600px;">
  <tr>
    <td style="border:1px solid #e5e5e5;border-left:4px solid #f17463;border-radius:6px;padding:0;background-image:url('${SIG.patternUrl}');background-repeat:repeat;background-size:400px;background-position:right bottom;">
      <table cellpadding="0" cellspacing="0" border="0" style="width:100%;">
        <tr>
          <td style="padding:16px 20px;background:linear-gradient(to right, #ffffff 40%, rgba(255,255,255,0.90) 100%);border-radius:6px;">
            <table cellpadding="0" cellspacing="0" border="0" style="width:100%;">
              <tr>
                <td style="vertical-align:middle;">
                  <table cellpadding="0" cellspacing="0" border="0">
                    <tr><td style="font-size:16px;font-weight:bold;color:#1a1a1a;padding-bottom:2px;">${SIG.name}</td></tr>
                    <tr><td style="font-size:13px;color:#f17463;padding-bottom:8px;">${SIG.title} &mdash; ${SIG.department}</td></tr>
                    <tr><td style="font-size:12px;color:#666666;padding-bottom:2px;">Phone: <a href="tel:${SIG.phone}" style="color:#333333;text-decoration:none;">${SIG.phone}</a></td></tr>
                    <tr><td style="font-size:12px;color:#666666;padding-bottom:2px;">Email: <a href="mailto:${SIG.email}" style="color:#f17463;text-decoration:none;">${SIG.email}</a></td></tr>
                    <tr><td style="font-size:12px;color:#666666;padding-bottom:8px;">Web: <a href="https://${SIG.website}" style="color:#f17463;text-decoration:none;">${SIG.website}</a></td></tr>
                    <tr><td style="font-size:11px;color:#999999;font-style:italic;padding-bottom:6px;">${SIG.tagline}</td></tr>
                    <tr><td style="font-size:12px;"><a href="${SIG.linkedin}" style="color:#f17463;text-decoration:none;">LinkedIn</a> &nbsp;|&nbsp; <a href="${SIG.twitter}" style="color:#f17463;text-decoration:none;">Twitter</a></td></tr>
                  </table>
                </td>
                <td style="vertical-align:top;text-align:right;padding-left:20px;">
                  <img src="${SIG.logoUrl}" alt="Motadata" width="100" style="display:block;" />
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`;
}

function boldBannerHTML() {
  return `<table cellpadding="0" cellspacing="0" border="0" style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#333333;max-width:600px;width:100%;">
  <tr>
    <td style="background-color:#f17463;background-image:url('${SIG.patternUrl}');background-repeat:repeat;background-size:400px;background-position:center;border-radius:6px 6px 0 0;padding:0;">
      <table cellpadding="0" cellspacing="0" border="0" style="width:100%;">
        <tr>
          <td style="padding:14px 20px;background:linear-gradient(135deg, rgba(241,116,99,0.92) 0%, rgba(241,116,99,0.85) 100%);">
            <table cellpadding="0" cellspacing="0" border="0" style="width:100%;">
              <tr>
                <td style="font-size:18px;font-weight:bold;color:#ffffff;">${SIG.name}</td>
                <td style="text-align:right;"><img src="${SIG.logoUrl}" alt="Motadata" width="90" style="display:inline-block;" /></td>
              </tr>
              <tr><td colspan="2" style="font-size:13px;color:#ffffff;opacity:0.9;">${SIG.title} &mdash; ${SIG.department}</td></tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td style="border:1px solid #e5e5e5;border-top:none;border-radius:0 0 6px 6px;padding:14px 20px;">
      <table cellpadding="0" cellspacing="0" border="0">
        <tr><td style="font-size:12px;color:#666666;padding-bottom:2px;">Phone: <a href="tel:${SIG.phone}" style="color:#333333;text-decoration:none;">${SIG.phone}</a></td></tr>
        <tr><td style="font-size:12px;color:#666666;padding-bottom:2px;">Email: <a href="mailto:${SIG.email}" style="color:#f17463;text-decoration:none;">${SIG.email}</a></td></tr>
        <tr><td style="font-size:12px;color:#666666;padding-bottom:6px;">Web: <a href="https://${SIG.website}" style="color:#f17463;text-decoration:none;">${SIG.website}</a></td></tr>
        <tr><td style="font-size:11px;color:#999999;font-style:italic;padding-bottom:4px;">${SIG.tagline}</td></tr>
        <tr><td style="font-size:12px;"><a href="${SIG.linkedin}" style="color:#f17463;text-decoration:none;">LinkedIn</a> &nbsp;|&nbsp; <a href="${SIG.twitter}" style="color:#f17463;text-decoration:none;">Twitter</a></td></tr>
      </table>
    </td>
  </tr>
</table>`;
}

/* ── Template definitions ── */
const templates: {
  id: string;
  name: string;
  description: string;
  patternPosition: "left" | "right" | "full";
  getHTML: () => string;
}[] = [
  {
    id: "classic",
    name: "Classic Horizontal",
    description: "Logo left with a coral vertical divider and info on the right.",
    patternPosition: "right",
    getHTML: classicHorizontalHTML,
  },
  {
    id: "stacked",
    name: "Stacked Vertical",
    description: "Centered layout with logo on top and horizontal dividers.",
    patternPosition: "full",
    getHTML: stackedVerticalHTML,
  },
  {
    id: "minimal",
    name: "Minimal",
    description: "Ultra-clean text-only design with subtle hierarchy.",
    patternPosition: "left",
    getHTML: minimalHTML,
  },
  {
    id: "modern-card",
    name: "Modern Card",
    description: "Bordered card with a coral left accent bar and logo on the right.",
    patternPosition: "right",
    getHTML: modernCardHTML,
  },
  {
    id: "bold-banner",
    name: "Bold Banner",
    description: "Coral header banner with white text and info below.",
    patternPosition: "full",
    getHTML: boldBannerHTML,
  },
];

/* ── Copy button with feedback ── */
function CopyButton({ getHTML }: { getHTML: () => string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    const html = getHTML();
    try {
      const blob = new Blob([html], { type: "text/html" });
      await navigator.clipboard.write([
        new ClipboardItem({ "text/html": blob }),
      ]);
    } catch {
      await navigator.clipboard.writeText(html);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <Button
      variant="outline"
      size="sm"
      className="gap-2"
      onClick={handleCopy}
    >
      {copied ? (
        <>
          <Check className="h-4 w-4 text-green-500" />
          Copied!
        </>
      ) : (
        <>
          <Copy className="h-4 w-4" />
          Copy HTML
        </>
      )}
    </Button>
  );
}

/* ── React preview components (theme-responsive, Tailwind) ── */

function ClassicHorizontalPreview() {
  return (
    <div className="flex items-center gap-4">
      <BrandLogo className="h-6 w-auto shrink-0 text-foreground" />
      <div className="h-16 w-[3px] shrink-0 rounded-full bg-primary" />
      <div className="min-w-0">
        <p className="text-label-md-strong text-foreground">{SIG.name}</p>
        <p className="text-xs text-primary">{SIG.title} &mdash; {SIG.department}</p>
        <p className="mt-1 text-[11px] text-muted-foreground">Phone: {SIG.phone}</p>
        <p className="text-[11px] text-muted-foreground">Email: <span className="text-primary">{SIG.email}</span></p>
        <p className="text-[11px] text-muted-foreground">Web: <span className="text-primary">{SIG.website}</span></p>
        <p className="mt-1 text-[10px] italic text-muted-foreground/70">{SIG.tagline}</p>
        <p className="mt-1 text-[11px]"><span className="text-primary">LinkedIn</span> &nbsp;|&nbsp; <span className="text-primary">Twitter</span></p>
      </div>
    </div>
  );
}

function StackedVerticalPreview() {
  return (
    <div className="flex flex-col items-center text-center">
      <BrandLogo className="h-5 w-auto text-foreground" />
      <p className="mt-2 text-label-md-strong text-foreground">{SIG.name}</p>
      <p className="text-xs text-primary">{SIG.title} &mdash; {SIG.department}</p>
      <div className="my-2 h-px w-14 bg-border" />
      <p className="text-[11px] text-muted-foreground">{SIG.phone} &nbsp;|&nbsp; <span className="text-primary">{SIG.email}</span></p>
      <p className="text-[11px] text-muted-foreground"><span className="text-primary">{SIG.website}</span></p>
      <div className="my-2 h-px w-14 bg-border" />
      <p className="text-[10px] italic text-muted-foreground/70">{SIG.tagline}</p>
      <p className="mt-1 text-[11px]"><span className="text-primary">LinkedIn</span> &nbsp;|&nbsp; <span className="text-primary">Twitter</span></p>
    </div>
  );
}

function MinimalPreview() {
  return (
    <div>
      <p className="text-label-md-strong text-foreground">{SIG.name}</p>
      <p className="text-caption text-muted-foreground">{SIG.title}, {SIG.department}</p>
      <p className="mt-1.5 text-[11px] text-muted-foreground">{SIG.phone} &middot; {SIG.email}</p>
      <p className="text-[11px] text-muted-foreground">{SIG.website}</p>
      <p className="mt-1.5 text-[10px] italic text-muted-foreground/60">{SIG.tagline}</p>
      <p className="mt-1 text-[11px] text-muted-foreground">LinkedIn &middot; Twitter</p>
    </div>
  );
}

function ModernCardPreview() {
  return (
    <div className="flex items-start gap-4 rounded-md border border-border bg-card p-4" style={{ borderLeft: "4px solid hsl(var(--primary))" }}>
      <div className="min-w-0 flex-1">
        <p className="text-label-md-strong text-foreground">{SIG.name}</p>
        <p className="text-xs text-primary">{SIG.title} &mdash; {SIG.department}</p>
        <p className="mt-2 text-[11px] text-muted-foreground">Phone: {SIG.phone}</p>
        <p className="text-[11px] text-muted-foreground">Email: <span className="text-primary">{SIG.email}</span></p>
        <p className="text-[11px] text-muted-foreground">Web: <span className="text-primary">{SIG.website}</span></p>
        <p className="mt-2 text-[10px] italic text-muted-foreground/70">{SIG.tagline}</p>
        <p className="mt-1 text-[11px]"><span className="text-primary">LinkedIn</span> &nbsp;|&nbsp; <span className="text-primary">Twitter</span></p>
      </div>
      <BrandLogo className="h-5 w-auto shrink-0 text-foreground" />
    </div>
  );
}

function BoldBannerPreview() {
  return (
    <div className="overflow-hidden rounded-md">
      {/* Banner with pattern background */}
      <div className="relative overflow-hidden bg-primary px-5 py-3">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "url('/pattern-motadata.svg')",
            backgroundRepeat: "repeat",
            backgroundSize: "400px",
            opacity: 0.1,
            filter: "brightness(0) invert(1)",
          }}
        />
        <div className="relative flex items-center justify-between">
          <div>
            <p className="text-label-md-strong text-white">{SIG.name}</p>
            <p className="text-xs text-white/90">{SIG.title} &mdash; {SIG.department}</p>
          </div>
          <BrandLogo className="h-4 w-auto text-white" />
        </div>
      </div>
      <div className="border border-t-0 border-border px-5 py-3">
        <p className="text-[11px] text-muted-foreground">Phone: {SIG.phone}</p>
        <p className="text-[11px] text-muted-foreground">Email: <span className="text-primary">{SIG.email}</span></p>
        <p className="text-[11px] text-muted-foreground">Web: <span className="text-primary">{SIG.website}</span></p>
        <p className="mt-2 text-[10px] italic text-muted-foreground/70">{SIG.tagline}</p>
        <p className="mt-1 text-[11px]"><span className="text-primary">LinkedIn</span> &nbsp;|&nbsp; <span className="text-primary">Twitter</span></p>
      </div>
    </div>
  );
}

const previewComponents: Record<string, () => React.JSX.Element> = {
  classic: ClassicHorizontalPreview,
  stacked: StackedVerticalPreview,
  minimal: MinimalPreview,
  "modern-card": ModernCardPreview,
  "bold-banner": BoldBannerPreview,
};

/* ── Main export ── */
export function EmailSignatureContent() {
  return (
    <section className="relative z-10 overflow-hidden pb-24 pt-32">
      {/* Background layers (matching login pages) */}
      <HeroOrbs />
      <DotPattern fade="radial" />
      <DiagPattern fade="radial" className="opacity-50" />
      <BrandLogoWatermark />

      {/* Hero */}
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <FadeUp>
          <AnimatedBadge text="Email Signatures" />
        </FadeUp>

        <FadeUp delay={150}>
          <h1 className="mt-6 text-display-lg tracking-tight text-foreground sm:text-5xl">
            Professional Email Signatures
          </h1>
        </FadeUp>

        <FadeUp delay={300}>
          <p className="mt-4 text-body-lg text-muted-foreground">
            Choose a brand-consistent signature template, preview it below, and
            copy the HTML to paste directly into Outlook or Gmail.
          </p>
        </FadeUp>
      </div>

      {/* Templates */}
      <div className="relative mx-auto mt-16 max-w-3xl space-y-10 px-6">
        {templates.map((tpl, i) => {
          const Preview = previewComponents[tpl.id];
          return (
            <AnimateIn key={tpl.id} delay={400 + i * 120}>
              <div className="relative overflow-hidden rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm">
                {/* Pattern background on the card itself */}
                <PatternOverlay position={tpl.patternPosition} />

                {/* Header */}
                <div className="relative mb-4 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <span className="inline-block rounded-full border border-primary/20 bg-primary/5 px-3 py-0.5 text-label-sm text-primary">
                      {tpl.name}
                    </span>
                    <p className="mt-1 text-body-xs text-muted-foreground">
                      {tpl.description}
                    </p>
                  </div>
                  <CopyButton getHTML={tpl.getHTML} />
                </div>

                {/* Preview */}
                <div className="relative rounded-lg border border-border bg-background p-5">
                  <Preview />
                </div>
              </div>
            </AnimateIn>
          );
        })}
      </div>
    </section>
  );
}
