import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { skillGroups } from "@/content/site-data";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Skill matrix: AL/C/AL, Business Central, NAV, EDI and API integration, Azure DevOps CI/CD, AppSource publishing, AI-assisted development, and technical leadership.",
};

const levelStyle: Record<string, string> = {
  Expert: "bg-brand-gradient text-white border-transparent",
  Advanced: "bg-primary/10 text-primary border-transparent",
  Intermediate: "border-border text-muted-foreground",
  "Business & Leadership": "bg-accent/10 text-accent border-transparent",
};

export default function SkillsPage() {
  return (
    <div className="container py-16">
      <FadeIn>
        <SectionHeading
          eyebrow="Skills"
          title="Technical depth, business range"
          subtitle="Proficiency levels reflect production experience, not course completion."
        />
      </FadeIn>
      <Stagger className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((g) => (
          <StaggerItem key={g.level}>
            <Card className="card-glow h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  {g.level}
                  <span className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${levelStyle[g.level]}`}>
                    {g.skills.length} skills
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <Badge key={s} variant={g.level === "Expert" ? "gradient" : g.level === "Advanced" ? "default" : "outline"}>
                      {s}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}
