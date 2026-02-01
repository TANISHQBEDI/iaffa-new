import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { FeaturedFilmsSection } from "@/components/home/featured-films-section"
import { ProgramHighlightsSection } from "@/components/home/program-highlights-section"
import { PrizeCategoriesSection } from "@/components/home/prize-categories-section"
import { ExperienceCinemaSection } from "@/components/home/experience-cinema-section"
import { BePartSection } from "@/components/home/be-part-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeaturedFilmsSection />
      <ProgramHighlightsSection />
      <PrizeCategoriesSection />
      <ExperienceCinemaSection />
      <BePartSection />
      <Footer />
    </main>
  )
}

