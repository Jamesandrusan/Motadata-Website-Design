import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media Kit — Press & Brand Assets | Motadata",
  description:
    "Download official Motadata logos, product screenshots, executive photos, and brand assets. Everything press, partners, and customers need in one place.",
  openGraph: {
    title: "Media Kit — Press & Brand Assets | Motadata",
    description:
      "Download official Motadata logos, product screenshots, executive photos, and brand assets for press and partner use.",
  },
};

export default function MediaKitLayout({ children }: { children: React.ReactNode }) {
  return children;
}
