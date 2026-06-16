"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { DotPattern, DiagPattern } from "@/components/patterns";

type LoginLayoutProps = {
  portalName: string;
  description?: string;
  children: React.ReactNode;
};

/* 6×4 grid of BrandLogo SVGs as a very subtle watermark */
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

const portalDescriptions: Record<string, string> = {
  "Employee Portal": "Access your employee dashboard, payroll, and company resources.",
  "OKR Portal": "Track objectives, key results, and team performance goals.",
  "360° Feedback Portal": "Submit and review multi-directional performance feedback.",
};

export function LoginLayout({ portalName, description, children }: LoginLayoutProps) {
  const desc = description || portalDescriptions[portalName] || "Sign in to continue.";

  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const hidden = mounted && !visible;

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-background px-4 py-12">
      {/* Background layers */}
      <DotPattern fade="radial" />
      <DiagPattern fade="radial" className="opacity-50" />
      <BrandLogoWatermark />

      {/* Subtle gradient orb */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/4 rounded-full opacity-[0.07] blur-[120px]"
        style={{ background: "hsl(var(--primary))" }}
      />

      {/* Card */}
      <div
        className={`relative z-10 w-full max-w-md transition-all duration-500 ease-out ${
          hidden ? "translate-y-5 opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        <div className="rounded-2xl border bg-white p-8 shadow-lg">
          {/* Logo */}
          <Link href="/" className="inline-block">
            <BrandLogo className="h-7 w-auto text-foreground" />
          </Link>

          {/* Portal info */}
          <h1 className="mt-6 text-heading-md">{portalName}</h1>
          <p className="mt-1 text-body-xs text-muted-foreground">{desc}</p>

          {/* Form slot */}
          <div className="mt-6">{children}</div>
        </div>

        {/* Back link */}
        <div className="mt-5 text-center">
          <Link
            href="/login"
            className="inline-flex items-center gap-1.5 text-body-xs text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to portal selection
          </Link>
        </div>
      </div>
    </div>
  );
}
