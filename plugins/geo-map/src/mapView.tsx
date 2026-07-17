import { viewRegistry } from "@quartz-community/bases-page";
import { transformLink } from "@quartz-community/utils";
import type { FullSlug } from "@quartz-community/types";
import maplibreCss from "maplibre-css-text";
import mapStyles from "./styles/map.scss";
// @ts-expect-error - inline script imported as a bundled string by esbuild loader
import mapScript from "./map.inline.ts";

/** One pin on the map, serialized into the container's data attribute. */
interface GeoMarker {
  title: string;
  url: string;
  lat: number;
  lng: number;
  color?: string;
  /** Emoji glyph (e.g. a national flag) rendered directly as the marker. */
  flag?: string;
  /** Lucide icon name (e.g. "landmark"); mapped to an emoji client-side. */
  icon?: string;
}

/** Parse a "lat,lng" string into a tuple, tolerant of surrounding whitespace. */
function parseCoords(raw: unknown): [number, number] | null {
  if (typeof raw !== "string") return null;
  const parts = raw.split(",").map((p) => Number(p.trim()));
  if (parts.length !== 2 || parts.some((n) => Number.isNaN(n))) return null;
  return [parts[0], parts[1]];
}

// Minimal shape of what the bases-page ViewRegistry hands each renderer. We only
// declare the fields this view reads to avoid coupling to unexported internals.
interface Entry {
  slug: string;
  title: string;
  properties: Record<string, unknown>;
}
interface RenderProps {
  entries: Entry[];
  slug: string;
  allSlugs: string[];
  linkResolution: "absolute" | "relative" | "shortest";
}

function render({ entries, slug, allSlugs, linkResolution }: RenderProps) {
  const markers: GeoMarker[] = [];
  for (const entry of entries) {
    const coords = parseCoords(entry.properties.coordinates);
    if (!coords) continue;
    markers.push({
      title: entry.title,
      url: transformLink(slug as FullSlug, entry.slug, {
        strategy: linkResolution,
        allSlugs: allSlugs as FullSlug[],
      }),
      lat: coords[0],
      lng: coords[1],
      color: typeof entry.properties.color === "string" ? entry.properties.color : undefined,
      flag: typeof entry.properties.flag === "string" ? entry.properties.flag : undefined,
      icon: typeof entry.properties.icon === "string" ? entry.properties.icon : undefined,
    });
  }

  return (
    <div class="geo-map-wrapper">
      {markers.length === 0 ? (
        <div class="geo-map-empty">No mappable notes (missing a `coordinates` property).</div>
      ) : (
        <div class="geo-map" data-geo-markers={JSON.stringify(markers)} />
      )}
    </div>
  );
}

export const mapViewRegistration = {
  id: "map",
  name: "Map",
  icon: "map",
  render: render as unknown as (props: unknown) => unknown,
  css: `${maplibreCss}\n${mapStyles}`,
  afterDOMLoaded: mapScript as string,
};

// Register on side-effect import (component-only plugin lifecycle).
viewRegistry.register(mapViewRegistration as Parameters<typeof viewRegistry.register>[0]);
