import type { Role } from "@/content/site";
import { Section } from "./Section";

export function Experience({ roles, heading }: { roles: Role[]; heading: string }) {
  return (
    <Section id="experience" label="Experience" heading={heading}>
      <ol className="border-t border-line">
        {roles.map((role, i) => (
          <li
            key={`${role.company}-${role.title}-${i}`}
            className="grid gap-2 border-b border-line py-8 md:grid-cols-[180px_1fr] md:gap-10"
          >
            <p className="text-sm text-muted md:pt-1">{role.dates}</p>
            <div>
              <h3 className="text-xl font-medium tracking-tight">
                {role.title}
              </h3>
              <p className="mt-1 text-base text-muted">{role.company}</p>
              {role.description && (
                <p className="mt-4 max-w-2xl leading-relaxed text-muted">
                  {role.description}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
