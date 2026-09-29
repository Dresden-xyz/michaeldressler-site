import type { SiteContent } from "@/content/site";
import { SocialLinks } from "./SocialLinks";

export function Footer({
  line,
  socials,
}: {
  line: string;
  socials: SiteContent["contact"]["socials"];
}) {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-4 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>{line}</p>
        <SocialLinks socials={socials} variant="inline" />
      </div>
    </footer>
  );
}
