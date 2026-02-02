import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/oman.jpg"
          alt="Oman landscape"
          fill
          className="object-cover"
          priority
        />
        <div 
          className="absolute inset-0 border-0"
          style={{ 
            border: 'none',
            boxShadow: 'none',
            background: 'linear-gradient(to bottom, transparent 0%, rgba(18, 18, 18, 0.1) 10%, rgba(18, 18, 18, 0.3) 30%, rgba(18, 18, 18, 0.5) 50%, rgba(18, 18, 18, 0.7) 70%, rgba(18, 18, 18, 1) 100%)'
          }}
        />
      </div>

      {/* Bottom Fade Overlay */}
      <div 
        className="absolute inset-x-0 bottom-0 h-32 pointer-events-none z-20"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(18, 18, 18, 0.2) 20%, rgba(18, 18, 18, 0.5) 50%, rgba(18, 18, 18, 0.8) 80%, #121212 100%)'
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Eyebrow Text */}
        <p className="text-champagne/50 tracking-[0.3em] uppercase text-xs sm:text-sm mb-8 font-medium">
          SYDNEY & MELBOURNE • OCT 12–28, 2026
        </p>
        
        {/* Main Heading */}
        <h1 className="font-libre-baskerville text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-champagne leading-[1.1] mb-8">
          Narrating the <span className="italic" style={{ color: '#C6A85A' }}>Arab</span> Soul in Motion
        </h1>
        
        {/* Subtitle */}
        <p className="text-champagne/70 text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Celebrating the rich tapestry of Arab cinema and culture
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/submissions"
            className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-medium tracking-wide hover:bg-primary/90 transition-colors text-center"
          >
            Submit Film
          </Link>
          <Link
            href="/program"
            className="w-full sm:w-auto px-8 py-4 border border-champagne/30 text-champagne font-medium tracking-wide hover:border-primary hover:text-primary transition-colors text-center"
          >
            View Program
          </Link>
        </div>
      </div>
    </section>
  )
}
