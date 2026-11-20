import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ObserveOps Infinity — Four Foundations. One Edition. | Motadata",
  description:
    "ObserveOps Infinity is generally available. Lower hardware TCO, a first-class observability pipeline, one unified edition, and a platform ready for agentic AI.",
  openGraph: {
    title: "ObserveOps Infinity — Four Foundations. One Edition. | Motadata",
    description:
      "ObserveOps Infinity is generally available. Lower hardware TCO, a first-class observability pipeline, one unified edition, and a platform ready for agentic AI.",
  },
};

export default function InfinityLayout({ children }: { children: React.ReactNode }) {
  return children;
}
