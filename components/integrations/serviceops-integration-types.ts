export interface ServiceOpsIntegrationData {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    badge: string;
    headline: string;
    tagline: string;
    description: string;
    ctaPrimary: { label: string; href: string };
    ctaSecondary: { label: string; href: string };
  };
  compatibility: {
    headline: string;
    description: string;
  };
  whyItMatters: {
    label: string;
    title: string;
    description: string;
  };
  keyOutcomes: {
    label: string;
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  howItWorks: {
    label: string;
    title: string;
    steps: Array<{
      title: string;
      description: string;
    }>;
  };
  coreUseCases: {
    label: string;
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  personaValue: {
    label: string;
    title: string;
    personas: Array<{
      role: string;
      description: string;
    }>;
  };
  enterpriseReadiness: {
    label: string;
    title: string;
    description: string;
  };
  relatedIntegrations: {
    label: string;
    title: string;
    items: Array<{
      name: string;
      slug: string;
    }>;
  };
  closingCta: {
    headline: string;
    description: string;
    ctaPrimary: { label: string; href: string };
    ctaSecondary: { label: string; href: string };
  };
}
