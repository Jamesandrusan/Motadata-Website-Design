"use client";

import { Suspense } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { CheckCircle, ArrowRight } from "lucide-react";
import { HeroOrbs, FadeUp } from "@/components/hero-effects";

function ThankYouContent() {
  return (
    <section className="relative z-10 overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24">
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
            Your request has been submitted. Our specialist will get in touch shortly.
          </p>
        </FadeUp>
        <FadeUp delay={550}>
          <Link
            href="/blog"
            className="group mt-8 inline-flex items-center gap-2 text-label-md text-primary transition-opacity hover:opacity-80"
          >
            Read the latest updates from Motadata
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}

export default function ScheduleDemoThankYouPage() {
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
