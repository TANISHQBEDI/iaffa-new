import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const announcements = [
  {
    title: "2025 Festival Dates Announced",
    excerpt: "The International Arab Film Festival of Australia returns November 1-10, 2025 across Sydney and Melbourne venues.",
    date: "March 15, 2025",
    image: "/images/hero-cinema.jpg",
  },
  {
    title: "Call for Submissions Now Open",
    excerpt: "Filmmakers are invited to submit their work for consideration. Early bird deadline: March 31, 2025.",
    date: "February 1, 2025",
    image: "/images/film-set.jpg",
  },
  {
    title: "New Venue Partnership",
    excerpt: "We're excited to announce new venue partnerships in Melbourne, expanding our festival footprint.",
    date: "January 20, 2025",
    image: "/images/palace-cinema.jpg",
  },
]

const interviews = [
  {
    title: "In Conversation with Layla Hassan",
    excerpt: "The award-winning director discusses her latest film and the future of Arab cinema.",
    date: "April 10, 2025",
    image: "/images/team-1.jpg",
  },
  {
    title: "Omar Khalil on Documentary Filmmaking",
    excerpt: "Exploring the art of storytelling through real-life narratives.",
    date: "March 28, 2025",
    image: "/images/team-2.jpg",
  },
  {
    title: "Emerging Voices: Sara Mansour",
    excerpt: "A rising talent shares her journey into filmmaking and creative process.",
    date: "March 15, 2025",
    image: "/images/team-3.jpg",
  },
]

const articles = [
  {
    title: "The Evolution of Arab Cinema: A Historical Perspective",
    excerpt: "Tracing the rich history of Arab cinema from its early beginnings to contemporary masterpieces.",
    date: "April 5, 2025",
  },
  {
    title: "Women in Arab Cinema: Breaking Barriers",
    excerpt: "Celebrating the contributions of women filmmakers who are reshaping Arab cinema narratives.",
    date: "March 22, 2025",
  },
  {
    title: "Arab Cinema at International Festivals",
    excerpt: "How Arab films are gaining recognition and acclaim on the global festival circuit.",
    date: "March 8, 2025",
  },
]

const festivalRecaps = [
  {
    title: "2024 Festival Highlights",
    image: "/images/gala-event.jpg",
  },
  {
    title: "Opening Night Gala Recap",
    image: "/images/ceremony-1.jpg",
  },
]

const culturalStories = [
  {
    title: "The Power of Storytelling in Arab Culture",
    excerpt: "Exploring how storytelling traditions have influenced contemporary cinema.",
  },
  {
    title: "Bridging Cultures Through Film",
    excerpt: "How Arab films in Australia create understanding and dialogue between communities.",
  },
  {
    title: "Preserving Heritage Through Cinema",
    excerpt: "The role of film in documenting and preserving Arab cultural heritage.",
  },
]

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/ceremony-1.jpg"
            alt="Film set"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-eerie-black via-eerie-black/90 to-eerie-black" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-champagne mb-6">
            News & Blog
          </h1>
          <p className="text-champagne/70 text-lg max-w-2xl mx-auto">
            Stay updated with festival news, filmmaker stories, and Arab cinema insights
          </p>
        </div>
      </section>

      {/* Festival Announcements */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-champagne mb-10">
            Festival Announcements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {announcements.map((item) => (
              <article key={item.title} className="group cursor-pointer">
                <div className="relative aspect-video overflow-hidden mb-4">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-eerie-black/60 to-transparent" />
                </div>
                <p className="text-primary text-sm mb-2">{item.date}</p>
                <h3 className="font-serif text-xl font-semibold text-champagne mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-champagne/60 text-sm mb-4 line-clamp-2">{item.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Filmmaker Interviews */}
      <section className="py-24 bg-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-champagne mb-10">
            Filmmaker Interviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {interviews.map((item) => (
              <article key={item.title} className="group cursor-pointer glass-card p-6">
                <div className="relative w-20 h-20 rounded-full overflow-hidden mx-auto mb-6 border-2 border-primary/30">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-primary text-sm text-center mb-2">{item.date}</p>
                <h3 className="font-serif text-xl font-semibold text-champagne text-center mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-champagne/60 text-sm text-center">{item.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Arab Cinema Articles */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-champagne mb-10">
            Arab Cinema Articles
          </h2>
          <div className="space-y-6">
            {articles.map((item) => (
              <article key={item.title} className="group cursor-pointer glass-card p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-serif text-lg font-semibold text-champagne mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-champagne/60 text-sm">{item.excerpt}</p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-champagne/40 text-sm whitespace-nowrap">{item.date}</p>
                  <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Festival Recaps & Cultural Stories */}
      <section className="py-24 bg-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Festival Recaps */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-champagne mb-8">
                Festival Recaps
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {festivalRecaps.map((item) => (
                  <article key={item.title} className="group cursor-pointer">
                    <div className="relative aspect-video overflow-hidden mb-3">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-eerie-black/30 group-hover:bg-eerie-black/10 transition-colors" />
                    </div>
                    <h3 className="font-serif text-sm font-semibold text-champagne group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                  </article>
                ))}
              </div>
            </div>

            {/* Cultural Stories */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-champagne mb-8">
                Cultural Stories
              </h2>
              <div className="space-y-4">
                {culturalStories.map((item) => (
                  <article key={item.title} className="group cursor-pointer glass-card p-5">
                    <h3 className="font-serif text-base font-semibold text-champagne mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-champagne/60 text-sm">{item.excerpt}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ceremony Photos & Videos */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-champagne mb-4">
              Ceremony Photos & Videos
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="relative aspect-video overflow-hidden group cursor-pointer">
                <Image
                  src="/images/ceremony-1.jpg"
                  alt={`2024 Awards Ceremony ${i}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-eerie-black/40 group-hover:bg-eerie-black/20 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-secondary">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-champagne/70 mb-6">
              Stay updated with our latest news and announcements
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-eerie-black/50 border border-primary/20 px-4 py-3 text-champagne placeholder-champagne/30 focus:border-primary focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-primary text-primary-foreground font-medium tracking-wide hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
