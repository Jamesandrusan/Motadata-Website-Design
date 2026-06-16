import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unified Compute Visibility | Hybrid Infrastructure Monitoring | Motadata",
  description:
    "Monitor your entire compute layer — from physical servers to virtualized and hyper-converged systems — with unified health, utilization, and performance intelligence.",
  openGraph: {
    title: "Unified Compute Visibility | Motadata ObserveOps",
    description:
      "Every Core Counted. Every System Accounted. Deep visibility across Windows, Linux, Unix, VMware, Hyper-V, Citrix, and HCI stacks.",
  },
};

export default function UCVLayout({ children }: { children: React.ReactNode }) {
  return children;
}
