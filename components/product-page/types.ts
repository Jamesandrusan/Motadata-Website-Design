import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export interface ProductPageData {
  meta: ProductMeta;
  hero: HeroData;
  featuresGrid: FeaturesGridData;
  capabilities: CapabilitiesData;
  impactStats: ImpactStatsData;
  testimonial: TestimonialData;
  whyMotadata: WhyMotadataData;
  enterpriseVisibility: EnterpriseVisibilityData;
  industrySolutions: IndustrySolutionsData;
  journey: JourneyData;
  faq: FaqData;
  cta: CtaData;
}

export interface ProductMeta {
  title: string;
  description: string;
}

export interface HeroData {
  badge: string;
  headline: string;
  description: string;
  subtext: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  dashboardImage?: string;
}

export interface FeaturesGridData {
  label: string;
  title: string;
  subtitle: string;
  features: Array<{ icon: LucideIcon; title: string; desc: string }>;
  bottomTagline: ReactNode;
}

export interface CapabilitiesData {
  label: string;
  title: string;
  subtitle: string;
  tabs: Array<{
    icon: LucideIcon;
    label: string;
    title: string;
    desc: string;
    visual: ReactNode;
  }>;
}

export interface ImpactStatsData {
  label: string;
  title: string;
  subtitle: string;
  stats: Array<{ num: string; percent: number; label: string; desc: string }>;
}

export interface TestimonialData {
  quote: string;
  author: string;
  role: string;
}

export interface WhyMotadataData {
  label: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  items: Array<{ icon: LucideIcon; title: string; desc: string }>;
}

export interface EnterpriseVisibilityData {
  label: string;
  title: string;
  subtitle: string;
  sections: Array<{ icon: LucideIcon; title: string; desc: string }>;
}

export interface IndustrySolutionsData {
  label: string;
  title: string;
  subtitle: string;
  industries: Array<{ icon: LucideIcon; name: string; desc: string }>;
}

export interface JourneyData {
  label: string;
  title: string;
  subtitle: string;
  products: Array<{ icon: LucideIcon; name: string; desc: string; href: string }>;
}

export interface FaqData {
  label: string;
  title: string;
  subtitle: string;
  faqs: Array<{ q: string; a: string }>;
}

export interface CtaData {
  headline: string;
  description: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  footnote: string;
}
