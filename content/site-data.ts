// ─────────────────────────────────────────────────────────────
// ALL site content lives here. Edit this file to update the site.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Mano Dharmalingam",
  title: "Technical Solutions Architect",
  tagline: "I modernize ERP systems — from legacy NAV to AI-accelerated Business Central.",
  subtitle:
    "10+ years architecting Microsoft Dynamics 365 Business Central solutions: upgrades, cloud migrations, enterprise integrations, and business process automation — delivered with an AI-assisted engineering workflow.",
  url: "https://mano-dharmalingam.github.io", // switch to a custom domain later if you buy one
  email: "mano.cse2012@gmail.com",
  phone: "+91 96290 77657",
  location: "Chennai, India",
  linkedin: "https://www.linkedin.com/in/mano-dharmalingam-476985bb/",
  github: "https://github.com/mano-dharmalingam",
  resumeFile: "/Mano-Dharmalingam-Resume.pdf",
  photo: "/photo.png", // drop your headshot/brand image at public/photo.png
};

export const stats = [
  { value: 10, suffix: "+", label: "Years of Experience" },
  { value: 15, suffix: "+", label: "Major Projects Delivered" },
  { value: 7, suffix: "", label: "ERP Versions Mastered" },
  { value: 8, suffix: "+", label: "Certifications & Badges" },
  { value: 5, suffix: "+", label: "Industries Served" },
];

export const pillars = [
  {
    icon: "Database",
    title: "ERP Modernization",
    desc: "Every major NAV → Business Central upgrade path, personally executed: 2009 → 2013 → 2015 → 2018 → BC on-prem → BC 26 Cloud.",
  },
  {
    icon: "Cloud",
    title: "Cloud Architecture",
    desc: "On-premises to SaaS migration strategies with full data integrity and minimal downtime, aligned to business continuity goals.",
  },
  {
    icon: "Network",
    title: "Enterprise Integration",
    desc: "EDI (Aptean, Lanham) and API integrations (Flexport, CRM, WMS, eCommerce, ChargeLogic, Simcrest) for real-time cross-platform data exchange.",
  },
  {
    icon: "Workflow",
    title: "Process Transformation",
    desc: "Automation that removes 40%+ of manual work — order processing, freight management, financial workflows, rule-driven customization frameworks.",
  },
  {
    icon: "Sparkles",
    title: "AI-Assisted Engineering",
    desc: "Builds custom Claude AI skills that automate code review and enforce architecture standards. Anthropic-certified (Claude 101, Claude Code 101, Cowork).",
  },
  {
    icon: "Package",
    title: "Product Engineering",
    desc: "Microsoft-certified Business Central apps published on AppSource, with Azure DevOps CI/CD pipelines for automated build, test, and release.",
  },
];

export const highlights = [
  { year: "2015", text: "Started in the Dynamics ecosystem — C/AL development on NAV at Jean Martin Systems" },
  { year: "2016–19", text: "3 years onsite in Muscat, Oman — client-facing delivery, requirement gathering, on-spot solutions" },
  { year: "2020", text: "Joined GeoDataTek as ERP/EDI Tech Lead — enterprise integrations & BC frameworks" },
  { year: "2024", text: "Promoted to Technical Solutions Architect; MB-800 certified" },
  { year: "2025", text: "MB-820 certified; published Microsoft-certified apps on AppSource with full CI/CD" },
  { year: "2026", text: "Building AI development tooling — custom Claude skills for Dynamics 365 engineering" },
];

