import type { Honor } from "@/content/site";
import { Section } from "./Section";

export function Recognition({ honors, heading }: { honors: Honor[]; heading: string }) {
  return (
    <Section id="recognition" label="Recognition" heading={heading}>
      <ul className="border-t border-line">
        {honors.map((h) => (
          <li
            key={`${h.title}-${h.year}`}
            className="grid gap-1 border-b border-line py-6 md:grid-cols-[180px_1fr] md:gap-10"
          >
            <p className="text-sm text-muted md:pt-1">{h.year}</p>
            <div>
              <p className="text-lg font-medium leading-snug tracking-tight">
                {h.title}
              </p>
              <p className="mt-1 text-muted">{h.issuer}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
