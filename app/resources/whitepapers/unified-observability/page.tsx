// This static route overrides the shared [id] route, so it renders the same detail page.
import type { Metadata } from "next";
import Page, { generateMetadata as gen } from "../[id]/page";

const params = Promise.resolve({ id: "unified-observability" });

export function generateMetadata(): Promise<Metadata> {
  return gen({ params });
}

export default function UnifiedObservabilityPage() {
  return <Page params={params} />;
}
