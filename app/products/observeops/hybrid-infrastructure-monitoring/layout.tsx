import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hybrid Infrastructure Monitoring | ObserveOps | Motadata",
  description:
    "Unify on-prem and cloud monitoring with Motadata Hybrid Infrastructure Monitoring. Get real-time visibility across servers, VMs, containers, and cloud instances in a single pane of glass.",
  openGraph: {
    title: "Hybrid Infrastructure Monitoring | Motadata ObserveOps",
    description:
      "Full-stack visibility across hybrid environments. Monitor servers, VMs, containers, and cloud instances with AI-driven insights.",
  },
};

export default function HIMLayout({ children }: { children: React.ReactNode }) {
  return children;
}
