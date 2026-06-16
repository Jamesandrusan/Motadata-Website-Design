import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Support — 24×7 Assistance | Motadata",
  description:
    "Get 24×7 support for Motadata ObserveOps and ServiceOps. Access knowledge base, submit tickets, explore documentation, and connect with our support team.",
  openGraph: {
    title: "Customer Support — 24×7 Assistance | Motadata",
    description: "Round-the-clock support for Motadata products. Knowledge base, ticket submission, and expert assistance.",
  },
};

export default function SupportLayout({ children }: { children: React.ReactNode }) {
  return children;
}
