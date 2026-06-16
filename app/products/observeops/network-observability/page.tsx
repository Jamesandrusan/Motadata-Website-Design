import { Metadata } from "next";
import { networkObservabilityData } from "@/data/products/observeops/network-observability";
import { NetworkObservabilityClient } from "./network-observability-client";

export const metadata: Metadata = {
  title: networkObservabilityData.meta.title,
  description: networkObservabilityData.meta.description,
};

export default function NetworkObservabilityPage() {
  return <NetworkObservabilityClient />;
}
