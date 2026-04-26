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
  TrendingUp, Award, ArrowUpRight, Sparkles, Wrench, CalendarRange,
} from "lucide-react";
import type { Property } from "@/data/hotels";

interface AnimatedHomeProps {
  featuredProperties: Property[];
  popularCities: { city: string; properties: number }[];
}

export default function AnimatedHome({ featuredProperties, popularCities }: AnimatedHomeProps) {
  return (
    <div className="overflow-hidden">
      {/* ---------- HERO ---------- */}
      <section className="relative bg-warm-gradient pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll animation="fade-up" duration={700} threshold={0}>
            <span className="eyebrow">
              <Sparkles size={12} />
              Wohnen, neu gedacht
            </span>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={150} duration={800} threshold={0}>
            <h1
              className="font-display mt-7 text-[44px] md:text-[68px] lg:text-[84px] leading-[0.98] max-w-4xl"
              style={{ color: "var(--color-text)" }}
            >
              Ihre neue Adresse.
              <br />
              <span style={{ color: "var(--color-accent)" }}>Mit System.</span>
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={300} duration={800} threshold={0}>
            <p
              className="mt-7 text-lg md:text-xl max-w-2xl leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Festmiete, Monteurswohnungen und Kurzmiete – kuratiert, geprüft
              und elegant präsentiert. Eine Plattform für jede Wohnform.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={450} duration={700} threshold={0}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/search" className="btn-primary animate-pulse-glow">
                Wohnungen entdecken
                <ArrowUpRight size={16} />
              </Link>
              <Link href="/vermieter" className="btn-secondary">
                Wohnung inserieren
              </Link>
              <div className="flex items-center gap-3 ml-2 text-xs" style={{ color: "var(--color-text-muted)" }}>
                <span>Geprüfte Vermieter</span>
                <span className="opacity-50">·</span>
                <span>Server in Deutschland</span>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ---------- SEARCH BAR (overlapping) ---------- */}
      <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-20 mb-24">
        <AnimateOnScroll animation="scale-up" delay={200} duration={700} threshold={0}>
          <SearchBar variant="hero" />
        </AnimateOnScroll>
      </section>

      {/* ---------- DREI HEBEL ---------- */}
      <section className="max-w-7xl mx-auto px-6 mb-28">
        <AnimateOnScroll animation="fade-up">
          <span className="eyebrow">
            <span style={{ color: "var(--color-accent)" }}>—</span> Mietarten
          </span>
          <h2
            className="font-display mt-5 text-3xl md:text-5xl max-w-3xl leading-[1.05]"
            style={{ color: "var(--color-text)" }}
          >
            Drei Wege, ein Zuhause zu finden.
          </h2>
        </AnimateOnScroll>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              eyebrow: "FESTMIETE",
              icon: Home,
              title: "Langfristig wohnen.",
              desc: "Unbefristete und langfristige Mietwohnungen für alle, die ankommen wollen.",
              href: "/search?type=festmiete",
              metric: "Ø 14 Tage",
              metricLabel: "bis zum Einzug",
            },
            {
              eyebrow: "MONTEURE",
              icon: Wrench,
              title: "Voll möbliert. Sofort bezugsfertig.",
              desc: "Apartments für Handwerker und Projektteams – inklusive Reinigung und Wäsche.",
              href: "/search?type=monteurswohnung",
              metric: "−68%",
              metricLabel: "manueller Aufwand",
            },
            {
              eyebrow: "KURZMIETE",
              icon: CalendarRange,
              title: "Flexibel ab einem Monat.",
              desc: "Befristete Mietverträge für Pendler, Studenten oder Übergangslösungen.",
              href: "/search?type=kurzmiete",
              metric: "1 +",
              metricLabel: "Monat Mindestlaufzeit",
            },
          ].map((cat, i) => (
            <AnimateOnScroll key={cat.eyebrow} animation="fade-up" delay={i * 120}>
              <Link
                href={cat.href}
                className="group relative block rounded-3xl border p-7 h-full bg-white/70 hover-lift backdrop-blur"
                style={{ borderColor: "var(--color-border-warm)" }}
              >
                <div className="flex items-start justify-between mb-8">
                  <div
                    className="text-[11px] font-semibold uppercase tracking-eyebrow"
                    style={{ color: "var(--color-accent-deep)" }}
                  >
                    {cat.eyebrow}
                  </div>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center transition group-hover:rotate-12"
                    style={{
                      background: "var(--color-accent-soft)",
                      color: "var(--color-accent-deep)",
                    }}
                  >
                    <cat.icon size={18} />
                  </div>
                </div>

                <h3
                  className="font-display text-2xl leading-tight mb-3"
                  style={{ color: "var(--color-text)" }}
                >
                  {cat.title}
                </h3>
                <p className="text-sm leading-relaxed mb-7" style={{ color: "var(--color-text-secondary)" }}>
                  {cat.desc}
                </p>

                <div
                  className="pt-5 border-t flex items-end justify-between"
                  style={{ borderColor: "var(--color-border)" }}
                >
                  <div>
                    <div
                      className="font-display text-3xl"
                      style={{ color: "var(--color-accent)" }}
                    >
                      {cat.metric}
                    </div>
                    <div className="text-xs mt-1" style={{ color: "var(--color-text-muted)" }}>
                      {cat.metricLabel}
                    </div>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="transition group-hover:rotate-45"
                    style={{ color: "var(--color-accent)" }}
                  />
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* ---------- BELIEBTE STÄDTE ---------- */}
      <section
        className="py-24 border-y"
        style={{
          borderColor: "var(--color-border)",
          background: "var(--color-cream)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll animation="fade-up">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
              <div>
                <span className="eyebrow">
                  <span style={{ color: "var(--color-accent)" }}>—</span> Standorte
                </span>
                <h2
                  className="font-display mt-5 text-3xl md:text-5xl max-w-2xl leading-[1.05]"
                  style={{ color: "var(--color-text)" }}
                >
                  Beliebte Städte.
                </h2>
              </div>
              <Link
                href="/search"
                className="text-sm font-medium inline-flex items-center gap-1.5 hover:gap-2.5 transition-all"
                style={{ color: "var(--color-accent-deep)" }}
              >
                Alle Standorte
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {popularCities.map((dest, i) => (
              <AnimateOnScroll key={dest.city} animation="fade-up" delay={i * 60}>
                <Link
                  href={`/search?destination=${encodeURIComponent(dest.city)}`}
                  className="group block rounded-2xl border bg-white p-5 hover-lift"
                  style={{ borderColor: "var(--color-border-warm)" }}
                >
                  <MapPin
                    size={16}
                    className="mb-4 transition group-hover:scale-110"
                    style={{ color: "var(--color-accent)" }}
                  />
                  <h3 className="font-semibold text-base" style={{ color: "var(--color-text)" }}>
                    {dest.city}
                  </h3>
                  <p className="text-xs mt-1" style={{ color: "var(--color-text-muted)" }}>
                    {dest.properties} Wohnungen
                  </p>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- TOP WOHNUNGEN ---------- */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <AnimateOnScroll animation="fade-up">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <span className="eyebrow">
                <span style={{ color: "var(--color-accent)" }}>—</span> Empfehlungen
              </span>
              <h2
                className="font-display mt-5 text-3xl md:text-5xl max-w-2xl leading-[1.05]"
                style={{ color: "var(--color-text)" }}
              >
                Kuratierte Wohnungen.
              </h2>
              <p className="mt-4 text-base max-w-xl" style={{ color: "var(--color-text-secondary)" }}>
                Von unserer Redaktion und Mietern am höchsten bewertet.
              </p>
            </div>
            <Link
              href="/search"
              className="text-sm font-medium inline-flex items-center gap-1.5 hover:gap-2.5 transition-all"
              style={{ color: "var(--color-accent-deep)" }}
            >
              Alle ansehen
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredProperties.map((property, i) => (
            <AnimateOnScroll key={property.id} animation="fade-up" delay={i * 100}>
              <Link
                href={`/hotel/${property.id}`}
                className="group block rounded-2xl overflow-hidden border bg-white hover-lift h-full"
                style={{ borderColor: "var(--color-border-warm)" }}
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  {property.images.length > 0 ? (
                    <Image
                      src={property.images[0]}
                      alt={property.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  ) : (
                    <div
                      className="absolute inset-0 flex items-center justify-center"
                      style={{ background: "var(--color-cream)" }}
                    >
                      <Home size={28} style={{ color: "var(--color-accent-soft)" }} />
                    </div>
                  )}
                  <div
                    className="absolute top-4 left-4 px-2.5 py-1 rounded-full text-[11px] font-semibold backdrop-blur"
                    style={{
                      background: "rgba(255,255,255,0.92)",
                      color: "var(--color-accent-deep)",
                    }}
                  >
                    {property.rating} ★
                  </div>
                </div>
                <div className="p-5">
                  <h3
                    className="font-semibold text-[15px] mb-1.5 line-clamp-1"
                    style={{ color: "var(--color-text)" }}
                  >
                    {property.name}
                  </h3>
                  <p
                    className="text-xs mb-4 flex items-center gap-1"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    <MapPin size={11} /> {property.city}
                  </p>
                  <div
                    className="flex items-center gap-3 text-xs mb-4"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    <span className="flex items-center gap-1">
                      <DoorOpen size={12} /> {property.rooms} Zi.
                    </span>
                    <span className="flex items-center gap-1">
                      <Maximize size={12} /> {property.size} m²
                    </span>
                  </div>
                  <div
                    className="pt-4 border-t flex items-end justify-between"
                    style={{ borderColor: "var(--color-border)" }}
                  >
                    <div className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                      {property.reviewScore}
                    </div>
                    <div className="text-right">
                      <p className="font-display text-lg" style={{ color: "var(--color-text)" }}>
                        €{property.pricePerMonth.toLocaleString("de-DE")}
                      </p>
                      <p className="text-[10px]" style={{ color: "var(--color-text-muted)" }}>
                        pro Monat
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* ---------- SO FUNKTIONIERTS ---------- */}
      <section
        className="py-28 border-y"
        style={{
          borderColor: "var(--color-border)",
          background: "var(--color-background-deep)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="eyebrow">
                <span style={{ color: "var(--color-accent)" }}>—</span> Prozess
              </span>
              <h2
                className="font-display mt-5 text-3xl md:text-5xl leading-[1.05]"
                style={{ color: "var(--color-text)" }}
              >
                In drei Schritten zum Einzug.
              </h2>
              <p className="mt-4 text-base" style={{ color: "var(--color-text-secondary)" }}>
                Klar strukturiert. Ohne Umwege. Mit echtem Service.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StaggerChildren animation="fade-up" staggerDelay={150}>
              {[
                {
                  step: "01",
                  icon: Search,
                  title: "Wohnung finden",
                  desc: "Filter Sie nach Stadt, Mietart und Größe – wir zeigen Ihnen kuratierte Treffer.",
                },
                {
                  step: "02",
                  icon: FileText,
                  title: "Anfrage stellen",
                  desc: "Senden Sie eine unverbindliche Mietanfrage direkt an den verifizierten Vermieter.",
                },
                {
                  step: "03",
                  icon: Handshake,
                  title: "Einziehen",
                  desc: "Termin vereinbaren, Vertrag unterschreiben und im neuen Zuhause ankommen.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="group relative rounded-3xl border p-8 bg-white hover-lift"
                  style={{ borderColor: "var(--color-border-warm)" }}
                >
                  <div
                    className="font-display text-7xl absolute top-6 right-7 opacity-10 select-none"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {item.step}
                  </div>
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-6 transition group-hover:scale-110"
                    style={{
                      background: "var(--color-accent)",
                      color: "#fff",
                    }}
                  >
                    <item.icon size={20} />
                  </div>
                  <h3
                    className="font-display text-2xl mb-3 leading-tight"
                    style={{ color: "var(--color-text)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* ---------- STATS ---------- */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <AnimateOnScroll animation="fade-up">
          <div
            className="rounded-3xl p-12 md:p-16 border relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, var(--color-accent-deep) 0%, var(--color-accent) 60%, var(--color-accent-bright) 100%)",
              borderColor: "transparent",
            }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 relative z-10">
              {[
                { icon: Building2, value: 12500, suffix: "+", label: "Wohnungen" },
                { icon: Users, value: 8200, suffix: "+", label: "Zufriedene Mieter" },
                { icon: TrendingUp, value: 98, suffix: "%", label: "Vermittlungsquote" },
                { icon: Award, value: 4.8, suffix: " / 5", label: "Bewertung", decimals: 1, separator: "," },
              ].map((stat) => (
                <div key={stat.label}>
                  <stat.icon size={20} className="text-white/70 mb-4" />
                  <p className="font-display text-4xl md:text-5xl text-white mb-2 leading-none">
                    <CountUp
                      end={stat.value}
                      suffix={stat.suffix}
                      duration={2200}
                      decimals={stat.decimals || 0}
                      separator={stat.separator || "."}
                    />
                  </p>
                  <p className="text-sm text-white/75">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* ---------- WARUM ---------- */}
      <section
        className="py-28 border-y"
        style={{
          borderColor: "var(--color-border)",
          background: "var(--color-cream)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll animation="fade-up">
            <div className="max-w-2xl mb-16">
              <span className="eyebrow">
                <span style={{ color: "var(--color-accent)" }}>—</span> Warum Immovation
              </span>
              <h2
                className="font-display mt-5 text-3xl md:text-5xl leading-[1.05]"
                style={{ color: "var(--color-text)" }}
              >
                Vertrauen, das man spürt.
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <StaggerChildren animation="fade-up" staggerDelay={100}>
              {[
                { icon: Shield, title: "Geprüfte Vermieter", desc: "Jeder Vermieter wird von uns verifiziert. Sicherheit für beide Seiten." },
                { icon: Key, title: "Schnelle Vermittlung", desc: "Von der Anfrage bis zum Einzug – ohne Umwege und Wartezeiten." },
                { icon: Home, title: "Kuratierte Auswahl", desc: "Festmiete, Kurzmiete, Monteurswohnung – für jeden Bedarf passend." },
                { icon: Clock, title: "Persönlicher Support", desc: "Unser Team begleitet Sie bei jedem Schritt – von Anfang bis Schlüsselübergabe." },
              ].map((usp) => (
                <div
                  key={usp.title}
                  className="group rounded-2xl border bg-white p-7 hover-lift h-full"
                  style={{ borderColor: "var(--color-border-warm)" }}
                >
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center mb-6 transition group-hover:scale-110"
                    style={{
                      background: "var(--color-accent-soft)",
                      color: "var(--color-accent-deep)",
                    }}
                  >
                    <usp.icon size={18} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2" style={{ color: "var(--color-text)" }}>
                    {usp.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                    {usp.desc}
                  </p>
                </div>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* ---------- TESTIMONIALS ---------- */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow">
              <span style={{ color: "var(--color-accent)" }}>—</span> Stimmen
            </span>
            <h2
              className="font-display mt-5 text-3xl md:text-5xl leading-[1.05]"
              style={{ color: "var(--color-text)" }}
            >
              Was Mieter wirklich sagen.
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <StaggerChildren animation="fade-up" staggerDelay={120}>
            {[
              {
                name: "Laura Schneider",
                city: "Berlin",
                type: "Festmiete",
                text: "Innerhalb einer Woche hatte ich drei Besichtigungstermine und kurz darauf meinen Mietvertrag. Der Umzug nach Berlin war noch nie so einfach.",
                rating: 5,
              },
              {
                name: "Markus Weber",
                city: "München",
                type: "Monteurswohnung",
                text: "Als Projektleiter brauche ich regelmäßig möblierte Wohnungen in verschiedenen Städten. Immovation spart mir jedes Mal Stunden an Suchzeit.",
                rating: 5,
              },
              {
                name: "Julia Koch",
                city: "Hamburg",
                type: "Kurzmiete",
                text: "Die Kurzmiete war perfekt für mein Vorpraktikum. Geprüfte Vermieter geben einem ein wirklich sicheres Gefühl.",
                rating: 4,
              },
            ].map((t) => (
              <div
                key={t.name}
                className="group rounded-2xl border bg-white p-7 hover-lift h-full flex flex-col"
                style={{ borderColor: "var(--color-border-warm)" }}
              >
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={i < t.rating ? "" : "opacity-25"}
                      style={{
                        color: "var(--color-accent)",
                        fill: i < t.rating ? "var(--color-accent)" : "transparent",
                      }}
                    />
                  ))}
                </div>
                <p
                  className="text-base leading-relaxed mb-6 flex-1"
                  style={{ color: "var(--color-text)" }}
                >
                  „{t.text}"
                </p>
                <div
                  className="flex items-center gap-3 pt-5 border-t"
                  style={{ borderColor: "var(--color-border)" }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold"
                    style={{
                      background: "var(--color-accent-soft)",
                      color: "var(--color-accent-deep)",
                    }}
                  >
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "var(--color-text)" }}>
                      {t.name}
                    </p>
                    <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                      {t.type} in {t.city}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ---------- VERMIETER CTA ---------- */}
      <section
        className="py-28 border-t"
        style={{
          borderColor: "var(--color-border)",
          background: "var(--color-background-deep)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll animation="fade-up">
            <div
              className="rounded-3xl border bg-white overflow-hidden grid md:grid-cols-2"
              style={{ borderColor: "var(--color-border-warm)" }}
            >
              <div className="p-10 md:p-14">
                <span className="eyebrow">
                  <span style={{ color: "var(--color-accent)" }}>—</span> Für Vermieter
                </span>
                <h2
                  className="font-display mt-5 text-3xl md:text-4xl leading-[1.1] mb-5"
                  style={{ color: "var(--color-text)" }}
                >
                  Sie haben eine Wohnung zu vermieten?
                </h2>
                <p
                  className="text-base leading-relaxed mb-8 max-w-md"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  Erreichen Sie tausende verifizierte Mietinteressenten. Inserieren
                  Sie Ihre Wohnung kostenlos – schnell, sicher und unkompliziert.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/vermieter" className="btn-primary">
                    Kostenlos inserieren
                    <ArrowUpRight size={16} />
                  </Link>
                  <Link href="/vermieter" className="btn-secondary">
                    Mehr erfahren
                  </Link>
                </div>
              </div>
              <div
                className="p-10 md:p-14 flex flex-col justify-center gap-5"
                style={{ background: "var(--color-cream)" }}
              >
                {[
                  { label: "Aktive Inserate", value: "12.500+" },
                  { label: "Ø Vermittlungsdauer", value: "14 Tage" },
                  { label: "Erfolgsrate", value: "98%" },
                  { label: "Servicegebühr", value: "0 €" },
                ].map((item, i, arr) => (
                  <div
                    key={item.label}
                    className={`flex items-baseline justify-between ${
                      i < arr.length - 1 ? "pb-5 border-b" : ""
                    }`}
                    style={{ borderColor: "var(--color-border)" }}
                  >
                    <span className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
                      {item.label}
                    </span>
                    <span
                      className="font-display text-2xl"
                      style={{ color: "var(--color-text)" }}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ---------- VISION ---------- */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <AnimateOnScroll animation="fade-up">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="eyebrow">
              <span style={{ color: "var(--color-accent)" }}>—</span> Unsere Vision
            </span>
            <h2
              className="font-display mt-5 text-3xl md:text-5xl leading-[1.05] mb-5"
              style={{ color: "var(--color-text)" }}
            >
              Ein zweites Zuhause für Monteure.
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
              Die Vision von Immovation ist eng mit der persönlichen Geschichte
              unseres Gründers verbunden.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <AnimateOnScroll animation="fade-right">
            <div
              className="rounded-2xl border bg-white p-8 h-full"
              style={{ borderColor: "var(--color-border-warm)" }}
            >
              <p className="text-base leading-relaxed mb-5" style={{ color: "var(--color-text)" }}>
                Unser Geschäftsführer, Steepan Saravanapavan, war während seiner
                Schulzeit selbst auf Montage. Dort hat er Erfahrungen gemacht, die
                er nun in sein eigenes Unternehmen einfließen lässt.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                Steepan weiß, welch harte Arbeit Monteure*innen täglich leisten,
                und ist überzeugt, dass diesen Menschen großartige Apartments zu
                fairem Preis zustehen.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-left">
            <blockquote
              className="rounded-2xl p-8 h-full border-l-4 flex flex-col justify-center"
              style={{
                borderColor: "var(--color-accent)",
                background: "var(--color-cream)",
              }}
            >
              <p
                className="font-display text-xl md:text-2xl leading-snug mb-5"
                style={{ color: "var(--color-text)" }}
              >
                „Ich möchte Menschen, die jeden Tag ihr Bestes geben, ein zweites
                Zuhause bieten. Ein Zuhause, in dem sie sich wohlfühlen."
              </p>
              <footer
                className="text-xs font-semibold uppercase tracking-eyebrow"
                style={{ color: "var(--color-accent-deep)" }}
              >
                Steepan Saravanapavan · Gründer
              </footer>
            </blockquote>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <AnimateOnScroll animation="fade-up">
        <FAQSection />
      </AnimateOnScroll>

      {/* ---------- FINAL CTA ---------- */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <AnimateOnScroll animation="scale-up">
          <div
            className="rounded-3xl p-12 md:p-20 text-center relative overflow-hidden"
            style={{
              background:
                "radial-gradient(80% 100% at 50% 0%, var(--color-accent-soft) 0%, var(--color-cream) 60%, var(--color-background-deep) 100%)",
            }}
          >
            <span className="eyebrow">
              <Sparkles size={12} />
              Bereit für Ihr neues Zuhause?
            </span>
            <h2
              className="font-display mt-6 text-4xl md:text-6xl max-w-3xl mx-auto leading-[1.02] mb-6"
              style={{ color: "var(--color-text)" }}
            >
              Finden Sie Ihre Wohnung. Heute.
            </h2>
            <p
              className="text-base md:text-lg max-w-xl mx-auto mb-10"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Tausende Wohnungen, geprüfte Vermieter, persönlicher Support – an
              einem Ort.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/search" className="btn-primary">
                Wohnungen entdecken
                <ArrowUpRight size={16} />
              </Link>
              <Link href="/vermieter" className="btn-secondary">
                Vermieten
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </section>
    </div>
  );
}
