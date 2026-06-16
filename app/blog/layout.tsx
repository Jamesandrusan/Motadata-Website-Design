import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Motadata",
  description:
    "Explore the latest trends in AI-native ITOM, observability, service management, and engineering best practices from the Motadata team.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
