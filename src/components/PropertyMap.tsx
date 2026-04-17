"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { Property } from "@/data/hotels";

interface PropertyMapProps {
  properties: Property[];
  center?: [number, number];
  zoom?: number;
  className?: string;
  selectedId?: string;
}

export default function PropertyMap({
  properties,
  center,
  zoom = 6,
  className = "h-[500px] w-full",
  selectedId,
}: PropertyMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const defaultCenter: [number, number] = center || [51.1657, 10.4515];

    const map = L.map(mapRef.current, {
      scrollWheelZoom: true,
      zoomControl: true,
    }).setView(defaultCenter, zoom);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
    }).addTo(map);

    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, [center, zoom]);

  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    // Remove existing markers
    map.eachLayer((layer) => {
      if (layer instanceof L.Marker) {
        map.removeLayer(layer);
      }
    });

    // Custom icon
    const createIcon = (price: number, isSelected: boolean) => {
      return L.divIcon({
        className: "custom-marker",
        html: `<div style="
          background: ${isSelected ? "#111827" : "#B8860B"};
          color: ${isSelected ? "white" : "#111827"};
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
          white-space: nowrap;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
          border: 2px solid ${isSelected ? "#B8860B" : "white"};
          transform: translate(-50%, -100%);
          cursor: pointer;
        ">€${price.toLocaleString("de-DE")}</div>`,
        iconSize: [0, 0],
        iconAnchor: [0, 0],
      });
    };

    const bounds: [number, number][] = [];

    properties.forEach((p) => {
      const icon = createIcon(p.pricePerMonth, p.id === selectedId);
      const marker = L.marker([p.latitude, p.longitude], { icon }).addTo(map);

      marker.bindPopup(`
        <div style="min-width: 200px; font-family: system-ui, sans-serif;">
          <div style="font-weight: 700; font-size: 14px; margin-bottom: 4px; color: #111827;">${p.name}</div>
          <div style="font-size: 12px; color: #6b7280; margin-bottom: 6px;">${p.address}</div>
          <div style="display: flex; align-items: center; justify-content: space-between;">
            <span style="font-weight: 700; font-size: 16px; color: #111827;">€${p.pricePerMonth.toLocaleString("de-DE")}/Mo</span>
            <span style="background: #B8860B; color: #111827; padding: 2px 8px; border-radius: 4px; font-weight: 700; font-size: 12px;">${p.rating}</span>
          </div>
          <a href="/hotel/${p.id}" style="display: block; text-align: center; margin-top: 8px; background: #B8860B; color: #111827; padding: 6px; border-radius: 6px; font-size: 12px; font-weight: 600; text-decoration: none;">Details ansehen</a>
        </div>
      `);

      bounds.push([p.latitude, p.longitude]);
    });

    if (bounds.length > 1) {
      map.fitBounds(bounds, { padding: [40, 40] });
    } else if (bounds.length === 1) {
      map.setView(bounds[0], 13);
    }
  }, [properties, selectedId]);

  return (
    <div className={`rounded-xl overflow-hidden border border-gray-200 ${className}`}>
      <div ref={mapRef} className="h-full w-full" />
    </div>
  );
}
