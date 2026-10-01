import Image from "next/image";
import type { EventCard } from "@/content/site";

export function EventCards({ heading, cards }: { heading: string; cards: EventCard[] }) {
  return (
    <div>
      <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
        {heading}
      </h3>
      <ul className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
        {cards.map((card) => {
          const tile = (
            <>
              <span className="relative block aspect-[4/3] overflow-hidden rounded-xl border border-line bg-pill">
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="object-contain p-3 transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </span>
              <span className="mt-2 block text-sm text-muted">{card.caption}</span>
            </>
          );
          return (
            <li key={card.src}>
              {card.href ? (
                <a
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  {tile}
                </a>
              ) : (
                <div className="group block">{tile}</div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
