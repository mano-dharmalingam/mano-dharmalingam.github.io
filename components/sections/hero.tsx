"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { site } from "@/content/site-data";

const badges = ["MB-820 Certified", "MB-800 Certified", "AppSource Publisher", "Anthropic Claude Certified"];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(15,108,189,0.07),transparent_55%)]"
      />
      <div className="container relative grid gap-12 py-20 sm:py-28 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary"
          >
            Technical Solutions Architect · Microsoft Dynamics 365 Business Central
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            I modernize ERP systems — from legacy NAV to{" "}
            <span className="text-gradient">AI-accelerated Business Central</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground"
          >
            {site.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link href="/projects">
              <Button size="lg">
                View My Work <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Work With Me
              </Button>
            </Link>
            <a href={site.resumeFile} download>
              <Button size="lg" variant="ghost">
                <Download className="h-4 w-4" /> Resume
              </Button>
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-2"
          >
            {badges.map((b) => (
              <Badge key={b} variant="outline">{b}</Badge>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto hidden max-w-sm lg:block"
        >
          <div className="absolute -inset-4 rounded-full bg-brand-gradient opacity-20 blur-2xl" aria-hidden />
          <Image
            src={site.photo}
            alt={`${site.name} — ${site.title}`}
            width={420}
            height={420}
            priority
            className="relative rounded-full border border-border/60 shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
