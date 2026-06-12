import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { projects } from "@/content/site-data";

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
      <Stagger className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <StaggerItem key={p.slug}>
            <Link href={`/projects/${p.slug}`} className="block h-full">
              <Card className="card-glow h-full">
                <CardHeader>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline">{p.period}</Badge>
                    {p.featured && <Badge variant="gradient">Featured</Badge>}
                  </div>
                  <CardTitle className="mt-2">{p.title}</CardTitle>
                </CardHeader>
                <CardContent>
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
    </div>
  );
}
