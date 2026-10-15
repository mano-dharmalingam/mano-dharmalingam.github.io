import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/content/site-data";
import { categoryLabel, categoryOf } from "@/lib/categories";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-border py-10 first:border-t-0">
      <h2 className="display text-2xl sm:text-[1.75rem]">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const project = projects[index];
  const prev = projects[index - 1];
  const next = projects[index + 1];
  const hasModules = !!project.modules?.length;

  const toc = [
    { id: "challenge", label: "The challenge" },
    { id: "solution", label: "What was built" },
    { id: "architecture", label: "Architecture" },
    { id: "outcomes", label: "Outcomes" },
    ...(hasModules ? [{ id: "modules", label: "Functional modules" }] : []),
    { id: "lessons", label: "Lessons" },
  ];

  return (
    <article>
      <header className="border-b border-border">
        <div className="container py-12 sm:py-16">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" aria-hidden /> All work
          </Link>
          <p className="mt-8 text-sm text-muted-foreground">
            <span className="text-foreground/80">{categoryLabel(categoryOf(project))}</span>
            <span className="mx-2 inline-block h-3 w-px translate-y-0.5 bg-border" aria-hidden />
            {project.period}
          </p>
          <h1 className="display mt-3 max-w-4xl text-4xl sm:text-5xl lg:text-[3.5rem]">{project.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">{project.summary}</p>
        </div>
      </header>

      <div className="container grid gap-10 py-6 lg:grid-cols-12 lg:gap-12">
        <aside className="lg:col-span-3">
          <div className="lg:sticky lg:top-24 lg:py-10">
            <nav aria-label="On this page" className="hidden lg:block">
              <p className="text-sm font-medium">On this page</p>
              <ul className="mt-3 space-y-2 text-sm">
                {toc.map((t) => (
                  <li key={t.id}>
                    <a href={`#${t.id}`} className="text-muted-foreground hover:text-foreground">{t.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="pt-6 lg:mt-8 lg:border-t lg:border-border">
              <p className="text-sm font-medium">Technology</p>
              <ul className="mt-3 flex flex-wrap gap-1.5 lg:block lg:space-y-1.5">
                {project.stack.map((t) => (
                  <li key={t} className="rounded-sm bg-muted px-2 py-1 text-sm text-foreground/80 lg:bg-transparent lg:p-0 lg:text-muted-foreground">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        <div className="lg:col-span-9">
          <Section id="challenge" title="The challenge">
            <p className="prose-body text-foreground/85">{project.challenge}</p>
          </Section>

          <Section id="solution" title="What was built">
            <ul className="prose-body space-y-4">
              {project.solution.map((s, i) => (
                <li key={i} className="flex gap-4 text-foreground/85">
                  <span className="mt-[0.8em] h-px w-4 shrink-0 bg-accent" aria-hidden />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="architecture" title="Architecture">
            <p className="prose-body text-foreground/85">{project.architecture}</p>
          </Section>

          <Section id="outcomes" title="Outcomes">
            <ul className="max-w-3xl border-l-2 border-accent bg-card">
              {project.outcomes.map((o, i) => (
                <li key={i} className="border-b border-border px-6 py-4 text-[16px] leading-relaxed last:border-0">
                  {o}
                </li>
              ))}
            </ul>
          </Section>

          {hasModules && (
            <Section id="modules" title={`Functional modules (${project.modules!.length})`}>
              <dl className="grid gap-x-10 sm:grid-cols-2">
                {project.modules!.map((m, i) => (
                  <div key={i} className="border-t border-border py-5 first:border-t-0 sm:[&:nth-child(2)]:border-t-0">
                    <dt className="font-medium">{m.name}</dt>
                    <dd className="mt-1.5 text-[15px] leading-relaxed text-muted-foreground">{m.description}</dd>
                    <dd className="mt-2 font-mono text-xs text-muted-foreground">{m.objects}</dd>
                  </div>
                ))}
              </dl>
            </Section>
          )}

          <Section id="lessons" title="Lessons">
            <blockquote className="border-l-2 border-accent pl-6">
              <p className="display max-w-3xl text-xl italic leading-snug sm:text-2xl">{project.lessons}</p>
            </blockquote>
          </Section>

          <nav aria-label="More case studies" className="grid gap-px border-t border-border sm:grid-cols-2">
            {prev ? (
              <Link href={`/projects/${prev.slug}`} className="group py-8 pr-6">
                <span className="text-sm text-muted-foreground">Previous</span>
                <span className="display mt-1 block text-xl group-hover:underline group-hover:decoration-accent">{prev.title}</span>
              </Link>
            ) : <span />}
            {next && (
              <Link href={`/projects/${next.slug}`} className="group py-8 sm:pl-6 sm:text-right">
                <span className="text-sm text-muted-foreground">Next</span>
                <span className="display mt-1 block text-xl group-hover:underline group-hover:decoration-accent">{next.title}</span>
              </Link>
            )}
          </nav>
        </div>
      </div>
    </article>
  );
}
