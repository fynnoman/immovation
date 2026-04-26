import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | Immovation",
  description: "Impressum und Anbieterkennzeichnung gemäß § 5 DDG.",
};

export default function ImpressumPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-[#1a1a1a] mb-8">Impressum</h1>

      <section className="space-y-6 text-[#1a1a1a]">
        <div>
          <h2 className="text-xl font-semibold mb-2">
            Angaben gemäß § 5 DDG
          </h2>
          <p className="leading-relaxed">
            Steepan Saravanapavan
            <br />
            Brückenstraße 6
            <br />
            66740 Saarlouis
            <br />
            Deutschland
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Kontakt</h2>
          <p className="leading-relaxed">
            Telefon: [Platzhalter]
            <br />
            E-Mail: [Platzhalter]
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Umsatzsteuer-ID</h2>
          <p className="leading-relaxed">
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
            <br />
            [Platzhalter]
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            Redaktionell verantwortlich
          </h2>
          <p className="leading-relaxed">
            Steepan Saravanapavan
            <br />
            Brückenstraße 6
            <br />
            66740 Saarlouis
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            EU-Streitschlichtung
          </h2>
          <p className="leading-relaxed">
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#B5A189] hover:underline"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            .<br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            Verbraucherstreitbeilegung / Universalschlichtungsstelle
          </h2>
          <p className="leading-relaxed">
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
            vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Haftungsausschluss</h2>
          <p className="leading-relaxed">
            [Platzhalter – wird ergänzt]
          </p>
        </div>
      </section>
    </main>
  );
}
