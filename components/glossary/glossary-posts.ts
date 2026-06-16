import type { GlossaryDetailData } from "./glossary-detail";

export const glossaryPosts: Record<string, GlossaryDetailData> = {
  "access-control-list-acl": {
    slug: "access-control-list-acl",
    term: "Access Control List (ACL)",
    intro:
      "An Access Control List (ACL) is a set of rules that controls network traffic and determines which users or system processes are granted access to objects, such as directories or files. ACLs are fundamental to network security and resource management.",
    relatedTerms: [
      { term: "Network Topology", slug: "network-topology" },
      { term: "Advanced Persistent Threats (APTs)", slug: "advanced-persistent-threat-apts" },
      { term: "Active Directory", slug: "active-directory" },
    ],
    toc: [
      { id: "what-is-acl", title: "What is an ACL?" },
      { id: "types-of-acl", title: "Types of ACLs" },
      { id: "how-acl-works", title: "How ACLs Work" },
      { id: "best-practices", title: "Best Practices" },
    ],
    content: `
      <h2 id="what-is-acl">What is an ACL?</h2>
      <p>An Access Control List (ACL) is a table that tells a computer operating system which access rights each user has to a particular system object, such as a file directory or individual file. Each object has a security attribute that identifies its access control list.</p>
      <p>ACLs are used in networking to filter traffic and control which packets are allowed or denied at network interfaces. They are essential for implementing security policies and managing access to sensitive resources.</p>

      <h2 id="types-of-acl">Types of ACLs</h2>
      <h3>1. Standard ACLs</h3>
      <p>Standard ACLs filter traffic based only on the source IP address. They are simpler to configure but provide less granular control over traffic filtering.</p>
      <h3>2. Extended ACLs</h3>
      <p>Extended ACLs can filter traffic based on source and destination IP addresses, protocols, and port numbers, providing more precise control over network traffic.</p>
      <h3>3. Dynamic ACLs</h3>
      <p>Dynamic ACLs, also known as lock-and-key ACLs, require users to authenticate before granting access. They provide an additional layer of security by combining authentication with traffic filtering.</p>

      <h2 id="how-acl-works">How ACLs Work</h2>
      <p>When a packet arrives at a router or switch interface, the device compares the packet against each rule in the ACL sequentially. The first matching rule determines whether the packet is permitted or denied. If no rules match, the packet is typically denied by an implicit "deny all" rule at the end of every ACL.</p>
      <p>ACLs are processed top-down, making the order of rules critical. More specific rules should be placed before general rules to ensure proper traffic filtering.</p>

      <h2 id="best-practices">Best Practices</h2>
      <ul>
        <li><strong>Plan before implementing:</strong> Document your security requirements and design ACL rules accordingly before applying them to production systems.</li>
        <li><strong>Use the principle of least privilege:</strong> Only grant the minimum access necessary for users and systems to perform their required functions.</li>
        <li><strong>Regularly audit and update:</strong> Review ACLs periodically to remove outdated rules and ensure they align with current security policies.</li>
        <li><strong>Test thoroughly:</strong> Always test ACL changes in a staging environment before deploying to production to prevent unintended access issues.</li>
        <li><strong>Document everything:</strong> Maintain clear documentation of all ACL rules, their purpose, and when they were last modified.</li>
      </ul>
    `,
  },

  "advanced-persistent-threat-apts": {
    slug: "advanced-persistent-threat-apts",
    term: "Advanced Persistent Threats (APTs)",
    intro:
      "Advanced Persistent Threats (APTs) lurk in the shadows of the digital world, enabling malicious parties to operate undetected within your network for months or even years. These threats often target specific organizations or entities to steal sensitive information or sabotage critical infrastructure. Learn about the types, how they work, and crucial steps to prevent them.",
    relatedTerms: [
      { term: "Network Topology", slug: "network-topology" },
      { term: "Access Control List (ACL)", slug: "access-control-list-acl" },
      { term: "Active Directory", slug: "active-directory" },
    ],
    toc: [
      { id: "types-of-apts", title: "Types of Advanced Persistent Threats" },
      { id: "zero-day-exploits", title: "Zero-Day Exploits", level: 2 },
      { id: "social-engineering", title: "Social Engineering Attacks", level: 2 },
      { id: "watering-hole", title: "Watering Hole Attacks", level: 2 },
      { id: "supply-chain", title: "Compromised Supply Chains", level: 2 },
      { id: "advanced-malware", title: "Advanced Malware", level: 2 },
      { id: "working-of-apts", title: "The Working of APTs" },
      { id: "gathering-intel", title: "Gathering Intel", level: 2 },
      { id: "initial-compromise", title: "Initial Compromise", level: 2 },
      { id: "lateral-movement", title: "Lateral Movement", level: 2 },
      { id: "data-extraction", title: "Data Extraction", level: 2 },
      { id: "covering-tracks", title: "Covering Tracks", level: 2 },
      { id: "preventing-apts", title: "Preventing APTs" },
      { id: "risk-assessment", title: "Risk Assessment", level: 2 },
      { id: "secure-network", title: "Secure Network Architecture", level: 2 },
      { id: "endpoint-security", title: "Endpoint Security", level: 2 },
      { id: "incident-response", title: "Incident Response and Containment", level: 2 },
      { id: "continuous-monitoring", title: "Continuous Monitoring", level: 2 },
    ],
    content: `
      <h2 id="types-of-apts">Types of Advanced Persistent Threats</h2>
      <p>The types of advanced persistent threats typically comprise the following:</p>

      <h3 id="zero-day-exploits">1. Zero-Day Exploits</h3>
      <p>Zero-day APTs target previously unknown vulnerabilities in computer networks, referred to as such since developers have to handle them with no warning signs. Exploiting these vulnerabilities allows APTs to gain unauthorized access, install malware, or steal sensitive data.</p>
      <p>For example, the Stuxnet attack targeted four zero-day vulnerabilities in Microsoft Windows systems and caused considerable damage to Iran's nuclear program.</p>

      <h3 id="social-engineering">2. Social Engineering Attacks</h3>
      <p>Social engineering techniques, such as phishing or pretexting, are commonly used to imitate trusted entities and deceive users into offering sensitive information, clicking on malicious links, or downloading malware-infected files. For instance, a phishing email scam once stole $100 million from Google and Facebook.</p>

      <h3 id="watering-hole">3. Watering Hole Attacks</h3>
      <p>Watering hole attacks inject malicious code into websites frequently used by the target organization's employees or customers to infect systems with malware and establish a presence within the network. The United States Department of Labor website was infected with malware a few years ago, which aimed to gather information from visitors.</p>

      <h3 id="supply-chain">4. Compromised Supply Chains</h3>
      <p>APTs can target partners of the target organization to gain access to its network indirectly. Malware is injected into legitimate software updates or hardware components to access the network undetected. In 2020, a supply chain breach was utilized to obtain the information of thousands of SolarWinds users.</p>

      <h3 id="advanced-malware">5. Advanced Malware</h3>
      <p>APTs deploy advanced malware designed to evade detection and maintain presence within the network. This malware may include remote access trojans or polymorphic malware that can change its code to avoid detection mechanisms. Zeus, a trojan created to infect files distributed through emails and websites, inflicted damages of more than $100 million on companies such as Amazon and Bank of America.</p>

      <h2 id="working-of-apts">The Working of Advanced Persistent Threats</h2>
      <p>The typical lifecycle of an APT attack consists of the following stages:</p>

      <h3 id="gathering-intel">1. Gathering Intel</h3>
      <p>APT parties gather information about the target organization, infrastructure, employees, and security measures by scanning for vulnerabilities and identifying potential entry points.</p>

      <h3 id="initial-compromise">2. Initial Compromise</h3>
      <p>APTs employ various approaches, such as spear-phishing emails, watering hole attacks, or exploiting unpatched software vulnerabilities, to gain initial entry into the target network. Once inside, they deploy backdoors or malware to establish persistence and maintain access.</p>

      <h3 id="lateral-movement">3. Lateral Movement</h3>
      <p>With an undetectable presence established, APTs move laterally across the network to escalate privileges, bypass security controls, and access valuable data. They exploit weaknesses in network segmentation or misconfigured systems to facilitate discreet navigation.</p>

      <h3 id="data-extraction">4. Data Extraction</h3>
      <p>The primary objective of APT attacks is to steal sensitive data without raising the alarm. Various techniques, such as encryption or covert channels, extract sensitive data while remaining undetected by the network's security protocols.</p>

      <h3 id="covering-tracks">5. Covering Tracks</h3>
      <p>To evade detection, APTs cover their tracks by deleting logs, changing timestamps, or deploying anti-forensic tools, allowing them to erase any traces of their presence in the target environment.</p>

      <h2 id="preventing-apts">Preventing Advanced Persistent Threats</h2>
      <p>Here are some key strategies to prevent APT attacks:</p>

      <h3 id="risk-assessment">1. Risk Assessment</h3>
      <p>Conduct regular assessments to identify potential vulnerabilities and prioritize security measures. Stay informed about emerging threats through threat intelligence feeds and industry reports. For banks and financial institutions, ransomware and phishing are highly exploitable threats. Assessing cybersecurity risks helps institutions bolster security measures and mitigate damages.</p>

      <h3 id="secure-network">2. Secure Network Architecture</h3>
      <p>Implement network segmentation, privilege access controls, and authentication mechanisms to limit the impact of lateral movement by APTs. Deploy intrusion detection and prevention systems, next-generation firewalls, and network traffic analysis tools to detect and block suspicious activities. Such security measures enable banking and financial services to safeguard sensitive customer information and deny unauthorized access.</p>

      <h3 id="endpoint-security">3. Endpoint Security</h3>
      <p>Deploy advanced endpoint protection solutions, such as endpoint detection and response platforms, antivirus software, and firewalls, to detect and block malicious activities on endpoints. By implementing proactive safety measures, financial corporations can continuously monitor their networks and maintain adherence to safety protocols.</p>

      <h3 id="incident-response">4. Incident Response and Containment</h3>
      <p>Develop and regularly test an incident response plan to respond to APT incidents. Establish procedures for detecting, containing, and handling APT threats, including isolating compromised systems and performing operation backups. Institutions such as banks and insurance agencies should have extensive response plans in place to protect sensitive data and reduce the risk of unauthorized access.</p>

      <h3 id="continuous-monitoring">5. Continuous Monitoring</h3>
      <p>Implement continuous monitoring solutions to detect suspicious activities and behaviors associated with APTs. Conduct proactive threat detection exercises to search for signs of APT activity that may evade automated detection mechanisms. Financial organizations should utilize continuous monitoring solutions to protect the integrity of their customer information databases.</p>
    `,
  },
};

export function getGlossaryPost(slug: string): GlossaryDetailData | undefined {
  return glossaryPosts[slug];
}

export function getAllGlossarySlugs(): string[] {
  return Object.keys(glossaryPosts);
}
