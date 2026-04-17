import { notFound } from "next/navigation";
import Link from "next/link";
import { properties } from "@/data/hotels";
import {
  MapPin,
  Check,
  Wifi,
  Car,
  UtensilsCrossed,
  Dumbbell,
  Share2,
  ChevronRight,
  Home,
  Maximize,
  DoorOpen,
  Sofa,
  Calendar,
  Zap,
  Layers,
  ArrowRight,
} from "lucide-react";
import BookingWidget from "./BookingWidget";
import ImageGallery from "@/components/ImageGallery";
import PropertyCard from "@/components/HotelCard";
import DetailFavoriteButton from "./DetailFavoriteButton";

function getRatingColor(rating: number): string {
  if (rating >= 9) return "bg-[#B8860B]";
  if (rating >= 8) return "bg-[#B8860B]/90";
  if (rating >= 7) return "bg-[#B8860B]/75";
  return "bg-[#B8860B]/60";
}

function getRentalTypeBadge(type: string) {
  switch (type) {
    case "festmiete":
      return { label: "Festmiete", color: "bg-blue-100 text-blue-700" };
    case "monteurswohnung":
      return { label: "Monteurswohnung", color: "bg-orange-100 text-orange-700" };
    case "kurzmiete":
      return { label: "Kurzmiete", color: "bg-green-100 text-green-700" };
    default:
      return { label: type, color: "bg-gray-100 text-gray-700" };
  }
}

function getAmenityIcon(amenity: string) {
  const lower = amenity.toLowerCase();
  if (lower.includes("wlan") || lower.includes("wifi"))
    return <Wifi size={16} />;
  if (lower.includes("parkplatz") || lower.includes("stellplatz") || lower.includes("garage"))
    return <Car size={16} />;
  if (lower.includes("küche") || lower.includes("einbauküche"))
    return <UtensilsCrossed size={16} />;
  if (lower.includes("fitness"))
    return <Dumbbell size={16} />;
  return <Check size={16} />;
}

interface PropertyPageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | undefined }>;
}

