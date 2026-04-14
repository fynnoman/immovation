"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, MapPin, Home, Maximize, ChevronDown } from "lucide-react";

interface SearchBarProps {
  variant?: "hero" | "compact";
  initialValues?: {
    destination?: string;
    rentalType?: string;
    minRooms?: number;
  };
}

export default function SearchBar({
  variant = "hero",
  initialValues,
}: SearchBarProps) {
  const router = useRouter();
  const [destination, setDestination] = useState(
    initialValues?.destination || ""
  );
  const [rentalType, setRentalType] = useState(
    initialValues?.rentalType || ""
  );
  const [minRooms, setMinRooms] = useState(initialValues?.minRooms || 0);

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (destination) params.set("destination", destination);
    if (rentalType) params.set("type", rentalType);
    if (minRooms > 0) params.set("minRooms", minRooms.toString());
    router.push(`/search?${params.toString()}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-2">
      <div className="flex flex-col md:flex-row gap-2">
        {/* Destination */}
        <div className="flex-1 relative">
          <div className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-3 hover:border-[#FDC700] focus-within:border-[#FDC700] focus-within:ring-2 focus-within:ring-[#FDC700]/20 transition">
            <MapPin size={20} className="text-gray-400 shrink-0" />
            <input
              type="text"
              placeholder="Stadt oder Adresse eingeben"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full outline-none text-sm text-gray-800 placeholder-gray-400"
            />
          </div>
        </div>

        {/* Rental type */}
        <div className="md:w-52">
          <div className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-3 hover:border-[#FDC700] focus-within:border-[#FDC700] focus-within:ring-2 focus-within:ring-[#FDC700]/20 transition">
            <Home size={20} className="text-gray-400 shrink-0" />
            <select
              value={rentalType}
              onChange={(e) => setRentalType(e.target.value)}
              className="w-full outline-none text-sm text-gray-800 bg-transparent"
            >
              <option value="">Alle Mietarten</option>
              <option value="festmiete">Festmiete</option>
              <option value="monteurswohnung">Monteurswohnung</option>
              <option value="kurzmiete">Kurzmiete</option>
            </select>
          </div>
        </div>

        {/* Min rooms */}
        <div className="md:w-44">
          <div className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-3 hover:border-[#FDC700] focus-within:border-[#FDC700] focus-within:ring-2 focus-within:ring-[#FDC700]/20 transition">
            <Maximize size={20} className="text-gray-400 shrink-0" />
            <select
              value={minRooms}
              onChange={(e) => setMinRooms(parseInt(e.target.value))}
              className="w-full outline-none text-sm text-gray-800 bg-transparent"
            >
              <option value={0}>Alle Zimmer</option>
              <option value={1}>Ab 1 Zimmer</option>
              <option value={2}>Ab 2 Zimmer</option>
              <option value={3}>Ab 3 Zimmer</option>
              <option value={4}>Ab 4 Zimmer</option>
            </select>
          </div>
        </div>

        {/* Search button */}
        <button
          onClick={handleSearch}
          className="bg-[#FDC700] hover:bg-[#d4b500] text-gray-900 px-8 py-3 rounded-md font-semibold text-sm flex items-center justify-center gap-2 transition shrink-0"
        >
          <Search size={20} />
          Suchen
        </button>
      </div>
    </div>
  );
}
