import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions by Technologies | Motadata",
  description:
    "Explore the cutting-edge technologies powering Motadata's unified observability and service management platform.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
