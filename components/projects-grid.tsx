"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import type { Project } from "@/content/site-data";
import { categories, categoryLabel, categoryOf, type CategoryId } from "@/lib/categories";
import { cn } from "@/lib/utils";

type Filter = "all" | CategoryId;

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: projects.length };
    for (const p of projects) c[categoryOf(p)] = (c[categoryOf(p)] ?? 0) + 1;
    return c;
  }, [projects]);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      if (filter !== "all" && categoryOf(p) !== filter) return false;
      if (!q) return true;
      return [p.title, p.summary, ...p.stack].join(" ").toLowerCase().includes(q);
    });
  }, [projects, filter, query]);

  const tabs: { id: Filter; label: string }[] = [{ id: "all", label: "All work" }, ...categories];

  return (
    <div>
      <div className="flex flex-col gap-5 border-b border-border pb-5 lg:flex-row lg:items-end lg:justify-between">
        <div role="group" aria-label="Filter by area" className="-mx-1 flex flex-wrap gap-1">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              aria-pressed={filter === t.id}
              onClick={() => setFilter(t.id)}
              className={cn(
                "rounded-md px-3 py-1.5 text-sm transition-colors",
                filter === t.id
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              {t.label}
              <span className={cn("ml-1.5 tabular-nums", filter === t.id ? "opacity-70" : "opacity-60")}>
                {counts[t.id] ?? 0}
              </span>
            </button>
          ))}
        </div>
        <label className="relative block w-full lg:w-72">
          <span className="sr-only">Search case studies</span>
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name or technology"
            className="h-10 w-full rounded-md border border-border bg-card pl-9 pr-3 text-sm placeholder:text-muted-foreground focus:border-foreground/40 focus:outline-none"
          />
        </label>
      </div>

      <p className="mt-4 text-sm text-muted-foreground" aria-live="polite">
        {visible.length === projects.length
          ? `${projects.length} case studies`
          : `${visible.length} of ${projects.length} case studies`}
      </p>

      {visible.length === 0 ? (
        <div className="mt-10 border-t border-border py-12">
          <p className="display text-2xl">No case studies match “{query}”.</p>
          <p className="mt-2 text-muted-foreground">Try a broader term such as “Azure”, “EDI” or “Power BI”, or clear the filter.</p>
          <button
            type="button"
            className="link mt-4 text-sm"
            onClick={() => {
              setQuery("");
              setFilter("all");
            }}
          >
            Show all work
          </button>
        </div>
      ) : (
        <ul className="mt-4">
          {visible.map((p) => (
            <li key={p.slug} className="group relative grid gap-3 border-t border-border py-7 md:grid-cols-12 md:gap-8">
              <div className="text-sm text-muted-foreground md:col-span-3">
                <p className="text-foreground/80">{categoryLabel(categoryOf(p))}</p>
                <p className="mt-0.5">{p.period}</p>
                {p.featured && <p className="mt-2 inline-flex items-center gap-2"><span className="h-px w-4 bg-accent" aria-hidden />Featured</p>}
              </div>
              <div className="md:col-span-9">
                <h2 className="display text-2xl">
                  <Link
                    href={`/projects/${p.slug}`}
                    className="after:absolute after:inset-0 group-hover:underline group-hover:decoration-accent group-hover:decoration-2 group-hover:underline-offset-4"
                  >
                    {p.title}
                  </Link>
                </h2>
                <p className="mt-2 max-w-3xl text-[15px] leading-relaxed text-muted-foreground">{p.summary}</p>
                <p className="mt-3 text-sm text-muted-foreground">
                  {p.stack.slice(0, 5).join(", ")}
                  {p.stack.length > 5 ? `, and ${p.stack.length - 5} more` : ""}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
