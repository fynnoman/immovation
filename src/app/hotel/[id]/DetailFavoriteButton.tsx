"use client";

import { Heart } from "lucide-react";
import { useFavorites } from "@/components/FavoritesProvider";

interface DetailFavoriteButtonProps {
  propertyId: string;
}

export default function DetailFavoriteButton({ propertyId }: DetailFavoriteButtonProps) {
  const { toggleFavorite, isFavorite } = useFavorites();
  const favorited = isFavorite(propertyId);

  return (
    <button
      onClick={() => toggleFavorite(propertyId)}
      className={`p-2 border rounded-md transition ${
        favorited
          ? "bg-red-500 border-red-500 text-white"
          : "border-gray-300 hover:border-[#B8860B] text-gray-500"
      }`}
    >
      <Heart size={20} className={favorited ? "fill-white" : ""} />
    </button>
  );
}
