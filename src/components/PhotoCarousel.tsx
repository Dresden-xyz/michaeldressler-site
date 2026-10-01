"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";
import type { Photo, SiteContent } from "@/content/site";

// three.js and gsap are heavy, so the carousel loads on the client only, after the page.
const LiquidGlassCarousel = dynamic(
  () => import("@/components/ui/liquid-glass-carousel").then((m) => m.LiquidGlassCarousel),
  {
    ssr: false,
    loading: () => (
      <div className="h-full w-full animate-pulse rounded-2xl bg-pill" aria-hidden="true" />
    ),
  },
);

/** Must match --paper in src/app/globals.css for each theme. */
const BACKGROUND: Record<SiteContent["theme"], string> = {
  light: "#f5f4f0",
  dark: "#0a0a0a",
};

export function PhotoCarousel({
  photos,
  theme,
}: {
  photos: Photo[];
  theme: SiteContent["theme"];
}) {
  const items = useMemo(
    () =>
      photos.map((p) => ({
        src: p.src,
        title: p.caption ?? p.alt,
        aspect: p.width / p.height,
      })),
    [photos],
  );

  return (
    <div className="h-[70vh] min-h-[420px] max-h-[760px] w-full overflow-hidden">
      <LiquidGlassCarousel
        items={items}
        background={BACKGROUND[theme]}
        panelHeight={460}
        gap={14}
        entry={false}
        className="h-full"
      />
    </div>
  );
}
