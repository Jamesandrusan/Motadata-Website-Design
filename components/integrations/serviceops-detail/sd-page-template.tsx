"use client";

import { SDHero } from "./sd-hero";
import { SDCompatibility } from "./sd-compatibility";
import { SDWhyItMatters } from "./sd-why-it-matters";
import { SDKeyOutcomes } from "./sd-key-outcomes";
import { SDHowItWorks } from "./sd-how-it-works";
import { SDCoreUseCases } from "./sd-core-use-cases";
import { SDPersonaValue } from "./sd-persona-value";
import { SDEnterpriseReadiness } from "./sd-enterprise-readiness";
import { SDRelatedIntegrations } from "./sd-related-integrations";
import { SDClosingCta } from "./sd-closing-cta";
import type { ServiceOpsIntegrationData } from "../serviceops-integration-types";

function SectionDivider() {
  return (
    <div className="relative z-10 mx-auto max-w-7xl">
      <div className="section-divider" />
    </div>
  );
}

export function ServiceOpsDetailTemplate({ data }: { data: ServiceOpsIntegrationData }) {
  return (
    <>
      <SDHero data={data.hero} />
      <SectionDivider />
      <SDCompatibility data={data.compatibility} />
      <SectionDivider />
      <SDWhyItMatters data={data.whyItMatters} />
      <SectionDivider />
      <SDKeyOutcomes data={data.keyOutcomes} />
      <SectionDivider />
      <SDHowItWorks data={data.howItWorks} />
      <SectionDivider />
      <SDCoreUseCases data={data.coreUseCases} />
      <SectionDivider />
      <SDPersonaValue data={data.personaValue} />
      <SectionDivider />
      <SDEnterpriseReadiness data={data.enterpriseReadiness} />
      <SectionDivider />
      <SDRelatedIntegrations data={data.relatedIntegrations} />
      <SectionDivider />
      <SDClosingCta data={data.closingCta} />
    </>
  );
}
