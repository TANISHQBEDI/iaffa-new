import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Calendar, MapPin, Download } from "lucide-react"

const programCards = [
  {
    title: "Workshops",
    description: "Our workshops are designed to nurture creativity, technical skills, and storytelling abilities in filmmakers at all stages of their careers. From screenwriting and directing to cinematography and post-production, participants gain hands-on experience led by seasoned industry professionals.",
  },
  {
    title: "Mentorship and Training Programs",
    description: "IAFFA mentorship programs pair emerging talent with established filmmakers, producers, and industry experts. These one on one or small group sessions provide guidance on career development, project strategy, and navigating the global film industry.",
  },
  {
    title: "Talent Exchange",
    description: "Through our talent exchange initiatives, the festival facilitates collaboration between Arab filmmakers and Australian cinema professionals. Participants gain opportunities to work on cross-cultural projects, share creative perspectives, and expand their professional networks internationally.",
  },
  {
    title: "Curated Film Screenings",
    description: "Our curated screenings celebrate the richness and diversity of Arab cinema. Each selection highlights compelling narratives, innovative storytelling, and exceptional filmmaking from the Arab world. Screenings are complemented by Q&A sessions, panel discussions, and audience interactions.",
  },
]

const schedule = [
  {
    date: "Friday, November 1",
    events: [
      {
        time: "7:00 PM",
        title: "Opening Night Gala: The Last Night",
        director: "Layla Hassan",
        venue: "Palace Cinema, Sydney",
        hasBook: true,
      },
    ],
  },
  {
    date: "Saturday, November 2",
    events: [
      {
        time: "2:00 PM",
        title: "Desert Roads",
        director: "Omar Khalil",
        venue: "Dendy Cinema, Sydney",
        hasBook: true,
      },
      {
        time: "5:00 PM",
        title: "Short Film Program 1",
        director: "Various",
        venue: "Palace Cinema, Sydney",
        hasBook: true,
      },
    ],
  },
  {
    date: "Sunday, November 3",
    events: [
      {
        time: "1:00 PM",
        title: "Documentary: Threads of Memory",
        director: "Fatima Al-Qasimi",
        venue: "Palace Cinema, Sydney",
        hasBook: false,
      },
      {
        time: "4:00 PM",
        title: "Between Two Shores",
        director: "Ahmed Nasser",
        venue: "Dendy Cinema, Sydney",
        hasBook: false,
      },
      {
        time: "7:00 PM",
        title: "Industry Panel: The Future of Arab Cinema",
        director: null,
        venue: "Palace Cinema, Sydney",
        hasBook: false,
      },
    ],
  },
]

const venues = [
  {
    name: "Palace Cinema Central",
    location: "Sydney",
    description: "Premium cinema with state-of-the-art projection and sound.",
    address: "123 George Street",
    image: "/images/palace-cinema.jpg",
  },
  {
    name: "Dendy Opera Quays",
    location: "Sydney",
    description: "Boutique cinema with stunning harbour views.",
    address: "2 East Circular Quay",
    image: "/images/dendy-cinema.jpg",
  },
]

export default function ProgramPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-cinema.jpg"
            alt="Theater interior"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-eerie-black via-eerie-black/90 to-eerie-black" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-champagne mb-6">
            Festival Program
          </h1>
          <p className="text-champagne/70 text-lg max-w-2xl mx-auto">
            Discover our carefully curated selection of films, workshops, and industry events celebrating Arab cinema.
          </p>
        </div>
      </section>

      {/* Program Detail Cards */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {programCards.map((card) => (
              <div
                key={card.title}
                className="glass-card p-8 border-l-2 border-l-primary"
              >
                <h3 className="font-serif text-2xl font-semibold text-champagne mb-4">
                  {card.title}
                </h3>
                <p className="text-champagne/70 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Schedule */}
      <section className="py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary tracking-[0.2em] uppercase text-sm mb-3">Schedule</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-champagne">
              Sample Schedule
            </h2>
          </div>

          <div className="space-y-12">
            {schedule.map((day) => (
              <div key={day.date}>
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-5 h-5 text-primary" />
                  <h3 className="font-serif text-xl font-semibold text-primary">
                    {day.date}
                  </h3>
                </div>
                <div className="space-y-4 ml-8">
                  {day.events.map((event) => (
                    <div
                      key={event.title}
                      className="glass-card p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-primary font-medium text-sm">{event.time}</span>
                          <span className="text-champagne/40">|</span>
                          <span className="text-champagne/60 text-sm">{event.venue}</span>
                        </div>
                        <h4 className="font-serif text-lg text-champagne">
                          {event.title}
                        </h4>
                        {event.director && (
                          <p className="text-champagne/60 text-sm mt-1">
                            Dir. {event.director}
                          </p>
                        )}
                      </div>
                      {event.hasBook && (
                        <button className="px-6 py-2 border border-primary text-primary text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
                          Book
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-medium tracking-wide hover:bg-primary/90 transition-colors">
              <Download className="w-4 h-4" />
              Download Program Guide
            </button>
          </div>
        </div>
      </section>

      {/* Venues Section */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary tracking-[0.2em] uppercase text-sm mb-3">Locations</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-champagne">
              Festival Venues
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {venues.map((venue) => (
              <div key={venue.name} className="group overflow-hidden">
                <div className="relative aspect-video overflow-hidden mb-6">
                  <Image
                    src={venue.image || "/placeholder.svg"}
                    alt={venue.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-eerie-black/60 to-transparent" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-champagne mb-2 group-hover:text-primary transition-colors">
                  {venue.name}
                </h3>
                <p className="text-champagne/70 text-sm mb-3">{venue.description}</p>
                <div className="flex items-center gap-2 text-champagne/50 text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>{venue.address}, {venue.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
