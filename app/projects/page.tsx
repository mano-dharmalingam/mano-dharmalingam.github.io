import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/content/site-data";
import { ProjectsGrid } from "@/components/projects-grid";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies: D365 Sentinel AI testing, NAV to Business Central modernization, D365 Finance & Operations integration, EDI and Azure integrations, AppSource apps, and Power BI analytics.",
};

export default function ProjectsPage() {
  return (
    <div className="container py-16 sm:py-20">
      <SectionHeading
        as="h1"
        title="Work"
        subtitle="Case studies from ten years of Dynamics 365 delivery. Each one covers the problem, the solution, the architecture and what changed as a result."
      />
      <ProjectsGrid projects={projects} />
    </div>
  );
}
