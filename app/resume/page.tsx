import type { Metadata } from "next";
import { Download, FileText } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion";
import { site } from "@/content/site-data";

export const metadata: Metadata = {
  title: "Resume",
  description: "Download the resume of Mano Dharmalingam, Business Central Technical Solutions Architect.",
};

export default function ResumePage() {
  return (
    <div className="container py-16">
      <FadeIn>
        <SectionHeading
          eyebrow="Resume"
          title="Download my resume"
          subtitle="The latest PDF version, kept in sync with this site."
        />
        <div className="flex flex-wrap gap-3">
          <a href={site.resumeFile} download="Mano-Dharmalingam-Resume.pdf">
            <Button size="lg"><Download className="h-4 w-4" /> Download PDF</Button>
          </a>
          <a href={site.resumeFile} target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline"><FileText className="h-4 w-4" /> View in browser</Button>
          </a>
        </div>
        <div className="mt-10 overflow-hidden rounded-xl border">
          <object data={site.resumeFile} type="application/pdf" className="h-[80vh] w-full" aria-label="Resume PDF preview">
            <p className="p-8 text-muted-foreground">
              PDF preview isn&apos;t supported in this browser —{" "}
              <a href={site.resumeFile} className="text-primary underline">download the resume</a> instead.
            </p>
          </object>
        </div>
      </FadeIn>
    </div>
  );
}
