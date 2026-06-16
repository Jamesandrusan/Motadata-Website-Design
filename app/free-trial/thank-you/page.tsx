"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { ThemeSwitcher } from "@/components/theme-switcher";
import {
  CheckCircle,
  Download,
  BookOpen,
  ArrowRight,
  Mail,
  Monitor,
  Cpu,
  MemoryStick,
  HardDrive,
} from "lucide-react";
import { HeroOrbs, FadeUp } from "@/components/hero-effects";

function ThankYouContent() {
  const searchParams = useSearchParams();
  const product = searchParams.get("product") || "serviceops";
  const productName =
    product === "aiops" ? "Motadata ObserveOps" : "Motadata ServiceOps";

  return (
    <>
      {/* Hero */}
      <section className="relative z-10 overflow-hidden pt-12 pb-6 lg:pt-16 lg:pb-8">
        <HeroOrbs />
        <div className="relative z-10 mx-auto w-full max-w-3xl px-6 text-center">
          <FadeUp delay={100}>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle className="h-10 w-10 text-primary" />
            </div>
          </FadeUp>
          <FadeUp delay={250}>
            <h1 className="mt-6 text-[clamp(2.2rem,5.5vw,4rem)] font-bold leading-[1.05] tracking-tight">
              Thank You!
            </h1>
          </FadeUp>
          <FadeUp delay={400}>
            <p className="mx-auto mt-4 max-w-xl text-body-lg text-muted-foreground">
              You are one step away from using {productName}.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Unified action card */}
      <section className="relative z-10 pb-16">
        <div className="mx-auto w-full max-w-2xl px-6">
          <FadeUp delay={500}>
            <div className="space-y-8 text-center">

              {/* Download */}
              <div>
                <p className="text-label-md text-foreground mb-4">Download the software using the link below.</p>
                <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center">
                  <a
                    href="#"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-8 text-label-md-strong uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    <Download className="h-4 w-4" />
                    Download ISO
                  </a>
                  <a
                    href="#"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-primary/30 bg-primary/5 px-8 text-label-md-strong uppercase tracking-wider text-primary transition-colors hover:bg-primary/10"
                  >
                    <Download className="h-4 w-4" />
                    Download OVA
                  </a>
                </div>
              </div>

              {/* Get started */}
              <div>
                <p className="text-label-md text-foreground mb-4">Follow the guide to get started.</p>
                <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center">
                  <a
                    href="#"
                    className="group inline-flex items-center gap-3 rounded-xl bg-muted/40 px-5 py-3 transition-colors hover:bg-muted/60"
                  >
                    <BookOpen className="h-4 w-4 shrink-0 text-primary" />
                    <span className="text-label-md text-foreground">Installation and Getting Started</span>
                    <ArrowRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:translate-x-1" />
                  </a>
                  <a
                    href="#"
                    className="group inline-flex items-center gap-3 rounded-xl bg-muted/40 px-5 py-3 transition-colors hover:bg-muted/60"
                  >
                    <BookOpen className="h-4 w-4 shrink-0 text-primary" />
                    <span className="text-label-md text-foreground">Motadata User Guide</span>
                    <ArrowRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>

              {/* Support */}
              <p className="text-body-xs text-muted-foreground">
                In case you have any queries, contact us at{" "}
                <a
                  href="mailto:support@motadata.com"
                  className="font-semibold text-primary hover:underline"
                >
                  support@motadata.com
                </a>
              </p>

            </div>
          </FadeUp>

          {/* Minimum System Requirements */}
          <FadeUp delay={650}>
            <div className="mt-8 rounded-2xl bg-muted/30 px-8 py-6">
              <p className="mb-6 text-center text-overline text-muted-foreground">
                Minimum System Requirements
              </p>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <Monitor className="mx-auto h-5 w-5 text-primary" />
                  <p className="mt-2 text-label-md text-foreground">Virtual Appliance</p>
                  <p className="mt-0.5 text-caption text-muted-foreground">Bare Metal – ISO, VMware – OVA, Hyper-V – VHD</p>
                </div>

                <div className="text-center">
                  <Cpu className="mx-auto h-5 w-5 text-primary" />
                  <p className="mt-2 text-label-md text-foreground">CPU</p>
                  <p className="mt-0.5 text-caption text-muted-foreground">4 Core, 64 bit processor</p>
                </div>

                <div className="text-center">
                  <MemoryStick className="mx-auto h-5 w-5 text-primary" />
                  <p className="mt-2 text-label-md text-foreground">RAM</p>
                  <p className="mt-0.5 text-caption text-muted-foreground">8GB</p>
                </div>

                <div className="text-center">
                  <HardDrive className="mx-auto h-5 w-5 text-primary" />
                  <p className="mt-2 text-label-md text-foreground">Storage</p>
                  <p className="mt-0.5 text-caption text-muted-foreground">100GB</p>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}

export default function ThankYouPage() {
  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />
      <Suspense>
        <ThankYouContent />
      </Suspense>
      <ThemeSwitcher />
      <Footer />
    </main>
  );
}
