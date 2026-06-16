import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Get in Touch | Motadata",
  description:
    "Reach out to Motadata for sales inquiries, product demos, partnership opportunities, or general questions. We're here to help.",
  openGraph: {
    title: "Contact Us — Get in Touch | Motadata",
    description: "Get in touch with the Motadata team for sales, support, or partnership inquiries.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
