import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ObserveOps — Unified Observability Platform | Motadata",
  description:
    "Total visibility, intelligent action, enterprise confidence. ObserveOps gives you a complete, real-time view of every system, every signal, every user journey — powered by AI and built on Motastore.",
  openGraph: {
    title: "ObserveOps — Unified Observability Platform | Motadata",
    description:
      "Full-stack observability across hybrid environments. Monitor networks, infrastructure, applications, and user experience with AI-driven insights.",
  },
};

export default function ObserveOpsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
