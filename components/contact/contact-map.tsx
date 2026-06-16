"use client";

import { useEffect, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export interface Office {
  city: string;
  country: string;
  address: string;
  lat: number;
  lng: number;
  isHQ: boolean;
}

interface ContactMapProps {
  offices: Office[];
  selected: number | null;
  onSelect: (i: number | null) => void;
}

/* Brand colours from globals.css:  --default-orange: 7 84% 67% = #f17463 */
const BRAND = "#f17463";
const BRAND_LIGHT = "rgba(241,116,99,0.18)";
const BRAND_RING = "rgba(241,116,99,0.28)";

/* ── Auto-pan + open popup when selection changes ─────────────── */
function MapController({
  offices,
  selected,
  markerRefs,
}: {
  offices: Office[];
  selected: number | null;
  markerRefs: React.MutableRefObject<(L.Marker | null)[]>;
}) {
  const map = useMap();

  useEffect(() => {
    if (selected !== null) {
      map.flyTo([offices[selected].lat, offices[selected].lng], 7, {
        duration: 1.1,
        easeLinearity: 0.25,
      });
      const timer = setTimeout(() => {
        markerRefs.current[selected]?.openPopup();
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [selected]); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
}

/* ── Custom pin icon (brand orange when selected) ─────────────── */
function makeIcon(isSelected: boolean, isHQ: boolean) {
  if (isSelected) {
    // Larger filled orange circle with pulse ring
    const size = isHQ ? 18 : 16;
    return L.divIcon({
      className: "",
      html: `
        <div style="position:relative;width:${size + 12}px;height:${size + 12}px;display:flex;align-items:center;justify-content:center;">
          <div style="
            position:absolute;width:${size + 10}px;height:${size + 10}px;border-radius:50%;
            background:${BRAND_RING};animation:map-pulse 1.8s ease-out infinite;
          "></div>
          <div style="
            width:${size}px;height:${size}px;border-radius:50%;
            background:${BRAND};border:2.5px solid #fff;
            box-shadow:0 2px 10px rgba(241,116,99,0.5);
            position:relative;z-index:1;
          "></div>
        </div>`,
      iconSize: [size + 12, size + 12],
      iconAnchor: [(size + 12) / 2, (size + 12) / 2],
      popupAnchor: [0, -(size / 2 + 8)],
    });
  }

  // Unselected: small muted dot
  const size = isHQ ? 11 : 8;
  return L.divIcon({
    className: "",
    html: `<div style="
      width:${size}px;height:${size}px;border-radius:50%;
      background:#b0b8c8;border:2px solid #fff;
      box-shadow:0 1px 4px rgba(0,0,0,0.22);
    "></div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -(size / 2 + 4)],
  });
}

/* ── Main map component ───────────────────────────────────────── */
export function ContactMap({ offices, selected, onSelect }: ContactMapProps) {
  const markerRefs = useRef<(L.Marker | null)[]>(
    new Array(offices.length).fill(null)
  );

  return (
    <>
      <style>{`
        /* Pulse keyframe for selected marker ring */
        @keyframes map-pulse {
          0%   { transform: scale(0.8); opacity: 0.8; }
          70%  { transform: scale(1.8); opacity: 0; }
          100% { transform: scale(1.8); opacity: 0; }
        }

        /* Warm tint on the map tiles to match brand warmth */
        .motadata-map .leaflet-tile-pane {
          filter: saturate(0.7) brightness(1.04) sepia(0.06);
        }

        /* Popup */
        .motadata-map .leaflet-popup-content-wrapper {
          border-radius: 10px !important;
          padding: 0 !important;
          box-shadow: 0 8px 28px rgba(0,0,0,0.13), 0 1px 4px rgba(0,0,0,0.06) !important;
          border: 1px solid rgba(0,0,0,0.07) !important;
        }
        .motadata-map .leaflet-popup-content { margin: 0 !important; }
        .motadata-map .leaflet-popup-tip {
          background: #fff !important;
          box-shadow: none !important;
        }
        .motadata-map .leaflet-popup-tip-container { margin-top: -1px; }
        .motadata-map .leaflet-popup-close-button {
          top: 8px !important; right: 8px !important;
          color: #94a3b8 !important; font-size: 16px !important;
          width: 20px !important; height: 20px !important;
          line-height: 20px !important;
        }
        .motadata-map .leaflet-popup-close-button:hover { color: ${BRAND} !important; }

        /* Zoom controls */
        .motadata-map .leaflet-control-zoom {
          border: 1px solid rgba(0,0,0,0.1) !important;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08) !important;
          border-radius: 8px !important;
          overflow: hidden;
        }
        .motadata-map .leaflet-control-zoom a {
          color: #475569 !important;
          font-size: 15px !important;
          background: #fff !important;
        }
        .motadata-map .leaflet-control-zoom a:hover {
          background: #fff8f6 !important;
          color: ${BRAND} !important;
        }

        /* Attribution */
        .motadata-map .leaflet-control-attribution {
          font-size: 9px !important;
          background: rgba(255,255,255,0.7) !important;
          color: #94a3b8 !important;
          border-radius: 4px 0 0 0 !important;
        }
        .motadata-map .leaflet-control-attribution a { color: #94a3b8 !important; }

        .motadata-map { font-family: inherit; }
      `}</style>

      <MapContainer
        center={[20, 30]}
        zoom={2}
        minZoom={2}
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={false}
        zoomControl={true}
        className="motadata-map"
      >
        {/* CartoDB Positron — clean, minimal, light tiles */}
        <TileLayer
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          subdomains="abcd"
          maxZoom={20}
        />

        <MapController
          offices={offices}
          selected={selected}
          markerRefs={markerRefs}
        />

        {offices.map((office, i) => (
          <Marker
            key={office.city}
            position={[office.lat, office.lng]}
            icon={makeIcon(selected === i, office.isHQ)}
            ref={(el) => {
              markerRefs.current[i] = el;
            }}
            eventHandlers={{
              click: () => onSelect(selected === i ? null : i),
            }}
          >
            <Popup>
              <div style={{ padding: "12px 16px", minWidth: 180 }}>
                {/* City + HQ badge */}
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <p style={{
                    margin: 0, fontSize: 13, fontWeight: 700,
                    color: "#0f172a", letterSpacing: "-0.01em",
                  }}>
                    {office.city}
                  </p>
                  {office.isHQ && (
                    <span style={{
                      fontSize: 9, fontWeight: 800,
                      textTransform: "uppercase", letterSpacing: "0.07em",
                      color: BRAND,
                      background: BRAND_LIGHT,
                      borderRadius: 99,
                      padding: "2px 7px",
                      border: `1px solid rgba(241,116,99,0.22)`,
                    }}>
                      HQ
                    </span>
                  )}
                </div>
                {/* Country */}
                <p style={{
                  margin: "2px 0 0", fontSize: 11,
                  fontWeight: 600, color: BRAND,
                  textTransform: "uppercase", letterSpacing: "0.06em",
                }}>
                  {office.country}
                </p>
                {/* Divider */}
                <div style={{ margin: "8px 0 6px", height: 1, background: "rgba(0,0,0,0.06)" }} />
                {/* Address */}
                <p style={{
                  margin: 0, fontSize: 11,
                  color: "#64748b", lineHeight: 1.5,
                }}>
                  {office.address}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
}
