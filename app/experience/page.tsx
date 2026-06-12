import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/motion";
import { experience } from "@/content/site-data";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "10+ years in the Microsoft Dynamics ecosystem: GeoDataTek (Technical Solutions Architect, ERP/EDI Tech Lead), Solia Technology Services, and Jean Martin Systems.",
};

export default function ExperiencePage() {
  return (
    <div className="container py-16">
      <FadeIn>
        <SectionHeading
          eyebrow="Experience"
          title="Career timeline"
          subtitle="A clear progression: developer → techno-functional consultant → tech lead → solutions architect."
        />
      </FadeIn>

      <div className="relative ml-3 border-l border-border pl-8">
        {experience.map((company, ci) => (
          <FadeIn key={company.company} delay={ci * 0.06} className="relative pb-14 last:pb-0">
            <span className="absolute -left-[2.34rem] top-1 h-3 w-3 rounded-full bg-brand-gradient ring-4 ring-background" aria-hidden />
            <h2 className="font-display text-2xl font-bold">{company.company}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{company.location}</p>

            <div className="mt-6 space-y-8">
              {company.roles.map((role) => (
                <div key={role.title} className="rounded-xl border bg-card p-6 card-glow">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold">{role.title}</h3>
                    <Badge variant="outline">{role.period}</Badge>
                  </div>
                  <ul className="mt-4 space-y-2.5">
                    {role.points.map((pt, i) => (
                      <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
