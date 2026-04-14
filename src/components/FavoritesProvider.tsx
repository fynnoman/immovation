"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";

interface FavoritesContextType {
  favorites: string[];
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
  count: number;
}

const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  toggleFavorite: () => {},
  isFavorite: () => false,
  count: 0,
});

export function useFavorites() {
  return useContext(FavoritesContext);
}

export default function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("immovation-favorites");
    if (stored) {
      try {
        setFavorites(JSON.parse(stored));
      } catch {}
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem("immovation-favorites", JSON.stringify(favorites));
    }
  }, [favorites, loaded]);

  const toggleFavorite = useCallback((id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  }, []);

  const isFavorite = useCallback(
    (id: string) => favorites.includes(id),
    [favorites]
  );

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, isFavorite, count: favorites.length }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
