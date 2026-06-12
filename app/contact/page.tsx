"use client";

import * as React from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/motion";
import { site } from "@/content/site-data";

export default function ContactPage() {
  const [form, setForm] = React.useState({ name: "", email: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Website inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  const channels = [
    { icon: Mail, label: site.email, href: `mailto:${site.email}` },
    { icon: Phone, label: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
    { icon: Linkedin, label: "LinkedIn", href: site.linkedin },
    { icon: Github, label: "GitHub", href: site.github },
  ];

  return (
    <div className="container py-16">
      <FadeIn>
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk"
          subtitle="Hiring for a senior Business Central role, or planning an ERP upgrade, migration, or integration project — I usually respond within a day."
        />
      </FadeIn>

      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <FadeIn>
          <div className="space-y-4">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border bg-card p-4 card-glow"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-gradient text-white">
                  <c.icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium">{c.label}</span>
              </a>
            ))}
            <div className="flex items-center gap-4 rounded-xl border bg-card p-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                <MapPin className="h-5 w-5 text-muted-foreground" />
              </span>
              <span className="text-sm text-muted-foreground">{site.location} · Open to remote & onsite (B1 US visa)</span>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium">Name</label>
                  <input
                    id="name" required value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium">Email</label>
                  <input
                    id="email" type="email" required value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium">Message</label>
                  <textarea
                    id="message" required rows={6} value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  <Send className="h-4 w-4" /> Send message
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  Opens your email client. (Swap in Formspree/Resend for a hosted form — see README.)
                </p>
              </form>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </div>
  );
}
