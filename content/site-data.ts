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

export type ProjectModule = {
  name: string;
  description: string;
  objects: string; // e.g. "Codeunits: 50022, 50040 · Tables: 50028, 50032 · Pages: 30+"
};

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
  modules?: ProjectModule[]; // optional functional module breakdown
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
    slug: "gsm-bc-extension",
    title: "GSM LLC — Business Central Enterprise Extension Platform",
    period: "2020 – 2026",
    featured: true,
    summary:
      "A comprehensive, production-grade Microsoft Dynamics 365 Business Central AL extension platform built for GSM LLC — spanning 18 functional modules, ~1,100 AL source files, and 112 RDLC/RDL report layouts. Covers everything from EDI trading-partner integration and RF warehouse scanning to AI-powered inventory reservation, third-party freight APIs, and bi-directional D365 FnO synchronization.",
    challenge:
      "GSM LLC operates a highly complex supply chain: multiple retail EDI trading partners (Walmart, Amazon, SPS Commerce), a custom RF warehouse scanning workflow layered on Lanham WMS, multi-tier automatic inventory reservation logic, Flexport freight forwarding, FreightView rate shopping, bi-directional data sync with Dynamics 365 Finance & Operations, ACH electronic payments, label generation, and a vast reporting estate — all needing to function as a single coherent platform inside Business Central.",
    solution: [
      "Designed and built 18 functional sub-systems as a unified BC AL extension: each module owns its tables, codeunits, pages, and reports, with clean separation of concerns.",
      "Implemented a full EDI sub-system (Aptean EDI + SPS Commerce) supporting 15+ X12 transaction sets — 810, 850, 855, 856, 940, 945 and more — with its own role center, permission sets, and multi-language translations.",
      "Built a tiered automatic inventory reservation engine (Tier 1 / Tier 2 / No Tier / Academy / Backorder) running as a job queue with configurable date offsets per tier and shop-calendar awareness.",
      "Engineered REST API integrations with Flexport (freight booking), FreightView (rate shopping), and D365 FnO (bi-directional shipment, inventory, and order sync via API pages and staging tables).",
      "Delivered 305+ custom reports (AL + RDLC/RDL) covering sales, inventory, warehouse, finance, purchasing, production, shipping, and compliance; extended 10 standard BC reports.",
      "Created browser-based control add-ins — a 1×1-pixel barcode scanner interface (Scanner.js) and an interactive BOM tree viewer (JSON-driven, recursive) — deployed in the BC web client.",
      "Extended 95+ custom tables, 132 table extensions (Customer, Vendor, Item, Sales/Purchase Header/Line, Warehouse, Transfer, Assembly, Fixed Asset, CRM) and 250+ page extensions.",
    ],
    architecture:
      "Single large AL extension on BC 21–26, structured as 18 functional modules sharing a common data model. Job Queue Entries drive async automation (EDI polling, reservation tiers, label dispatch, FnO sync). REST/JSON over HTTP for all external APIs. XMLports for EDI X12 parsing. ControlAddins for browser-native scanner and BOM tree UX. Azure DevOps CI/CD for automated AL build and deployment.",
    stack: [
      "AL (Business Central 21–26)",
      "Aptean EDI / SPS Commerce (X12 EDI)",
      "Lanham WMS / E-Ship (RF scanning)",
      "Flexport REST API",
      "FreightView REST API",
      "D365 Finance & Operations REST API",
      "NACHA ACH payment format",
      "GS1-128 / UCC-128 label generation",
      "ControlAddins (JavaScript)",
      "RDLC / RDL report layouts",
      "XMLports (200+)",
      "Azure DevOps CI/CD",
      "Dynamics 365 CRM / Dataverse",
      "JSON / XML processing",
    ],
    outcomes: [
      "Single unified extension platform replacing dozens of disconnected point customizations",
      "15+ EDI transaction types automated end-to-end with Walmart, Amazon, and SPS Commerce",
      "Tiered reservation engine processes thousands of sales lines per night with zero manual intervention",
      "Flexport CI-to-invoice automation eliminated manual purchase invoice creation for all import shipments",
      "FnO bi-directional sync enabling a live cross-system operational view of inventory and orders",
      "305+ custom reports delivering analytics across every operational domain from one platform",
      "Browser-native barcode scanner and BOM tree viewer eliminating context-switching for warehouse and production staff",
    ],
    lessons:
      "At this scale, the extension is really a platform — module boundaries, naming conventions, and shared table ownership need architecture governance, not just developer convention. The biggest leverage point was the tiered reservation engine: encoding business rules into configurable parameters (tier, date offset, customer filter) meant ops could tune behaviour without any code changes. ControlAddins are underused in BC; the scanner and BOM viewer proved that rich browser-native UX is achievable without leaving the BC web client.",
    modules: [
      {
        name: "1 · E-Commerce & Sales Order Import",
        description: "Processes web shopping-cart orders via job queue entry, validates items and customers, creates BC Sales Orders, triggers engraving Transfer Order automation, and logs import errors.",
        objects: "Codeunits: 50000, 50001, 50051, 50075 · Tables: 50025 (Shopping Cart Import), 50026 (Log) · Pages: Pag50001",
      },
      {
        name: "2 · EDI Integration (Aptean / SPS Commerce)",
        description: "Full X12 EDI engine supporting 15+ transaction sets (810, 850, 855, 856, 940, 945 and more) with trading partners Walmart, Amazon, and SPS Commerce. Includes its own role center, permission sets, and multi-language XLF translations.",
        objects: "Codeunit: 14180808 (EDI Management BCW) + ~20 EDI codeunits · 175+ XMLports · 15+ EDI tables · 5 permission sets · Profile: EDI Manager · 12 XLF translation files",
      },
      {
        name: "3 · Warehouse Management & RF Scanning",
        description: "Custom WMS overlay on Lanham LAX: RF scanner workflows for pick, putaway, movement, bin count, physical inventory, packing station, wave pick, D2C pick, and directed put-away.",
        objects: "Codeunits: 50022, 50029–50060, 50073–50094 · Tables: 50028 (Pallet), 50085 (Pick Consolidate), 50089 (Tote) · 30+ warehouse page extensions · ControlAddin: ScannerInterface + Scanner.js",
      },
      {
        name: "4 · Inventory Reservation Engine",
        description: "Tiered automatic reservation job: Tier 1, Tier 2, Academy, No-Tier, and Backorder passes with configurable date offsets, shop-calendar awareness, and OWR auto-release.",
        objects: "Codeunits: 50025, 50039, 50083, 50084, 50087 · Table: 50160 (Reservation Cancellation Log) · Enum: 50005 (Tier Rating) · PageExt: Pag-Ext50106",
      },
      {
        name: "5 · Flexport Freight Integration",
        description: "REST API integration pulling Flexport commercial invoices, bookings, and shipment records into BC staging tables. Auto-creates purchase invoices from matched CI data.",
        objects: "Codeunits: 50088, 50043, 50090 · Tables: 50109 (Flexport), 50103 (Log), 50147 (Micro Service) · API Pages: Pag50188 · Report: Rep50300 · Enums: 50027, 50033",
      },
      {
        name: "6 · Finance & Accounting Automation",
        description: "ACH/NACHA payment file generation, bulk vendor remittance emails, bank deposit post-print, batch invoice posting, IRS 1099 management, and AP-to-GL dashboard.",
        objects: "Codeunits: 50013, 50019, 50020, 50048, 50066, 50082 · Reports: Rep50017, Rep50047, Rep50202, Rep50020 (Aged AP), Rep50002/23/33/263 (Aged AR) · Tables: Tab50118 (AP-GL Dashboard)",
      },
      {
        name: "7 · Label Management & PDF Labels",
        description: "Generates GS1-128/UCC, BOL, receive, production, and RFID labels via the Lanham label engine. Cloud PDF label pipeline queues requests, dispatches to PDF service, and stores for download.",
        objects: "Codeunits: 50040, 50059, 50060, 50101, 50102, 50103 · Tables: 50151 (PDF Request), 50152 (Setup) · Pages: Pag50197, Pag50198 · Reports: UCC Package Label Rep50xxx (multiple variants)",
      },
      {
        name: "8 · Document Management System (DMS)",
        description: "Uploads and retrieves documents from Azure-backed external DMS via REST, links files to BC records, and provides a scan-to-attach workflow.",
        objects: "Codeunits: 50004, 50061 · Tables: 50011 (DMS Log), 50046 (Document Attachment) · Pages: Pag50001, Pag50101, Pag50145, Pag50146 · PageExt: Pag-Ext50233",
      },
      {
        name: "9 · FreightView Rate Shopping",
        description: "REST integration to FreightView multi-carrier rate platform. Requests freight quotes, caches results, and allows carrier selection from within BC.",
        objects: "Codeunit: 50070 · Tables: 50096 (Rates) · Pages: Pag50110, Pag50113 · Enums: 50023 (Freight Class), 50024 (Location Type), 50025 (Packaging) · PageExt: Pag-Ext50115",
      },
      {
        name: "10 · D365 Finance & Operations Integration",
        description: "Bi-directional BC ↔ FnO sync via REST API pages and staging tables. Exposes sales, purchase, transfer, inventory, customer, vendor, and item data to FnO; receives inventory transactions and resource charges inbound.",
        objects: "Codeunits: 50100, 50101, 50104–50108 · API Pages: Pag50189–50214 · Staging Tables: 50153–50159 · Pages: Pag50199–50214 · Enum: 50036 (FNO Delete Type)",
      },
      {
        name: "11 · BOM Tree Viewer (Control Add-in)",
        description: "Interactive hierarchical Production BOM tree rendered in the BC web client. Server-side JSON tree generation (recursive) drives a client-side org-chart style viewer.",
        objects: "Codeunit: 50089 (BOM Tree Generators) · ControlAddin: GDX BOM Tree Viewers + BOMOrgChart.css · Page: Pag50178 · PageExts: Pag-Ext50141, Pag-Ext50142",
      },
      {
        name: "12 · Scanner Interface (Control Add-in)",
        description: "Lightweight 1×1-pixel browser control add-in that captures barcode scanner input (USB HID / keyboard wedge) and fires a Scanned(Barcode) event into AL pages.",
        objects: "ControlAddin: ScannerInterface.al (AL definition) · Scanner.js (JavaScript startup script)",
      },
      {
        name: "13 · Email Automations",
        description: "Automated email workflows for customer invoices, credit memos, vendor ACH remittances, monthly statements, and CSR notifications — with per-company recipient lists and attachment management.",
        objects: "Codeunits: 50014, 50095, 50101 · Reports: Rep50220, Rep50219, Rep50243, Rep50298 · EnumExt: Email Scenario",
      },
      {
        name: "14 · CRM & Credit Card Integration",
        description: "Extensions to the BC Dynamics 365 CRM connector with GSM custom fields on synced entities, plus credit card transaction management for MTCCC and PSI payment processors.",
        objects: "TableExts: Tab-Ext50122–50128 (CRM tables) · Tables: 50119, 50120 (CC transactions) · Pages: Pag50041, Pag50042, Pag50161 · Codeunit: 50097 · EnumExts: 50002, 50003",
      },
      {
        name: "15 · Reports & Data Analysis",
        description: "305+ custom reports spanning sales, inventory, warehouse, finance, purchasing, production, shipping, export, compliance, and batch automation — the primary analytics and operational document layer.",
        objects: "~195 Report AL files + ~100 RDLC/RDL layouts + 10 Report Extensions; categories: Sales (45), Inventory (20), Warehouse (25), Finance (30), Purchasing (15), Shipping/Export (30), Transfer (10), Manufacturing (12), Automation (35), Compliance/EDI (8)",
      },
      {
        name: "16 · Custom Tables & Data Model",
        description: "~95 custom tables (new entities: pallets, totes, shopping cart, DMS, RFID, FnO staging, reservation log, credit card transactions, label queues) and 132 table extensions adding custom fields to every major BC table.",
        objects: "Custom Tables: Tab50000–50160 (~95 tables) · Table Extensions: Tab-Ext50005 (Customer), Tab-Ext50012/13 (Sales), Tab-Ext50009 (Item), Tab-Ext50014 (Purchase), Tab-Ext50048/49 (Transfer) + 127 more",
      },
      {
        name: "17 · Enums, Profiles & Permission Sets",
        description: "40+ enumeration types covering customer tiers, RFID states, freight classes, label types, FnO event types, and approval states. Includes the EDI Manager profile and 5 layered EDI permission sets.",
        objects: "Enums: 50000–50036 (40+ enums) + BCW EDI enums · EnumExts: 50001–50003 · Profile: EDI Manager · Permission Sets: ApteanEDIBCW (Full/Basic/Read/Process/Setup)",
      },
      {
        name: "18 · Fixed Asset & Approval Workflow",
        description: "Internal fixed asset purchase request and approval workflow with category hierarchy routing, delegation setup, and a BI dimension mapping table for Power BI reporting.",
        objects: "Tables: GDX_Fixed_Asset_Request, GDX_Fixed_Asset_Category_Hierarchy, GDX_Approval_Entry, GDX_BI_Mapping · Pages: GDX FA Request Card/List/Tracker, Journal Approval List · TableExts: Tab-Ext50108, Tab-Ext50121",
      },
    ],
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
