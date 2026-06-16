"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Activity, Headset } from "lucide-react";
import Link from "next/link";

/* Slug map for items that have a dedicated detail page */
const itemSlugMap: Record<string, Record<string, string>> = {
  observeops: {
    "Windows Server": "windows-server",
  },
  serviceops: {
    "Google Workspace": "google-workspace",
    "Azure AD": "azure-ad",
    "Okta": "okta",
    "Keycloak": "keycloak",
    "OneLogin": "onelogin",
    "ADFS": "adfs",
    "WSO2": "wso2",
    "JumpCloud": "jumpcloud",
    "Jira": "jira",
    "Microsoft Teams": "microsoft-teams",
    "WhatsApp": "whatsapp",
    "Slack": "slack",
    "Viber": "viber",
    "Azure": "azure",
    "Office 365": "office-365",
    "Telegram": "telegram",
    "Facebook Messenger": "facebook-messenger",
    "ObserveOps": "observeops-integration",
  },
};

/* ── Full integration data ── */

const observeOpsData = [
  {
    id: "servers", name: "Servers", count: 10, sub: "Infrastructure monitoring",
    items: [
      { name: "Windows Server", sub: "Complete Windows Server monitoring with performance counters" },
      { name: "Windows Cluster", sub: "Monitor Windows Server Failover Clustering environments" },
      { name: "Ubuntu Server", sub: "Monitor Ubuntu Server deployments" },
      { name: "SUSE Linux", sub: "SUSE enterprise server monitoring" },
      { name: "Red Hat Enterprise Linux", sub: "RHEL-specific monitoring and metrics" },
      { name: "HP-UX", sub: "HP Unix server monitoring solution" },
      { name: "IBM AIX", sub: "Comprehensive monitoring for IBM AIX systems" },
      { name: "Oracle Solaris", sub: "Monitor Oracle Solaris infrastructure" },
      { name: "File Monitoring", sub: "Monitor file changes, modifications, and access patterns" },
      { name: "Directory Monitoring", sub: "Monitor directory structures and storage utilization" },
    ],
  },
  {
    id: "applications", name: "Applications", count: 15, sub: "App performance tracking",
    items: [
      { name: "Apache HTTP Server", sub: "Monitor Apache web server performance and requests" },
      { name: "Nginx", sub: "Track Nginx server metrics and connections" },
      { name: "Microsoft IIS", sub: "Monitor IIS web server and application pools" },
      { name: "Apache Tomcat", sub: "Java application server monitoring" },
      { name: "JBoss / WildFly", sub: "Monitor JBoss application server" },
      { name: "WebLogic Server", sub: "Oracle WebLogic monitoring solution" },
      { name: "WebSphere", sub: "IBM WebSphere application server monitoring" },
      { name: "MySQL", sub: "Monitor MySQL database performance" },
      { name: "PostgreSQL", sub: "PostgreSQL database monitoring" },
      { name: "MongoDB", sub: "Monitor MongoDB clusters and operations" },
      { name: "Microsoft SQL Server", sub: "SQL Server database monitoring" },
      { name: "Oracle Database", sub: "Comprehensive Oracle DB monitoring" },
      { name: "Redis", sub: "Monitor Redis cache performance" },
      { name: "Elasticsearch", sub: "Track Elasticsearch cluster health" },
      { name: "Apache Cassandra", sub: "Monitor Cassandra NoSQL database" },
    ],
  },
  {
    id: "network", name: "Network", count: 14, sub: "Network device monitoring",
    items: [
      { name: "Cisco IOS", sub: "Monitor Cisco routers and switches" },
      { name: "Cisco Nexus", sub: "Cisco Nexus data center switches" },
      { name: "Cisco ASA", sub: "Monitor Cisco ASA firewalls" },
      { name: "Juniper JunOS", sub: "Juniper network device monitoring" },
      { name: "Aruba Switches", sub: "Monitor Aruba network switches" },
      { name: "HP / Aruba Wireless", sub: "Aruba wireless controller monitoring" },
      { name: "Fortinet FortiGate", sub: "FortiGate firewall monitoring" },
      { name: "Palo Alto Networks", sub: "Palo Alto firewall monitoring" },
      { name: "F5 BIG-IP", sub: "F5 load balancer monitoring" },
      { name: "Check Point", sub: "Check Point firewall monitoring" },
      { name: "Dell Networking", sub: "Monitor Dell network switches" },
      { name: "Extreme Networks", sub: "Extreme Networks switch monitoring" },
      { name: "Brocade", sub: "Brocade network device monitoring" },
      { name: "Mikrotik RouterOS", sub: "Monitor Mikrotik routers" },
    ],
  },
  {
    id: "sdn", name: "Software Defined Network (SDN)", count: 10, sub: "Software-defined networking",
    items: [
      { name: "VMware NSX", sub: "Monitor VMware NSX network virtualization" },
      { name: "Cisco ACI", sub: "Cisco Application Centric Infrastructure monitoring" },
      { name: "OpenFlow", sub: "Monitor OpenFlow SDN controllers" },
      { name: "Cisco SD-WAN", sub: "Monitor Cisco SD-WAN infrastructure" },
      { name: "VMware SD-WAN (VeloCloud)", sub: "VMware SD-WAN monitoring" },
      { name: "Silver Peak SD-WAN", sub: "Monitor Silver Peak SD-WAN" },
      { name: "Arista CloudVision", sub: "Arista network automation monitoring" },
      { name: "Juniper Contrail", sub: "Monitor Juniper SDN platform" },
      { name: "Big Switch Networks", sub: "Big Switch SDN fabric monitoring" },
      { name: "Nuage Networks", sub: "Nokia Nuage SDN monitoring" },
    ],
  },
  {
    id: "container", name: "Container Orchestration", count: 12, sub: "Container & cluster insights",
    items: [
      { name: "Kubernetes", sub: "Monitor K8s clusters, pods, nodes, and services" },
      { name: "Docker", sub: "Monitor Docker containers and images" },
      { name: "Docker Swarm", sub: "Docker Swarm cluster monitoring" },
      { name: "Red Hat OpenShift", sub: "Monitor OpenShift container platform" },
      { name: "Amazon ECS", sub: "Monitor AWS Elastic Container Service" },
      { name: "Amazon EKS", sub: "AWS Elastic Kubernetes Service monitoring" },
      { name: "Azure Kubernetes Service", sub: "Monitor AKS clusters" },
      { name: "Google Kubernetes Engine", sub: "GKE cluster monitoring" },
      { name: "Rancher", sub: "Monitor Rancher Kubernetes management" },
      { name: "Nomad", sub: "HashiCorp Nomad orchestration monitoring" },
      { name: "Mesos", sub: "Apache Mesos cluster monitoring" },
      { name: "Cloud Foundry", sub: "Monitor Cloud Foundry PaaS" },
    ],
  },
  {
    id: "storage", name: "Storage", count: 12, sub: "Storage metrics & health",
    items: [
      { name: "NetApp ONTAP", sub: "Monitor NetApp storage arrays" },
      { name: "Dell EMC Unity", sub: "Dell EMC Unity storage monitoring" },
      { name: "Dell EMC PowerStore", sub: "Monitor PowerStore storage systems" },
      { name: "Dell EMC Isilon", sub: "Isilon scale-out NAS monitoring" },
      { name: "HPE 3PAR", sub: "Monitor HPE 3PAR storage arrays" },
      { name: "HPE Nimble Storage", sub: "HPE Nimble predictive analytics storage" },
      { name: "Pure Storage FlashArray", sub: "Monitor Pure Storage FlashArray" },
      { name: "Pure Storage FlashBlade", sub: "FlashBlade file and object storage" },
      { name: "IBM Storage", sub: "IBM enterprise storage monitoring" },
      { name: "Hitachi Vantara", sub: "Monitor Hitachi storage systems" },
      { name: "Nutanix Storage", sub: "Nutanix distributed storage monitoring" },
      { name: "Huawei OceanStor", sub: "Monitor Huawei storage arrays" },
    ],
  },
  {
    id: "cloud-aws", name: "Cloud (AWS)", count: 15, sub: "AWS service monitoring",
    items: [
      { name: "Amazon EC2", sub: "Monitor EC2 instances and auto-scaling groups" },
      { name: "Amazon RDS", sub: "Track RDS database performance" },
      { name: "AWS Lambda", sub: "Monitor serverless function execution" },
      { name: "Amazon S3", sub: "Monitor S3 bucket metrics and operations" },
      { name: "Amazon ECS", sub: "Elastic Container Service monitoring" },
      { name: "Amazon EKS", sub: "Elastic Kubernetes Service monitoring" },
      { name: "AWS CloudWatch", sub: "Integrate with CloudWatch metrics" },
      { name: "Amazon DynamoDB", sub: "Monitor DynamoDB tables and queries" },
      { name: "Amazon ElastiCache", sub: "Track ElastiCache Redis/Memcached" },
      { name: "AWS Elastic Beanstalk", sub: "Monitor Beanstalk applications" },
      { name: "Amazon CloudFront", sub: "CDN distribution monitoring" },
      { name: "Amazon API Gateway", sub: "API Gateway metrics and latency" },
      { name: "Amazon SNS", sub: "Simple Notification Service monitoring" },
      { name: "Amazon SQS", sub: "Simple Queue Service monitoring" },
      { name: "AWS Elastic Load Balancer", sub: "Monitor ALB, NLB, and CLB" },
    ],
  },
  {
    id: "cloud-azure", name: "Cloud (Azure)", count: 13, sub: "Azure resource monitoring",
    items: [
      { name: "Azure Virtual Machines", sub: "Monitor Azure VM performance" },
      { name: "Azure App Services", sub: "Track App Service web apps" },
      { name: "Azure SQL Database", sub: "Monitor Azure SQL performance" },
      { name: "Azure Storage", sub: "Track Azure Storage accounts" },
      { name: "Azure Kubernetes Service", sub: "AKS cluster monitoring" },
      { name: "Azure Functions", sub: "Monitor serverless functions" },
      { name: "Azure Monitor", sub: "Integrate with Azure Monitor" },
      { name: "Azure Cosmos DB", sub: "Monitor Cosmos DB performance" },
      { name: "Azure Cache for Redis", sub: "Track Azure Redis cache" },
      { name: "Azure Load Balancer", sub: "Monitor load balancer metrics" },
      { name: "Azure Application Gateway", sub: "Application Gateway monitoring" },
      { name: "Azure Service Bus", sub: "Service Bus queue monitoring" },
      { name: "Azure Logic Apps", sub: "Monitor Logic Apps workflows" },
    ],
  },
  {
    id: "cloud-o365", name: "Cloud (O365)", count: 9, sub: "Microsoft 365 monitoring",
    items: [
      { name: "Microsoft Exchange Online", sub: "Monitor Exchange mailbox health" },
      { name: "Microsoft SharePoint Online", sub: "SharePoint site monitoring" },
      { name: "Microsoft Teams", sub: "Monitor Teams service health" },
      { name: "OneDrive for Business", sub: "OneDrive storage monitoring" },
      { name: "Azure Active Directory", sub: "Azure AD authentication monitoring" },
      { name: "Microsoft 365 Admin Center", sub: "M365 service health monitoring" },
      { name: "Power Platform", sub: "Monitor Power Apps and Power Automate" },
      { name: "Dynamics 365", sub: "Dynamics 365 CRM monitoring" },
      { name: "Office 365 Groups", sub: "Monitor O365 group activities" },
    ],
  },
  {
    id: "virt", name: "Virtualization", count: 11, sub: "VM performance tracking",
    items: [
      { name: "VMware vSphere", sub: "Monitor ESXi hosts and vCenter" },
      { name: "VMware vCenter", sub: "vCenter Server monitoring" },
      { name: "VMware ESXi", sub: "ESXi hypervisor monitoring" },
      { name: "Microsoft Hyper-V", sub: "Hyper-V hypervisor monitoring" },
      { name: "Citrix XenServer", sub: "Monitor Citrix virtualization" },
      { name: "Citrix Virtual Apps", sub: "Citrix VDI monitoring" },
      { name: "KVM", sub: "Kernel-based Virtual Machine monitoring" },
      { name: "Oracle VM", sub: "Oracle VM server monitoring" },
      { name: "Proxmox VE", sub: "Monitor Proxmox virtualization" },
      { name: "Red Hat Virtualization", sub: "RHV platform monitoring" },
      { name: "Xen Project", sub: "Xen hypervisor monitoring" },
    ],
  },
  {
    id: "hci", name: "Hyper-Converged Infrastructure", count: 9, sub: "Hyper-converged monitoring",
    items: [
      { name: "Nutanix AHV", sub: "Monitor Nutanix hyper-converged infrastructure" },
      { name: "Nutanix Prism", sub: "Nutanix Prism management monitoring" },
      { name: "VMware vSAN", sub: "Monitor vSAN storage clusters" },
      { name: "Cisco HyperFlex", sub: "Cisco HyperFlex HCI monitoring" },
      { name: "Dell VxRail", sub: "Monitor Dell VxRail systems" },
      { name: "HPE SimpliVity", sub: "HPE SimpliVity HCI monitoring" },
      { name: "Lenovo ThinkAgile", sub: "Monitor Lenovo HCI solutions" },
      { name: "Scale Computing HC3", sub: "Scale Computing HCI monitoring" },
      { name: "Pivot3", sub: "Pivot3 HCI monitoring" },
    ],
  },
  {
    id: "service-chk", name: "Service Check", count: 13, sub: "Availability & health check",
    items: [
      { name: "HTTP Check", sub: "Monitor HTTP endpoints and response times" },
      { name: "HTTPS Check", sub: "Secure HTTPS endpoint monitoring" },
      { name: "ICMP Ping", sub: "Network connectivity ping checks" },
      { name: "TCP Port Check", sub: "Monitor TCP port availability" },
      { name: "UDP Port Check", sub: "Monitor UDP port availability" },
      { name: "DNS Check", sub: "DNS resolution monitoring" },
      { name: "SSL Certificate Check", sub: "Monitor SSL certificate expiration" },
      { name: "SMTP Check", sub: "Email server connectivity check" },
      { name: "FTP Check", sub: "FTP server availability monitoring" },
      { name: "SNMP Check", sub: "SNMP service monitoring" },
      { name: "Database Connection Check", sub: "Monitor database connectivity" },
      { name: "API Endpoint Check", sub: "REST API health monitoring" },
      { name: "SSH Check", sub: "SSH connectivity monitoring" },
    ],
  },
  {
    id: "other", name: "Other", count: 12, sub: "Third-party monitoring tools",
    items: [
      { name: "Custom REST API", sub: "Monitor any REST API endpoint" },
      { name: "SNMP Devices", sub: "Generic SNMP device monitoring" },
      { name: "Custom Scripts", sub: "Execute custom monitoring scripts" },
      { name: "Webhooks", sub: "Webhook-based integrations" },
      { name: "Syslog", sub: "Syslog message collection" },
      { name: "IPMI", sub: "IPMI hardware monitoring" },
      { name: "JMX", sub: "Java Management Extensions monitoring" },
      { name: "WMI", sub: "Windows Management Instrumentation" },
      { name: "Custom Plugins", sub: "Install custom monitoring plugins" },
      { name: "IoT Devices", sub: "Monitor IoT device metrics" },
      { name: "MQTT", sub: "MQTT protocol monitoring" },
      { name: "ModBus", sub: "ModBus industrial protocol monitoring" },
    ],
  },
];

