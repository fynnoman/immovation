"use client";

import { useFavorites } from "@/components/FavoritesProvider";
import PropertyCard from "@/components/HotelCard";
import { properties } from "@/data/hotels";
import { Heart, Search, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function FavoritenPage() {
  const { favorites } = useFavorites();
  const favoriteProperties = properties.filter((p) => favorites.includes(p.id));

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <Link
            href="/"
            className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 transition"
          >
            <ArrowLeft size={20} className="text-gray-600" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Heart size={24} className="text-red-500 fill-red-500" />
              Meine Favoriten
            </h1>
            <p className="text-sm text-gray-500">
              {favoriteProperties.length}{" "}
              {favoriteProperties.length === 1 ? "Wohnung" : "Wohnungen"} gespeichert
            </p>
          </div>
        </div>

        {favoriteProperties.length === 0 ? (
          <div className="bg-white border border-gray-200 rounded-lg p-12 text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart size={32} className="text-gray-300" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Noch keine Favoriten
            </h2>
            <p className="text-gray-500 mb-6 max-w-md mx-auto">
              Speichern Sie interessante Wohnungen mit dem Herz-Symbol, um sie
              hier wiederzufinden.
            </p>
            <Link
              href="/search"
              className="inline-flex items-center gap-2 bg-[#FDC700] hover:bg-[#d4b500] text-gray-900 px-6 py-3 rounded-md font-semibold text-sm transition"
            >
              <Search size={18} />
              Wohnungen entdecken
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {favoriteProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
