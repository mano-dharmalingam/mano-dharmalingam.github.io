import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { site } from "@/content/site-data";

export const metadata: Metadata = {
  title: "Résumé",
  description: "Download the resume of Mano Dharmalingam, Principal Solution Architect (Dynamics 365 Business Central & Finance and Operations).",
};

export default function ResumePage() {
  return (
    <div className="container py-16 sm:py-20">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading as="h1" className="mb-0" title="Résumé" subtitle="The current PDF, kept in step with this site." />
        <div className="flex flex-wrap gap-3">
          <a href={site.resumeFile} download="Mano-Dharmalingam-Resume.pdf" className={buttonVariants({ size: "lg" })}>
            Download PDF
          </a>
          <a href={site.resumeFile} target="_blank" rel="noopener noreferrer" className={buttonVariants({ size: "lg", variant: "outline" })}>
            Open in new tab
          </a>
        </div>
      </div>
      <div className="mt-10 overflow-hidden border border-border bg-card">
        <object data={site.resumeFile} type="application/pdf" className="h-[80vh] w-full" aria-label="Résumé preview">
          <p className="p-8 text-muted-foreground">
            This browser can&apos;t preview PDFs.{" "}
            <a href={site.resumeFile} className="link">Download the résumé</a> instead.
          </p>
        </object>
      </div>
    </div>
  );
}
