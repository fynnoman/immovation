"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  X,
  Globe,
  HelpCircle,
  User,
  Heart,
} from "lucide-react";
import Logo from "@/components/Logo";
import { useFavorites } from "@/components/FavoritesProvider";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { count } = useFavorites();

  return (
    <header className="bg-white text-gray-800 border-b border-gray-200">
      {/* Top bar */}
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="h-8 w-auto" />
            <span className="text-2xl font-bold tracking-tight text-[#B5A189]" style={{ fontFamily: "var(--font-michroma)" }}>Immovation</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="/favoriten"
              className="relative flex items-center gap-1 px-3 py-2 rounded-sm hover:bg-gray-100 text-sm font-medium transition text-gray-600"
            >
              <Heart size={18} />
              Favoriten
              {count > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {count}
                </span>
              )}
            </Link>
            <button className="flex items-center gap-1 px-3 py-2 rounded-sm hover:bg-gray-100 text-sm font-medium transition text-gray-600">
              <Globe size={18} />
              DE
            </button>
            <button className="flex items-center gap-1 px-3 py-2 rounded-sm hover:bg-gray-100 text-sm font-medium transition text-gray-600">
              <HelpCircle size={18} />
              Hilfe
            </button>
            <Link
              href="/vermieter"
              className="px-4 py-2 rounded-sm hover:bg-gray-100 text-sm font-medium transition text-gray-600"
            >
              Wohnung inserieren
            </Link>
            <Link
              href="/"
              className="ml-2 flex items-center gap-1 px-4 py-2 bg-[#B5A189] text-gray-900 rounded-sm text-sm font-semibold hover:bg-[#9B8B73] transition"
            >
              <User size={18} />
              Anmelden
            </Link>
            <Link
              href="/"
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-sm text-sm font-semibold hover:bg-gray-50 transition"
            >
              Registrieren
            </Link>
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-sm transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Category nav */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex gap-1 overflow-x-auto py-2 -mb-px scrollbar-hide">
            {[
              { label: "Alle Wohnungen", href: "/search", active: true },
              { label: "Festmiete", href: "/search?type=festmiete" },
              { label: "Monteurswohnungen", href: "/search?type=monteurswohnung" },
              { label: "Kurzmiete", href: "/search?type=kurzmiete" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition ${
                  item.active
                    ? "bg-[#B5A189] text-gray-900"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-gray-50">
          <div className="px-4 py-3 space-y-2">
            <Link
              href="/favoriten"
              className="flex items-center gap-2 px-3 py-2 rounded-sm hover:bg-gray-100 text-sm text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Heart size={16} />
              Favoriten {count > 0 && `(${count})`}
            </Link>
            <Link
              href="/"
              className="block px-3 py-2 rounded-sm hover:bg-gray-100 text-sm text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Anmelden
            </Link>
            <Link
              href="/"
              className="block px-3 py-2 rounded-sm hover:bg-gray-100 text-sm text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Registrieren
            </Link>
            <Link
              href="/vermieter"
              className="block px-3 py-2 rounded-sm hover:bg-gray-100 text-sm text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Wohnung inserieren
            </Link>
            <button className="flex items-center gap-2 px-3 py-2 rounded-sm hover:bg-gray-100 text-sm w-full text-gray-700">
              <HelpCircle size={16} /> Hilfe
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
