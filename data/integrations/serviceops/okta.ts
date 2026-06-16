import type { ServiceOpsIntegrationData } from "@/components/integrations/serviceops-integration-types";

export const oktaData: ServiceOpsIntegrationData = {
  meta: {
    title: "ServiceOps + Okta Integration | Motadata",
    description: "Connect Motadata ServiceOps with Okta to simplify access management, enable secure Single Sign-On, and automate user lifecycle workflows.",
  },
  hero: {
    badge: "ServiceOps Integration",
    headline: "ServiceOps + Okta",
    tagline: "Secure access. Simplified identity. Seamless service.",
    description: "Connect Motadata ServiceOps with Okta to simplify access management, enable secure Single Sign-On, and automate user lifecycle workflows. Every user gets the right access at the right time without friction or risk.",
    ctaPrimary: { label: "Get a Demo", href: "/contact" },
    ctaSecondary: { label: "Talk to an Expert", href: "/contact" },
  },
  compatibility: {
    headline: "ServiceOps works seamlessly with Okta",
    description: "Unify identity and service operations with enterprise-grade access control.",
  },
  whyItMatters: {
    label: "Why this integration matters",
    title: "Why connect ServiceOps with Okta?",
    description: "Because access should never slow down service.\nWhen identity systems and service platforms operate separately, access requests pile up, permissions become inconsistent, and security gaps emerge. Teams waste time managing users instead of solving problems.\nThis integration ensures identity, access, and service workflows move together so your IT operations stay secure, efficient, and scalable.",
  },
  keyOutcomes: {
    label: "Key Outcomes",
    title: "What changes when access and service are unified?",
    items: [
      { title: "Secure Single Sign-On", description: "Enable users to access ServiceOps with one trusted identity." },
      { title: "Automated user lifecycle management", description: "Provision, update, and deactivate users without manual effort." },
      { title: "Centralized access control", description: "Manage permissions consistently across all service workflows." },
      { title: "Faster onboarding and offboarding", description: "Grant or revoke access instantly as users join or leave." },
      { title: "Reduced service desk workload", description: "Eliminate repetitive access-related tickets and requests." },
      { title: "Stronger security posture", description: "Ensure every access point follows identity policies and compliance standards." },
    ],
  },
  howItWorks: {
    label: "How it works",
    title: "From identity to resolution. Fully connected.",
    steps: [
      { title: "Authenticate", description: "Users securely log in to ServiceOps using Okta SSO." },
      { title: "Sync", description: "User data and roles automatically flow into ServiceOps." },
      { title: "Control", description: "Access permissions align with identity policies defined in Okta." },
      { title: "Serve", description: "Service teams resolve issues faster with accurate user context." },
    ],
  },
  coreUseCases: {
    label: "Core Use Cases",
    title: "Built for modern identity-driven service operations",
    items: [
      { title: "Single Sign-On for ServiceOps", description: "Deliver seamless and secure login experiences for all users." },
      { title: "Automated Provisioning and Deprovisioning", description: "Ensure instant access for new users and immediate removal for departing employees." },
      { title: "Role-Based Access Control", description: "Map Okta groups and roles to ServiceOps permissions." },
      { title: "Identity-Driven Service Requests", description: "Enable faster ticket handling with accurate user identity and access context." },
      { title: "Secure Service Portal Access", description: "Control access to service catalogs and portals based on identity policies." },
      { title: "Compliance and Audit Readiness", description: "Maintain complete visibility into user access and activity." },
    ],
  },
  personaValue: {
    label: "Persona Value",
    title: "Built for teams that manage access, service, and scale",
    personas: [
      { role: "For IT Directors", description: "Gain centralized control over identity and access. Reduce complexity while improving governance and compliance." },
      { role: "For Service Desk Leaders", description: "Reduce ticket volume caused by access issues. Empower teams to resolve requests faster with accurate user context." },
      { role: "For MSPs", description: "Manage identity and access across multiple clients with consistency. Deliver secure service at scale without increasing operational overhead." },
    ],
  },
  enterpriseReadiness: {
    label: "Enterprise Readiness",
    title: "Built for secure, scalable identity integration",
    description: "Motadata ServiceOps integrates with Okta using secure authentication standards and real-time synchronization. Designed for enterprise environments, it ensures identity consistency, strong governance, and seamless service delivery across distributed teams.",
  },
  relatedIntegrations: {
    label: "Related Integrations",
    title: "Extend your identity ecosystem",
    items: [
    { name: "Azure AD", slug: "azure-ad" },
    { name: "Google Workspace", slug: "google-workspace" },
    { name: "Microsoft Teams", slug: "microsoft-teams" },
    ],
  },
  closingCta: {
    headline: "Simplify access. Strengthen security. Accelerate service.",
    description: "Connect Motadata ServiceOps with Okta to unify identity and service workflows while delivering secure, frictionless user experiences.",
    ctaPrimary: { label: "Get a Demo", href: "/contact" },
    ctaSecondary: { label: "Explore Integrations", href: "/resources/integrations/serviceops" },
  },
};
