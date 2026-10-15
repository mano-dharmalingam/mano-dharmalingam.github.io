import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { site, seo } from "@/content/site-data";


export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Principal Solution Architect, Dynamics 365`,
    template: `%s · ${site.name}`,
  },
  description: seo.description,
  keywords: seo.keywords,
  authors: [{ name: site.name, url: site.url }],
  openGraph: {
    type: "website",
    url: site.url,
    title: `${site.name} — ${site.title}`,
    description: seo.description,
    siteName: site.name,
    images: [{ url: "/photo.png", width: 1024, height: 1024, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.title}`,
    description: seo.description,
  },
  robots: { index: true, follow: true },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.title,
  worksFor: { "@type": "Organization", name: "GeoDataTek" },
  email: `mailto:${site.email}`,
  url: site.url,
  address: { "@type": "PostalAddress", addressLocality: "Chennai", addressCountry: "IN" },
  sameAs: [site.linkedin, site.github],
  knowsAbout: [
    "Microsoft Dynamics 365 Business Central", "ERP Modernization", "Cloud Migration",
    "Microsoft Dynamics 365 Finance & Operations", "EDI Integration", "AL Programming",
    "Microsoft AppSource", "Azure Integration Services", "AI-Assisted Development",
  ],
  hasCredential: [
    { "@type": "EducationalOccupationalCredential", name: "MB-820: Dynamics 365 Business Central Developer Associate" },
    { "@type": "EducationalOccupationalCredential", name: "MB-800: Dynamics 365 Business Central Functional Consultant" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-sm focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
          >
            Skip to content
          </a>
          <Nav />
          <main id="main">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
