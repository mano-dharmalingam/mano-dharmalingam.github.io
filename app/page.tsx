import { Hero } from "@/components/sections/hero";
import {
  StatsSection,
  ExpertiseSection,
  FeaturedProjects,
  HighlightsSection,
  ContactCTA,
} from "@/components/sections/home-sections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <ExpertiseSection />
      <FeaturedProjects />
      <HighlightsSection />
      <ContactCTA />
    </>
  );
}
