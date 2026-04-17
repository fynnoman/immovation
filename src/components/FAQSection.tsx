"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Wie funktioniert die Wohnungssuche auf Pavan-rent?",
    answer:
      "Geben Sie einfach Ihre Wunschstadt ein, wählen Sie die Mietart (Festmiete, Kurzmiete oder Monteurswohnung) und filtern Sie nach Ihren Kriterien wie Zimmerzahl, Größe und Budget. Sie können direkt eine unverbindliche Anfrage an den Vermieter senden.",
  },
  {
    question: "Ist die Nutzung von Pavan-rent kostenlos?",
    answer:
      "Ja! Für Mietinteressenten ist die Nutzung von Pavan-rent komplett kostenlos. Sie können beliebig viele Wohnungen durchsuchen und Anfragen stellen, ohne dass Kosten anfallen. Auch für Vermieter ist das Inserieren kostenlos.",
  },
  {
    question: "Was ist der Unterschied zwischen Festmiete, Kurzmiete und Monteurswohnung?",
    answer:
      "Bei einer Festmiete handelt es sich um einen langfristigen Mietvertrag (unbefristet oder mindestens 12 Monate). Kurzmiete bietet befristete Verträge ab 1 Monat – ideal für Übergangslösungen. Monteurswohnungen sind voll möblierte Unterkünfte für Handwerker und Projektteams, oft inklusive Reinigung und Bettwäsche.",
  },
  {
    question: "Wie werden Vermieter geprüft?",
    answer:
      "Jeder Vermieter durchläuft einen Verifizierungsprozess. Wir prüfen die Identität, Eigentumsrechte und bisherige Bewertungen. So stellen wir sicher, dass Sie nur mit seriösen Anbietern in Kontakt treten.",
  },
  {
    question: "Kann ich eine Wohnung besichtigen, bevor ich mich entscheide?",
    answer:
      "Selbstverständlich! Nach Ihrer Mietanfrage können Sie mit dem Vermieter direkt einen Besichtigungstermin vereinbaren. Wir empfehlen immer, die Wohnung persönlich zu besichtigen, bevor Sie einen Mietvertrag unterschreiben.",
  },
  {
    question: "Wie schnell bekomme ich eine Antwort auf meine Anfrage?",
    answer:
      "Die meisten Vermieter antworten innerhalb von 24 Stunden. Unsere Plattform benachrichtigt Vermieter sofort bei eingehenden Anfragen, sodass Sie schnell eine Rückmeldung erhalten.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
        Häufig gestellte Fragen
      </h2>
      <p className="text-gray-500 text-center mb-10">
        Alles, was Sie über Pavan-rent wissen müssen
      </p>
      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden transition-shadow hover:shadow-sm"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="flex items-center justify-between w-full p-5 text-left"
            >
              <span className="text-sm font-semibold text-gray-900 pr-4">
                {faq.question}
              </span>
              <ChevronDown
                size={18}
                className={`text-gray-400 shrink-0 transition-transform duration-200 ${
                  openIndex === i ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-200 ${
                openIndex === i ? "max-h-96 pb-5" : "max-h-0"
              }`}
            >
              <p className="px-5 text-sm text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
