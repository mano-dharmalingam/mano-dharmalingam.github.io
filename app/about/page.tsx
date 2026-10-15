import type { Metadata } from "next";
import Image from "next/image";
import { about, site } from "@/content/site-data";

export const metadata: Metadata = {
  title: "About",
  description:
    "The career journey of Mano Dharmalingam — from C/AL developer on NAV 2009 to Principal Solution Architect building AI-assisted ERP engineering practices.",
};

export default function AboutPage() {
  const [lead, ...story] = about.story;
  return (
    <div className="container py-16 sm:py-20">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <span className="rule-mark mb-5" aria-hidden />
          <h1 className="display text-4xl sm:text-5xl">About</h1>
          <p className="display mt-8 max-w-3xl text-2xl leading-snug sm:text-[1.75rem]">{lead}</p>
          <div className="prose-body mt-8 space-y-6 text-foreground/85">
            {story.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <h2 className="display mt-16 text-3xl">How I lead</h2>
          <p className="prose-body mt-4 text-foreground/85">{about.leadership}</p>
        </div>

        <aside className="lg:col-span-4">
          <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden bg-ink">
            <Image src={site.photo} alt={`Portrait of ${site.name}`} fill sizes="(min-width: 1024px) 30vw, 90vw" className="object-cover object-[50%_30%]" />
          </div>
          <p className="mt-3 text-sm text-muted-foreground">{site.title}, GeoDataTek. {site.location}.</p>
        </aside>
      </div>

      <section className="mt-20 border-t-2 border-foreground pt-10">
        <h2 className="display text-3xl">Principles I work by</h2>
        <dl className="mt-8 grid gap-x-12 md:grid-cols-2">
          {about.philosophy.map((p) => (
            <div key={p.title} className="border-t border-border py-6">
              <dt className="display text-xl">{p.title}</dt>
              <dd className="mt-2 max-w-xl text-[15px] leading-relaxed text-muted-foreground">{p.text}</dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}
