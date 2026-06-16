import type { ServiceOpsIntegrationData } from "@/components/integrations/serviceops-integration-types";

export const wso2Data: ServiceOpsIntegrationData = {
  meta: {
    title: "ServiceOps + WSO2 Integration | Motadata",
    description: "Bring powerful identity orchestration into Motadata ServiceOps with WSO2.",
  },
  hero: {
    badge: "ServiceOps Integration",
    headline: "ServiceOps + WSO2",
    tagline: "Orchestrate identity. Simplify complexity. Secure every journey.",
    description: "Bring powerful identity orchestration into Motadata ServiceOps with WSO2. Design, control, and scale complex authentication workflows across your enterprise with precision.",
    ctaPrimary: { label: "Get a Demo", href: "/contact" },
    ctaSecondary: { label: "Talk to an Expert", href: "/contact" },
  },
  compatibility: {
    headline: "ServiceOps integrates seamlessly with WSO2",
    description: "Flexible identity orchestration. Enterprise-grade authentication. Built for scale.",
  },
  whyItMatters: {
    label: "Why this integration matters",
    title: "Why connect ServiceOps with WSO2?",
    description: "Because modern identity is not static. It is dynamic, contextual, and constantly evolving.\nEnterprises today operate across hybrid environments, multiple identity providers, and complex access policies. WSO2 enables identity orchestration across these layers. ServiceOps turns that identity into action across service workflows.\nTogether, they give you control over how users authenticate, what they access, and how services respond.\nFrom complexity to clarity. From authentication to orchestration.",
  },
  keyOutcomes: {
    label: "Key Outcomes",
    title: "What you unlock with WSO2 + ServiceOps",
    items: [
      { title: "Identity orchestration at scale", description: "Design and manage complex authentication flows across systems and environments." },
      { title: "Adaptive authentication", description: "Apply context-aware access policies based on user, device, location, or risk." },
      { title: "Unified identity control", description: "Integrate multiple identity providers into a single orchestration layer." },
      { title: "Secure service interactions", description: "Ensure every request, approval, and workflow is backed by strong authentication." },
      { title: "Reduced identity complexity", description: "Eliminate fragmented identity logic across tools and applications." },
      { title: "Compliance-ready governance", description: "Enforce consistent authentication policies and audit access across systems." },
    ],
  },
  howItWorks: {
    label: "How it works",
    title: "Orchestrated identity. Intelligent service delivery.",
    steps: [
      { title: "Orchestrate", description: "WSO2 defines authentication flows across identity providers and systems." },
      { title: "Authenticate", description: "Users are verified through adaptive, policy-driven authentication." },
      { title: "Integrate", description: "ServiceOps maps identity context into roles, permissions, and workflows." },
      { title: "Execute", description: "Service requests, approvals, and actions follow identity-aware policies." },
    ],
  },
  coreUseCases: {
    label: "Core Use Cases",
    title: "Built for dynamic, multi-system enterprises",
    items: [
      { title: "Multi-step authentication workflows", description: "Design layered authentication for high-risk or sensitive operations." },
      { title: "Hybrid identity orchestration", description: "Unify identity across on-prem, cloud, and third-party systems." },
      { title: "Context-aware access control", description: "Adapt authentication flows based on real-time conditions." },
      { title: "Identity-driven ITSM workflows", description: "Align service approvals and actions with identity context." },
      { title: "Secure partner and external access", description: "Enable controlled access for vendors, partners, and third parties." },
      { title: "Zero trust identity frameworks", description: "Implement strong, policy-driven authentication across all services." },
    ],
  },
  personaValue: {
    label: "Persona Value",
    title: "Built for teams managing identity complexity at scale",
    personas: [
      { role: "For Service Desk Leaders", description: "Reduce authentication-related issues and delays. Enable smoother user experiences with fewer access disruptions and faster service delivery." },
      { role: "For IT Directors", description: "Standardize identity orchestration across systems. Eliminate inconsistencies and enforce governance without increasing operational overhead." },
      { role: "For CIOs and CTOs", description: "Adopt a future-ready identity strategy that supports zero trust, hybrid infrastructure, and enterprise-scale orchestration." },
    ],
  },
  enterpriseReadiness: {
    label: "Enterprise Readiness",
    title: "Built for complex, evolving identity ecosystems",
    description: "Motadata ServiceOps integrates with WSO2 to support advanced identity orchestration use cases. From adaptive authentication to multi-provider integration, the platform is designed for enterprises operating at scale with strict security and compliance requirements.",
  },
  relatedIntegrations: {
    label: "Related Integrations",
    title: "Extend your identity ecosystem",
    items: [
    { name: "Azure Active Directory", slug: "azure-ad" },
    { name: "ADFS", slug: "adfs" },
    { name: "Okta", slug: "okta" },
    { name: "OneLogin", slug: "onelogin" },
    { name: "Keycloak", slug: "keycloak" },
    ],
  },
  closingCta: {
    headline: "Orchestrate identity. Control access. Power every service.",
    description: "Connect Motadata ServiceOps with WSO2 to transform authentication into intelligent, policy-driven service experiences.",
    ctaPrimary: { label: "Get a Demo", href: "/contact" },
    ctaSecondary: { label: "Explore Integrations", href: "/resources/integrations/serviceops" },
  },
};
