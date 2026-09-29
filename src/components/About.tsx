import type { SiteContent } from "@/content/site";
import { Section } from "./Section";

export function About({ about }: { about: SiteContent["about"] }) {
  return (
    <Section id="about" label="About" heading={about.heading}>
      <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-muted">
        {about.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {about.stats.length > 0 && (
        <dl
          className={`mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line ${
            about.stats.length === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-3"
          }`}
        >
          {about.stats.map((s) => (
            <div key={s.label} className="flex flex-col bg-paper px-6 py-7">
              <dt className="order-2 mt-2 text-sm leading-snug text-muted">
                {s.label}
              </dt>
              <dd className="font-serif order-1 text-4xl tracking-tight md:text-5xl">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      )}
    </Section>
  );
}
