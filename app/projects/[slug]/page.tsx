import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "@/components/motion";
import { projects } from "@/content/site-data";

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

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="container max-w-4xl py-16">
      <FadeIn>
        <Link
          href="/projects"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> All projects
        </Link>

        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="outline">{project.period}</Badge>
          {project.featured && <Badge variant="gradient">Featured</Badge>}
        </div>
        <h1 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">{project.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{project.summary}</p>
      </FadeIn>

      <div className="mt-12 space-y-8">
        <FadeIn>
          <Card>
            <CardHeader><CardTitle>The Challenge</CardTitle></CardHeader>
            <CardContent><p className="text-muted-foreground">{project.challenge}</p></CardContent>
          </Card>
        </FadeIn>

        <FadeIn>
          <Card>
            <CardHeader><CardTitle>The Solution</CardTitle></CardHeader>
            <CardContent>
              <ul className="space-y-2.5">
                {project.solution.map((s, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                    {s}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </FadeIn>

        <FadeIn>
          <Card>
            <CardHeader><CardTitle>Architecture</CardTitle></CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{project.architecture}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((t) => <Badge key={t}>{t}</Badge>)}
              </div>
            </CardContent>
          </Card>
        </FadeIn>

        <FadeIn>
          <Card>
            <CardHeader><CardTitle>Outcomes</CardTitle></CardHeader>
            <CardContent>
              <ul className="space-y-2.5">
                {project.outcomes.map((o, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                    {o}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </FadeIn>

        <FadeIn>
          <Card className="border-primary/30">
            <CardHeader><CardTitle>Lessons Learned</CardTitle></CardHeader>
            <CardContent><p className="text-muted-foreground">{project.lessons}</p></CardContent>
          </Card>
        </FadeIn>
      </div>
    </div>
  );
}
