import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ServiceOps — Unified IT Service Management Platform | Motadata",
  description:
    "Unified service, intelligent automation, enterprise confidence. ServiceOps delivers an AI-powered, ITIL-aligned service management platform that unifies incidents, requests, changes, assets, and automation.",
  openGraph: {
    title: "ServiceOps — Unified IT Service Management Platform | Motadata",
    description:
      "AI-powered ITSM platform unifying incidents, requests, changes, assets, configurations, and patches for enterprise scale.",
  },
};

export default function ServiceOpsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
