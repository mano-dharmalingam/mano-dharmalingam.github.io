export const dynamic = "force-static";

import type { MetadataRoute } from "next";
import { projects, site } from "@/content/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/experience", "/projects", "/skills", "/certifications", "/resume", "/contact"];
  return [
    ...pages.map((p) => ({
      url: `${site.url}${p}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: p === "" ? 1 : 0.8,
    })),
    ...projects.map((p) => ({
      url: `${site.url}/projects/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
