import { ArrowUpRight } from "lucide-react";
import type { MediaItem } from "@/content/site";
import { Section } from "./Section";

export function Media({ items, heading }: { items: MediaItem[]; heading: string }) {
  return (
    <Section id="media" label="Media" heading={heading}>
      <ul className="border-t border-line">
        {items.map((item) => (
          <li key={`${item.title}-${item.outlet}`} className="border-b border-line">
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="grid gap-1 py-6 transition-opacity hover:opacity-70 md:grid-cols-[180px_1fr] md:gap-10"
            >
              <p className="text-sm text-muted md:pt-1">{item.date}</p>
              <div>
                <p className="text-lg font-medium leading-snug tracking-tight">
                  {item.title}
                  <ArrowUpRight
                    size={16}
                    aria-hidden="true"
                    className="ml-1 inline-block align-baseline"
                  />
                </p>
                <p className="mt-1 text-muted">{item.outlet}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
