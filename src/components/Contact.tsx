import type { SiteContent } from "@/content/site";
import { Section } from "./Section";
import { SocialLinks } from "./SocialLinks";

export function Contact({ contact }: { contact: SiteContent["contact"] }) {
  return (
    <Section id="contact" label="Contact" heading={contact.heading}>
      <p className="max-w-xl text-lg leading-relaxed text-muted">{contact.blurb}</p>
      <div className="mt-8">
        <SocialLinks
          email={contact.email}
          socials={contact.socials}
          links={contact.links}
        />
      </div>
    </Section>
  );
}
