"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Heart, Check, ImageIcon, Maximize, DoorOpen } from "lucide-react";
import type { Property } from "@/data/hotels";
import { useFavorites } from "@/components/FavoritesProvider";

interface PropertyCardProps {
  property: Property;
}

function getRentalTypeLabel(type: string): string {
  switch (type) {
    case "festmiete":
      return "Festmiete";
    case "monteurswohnung":
      return "Monteurswohnung";
    case "kurzmiete":
      return "Kurzmiete";
    default:
      return type;
  }
}

function getRentalTypeColor(type: string): string {
  switch (type) {
    case "festmiete":
      return "bg-blue-100 text-blue-700";
    case "monteurswohnung":
      return "bg-amber-100 text-amber-700";
    case "kurzmiete":
      return "bg-purple-100 text-purple-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const { toggleFavorite, isFavorite } = useFavorites();
  const favorited = isFavorite(property.id);

  return (
    <Link href={`/hotel/${property.id}`} className="block group">
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover-lift transition-all duration-300 hover:border-[#B8860B]/30">
        <div className="flex flex-col sm:flex-row">
          {/* Image */}
          <div className="sm:w-64 h-48 sm:h-auto relative shrink-0 overflow-hidden">
            {property.images.length > 0 ? (
              <Image
                src={property.images[0]}
                alt={property.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, 256px"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-400">
                <div className="text-center">
                  <ImageIcon size={32} className="mx-auto mb-1 text-gray-300" />
                  <p className="text-xs text-gray-400">Bild-Platzhalter</p>
                </div>
              </div>
            )}
            <button
              className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition z-10 ${
                favorited
                  ? "bg-red-500 text-white"
                  : "bg-white/80 hover:bg-white text-gray-500"
              }`}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleFavorite(property.id);
              }}
            >
              <Heart size={16} className={favorited ? "fill-white" : ""} />
            </button>
            <span
              className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${getRentalTypeColor(
                property.rentalType
              )}`}
            >
              {getRentalTypeLabel(property.rentalType)}
            </span>
          </div>

          {/* Content */}
          <div className="flex-1 p-4 flex flex-col">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-base font-bold text-gray-900 group-hover:underline decoration-[#B8860B] underline-offset-2 mb-1">
                  {property.name}
                </h3>

                <div className="flex items-center gap-1 text-xs text-gray-600 mb-2">
                  <MapPin size={12} />
                  <span className="underline">
                    {property.city}, {property.country}
                  </span>
                  <span className="text-gray-500 no-underline ml-1">
                    · {property.distanceFromCenter} km vom Zentrum
                  </span>
                </div>

                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {property.shortDescription}
                </p>

                <div className="flex flex-wrap gap-3 mb-2 text-xs text-gray-600">
                  <span className="flex items-center gap-1">
                    <DoorOpen size={14} className="text-gray-400" />
                    {property.rooms} {property.rooms === 1 ? "Zimmer" : "Zimmer"}
                  </span>
                  <span className="flex items-center gap-1">
                    <Maximize size={14} className="text-gray-400" />
                    {property.size} m²
                  </span>
                  {property.furnished && (
                    <span className="flex items-center gap-1 text-green-700 font-medium">
                      <Check size={14} /> Möbliert
                    </span>
                  )}
                </div>
              </div>

              {/* Rating */}
              <div className="text-right shrink-0">
                <div className="flex items-center gap-2">
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-800">
                      {property.reviewScore}
                    </p>
                    <p className="text-xs text-gray-500">
                      {property.reviewCount} Bewertungen
                    </p>
                  </div>
                  <div className="bg-[#B8860B] text-gray-900 rounded-tl-lg rounded-tr-lg rounded-br-lg w-10 h-10 flex items-center justify-center text-sm font-bold">
                    {property.rating}
                  </div>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="mt-auto pt-3 border-t border-gray-100 flex items-end justify-between">
              <div className="flex items-center gap-2">
                {property.available ? (
                  <span className="text-xs text-green-700 font-medium flex items-center gap-1">
                    <Check size={12} /> Verfügbar
                  </span>
                ) : (
                  <span className="text-xs text-red-600 font-medium">
                    Vergeben
                  </span>
                )}
              </div>
              <div className="text-right">
                {property.originalPrice && (
                  <p className="text-sm text-red-500 line-through">
                    €{property.originalPrice.toLocaleString("de-DE")}
                  </p>
                )}
                <p className="text-xl font-bold text-gray-900">
                  €{property.pricePerMonth.toLocaleString("de-DE")}
                </p>
                <p className="text-xs text-gray-500">pro Monat</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
