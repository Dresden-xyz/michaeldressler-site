import type { Role } from "@/content/site";
import { Section } from "./Section";

export function Experience({ roles, heading }: { roles: Role[]; heading: string }) {
  return (
    <Section id="experience" label="Experience" heading={heading}>
      <ol className="border-t border-line">
        {roles.map((role) => {
          const [headline, ...earlier] = role.positions;
          if (!headline) return null;
          return (
            <li
              key={role.company}
              className="grid gap-2 border-b border-line py-8 md:grid-cols-[180px_1fr] md:gap-10"
            >
              <p className="text-sm text-muted md:pt-1">{role.dates}</p>
              <div>
                <h3 className="text-xl font-semibold tracking-tight">
                  {headline.title}
                </h3>
                <p className="mt-1 text-base text-muted">
                  {role.company}
                  {earlier.length > 0 && (
                    <>
                      <span aria-hidden="true"> · </span>
                      <span className="text-sm">{headline.dates}</span>
                    </>
                  )}
                </p>
                {headline.description && (
                  <p className="mt-4 max-w-2xl leading-relaxed text-muted">
                    {headline.description}
                  </p>
                )}

                {earlier.length > 0 && (
                  <ol className="mt-6 space-y-5 border-l border-line pl-5">
                    {earlier.map((pos) => (
                      <li key={`${pos.title}-${pos.dates}`}>
                        <p className="font-medium tracking-tight">{pos.title}</p>
                        <p className="mt-0.5 text-sm text-muted">{pos.dates}</p>
                        {pos.description && (
                          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                            {pos.description}
                          </p>
                        )}
                      </li>
                    ))}
                  </ol>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
