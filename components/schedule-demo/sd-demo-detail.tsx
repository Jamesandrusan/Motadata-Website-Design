"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Mail,
  Phone,
  Clock,
  Brain,
  Shield,
  Zap,
  Award,
} from "lucide-react";
import { HeroOrbs, AnimatedBadge, FadeUp } from "@/components/hero-effects";

interface DemoDetailProps {
  product: "aiops" | "serviceops";
}

const productData = {
  aiops: {
    badge: "Demo Request",
    title: "Get a demo of Motadata AIOps",
    desc: "Schedule a personalized demo with our experts and discover how AI-native observability can transform your infrastructure monitoring.",
    contactTitle: "Have Questions? We've Got Answers!",
    contactDesc:
      "Schedule a personalized demo with our experts to explore how Motadata AIOps can transform your IT operations.",
    whyTitle: "Why Choose Motadata AIOps?",
    whyDesc:
      "Experience next-generation observability with comprehensive AI-powered monitoring",
    highlights: [
      {
        icon: Brain,
        title: "AI-Powered Insights",
        desc: "Advanced machine learning for predictive analytics and anomaly detection",
      },
      {
        icon: Shield,
        title: "Proactive Monitoring",
        desc: "Detect and resolve issues before they impact your business",
      },
      {
        icon: Zap,
        title: "Reduce MTTR",
        desc: "Minimize downtime with intelligent automation and rapid response",
      },
      {
        icon: Award,
        title: "Proven Platform",
        desc: "Trusted by enterprises worldwide for mission-critical infrastructure",
      },
    ],
  },
  serviceops: {
    badge: "Demo Request",
    title: "Get a demo of Motadata ServiceOps",
    desc: "Schedule a personalized demo with our experts and discover how intelligent ITSM can streamline your service management workflows.",
    contactTitle: "Have Questions? We've Got Answers!",
    contactDesc:
      "Schedule a personalized demo with our experts to explore how Motadata ServiceOps can optimize your service desk operations.",
    whyTitle: "Why Choose Motadata ServiceOps?",
    whyDesc:
      "Transform your IT service management with AI-powered automation and intelligent workflows",
    highlights: [
      {
        icon: Brain,
        title: "AI-Powered Service Desk",
        desc: "Intelligent ticket routing, auto-categorization, and smart suggestions",
      },
      {
        icon: Shield,
        title: "End-to-End ITSM",
        desc: "Incident, problem, change, and asset management in one platform",
      },
      {
        icon: Zap,
        title: "Faster Resolution",
        desc: "Reduce ticket resolution time with automation and knowledge management",
      },
      {
        icon: Award,
        title: "Enterprise Ready",
        desc: "ITIL-aligned processes trusted by organizations worldwide",
      },
    ],
  },
};

export function SdDemoDetail({ product }: DemoDetailProps) {
  const router = useRouter();
  const data = productData[product];

  return (
    <>
      {/* Hero */}
      <section className="relative z-10 overflow-hidden py-24 lg:py-32">
        <HeroOrbs />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
          <FadeUp delay={50}>
            <Link
              href="/schedule-demo"
              className="inline-flex items-center gap-1.5 text-body-xs text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              All Products
            </Link>
          </FadeUp>
          <div className="mx-auto max-w-3xl text-center mt-8">
            <FadeUp delay={100}>
              <div className="flex justify-center">
                <AnimatedBadge text={data.badge} />
              </div>
            </FadeUp>
            <FadeUp delay={250}>
              <h1 className="mt-6 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-tight">
                {data.title}
              </h1>
            </FadeUp>
            <FadeUp delay={400}>
              <p className="mx-auto mt-5 max-w-2xl text-body-md text-muted-foreground">
                {data.desc}
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Contact info + Form — connected layout */}
      <section className="relative z-10 py-16">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr]">

              {/* Left — Contact info */}
              <div className="p-8 lg:p-10">
                <h2 className="text-heading-md text-foreground">
                  {data.contactTitle}
                </h2>
                <p className="mt-3 text-body-xs text-muted-foreground">
                  {data.contactDesc}
                </p>

                <div className="mt-8 space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-label-md text-foreground">Sales</p>
                      <p className="mt-0.5 text-body-xs text-muted-foreground">sales@motadata.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-label-md text-foreground">Phone</p>
                      <p className="mt-0.5 text-body-xs text-muted-foreground">+1 (844) 937-0503</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-label-md text-foreground">Availability</p>
                      <p className="mt-0.5 text-body-xs text-muted-foreground">
                        Monday through Friday, 9 AM to 6 PM EST.
                        <br />
                        We typically respond to demo requests within 24 hours.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right — Form */}
              <div className="border-t lg:border-t-0 lg:border-l border-border p-8 lg:p-10">
                <h3 className="text-heading-sm text-foreground">Request a Demo</h3>
                <p className="mt-1.5 text-body-xs text-muted-foreground">
                  Fill out the form below and our team will get back to you shortly.
                </p>

              <form className="mt-6 space-y-4" onSubmit={(e) => { e.preventDefault(); router.push(`/schedule-demo/thank-you?product=${product}`); }}>
                <div>
                  <label className="mb-1.5 block text-label-md text-foreground">
                    Full Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="h-11 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition-colors focus:border-primary/40"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-label-md text-foreground">
                    Contact number <span className="text-primary">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="h-11 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition-colors focus:border-primary/40"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-label-md text-foreground">
                    Email <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="h-11 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition-colors focus:border-primary/40"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-label-md text-foreground">
                    Write your queries here <span className="text-primary">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your requirements and questions..."
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary/40 resize-none"
                  />
                </div>

                {/* reCAPTCHA placeholder */}
                <div className="rounded-xl border border-border bg-muted/20 p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-7 w-7 rounded border border-border bg-background" />
                    <span className="text-body-xs text-muted-foreground">I&apos;m not a robot</span>
                    <span className="ml-auto text-[10px] text-muted-foreground/50">reCAPTCHA</span>
                  </div>
                </div>

                <p className="text-caption text-muted-foreground">
                  By submitting this form, I agree to the{" "}
                  <a href="#" className="text-primary hover:underline">Privacy Policy</a>{" "}
                  and consent to being contacted by Motadata.
                </p>

                <button
                  type="submit"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary text-label-md-strong uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Get a Demo
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose section */}
      <section className="relative z-10 border-t border-border py-20">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-heading-lg sm:text-3xl">
              {data.whyTitle}
            </h2>
            <p className="mt-3 text-body-xs text-muted-foreground">
              {data.whyDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {data.highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mt-4 text-label-md-strong text-foreground">{item.title}</h3>
                  <p className="mt-2 text-body-xs text-muted-foreground">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
