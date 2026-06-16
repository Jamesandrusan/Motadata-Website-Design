import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers — Join Our Team | Motadata",
  description:
    "Build your future in next-gen IT. Explore open positions at Motadata and join a team that's redefining observability and service management.",
  openGraph: {
    title: "Careers — Join Our Team | Motadata",
    description: "Explore open positions and build the future of AI-driven IT operations with Motadata.",
  },
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
