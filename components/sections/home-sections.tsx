"use client";

import Link from "next/link";
import { ArrowRight, Cloud, Database, Network, Package, Sparkles, Workflow } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { FadeIn, Stagger, StaggerItem, Counter } from "@/components/motion";
import { stats, pillars, highlights, projects, site } from "@/content/site-data";

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  Database, Cloud, Network, Workflow, Sparkles, Package,
};

export function StatsSection() {
  return (
    <section className="border-y border-border/60 bg-muted/30">
      <div className="container grid grid-cols-2 gap-8 py-12 sm:grid-cols-3 lg:grid-cols-5">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-display text-3xl font-bold text-gradient sm:text-4xl">
              <Counter value={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ExpertiseSection() {
  return (
    <section className="container py-20">
      <FadeIn>
        <SectionHeading
          eyebrow="Featured Expertise"
          title="Where ERP, cloud, and AI intersect"
          subtitle="Six disciplines, one practice: turning legacy ERP estates into scalable, integrated, AI-accelerated business platforms."
        />
      </FadeIn>
      <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {pillars.map((p) => {
          const Icon = icons[p.icon];
          return (
            <StaggerItem key={p.title}>
              <Card className="card-glow h-full">
                <CardHeader>
                  <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-gradient text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle>{p.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </CardContent>
              </Card>
            </StaggerItem>
          );
        })}
      </Stagger>
    </section>
  );
}

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);
  return (
    <section className="border-t border-border/60 bg-muted/20 py-20">
      <div className="container">
        <FadeIn>
          <SectionHeading
            eyebrow="Featured Projects"
            title="Case studies with measurable impact"
          />
        </FadeIn>
        <Stagger className="grid gap-6 lg:grid-cols-3">
          {featured.map((p) => (
            <StaggerItem key={p.slug}>
              <Link href={`/projects/${p.slug}`} className="block h-full">
                <Card className="card-glow h-full">
                  <CardHeader>
                    <Badge className="mb-2 w-fit" variant="outline">{p.period}</Badge>
                    <CardTitle>{p.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex h-full flex-col">
                    <p className="text-sm text-muted-foreground">{p.summary}</p>
                    <p className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                      Read case study <ArrowRight className="h-3.5 w-3.5" />
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
        <FadeIn className="mt-10 text-center">
          <Link href="/projects">
            <Button variant="outline">All projects <ArrowRight className="h-4 w-4" /></Button>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

export function HighlightsSection() {
  return (
    <section className="container py-20">
      <FadeIn>
        <SectionHeading eyebrow="Career Highlights" title="A decade in the Dynamics ecosystem" />
      </FadeIn>
      <div className="relative ml-3 border-l border-border pl-8">
        {highlights.map((h, i) => (
          <FadeIn key={h.year} delay={i * 0.05} className="relative pb-10 last:pb-0">
            <span className="absolute -left-[2.34rem] top-1 h-3 w-3 rounded-full bg-brand-gradient ring-4 ring-background" aria-hidden />
            <p className="font-display text-sm font-bold text-primary">{h.year}</p>
            <p className="mt-1 text-muted-foreground">{h.text}</p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

export function ContactCTA() {
  return (
    <section className="border-t border-border/60">
      <div className="container py-20 text-center">
        <FadeIn>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s modernize your <span className="text-gradient">ERP</span>.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Hiring a senior Business Central architect, or planning an upgrade, migration, or
            integration project? I&apos;d like to hear about it.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact"><Button size="lg">Get in touch <ArrowRight className="h-4 w-4" /></Button></Link>
            <a href={`mailto:${site.email}`}><Button size="lg" variant="outline">{site.email}</Button></a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
