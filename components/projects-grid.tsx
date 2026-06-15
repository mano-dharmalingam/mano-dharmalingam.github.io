"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Stagger, StaggerItem } from "@/components/motion";
import type { Project } from "@/content/site-data";

const PER_PAGE = 6;

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(projects.length / PER_PAGE);
  const start = (page - 1) * PER_PAGE;
  const visible = projects.slice(start, start + PER_PAGE);

  function goTo(next: number) {
    setPage(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div>
      <Stagger className="grid gap-6 md:grid-cols-2" key={page}>
        {visible.map((p) => (
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

      {totalPages > 1 && (
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button
            variant="outline"
            size="sm"
            onClick={() => goTo(Math.max(1, page - 1))}
            disabled={page === 1}
          >
            <ChevronLeft className="mr-1 h-4 w-4" /> Previous
          </Button>

          <div className="flex items-center gap-1.5">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                onClick={() => goTo(n)}
                aria-label={`Page ${n}`}
                className={`h-8 w-8 rounded-md text-sm font-medium transition-colors ${
                  n === page
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {n}
              </button>
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => goTo(Math.min(totalPages, page + 1))}
            disabled={page === totalPages}
          >
            Next <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      )}

      <p className="mt-4 text-center text-xs text-muted-foreground">
        Showing {start + 1}–{Math.min(start + PER_PAGE, projects.length)} of {projects.length} projects
      </p>
    </div>
  );
}
