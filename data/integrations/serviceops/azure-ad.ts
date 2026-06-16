import type { ServiceOpsIntegrationData } from "@/components/integrations/serviceops-integration-types";

export const azureAdData: ServiceOpsIntegrationData = {
  meta: {
    title: "ServiceOps + Azure AD Integration | Motadata",
    description: "Connect Motadata ServiceOps with Microsoft Azure AD to enable secure Single Sign-On and automate user lifecycle management.",
  },
  hero: {
    badge: "ServiceOps Integration",
    headline: "ServiceOps + Azure AD",
    tagline: "Secure access. Unified identity. Seamless service.",
    description: "Connect Motadata ServiceOps with Microsoft Azure AD to enable secure Single Sign-On and automate user lifecycle management. From onboarding to access control, every identity-driven workflow becomes faster, simpler, and more reliable.",
    ctaPrimary: { label: "Get a Demo", href: "/contact" },
    ctaSecondary: { label: "Talk to an Expert", href: "/contact" },
  },
  compatibility: {
    headline: "ServiceOps works seamlessly with Microsoft Azure AD",
    description: "Bring identity, access, and service operations together with enterprise-grade control.",
  },
  whyItMatters: {
    label: "Why this integration matters",
    title: "Why connect ServiceOps with Azure AD?",
    description: "Because identity is the foundation of every service interaction.\nWithout a unified identity system, access becomes fragmented, user data gets outdated, and service teams spend time fixing permissions instead of resolving issues. Security risks increase. Productivity slows.\nThis integration ensures every user, role, and access point is aligned with your enterprise identity framework so service delivery stays secure, consistent, and efficient.",
  },
  keyOutcomes: {
    label: "Key Outcomes",
    title: "What changes when identity and service are unified?",
    items: [
      { title: "Secure Single Sign-On", description: "Enable seamless access to ServiceOps using Azure AD credentials." },
      { title: "Automated user lifecycle", description: "Provision, update, and deactivate users without manual effort." },
      { title: "Consistent access control", description: "Ensure users have the right permissions based on their role and identity." },
      { title: "Real-time user synchronization", description: "Keep user profiles accurate across incidents, requests, and workflows." },
      { title: "Reduced administrative overhead", description: "Eliminate repetitive user management tasks for IT teams." },
      { title: "Stronger compliance and governance", description: "Maintain audit-ready identity and access control across your service environment." },
    ],
  },
  howItWorks: {
    label: "How it works",
    title: "From identity to resolution. Fully connected.",
    steps: [
      { title: "Authenticate", description: "Users access ServiceOps securely through Azure AD Single Sign-On." },
      { title: "Sync", description: "User profiles and roles automatically synchronize with ServiceOps." },
      { title: "Govern", description: "Access permissions align with organizational identity policies." },
      { title: "Serve", description: "Service teams resolve issues with accurate user context and controlled access." },
    ],
  },
  coreUseCases: {
    label: "Core Use Cases",
    title: "Built for enterprise identity-driven service workflows",
    items: [
      { title: "Single Sign-On for ServiceOps", description: "Provide secure and frictionless login for all users through Azure AD." },
      { title: "Automated User Provisioning and Deprovisioning", description: "Ensure employees get instant access when they join and lose access immediately when they leave." },
      { title: "Role-Based Access Control", description: "Map Azure AD roles to ServiceOps permissions for consistent access management." },
      { title: "Identity-Aware Incident Management", description: "Link tickets and service requests to accurate user profiles for faster resolution." },
      { title: "Secure Service Portal Access", description: "Control who can access what within the service portal based on identity policies." },
      { title: "Compliance and Audit Readiness", description: "Maintain clear records of user access and activity for audits and governance." },
    ],
  },
  personaValue: {
    label: "Persona Value",
    title: "Who benefits most? Every team responsible for secure and efficient service",
    personas: [
      { role: "For IT Directors", description: "Strengthen governance with centralized identity control. Reduce operational complexity while ensuring compliance across all service workflows." },
      { role: "For Service Desk Leaders", description: "Give agents accurate user context from the start. Resolve issues faster without delays caused by access or identity gaps." },
      { role: "For MSPs", description: "Manage identity and access across multiple clients with consistency. Deliver secure, scalable service without increasing administrative burden." },
    ],
  },
  enterpriseReadiness: {
    label: "Enterprise Readiness",
    title: "Built for enterprise-grade identity and security",
    description: "Motadata ServiceOps integrates with Azure AD using secure authentication standards and real-time synchronization. Designed for enterprise environments, this integration supports scalable identity management, strong governance, and seamless service delivery across distributed teams.",
  },
  relatedIntegrations: {
    label: "Related Integrations",
    title: "Extend your identity and service ecosystem",
    items: [
    { name: "Google Workspace", slug: "google-workspace" },
    { name: "Okta", slug: "okta" },
    { name: "Microsoft Teams", slug: "microsoft-teams" },
    ],
  },
  closingCta: {
    headline: "Unify identity. Strengthen service. Move faster.",
    description: "Connect Motadata ServiceOps with Azure AD to simplify access, improve security, and accelerate service delivery across your enterprise.",
    ctaPrimary: { label: "Get a Demo", href: "/contact" },
    ctaSecondary: { label: "Explore Integrations", href: "/resources/integrations/serviceops" },
  },
};
