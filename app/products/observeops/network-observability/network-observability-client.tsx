"use client";

import { ProductPageTemplate } from "@/components/product-page/pt-page-template";
import { networkObservabilityData } from "@/data/products/observeops/network-observability";

export function NetworkObservabilityClient() {
  return <ProductPageTemplate data={networkObservabilityData} />;
}
