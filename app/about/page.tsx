import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { about, site } from "@/content/site-data";

export const metadata: Metadata = {
  title: "About",
  description:
    "The career journey of Mano Dharmalingam — from C/AL developer on NAV 2009 to Technical Solutions Architect building AI-assisted ERP engineering practices.",
};

export default function AboutPage() {
  return (
    <div className="container py-16">
      <FadeIn>
        <SectionHeading
          eyebrow="About Me"
          title="From C/AL developer to AI-forward solutions architect"
          subtitle={`${site.title} · ${site.location}`}
        />
      </FadeIn>

      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <FadeIn>
          <div className="space-y-5 text-[15px] leading-relaxed text-muted-foreground">
            {about.story.map((p, i) => (
              <p key={i} className={i === 0 ? "text-foreground" : undefined}>{p}</p>
            ))}
          </div>

          <h3 className="mt-12 font-display text-xl font-semibold">Leadership style</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{about.leadership}</p>
        </FadeIn>

        <div>
          <h3 className="mb-4 font-display text-xl font-semibold">Professional philosophy</h3>
          <Stagger className="space-y-4">
            {about.philosophy.map((p) => (
              <StaggerItem key={p.title}>
                <Card className="card-glow">
                  <CardHeader className="pb-2"><CardTitle className="text-base">{p.title}</CardTitle></CardHeader>
                  <CardContent><p className="text-sm text-muted-foreground">{p.text}</p></CardContent>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </div>
  );
}
