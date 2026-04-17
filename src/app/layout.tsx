import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FavoritesProvider from "@/components/FavoritesProvider";

const michroma = localFont({
  src: "../../public/Michroma-Regular.ttf",
  variable: "--font-michroma",
  display: "swap",
});

const rubik = localFont({
  src: [
    {
      path: "../../public/Rubik-VariableFont_wght.ttf",
      style: "normal",
    },
    {
      path: "../../public/Rubik-Italic-VariableFont_wght.ttf",
      style: "italic",
    },
  ],
  variable: "--font-rubik",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pavan-rent – Finden Sie Ihre perfekte Wohnung",
  description:
    "Finden Sie Festmieten, Monteurswohnungen und Kurzmieten in ganz Deutschland. Geprüfte Vermieter, schnelle Vermittlung.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${michroma.variable} ${rubik.variable} h-full antialiased`}
    >
      <body className={`${rubik.className} min-h-full flex flex-col bg-white`}>
        <FavoritesProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </FavoritesProvider>
      </body>
    </html>
  );
}
