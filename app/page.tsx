import { Hero } from "@/components/sections/hero";
import {
  ExpertiseSection,
  FeaturedProjects,
  HighlightsSection,
  ContactCTA,
} from "@/components/sections/home-sections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <ExpertiseSection />
      <HighlightsSection />
      <ContactCTA />
    </>
  );
}
