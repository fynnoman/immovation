"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, MapPin, Home, Maximize } from "lucide-react";

interface SearchBarProps {
  variant?: "hero" | "compact";
  initialValues?: {
    destination?: string;
    rentalType?: string;
    minRooms?: number;
  };
}

export default function SearchBar({ variant = "hero", initialValues }: SearchBarProps) {
  const router = useRouter();
  const [destination, setDestination] = useState(initialValues?.destination || "");
  const [rentalType, setRentalType] = useState(initialValues?.rentalType || "");
  const [minRooms, setMinRooms] = useState(initialValues?.minRooms || 0);

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (destination) params.set("destination", destination);
    if (rentalType) params.set("type", rentalType);
    if (minRooms > 0) params.set("minRooms", minRooms.toString());
    router.push(`/search?${params.toString()}`);
  };

  return (
    <div
      className={`bg-white/95 backdrop-blur-xl rounded-3xl p-2 shadow-elevated border ${
        variant === "compact" ? "max-w-3xl" : ""
      }`}
      style={{ borderColor: "var(--color-border-warm)" }}
    >
      <div className="flex flex-col md:flex-row md:items-stretch gap-1">
        <Field icon={MapPin} label="Wo" className="flex-1">
          <input
            type="text"
            placeholder="Stadt, Region oder Adresse"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full bg-transparent outline-none text-sm"
            style={{ color: "var(--color-text)" }}
          />
        </Field>
        <Divider />
        <Field icon={Home} label="Mietart" className="md:w-56">
          <select
            value={rentalType}
            onChange={(e) => setRentalType(e.target.value)}
            className="w-full bg-transparent outline-none text-sm cursor-pointer"
            style={{ color: "var(--color-text)" }}
          >
            <option value="">Alle Arten</option>
            <option value="festmiete">Festmiete</option>
            <option value="monteurswohnung">Monteurswohnung</option>
            <option value="kurzmiete">Kurzmiete</option>
          </select>
        </Field>
        <Divider />
        <Field icon={Maximize} label="Zimmer" className="md:w-44">
          <select
            value={minRooms}
            onChange={(e) => setMinRooms(parseInt(e.target.value))}
            className="w-full bg-transparent outline-none text-sm cursor-pointer"
            style={{ color: "var(--color-text)" }}
          >
            <option value={0}>Beliebig</option>
            <option value={1}>Ab 1</option>
            <option value={2}>Ab 2</option>
            <option value={3}>Ab 3</option>
            <option value={4}>Ab 4</option>
          </select>
        </Field>

        <button
          onClick={handleSearch}
          className="btn-primary md:!rounded-2xl shrink-0 !px-7 !py-4"
        >
          <Search size={17} />
          Suchen
        </button>
      </div>
    </div>
  );
}

function Field({
  icon: Icon,
  label,
  children,
  className = "",
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label
      className={`group flex items-center gap-3 px-5 py-3 rounded-2xl cursor-text transition hover:bg-[var(--color-cream)] ${className}`}
    >
      <Icon size={17} className="shrink-0" />
      <div className="flex-1 min-w-0">
        <div
          className="text-[10px] font-semibold uppercase tracking-eyebrow mb-0.5"
          style={{ color: "var(--color-text-muted)" }}
        >
          {label}
        </div>
        {children}
      </div>
    </label>
  );
}

function Divider() {
  return (
    <div
      className="hidden md:block w-px self-stretch my-2"
      style={{ background: "var(--color-border)" }}
    />
  );
}
