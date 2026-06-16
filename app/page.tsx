import {
  ArrowRight,
  ArrowUpRight,
  Activity,
  Headset,
  BrainCircuit,
  Award,
  Zap,
  Sparkles,
  ShieldCheck,
  Users,
} from "lucide-react";

import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { InteractiveGrid } from "@/components/interactive-grid";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Navbar } from "@/components/navbar";
import { HeroOrbs, AnimatedBadge, FadeUp } from "@/components/hero-effects";
import { HeroCanvasTitle } from "@/components/hero-canvas-title";
import { HeroSideDecorations } from "@/components/hero-side-decorations";
import { GlobeSection } from "@/components/globe-section";
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
import { BackgroundBeams } from "@/components/ui/background-beams";
import { GlowCard, StatCard } from "@/components/ui/glow-card";
import { IntegrationWaterfall } from "@/components/integration-waterfall";
import { ProductScrollSection } from "@/components/product-scroll-section";
import { CtaSection } from "@/components/cta-section";
import { UpcomingModules } from "@/components/upcoming-modules";
import { CustomerLogoMarquee } from "@/components/customer-logos";
import { CompanyCaseStudies } from "@/components/company/company-case-studies";
import { EventAnnouncement } from "@/components/events/event-announcement";

/* ── DATA ── */

const stats = [
  { num: "95%", label: "Faster Incident Resolution", desc: "Automated detection and intelligent routing reduced resolution time dramatically." },
  { num: "80%", label: "Reduction in MTTR", desc: "Proactive monitoring and AI-powered analytics rapidly cut mean time to repair." },
  { num: "55%", label: "Cost Optimization", desc: "Intelligent resource optimization and automated workflows reduced operational spend." }
];

