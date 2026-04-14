# Immovation – Buchungsplattform

Eine moderne Buchungsplattform ähnlich wie Booking.com, gebaut mit Next.js, TypeScript und Tailwind CSS.

## 🚀 Features

- **Startseite** mit Suchleiste, beliebten Reisezielen und Top-Unterkünften
- **Suchseite** mit Filtern (Preis, Sterne, Bewertung, Unterkunftsart, Ausstattung) und Sortierung
- **Hoteldetailseite** mit Bewertungen, Ausstattung und Buchungswidget
- **Buchungsflow** mit Preisübersicht und Bestätigung
- **Responsive Design** – optimiert für Desktop, Tablet und Mobilgeräte

## 🎨 Design

- Weißes Theme mit Akzentfarbe **#00B8D9**
- Moderne, klare Oberfläche
- Deutsche Benutzeroberfläche

## 🛠️ Tech Stack

- [Next.js 16](https://nextjs.org/) mit App Router und Turbopack
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) (Icons)
- [date-fns](https://date-fns.org/) (Datumsformatierung)

## 📁 Projektstruktur

```
src/
├── app/
│   ├── layout.tsx          # Root Layout (Header + Footer)
│   ├── page.tsx             # Startseite
│   ├── globals.css          # Globale Styles
│   ├── search/
│   │   └── page.tsx         # Suchseite mit Filtern
│   └── hotel/
│       └── [id]/
│           ├── page.tsx     # Hoteldetailseite
│           └── BookingWidget.tsx  # Buchungswidget
├── components/
│   ├── Header.tsx           # Navigation & Header
│   ├── Footer.tsx           # Footer
│   ├── SearchBar.tsx        # Suchleiste
│   ├── HotelCard.tsx        # Hotelkarte für Suchergebnisse
│   └── FilterSidebar.tsx    # Filterseitenleiste
└── data/
    └── hotels.ts            # Mock-Daten für Hotels
```

## 🏃 Projekt starten

### Entwicklungsserver starten

```bash
npm run dev
```

Öffnen Sie [http://localhost:3000](http://localhost:3000) in Ihrem Browser.

### Produktions-Build

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## 📝 Hinweis

Dies ist eine Demo-Website mit Platzhalter-Daten. Es werden keine echten Buchungen durchgeführt oder Zahlungen verarbeitet. Die Hotel-Bilder sind Platzhalter und sollten durch echte Bilder ersetzt werden.
