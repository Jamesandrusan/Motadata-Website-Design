import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company — About Motadata | Motadata",
  description:
    "Learn about Motadata's mission to unify Observability and Service Management. Discover our story, values, leadership, and global presence.",
  openGraph: {
    title: "Company — About Motadata",
    description:
      "Motadata unites Observability and Service Management, empowering IT to evolve into an AI-driven, future-ready enterprise.",
  },
};

export default function CompanyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
