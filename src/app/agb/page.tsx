import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AGB | Immovation",
  description: "Allgemeine Geschäftsbedingungen.",
};

export default function AgbPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-[#1a1a1a] mb-8">
        Allgemeine Geschäftsbedingungen
      </h1>

      <section className="space-y-6 text-[#1a1a1a]">
        <div>
          <h2 className="text-xl font-semibold mb-2">§ 1 Geltungsbereich</h2>
          <p className="leading-relaxed">[Platzhalter]</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">§ 2 Vertragsschluss</h2>
          <p className="leading-relaxed">[Platzhalter]</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">§ 3 Leistungen</h2>
          <p className="leading-relaxed">[Platzhalter]</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">§ 4 Preise und Zahlung</h2>
          <p className="leading-relaxed">[Platzhalter]</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">§ 5 Stornierung</h2>
          <p className="leading-relaxed">[Platzhalter]</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">§ 6 Haftung</h2>
          <p className="leading-relaxed">[Platzhalter]</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            § 7 Schlussbestimmungen
          </h2>
          <p className="leading-relaxed">[Platzhalter]</p>
        </div>
      </section>
    </main>
  );
}
