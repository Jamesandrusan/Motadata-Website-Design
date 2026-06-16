"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { LdHero } from "./ld-hero";
import { type DemoUser } from "./ld-email-gate";
import { LdProductSelector } from "./ld-product-selector";
import { LdDemoEnvironment } from "./ld-demo-environment";
import { type DemoProduct } from "./ld-data";

type Step = "email" | "product" | "demo";

export function LdPageContent() {
  const [step, setStep] = useState<Step>("email");
  const [user, setUser] = useState<DemoUser | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<DemoProduct | null>(null);

  const handleEmailSubmit = (demoUser: DemoUser) => {
    setUser(demoUser);
    setStep("product");
  };

  const handleProductSelect = (product: DemoProduct) => {
    setSelectedProduct(product);
    setStep("demo");
  };

  const handleExitDemo = () => {
    setSelectedProduct(null);
    setStep("product");
  };

  return (
    <>
      {step === "email" && <LdHero onSubmit={handleEmailSubmit} />}

      {step === "product" && (
        <LdProductSelector onSelect={handleProductSelect} />
      )}

      <AnimatePresence>
        {step === "demo" && selectedProduct && user && (
          <LdDemoEnvironment
            product={selectedProduct}
            user={user}
            onExit={handleExitDemo}
          />
        )}
      </AnimatePresence>
    </>
  );
}
