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
  // ── SPORTING GOODS COMPANY — 18 MODULE PROJECTS ─────────────────────────
  {
    slug: "sg-ecommerce-order-import",
    title: "E-Commerce Sales Order Import Engine",
    period: "2020 – 2026",
    summary:
      "Automated pipeline that pulls web shopping-cart orders from an external e-commerce platform into Business Central, validates them, creates sales orders, and triggers downstream Transfer Order automation for engraving items.",
    challenge:
      "A sporting goods company's web store generated high daily order volumes with no automated path into BC — orders required manual re-keying, causing delays, pricing errors, and missed engraving jobs.",
    solution: [
      "Built a Job Queue Entry codeunit (TableNo=472) that polls a staging table, validates customer and item data, applies pricing, and creates BC Sales Orders with full line detail.",
      "Implemented automatic engraving Transfer Order creation when order lines include custom-engraved items.",
      "Added structured error notification emails to operations staff for any lines that fail validation, with reason codes.",
      "Maintained a full import log per run for audit and reprocessing.",
    ],
    architecture:
      "Staging table (Tab50025 Shopping Cart Import) receives raw order data. CU50000 runs as a scheduled Job Queue Entry, validates each row, posts BC Sales Orders, and writes outcomes to Tab50026 (Log). CU50098 handles engraving TO automation triggered post-order creation.",
    stack: ["AL", "Job Queue Entries", "Sales Order Management", "Transfer Orders", "Email automation"],
    outcomes: [
      "Zero manual order entry for all web-originated orders",
      "Engraving Transfer Orders auto-created and released same day",
      "Full import audit trail with per-order error logging",
    ],
    lessons:
      "Staging tables beat direct writes into BC — the intermediate layer gives you a review and reprocess capability that direct API inserts can't easily provide.",
  },
  {
    slug: "sg-edi-integration",
    title: "EDI Trading Partner Integration (X12)",
    period: "2020 – 2026",
    featured: true,
    summary:
      "Full-featured X12 EDI integration connecting Business Central to major retail trading partners including Walmart, Amazon, and SPS Commerce. Supports 15+ transaction sets — 810, 850, 855, 856, 940, 945 and more — with its own role center and layered permission sets.",
    challenge:
      "A sporting goods retailer traded with multiple major retail chains, each requiring X12 EDI compliance. Managing separate document flows for purchase orders, invoices, ASNs, and warehouse advisements across partners was a manual, error-prone bottleneck.",
    solution: [
      "Built a central EDI engine codeunit that dispatches all inbound and outbound messages by RunType — Sales Orders, Invoices, Credit Memos, Shipments, Transfer Orders, Warehouse Shipments, Purchase Orders.",
      "Integrated with SPS Commerce via OAuth-secured REST API and Aptean EDI via dedicated REST endpoints.",
      "Implemented 175+ XMLports for parsing and generating all X12 transaction sets including partner-specific variants (Walmart/Sam's Club ASN formats).",
      "Built a dedicated EDI Manager role center with activity tiles, message queues, failure monitoring, and setup pages.",
      "Added multi-language XLF translations (Danish, German, Spanish, French, Dutch, Swedish) and 5 layered permission sets.",
    ],
    architecture:
      "EDI messages arrive at configured communication ports (REST/FTP), parsed by XMLports into staging tables, and routed by the central engine into the appropriate BC document flow. Outbound messages are built from BC documents and dispatched via the same port infrastructure. A background job polls for new inbound messages on a configurable schedule.",
    stack: ["AL", "X12 EDI", "Aptean EDI", "SPS Commerce", "XMLports (175+)", "REST API", "OAuth", "XLF Translations"],
    outcomes: [
      "15+ X12 transaction types automated end-to-end across all retail trading partners",
      "EDI compliance achieved for Walmart, Amazon, and SPS Commerce from a single BC platform",
      "Dedicated role center and permission model enabling EDI team self-service",
      "Multi-language support covering 8 locales for international deployment readiness",
    ],
    lessons:
      "A single central routing codeunit with a RunType pattern beats separate integration points per trading partner — adding a new partner means configuring a new port and XMLport, not rebuilding the engine.",
  },
  {
    slug: "sg-warehouse-rf-scanning",
    title: "Warehouse Management & RF Scanning System",
    period: "2020 – 2026",
    summary:
      "Custom warehouse management overlay on Lanham LAX, adding RF hand-scanner workflows for pick, putaway, movement, bin counting, wave picking, D2C picking, and packing station operations — all from the BC web client with no additional WMS software.",
    challenge:
      "Standard Lanham WMS lacked the custom RF workflow logic for the company's operations: directed put-away, wave picking for multi-order batches, D2C dedicated pick lanes, bin count audits, and real-time bin content queries from handheld devices.",
    solution: [
      "Built 30+ codeunits covering every WMS activity: pick, putaway, movement, wave pick, D2C pick, bin count, and packing station.",
      "Implemented a ControlAddin (ScannerInterface + Scanner.js) that captures keyboard-wedge barcode scanner input in the BC browser and fires Scanned(Barcode) events into AL workflows.",
      "Integrated with Lanham LAX shipping tables (Package, ShippingSetup, Packing Station) for seamless label and package management post-pick.",
      "Added OWR auto-release, combined pick consolidation (multi-order), and RF bin content queries.",
    ],
    architecture:
      "RF scanner workflows run as BC pages hosting the ScannerInterface ControlAddin. Scanned barcodes trigger AL codeunit handlers that interact with BC Warehouse Activity Lines, Bin Content, and Lanham LAX tables. Wave picks group multiple warehouse shipments into single pick runs. OWR release runs as a job queue step after reservation tiers complete.",
    stack: ["AL", "Lanham WMS / E-Ship / LAX", "ControlAddin (JavaScript)", "GS1-128 / UCC-128", "BC Warehouse Module", "Job Queue"],
    outcomes: [
      "RF-guided workflows for all warehouse activities — zero paper pick tickets",
      "Wave picking reduced individual pick trips by combining multiple orders per run",
      "Browser-native scanner ControlAddin eliminated need for separate WMS client software",
      "Bin count audits integrated directly into BC physical inventory cycle",
    ],
    lessons:
      "ControlAddins are underused in BC — a 1×1-pixel hidden control with a Scanner.js startup script delivers full hardware barcode scanner integration in the web browser without any additional client software.",
  },
  {
    slug: "sg-inventory-reservation",
    title: "Tiered Automatic Inventory Reservation Engine",
    period: "2021 – 2026",
    featured: true,
    summary:
      "A background job engine that automatically reserves inventory against open sales orders in priority tiers — Tier 1 customers first, then Academy, Tier 2, No-Tier, and Backorder — with configurable date offsets, shop-calendar awareness, and OWR auto-release post-reservation.",
    challenge:
      "Manual reservation left priority accounts inconsistently served — premium customers didn't always receive stock ahead of lower-tier accounts, and backorders sat unfilled even when replenishment stock arrived. The operations team spent hours daily managing reservations by hand.",
    solution: [
      "Built a parameterized reservation engine that runs all tier passes in sequence: Tier1, AcademyTier1, NoTier, AcademyNoTier, customer-specific runs, Tier2, AcademyTier2, Backorder, and OWR release.",
      "Each tier pass accepts configurable date offset (days before shipment date), customer filter, and shop calendar reference — ops can tune priority windows without code changes.",
      "Core reservation logic wraps BC Reservation Management and Sales Line-Reserve codeunits, applying quantity-specific auto-reserve per sales line.",
      "OWR (Outbound Warehouse Request) auto-release runs as the final step, releasing warehouse pick documents immediately after reservation completes.",
      "All reservation cancellation events are logged to an audit table.",
    ],
    architecture:
      "The engine runs as a scheduled Job Queue Entry. For each tier pass, it filters Sales Headers by tier rating, calculates target date using the shop calendar, and calls the core reservation codeunit per sales line. An optimization codeunit handles Tier 1 and Academy passes with exclusion list support.",
    stack: ["AL", "Job Queue", "BC Reservation Engine", "Sales Line-Reserve CU", "Shop Calendar", "Warehouse Module"],
    outcomes: [
      "Priority Tier 1 customers consistently reserved first — SLA commitments met automatically",
      "Backorder fill rate improved significantly as stock arrivals trigger immediate reservation",
      "OWR auto-release eliminated the manual 'release to warehouse' step post-reservation",
      "Zero daily manual reservation effort for the operations team",
    ],
    lessons:
      "Encoding business rules as parameters (tier, date offset, customer filter) means ops can tune reservation behaviour as commercial priorities change without touching code. The configurable engine paid for the extra design effort within weeks.",
  },
  {
    slug: "sg-flexport-freight",
    title: "Flexport Freight API Integration",
    period: "2022 – 2026",
    summary:
      "REST API integration with the Flexport global freight platform that pulls commercial invoices, bookings, and shipment records into BC staging tables and auto-creates purchase invoices from matched CI data — eliminating manual invoice entry for all import shipments.",
    challenge:
      "Import purchase invoices were manually created in BC from Flexport commercial invoices — a time-consuming, error-prone process for high-volume import freight operations. There was no live visibility of Flexport bookings or shipment status in BC.",
    solution: [
      "Built the Flexport Integration codeunit to call Flexport REST API, convert timestamps, build JSON payloads, and populate staging tables (Flexport, Flexport Log, Micro Service).",
      "Implemented Purchase Invoice Automation to match Flexport CI numbers against BC purchase receipt lines and auto-create purchase invoices.",
      "Created Flexport-facing BC pages for commercial invoices, shipments, and bookings, plus an API page exposing split data to external consumers.",
      "Added XML/JSON serialization utilities for data transformation between Flexport and BC formats.",
    ],
    architecture:
      "Flexport REST API → Integration codeunit → Flexport staging tables → Purchase Invoice Automation matches CI number to Purchase Receipt lines → creates Purchase Invoice with correct vendor, amounts, and posting setup. Log table records all API call results for troubleshooting.",
    stack: ["AL", "Flexport REST API", "JSON / HTTP", "Purchase Invoice automation", "BC Purchase module"],
    outcomes: [
      "Manual purchase invoice creation eliminated for all Flexport import shipments",
      "Live Flexport booking and shipment status accessible from within BC",
      "CI-to-invoice matching accuracy near 100% via structured CI number cross-reference",
    ],
    lessons:
      "Staging tables between an external API and BC documents are worth the extra layer — they give you a reconciliation point and make reprocessing failed records straightforward.",
  },
  {
    slug: "sg-finance-automation",
    title: "Finance & ACH Payment Automation",
    period: "2020 – 2026",
    summary:
      "Automated finance workflows covering ACH/NACHA electronic payment file generation, bulk vendor remittance emails, bank deposit posting, batch invoice processing, IRS 1099 management, and an AP-to-GL mapping dashboard.",
    challenge:
      "ACH payment files were produced manually and emailed to banks. Vendor remittances required individual emails per payment. Bank deposit posting and proof reporting was split across multiple manual steps, and IRS 1099 management lacked company-specific customization.",
    solution: [
      "Built ACH export codeunit to generate NACHA-format payment files from BC payment journal lines with multi-language label support.",
      "Implemented bulk vendor remittance email codeunit, batching all ACH remittance advices per payment run.",
      "Built bank deposit post-print codeunit — posts and immediately prints the deposit confirmation in a single action.",
      "Delivered Finance Automation codeunit for batch posting date updates, BOL-based invoice automation, and Excel export helpers.",
      "Created AP-to-GL dashboard (custom table and page) mapping AP transactions to GL accounts for management reporting.",
    ],
    architecture:
      "Finance codeunits run as report actions or Job Queue entries. ACH file generation reads Payment Journal Lines filtered by bank account and generates a NACHA flat file. Remittance emails use BC Email Message with Excel Buffer attachment. AP-to-GL dashboard is a live-query page over posted ledger entries.",
    stack: ["AL", "NACHA ACH format", "BC Payment Journal", "BC Email", "Excel Buffer", "SMTP", "GL/AP Module"],
    outcomes: [
      "ACH payment files auto-generated and ready for bank upload in one action",
      "Bulk vendor remittance emails sent in a single batch run post-payment",
      "AP-to-GL dashboard provides real-time finance visibility without Power BI",
    ],
    lessons:
      "Finance automations deliver outsized ROI because they touch high-volume, high-stakes processes that run every business day — a one-hour build that saves 20 minutes daily pays back in under a week.",
  },
  {
    slug: "sg-label-management",
    title: "Label Management & Cloud PDF Label Pipeline",
    period: "2021 – 2026",
    summary:
      "End-to-end label lifecycle management: GS1-128/UCC shipping labels, BOL labels, receive labels, and RFID labels generated via the Lanham engine. A cloud PDF label pipeline queues requests, dispatches to a PDF generation micro-service, and stores labels for download.",
    challenge:
      "Label generation was fragmented across different tools and workflows. No centralized queue or audit trail for label requests. PDF label generation for cloud-based trading partners required an external pipeline not available in standard BC.",
    solution: [
      "Built Label Management codeunit as the core engine, generating GS1-128/UCC, BOL, receive, production, and RFID labels via Lanham LAX packing rules.",
      "Implemented a token-substitution system (Get Field Value + Label Substitute codeunits) that resolves BC record fields at runtime into label templates.",
      "Built a cloud PDF label pipeline: queue codeunit submits requests to a staging table, PDF management codeunit handles storage, email codeunit sends labels as attachments.",
      "Created configuration UI (Label Setup table and page) for PDF service URL, authentication, and template mappings.",
    ],
    architecture:
      "Label requests enter the queue (Label PDF Request table). Dispatcher codeunit makes HTTP calls to the PDF micro-service. Responses are stored and linked to BC source records via Document Attachment. UCC label reports handle Lanham-native physical printer dispatch.",
    stack: ["AL", "Lanham Label Engine", "GS1-128 / UCC-128", "HTTP REST", "PDF generation service", "RFID", "SMTP"],
    outcomes: [
      "Centralized label queue with full request audit trail",
      "Cloud PDF labels delivered to trading partners without separate tooling",
      "Token-substitution engine makes label templates configurable without code changes",
    ],
    lessons:
      "A queue-based label pipeline decouples label generation from document posting — labels can be regenerated, resent, and audited independently of the BC transaction that triggered them.",
  },
  {
    slug: "sg-document-management",
    title: "Document Management System Integration",
    period: "2020 – 2026",
    summary:
      "Integration with an Azure-backed external Document Management System. Uploads scanned PDFs and documents from BC to the DMS via REST, retrieves document links, and provides a scan-to-attach workflow for operations staff.",
    challenge:
      "Scanned documents (invoices, BOLs, delivery notes) lived in a separate DMS with no link back to BC records. Staff had to switch applications to retrieve documents during order processing or dispute resolution.",
    solution: [
      "Built the Document Management codeunit to upload files to the external DMS via REST API and store the returned document URL on BC records.",
      "Implemented Document Attach Management codeunit to manage BC-native document attachment records alongside DMS metadata.",
      "Created a scan-to-attach page where staff scan a barcode to identify the BC record and immediately link the scanned document.",
      "Added a custom document attachment table with DMS-specific metadata (external ID, DMS URL, source type).",
    ],
    architecture:
      "Document upload: codeunit reads the file stream → HTTP POST to DMS REST endpoint → stores URL in the document attachment table linked to the source BC record. Retrieval: URL is surfaced in a factbox on all major transaction pages. DMS Log records all API operations.",
    stack: ["AL", "Azure REST API", "HTTP/HTTPS", "BC Document Attachments", "Barcode scanning"],
    outcomes: [
      "Documents accessible directly from BC order/invoice/shipment pages — no application switching",
      "Scan-to-attach workflow reduced document linking time to under 10 seconds per document",
      "Full DMS API audit log for troubleshooting upload failures",
    ],
    lessons:
      "Surfacing an external DMS link in a BC factbox feels minor but delivers significant quality-of-life improvement for ops staff who retrieve documents dozens of times per day.",
  },
  {
    slug: "sg-freightview",
    title: "FreightView Multi-Carrier Rate Shopping",
    period: "2022 – 2026",
    summary:
      "REST integration with FreightView, a multi-carrier freight rate comparison platform. Allows warehouse staff to request LTL/FTL freight quotes, compare carrier options, and record the selected rate — all from within Business Central.",
    challenge:
      "Freight rate selection required switching to an external website, manually entering shipment details, comparing rates, and copying results back into BC — a slow, error-prone process repeated for every outbound shipment.",
    solution: [
      "Built the FreightView Integration codeunit to call the FreightView REST API with shipment details (weight, dimensions, origin, destination, freight class) using Base64 authentication.",
      "Parsed XML/JSON response and cached rate quotes in a Rates table for display and selection.",
      "Created UI for rate request creation and rate comparison pages.",
      "Defined supporting enums for freight class (LTL classes 50–500), location type, and packaging type with standard industry values.",
    ],
    architecture:
      "Rate request data entered in BC → codeunit builds JSON payload → HTTP POST to FreightView API with Basic Auth → response parsed → rates stored in Rates table → user selects carrier → selection recorded on shipment header.",
    stack: ["AL", "FreightView REST API", "Base64 auth", "JSON / XML", "LTL freight class enums"],
    outcomes: [
      "Freight rate comparison done from within BC — no browser tab switching",
      "Rate history cached in BC for audit and comparison over time",
      "Standardized freight class and packaging selections prevent mis-classification",
    ],
    lessons:
      "Simple REST integrations with external rating engines have a high ROI-to-effort ratio — the BC UI wrapper often takes longer than the API call itself, but it's what makes the tool actually get used.",
  },
  {
    slug: "sg-fno-integration",
    title: "D365 Finance & Operations Bi-Directional Integration",
    period: "2023 – 2026",
    featured: true,
    summary:
      "Bi-directional data synchronization bridge between Business Central and Dynamics 365 Finance & Operations. Exposes BC data as OData API pages consumed by FnO via Logic Apps, and receives inbound inventory transactions, resource charges, and order events from FnO via staging tables.",
    challenge:
      "A company running both BC and D365 FnO needed a live cross-system view of sales orders, purchase orders, shipments, inventory transactions, and financial charges — with changes in either system reflected in the other without manual reconciliation.",
    solution: [
      "Built 15+ OData API pages exposing BC sales/purchase headers and lines, transfer orders, customers, vendors, items, and inventory transactions to FnO.",
      "Implemented inbound staging tables and processing codeunits for FnO-originated data: inventory transactions, resource charges, and deletion events.",
      "Built the BC-FO Integration codeunit to push BC sales shipment data to FnO as JSON HTTP POST with header, line, and package detail.",
      "Created a BC Control setup page for integration credentials, endpoints, and feature flags.",
    ],
    architecture:
      "Outbound: BC events trigger JSON POST to FnO REST endpoint. Inbound: FnO Logic Apps write to BC OData API staging pages → processing codeunits convert staging records into BC journals and documents. Deletion events from FnO are staged and reviewed before any BC action. All integration state tracked in the BC Control table.",
    stack: ["AL", "OData API pages", "REST / JSON", "D365 Finance & Operations", "Azure Logic Apps", "Job Queue", "BC Item Journal"],
    outcomes: [
      "Live cross-system visibility of sales, purchase, and inventory data across BC and FnO",
      "Inventory transaction staging enables controlled FnO-to-BC stock reconciliation",
      "Deletion events handled safely via staging review — no accidental BC record deletes from FnO signals",
    ],
    lessons:
      "Staging tables for inbound FnO data are non-negotiable — they give you a review layer before FnO changes touch BC records, which is critical when two live ERP systems share data ownership.",
  },
  {
    slug: "sg-bom-tree-viewer",
    title: "Interactive Production BOM Tree Viewer",
    period: "2022 – 2026",
    summary:
      "A ControlAddin-based interactive Bill of Materials tree viewer rendered in the Business Central web client. Displays multi-level Production BOM structures as expandable org-chart nodes with component quantities and UOMs at each level — no additional software required.",
    challenge:
      "Standard BC Production BOM pages show flat lists — understanding nested BOM structures required manually drilling through multiple levels. Production planners had no visual overview of component hierarchy for complex multi-level assemblies.",
    solution: [
      "Built the BOM Tree Generators codeunit that recursively traverses Production BOM Header and Line records, assigning unique node IDs at each level, and returns a hierarchical JSON tree (JsonObject/JsonArray).",
      "Created the GDX BOM Tree Viewers ControlAddin (AL definition + BOMOrgChart.css) that renders the JSON tree as an interactive org-chart in the BC browser.",
      "Added actions to Production BOM Card and List pages to open the tree viewer for any selected BOM.",
    ],
    architecture:
      "User opens BOM Tree viewer → page triggers the generators codeunit with BOM No. → codeunit recurses through Production BOM Lines collecting components, quantities, UOMs → returns JsonObject tree → ControlAddin renders it client-side via org-chart CSS layout. Unique node IDs prevent rendering errors on shared components.",
    stack: ["AL", "ControlAddin", "JavaScript", "JSON (JsonObject / JsonArray)", "CSS org-chart layout", "Production BOM module"],
    outcomes: [
      "Multi-level BOM structures visible at a glance in the BC web client",
      "Production planners can identify component reuse and deep nesting without drilling through pages",
      "Zero additional software required — fully browser-native",
    ],
    lessons:
      "Recursive JSON tree generation in AL is straightforward, but unique node ID assignment is critical — shared components appearing at multiple BOM levels will cause duplicate key errors without it.",
  },
  {
    slug: "sg-scanner-interface",
    title: "Browser Barcode Scanner ControlAddin",
    period: "2021 – 2026",
    summary:
      "A minimal 1×1-pixel hidden ControlAddin that captures USB HID / keyboard-wedge barcode scanner input in the Business Central web browser and fires a Scanned(Barcode: Text) event into AL pages — no additional client software required.",
    challenge:
      "BC warehouse pages needed to accept input from USB keyboard-wedge barcode scanners without requiring separate client software. Standard BC input fields couldn't reliably distinguish rapid scanner input from normal keyboard typing.",
    solution: [
      "Built a minimally-sized ControlAddin AL definition: 1×1 pixels, zero visual footprint, hidden from users. Declares a startup JavaScript file and exposes a single Scanned(Barcode: Text) AL event.",
      "Implemented Scanner.js to listen for rapid keyboard input sequences, buffer the characters, detect the scanner terminator (Enter/Tab), and fire the AL event with the completed barcode string.",
      "Integrated the ControlAddin into warehouse pick, putaway, and movement pages — each page subscribes to the Scanned event and routes the barcode to the appropriate workflow handler.",
    ],
    architecture:
      "ControlAddin renders invisibly on the page. Scanner.js runs on page load, hooks keyboard events, buffers rapid-sequence characters, detects scanner terminator, and fires the AL event via the BC extensibility method. AL page event subscriber receives the barcode and routes to the workflow codeunit.",
    stack: ["AL ControlAddin", "JavaScript", "BC Event system", "USB HID barcode scanners", "Keyboard wedge interface"],
    outcomes: [
      "Barcode scanner input works natively in the BC web browser with no additional software",
      "Scanner events reliably distinguished from keyboard typing via timing thresholds in Scanner.js",
      "Single ControlAddin reused across all warehouse pages that need scanner input",
    ],
    lessons:
      "The 1×1-pixel hidden ControlAddin pattern is the cleanest way to extend BC with hardware device input — invisible to users, reusable across pages, and requires no changes to page layouts.",
  },
  {
    slug: "sg-email-automations",
    title: "Automated Email & Remittance Workflows",
    period: "2020 – 2026",
    summary:
      "Automated email workflows for customer invoices, credit memos, vendor ACH remittances, monthly statement batches, and CSR notifications — with per-company recipient lists, CC/BCC management, Excel attachments, and PDF document links.",
    challenge:
      "Customer invoices, credit memos, and vendor remittances were emailed manually one at a time. Monthly statement batches required an operator to process each customer individually. ACH remittance detail had no automated email delivery.",
    solution: [
      "Built Email Automations codeunit for credit memo and invoice batch email delivery using BC Email Message with TempBlob attachment handling and configurable recipient lists per company.",
      "Implemented Send Invoices Email codeunit for sales invoice PDF email with document attachment.",
      "Added a monthly statement email report for automated statement email batches triggered by a scheduled run.",
      "Extended BC Email Scenario enum with custom email scenarios for each automated workflow type.",
    ],
    architecture:
      "Email codeunits build an Email Message object, attach the relevant PDF or Excel file via TempBlob, set To/CC/BCC from the company-specific recipient matrix table, and dispatch via BC SMTP email. Batch runs process all matching records in a single job queue execution.",
    stack: ["AL", "BC Email Module", "Email Message CU", "Excel Buffer", "TempBlob", "SMTP", "Job Queue"],
    outcomes: [
      "Invoice and credit memo emails dispatched in batch — no per-document manual sending",
      "Monthly statement batch reduced ops effort from hours to a single job queue trigger",
      "ACH remittance emails auto-sent to all vendors immediately after payment run",
    ],
    lessons:
      "An email matrix table (recipient rules per company, document type, and scenario) is worth building early — hardcoded recipient lists become a support burden every time a contact changes.",
  },
  {
    slug: "sg-crm-credit-card",
    title: "CRM & Credit Card Transaction Integration",
    period: "2021 – 2026",
    summary:
      "Extensions to the Business Central Dynamics 365 CRM connector adding company-specific custom fields to synced entities, plus credit card transaction management for two payment processors with BC-native transaction pages.",
    challenge:
      "The standard BC CRM connector synchronized core entities but dropped company-specific fields — pricing tiers, royalty flags, custom ship-to rules — that sales reps needed in CRM. Credit card transactions from two payment processors had no BC-native view.",
    solution: [
      "Extended CRM integration tables with custom fields: CRM Sales Order, Contact, Invoice, and Account table extensions.",
      "Built a codeunit to handle CRM-originated sales return order creation in BC.",
      "Created custom credit card transaction tables and list pages for payment processor transaction records.",
      "Extended Dataverse enums for shipping agent codes and payment terms aligned to BC values.",
    ],
    architecture:
      "CRM table extensions add fields to the Dataverse integration mapping tables, ensuring custom fields sync bidirectionally via the standard BC CRM connector. Credit card transaction tables receive data via scheduled import jobs from payment processor export files and display in factboxes on Customer Card and Ledger pages.",
    stack: ["AL", "Dynamics 365 CRM / Dataverse", "BC CRM Connector", "Payment processors", "EnumExtensions"],
    outcomes: [
      "Custom fields (tier, royalty, ship-to rules) now sync bidirectionally with CRM",
      "Credit card transaction history visible from BC Customer Card — no portal switching",
      "CRM-originated sales return orders handled automatically without manual re-entry in BC",
    ],
    lessons:
      "CRM table extensions require careful field mapping validation — a field added to the BC extension table without a corresponding CDS mapping simply will not sync, and no error is raised.",
  },
  {
    slug: "sg-reports-analytics",
    title: "Custom Reports & Data Analytics Layer",
    period: "2020 – 2026",
    summary:
      "305+ custom reports (AL + RDLC/RDL layouts) and 10 report extensions forming the complete analytics and operational document layer — spanning sales, inventory, warehouse, finance, purchasing, production, shipping, compliance, and batch automation.",
    challenge:
      "Standard BC reports didn't meet the company's operational and compliance requirements: custom aged AR/AP formats, partner-specific shipping documents (Walmart BOL, Amazon packing slip), production traveler documents, and dozens of batch automation reports not available in standard BC.",
    solution: [
      "Delivered 195 custom report AL files across every domain: Sales (45), Inventory (20), Warehouse (25), Finance (30), Purchasing (15), Shipping/Export (30), Transfer (10), Manufacturing (12), Automation/Batch (35), Compliance/EDI (8).",
      "Created 100 RDLC/RDL report layouts including partner-specific shipping document formats for Walmart, Amazon, Rural King, and Sam's Club.",
      "Extended 10 standard BC reports with custom fields and layouts covering Blanket PO, GL Register, Bank Reconciliation, Sales Shipment, and Check printing.",
      "Embedded batch automation logic in report objects: SO Release, Location Change, BOL Posting, item data imports, and GL dimension corrections.",
    ],
    architecture:
      "Reports follow a layered approach: AL report object defines dataset and triggers; RDLC/RDL layout handles visual rendering. Batch automation reports run as Job Queue entries or manual triggers from setup pages. Report extensions add dataset columns and layout overrides to standard BC reports without modifying base objects.",
    stack: ["AL Reports", "RDLC / RDL layouts", "Excel Buffer", "Report Extensions", "Job Queue"],
    outcomes: [
      "Every operational document — pick tickets, BOLs, invoices, packing lists, production travelers — produced from BC in partner-specific format",
      "Aged AR/AP, credit limit, and payment journal proof reports tuned to company-specific GL structures",
      "Batch automation reports eliminated dozens of manual data tasks (location changes, date updates, dimension fixes)",
    ],
    lessons:
      "Embedding light automation logic in AL report objects works well for batch tasks that need a parameter dialog, progress logging, and a printable result — the report framework gives you all three for free.",
  },
  {
    slug: "sg-data-model",
    title: "Custom Data Model & Table Extension Layer",
    period: "2020 – 2026",
    summary:
      "~95 custom tables introducing new business entities — pallets, totes, shopping cart staging, RFID tracking, FnO staging, label queues, credit card transactions, reservation logs — plus 132 table extensions adding custom fields to every major BC table.",
    challenge:
      "Standard BC tables couldn't store the company's operational data. Customer, Item, Sales, Purchase, Transfer, Warehouse, and CRM tables all needed additional fields not available in standard BC, and entirely new entities (pallets, totes, RFID, DMS, FnO staging) required new tables.",
    solution: [
      "Designed 95 custom tables covering operational, staging, and master data requirements across all functional modules.",
      "Built 132 table extensions adding custom fields to core BC tables: Customer (tier rating, RFID type, campaign code), Sales Header (approval status, manual reserve flag), Item (status, RFID tracking, web info), Vendor (ACH routing), and all transaction tables.",
      "Applied consistent naming conventions, field number ranges (50000+), and relationship definitions across all objects.",
    ],
    architecture:
      "Custom tables follow BC design standards: integer primary keys with auto-increment where appropriate, lookup relations to BC master data, and corresponding list/card pages. Table extensions use the 50000+ field number range to avoid conflicts with future BC standard fields. FlowFields and FlowFilters used for aggregation to minimize stored data.",
    stack: ["AL Tables", "AL TableExtensions", "BC Table Design", "FlowFields / FlowFilters", "Lookup relations"],
    outcomes: [
      "Complete operational data model supporting all 18 functional modules without schema conflicts",
      "132 table extensions covering every major BC entity — Customer, Vendor, Item, Sales, Purchase, Transfer, Warehouse, Assembly, Production, Fixed Asset, CRM",
      "Consistent field numbering and naming conventions across the entire extension",
    ],
    lessons:
      "Investing time in table design upfront — naming, relations, FlowFields vs stored fields, consistent field numbering — pays dividends over the full project lifetime. Schema debt is the hardest kind to refactor in a live ERP.",
  },
  {
    slug: "sg-enums-permissions",
    title: "Enums, Profiles & Permission Architecture",
    period: "2020 – 2026",
    summary:
      "40+ enumeration types providing type-safe constants for all functional modules, a dedicated EDI Manager profile with custom role center, and a 5-tier layered permission set structure for EDI access control.",
    challenge:
      "Without dedicated enumerations, business rule values (customer tier, RFID state, freight class, label type, FnO event type) were stored as integers or option fields — fragile, not extensible, and producing meaningless values in UI and reports. EDI users needed fine-grained access control that standard BC role-based permissions couldn't easily provide.",
    solution: [
      "Defined 40+ AL Enum objects covering every domain: Customer Account Type, Sales Header Tier Rating, Item Status, RFID Status/Location/Package, Freight Class, Label Request Status/Type, FNO Delete Type, and EDI-specific enums.",
      "Created 3 enum extensions to extend standard BC and Dataverse enums with company-specific values.",
      "Built the EDI Manager Profile linked to a dedicated role center page with activity tiles for message queues and pending actions.",
      "Implemented 5 layered EDI permission sets following the principle of least privilege: Full, Basic, Read, Process, and Setup.",
    ],
    architecture:
      "Enums replace integer/option fields across all custom tables and codeunits, providing IntelliSense-safe values, translatable captions, and extensibility via EnumExtensions. Permission sets are defined with explicit table/page/report/codeunit access at Read/Write/Execute level per role.",
    stack: ["AL Enums", "AL EnumExtensions", "AL Profiles", "AL Permission Sets", "BC Role Center"],
    outcomes: [
      "Type-safe enum values eliminate magic numbers and option field misuse across all 18 modules",
      "EDI Manager role center gives EDI operators a curated view without full BC access",
      "5-tier permission model: EDI admins get Setup, operators get Process, auditors get Read",
    ],
    lessons:
      "Defining enums early — even for simple 2-value options — pays off when the business adds a third value a year later. EnumExtensions mean you can extend without touching the base enum, keeping the architecture upgrade-safe.",
  },
  {
    slug: "sg-fixed-asset-workflow",
    title: "Fixed Asset Request & Approval Workflow",
    period: "2023 – 2026",
    summary:
      "An internal fixed asset purchase request and approval workflow built natively in BC. Employees submit FA requests routed through configurable approval groups and category hierarchies, with delegation support for absent approvers and a Power BI dimension mapping table.",
    challenge:
      "Fixed asset purchase requests were managed via email chains with no structured approval routing, no audit trail, and no integration with BC asset records. Approvals were missed, delegations were informal, and finance had no single view of pending capital expenditure.",
    solution: [
      "Built the Fixed Asset Request table and card/list/tracker pages for structured FA request submission with amount, description, requester, category, and approval status.",
      "Implemented a Category Hierarchy table defining approval routing levels, with a Delegation Setup table for absence coverage.",
      "Created Approval Entry logging to record each approval action (Approved / Rejected / Delegated) with timestamp and approver identity.",
      "Built a Journal Approval List page for approvers to review and action pending approvals from a single queue.",
      "Added a BI Mapping table linking BC dimensions to Power BI dataset field names for report-layer integration.",
    ],
    architecture:
      "FA request submission populates the Fixed Asset Request table. Category hierarchy lookup determines the approval chain. Approval entries are written per stage. Delegation rules are checked before routing to the next approver. Power BI reads dimension mappings via OData.",
    stack: ["AL", "BC Workflow patterns", "Fixed Asset module", "Power BI OData", "Approval routing"],
    outcomes: [
      "Structured FA request process with full audit trail from submission to approval",
      "Delegation setup ensures approvals never stall due to absent approvers",
      "Finance gains a single tracker page for all pending capital expenditure requests",
      "Power BI BI Mapping table enables consistent dimension-to-measure alignment across reports",
    ],
    lessons:
      "Building approval workflows natively in BC keeps the logic visible to developers, testable in a sandbox, and independent of external service availability — no Power Automate dependency for a core internal process.",
  },
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