export default async function PropertyPage({
  params,
  searchParams,
}: PropertyPageProps) {
  const { id } = await params;
  await searchParams;
  const property = properties.find((p) => p.id === id);

  if (!property) return notFound();

  const badge = getRentalTypeBadge(property.rentalType);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="text-gray-600 hover:underline hover:text-gray-900">
              Startseite
            </Link>
            <ChevronRight size={14} />
            <Link
              href={`/search?destination=${encodeURIComponent(property.city)}`}
              className="text-gray-600 hover:underline hover:text-gray-900"
            >
              {property.city}
            </Link>
            <ChevronRight size={14} />
            <span className="text-gray-700">{property.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${badge.color}`}>
                {badge.label}
              </span>
              {property.available ? (
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-green-100 text-green-700">
                  Verfügbar
                </span>
              ) : (
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-red-100 text-red-700">
                  Vermietet
                </span>
              )}
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              {property.name}
            </h1>
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <MapPin size={16} />
              <span className="underline">{property.address}</span>
              <span className="text-gray-500">
                – {property.distanceFromCenter} km vom Zentrum
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <DetailFavoriteButton propertyId={property.id} />
            <button className="p-2 border border-gray-300 rounded-md hover:border-[#B8860B] transition">
              <Share2 size={20} className="text-gray-500" />
            </button>
            <button className="px-6 py-2.5 bg-[#B8860B] hover:bg-[#9A7209] text-gray-900 rounded-md font-semibold text-sm transition">
              Anfrage senden
            </button>
          </div>
        </div>

        {/* Image gallery */}
        <ImageGallery images={property.images} alt={property.name} />

        {/* Quick facts */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-[#B8860B]/10 rounded-lg flex items-center justify-center">
              <DoorOpen size={20} className="text-[#B8860B]" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Zimmer</p>
              <p className="font-bold text-gray-900">{property.rooms}</p>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-[#B8860B]/10 rounded-lg flex items-center justify-center">
              <Maximize size={20} className="text-[#B8860B]" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Wohnfläche</p>
              <p className="font-bold text-gray-900">{property.size} m²</p>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-[#B8860B]/10 rounded-lg flex items-center justify-center">
              <Sofa size={20} className="text-[#B8860B]" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Ausstattung</p>
              <p className="font-bold text-gray-900">{property.furnished ? "Möbliert" : "Unmöbliert"}</p>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-[#B8860B]/10 rounded-lg flex items-center justify-center">
              <Home size={20} className="text-[#B8860B]" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Monatsmiete</p>
              <p className="font-bold text-gray-900">€{property.pricePerMonth.toLocaleString("de-DE")}</p>
            </div>
          </div>
        </div>

        {/* Extended property data */}
        {(property.floor || property.buildYear || property.energyRating || property.nebenkosten) && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {property.floor && (
              <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Layers size={20} className="text-gray-500" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Etage</p>
                  <p className="font-bold text-gray-900">{property.floor}. OG</p>
                </div>
              </div>
            )}
            {property.buildYear && (
              <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Calendar size={20} className="text-gray-500" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Baujahr</p>
                  <p className="font-bold text-gray-900">{property.buildYear}</p>
                </div>
              </div>
            )}
            {property.energyRating && (
              <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Zap size={20} className="text-gray-500" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Energieeffizienz</p>
                  <p className="font-bold text-gray-900">Klasse {property.energyRating}</p>
                </div>
              </div>
            )}
            {property.nebenkosten && (
              <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Home size={20} className="text-gray-500" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Nebenkosten</p>
                  <p className="font-bold text-gray-900">€{property.nebenkosten.toLocaleString("de-DE")}/Mo</p>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left content */}
          <div className="flex-1">
            {/* Rating box */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <div className="flex items-center gap-4">
                <div
                  className={`${getRatingColor(
                    property.rating
                  )} text-white rounded-tl-lg rounded-tr-lg rounded-br-lg w-14 h-14 flex items-center justify-center text-xl font-bold`}
                >
                  {property.rating}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{property.reviewScore}</p>
                  <p className="text-sm text-gray-500">
                    {property.reviewCount.toLocaleString("de-DE")} Bewertungen
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 pt-4 border-t border-gray-100">
                {[
                  { label: "Zustand", score: (property.rating + 0.2).toFixed(1) },
                  { label: "Ausstattung", score: (property.rating - 0.1).toFixed(1) },
                  { label: "Lage", score: (property.rating + 0.3).toFixed(1) },
                  { label: "Vermieter", score: (property.rating + 0.1).toFixed(1) },
                ].map((cat) => (
                  <div key={cat.label}>
                    <p className="text-xs text-gray-500 mb-1">{cat.label}</p>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#B8860B] rounded-full"
                          style={{
                            width: `${(parseFloat(cat.score) / 10) * 100}%`,
                          }}
                        />
                      </div>
                      <span className="text-xs font-medium text-gray-700">
                        {cat.score}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <h2 className="text-lg font-bold text-gray-900 mb-3">
                Über diese Wohnung
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {property.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {property.available && (
                  <span className="flex items-center gap-1 text-sm text-green-700 bg-green-50 px-3 py-1.5 rounded-full font-medium">
                    <Check size={14} /> Sofort verfügbar
                  </span>
                )}
                {property.furnished && (
                  <span className="flex items-center gap-1 text-sm text-green-700 bg-green-50 px-3 py-1.5 rounded-full font-medium">
                    <Check size={14} /> Vollständig möbliert
                  </span>
                )}
              </div>
            </div>

            {/* Amenities */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                Ausstattung & Merkmale
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {property.amenities.map((amenity) => (
                  <div
                    key={amenity}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <span className="text-[#B8860B]">
                      {getAmenityIcon(amenity)}
                    </span>
                    {amenity}
                  </div>
                ))}
              </div>
            </div>

            {/* Tenant reviews */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                Mieterbewertungen
              </h2>
              <div className="space-y-4">
                {[
                  {
                    name: "Anna M.",
                    date: "März 2026",
                    score: 9,
                    text: "Tolle Wohnung in super Lage! Der Vermieter war sehr freundlich und hat alles reibungslos organisiert. Küche und Bad in einwandfreiem Zustand.",
                  },
                  {
                    name: "Thomas K.",
                    date: "Februar 2026",
                    score: 8,
                    text: "Sehr gepflegte Wohnung mit moderner Ausstattung. Gute Anbindung an öffentliche Verkehrsmittel. Würde ich weiterempfehlen.",
                  },
                  {
                    name: "Sarah L.",
                    date: "Januar 2026",
                    score: 9,
                    text: "Perfektes Preis-Leistungs-Verhältnis. Die Wohnung ist genau wie beschrieben. Schnelle Kommunikation mit dem Vermieter.",
                  },
                ].map((review) => (
                  <div
                    key={review.name}
                    className="border-b border-gray-100 pb-4 last:border-0"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#B8860B]/10 rounded-full flex items-center justify-center text-sm font-bold text-[#B8860B]">
                          {review.name[0]}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {review.name}
                          </p>
                          <p className="text-xs text-gray-500">{review.date}</p>
                        </div>
                      </div>
                      <span className="bg-[#B8860B] text-gray-900 text-xs font-bold px-2 py-1 rounded">
                        {review.score}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{review.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking widget */}
          <aside className="lg:w-80 shrink-0">
            <BookingWidget property={property} />
          </aside>
        </div>

        {/* Similar properties */}
        {(() => {
          const similar = properties
            .filter((p) => p.id !== property.id && p.city === property.city)
            .slice(0, 3);
          const fallback = similar.length > 0 ? similar : properties
            .filter((p) => p.id !== property.id && p.rentalType === property.rentalType)
            .slice(0, 3);
          const toShow = similar.length > 0 ? similar : fallback;

          if (toShow.length === 0) return null;
          return (
            <div className="mt-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">
                  Ähnliche Wohnungen
                </h2>
                <Link
                  href={`/search?destination=${encodeURIComponent(property.city)}`}
                  className="text-sm text-[#B8860B] hover:text-[#9A7209] font-medium flex items-center gap-1 transition"
                >
                  Alle in {property.city} <ArrowRight size={14} />
                </Link>
              </div>
              <div className="space-y-4">
                {toShow.map((p) => (
                  <PropertyCard key={p.id} property={p} />
                ))}
              </div>
            </div>
          );
        })()}
      </div>
    </div>
  );
}
