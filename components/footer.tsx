import Link from "next/link";
import { site } from "@/content/site-data";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container grid gap-8 py-12 sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <p className="display text-2xl">{site.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {site.title}, GeoDataTek. Based in {site.location}.
          </p>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <li><a className="link" href={`mailto:${site.email}`}>Email</a></li>
          <li><a className="link" href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a className="link" href={site.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><Link className="link" href="/resume">Résumé</Link></li>
        </ul>
      </div>
      <div className="container pb-8 text-xs text-muted-foreground">
        © {new Date().getFullYear()} {site.name}
      </div>
    </footer>
  );
}
