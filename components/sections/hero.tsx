"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { site, stats, certifications, projects } from "@/content/site-data";

const certCount = certifications.reduce((n, g) => n + g.items.length, 0);
const years = stats.find((s) => /year/i.test(s.label));

const facts = [
  { term: "Current role", value: "Principal Solution Architect", note: "GeoDataTek" },
  { term: "Governance", value: "Board of Directors", note: "GeoDataTek" },
  { term: "Experience", value: `${years ? years.value + years.suffix : "10+"} years`, note: "Microsoft Dynamics, NAV to D365" },
  { term: "Track record", value: `${projects.length} case studies`, note: `${certCount} certifications and badges` },
];

const ease = [0.22, 0.61, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) =>
    reduce
      ? {}
      : { initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay, ease } };

  return (
    <section className="border-b border-border">
      <div className="container grid gap-10 pb-14 pt-12 sm:pt-16 lg:grid-cols-12 lg:gap-12 lg:pb-20 lg:pt-20">
        <div className="lg:col-span-7 lg:pt-6">
          <motion.p {...rise(0)} className="text-sm text-muted-foreground">
            Based in Chennai, India
          </motion.p>

          <motion.h1
            {...rise(0.08)}
            className="display mt-5 text-[3.25rem] leading-[0.98] sm:text-7xl lg:text-[5.5rem]"
          >
            Mano
            <br />
            Dharmalingam
          </motion.h1>

          <motion.p {...rise(0.18)} className="mt-6 max-w-xl text-xl leading-snug sm:text-2xl">
            Principal Solution Architect and member of the Board of Directors at GeoDataTek.
          </motion.p>

          <motion.p {...rise(0.26)} className="mt-5 max-w-xl text-[17px] leading-relaxed text-muted-foreground">
            I lead the architecture of Microsoft Dynamics 365 estates, Business Central and Finance &amp;
            Operations, along with the Azure integration and AI work that surrounds them. Ten years of
            upgrades, migrations and integrations, now delivered with an AI-assisted engineering practice.
          </motion.p>

          <motion.div {...rise(0.34)} className="mt-9 flex flex-wrap gap-3">
            <Link href="/projects" className={buttonVariants({ size: "lg" })}>
              View case studies
            </Link>
            <a href={site.resumeFile} download className={buttonVariants({ size: "lg", variant: "outline" })}>
              Download résumé
            </a>
          </motion.div>
        </div>

        <motion.figure
          className="relative lg:col-span-5"
          initial={reduce ? undefined : { clipPath: "inset(100% 0 0 0)" }}
          animate={reduce ? undefined : { clipPath: "inset(0% 0 0 0)" }}
          transition={{ duration: 1.1, delay: 0.15, ease }}
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px] overflow-hidden bg-ink lg:max-w-none">
            <Image
              src={site.photo}
              alt={`Portrait of ${site.name}`}
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover object-[50%_30%]"
            />
          </div>
        </motion.figure>
      </div>

      <div className="border-t border-border bg-card">
        <dl className="container grid grid-cols-2 lg:grid-cols-4">
          {facts.map((f, i) => (
            <div
              key={f.term}
              className={[
                "py-6 pr-4",
                i % 2 === 1 ? "border-l border-border pl-5 lg:pl-6" : "",
                i === 2 ? "border-t border-border lg:border-l lg:border-t-0 lg:pl-6" : "",
                i === 3 ? "border-t border-border lg:border-t-0" : "",
              ].join(" ")}
            >
              <dt className="text-sm text-muted-foreground">{f.term}</dt>
              <dd className="display mt-1.5 text-xl sm:text-2xl">{f.value}</dd>
              <dd className="mt-1 text-sm text-muted-foreground">{f.note}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
