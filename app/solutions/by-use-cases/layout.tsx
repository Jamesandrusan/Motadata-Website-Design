import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions by Use Cases | Motadata",
  description:
    "From infrastructure visibility to service automation — discover how Motadata unifies observability and operations for modern IT teams.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
