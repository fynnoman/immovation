"use client";

import Link from "next/link";
import Image from "next/image";
import SearchBar from "@/components/SearchBar";
import FAQSection from "@/components/FAQSection";
import AnimateOnScroll, { StaggerChildren } from "@/components/AnimateOnScroll";
import CountUp from "@/components/CountUp";
import {
  MapPin, Shield, Key, Clock, Home, Maximize, DoorOpen,
  Search, FileText, Handshake, Star, Building2, Users,
  TrendingUp, Award, ChevronRight,
} from "lucide-react";
import type { Property } from "@/data/hotels";

interface AnimatedHomeProps {
  featuredProperties: Property[];
  popularCities: { city: string; properties: number }[];
}

export default function AnimatedHome({ featuredProperties, popularCities }: AnimatedHomeProps) {
  return (
    <div>
      {/* Hero section */}
      <section className="bg-[#FDC700] pb-24 pt-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <AnimateOnScroll animation="fade-up" duration={800} threshold={0}>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">
              Ihre neue Wohnung wartet auf Sie
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={200} duration={800} threshold={0}>
            <p className="text-lg text-gray-800/80 mb-8">
              Festmiete, Monteurswohnungen und Kurzmiete – alles an einem Ort
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Search bar (overlapping hero) */}
      <section className="max-w-7xl mx-auto px-4 -mt-12 relative z-10 mb-12">
        <AnimateOnScroll animation="scale-up" delay={400} duration={700} threshold={0}>
          <SearchBar variant="hero" />
        </AnimateOnScroll>
      </section>

      {/* Rental categories */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Mietarten entdecken
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Festmiete",
              desc: "Langfristige Mietwohnungen mit unbefristetem oder langfristigem Vertrag. Ideal für alle, die dauerhaft ein Zuhause suchen.",
              href: "/search?type=festmiete",
              icon: "🏠",
              gradient: "from-blue-500 to-blue-600",
              bg: "bg-blue-50",
              iconBg: "bg-blue-100",
              iconText: "text-blue-600",
            },
            {
              title: "Monteurswohnungen",
              desc: "Voll möblierte Wohnungen für Handwerker und Projektteams. Sofort bezugsfertig, inklusive Reinigung und Bettwäsche.",
              href: "/search?type=monteurswohnung",
              icon: "🔧",
              gradient: "from-amber-500 to-amber-600",
              bg: "bg-amber-50",
              iconBg: "bg-amber-100",
              iconText: "text-amber-600",
            },
            {
              title: "Kurzmiete",
              desc: "Befristete Mietverträge ab 1 Monat. Perfekt für Berufspendler, Studenten oder Übergangslösungen.",
              href: "/search?type=kurzmiete",
              icon: "⏱️",
              gradient: "from-purple-500 to-purple-600",
              bg: "bg-purple-50",
              iconBg: "bg-purple-100",
              iconText: "text-purple-600",
            },
          ].map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className={`group relative rounded-xl border border-gray-200 ${cat.bg} p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-transparent overflow-hidden`}
            >
              <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${cat.gradient} rounded-l-xl transition-all duration-300 group-hover:w-1.5`} />
              <div className={`w-12 h-12 ${cat.iconBg} rounded-xl flex items-center justify-center mb-4 text-2xl transition-transform duration-300 group-hover:scale-110`}>
                {cat.icon}
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">
                {cat.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{cat.desc}</p>
              <span className={`inline-flex items-center gap-1 mt-4 text-sm font-medium ${cat.iconText} transition-all duration-300 group-hover:gap-2`}>
                Entdecken <ChevronRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular cities */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Beliebte Städte
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {popularCities.map((dest) => (
            <Link
              key={dest.city}
              href={`/search?destination=${encodeURIComponent(dest.city)}`}
              className="group bg-white border border-gray-200 rounded-xl p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-[#FDC700]"
            >
              <div className="w-10 h-10 bg-[#FDC700]/10 rounded-lg flex items-center justify-center mb-3 transition-all duration-300 group-hover:bg-[#FDC700] group-hover:scale-110">
                <MapPin size={18} className="text-[#FDC700] transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="font-bold text-gray-900 text-sm">
                {dest.city}
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">
                {dest.properties} Wohnungen
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured properties */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Top-Wohnungen
        </h2>
        <p className="text-gray-500 mb-6">
          Von Mietern am besten bewertet
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredProperties.map((property) => (
            <Link
              key={property.id}
              href={`/hotel/${property.id}`}
              className="group bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="h-44 relative overflow-hidden">
                {property.images.length > 0 ? (
                  <Image
                    src={property.images[0]}
                    alt={property.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <Home size={28} className="text-gray-400" />
                  </div>
                )}
                <div className="absolute top-3 left-3 bg-[#FDC700] text-gray-900 text-xs font-bold px-2 py-1 rounded-lg">
                  {property.rating}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-1 text-sm line-clamp-1">
                  {property.name}
                </h3>
                <p className="text-xs text-gray-500 mb-3 flex items-center gap-1">
                  <MapPin size={12} /> {property.city}
                </p>
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <DoorOpen size={12} /> {property.rooms} Zi.
                  </span>
                  <span className="flex items-center gap-1">
                    <Maximize size={12} /> {property.size} m²
                  </span>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span className="text-xs text-gray-500">
                    {property.reviewScore}
                  </span>
                  <div className="text-right">
                    <p className="font-bold text-gray-900">
                      €{property.pricePerMonth.toLocaleString("de-DE")}
                    </p>
                    <p className="text-xs text-gray-500">/ Monat</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-7xl mx-auto px-4 py-16 overflow-hidden">
        <AnimateOnScroll animation="fade-up">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
            So funktioniert&apos;s
          </h2>
          <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">
            In nur drei Schritten zu Ihrer neuen Wohnung
          </p>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StaggerChildren animation="fade-up" staggerDelay={200}>
            {[
              {
                step: "1",
                icon: Search,
                title: "Wohnung suchen",
                desc: "Nutzen Sie unsere Filter, um die perfekte Wohnung in Ihrer Wunschstadt zu finden. Festmiete, Kurzmiete oder Monteurswohnung – alles an einem Ort.",
              },
              {
                step: "2",
                icon: FileText,
                title: "Anfrage stellen",
                desc: "Gefällt Ihnen eine Wohnung? Senden Sie direkt eine unverbindliche Mietanfrage an den Vermieter. Kostenlos und ohne Verpflichtung.",
              },
              {
                step: "3",
                icon: Handshake,
                title: "Einziehen",
                desc: "Der Vermieter meldet sich bei Ihnen. Vereinbaren Sie einen Besichtigungstermin und unterschreiben Sie den Mietvertrag. Fertig!",
              },
            ].map((item) => (
              <div key={item.step} className="relative text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FDC700] rounded-2xl mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <item.icon size={28} className="text-gray-900" />
                </div>
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Stats with CountUp */}
      <section className="bg-gray-900 py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StaggerChildren animation="fade-up" staggerDelay={150}>
              {[
                { icon: Building2, value: 12500, suffix: "+", label: "Wohnungen" },
                { icon: Users, value: 8200, suffix: "+", label: "Zufriedene Mieter" },
                { icon: TrendingUp, value: 98, suffix: "%", label: "Vermittlungsquote" },
                { icon: Award, value: 4.8, suffix: " / 5", label: "Durchschnittsbewertung", decimals: 1, separator: "," },
              ].map((stat) => (
                <div key={stat.label} className="text-center group">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-[#FDC700]/20 rounded-xl mb-3 group-hover:scale-110 group-hover:bg-[#FDC700]/30 transition-all duration-300">
                    <stat.icon size={24} className="text-[#FDC700]" />
                  </div>
                  <p className="text-3xl font-bold text-white mb-1">
                    <CountUp
                      end={stat.value}
                      suffix={stat.suffix}
                      duration={2200}
                      decimals={stat.decimals || 0}
                      separator={stat.separator || "."}
                    />
                  </p>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* USP section */}
      <section className="bg-gray-50 py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Warum Immovation?
            </h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StaggerChildren animation="scale-up" staggerDelay={120}>
              {[
                {
                  icon: Shield,
                  title: "Geprüfte Vermieter",
                  desc: "Alle Vermieter werden von uns verifiziert. Sicherheit für Mieter und Vermieter.",
                },
                {
                  icon: Key,
                  title: "Schnelle Vermittlung",
                  desc: "Von der Anfrage bis zum Einzug – wir machen den Prozess so einfach wie möglich.",
                },
                {
                  icon: Home,
                  title: "Vielfältige Auswahl",
                  desc: "Festmiete, Kurzmiete oder Monteurswohnung – für jeden Bedarf die passende Lösung.",
                },
                {
                  icon: Clock,
                  title: "Persönlicher Support",
                  desc: "Unser Team unterstützt Sie bei allen Fragen rund um Ihre Mietwohnung.",
                },
              ].map((usp) => (
                <div key={usp.title} className="text-center group cursor-default">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-[#FDC700]/10 rounded-full mb-4 group-hover:bg-[#FDC700]/20 group-hover:scale-110 transition-all duration-300">
                    <usp.icon size={28} className="text-[#FDC700]" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{usp.title}</h3>
                  <p className="text-sm text-gray-500">{usp.desc}</p>
                </div>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 py-16 overflow-hidden">
        <AnimateOnScroll animation="fade-up">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
            Das sagen unsere Mieter
          </h2>
          <p className="text-gray-500 text-center mb-10">
            Echte Erfahrungen von zufriedenen Nutzern
          </p>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StaggerChildren animation="fade-up" staggerDelay={150}>
            {[
              {
                name: "Laura Schneider",
                city: "Berlin",
                type: "Festmiete",
                text: "Innerhalb von einer Woche hatte ich drei Besichtigungstermine und kurz darauf meinen Mietvertrag. Immovation hat den Umzug nach Berlin so viel einfacher gemacht!",
                rating: 5,
              },
              {
                name: "Markus Weber",
                city: "München",
                type: "Monteurswohnung",
                text: "Als Projektleiter brauche ich regelmäßig möblierte Wohnungen in verschiedenen Städten. Immovation spart mir jedes Mal Stunden an Suchzeit. Top Service!",
                rating: 5,
              },
              {
                name: "Julia Koch",
                city: "Hamburg",
                type: "Kurzmiete",
                text: "Die Kurzmiete war perfekt für mein Auslandssemester-Vorpraktikum. Geprüfte Vermieter geben einem ein sicheres Gefühl. Kann ich nur weiterempfehlen.",
                rating: 4,
              },
            ].map((t) => (
              <div
                key={t.name}
                className="bg-white border border-gray-200 rounded-xl p-6 hover-lift transition group"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={`transition-transform duration-300 ${i < t.rating ? "text-[#FDC700] fill-[#FDC700]" : "text-gray-200"}`}
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#FDC700]/10 rounded-full flex items-center justify-center font-bold text-[#FDC700] text-sm group-hover:bg-[#FDC700] group-hover:text-gray-900 transition-colors duration-300">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.type} in {t.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Vermieter CTA */}
      <section className="bg-gray-50 py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <AnimateOnScroll animation="fade-up">
            <div className="flex flex-col md:flex-row items-center gap-10 bg-white border border-gray-200 rounded-2xl p-8 md:p-12">
              <div className="flex-1">
                <span className="inline-block text-xs font-semibold text-[#FDC700] bg-[#FDC700]/10 px-3 py-1 rounded-full mb-4">
                  Für Vermieter
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  Sie haben eine Wohnung zu vermieten?
                </h2>
                <p className="text-gray-500 mb-6 leading-relaxed">
                  Erreichen Sie tausende verifizierte Mietinteressenten. Inserieren Sie Ihre Wohnung kostenlos und finden Sie den perfekten Mieter – schnell, sicher und unkompliziert.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/search"
                    className="bg-[#FDC700] hover:bg-[#d4b500] text-gray-900 px-6 py-3 rounded-md font-semibold text-sm transition animate-pulse-glow btn-ripple active:scale-95"
                  >
                    Jetzt kostenlos inserieren
                  </Link>
                  <Link
                    href="#"
                    className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-semibold text-sm hover:bg-gray-50 transition active:scale-95"
                  >
                    Mehr erfahren
                  </Link>
                </div>
              </div>
              <div className="w-full md:w-72 shrink-0">
                <div className="bg-[#FDC700]/5 border border-[#FDC700]/20 rounded-xl p-6 space-y-4">
                  {[
                    { label: "Aktive Inserate", value: "12.500+" },
                    { label: "Ø Vermittlungsdauer", value: "14 Tage" },
                    { label: "Erfolgsrate", value: "98%" },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">{item.label}</span>
                      <span className="text-sm font-bold text-gray-900">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <AnimateOnScroll animation="fade-up">
        <FAQSection />
      </AnimateOnScroll>

      {/* Newsletter */}
      <section className="max-w-7xl mx-auto px-4 py-16 overflow-hidden">
        <AnimateOnScroll animation="scale-up">
          <div className="bg-[#FDC700] rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Neue Wohnungen direkt in Ihr Postfach
            </h2>
            <p className="text-gray-800/80 mb-6">
              Abonnieren Sie unseren Newsletter und verpassen Sie keine neuen Angebote.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                className="flex-1 px-4 py-3 rounded-md text-sm outline-none focus:ring-2 focus:ring-gray-900/20 transition-shadow"
              />
              <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-md font-semibold text-sm transition active:scale-95">
                Abonnieren
              </button>
            </div>
          </div>
        </AnimateOnScroll>
      </section>
    </div>
  );
}
