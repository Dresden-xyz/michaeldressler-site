import { getSections, site } from "@/content/site";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Media } from "@/components/Media";
import { Nav } from "@/components/Nav";
import { Photos } from "@/components/Photos";
import { Recognition } from "@/components/Recognition";
import { Speaking } from "@/components/Speaking";

export default function HomePage() {
  const sections = getSections(site);
  const has = (id: (typeof sections)[number]["id"]) =>
    sections.some((s) => s.id === id);

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.siteUrl,
    image: `${site.siteUrl}${site.hero.photo.src}`,
    jobTitle: site.experience[0]?.positions[0]?.title,
    worksFor: site.experience[0]
      ? { "@type": "Organization", name: site.experience[0].company }
      : undefined,
    sameAs: site.contact.socials.map((s) => s.href),
  };

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <Nav name={site.navName} sections={sections} />
      <main id="main" className="flex-1">
        <Hero name={site.name} hero={site.hero} />
        {has("about") && <About about={site.about} />}
        {has("experience") && (
          <Experience roles={site.experience} heading={site.headings.experience} />
        )}
        {has("speaking") && (
          <Speaking
            speaking={site.speaking}
            heading={site.headings.speaking}
            upcomingHeading={site.headings.upcomingTalks}
            talksHeading={site.headings.talks}
          />
        )}
        {has("photos") && <Photos photos={site.photos} heading={site.headings.photos} />}
        {has("media") && <Media items={site.media} heading={site.headings.media} />}
        {has("recognition") && (
          <Recognition honors={site.recognition} heading={site.headings.recognition} />
        )}
        {has("contact") && <Contact contact={site.contact} />}
      </main>
      <Footer line={site.footerLine} socials={site.contact.socials} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
    </>
  );
}
