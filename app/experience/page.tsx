import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { experience } from "@/content/site-data";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "10+ years in the Microsoft Dynamics ecosystem: GeoDataTek (Principal Solution Architect, Technical Solutions Architect, ERP/EDI Tech Lead), Solia Technology Services, and Jean Martin Systems.",
};

export default function ExperiencePage() {
  return (
    <div className="container py-16 sm:py-20">
      <SectionHeading
        as="h1"
        title="Experience"
        subtitle="From C/AL developer to principal architect and board member: ten years in the Microsoft Dynamics ecosystem, most recent first."
      />

      <ol>
        {experience.map((company) => (
          <li key={company.company} className="grid gap-6 border-t-2 border-foreground py-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <h2 className="display text-3xl">{company.company}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{company.location}</p>
            </div>
            <div className="lg:col-span-8">
              {company.roles.map((role, ri) => (
                <section key={role.title} className={ri > 0 ? "mt-10 border-t border-border pt-10" : ""}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                    <h3 className="display text-2xl">{role.title}</h3>
                    <p className="text-sm tabular-nums text-muted-foreground">{role.period}</p>
                  </div>
                  <ul className="mt-5 space-y-3">
                    {role.points.map((pt, i) => (
                      <li key={i} className="flex gap-4 text-[15px] leading-relaxed text-foreground/85">
                        <span className="mt-[0.75em] h-px w-4 shrink-0 bg-accent" aria-hidden />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
