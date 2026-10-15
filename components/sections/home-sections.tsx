import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { pillars, highlights, projects, certifications, site } from "@/content/site-data";
import type { Project } from "@/content/site-data";
import { categoryLabel, categoryOf } from "@/lib/categories";

/* Order matters: the first entry is the lead story on the home page. */
const SELECTED = [
  "d365-sentinel",
  "ai-customer-support-assistant",
  "nav-to-bc-modernization",
  "sg-fno-integration",
  "sg-edi-integration",
  "ai-development-tooling",
  "sg-inventory-reservation",
];

function selected(): Project[] {
  const bySlug = new Map(projects.map((p) => [p.slug, p]));
  const picked = SELECTED.map((s) => bySlug.get(s)).filter(Boolean) as Project[];
  return picked.length ? picked : projects.filter((p) => p.featured);
}

function ProjectMeta({ p }: { p: Project }) {
  return (
    <p className="text-sm text-muted-foreground">
      <span className="text-foreground/80">{categoryLabel(categoryOf(p))}</span>
      <span className="mx-2 inline-block h-3 w-px translate-y-0.5 bg-border" aria-hidden />
      {p.period}
    </p>
  );
}

export function FeaturedProjects() {
  const [lead, ...rest] = selected();
  return (
    <section className="py-20 sm:py-24">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            className="mb-0"
            title="Selected work"
            subtitle="Programs I have architected and led, from ERP modernization to AI platforms. Each links to a full case study."
          />
          <Link href="/projects" className="link text-sm">
            See all {projects.length} case studies
          </Link>
        </div>

        {lead && (
          <article className="group relative mt-14 grid gap-8 border-t-2 border-foreground pt-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <ProjectMeta p={lead} />
              <h3 className="display mt-3 text-3xl sm:text-[2.6rem]">
                <Link href={`/projects/${lead.slug}`} className="after:absolute after:inset-0 group-hover:underline group-hover:decoration-accent group-hover:decoration-2 group-hover:underline-offset-[6px]">
                  {lead.title}
                </Link>
              </h3>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{lead.summary}</p>
            </div>
            <div className="lg:col-span-5 lg:border-l lg:border-border lg:pl-8">
              <p className="text-sm font-medium">What it delivered</p>
              <ul className="mt-3 space-y-3">
                {lead.outcomes.map((o) => (
                  <li key={o} className="flex gap-3 text-[15px] leading-relaxed">
                    <span className="mt-[0.7em] h-px w-4 shrink-0 bg-accent" aria-hidden />
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        )}

        <div className="mt-14 grid gap-x-12 md:grid-cols-2">
          {rest.map((p) => (
            <article key={p.slug} className="group relative border-t border-border py-7">
              <ProjectMeta p={p} />
              <h3 className="display mt-2 text-2xl">
                <Link href={`/projects/${p.slug}`} className="after:absolute after:inset-0 group-hover:underline group-hover:decoration-accent group-hover:decoration-2 group-hover:underline-offset-4">
                  {p.title}
                </Link>
              </h3>
              <p className="mt-3 line-clamp-3 text-[15px] leading-relaxed text-muted-foreground">{p.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ExpertiseSection() {
  return (
    <section className="border-t border-border bg-card py-20 sm:py-24">
      <div className="container grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading
            className="mb-0 lg:sticky lg:top-28"
            title="What I am accountable for"
            subtitle="The disciplines I own end to end, from architecture decisions to production."
          />
        </div>
        <dl className="grid gap-x-10 sm:grid-cols-2 lg:col-span-8">
          {pillars.map((p) => (
            <div key={p.title} className="border-t border-border py-6">
              <dt className="display text-xl">{p.title}</dt>
              <dd className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{p.desc}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function HighlightsSection() {
  const ms = certifications.find((g) => /microsoft certified/i.test(g.group));
  return (
    <section className="border-t border-border py-20 sm:py-24">
      <div className="container grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <SectionHeading className="mb-8" title="Career at a glance" />
          <ol>
            {highlights.map((h, i) => (
              <li key={i} className="grid grid-cols-[5.5rem_1fr] gap-4 border-t border-border py-4 sm:grid-cols-[7rem_1fr]">
                <span className="display text-lg tabular-nums">{h.year}</span>
                <span className="text-[15px] leading-relaxed text-muted-foreground">{h.text}</span>
              </li>
            ))}
          </ol>
          <Link href="/experience" className="link mt-6 inline-block text-sm">
            Full experience
          </Link>
        </div>

        <div className="lg:col-span-5">
          <SectionHeading className="mb-8" title="Credentials" />
          {ms && (
            <ul>
              {ms.items.map((c) => (
                <li key={c.name} className="border-t border-border py-4">
                  <p className="font-medium">{c.name}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">{c.issuer}, {c.year}</p>
                </li>
              ))}
            </ul>
          )}
          <Link href="/certifications" className="link mt-6 inline-block text-sm">
            All certifications and education
          </Link>
        </div>
      </div>
    </section>
  );
}

export function ContactCTA() {
  return (
    <section className="bg-ink text-ink-foreground">
      <div className="container grid gap-10 py-20 sm:py-24 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <span className="rule-mark mb-6" aria-hidden />
          <h2 className="display text-4xl sm:text-5xl">
            Planning a Dynamics 365 program, or an AI initiative around one?
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-foreground/75">
            I am glad to talk through architecture, migration paths and delivery approach with leadership teams.
          </p>
        </div>
        <div className="flex flex-col items-start gap-4 lg:col-span-4 lg:items-end">
          <Link href="/contact" className={buttonVariants({ size: "lg", variant: "inverse" })}>
            Get in touch
          </Link>
          <a href={`mailto:${site.email}`} className="text-sm text-ink-foreground/75 underline underline-offset-4 hover:text-ink-foreground">
            {site.email}
          </a>
        </div>
      </div>
    </section>
  );
}

/* Kept for compatibility; the hero now carries the key figures. */
export function StatsSection() {
  return null;
}
