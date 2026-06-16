"use client";

import { Suspense } from "react";
import { OdPageContent } from "@/components/observeops-demo/od-page-content";

export default function ObserveOpsLiveDemoPage() {
  return (
    <Suspense>
      <OdPageContent />
    </Suspense>
  );
}
