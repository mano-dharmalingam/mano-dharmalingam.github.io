"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site-data";

const field =
  "w-full rounded-md border border-border bg-card px-4 py-3 text-[15px] focus:border-foreground/40 focus:outline-none";

export default function ContactPage() {
  const [form, setForm] = React.useState({ name: "", email: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Website inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  const channels = [
    { label: "Email", value: site.email, href: `mailto:${site.email}` },
    { label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
    { label: "LinkedIn", value: "mano-dharmalingam", href: site.linkedin },
    { label: "GitHub", value: "mano-dharmalingam", href: site.github },
  ];

  return (
    <div className="container py-16 sm:py-20">
      <div className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <span className="rule-mark mb-5" aria-hidden />
          <h1 className="display text-4xl sm:text-5xl">Contact</h1>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-muted-foreground">
            For Dynamics 365 programs, architecture reviews, AI initiatives or senior roles. I usually reply within a day.
          </p>

          <dl className="mt-10">
            {channels.map((c) => (
              <div key={c.label} className="grid grid-cols-[6rem_1fr] gap-4 border-t border-border py-4">
                <dt className="text-sm text-muted-foreground">{c.label}</dt>
                <dd>
                  <a
                    href={c.href}
                    className="link break-all"
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {c.value}
                  </a>
                </dd>
              </div>
            ))}
            <div className="grid grid-cols-[6rem_1fr] gap-4 border-y border-border py-4">
              <dt className="text-sm text-muted-foreground">Location</dt>
              <dd className="text-foreground/85">{site.location}. Open to remote and onsite work (B1 US visa).</dd>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="border border-border bg-card p-6 sm:p-8">
            <h2 className="display text-2xl">Send a message</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium">Your name</label>
                <input id="name" required autoComplete="name" value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })} className={field} />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">Your email</label>
                <input id="email" type="email" required autoComplete="email" value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })} className={field} />
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium">Message</label>
              <textarea id="message" required rows={7} value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })} className={field} />
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Button type="submit" size="lg">Send message</Button>
              <p className="text-sm text-muted-foreground">Opens a new email in your mail app.</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
