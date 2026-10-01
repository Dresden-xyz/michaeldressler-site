"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Photo } from "@/content/site";
import { Section } from "./Section";

export function Photos({ photos, heading }: { photos: Photo[]; heading: string }) {
  const [index, setIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);

  const close = useCallback(() => {
    setIndex(null);
    openerRef.current?.focus();
  }, []);

  const step = useCallback(
    (delta: number) => {
      setIndex((i) => (i === null ? i : (i + delta + photos.length) % photos.length));
    },
    [photos.length],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [index, close, step]);

  const current = index === null ? null : photos[index];

  return (
    <Section id="photos" label="Photos" heading={heading}>
      <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {photos.map((photo, i) => (
          <li key={photo.src}>
            <button
              type="button"
              className="group block w-full text-left"
              onClick={(e) => {
                openerRef.current = e.currentTarget;
                setIndex(i);
              }}
              aria-label={`Open photo: ${photo.caption ?? photo.alt}`}
            >
              <span className="relative block aspect-[4/3] overflow-hidden rounded-xl bg-pill">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  style={photo.focus ? { objectPosition: photo.focus } : undefined}
                />
              </span>
              {photo.caption && (
                <span className="mt-2 block text-sm text-muted">{photo.caption}</span>
              )}
            </button>
          </li>
        ))}
      </ul>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.caption ?? current.alt}
          className="fixed inset-0 z-50 flex flex-col bg-black/95 text-white"
          onClick={close}
        >
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            <p className="text-sm text-white/70">
              {index! + 1} / {photos.length}
            </p>
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              aria-label="Close"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-white/10 focus-visible:outline-white"
            >
              <X size={22} aria-hidden="true" />
            </button>
          </div>

          <div
            className="relative flex min-h-0 flex-1 items-center justify-center px-4 md:px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              key={current.src}
              src={current.src}
              alt={current.alt}
              width={current.width}
              height={current.height}
              sizes="100vw"
              className="max-h-[78vh] w-auto max-w-full rounded-lg object-contain"
            />
            {photos.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Previous photo"
                  className="absolute left-2 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 hover:bg-white/10 focus-visible:outline-white md:left-4"
                >
                  <ChevronLeft size={24} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Next photo"
                  className="absolute right-2 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 hover:bg-white/10 focus-visible:outline-white md:right-4"
                >
                  <ChevronRight size={24} aria-hidden="true" />
                </button>
              </>
            )}
          </div>

          <p className="px-4 py-4 text-center text-sm text-white/80 md:px-6">
            {current.caption ?? current.alt}
          </p>
        </div>
      )}
    </Section>
  );
}
