import type { ServiceOpsIntegrationData } from "@/components/integrations/serviceops-integration-types";

export const jumpcloudData: ServiceOpsIntegrationData = {
  meta: {
    title: "ServiceOps + JumpCloud Integration | Motadata",
    description: "Centralize directory services and secure user access to Motadata ServiceOps across any device, any location, any workforce model.",
  },
  hero: {
    badge: "ServiceOps Integration",
    headline: "ServiceOps + JumpCloud",
    tagline: "One directory. One identity. Access without boundaries.",
    description: "Centralize directory services and secure user access to Motadata ServiceOps across any device, any location, any workforce model.",
    ctaPrimary: { label: "Get a Demo", href: "/contact" },
    ctaSecondary: { label: "Talk to an Expert", href: "/contact" },
  },
  compatibility: {
    headline: "ServiceOps integrates seamlessly with JumpCloud",
    description: "Cloud directory. Device control. Secure access. All unified.",
  },
  whyItMatters: {
    label: "Why this integration matters",
    title: "Why connect ServiceOps with JumpCloud?",
    description: "Because identity today is everywhere. Devices, users, locations, and access points are constantly expanding.\nJumpCloud brings centralized directory services across endpoints and identities. ServiceOps turns that identity into structured, secure service delivery.\nTogether, they simplify how users access systems, how teams manage permissions, and how enterprises enforce control at scale.\nFrom scattered identities to unified access. From manual control to intelligent governance.",
  },
  keyOutcomes: {
    label: "Key Outcomes",
    title: "What you unlock with JumpCloud + ServiceOps",
    items: [
      { title: "Centralized identity management", description: "Manage users, devices, and access policies from a single directory layer." },
      { title: "Secure access from anywhere", description: "Enable authenticated access to ServiceOps across remote, hybrid, and distributed environments." },
      { title: "Device-aware authentication", description: "Control access based on device posture, security state, and compliance." },
      { title: "Unified user lifecycle management", description: "Automate onboarding, role changes, and offboarding with identity-driven workflows." },
      { title: "Reduced access friction", description: "Eliminate login complexity while maintaining strong authentication standards." },
      { title: "Consistent security policies", description: "Enforce identity and access governance across all endpoints and systems." },
    ],
  },
  howItWorks: {
    label: "How it works",
    title: "Unified directory. Controlled access. Intelligent service delivery.",
    steps: [
      { title: "Centralize", description: "JumpCloud manages users, groups, and devices in a unified cloud directory." },
      { title: "Authenticate", description: "Users securely access ServiceOps using centralized identity and policies." },
      { title: "Map", description: "ServiceOps maps identity to roles, permissions, and service workflows." },
      { title: "Execute", description: "Every service request, approval, and action follows identity-aware access rules." },
    ],
  },
  coreUseCases: {
    label: "Core Use Cases",
    title: "Built for modern, distributed enterprises",
    items: [
      { title: "Remote workforce access", description: "Enable secure ServiceOps access for employees working from anywhere." },
      { title: "Device-based access control", description: "Grant or restrict access based on device compliance and health." },
      { title: "Identity-driven service workflows", description: "Align service requests, approvals, and escalations with user roles." },
      { title: "Automated onboarding and offboarding", description: "Provision and revoke access instantly as users join or leave." },
      { title: "Zero trust access models", description: "Ensure every access request is verified, contextual, and policy-driven." },
      { title: "Unified endpoint and identity control", description: "Manage users and devices together for stronger governance." },
    ],
  },
  personaValue: {
    label: "Persona Value",
    title: "Built for teams managing access, security, and scale",
    personas: [
      { role: "For Service Desk Leaders", description: "Reduce access-related tickets and delays. Enable faster user onboarding and smoother service delivery with fewer authentication issues." },
      { role: "For IT Directors", description: "Gain centralized control over identities and devices. Simplify governance while reducing tool sprawl and operational complexity." },
      { role: "For CIOs and CTOs", description: "Adopt a scalable, secure identity strategy that supports hybrid work, zero trust, and enterprise growth." },
    ],
  },
  enterpriseReadiness: {
    label: "Enterprise Readiness",
    title: "Built for distributed, device-first environments",
    description: "Motadata ServiceOps integrates with JumpCloud to support modern identity and access requirements. From centralized directory services to device-aware authentication, the platform is designed for enterprises operating across hybrid and remote environments.",
  },
  relatedIntegrations: {
    label: "Related Integrations",
    title: "Extend your identity ecosystem",
    items: [
    { name: "Azure Active Directory", slug: "azure-ad" },
    { name: "Okta", slug: "okta" },
    { name: "Google Workspace", slug: "google-workspace" },
    { name: "Keycloak", slug: "keycloak" },
    { name: "WSO2", slug: "wso2" },
    ],
  },
  closingCta: {
    headline: "One identity layer. Total control. Seamless service access.",
    description: "Connect Motadata ServiceOps with JumpCloud to unify identity, simplify access, and secure every interaction.",
    ctaPrimary: { label: "Get a Demo", href: "/contact" },
    ctaSecondary: { label: "Explore Integrations", href: "/resources/integrations/serviceops" },
  },
};