const serviceOpsData = [
  {
    id: "itsm", name: "ITSM Platforms", count: 15, sub: "IT service management",
    items: [
      { name: "ServiceNow", sub: "Bi-directional incident & change sync" },
      { name: "BMC Remedy", sub: "BMC Remedy ITSM integration" },
      { name: "Jira Service Management", sub: "Jira Service Management integration" },
      { name: "Zendesk", sub: "Zendesk support platform integration" },
      { name: "Freshservice", sub: "Freshservice ITSM monitoring" },
      { name: "ManageEngine ServiceDesk Plus", sub: "ServiceDesk Plus ITSM monitoring" },
      { name: "SolarWinds Service Desk", sub: "SolarWinds Service Desk integration" },
      { name: "PRTG Network Monitor", sub: "PRTG ITSM integration" },
      { name: "Nagios XI", sub: "Nagios XI ITSM monitoring" },
      { name: "Zabbix", sub: "Zabbix ITSM platform monitoring" },
      { name: "Splunk ITSI", sub: "Splunk IT Service Intelligence integration" },
      { name: "PagerDuty", sub: "PagerDuty alerting & incident management" },
      { name: "Datadog", sub: "Datadog ITSM platform monitoring" },
      { name: "New Relic", sub: "New Relic ITSM monitoring" },
      { name: "Dynatrace", sub: "Dynatrace ITSM platform integration" },
    ],
  },
  {
    id: "ticketing", name: "Ticketing Systems", count: 15, sub: "Issue & ticket tracking",
    items: [
      { name: "Zendesk", sub: "Zendesk ticketing system monitoring" },
      { name: "Freshdesk", sub: "Freshdesk ticketing system integration" },
      { name: "Jira Service Management", sub: "Jira Service Management ticketing" },
      { name: "ServiceNow", sub: "ServiceNow ticketing system monitoring" },
      { name: "BMC Remedy", sub: "BMC Remedy ticketing system integration" },
      { name: "ManageEngine ServiceDesk Plus", sub: "ServiceDesk Plus ticketing monitoring" },
      { name: "SolarWinds Service Desk", sub: "SolarWinds ticketing system" },
      { name: "PRTG Network Monitor", sub: "PRTG ticketing system integration" },
      { name: "Nagios XI", sub: "Nagios XI ticketing system monitoring" },
      { name: "Zabbix", sub: "Zabbix ticketing system integration" },
      { name: "Splunk ITSI", sub: "Splunk ITSI ticketing system monitoring" },
      { name: "PagerDuty", sub: "PagerDuty ticketing system integration" },
      { name: "Datadog", sub: "Datadog ticketing system monitoring" },
      { name: "New Relic", sub: "New Relic ticketing system integration" },
      { name: "Dynatrace", sub: "Dynatrace ticketing system monitoring" },
    ],
  },
  {
    id: "asset", name: "Asset Management", count: 11, sub: "IT asset lifecycle",
    items: [
      { name: "ServiceNow", sub: "ServiceNow asset management monitoring" },
      { name: "ManageEngine AssetExplorer", sub: "AssetExplorer asset management" },
      { name: "SolarWinds Asset Management", sub: "SolarWinds asset management" },
      { name: "PRTG Network Monitor", sub: "PRTG asset management integration" },
      { name: "Nagios XI", sub: "Nagios XI asset management monitoring" },
      { name: "Zabbix", sub: "Zabbix asset management integration" },
      { name: "Splunk ITSI", sub: "Splunk ITSI asset management monitoring" },
      { name: "PagerDuty", sub: "PagerDuty asset management integration" },
      { name: "Datadog", sub: "Datadog asset management monitoring" },
      { name: "New Relic", sub: "New Relic asset management integration" },
      { name: "Dynatrace", sub: "Dynatrace asset management monitoring" },
    ],
  },
  {
    id: "knowledge", name: "Knowledge Management", count: 11, sub: "Knowledge base sync",
    items: [
      { name: "ServiceNow", sub: "ServiceNow knowledge management" },
      { name: "ManageEngine ServiceDesk Plus", sub: "ServiceDesk Plus knowledge base" },
      { name: "SolarWinds Service Desk", sub: "SolarWinds knowledge management" },
      { name: "Confluence", sub: "Atlassian Confluence knowledge base" },
      { name: "Notion", sub: "Notion workspace knowledge sync" },
      { name: "SharePoint", sub: "Microsoft SharePoint knowledge base" },
      { name: "Guru", sub: "Guru knowledge management platform" },
      { name: "Document360", sub: "Document360 knowledge base" },
      { name: "Helpjuice", sub: "Helpjuice knowledge base platform" },
      { name: "KnowledgeOwl", sub: "KnowledgeOwl knowledge management" },
      { name: "Tettra", sub: "Tettra internal knowledge base" },
    ],
  },
  {
    id: "catalog", name: "Service Catalog", count: 11, sub: "Self-service catalog",
    items: [
      { name: "ServiceNow Catalog", sub: "ServiceNow self-service catalog" },
      { name: "BMC Helix Service Catalog", sub: "BMC Helix catalog management" },
      { name: "Freshservice Catalog", sub: "Freshservice service catalog" },
      { name: "ManageEngine ServiceDesk Plus", sub: "ServiceDesk Plus catalog" },
      { name: "SolarWinds Service Desk", sub: "SolarWinds service catalog" },
      { name: "Ivanti Catalog", sub: "Ivanti self-service catalog" },
      { name: "EasyVista Catalog", sub: "EasyVista service catalog" },
      { name: "Cherwell Catalog", sub: "Cherwell service catalog" },
      { name: "TOPdesk Catalog", sub: "TOPdesk self-service catalog" },
      { name: "Axios Assyst Catalog", sub: "Axios Assyst service catalog" },
      { name: "SysAid Catalog", sub: "SysAid self-service catalog" },
    ],
  },
  {
    id: "remote", name: "Remote Support", count: 11, sub: "Remote access & support",
    items: [
      { name: "TeamViewer", sub: "TeamViewer remote access integration" },
      { name: "AnyDesk", sub: "AnyDesk remote desktop integration" },
      { name: "LogMeIn Rescue", sub: "LogMeIn Rescue remote support" },
      { name: "BeyondTrust", sub: "BeyondTrust privileged remote access" },
      { name: "Splashtop", sub: "Splashtop remote support integration" },
      { name: "Zoom", sub: "Zoom remote support integration" },
      { name: "Microsoft Teams", sub: "Teams remote support integration" },
      { name: "Cisco Webex", sub: "Webex remote support integration" },
      { name: "GoToAssist", sub: "GoToAssist remote support" },
      { name: "ConnectWise Control", sub: "ConnectWise remote access" },
      { name: "Dameware", sub: "Dameware remote support tool" },
    ],
  },
  {
    id: "docs", name: "IT Documentation", count: 11, sub: "Docs & runbooks",
    items: [
      { name: "IT Glue", sub: "IT Glue documentation platform" },
      { name: "Confluence", sub: "Atlassian Confluence documentation" },
      { name: "Notion", sub: "Notion workspace documentation" },
      { name: "SharePoint", sub: "Microsoft SharePoint documentation" },
      { name: "HuduApp", sub: "Hudu IT documentation platform" },
      { name: "Document360", sub: "Document360 documentation" },
      { name: "Snipe-IT", sub: "Snipe-IT asset documentation" },
      { name: "NetBox", sub: "NetBox network documentation" },
      { name: "Nautobot", sub: "Nautobot infrastructure documentation" },
      { name: "IT Portal", sub: "IT Portal documentation system" },
      { name: "Passportal", sub: "Passportal IT documentation" },
    ],
  },
  {
    id: "password", name: "Password Management", count: 11, sub: "Credential management",
    items: [
      { name: "CyberArk", sub: "CyberArk privileged access management" },
      { name: "HashiCorp Vault", sub: "HashiCorp Vault secrets management" },
      { name: "LastPass Business", sub: "LastPass enterprise password management" },
      { name: "1Password Teams", sub: "1Password team credential management" },
      { name: "Bitwarden", sub: "Bitwarden open-source password manager" },
      { name: "KeePass", sub: "KeePass password database" },
      { name: "Thycotic Secret Server", sub: "Thycotic privileged account management" },
      { name: "BeyondTrust PAM", sub: "BeyondTrust privileged access" },
      { name: "Delinea Secret Server", sub: "Delinea secret management" },
      { name: "ManageEngine PAM360", sub: "ManageEngine PAM360" },
      { name: "Passportal", sub: "Passportal credential management" },
    ],
  },
  {
    id: "license", name: "License Management", count: 11, sub: "License compliance tracking",
    items: [
      { name: "Flexera FlexNet", sub: "Flexera software license management" },
      { name: "Snow License Manager", sub: "Snow Software license compliance" },
      { name: "Sassafras K2", sub: "Sassafras software asset management" },
      { name: "ManageEngine License Manager", sub: "ManageEngine license tracking" },
      { name: "RayNet LC", sub: "RayNet license compliance" },
      { name: "Softworks", sub: "Softworks license management" },
      { name: "ServiceNow SAM", sub: "ServiceNow software asset management" },
      { name: "Ivanti License Optimizer", sub: "Ivanti license optimization" },
      { name: "USU Software Asset Management", sub: "USU SAM platform" },
      { name: "Certero", sub: "Certero software asset management" },
      { name: "License Dashboard", sub: "License Dashboard compliance platform" },
    ],
  },
  {
    id: "collab", name: "Collaboration Tools", count: 15, sub: "Team communication sync",
    items: [
      { name: "Microsoft Teams", sub: "Microsoft Teams collaboration monitoring" },
      { name: "Slack", sub: "Slack collaboration integration" },
      { name: "Microsoft SharePoint", sub: "SharePoint collaboration monitoring" },
      { name: "Google Workspace", sub: "Google Workspace integration" },
      { name: "Zoom", sub: "Zoom collaboration monitoring" },
      { name: "Cisco Webex", sub: "Cisco Webex collaboration integration" },
      { name: "Trello", sub: "Trello project collaboration" },
      { name: "Asana", sub: "Asana team task collaboration" },
      { name: "Jira", sub: "Jira collaboration integration" },
      { name: "Confluence", sub: "Confluence team collaboration" },
      { name: "Salesforce", sub: "Salesforce CRM collaboration" },
      { name: "Workday", sub: "Workday HR collaboration" },
      { name: "Oracle Cloud", sub: "Oracle Cloud collaboration" },
      { name: "Mattermost", sub: "Mattermost open-source messaging" },
      { name: "Discord", sub: "Discord team communication" },
    ],
  },
  {
    id: "other", name: "Other", count: 30, sub: "Custom integration",
    items: [
      { name: "Custom REST API", sub: "Monitor any REST API endpoint" },
      { name: "SNMP Devices", sub: "Generic SNMP device monitoring" },
      { name: "Custom Scripts", sub: "Execute custom monitoring scripts" },
      { name: "Webhooks", sub: "Webhook-based integrations" },
      { name: "Syslog", sub: "Syslog message collection" },
      { name: "IPMI", sub: "IPMI hardware monitoring" },
      { name: "JMX", sub: "Java Management Extensions monitoring" },
      { name: "WMI", sub: "Windows Management Instrumentation" },
      { name: "Custom Plugins", sub: "Install custom monitoring plugins" },
      { name: "IoT Devices", sub: "Monitor IoT device metrics" },
      { name: "MQTT", sub: "MQTT protocol monitoring" },
      { name: "Email Gateway", sub: "Email gateway integration" },
      { name: "Google Workspace", sub: "SSO and user provisioning via Google Workspace" },
      { name: "Azure AD", sub: "Enterprise identity management with Azure Active Directory" },
      { name: "Okta", sub: "Identity and access management via Okta SSO" },
      { name: "Keycloak", sub: "Open-source identity and access management" },
      { name: "OneLogin", sub: "Cloud-based identity and access management" },
      { name: "ADFS", sub: "Active Directory Federation Services integration" },
      { name: "WSO2", sub: "Open-source identity server integration" },
      { name: "JumpCloud", sub: "Directory-as-a-Service platform integration" },
      { name: "Jira", sub: "Bi-directional issue tracking with Jira" },
      { name: "Microsoft Teams", sub: "Ticket notifications and actions in Teams" },
      { name: "WhatsApp", sub: "Omnichannel support via WhatsApp Business" },
      { name: "Slack", sub: "Real-time alerts and ticket management in Slack" },
      { name: "Viber", sub: "Customer support channel via Viber" },
      { name: "Azure", sub: "Cloud infrastructure integration with Microsoft Azure" },
      { name: "Office 365", sub: "Microsoft 365 productivity suite integration" },
      { name: "Telegram", sub: "Support channel and notifications via Telegram" },
      { name: "Facebook Messenger", sub: "Customer engagement via Messenger" },
      { name: "ObserveOps", sub: "Unified ITSM and monitoring with ObserveOps" },
    ],
  },
];

