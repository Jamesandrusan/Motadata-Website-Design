import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud Monitoring | Motadata ObserveOps",
  description:
    "Monitor performance and availability of cloud infrastructure. Get real-time insights into your cloud deployments with AI-powered cloud monitoring at scale.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
