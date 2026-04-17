import Link from "next/link";
import {
  Shield, TrendingUp, Users, Clock, Check,
  BarChart3, Globe, Headphones, ArrowRight,
} from "lucide-react";

export default function VermieterPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-semibold text-[#B5A189] bg-[#B5A189]/10 px-3 py-1 rounded-full mb-4">
              Für Vermieter
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Vermieten Sie schneller, einfacher und sicherer
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Erreichen Sie tausende verifizierte Mietinteressenten auf
              Deutschlands modernstem Mietportal. Kostenlos inserieren,
              geprüfte Mieter finden.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/search"
                className="bg-[#B5A189] hover:bg-[#9B8B73] text-gray-900 px-8 py-3.5 rounded-md font-semibold transition active:scale-95"
              >
                Jetzt kostenlos inserieren
              </Link>
              <Link
                href="#vorteile"
                className="border border-gray-600 text-white px-8 py-3.5 rounded-md font-semibold hover:bg-white/5 transition"
              >
                Mehr erfahren
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "12.500+", label: "Aktive Inserate" },
              { value: "14 Tage", label: "Ø Vermittlungsdauer" },
              { value: "98%", label: "Erfolgsrate" },
              { value: "4,8/5", label: "Vermieterbewertung" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="vorteile" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
            Ihre Vorteile als Vermieter
          </h2>
          <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">
            Alles was Sie brauchen, um Ihre Wohnung erfolgreich zu vermieten
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Maximale Reichweite",
                desc: "Ihr Inserat wird von tausenden aktiven Suchenden gesehen. Mehr Anfragen, schnellere Vermittlung.",
              },
              {
                icon: Shield,
                title: "Geprüfte Mieter",
                desc: "Alle Mietinteressenten werden von uns verifiziert. Bonitätsprüfung und Identitätscheck inklusive.",
              },
              {
                icon: BarChart3,
                title: "Dashboard & Analytics",
                desc: "Verfolgen Sie Aufrufe, Anfragen und die Performance Ihrer Inserate in Echtzeit.",
              },
              {
                icon: Clock,
                title: "Schnelle Vermittlung",
                desc: "Durchschnittlich 14 Tage von der Veröffentlichung bis zum unterzeichneten Mietvertrag.",
              },
              {
                icon: Headphones,
                title: "Persönlicher Support",
                desc: "Unser Vermieter-Team unterstützt Sie bei Fragen, Mietvertragsvorlagen und mehr.",
              },
              {
                icon: TrendingUp,
                title: "Kostenlos inserieren",
                desc: "Erstellen und veröffentlichen Sie Ihr Inserat komplett kostenlos. Keine versteckten Gebühren.",
              },
            ].map((benefit) => (
              <div key={benefit.title} className="bg-white border border-gray-200 rounded-xl p-6 hover-lift transition">
                <div className="w-12 h-12 bg-[#B5A189]/10 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon size={24} className="text-[#B5A189]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-12 text-center">
            So einfach geht&apos;s
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Registrieren", desc: "Erstellen Sie in 2 Minuten ein kostenloses Vermieter-Konto." },
              { step: "2", title: "Inserat erstellen", desc: "Laden Sie Fotos hoch, beschreiben Sie Ihre Wohnung und setzen Sie den Preis." },
              { step: "3", title: "Anfragen erhalten", desc: "Geprüfte Mietinteressenten senden Ihnen direkt Anfragen." },
              { step: "4", title: "Vermieten", desc: "Wählen Sie den passenden Mieter und schließen Sie den Vertrag ab." },
            ].map((item) => (
              <div key={item.step} className="relative text-center">
                <div className="w-12 h-12 bg-[#B5A189] rounded-full flex items-center justify-center mx-auto mb-4 text-gray-900 font-bold text-lg">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">
            Das sagen unsere Vermieter
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Stefan Bauer",
                role: "Privatvermieter, Berlin",
                text: "Innerhalb von 10 Tagen hatte ich drei qualifizierte Anfragen. Der Bonitätscheck spart enorm viel Zeit und gibt Sicherheit.",
              },
              {
                name: "Immobilien Meyer GmbH",
                role: "Hausverwaltung, München",
                text: "Wir verwalten 120 Einheiten und nutzen Immovation für alle Vermietungen. Das Dashboard ist ein echter Gamechanger.",
              },
              {
                name: "Christine Hoffmann",
                role: "Privatvermieterin, Hamburg",
                text: "Endlich ein Portal, das modern aussieht und funktioniert. Meine Monteurswohnungen sind immer innerhalb einer Woche vermittelt.",
              },
            ].map((t) => (
              <div key={t.name} className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-[#B5A189]" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#B5A189] py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Bereit, Ihre Wohnung zu vermieten?
          </h2>
          <p className="text-gray-800/80 mb-8">
            Erstellen Sie in wenigen Minuten Ihr erstes Inserat – kostenlos und unverbindlich.
          </p>
          <Link
            href="/search"
            className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-3.5 rounded-md font-semibold transition active:scale-95"
          >
            Jetzt starten
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
