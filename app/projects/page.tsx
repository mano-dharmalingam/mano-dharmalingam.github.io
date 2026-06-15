import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { FadeIn } from "@/components/motion";
import { projects } from "@/content/site-data";
import { ProjectsGrid } from "@/components/projects-grid";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies: NAV to Business Central modernization, cloud implementations, EDI/API integrations, AppSource apps with CI/CD, process automation, and AI development tooling.",
};

export default function ProjectsPage() {
  return (
    <div className="container py-16">
      <FadeIn>
        <SectionHeading
          eyebrow="Projects"
          title="Case studies"
          subtitle="Challenge → solution → architecture → outcome. Every project below shipped to production."
        />
      </FadeIn>
      <ProjectsGrid projects={projects} />
    </div>
  );
}
