import type { ServiceOpsIntegrationData } from "@/components/integrations/serviceops-integration-types";

export const oneloginData: ServiceOpsIntegrationData = {
  meta: {
    title: "ServiceOps + OneLogin Integration | Motadata",
    description: "Connect Motadata ServiceOps with OneLogin to streamline user access, strengthen identity protection, and deliver secure, seamless service experiences.",
  },
  hero: {
    badge: "ServiceOps Integration",
    headline: "ServiceOps + OneLogin",
    tagline: "One identity. One access layer. Total control.",
    description: "Connect Motadata ServiceOps with OneLogin to streamline user access, strengthen identity protection, and deliver secure, seamless service experiences across your organization.",
    ctaPrimary: { label: "Get a Demo", href: "/contact" },
    ctaSecondary: { label: "Talk to an Expert", href: "/contact" },
  },
  compatibility: {
    headline: "ServiceOps integrates seamlessly with OneLogin",
    description: "Secure access. Unified identity. Enterprise-ready protection.",
  },
  whyItMatters: {
    label: "Why this integration matters",
    title: "Why connect ServiceOps with OneLogin?",
    description: "Because access should be simple. And security should be invisible.\nModern IT teams need to protect identities without slowing down users. With OneLogin integrated into ServiceOps, you eliminate friction, reduce risk, and ensure every user interaction is secure, authenticated, and governed.\nThis is identity that works quietly. But powerfully.",
  },
  keyOutcomes: {
    label: "Key Outcomes",
    title: "What you unlock with OneLogin + ServiceOps",
    items: [
      { title: "Unified access control", description: "Manage authentication and authorization from a single identity platform." },
      { title: "Secure Single Sign-On", description: "Enable seamless login across ServiceOps and connected applications." },
      { title: "Strong identity protection", description: "Enforce MFA and adaptive authentication to reduce security risks." },
      { title: "Faster onboarding and provisioning", description: "Automate user access based on roles and policies." },
      { title: "Reduced password fatigue", description: "Eliminate repeated logins and improve user experience." },
      { title: "Improved compliance posture", description: "Maintain audit-ready access control and identity governance." },
    ],
  },
  howItWorks: {
    label: "How it works",
    title: "Secure identity. Seamless service delivery.",
    steps: [
      { title: "Authenticate", description: "Users securely log in through OneLogin with SSO." },
      { title: "Verify", description: "Multi-factor authentication ensures trusted access." },
      { title: "Map", description: "Roles and permissions sync with ServiceOps workflows." },
      { title: "Operate", description: "Support teams resolve issues with complete user context." },
    ],
  },
  coreUseCases: {
    label: "Core Use Cases",
    title: "Built for secure, modern service environments",
    items: [
      { title: "Enterprise SSO for ServiceOps", description: "Provide a consistent and secure login experience." },
      { title: "Identity-Driven Access Control", description: "Align user roles with ITSM permissions and workflows." },
      { title: "Multi-Factor Authentication Enforcement", description: "Add an extra layer of protection for sensitive operations." },
      { title: "Automated User Provisioning", description: "Create and manage users dynamically based on identity rules." },
      { title: "Access Governance and Compliance", description: "Track, audit, and control user access across systems." },
      { title: "Hybrid Identity Management", description: "Support cloud and on-prem identity architectures seamlessly." },
    ],
  },
  personaValue: {
    label: "Persona Value",
    title: "Built for teams that manage access at scale",
    personas: [
      { role: "For Service Desk Leaders", description: "Reduce login issues, password reset tickets, and access-related delays. Free your team to focus on higher-value work and improve service efficiency." },
      { role: "For IT Directors", description: "Strengthen identity governance while simplifying access management across systems. Improve security without adding operational complexity." },
      { role: "For CIOs and CTOs", description: "Ensure enterprise-wide identity protection with measurable impact on risk reduction and compliance readiness." },
    ],
  },
  enterpriseReadiness: {
    label: "Enterprise Readiness",
    title: "Built for secure, scalable identity ecosystems",
    description: "Motadata ServiceOps integrates with OneLogin using secure, industry-standard protocols. Designed for enterprise environments, it ensures scalable identity management, strong access control, and seamless user experiences across distributed systems.",
  },
  relatedIntegrations: {
    label: "Related Integrations",
    title: "Extend your identity ecosystem",
    items: [
    { name: "Okta", slug: "okta" },
    { name: "Azure AD", slug: "azure-ad" },
    { name: "Keycloak", slug: "keycloak" },
    { name: "Google Workspace", slug: "google-workspace" },
    ],
  },
  closingCta: {
    headline: "Simplify access. Strengthen security. Scale with confidence.",
    description: "Connect Motadata ServiceOps with OneLogin to deliver secure, seamless, and intelligent identity-driven service operations.",
    ctaPrimary: { label: "Get a Demo", href: "/contact" },
    ctaSecondary: { label: "Explore Integrations", href: "/resources/integrations/serviceops" },
  },
};
