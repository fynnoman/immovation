"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Globe, HelpCircle, User, Heart } from "lucide-react";
import { useFavorites } from "@/components/FavoritesProvider";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { count } = useFavorites();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b shadow-soft"
          : "bg-transparent border-b border-transparent"
      }`}
      style={scrolled ? { borderColor: "var(--color-border)" } : undefined}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-[72px]">
          <Link href="/" className="flex items-center gap-2">
            <span
              className="font-display text-[22px] font-semibold tracking-tight"
              style={{ color: "var(--color-text)" }}
            >
              Immovation
              <span style={{ color: "var(--color-accent)" }}>.</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <NavLink href="/search">Wohnungen</NavLink>
            <NavLink href="/search?type=festmiete">Festmiete</NavLink>
            <NavLink href="/search?type=monteurswohnung">Monteure</NavLink>
            <NavLink href="/search?type=kurzmiete">Kurzmiete</NavLink>
            <NavLink href="/vermieter">Vermieten</NavLink>
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <Link
              href="/favoriten"
              className="relative flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium transition hover:bg-[var(--color-cream)]"
              style={{ color: "var(--color-text-secondary)" }}
            >
              <Heart size={16} />
              {count > 0 && (
                <span
                  className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 text-[10px] font-bold rounded-full flex items-center justify-center text-white"
                  style={{ background: "var(--color-accent)" }}
                >
                  {count}
                </span>
              )}
            </Link>
            <button
              className="flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium transition hover:bg-[var(--color-cream)]"
              style={{ color: "var(--color-text-secondary)" }}
              aria-label="Sprache"
            >
              <Globe size={16} />
              <span className="text-xs font-semibold tracking-wide">DE</span>
            </button>
            <button
              className="flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium transition hover:bg-[var(--color-cream)]"
              style={{ color: "var(--color-text-secondary)" }}
              aria-label="Hilfe"
            >
              <HelpCircle size={16} />
            </button>
            <Link
              href="/"
              className="ml-2 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition border"
              style={{
                color: "var(--color-text)",
                borderColor: "var(--color-border-warm)",
                background: "rgba(255,255,255,0.7)",
              }}
            >
              <User size={15} />
              Anmelden
            </Link>
            <Link href="/" className="btn-primary !py-2.5 !px-5 !text-sm">
              Registrieren
            </Link>
          </div>

          <button
            className="lg:hidden p-2 rounded-full transition hover:bg-[var(--color-cream)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menü"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          className="lg:hidden border-t"
          style={{ borderColor: "var(--color-border)", background: "var(--color-background)" }}
        >
          <div className="px-6 py-4 space-y-1">
            {[
              { href: "/search", label: "Alle Wohnungen" },
              { href: "/search?type=festmiete", label: "Festmiete" },
              { href: "/search?type=monteurswohnung", label: "Monteurswohnungen" },
              { href: "/search?type=kurzmiete", label: "Kurzmiete" },
              { href: "/favoriten", label: `Favoriten${count > 0 ? ` (${count})` : ""}` },
              { href: "/vermieter", label: "Wohnung inserieren" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-sm font-medium transition hover:bg-[var(--color-cream)]"
                style={{ color: "var(--color-text)" }}
              >
                {item.label}
              </Link>
            ))}
            <div
              className="pt-3 mt-3 border-t flex gap-2"
              style={{ borderColor: "var(--color-border)" }}
            >
              <Link href="/" className="btn-secondary flex-1" onClick={() => setMobileMenuOpen(false)}>
                Anmelden
              </Link>
              <Link href="/" className="btn-primary flex-1" onClick={() => setMobileMenuOpen(false)}>
                Registrieren
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="px-4 py-2 rounded-full text-sm font-medium transition hover:bg-[var(--color-cream)]"
      style={{ color: "var(--color-text-secondary)" }}
    >
      {children}
    </Link>
  );
}
