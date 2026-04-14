import Link from "next/link";
import { Home, Search, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="w-24 h-24 bg-[#FDC700]/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Home size={40} className="text-[#FDC700]" />
        </div>
        <h1 className="text-6xl font-bold text-gray-900 mb-2">404</h1>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          Seite nicht gefunden
        </h2>
        <p className="text-gray-500 mb-8 leading-relaxed">
          Die gesuchte Seite existiert leider nicht oder wurde verschoben.
          Vielleicht finden Sie Ihre Traumwohnung über unsere Suche?
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-[#FDC700] hover:bg-[#d4b500] text-gray-900 px-6 py-3 rounded-md font-semibold text-sm transition active:scale-95"
          >
            <ArrowLeft size={18} />
            Zur Startseite
          </Link>
          <Link
            href="/search"
            className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-semibold text-sm hover:bg-gray-50 transition active:scale-95"
          >
            <Search size={18} />
            Wohnungen suchen
          </Link>
        </div>
      </div>
    </div>
  );
}
