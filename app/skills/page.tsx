import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { skillGroups } from "@/content/site-data";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Skill matrix: AL/C/AL, Business Central, NAV, EDI and API integration, Azure DevOps CI/CD, AppSource publishing, AI-assisted development, and technical leadership.",
};

export default function SkillsPage() {
  return (
    <div className="container py-16 sm:py-20">
      <SectionHeading
        as="h1"
        title="Skills"
        subtitle="Grouped by depth. Levels reflect production work I have delivered, not courses completed."
      />
      <div>
        {skillGroups.map((g) => (
          <section key={g.level} className="grid gap-4 border-t border-border py-8 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-3">
              <h2 className="display text-2xl">{g.level}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{g.skills.length} skills</p>
            </div>
            <ul className="flex flex-wrap gap-2 md:col-span-9">
              {g.skills.map((s) => (
                <li key={s} className="rounded-sm border border-border bg-card px-3 py-1.5 text-sm">
                  {s}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
