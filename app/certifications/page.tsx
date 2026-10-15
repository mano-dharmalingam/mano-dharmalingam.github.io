import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { certifications, education } from "@/content/site-data";

export const metadata: Metadata = {
  title: "Credentials",
  description:
    "Microsoft AI-901, MB-800 and MB-820 certifications, Anthropic Claude certificates, Microsoft Learn AI badges, and education.",
};

export default function CertificationsPage() {
  return (
    <div className="container py-16 sm:py-20">
      <SectionHeading
        as="h1"
        title="Credentials"
        subtitle="Microsoft-certified on both sides of Business Central, development (MB-820) and functional consulting (MB-800), plus Azure AI and Anthropic credentials."
      />

      {certifications.map((group) => (
        <section key={group.group} className="grid gap-4 border-t border-border py-10 md:grid-cols-12 md:gap-8">
          <h2 className="display text-2xl md:col-span-4">{group.group}</h2>
          <ul className="md:col-span-8">
            {group.items.map((c) => (
              <li key={c.name} className="flex items-baseline justify-between gap-6 border-b border-border py-4 last:border-0">
                <div>
                  <p className="font-medium">{c.name}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">{c.issuer}</p>
                </div>
                <p className="shrink-0 text-sm tabular-nums text-muted-foreground">{c.year}</p>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <section className="grid gap-4 border-t-2 border-foreground py-10 md:grid-cols-12 md:gap-8">
        <h2 className="display text-2xl md:col-span-4">Education</h2>
        <ul className="md:col-span-8">
          {education.map((e) => (
            <li key={e.degree} className="border-b border-border py-5 last:border-0">
              <p className="display text-xl">{e.degree}</p>
              <p className="mt-1 text-[15px] text-foreground/85">{e.school}</p>
              <p className="mt-0.5 text-sm text-muted-foreground">{e.period}</p>
              <p className="mt-2 text-sm text-muted-foreground">{e.note}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