const productData: Record<string, typeof observeOpsData> = {
  observeops: observeOpsData,
  serviceops: serviceOpsData,
};

/* ── Component ── */

export function IntDetail({ product }: { product: string }) {
  const router = useRouter();
  const [activeProduct, setActiveProduct] = useState(product);
  const data = productData[activeProduct] ?? observeOpsData;
  const [activeId, setActiveId] = useState(data[0]?.id ?? "");

  // On first mount, scroll to hash if present
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const id = hash.replace("#int-section-", "");
    const attempt = (tries: number) => {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
        setActiveId(id);
      } else if (tries > 0) {
        setTimeout(() => attempt(tries - 1), 100);
      }
    };
    setTimeout(() => attempt(5), 100);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Reset sidebar active when product switches (manual switch only)
  const isFirstMount = typeof window !== "undefined" && !!window.location.hash;
  useEffect(() => {
    if (!isFirstMount) {
      setActiveId(data[0]?.id ?? "");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeProduct]);

  const switchProduct = (p: string) => {
    setActiveProduct(p);
    router.replace(`/resources/integrations/${p}`, { scroll: false });
  };

  // Scroll-spy
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    data.forEach((cat) => {
      const el = document.getElementById(`int-section-${cat.id}`);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(cat.id); },
        { rootMargin: "-10% 0px -60% 0px" },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [data]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(`int-section-${id}`);
    if (!el) return;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
  };

  return (
    <section className="relative z-10 pb-24">
      <div className="mx-auto w-full max-w-7xl px-6">

        {/* ── Sticky bar: back link + product switcher ── */}
        <div className="sticky top-14 z-30 flex items-center justify-between bg-background/80 backdrop-blur-sm py-6 -mx-6 px-8 border-b border-border/40">
          <Link
            href="/resources/integrations"
            className="flex items-center gap-1.5 text-body-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All Integrations
          </Link>
          <div className="absolute left-1/2 -translate-x-1/2">
            <div className="inline-flex items-center rounded-lg border border-border/60 bg-white p-1">
              {([
                { id: "observeops", label: "ObserveOps", icon: Activity },
                { id: "serviceops", label: "ServiceOps", icon: Headset },
              ] as const).map((p) => {
                const isActive = activeProduct === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => switchProduct(p.id)}
                    className={`flex items-center gap-2 rounded-md px-5 py-2.5 text-label-md transition-all ${
                      isActive
                        ? "bg-white text-foreground shadow-md ring-1 ring-primary/40"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <p.icon className={`h-4 w-4 transition-colors duration-300 ${isActive ? "text-primary" : ""}`} />
                    {p.label}
                  </button>
                );
              })}
            </div>
          </div>
          {/* right spacer to balance the back link */}
          <div className="w-28" />
        </div>

        {/* ── Main: left sidebar + right content ── */}
        <div className="flex gap-10 pt-10">

          {/* Left sidebar (sticky) */}
          <aside className="hidden lg:block w-56 shrink-0">
            <div className="sticky top-[124px] max-h-[calc(100vh-124px)] overflow-y-auto py-2 pr-2 z-10">
              <p className="mb-3 px-3 text-overline-sm text-muted-foreground/50">
                Categories
              </p>
              <nav className="space-y-0.5">
                {data.map((cat) => {
                  const isActive = activeId === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => scrollTo(cat.id)}
                      className={`group flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors ${
                        isActive
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-muted-foreground hover:bg-muted/40 hover:text-foreground"
                      }`}
                    >
                      <span className="truncate">{cat.name}</span>
                      <span className={`ml-2 shrink-0 text-xs tabular-nums ${isActive ? "text-primary/70" : "text-muted-foreground/40"}`}>
                        {cat.count}
                      </span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Right content */}
          <div className="min-w-0 flex-1">
            {data.map((cat, ci) => (
              <div
                key={cat.id}
                id={`int-section-${cat.id}`}
                className={ci > 0 ? "border-t border-border pt-12 mt-12" : ""}
              >
                {/* Section header */}
                <div className="mb-6 flex items-baseline gap-3">
                  <h2 className="text-heading-md">{cat.name}</h2>
                  <span className="text-body-xs text-muted-foreground">{cat.count} integrations</span>
                </div>

                {/* Integration cards */}
                <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {cat.items.map((item) => {
                    const slug = itemSlugMap[activeProduct]?.[item.name];
                    const href = slug
                      ? `/resources/integrations/${activeProduct}/${slug}`
                      : "#";
                    return (
                      <Link
                        key={item.name}
                        href={href}
                        className="group flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-3.5 transition-colors hover:border-primary/30 hover:bg-muted/40"
                      >
                        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-foreground/5 text-label-sm-strong text-foreground/40 transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                          {item.name[0]}
                        </div>
                        <div className="min-w-0">
                          <p className="text-label-md leading-snug">{item.name}</p>
                          <p className="mt-0.5 text-caption text-muted-foreground">{item.sub}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
