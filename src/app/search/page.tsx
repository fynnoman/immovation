"use client";

import { useState, useMemo, Suspense, lazy } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import SearchBar from "@/components/SearchBar";
import PropertyCard from "@/components/HotelCard";
import FilterSidebar, {
  defaultFilters,
  type FilterState,
} from "@/components/FilterSidebar";
import { PropertyCardSkeleton } from "@/components/Skeleton";
import { properties } from "@/data/hotels";
import { SlidersHorizontal, X, Search, Map, List, ChevronRight, Home } from "lucide-react";

const PropertyMap = lazy(() => import("@/components/PropertyMap"));

function SearchContent() {
  const searchParams = useSearchParams();
  const destination = searchParams.get("destination") || "";
  const typeParam = searchParams.get("type") || "";
  const minRoomsParam = parseInt(searchParams.get("minRooms") || "0");

  const [filters, setFilters] = useState<FilterState>(() => {
    const initial = { ...defaultFilters };
    if (typeParam) initial.rentalTypes = [typeParam];
    return initial;
  });
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [viewMode, setViewMode] = useState<"list" | "map">("list");

  const filteredProperties = useMemo(() => {
    let result = properties;

    // Filter by destination
    if (destination) {
      const search = destination.toLowerCase();
      result = result.filter(
        (p) =>
          p.city.toLowerCase().includes(search) ||
          p.country.toLowerCase().includes(search) ||
          p.name.toLowerCase().includes(search) ||
          p.address.toLowerCase().includes(search)
      );
    }

    // Filter by min rooms from search bar
    if (minRoomsParam > 0) {
      result = result.filter((p) => p.rooms >= minRoomsParam);
    }

    // Filter by price
    result = result.filter(
      (p) =>
        p.pricePerMonth >= filters.priceRange[0] &&
        (filters.priceRange[1] >= 5000 || p.pricePerMonth <= filters.priceRange[1])
    );

    // Filter by rooms
    if (filters.rooms.length > 0) {
      result = result.filter((p) => filters.rooms.includes(p.rooms));
    }

    // Filter by rental type
    if (filters.rentalTypes.length > 0) {
      result = result.filter((p) =>
        filters.rentalTypes.includes(p.rentalType)
      );
    }

    // Filter by size
    if (filters.minSize > 0) {
      result = result.filter((p) => p.size >= filters.minSize);
    }

    // Filter by furnished
    if (filters.furnished === true) {
      result = result.filter((p) => p.furnished);
    }

    // Filter by availability
    if (filters.available) {
      result = result.filter((p) => p.available);
    }

    // Filter by rating
    if (filters.minRating > 0) {
      result = result.filter((p) => p.rating >= filters.minRating);
    }

    // Sort
    switch (filters.sortBy) {
      case "price-low":
        result = [...result].sort(
          (a, b) => a.pricePerMonth - b.pricePerMonth
        );
        break;
      case "price-high":
        result = [...result].sort(
          (a, b) => b.pricePerMonth - a.pricePerMonth
        );
        break;
      case "rating":
        result = [...result].sort((a, b) => b.rating - a.rating);
        break;
      case "size":
        result = [...result].sort((a, b) => b.size - a.size);
        break;
    }

    return result;
  }, [destination, minRoomsParam, filters]);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="text-gray-600 hover:underline hover:text-gray-900 flex items-center gap-1">
              <Home size={14} /> Startseite
            </Link>
            <ChevronRight size={14} />
            <span className="text-gray-700">
              {destination ? `Suche: ${destination}` : "Alle Wohnungen"}
            </span>
          </div>
        </div>
      </div>

      {/* Search bar */}
      <div className="bg-[#B5A189] py-4">
        <div className="max-w-7xl mx-auto px-4">
          <SearchBar
            variant="compact"
            initialValues={{ destination, rentalType: typeParam, minRooms: minRoomsParam }}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Results header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-xl font-bold text-gray-900">
              {destination
                ? `${destination}: ${filteredProperties.length} Wohnungen gefunden`
                : `${filteredProperties.length} Wohnungen gefunden`}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            {/* View mode toggle */}
            <div className="hidden sm:flex items-center border border-gray-300 rounded-md overflow-hidden">
              <button
                onClick={() => setViewMode("list")}
                className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition ${
                  viewMode === "list"
                    ? "bg-[#B5A189] text-gray-900"
                    : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
              >
                <List size={16} /> Liste
              </button>
              <button
                onClick={() => setViewMode("map")}
                className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition ${
                  viewMode === "map"
                    ? "bg-[#B5A189] text-gray-900"
                    : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
              >
                <Map size={16} /> Karte
              </button>
            </div>

            {/* Mobile filter toggle */}
            <button
              className="lg:hidden flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-sm hover:border-[#B5A189] transition"
              onClick={() => setShowMobileFilters(true)}
            >
              <SlidersHorizontal size={16} />
              Filter
            </button>

            {/* Sort dropdown */}
            <select
              value={filters.sortBy}
              onChange={(e) =>
                setFilters({ ...filters, sortBy: e.target.value })
              }
              className="px-4 py-2 border border-gray-300 rounded-md text-sm bg-white outline-none hover:border-[#B5A189] focus:border-[#B5A189] transition"
            >
              <option value="recommended">Empfohlen</option>
              <option value="price-low">Miete (aufsteigend)</option>
              <option value="price-high">Miete (absteigend)</option>
              <option value="rating">Bewertung</option>
              <option value="size">Größe</option>
            </select>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Desktop filters */}
          <aside className="hidden lg:block w-72 shrink-0">
            <FilterSidebar filters={filters} onFilterChange={setFilters} />
          </aside>

          {/* Mobile filters overlay */}
          {showMobileFilters && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div
                className="absolute inset-0 bg-black/50"
                onClick={() => setShowMobileFilters(false)}
              />
              <div className="absolute right-0 top-0 bottom-0 w-80 bg-white overflow-y-auto">
                <div className="flex items-center justify-between p-4 border-b">
                  <h2 className="font-bold text-gray-900">Filter</h2>
                  <button
                    onClick={() => setShowMobileFilters(false)}
                    className="p-1 hover:bg-gray-100 rounded-sm"
                  >
                    <X size={20} />
                  </button>
                </div>
                <div className="p-4">
                  <FilterSidebar
                    filters={filters}
                    onFilterChange={setFilters}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Results */}
          <div className="flex-1">
            {viewMode === "map" ? (
              <Suspense
                fallback={
                  <div className="h-[600px] bg-gray-200 rounded-lg animate-pulse flex items-center justify-center">
                    <p className="text-gray-400 text-sm">Karte wird geladen...</p>
                  </div>
                }
              >
                <PropertyMap
                  properties={filteredProperties}
                  className="h-[600px] w-full rounded-lg border border-gray-200"
                />
              </Suspense>
            ) : filteredProperties.length === 0 ? (
              <div className="bg-white border border-gray-200 rounded-lg p-12 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search size={28} className="text-gray-400" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  Keine Wohnungen gefunden
                </h2>
                <p className="text-gray-500 mb-4">
                  Versuchen Sie, Ihre Filter anzupassen oder eine andere
                  Stadt zu wählen.
                </p>
                <button
                  onClick={() => setFilters(defaultFilters)}
                  className="px-6 py-2 bg-[#B5A189] text-gray-900 rounded-md text-sm font-medium hover:bg-[#9B8B73] transition"
                >
                  Filter zurücksetzen
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredProperties.map((property) => (
                  <PropertyCard
                    key={property.id}
                    property={property}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="bg-gray-50 min-h-screen">
          <div className="bg-[#B5A189] py-4">
            <div className="max-w-7xl mx-auto px-4">
              <div className="h-14 bg-[#9B8B73]/30 rounded-lg animate-pulse" />
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="h-6 bg-gray-200 rounded w-64 mb-6 animate-pulse" />
            <div className="flex gap-6">
              <aside className="hidden lg:block w-72 shrink-0">
                <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4 animate-pulse">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="space-y-2">
                      <div className="h-4 bg-gray-200 rounded w-24" />
                      <div className="h-8 bg-gray-200 rounded" />
                    </div>
                  ))}
                </div>
              </aside>
              <div className="flex-1 space-y-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <PropertyCardSkeleton key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      }
    >
      <SearchContent />
    </Suspense>
  );
}
