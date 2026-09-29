import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Section({
  id,
  label,
  heading,
  children,
  className = "",
}: {
  id: string;
  label: string;
  heading?: string;
  children: ReactNode;
  className?: string;
}) {
  const headingId = `${id}-heading`;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`border-t border-line scroll-mt-20 ${className}`}
    >
      <Reveal className="mx-auto w-full max-w-[1100px] px-6 py-20 md:py-28">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
          {label}
        </p>
        <h2
          id={headingId}
          className={`font-serif mt-3 text-3xl leading-tight tracking-tight md:text-5xl ${
            heading ? "" : "sr-only"
          }`}
        >
          {heading ?? label}
        </h2>
        <div className="mt-10 md:mt-14">{children}</div>
      </Reveal>
    </section>
  );
}
