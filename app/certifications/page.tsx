import type { Metadata } from "next";
import { Award, BadgeCheck, GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { certifications, education } from "@/content/site-data";

export const metadata: Metadata = {
  title: "Certifications",
  description:
    "Microsoft MB-800 and MB-820 certifications, Anthropic Claude certificates, Microsoft Learn AI badges, and education.",
};

export default function CertificationsPage() {
  return (
    <div className="container py-16">
      <FadeIn>
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications & education"
          subtitle="Microsoft-certified on both sides of Business Central — development (MB-820) and functional consulting (MB-800) — plus a verified AI credential stack."
        />
      </FadeIn>

      <div className="space-y-10">
        {certifications.map((group) => (
          <FadeIn key={group.group}>
            <h2 className="mb-4 flex items-center gap-2 font-display text-xl font-semibold">
              <BadgeCheck className="h-5 w-5 text-primary" /> {group.group}
            </h2>
            <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((c) => (
                <StaggerItem key={c.name}>
                  <Card className="card-glow h-full">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-[15px]">{c.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{c.issuer}</span>
                      <Badge variant="outline">{c.year}</Badge>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </Stagger>
          </FadeIn>
        ))}

        <FadeIn>
          <h2 className="mb-4 flex items-center gap-2 font-display text-xl font-semibold">
            <GraduationCap className="h-5 w-5 text-primary" /> Education
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {education.map((e) => (
              <Card key={e.degree} className="card-glow">
                <CardHeader className="pb-2"><CardTitle className="text-[15px]">{e.degree}</CardTitle></CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{e.school}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{e.period}</p>
                  <p className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
                    <Award className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden /> {e.note}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
