import { ArrowUpRight } from "lucide-react";
import type { SiteContent, Talk } from "@/content/site";
import { Section } from "./Section";

function TalkList({ heading, talks }: { heading: string; talks: Talk[] }) {
  return (
    <div>
      <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
        {heading}
      </h3>
      <ul className="mt-6 border-t border-line">
        {talks.map((talk) => {
          const headline = talk.title ?? talk.event;
          const inner = (
            <>
              <p className="text-sm text-muted">
                {talk.date}
                {talk.location && (
                  <>
                    <span aria-hidden="true"> · </span>
                    {talk.location}
                  </>
                )}
              </p>
              <p className="mt-1 text-lg font-medium leading-snug tracking-tight">
                {headline}
                {talk.href && (
                  <ArrowUpRight
                    size={16}
                    aria-hidden="true"
                    className="ml-1 inline-block align-baseline"
                  />
                )}
              </p>
              {talk.title && <p className="mt-1 text-muted">{talk.event}</p>}
            </>
          );
          return (
            <li key={`${talk.event}-${talk.date}-${talk.title ?? ""}`} className="border-b border-line">
              {talk.href ? (
                <a
                  href={talk.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-6 transition-opacity hover:opacity-70"
                >
                  {inner}
                </a>
              ) : (
                <div className="py-6">{inner}</div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function Speaking({
  speaking,
  heading,
  upcomingHeading,
  talksHeading,
}: {
  speaking: SiteContent["speaking"];
  heading: string;
  upcomingHeading: string;
  talksHeading: string;
}) {
  const hasLists = speaking.upcoming.length > 0 || speaking.talks.length > 0;
  return (
    <Section id="speaking" label="Speaking" heading={heading}>
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
        {speaking.topics.length > 0 && (
          <ul className="space-y-4 lg:sticky lg:top-24 lg:self-start">
            {speaking.topics.map((topic) => (
              <li key={topic} className="flex gap-4 text-lg leading-relaxed">
                <span
                  aria-hidden="true"
                  className="mt-[0.85em] h-1.5 w-1.5 shrink-0 rounded-full bg-ink"
                />
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        )}

        {hasLists && (
          <div className="space-y-14">
            {speaking.upcoming.length > 0 && (
              <TalkList heading={upcomingHeading} talks={speaking.upcoming} />
            )}
            {speaking.talks.length > 0 && (
              <TalkList heading={talksHeading} talks={speaking.talks} />
            )}
          </div>
        )}
      </div>
    </Section>
  );
}
