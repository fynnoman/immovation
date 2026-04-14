"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageGalleryProps {
  images: string[];
  alt: string;
}

export default function ImageGallery({ images, alt }: ImageGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxOpen, goNext, goPrev]);

  if (images.length === 0) return null;

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-8 rounded-xl overflow-hidden">
        {/* Main image */}
        <div
          className="md:col-span-2 md:row-span-2 relative h-64 md:h-[400px] cursor-pointer group"
          onClick={() => {
            setCurrentIndex(0);
            setLightboxOpen(true);
          }}
        >
          <Image
            src={images[0]}
            alt={`${alt} - Hauptbild`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
        </div>

        {/* Side images */}
        {images.slice(1, 5).map((img, i) => (
          <div
            key={i}
            className="hidden md:block relative h-[196px] cursor-pointer group"
            onClick={() => {
              setCurrentIndex(i + 1);
              setLightboxOpen(true);
            }}
          >
            <Image
              src={img}
              alt={`${alt} - Bild ${i + 2}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="25vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
            {i === 3 && images.length > 5 && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  +{images.length - 5} Fotos
                </span>
              </div>
            )}
          </div>
        ))}

        {/* Show all photos button on mobile */}
        <button
          className="md:hidden absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-gray-900 text-sm font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-white transition z-10"
          onClick={() => {
            setCurrentIndex(0);
            setLightboxOpen(true);
          }}
        >
          Alle {images.length} Fotos
        </button>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          {/* Close */}
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition"
          >
            <X size={24} />
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-4 text-white/70 text-sm font-medium">
            {currentIndex + 1} / {images.length}
          </div>

          {/* Prev */}
          <button
            onClick={goPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition z-10"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Image */}
          <div className="relative w-full h-full max-w-5xl max-h-[80vh] mx-16">
            <Image
              src={images[currentIndex]}
              alt={`${alt} - Bild ${currentIndex + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Next */}
          <button
            onClick={goNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition z-10"
          >
            <ChevronRight size={28} />
          </button>

          {/* Thumbnails */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-[90vw] px-4 pb-2">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`relative w-16 h-12 rounded-md overflow-hidden shrink-0 border-2 transition ${
                  i === currentIndex ? "border-[#FDC700]" : "border-transparent opacity-50 hover:opacity-80"
                }`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
