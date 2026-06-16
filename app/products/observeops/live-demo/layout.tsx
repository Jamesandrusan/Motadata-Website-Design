import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ObserveOps Live Demo — Interactive Dashboard Experience | Motadata",
  description:
    "Explore ObserveOps with an interactive live demo. Experience real-time dashboards for Network, Compliance, Infrastructure, Logs, APM, and RUM — no installation required.",
  openGraph: {
    title: "ObserveOps Live Demo — Interactive Dashboard Experience | Motadata",
    description:
      "Explore ObserveOps with an interactive live demo. Experience real-time dashboards for Network, Compliance, Infrastructure, Logs, APM, and RUM.",
  },
};

export default function ObserveOpsLiveDemoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