/* ── PAGE ── */

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />

      {/* ── EVENT ANNOUNCEMENT POPUP ── */}
      <EventAnnouncement />

      {/* ── HEADER ── */}
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden">
        <HeroOrbs />
        <HeroSideDecorations />

        <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[60%] -translate-x-1/2"
          style={{ background: "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.3), transparent)" }}
        />

        {/* Hero top content */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-[80px]">
          <div className="mx-auto max-w-6xl text-center">
            <FadeUp delay={100}>
              <div className="flex justify-center">
                <AnimatedBadge text="AI-powered IT Operations" />
              </div>
            </FadeUp>

            <FadeUp delay={250}>
              <h1 className="mt-6 text-[clamp(2rem,5vw,76px)] font-bold leading-[1.1] tracking-tight">
                <HeroCanvasTitle />
              </h1>
            </FadeUp>

            <FadeUp delay={400}>
              <p className="mx-auto mt-5 max-w-2xl text-[16px] font-medium leading-[26px] text-[#6B7280]" style={{ fontFamily: 'Inter, "Inter Fallback", system-ui, sans-serif' }}>
                Motadata brings observability and IT service management together, so you manage your entire IT environment from one platform, and you avoid switching across disconnected tools.
              </p>
            </FadeUp>

            <FadeUp delay={550}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Button size="lg" className="hero-shimmer h-12 px-7 text-[15px]">
                  Start Free Trial <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-7 text-[15px]">Schedule Demo</Button>
              </div>
            </FadeUp>
          </div>
        </div>

        {/* Observe / Serve / Evolve — 3 Column Text */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-[88px] pb-[40px]">
          <FadeUp delay={700}>
            <div className="grid gap-8 text-left md:grid-cols-3 md:gap-14 w-full">
              <div>
                <h3 className="text-heading-md sm:text-2xl">
                  Observe
                </h3>
                <p className="text-body-xs text-muted-foreground/70 mt-1">with Clarity</p>
                <p className="mt-3 text-[14px] font-medium leading-[22.75px] text-[#6B7280]" style={{ fontFamily: 'Inter, "Inter Fallback", system-ui, sans-serif' }}>
                  ObserveOps brings everything into one operational view. Every metric, every log, and every trace sits together across the full stack, so you see what is happening, understand why it is happening, and respond before it affects users.
                </p>
              </div>
              <div>
                <h3 className="text-heading-md sm:text-2xl">
                  Serve
                </h3>
                <p className="text-body-xs text-muted-foreground/70 mt-1">with Confidence</p>
                <p className="mt-3 text-[14px] font-medium leading-[22.75px] text-[#6B7280]" style={{ fontFamily: 'Inter, "Inter Fallback", system-ui, sans-serif' }}>
                  ServiceOps is built on ITIL-aligned practices designed for enterprise IT workflows. Incidents, requests, changes, and assets are managed in one system with full operational context. Your teams work with complete visibility, so resolution paths stay clear.
                </p>
              </div>
              <div>
                <h3 className="text-heading-md sm:text-2xl">
                  Evolve
                </h3>
                <p className="text-body-xs text-muted-foreground/70 mt-1">with Intelligence</p>
                <p className="mt-3 text-[14px] font-medium leading-[22.75px] text-[#6B7280]" style={{ fontFamily: 'Inter, "Inter Fallback", system-ui, sans-serif' }}>
                  Motadata&#39;s AI watches your environment around the clock, cuts alert noise, and surfaces root causes before they become incidents. Automated workflows handle the repetitive work, so your engineers focus on what actually moves the business forward.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Logo Marquee — inside hero */}
        <CustomerLogoMarquee />

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32"
          style={{ background: "linear-gradient(to top, hsl(var(--background)), transparent)" }}
        />
      </section>

      {/* ── divider ── */}
      <div className="relative z-10 mx-auto max-w-7xl"><div className="section-divider" /></div>

      {/* ── PRODUCTS — Bento Grid ── */}
      <ProductScrollSection forceOption={1} />


      {/* ── divider ── */}
      <div className="relative z-10 mx-auto max-w-7xl"><div className="section-divider" /></div>

      {/* ── INTEGRATIONS — Waterfall Columns ── */}
      <IntegrationWaterfall />


      {/* ── divider ── */}
      <div className="relative z-10 mx-auto max-w-7xl"><div className="section-divider" /></div>

      {/* ── UPCOMING PRODUCTS & MODULES ── */}
      <UpcomingModules />

      {/* ── divider ── */}
      <div className="relative z-10 mx-auto max-w-7xl"><div className="section-divider" /></div>

      {/* ── RECOGNITION ── */}
      <section className="relative z-10">
        <FloatingSquare className="absolute right-[7%] top-12 opacity-40" size={22} rotate={-10} />
        <FloatingCross className="absolute left-[6%] bottom-20 opacity-30" size={22} />

        <div className="mx-auto w-full max-w-7xl px-6 py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-overline text-primary">Industry Recognition</p>
              <h2 className="mt-3 text-display-md">Recognized By Leading Industry Organizations</h2>
              <p className="mt-4 max-w-md text-[16px] font-medium leading-[26px] text-[#6B7280]" style={{ fontFamily: 'Inter, "Inter Fallback", system-ui, sans-serif' }}>
                Featured in the Gartner Market Guide for IT Operations Platforms for unified observability and AI-driven IT operations at enterprise scale.
              </p>
              <a href="#" className="mt-6 inline-flex items-center gap-1.5 text-label-md text-primary hover:underline">
                Read the Report <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Award, text: "Recognized by Gartner Market Guide" },
                { icon: Users, text: "Trusted by 500+ Enterprise Customers" },
                { icon: Sparkles, text: "Award-Winning Platform Design" },
                { icon: ShieldCheck, text: "99.9% Uptime SLA Guarantee" }
              ].map((item) => (
                <div key={item.text} className="hover-lift flex items-start gap-3 rounded-xl border bg-white p-5 shadow-sm">
                  <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-label-md leading-snug">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── divider ── */}
      <div className="relative z-10 mx-auto max-w-7xl"><div className="section-divider" /></div>

      {/* ── GLOBAL REACH (Globe — the one dark moment, blends via gradients) ── */}
      <GlobeSection />

      {/* ── CASE STUDIES ── */}
      <CompanyCaseStudies />

      {/* ── divider ── */}
      <div className="relative z-10 mx-auto max-w-7xl"><div className="section-divider" /></div>

      {/* ── CUSTOMER SUCCESS ── */}
      <section id="results" className="relative z-10 bg-white">
        <FloatingTriangle className="absolute left-[5%] top-16 opacity-40" size={38} rotate={30} />
        <FloatingDiamond className="absolute right-[8%] top-24 opacity-30" size={26} />
        <FloatingDots className="absolute right-[14%] bottom-16 opacity-40" />

        <div className="mx-auto w-full max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-overline text-primary">Customer Success</p>
            <h2 className="mt-3 text-display-md">Real-world impact. Proven results.</h2>
            <p className="mt-4 text-[16px] font-medium leading-[26px] text-[#6B7280]" style={{ fontFamily: 'Inter, "Inter Fallback", system-ui, sans-serif' }}>
              See how leading organizations are transforming their operations with Motadata&apos;s
              unified observability platform.
            </p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {stats.map((s) => (
              <div key={s.num} className="feature-cell group relative overflow-hidden rounded-2xl border bg-white p-8 text-center">
                <DottedGlowBackground
                  className="opacity-0 transition-opacity duration-500 group-hover:opacity-60"
                  gap={14}
                  radius={1.2}
                  opacity={0.4}
                />
                <div className="relative z-10">
                  <p className="stat-number text-5xl font-bold sm:text-6xl">{s.num}</p>
                  <p className="mt-3 text-label-md">{s.label}</p>
                  <p className="mt-2 text-[14px] font-medium leading-[22.75px] text-[#6B7280]" style={{ fontFamily: 'Inter, "Inter Fallback", system-ui, sans-serif' }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── divider ── */}
      <div className="relative z-10 mx-auto max-w-7xl"><div className="section-divider" /></div>

      {/* ── CTA ── */}
      <CtaSection
        title="Monitor Your Entire IT Environment from One Place"
        description="Check out how observability and service management come together in Motadata to run IT operations in one place."
      >
        <Button size="lg" className="h-12 rounded-xl bg-white text-foreground hover:bg-white/90 px-8">
          Schedule Free Demo <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
        <Button size="lg" variant="outline" className="h-12 rounded-xl border border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white px-8">
          Start Your Free Trial <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </CtaSection>

      {/* ── DEV: THEME SWITCHER ── */}
      <ThemeSwitcher />

      {/* ── divider ── */}
      <div className="relative z-10 mx-auto max-w-7xl"><div className="section-divider" /></div>

      {/* ── FOOTER ── */}
      <Footer />
    </main>
  );
}
