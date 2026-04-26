import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Immovation",
  description: "Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.",
};

export default function DatenschutzPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-[#1a1a1a] mb-8">
        Datenschutzerklärung
      </h1>

      <section className="space-y-6 text-[#1a1a1a]">
        <div>
          <h2 className="text-xl font-semibold mb-2">
            1. Verantwortlicher
          </h2>
          <p className="leading-relaxed">
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            <br />
            <br />
            Steepan Saravanapavan
            <br />
            Brückenstraße 6
            <br />
            66740 Saarlouis
            <br />
            Deutschland
            <br />
            E-Mail: [Platzhalter]
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            2. Allgemeine Hinweise
          </h2>
          <p className="leading-relaxed">
            [Platzhalter] Die folgenden Hinweise geben einen einfachen Überblick
            darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie
            diese Website besuchen.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            3. Erhebung und Speicherung personenbezogener Daten
          </h2>
          <p className="leading-relaxed">[Platzhalter]</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">4. Cookies</h2>
          <p className="leading-relaxed">[Platzhalter]</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            5. Ihre Rechte als Betroffene
          </h2>
          <p className="leading-relaxed">
            [Platzhalter] Sie haben unter anderem das Recht auf Auskunft,
            Berichtigung, Löschung, Einschränkung der Verarbeitung,
            Datenübertragbarkeit sowie Widerspruch gegen die Verarbeitung Ihrer
            personenbezogenen Daten.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            6. Beschwerderecht bei der Aufsichtsbehörde
          </h2>
          <p className="leading-relaxed">
            [Platzhalter] Sie haben das Recht, sich bei einer
            Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer
            personenbezogenen Daten zu beschweren.
          </p>
        </div>
      </section>
    </main>
  );
}
