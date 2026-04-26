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
    case "festmiete": return "Festmiete";
    case "monteurswohnung": return "Monteurswohnung";
    case "kurzmiete": return "Kurzmiete";
    default: return type;
  }
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const { toggleFavorite, isFavorite } = useFavorites();
  const favorited = isFavorite(property.id);

  return (
    <Link href={`/hotel/${property.id}`} className="block group">
      <div
        className="rounded-2xl overflow-hidden border bg-white hover-lift"
        style={{ borderColor: "var(--color-border-warm)" }}
      >
        <div className="flex flex-col sm:flex-row">
          {/* Image */}
          <div className="sm:w-72 h-52 sm:h-auto relative shrink-0 overflow-hidden">
            {property.images.length > 0 ? (
              <Image
                src={property.images[0]}
                alt={property.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 288px"
              />
            ) : (
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ background: "var(--color-cream)" }}
              >
                <div className="text-center" style={{ color: "var(--color-text-muted)" }}>
                  <ImageIcon size={28} className="mx-auto mb-1 opacity-60" />
                  <p className="text-[10px]">Kein Bild</p>
                </div>
              </div>
            )}
            <button
              className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition backdrop-blur"
              style={{
                background: favorited ? "var(--color-accent)" : "rgba(255,255,255,0.85)",
                color: favorited ? "#fff" : "var(--color-text-secondary)",
              }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleFavorite(property.id);
              }}
            >
              <Heart size={15} className={favorited ? "fill-white" : ""} />
            </button>
            <span
              className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-semibold backdrop-blur"
              style={{
                background: "rgba(255,255,255,0.9)",
                color: "var(--color-accent-deep)",
              }}
            >
              {getRentalTypeLabel(property.rentalType)}
            </span>
          </div>

          {/* Content */}
          <div className="flex-1 p-6 flex flex-col">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <h3
                  className="font-display text-lg mb-1.5 group-hover:opacity-80 transition"
                  style={{ color: "var(--color-text)" }}
                >
                  {property.name}
                </h3>

                <div
                  className="flex items-center gap-1 text-xs mb-3"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  <MapPin size={12} />
                  <span>{property.city}, {property.country}</span>
                  <span className="opacity-50 mx-1">·</span>
                  <span>{property.distanceFromCenter} km vom Zentrum</span>
                </div>

                <p
                  className="text-sm mb-4 line-clamp-2 leading-relaxed"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {property.shortDescription}
                </p>

                <div className="flex flex-wrap gap-4 text-xs" style={{ color: "var(--color-text-secondary)" }}>
                  <span className="flex items-center gap-1.5">
                    <DoorOpen size={13} />
                    {property.rooms} Zimmer
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Maximize size={13} />
                    {property.size} m²
                  </span>
                  {property.furnished && (
                    <span
                      className="flex items-center gap-1.5 font-medium"
                      style={{ color: "var(--color-accent-deep)" }}
                    >
                      <Check size={13} /> Möbliert
                    </span>
                  )}
                </div>
              </div>

              {/* Rating */}
              <div className="text-right shrink-0">
                <div
                  className="rounded-xl px-3 py-2 inline-flex flex-col items-center"
                  style={{
                    background: "var(--color-accent-soft)",
                    color: "var(--color-accent-deep)",
                  }}
                >
                  <span className="font-display text-lg leading-none">{property.rating}</span>
                  <span className="text-[9px] uppercase tracking-eyebrow mt-1 opacity-80">
                    {property.reviewScore}
                  </span>
                </div>
                <p className="text-[10px] mt-2" style={{ color: "var(--color-text-muted)" }}>
                  {property.reviewCount} Bewertungen
                </p>
              </div>
            </div>

            {/* Price */}
            <div
              className="mt-6 pt-5 border-t flex items-end justify-between"
              style={{ borderColor: "var(--color-border)" }}
            >
              <div className="flex items-center gap-2">
                {property.available ? (
                  <span
                    className="text-xs font-medium flex items-center gap-1.5"
                    style={{ color: "var(--color-accent-deep)" }}
                  >
                    <Check size={12} /> Verfügbar
                  </span>
                ) : (
                  <span className="text-xs font-medium" style={{ color: "var(--color-text-muted)" }}>
                    Vergeben
                  </span>
                )}
              </div>
              <div className="text-right">
                {property.originalPrice && (
                  <p
                    className="text-xs line-through opacity-60"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    €{property.originalPrice.toLocaleString("de-DE")}
                  </p>
                )}
                <p className="font-display text-2xl leading-none" style={{ color: "var(--color-text)" }}>
                  €{property.pricePerMonth.toLocaleString("de-DE")}
                </p>
                <p className="text-[10px] mt-1" style={{ color: "var(--color-text-muted)" }}>
                  pro Monat
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
