import type { ServiceOpsIntegrationData } from "@/components/integrations/serviceops-integration-types";

export const keycloakData: ServiceOpsIntegrationData = {
  meta: {
    title: "ServiceOps + Keycloak Integration | Motadata",
    description: "Connect Motadata ServiceOps with Keycloak to enable flexible, open-source identity and access management.",
  },
  hero: {
    badge: "ServiceOps Integration",
    headline: "ServiceOps + Keycloak",
    tagline: "Open identity. Flexible access. Built for control.",
    description: "Connect Motadata ServiceOps with Keycloak to enable flexible, open-source identity and access management. Secure every interaction while maintaining full control over authentication, authorization, and user management.",
    ctaPrimary: { label: "Get a Demo", href: "/contact" },
    ctaSecondary: { label: "Talk to an Expert", href: "/contact" },
  },
  compatibility: {
    headline: "ServiceOps integrates seamlessly with Keycloak",
    description: "Enterprise-grade identity control with open-source flexibility.",
  },
  whyItMatters: {
    label: "Why this integration matters",
    title: "Why connect ServiceOps with Keycloak?",
    description: "Because identity should adapt to your architecture.\nModern enterprises need more than just secure access. They need flexibility. They need control. They need the freedom to customize identity workflows without vendor lock-in.\nThis integration brings open identity management into your service operations so you can enforce security, streamline access, and stay fully in control of your environment.",
  },
  keyOutcomes: {
    label: "Key Outcomes",
    title: "What you unlock with Keycloak + ServiceOps",
    items: [
      { title: "Flexible authentication", description: "Support multiple identity providers, protocols, and authentication methods." },
      { title: "Centralized identity management", description: "Control users, roles, and permissions from a single system." },
      { title: "Seamless Single Sign-On", description: "Enable secure and unified login across ServiceOps and connected systems." },
      { title: "Customizable access policies", description: "Define authentication flows that match your enterprise security requirements." },
      { title: "Faster user onboarding", description: "Provision users dynamically based on identity rules and roles." },
      { title: "Reduced vendor dependency", description: "Leverage open-source identity without compromising enterprise-grade security." },
    ],
  },
  howItWorks: {
    label: "How it works",
    title: "Open identity. Connected service workflows.",
    steps: [
      { title: "Authenticate", description: "Users log in securely via Keycloak using SSO." },
      { title: "Federate", description: "Integrate with existing directories and identity providers." },
      { title: "Map", description: "Roles and permissions sync with ServiceOps workflows." },
      { title: "Serve", description: "Support teams resolve issues with complete identity context." },
    ],
  },
  coreUseCases: {
    label: "Core Use Cases",
    title: "Designed for flexible, modern IT environments",
    items: [
      { title: "Open-Source SSO for ServiceOps", description: "Enable secure login using open standards and protocols." },
      { title: "Identity Federation", description: "Integrate LDAP, Active Directory, and third-party identity providers." },
      { title: "Role-Based Access Control", description: "Align Keycloak roles with ServiceOps permissions." },
      { title: "Custom Authentication Flows", description: "Implement MFA, conditional access, and custom login experiences." },
      { title: "Multi-Environment Identity Management", description: "Support hybrid, cloud, and on-prem identity architectures." },
      { title: "Compliance and Access Governance", description: "Maintain visibility and control over user access and policies." },
    ],
  },
  personaValue: {
    label: "Persona Value",
    title: "Built for teams that need flexibility and control",
    personas: [
      { role: "For IT Directors", description: "Gain full control over identity architecture while reducing dependency on proprietary systems. Simplify governance without sacrificing flexibility." },
      { role: "For Service Desk Leaders", description: "Reduce access-related tickets and improve response times with accurate identity context and automated provisioning." },
      { role: "For Engineering Teams", description: "Integrate identity seamlessly into modern applications and services. Customize authentication flows to match evolving requirements." },
    ],
  },
  enterpriseReadiness: {
    label: "Enterprise Readiness",
    title: "Built for open, scalable identity ecosystems",
    description: "Motadata ServiceOps integrates with Keycloak using industry-standard protocols like OAuth2, OpenID Connect, and SAML. Designed for hybrid and on-prem environments, it ensures flexibility, scalability, and secure identity management across your enterprise.",
  },
  relatedIntegrations: {
    label: "Related Integrations",
    title: "Extend your identity ecosystem",
    items: [
    { name: "Okta", slug: "okta" },
    { name: "Azure AD", slug: "azure-ad" },
    { name: "Google Workspace", slug: "google-workspace" },
    { name: "LDAP / Active Directory", slug: "adfs" },
    ],
  },
  closingCta: {
    headline: "Take control of identity. Without compromise.",
    description: "Connect Motadata ServiceOps with Keycloak to build a flexible, secure, and future-ready identity foundation for your service operations.",
    ctaPrimary: { label: "Get a Demo", href: "/contact" },
    ctaSecondary: { label: "Explore Integrations", href: "/resources/integrations/serviceops" },
  },
};
