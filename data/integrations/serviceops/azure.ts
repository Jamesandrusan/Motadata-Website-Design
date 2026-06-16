import type { ServiceOpsIntegrationData } from "@/components/integrations/serviceops-integration-types";

export const azureData: ServiceOpsIntegrationData = {
  meta: {
    title: "ServiceOps + Azure Integration | Motadata",
    description: "Provision users faster. Manage assets smarter. Secure access with confidence.",
  },
  hero: {
    badge: "ServiceOps Integration",
    headline: "ServiceOps + Azure",
    tagline: "Identity-driven service. Automated from day one.",
    description: "Provision users faster. Manage assets smarter. Secure access with confidence.",
    ctaPrimary: { label: "Get a Demo", href: "/contact" },
    ctaSecondary: { label: "Talk to an Expert", href: "/contact" },
  },
  compatibility: {
    headline: "ServiceOps integrates seamlessly with Azure Active Directory",
    description: "From identity to asset. From access to accountability.",
  },
  whyItMatters: {
    label: "Why this integration matters",
    title: "Access should be instant. Control should be effortless.",
    description: "User onboarding shouldn't take days.\nAccess shouldn't depend on manual steps.\nEvery delay impacts productivity. Every gap creates risk.\nServiceOps integrates with Azure AD to automate identity-driven service workflows.\nSo users get access faster. And IT stays in control.\nFrom manual provisioning to intelligent automation. From fragmented identity data to a single source of truth.",
  },
  keyOutcomes: {
    label: "Key Outcomes",
    title: "What you unlock with Azure + ServiceOps",
    items: [
      { title: "Automated user provisioning", description: "Create and manage users directly from Azure AD." },
      { title: "Streamlined onboarding and offboarding", description: "Ensure the right access from day one. Revoke instantly when needed." },
      { title: "Unified identity and asset visibility", description: "Map users to assets, services, and configurations in one platform." },
      { title: "Reduced manual effort", description: "Eliminate repetitive tasks with automated workflows." },
      { title: "Improved security and compliance", description: "Maintain strict access control with centralized identity management." },
      { title: "Faster service delivery", description: "Accelerate request fulfillment tied to user roles and permissions." },
    ],
  },
  howItWorks: {
    label: "How it works",
    title: "From identity to action",
    steps: [
      { title: "Sync", description: "Users and groups are synced from Azure AD." },
      { title: "Map", description: "ServiceOps maps identities to roles, assets, and services." },
      { title: "Automate", description: "Provisioning, access requests, and approvals run automatically." },
      { title: "Govern", description: "Every action is tracked. Auditable. Compliant." },
    ],
  },
  coreUseCases: {
    label: "Core Use Cases",
    title: "Built for modern identity-driven IT operations",
    items: [
      { title: "User onboarding automation", description: "Provision accounts, assign roles, and grant access instantly." },
      { title: "Access management", description: "Control permissions across services based on Azure AD roles." },
      { title: "Asset lifecycle management", description: "Link users with devices and configurations for full visibility." },
      { title: "Service request automation", description: "Auto-approve or route requests based on user identity." },
      { title: "Compliance and audits", description: "Maintain logs of access changes and provisioning activities." },
      { title: "Hybrid workforce enablement", description: "Manage identities seamlessly across remote and on-prem users." },
    ],
  },
  personaValue: {
    label: "Persona Value",
    title: "Control for IT. Simplicity for users.",
    personas: [
      { role: "For Service Desk Leaders", description: "Reduce ticket volumes related to access requests. Automate repetitive provisioning workflows and improve service efficiency." },
      { role: "For IT Directors", description: "Standardize identity-driven processes across the organization. Improve governance while reducing operational overhead." },
      { role: "For IT Operations Teams", description: "Eliminate manual user management. Ensure accurate and real-time identity data across systems." },
      { role: "For CIOs and CTOs", description: "Strengthen security posture and compliance. Align identity management with broader IT strategy and digital transformation goals." },
    ],
  },
  enterpriseReadiness: {
    label: "Enterprise Readiness",
    title: "Automation with governance at the core",
    description: "Every user is verified.\nEvery access is controlled.\nEvery change is tracked.\nYou get speed without compromise. Security without complexity.",
  },
  relatedIntegrations: {
    label: "Related Integrations",
    title: "Extend identity across your ecosystem",
    items: [
    { name: "Active Directory", slug: "adfs" },
    { name: "Okta", slug: "okta" },
    { name: "Google Workspace", slug: "google-workspace" },
    { name: "LDAP", slug: "ldap" },
    ],
  },
  closingCta: {
    headline: "Turn identity into action",
    description: "Automate access. Simplify operations. Strengthen control.",
    ctaPrimary: { label: "Get a Demo", href: "/contact" },
    ctaSecondary: { label: "Explore Integrations", href: "/resources/integrations/serviceops" },
  },
};
