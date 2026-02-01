import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-cinema.jpg"
          alt="Cinematic theater interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-eerie-black/70 via-eerie-black/50 to-eerie-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <p className="text-primary tracking-[0.3em] uppercase text-sm mb-6 font-medium">
          November 1-10, 2025
        </p>
        
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-champagne leading-tight text-balance mb-6">
          Arab International Film Festival of Australia
        </h1>
        
        <p className="text-champagne/70 text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Celebrating the richness and diversity of Arab cinema across Sydney and Melbourne
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/membership"
            className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-medium tracking-wide hover:bg-primary/90 transition-colors text-center"
          >
            Become Member
          </Link>
          <Link
            href="/program"
            className="w-full sm:w-auto px-8 py-4 border border-champagne/30 text-champagne font-medium tracking-wide hover:border-primary hover:text-primary transition-colors text-center"
          >
            View Program
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-champagne/40 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary/60 to-transparent" />
      </div>
    </section>
  )
}
