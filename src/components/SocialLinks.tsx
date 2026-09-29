import { ArrowUpRight, Globe, Mail } from "lucide-react";
import type { Social } from "@/content/site";

/**
 * Social and external links. lucide-react no longer ships brand marks,
 * so links are labelled by name with a generic icon.
 */
export function SocialLinks({
  socials,
  links = [],
  email,
  variant = "buttons",
}: {
  socials: Social[];
  links?: { label: string; href: string }[];
  email?: string;
  variant?: "buttons" | "inline";
}) {
  const items: { label: string; href: string; icon: "arrow" | "globe" | "mail" }[] = [
    ...(email ? [{ label: email, href: `mailto:${email}`, icon: "mail" as const }] : []),
    ...socials.map((s) => ({ label: s.label, href: s.href, icon: "arrow" as const })),
    ...links.map((l) => ({ label: l.label, href: l.href, icon: "globe" as const })),
  ];

  const iconFor = (icon: "arrow" | "globe" | "mail", size: number) =>
    icon === "mail" ? (
      <Mail size={size} aria-hidden="true" />
    ) : icon === "globe" ? (
      <Globe size={size} aria-hidden="true" />
    ) : (
      <ArrowUpRight size={size} aria-hidden="true" />
    );

  if (variant === "inline") {
    return (
      <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              target={item.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-ink"
            >
              {iconFor(item.icon, 14)}
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="flex flex-wrap gap-3">
      {items.map((item, i) => (
        <li key={item.href}>
          <a
            href={item.href}
            target={item.href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className={
              i === 0
                ? "inline-flex h-11 items-center gap-2 rounded-full bg-ink px-5 text-sm font-medium text-paper transition-opacity hover:opacity-85"
                : "inline-flex h-11 items-center gap-2 rounded-full border border-ink px-5 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-paper"
            }
          >
            {iconFor(item.icon, 16)}
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
