import {
  Activity,
  Server,
  FileText,
  Gauge,
  Network,
  Eye,
  AlertCircle,
  Bot,
  RefreshCw,
  Package,
  Wrench,
  BookOpen,
  type LucideIcon,
} from "lucide-react";

export interface ProductFeature {
  icon: LucideIcon;
  label: string;
}

export interface ProductDetailFeature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface Product {
  name: string;
  slug: string;
  desc: string;
  features: ProductFeature[];
  detailFeatures: ProductDetailFeature[];
}

export const products: Product[] = [
  {
    name: "Motadata ObserveOps",
    slug: "aiops",
    desc: "Unified observability platform with AI-powered insights for complete infrastructure monitoring",
    features: [
      { icon: Activity, label: "AI-native observability" },
      { icon: Server, label: "Infrastructure monitoring" },
      { icon: FileText, label: "Log analytics" },
      { icon: Gauge, label: "Application performance monitoring" },
      { icon: Network, label: "Network monitoring" },
      { icon: Eye, label: "Real user monitoring" },
    ],
    detailFeatures: [
      {
        icon: Activity,
        title: "Reduce Monitoring Fatigue",
        desc: "Pay attention to metrics that matter and solve issues based on its business impact and urgency.",
      },
      {
        icon: FileText,
        title: "Log Analytics",
        desc: "View logs from multiple sources and build context while identifying root cause of any issue.",
      },
      {
        icon: Server,
        title: "Infrastructure Monitoring",
        desc: "Collect all the telemetry to get complete visibility of resource availability, performance & efficiency to keep apps & services up at all times.",
      },
      {
        icon: Network,
        title: "Network Automation",
        desc: "Enable your team with self-service access to the operations capabilities with runbook automation.",
      },
    ],
  },
  {
    name: "Motadata ServiceOps",
    slug: "serviceops",
    desc: "Intelligent IT service management platform for modern enterprises",
    features: [
      { icon: AlertCircle, label: "Intelligent incident management" },
      { icon: Bot, label: "AI-powered service desk" },
      { icon: RefreshCw, label: "Change management" },
      { icon: Package, label: "Asset management" },
      { icon: Wrench, label: "Patch management" },
      { icon: BookOpen, label: "Knowledge management" },
    ],
    detailFeatures: [
      {
        icon: AlertCircle,
        title: "Intelligent Incident Management",
        desc: "Automate incident detection, correlation, and resolution with AI-powered workflows and smart routing.",
      },
      {
        icon: Bot,
        title: "AI-Powered Service Desk",
        desc: "Deliver exceptional service experiences with intelligent ticket management and automated responses.",
      },
      {
        icon: Package,
        title: "Comprehensive Asset Management",
        desc: "Track, manage, and optimize your IT assets with complete visibility and automated lifecycle management.",
      },
      {
        icon: Wrench,
        title: "Change & Patch Management",
        desc: "Streamline change processes and automate patch deployment with risk assessment and rollback capabilities.",
      },
    ],
  },
];

export const trustItems = [
  "No credit card required",
  "Full access to all features",
  "30-day trial period",
];
