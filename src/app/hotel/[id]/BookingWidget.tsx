"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Info } from "lucide-react";
import type { Property } from "@/data/hotels";

interface BookingWidgetProps {
  property: Property;
}

export default function BookingWidget({ property }: BookingWidgetProps) {
  const [moveInDate, setMoveInDate] = useState("");
  const [message, setMessage] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const kaution = property.pricePerMonth * 2;

  if (showConfirmation) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-6">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check size={32} className="text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Anfrage gesendet!
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            Vielen Dank für Ihre Mietanfrage. Der Vermieter wird sich
            in Kürze bei Ihnen melden.
          </p>
          <div className="bg-gray-50 rounded-lg p-4 mb-4 text-left">
            <p className="text-sm font-medium text-gray-900 mb-1">
              {property.name}
            </p>
            <p className="text-xs text-gray-500">
              {property.address}
            </p>
            {moveInDate && (
              <p className="text-xs text-gray-500 mt-1">
                Gewünschter Einzug: {new Date(moveInDate).toLocaleDateString("de-DE")}
              </p>
            )}
            <p className="text-lg font-bold text-gray-900 mt-2">
              €{property.pricePerMonth.toLocaleString("de-DE")} / Monat
            </p>
          </div>
          <Link
            href="/"
            className="block w-full py-3 bg-[#B5A189] hover:bg-[#9B8B73] text-gray-900 rounded-md font-semibold text-sm transition"
          >
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-6">
      {/* Price header */}
      <div className="flex items-baseline gap-2 mb-1">
        {property.originalPrice && (
          <span className="text-lg text-red-500 line-through">
            €{property.originalPrice.toLocaleString("de-DE")}
          </span>
        )}
        <span className="text-2xl font-bold text-gray-900">
          €{property.pricePerMonth.toLocaleString("de-DE")}
        </span>
        <span className="text-sm text-gray-500">/ Monat</span>
      </div>
      <p className="text-xs text-gray-500 mb-4">zzgl. Nebenkosten</p>

      {/* Form */}
      <div className="space-y-3 mb-4">
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            GEWÜNSCHTER EINZUG
          </label>
          <div className="relative">
            <input
              type="date"
              value={moveInDate}
              onChange={(e) => setMoveInDate(e.target.value)}
              className="w-full px-3 py-2.5 border border-gray-300 rounded-md text-sm outline-none focus:border-[#B5A189] transition"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            NACHRICHT AN DEN VERMIETER
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            placeholder="Stellen Sie sich kurz vor und teilen Sie dem Vermieter mit, warum Sie an der Wohnung interessiert sind..."
            className="w-full px-3 py-2.5 border border-gray-300 rounded-md text-sm outline-none focus:border-[#B5A189] transition resize-none"
          />
        </div>
      </div>

      {/* Submit button */}
      <button
        onClick={() => setShowConfirmation(true)}
        className="w-full py-3 bg-[#B5A189] hover:bg-[#9B8B73] text-gray-900 rounded-md font-bold text-base transition animate-pulse-glow btn-ripple active:scale-95 mb-4"
      >
        Mietanfrage senden
      </button>

      <p className="text-xs text-gray-500 text-center mb-4">
        Unverbindliche Anfrage – keine Kosten
      </p>

      {/* Cost breakdown */}
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">Kaltmiete</span>
          <span className="text-gray-800">€{property.pricePerMonth.toLocaleString("de-DE")}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Kaution (2 Monatsmieten)</span>
          <span className="text-gray-800">€{kaution.toLocaleString("de-DE")}</span>
        </div>
        <div className="flex justify-between pt-3 border-t border-gray-200 font-bold">
          <span className="text-gray-900">Monatliche Miete</span>
          <span className="text-gray-900">€{property.pricePerMonth.toLocaleString("de-DE")}</span>
        </div>
      </div>

      {/* Features */}
      {property.available && (
        <div className="mt-4 flex items-center gap-2 text-sm text-green-700 bg-green-50 p-3 rounded-md">
          <Check size={16} />
          <span className="font-medium">Sofort verfügbar</span>
        </div>
      )}

      <div className="mt-3 flex items-start gap-2 text-xs text-gray-500 bg-gray-50 p-3 rounded-md">
        <Info size={14} className="shrink-0 mt-0.5" />
        <span>
          Dies ist eine Demo-Website. Es werden keine echten Mietverträge
          abgeschlossen oder Zahlungen verarbeitet.
        </span>
      </div>
    </div>
  );
}
