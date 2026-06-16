"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Users, Target, MessageCircle, KeyRound } from "lucide-react";

const portals = [
  {
    name: "Employee Portal",
    description: "Access payroll, leave management, and company resources.",
    href: "/login/employee",
    icon: Users,
  },
  {
    name: "OKR Portal",
    description: "Track objectives, key results, and team performance.",
    href: "/login/okr",
    icon: Target,
  },
  {
    name: "360° Feedback Portal",
    description: "Submit and review multi-directional performance feedback.",
    href: "/login/360-feedback",
    icon: MessageCircle,
  },
  {
    name: "Login",
    description: "Sign in securely with your Microsoft account — no password needed.",
    href: "/login/passwordless",
    icon: KeyRound,
  },
];

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
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const hidden = mounted && !visible;

  return (
    <div
      className={`transition-all duration-500 ease-out ${
        hidden ? "translate-y-5 opacity-0" : "translate-y-0 opacity-100"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function LoginPortalSelection() {
  return (
    <section className="relative z-10">
      <div className="mx-auto w-full max-w-6xl px-6 py-24">
        {/* Header */}
        <AnimateIn delay={100} className="text-center">
          <p className="text-overline text-primary">
            Internal Access
          </p>
          <h1 className="mt-3 text-display-md">
            Login Portal
          </h1>
          <p className="mx-auto mt-3 max-w-lg text-base text-muted-foreground">
            Select the portal you&apos;d like to sign in to.
          </p>
        </AnimateIn>

        {/* Portal cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {portals.map((portal, i) => (
            <AnimateIn key={portal.name} delay={250 + i * 100}>
              <Link
                href={portal.href}
                className="group flex flex-col items-center rounded-xl border bg-card p-8 text-center transition-all duration-300 hover:border-primary/40 hover:shadow-lg"
              >
                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                  <portal.icon className="h-6 w-6" />
                </div>

                <h2 className="mt-5 text-heading-sm">
                  {portal.name}
                </h2>
                <p className="mt-2 text-body-xs text-muted-foreground">
                  {portal.description}
                </p>

                <span className="mt-5 text-label-md text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Sign in &rarr;
                </span>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
