import type { Project } from "@/content/site-data";

export const categories = [
  { id: "ai", label: "AI & agents" },
  { id: "erp", label: "ERP modernization" },
  { id: "integration", label: "Integration" },
  { id: "data", label: "Data & automation" },
] as const;

export type CategoryId = (typeof categories)[number]["id"];

const bySlug: Record<string, CategoryId> = {
  "ai-development-tooling": "ai",
  "d365-sentinel": "ai",
  "ai-customer-support-assistant": "ai",
  "copilot-bill-extractor": "ai",

  "nav-to-bc-modernization": "erp",
  "bc-cloud-implementations": "erp",
  "appsource-cicd": "erp",
  "sg-warehouse-rf-scanning": "erp",
  "sg-inventory-reservation": "erp",
  "sg-label-management": "erp",
  "sg-bom-tree-viewer": "erp",
  "sg-scanner-interface": "erp",
  "sg-data-model": "erp",
  "sg-enums-permissions": "erp",
  "sg-fixed-asset-workflow": "erp",
  "hr-techno-functional": "erp",

  "salsify-logic-apps-integration": "integration",
  "enterprise-integrations": "integration",
  "sg-ecommerce-order-import": "integration",
  "sg-edi-integration": "integration",
  "sg-flexport-freight": "integration",
  "sg-document-management": "integration",
  "sg-freightview": "integration",
  "sg-fno-integration": "integration",
  "sg-crm-credit-card": "integration",

  "power-bi-inventory-analytics": "data",
  "process-automation": "data",
  "sg-finance-automation": "data",
  "sg-email-automations": "data",
  "sg-reports-analytics": "data",
};

export function categoryOf(p: Project): CategoryId {
  return bySlug[p.slug] ?? "erp";
}

export function categoryLabel(id: CategoryId): string {
  return categories.find((c) => c.id === id)?.label ?? "";
}
