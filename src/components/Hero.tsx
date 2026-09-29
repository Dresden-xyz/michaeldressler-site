import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { SiteContent } from "@/content/site";
import { RichText } from "./RichText";

export function Hero({
  name,
  hero,
}: {
  name: string;
  hero: SiteContent["hero"];
}) {
  return (
    <section id="top" aria-label="Introduction">
      <div className="mx-auto grid w-full max-w-[1100px] grid-cols-1 items-center gap-10 px-6 pb-20 pt-10 md:pb-28 md:pt-16 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div className="order-2 lg:order-1">
          <span className="inline-flex items-center rounded-full border border-line bg-pill px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-ink">
            {hero.tagline}
          </span>

          <h1 className="font-serif mt-6 text-5xl leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            {name}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            <RichText text={hero.descriptor} />
          </p>

          {hero.tags.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Focus areas">
              {hero.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-ink/20 px-3 py-1 text-xs font-medium text-ink"
                >
                  {tag}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={hero.primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-ink px-5 text-sm font-medium text-paper transition-opacity hover:opacity-85"
            >
              {hero.primaryCta.label}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a
              href={hero.secondaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-ink px-5 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              {hero.secondaryCta.label}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <Image
            src={hero.photo.src}
            alt={hero.photo.alt}
            width={hero.photo.width}
            height={hero.photo.height}
            priority
            sizes="(min-width: 1024px) 520px, 100vw"
            className="h-auto w-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
