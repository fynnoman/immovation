"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FilterSidebarProps {
  onFilterChange: (filters: FilterState) => void;
  filters: FilterState;
}

export interface FilterState {
  priceRange: [number, number];
  rooms: number[];
  rentalTypes: string[];
  furnished: boolean | null;
  available: boolean;
  minRating: number;
  minSize: number;
  sortBy: string;
  dateFrom: string;
  dateTo: string;
}

export const defaultFilters: FilterState = {
  priceRange: [0, 5000],
  rooms: [],
  rentalTypes: [],
  furnished: null,
  available: false,
  minRating: 0,
  minSize: 0,
  sortBy: "recommended",
  dateFrom: "",
  dateTo: "",
};

export default function FilterSidebar({
  onFilterChange,
  filters,
}: FilterSidebarProps) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(["budget", "dates", "rooms", "type", "size", "features"])
  );

  const toggleSection = (section: string) => {
    const next = new Set(expandedSections);
    if (next.has(section)) next.delete(section);
    else next.add(section);
    setExpandedSections(next);
  };

  const updateFilter = (partial: Partial<FilterState>) => {
    onFilterChange({ ...filters, ...partial });
  };

  const toggleRoom = (room: number) => {
    const rooms = filters.rooms.includes(room)
      ? filters.rooms.filter((r) => r !== room)
      : [...filters.rooms, room];
    updateFilter({ rooms });
  };

  const toggleRentalType = (type: string) => {
    const rentalTypes = filters.rentalTypes.includes(type)
      ? filters.rentalTypes.filter((t) => t !== type)
      : [...filters.rentalTypes, type];
    updateFilter({ rentalTypes });
  };

  const Section = ({
    id,
    title,
    children,
  }: {
    id: string;
    title: string;
    children: React.ReactNode;
  }) => (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => toggleSection(id)}
        className="flex items-center justify-between w-full text-left"
      >
        <h3 className="text-sm font-bold text-gray-800">{title}</h3>
        {expandedSections.has(id) ? (
          <ChevronUp size={16} className="text-gray-400" />
        ) : (
          <ChevronDown size={16} className="text-gray-400" />
        )}
      </button>
      {expandedSections.has(id) && <div className="mt-3">{children}</div>}
    </div>
  );

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      <h2 className="text-base font-bold text-gray-900 mb-4">Filtern nach:</h2>

      {/* Budget */}
      <Section id="budget" title="Monatsmiete">
        <div className="space-y-2">
          {[
            { label: "Bis €500", min: 0, max: 500 },
            { label: "€500 – €1.000", min: 500, max: 1000 },
            { label: "€1.000 – €1.500", min: 1000, max: 1500 },
            { label: "€1.500 – €2.500", min: 1500, max: 2500 },
            { label: "€2.500+", min: 2500, max: 9999 },
          ].map((range) => (
            <label
              key={range.label}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="budget"
                checked={
                  filters.priceRange[0] === range.min &&
                  filters.priceRange[1] === range.max
                }
                onChange={() =>
                  updateFilter({ priceRange: [range.min, range.max] })
                }
                className="accent-[#B5A189]"
              />
              <span className="text-sm text-gray-700">{range.label}</span>
            </label>
          ))}
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="budget"
              checked={
                filters.priceRange[0] === 0 && filters.priceRange[1] === 5000
              }
              onChange={() => updateFilter({ priceRange: [0, 5000] })}
              className="accent-[#B5A189]"
            />
            <span className="text-sm text-gray-700">Alle Preise</span>
          </label>
        </div>
      </Section>

      {/* Date range */}
      <Section id="dates" title="Zeitraum">
        <div className="space-y-3">
          <div>
            <label className="block text-xs text-gray-500 mb-1">Einzug ab</label>
            <input
              type="date"
              value={filters.dateFrom}
              onChange={(e) => updateFilter({ dateFrom: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm outline-none focus:border-[#B5A189] transition"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Auszug bis</label>
            <input
              type="date"
              value={filters.dateTo}
              min={filters.dateFrom || undefined}
              onChange={(e) => updateFilter({ dateTo: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm outline-none focus:border-[#B5A189] transition"
            />
          </div>
          {(filters.dateFrom || filters.dateTo) && (
            <button
              onClick={() => updateFilter({ dateFrom: "", dateTo: "" })}
              className="text-xs text-[#B5A189] hover:underline"
            >
              Zeitraum zurücksetzen
            </button>
          )}
        </div>
      </Section>

      {/* Rooms */}
      <Section id="rooms" title="Zimmeranzahl">
        <div className="space-y-2">
          {[1, 2, 3, 4].map((room) => (
            <label
              key={room}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={filters.rooms.includes(room)}
                onChange={() => toggleRoom(room)}
                className="accent-[#B5A189] rounded"
              />
              <span className="text-sm text-gray-700">
                {room} {room === 1 ? "Zimmer" : "Zimmer"}
              </span>
            </label>
          ))}
        </div>
      </Section>

      {/* Rental type */}
      <Section id="type" title="Mietart">
        <div className="space-y-2">
          {[
            { label: "Festmiete", value: "festmiete" },
            { label: "Monteurswohnung", value: "monteurswohnung" },
            { label: "Kurzmiete", value: "kurzmiete" },
          ].map((type) => (
            <label
              key={type.value}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={filters.rentalTypes.includes(type.value)}
                onChange={() => toggleRentalType(type.value)}
                className="accent-[#B5A189] rounded"
              />
              <span className="text-sm text-gray-700">{type.label}</span>
            </label>
          ))}
        </div>
      </Section>

      {/* Size */}
      <Section id="size" title="Mindestgröße">
        <div className="space-y-2">
          {[
            { label: "Alle Größen", value: 0 },
            { label: "Ab 30 m²", value: 30 },
            { label: "Ab 50 m²", value: 50 },
            { label: "Ab 70 m²", value: 70 },
            { label: "Ab 100 m²", value: 100 },
          ].map((s) => (
            <label
              key={s.value}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="size"
                checked={filters.minSize === s.value}
                onChange={() => updateFilter({ minSize: s.value })}
                className="accent-[#B5A189]"
              />
              <span className="text-sm text-gray-700">{s.label}</span>
            </label>
          ))}
        </div>
      </Section>

      {/* Features */}
      <Section id="features" title="Ausstattung">
        <div className="space-y-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={filters.furnished === true}
              onChange={() =>
                updateFilter({
                  furnished: filters.furnished === true ? null : true,
                })
              }
              className="accent-[#B5A189] rounded"
            />
            <span className="text-sm text-gray-700">Möbliert</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={filters.available}
              onChange={() =>
                updateFilter({ available: !filters.available })
              }
              className="accent-[#B5A189] rounded"
            />
            <span className="text-sm text-gray-700">Nur verfügbare</span>
          </label>
        </div>
      </Section>

      {/* Rating */}
      <Section id="rating" title="Bewertung">
        <div className="space-y-2">
          {[
            { label: "Hervorragend: 9+", value: 9 },
            { label: "Fabelhaft: 8+", value: 8 },
            { label: "Sehr gut: 7+", value: 7 },
          ].map((r) => (
            <label
              key={r.value}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="rating"
                checked={filters.minRating === r.value}
                onChange={() => updateFilter({ minRating: r.value })}
                className="accent-[#B5A189]"
              />
              <span className="text-sm text-gray-700">{r.label}</span>
            </label>
          ))}
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="rating"
              checked={filters.minRating === 0}
              onChange={() => updateFilter({ minRating: 0 })}
              className="accent-[#B5A189]"
            />
            <span className="text-sm text-gray-700">Alle</span>
          </label>
        </div>
      </Section>

      {/* Reset */}
      <button
        onClick={() => onFilterChange(defaultFilters)}
        className="mt-4 w-full py-2 text-sm text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition font-medium"
      >
        Filter zurücksetzen
      </button>
    </div>
  );
}
