import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/content/site-data";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {site.name} · {site.title}
        </p>
        <div className="flex items-center gap-4">
          <a href={`mailto:${site.email}`} aria-label="Email" className="text-muted-foreground hover:text-foreground">
            <Mail className="h-5 w-5" />
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-foreground">
            <Github className="h-5 w-5" />
          </a>
          <Link href="/contact" className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline">
            Get in touch
          </Link>
        </div>
      </div>
    </footer>
  );
}