export const experience = [
  {
    company: "GeoDataTek India Pvt Ltd",
    location: "Chennai, India",
    roles: [
      {
        title: "Technical Solutions Architect",
        period: "Oct 2024 – Present",
        points: [
          "Lead architecture design and delivery of ERP and integration solutions across manufacturing, retail, logistics, and HR.",
          "Built and deployed Business Central apps published on Microsoft AppSource, enhancing client capabilities and product ecosystem value.",
          "Engineered Business Central upgrades (21.6 → 24.0 → 25.6 on-premises) and BC 26 Cloud implementations across multiple business units.",
          "Leading end-to-end implementation of Dynamics 365 Finance & Operations from Business Central.",
          "Pioneered AI-assisted development practice: custom Claude skills for automated X++ code review and standards enforcement.",
        ],
      },
      {
        title: "ERP/EDI Tech Lead",
        period: "Oct 2020 – Sep 2024",
        points: [
          "Designed scalable Dynamics 365 Business Central frameworks enabling enterprise-grade performance optimization.",
          "Architected integrations between Business Central and third-party platforms: Flexport, Lanham, Aptean EDI, Simcrest, ChargeLogic.",
          "Directed upgrade and migration projects from on-premises NAV to Business Central SaaS — full data integrity, minimal downtime.",
          "Collaborated with business stakeholders to align technical solutions with organizational goals, optimizing ROI and process efficiency.",
        ],
      },
    ],
  },
  {
    company: "Solia Technology Services",
    location: "Chennai, India",
    roles: [
      {
        title: "Technical Consultant",
        period: "Oct 2020 – Sep 2021",
        points: [
          "Supported end-to-end Business Central cloud implementations — 2+ multinational deployments with zero major post-go-live issues.",
          "Improved report generation efficiency by 30% with advanced AL customizations and optimized RDLC/Word reports.",
          "Reduced manual data entry by 40% through integrations automating order management and financial processes.",
        ],
      },
    ],
  },
  {
    company: "Jean Martin Systems Pvt Ltd",
    location: "Chennai, India · 3 years onsite in Muscat, Oman",
    roles: [
      {
        title: "Technical Consultant",
        period: "Dec 2015 – Sep 2020",
        points: [
          "Developed and maintained NAV solutions across versions 2009–2018 in C/AL; early Business Central adoption.",
          "Led module upgrades, data migration, and performance optimization for enterprise clients.",
          "Designed techno-functional solutions: HR payroll with payslip mailing, expense management with approval workflows, commission reconciliation, item reservation by customer tier.",
          "3 years onsite in Muscat, Oman — technical requirement gathering, on-spot solutioning, and client relationship management.",
        ],
      },
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  period: string;
  summary: string;
  challenge: string;
  solution: string[];
  architecture: string;
  stack: string[];
  outcomes: string[];
  lessons: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "ai-development-tooling",
    title: "AI Development Tooling — Custom Claude Skills",
    period: "2026 – ongoing",
    featured: true,
    summary:
      "Designed and built custom Claude AI skill modules that act as intelligent assistants during Dynamics 365 development — automated code review, early issue detection, and standards enforcement.",
    challenge:
      "Manual code reviews in ERP development are slow, inconsistent, and a bottleneck for delivery. Best practices and architecture standards depended on individual reviewer knowledge.",
    solution: [
      "Built 'D365 F&O X++ Developer' skill: an AI assistant producing production-quality X++ aligned with Microsoft standards.",
      "Built 'D365 F&O Code Reviewer' skill: automated review of X++ code quality, catching issues early in the lifecycle and enforcing best practices and architecture standards.",
      "Focused on practical impact — tooling that saves developer time rather than demos that look impressive.",
    ],
    architecture:
      "Claude Cowork skill modules encoding D365 F&O development standards, review checklists, and architecture rules; integrated into the daily development workflow.",
    stack: ["Claude Cowork", "Claude Code", "D365 F&O", "X++", "AI prompt/skill engineering"],
    outcomes: [
      "Improved consistency across codebases",
      "Accelerated development cycles",
      "Significantly reduced manual review effort and review bottlenecks",
    ],
    lessons:
      "AI delivers the most value when it encodes your team's actual standards — a skill that enforces your architecture beats a generic assistant. Roadmap: automated validations, smarter DevOps integrations, end-to-end AI-assisted workflows.",
  },
  {
    slug: "nav-to-bc-modernization",
    title: "NAV → Business Central Modernization Program",
    period: "2015 – 2026",
    featured: true,
    summary:
      "A decade-long modernization track record covering every major upgrade path: NAV 2009 → 2015 → 2018 → Business Central, and BC 21.6 → 24.0 → 25.6 on-premises.",
    challenge:
      "Legacy NAV systems with years of C/AL customizations blocked clients from modern capabilities, compliance, and cloud readiness — and any upgrade risked data loss and downtime.",
    solution: [
      "Executed multi-version upgrades with object merging, code optimization, and feasibility studies (including C/AL → AL Text2AL conversion).",
      "Implemented data migration frameworks preserving transactional integrity across every hop.",
      "Converted customizations to the extension/event-subscription model for upgrade-safe architecture.",
    ],
    architecture:
      "Staged upgrade pipeline: object feasibility analysis → C/AL-to-AL conversion → extension re-architecture → data migration with integrity validation → cutover with minimal downtime.",
    stack: ["AL", "C/AL", "Business Central (on-prem & cloud)", "NAV 2009–2018", "SQL Server", "Text2AL"],
    outcomes: [
      "Every major NAV → BC upgrade path executed successfully",
      "Full data integrity, minimal downtime across all migrations",
      "Legacy estates transformed into upgrade-safe, extension-based architecture",
    ],
    lessons:
      "Upgrades are architecture projects, not technical chores — converting customizations to extensions during the upgrade pays for itself in every future release.",
  },
  {
    slug: "bc-cloud-implementations",
    title: "Business Central Cloud Implementations",
    period: "2020 – 2026",
    featured: true,
    summary:
      "End-to-end Business Central implementations — BC 26 Cloud and 21.6 on-premises — across multiple business units and multinational organizations.",
    challenge:
      "Multinational organizations needed BC implementations configured to varied operational requirements across business units, without post-go-live disruptions.",
    solution: [
      "Delivered 2+ full-lifecycle cloud implementations for multinational organizations.",
      "Aligned configurations per business unit with operational requirements.",
      "Built cloud migration strategies integrating advanced Dynamics capabilities for scalability and continuity.",
    ],
    architecture:
      "Multi-company BC SaaS tenants with per-unit configuration baselines, integration endpoints, and automated deployment of AL extensions.",
    stack: ["Business Central 26 Cloud", "BC 21.6 on-prem", "AL", "Azure DevOps"],
    outcomes: [
      "Zero major post-go-live issues across deployments",
      "30% faster report generation via optimized RDLC/Word layouts",
      "Scalable multi-business-unit architecture",
    ],
    lessons:
      "Go-live quality is determined long before go-live — configuration discipline and test scenarios per business process are what produce 'zero major issues'.",
  },
  {
    slug: "enterprise-integrations",
    title: "Enterprise EDI & API Integration Hub",
    period: "2023 – 2025",
    summary:
      "API and EDI integrations connecting Business Central to the platforms enterprises actually run on: logistics, CRM, WMS, and eCommerce.",
    challenge:
      "Disconnected systems forced manual re-entry between ERP, logistics, warehouses, and storefronts — slow, error-prone, and invisible to operations.",
    solution: [
      "Implemented API-driven integrations across CRM, WMS, eCommerce platforms, and Flexport for cross-platform data exchange.",
      "Developed and deployed EDI solutions integrating Aptean and Lanham, automating logistics document flows.",
      "Integrated payment and add-on platforms: ChargeLogic, Simcrest.",
    ],
    architecture:
      "Business Central as integration hub: REST/OData APIs for synchronous flows, EDI document pipelines for logistics partners, with monitoring for operational visibility.",
    stack: ["REST APIs", "OData", "SOAP", "EDI (Aptean, Lanham)", "Flexport", "AL", "JSON/XML processing"],
    outcomes: [
      "Seamless cross-platform data exchange and improved operational coordination",
      "40% reduction in manual data entry in order and financial processes",
      "Real-time operational visibility across logistics flows",
    ],
    lessons:
      "Integration architecture is a business-process exercise first — map who owns each document state before writing a single endpoint.",
  },
  {
    slug: "appsource-cicd",
    title: "AppSource Apps & CI/CD Pipeline",
    period: "Feb 2025 – Aug 2025",
    summary:
      "Microsoft-certified Business Central extensions published on AppSource, backed by fully automated Azure DevOps CI/CD.",
    challenge:
      "Publishing to AppSource demands strict Microsoft compliance, and manual AL build/release processes couldn't sustain product-grade release cycles.",
    solution: [
      "Designed, developed, and published Microsoft-certified BC extensions to AppSource.",
      "Implemented end-to-end CI/CD pipelines for AL extensions in Azure DevOps: automated builds, testing, and deployments.",
    ],
    architecture:
      "AL extension monorepo → Azure DevOps pipelines (build, automated tests, validation against Microsoft requirements) → AppSource submission artifacts.",
    stack: ["AL", "Azure DevOps", "AppSource validation", "Business Central", "Git"],
    outcomes: [
      "Microsoft certification achieved — apps live on AppSource",
      "Accelerated release cycles with consistent code quality",
      "Earned Microsoft Learn badge: Azure Pipelines CI/CD with Business Central",
    ],
    lessons:
      "Treating internal extensions with product discipline (CI/CD, automated validation) raises the quality bar on everything — not just AppSource submissions.",
  },
  {
    slug: "process-automation",
    title: "Business Process Automation Suite",
    period: "Oct 2024 – Oct 2025",
    summary:
      "Automation workflows for order processing, freight management, and engraving operations — plus a rule-driven customization framework.",
    challenge:
      "High-volume operational processes (sales-to-purchase flows, freight charges, engraving operations) consumed staff time in repetitive manual steps and bred errors.",
    solution: [
      "Developed automation workflows for Sales Order → Purchase Order processing, freight charge management, and engraving operations.",
      "Designed a business rule-driven customization framework, making complex configurations maintainable without code churn.",
    ],
    architecture:
      "Event-driven AL automations triggered on document lifecycle events, governed by a configurable business-rules engine.",
    stack: ["AL", "Business Central", "Event subscriptions", "Rule-engine design"],
    outcomes: [
      "40%+ reduction in manual intervention",
      "Improved process accuracy",
      "Significantly enhanced operational efficiency via reusable rule framework",
    ],
    lessons:
      "A rules framework beats point customizations — when the business changes its mind, you change configuration, not code.",
  },
  {
    slug: "hr-techno-functional",
    title: "Techno-Functional HR & Finance Solutions",
    period: "2015 – 2020",
    summary:
      "Full-cycle techno-functional delivery on NAV: payroll, expense management, commission reconciliation, and customer-tier item reservation.",
    challenge:
      "Clients ran HR and finance processes outside the ERP — payroll, expense approvals, commission reconciliation — losing control, auditability, and time.",
    solution: [
      "Built a payroll system in NAV 2013 with automated payslip email delivery and full payroll components.",
      "Delivered expense management from employee booking through approval workflows to finance payment and reconciliation.",
      "Developed commission journal reconciliation with extended error handling before GL posting.",
      "Built item reservation by customer tier rating, email matrix/batching, XML port import/export, and page-level data encryption with password authentication.",
    ],
    architecture:
      "Modular C/AL solutions spanning HR, approvals, and finance with email automation (order confirmations, invoices, delayed-order batching) and secure data access.",
    stack: ["C/AL", "NAV 2013/2015/2018", "SQL Server", "SSRS", "XML ports", "SMTP automation"],
    outcomes: [
      "End-to-end HR processes brought inside the ERP with full audit trail",
      "Owned the full cycle: requirement gathering → design → development → deployment → support",
      "Foundation for 3 years of onsite client delivery in Oman",
    ],
    lessons:
      "Techno-functional range — sitting with HR and finance users, then building it yourself — is what later makes a credible solutions architect.",
  },
];

export const skillGroups = [
  {
    level: "Expert",
    skills: [
      "AL Programming", "C/AL", "Dynamics 365 Business Central (all versions)", "Dynamics NAV 2009–2018",
      "ERP Architecture & Implementation", "Upgrades & Data Migration", "RDLC / Word Report Development", "SQL Server",
    ],
  },
  {
    level: "Advanced",
    skills: [
      "EDI Integration (Aptean, Lanham)", "API Integration (REST, OData, SOAP)", "Azure DevOps CI/CD",
      "AppSource App Development & Publishing", "Integration Architecture (Flexport, CRM, WMS, eCommerce)",
      "Business Process Automation", "AI-Assisted Development (Claude Code / Cowork)", "XML & JSON Data Processing", "Git", "Performance Optimization",
    ],
  },
  {
    level: "Intermediate",
    skills: ["Power Platform", "SSRS", "Dynamics 365 Finance & Operations / X++", "Visual Studio Code tooling"],
  },
  {
    level: "Business & Leadership",
    skills: [
      "Stakeholder Engagement", "Technical Requirement Gathering", "Upgrade & Migration Strategy", "ROI Optimization",
      "Onsite Client Delivery (Oman · US exposure)", "Technical Leadership", "Techno-Functional Consulting",
    ],
  },
];

export const certifications = [
  {
    group: "Microsoft Certified",
    items: [
      { name: "MB-820: Dynamics 365 Business Central Developer Associate", issuer: "Microsoft", year: "2024–25" },
      { name: "MB-800: Dynamics 365 Business Central Functional Consultant", issuer: "Microsoft", year: "2024" },
    ],
  },
  {
    group: "AI & Anthropic",
    items: [
      { name: "Claude 101", issuer: "Anthropic", year: "2026" },
      { name: "Claude Code 101", issuer: "Anthropic", year: "2026" },
      { name: "Introduction to Claude Cowork", issuer: "Anthropic", year: "2026" },
      { name: "FY25 Microsoft 365 Copilot Project Ready Badge", issuer: "Credly by Pearson", year: "2024" },
      { name: "watsonx.ai Sales Foundation", issuer: "IBM", year: "2024" },
    ],
  },
  {
    group: "Microsoft Learn — AI & DevOps Badges",
    items: [
      { name: "Transform Your Business with AI (Trophy)", issuer: "Microsoft Learn", year: "2026" },
      { name: "Scale AI in Your Organization", issuer: "Microsoft Learn", year: "2026" },
      { name: "Embrace Responsible AI Principles & Practices", issuer: "Microsoft Learn", year: "2026" },
      { name: "Drive Business Value with Microsoft Copilot Solutions", issuer: "Microsoft Learn", year: "2026" },
      { name: "Create Business Value with AI", issuer: "Microsoft Learn", year: "2026" },
      { name: "Use Azure Pipelines for CI/CD with Business Central", issuer: "Microsoft Learn", year: "2026" },
    ],
  },
];

export const education = [
  {
    degree: "M.E. — Computer Science & Engineering",
    school: "Sengunthar College of Engineering, Anna University",
    period: "2013–2015 · CGPA 7.9",
    note: "Awarded a Sports Scholarship recognizing academic and athletic excellence",
  },
  {
    degree: "B.E. — Computer Science & Engineering",
    school: "Sengunthar Engineering College, Anna University",
    period: "2008–2012 · CGPA 8.42",
    note: "Represented the Anna University Basketball Team",
  },
];

export const about = {
  story: [
    "My career in the Microsoft Dynamics ecosystem started in 2015, writing C/AL on NAV 2009 at Jean Martin Systems in Chennai. What hooked me wasn't the code — it was watching a payroll process that took a team days collapse into a single posted journal. ERP work is business transformation you can measure.",
    "Three years onsite in Muscat, Oman taught me the half of this job no IDE can: sitting with users, extracting real requirements from vague complaints, and solving problems on the spot with the client watching. I came back a techno-functional consultant — someone who designs the process and then builds it.",
    "At GeoDataTek I grew from ERP/EDI Tech Lead to Technical Solutions Architect, moving from building solutions to designing them: integration architectures across Flexport, Aptean, and Lanham; NAV-to-cloud migration programs; Microsoft-certified AppSource products with full CI/CD. Along the way I've executed every major upgrade path in the product's history — NAV 2009 through Business Central 26 Cloud.",
    "Now I'm focused on the next shift: AI-assisted engineering. I've built custom Claude skills that review code and enforce architecture standards automatically — because I believe the architects who thrive next are the ones who turn AI from a novelty into team infrastructure.",
  ],
  philosophy: [
    {
      title: "Business first, technology second",
      text: "Every object, extension, and integration exists to move a business metric. I start from the process and ROI, not the feature list.",
    },
    {
      title: "Zero-downtime mindset",
      text: "ERP is the business's nervous system. Migrations and upgrades are engineered for data integrity and continuity — 'minimal downtime' is a design requirement, not a hope.",
    },
    {
      title: "Build it upgrade-safe",
      text: "Extensions over modifications, events over edits, rules over hardcoding. Today's customization should never become tomorrow's migration blocker.",
    },
    {
      title: "AI as infrastructure",
      text: "I don't just use AI tools — I build AI tooling for teams: skills that encode standards, review code, and remove bottlenecks.",
    },
  ],
  leadership:
    "I lead from the architecture down: set the standards, make them enforceable (increasingly via AI tooling), and stay close enough to the code to review anything I ask others to build. Stakeholders get straight answers about trade-offs; developers get clear patterns and room to own their modules.",
};

export const seo = {
  description:
    "Mano Dharmalingam — Technical Solutions Architect specializing in Microsoft Dynamics 365 Business Central: ERP modernization, NAV-to-BC upgrades, cloud migrations, EDI/API integrations, AppSource apps, and AI-assisted development.",
  keywords: [
    "Business Central Technical Architect", "Dynamics 365 Business Central consultant", "NAV to Business Central upgrade",
    "Business Central integration architect", "AppSource developer", "ERP modernization", "AL developer",
    "EDI integration Business Central", "Dynamics 365 architect Chennai",
  ],
};
