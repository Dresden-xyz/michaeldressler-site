import type { Photo, SiteContent } from "@/content/site";
import { PhotoCarousel } from "./PhotoCarousel";
import { Section } from "./Section";

export function PhotosCarouselSection({
  photos,
  heading,
  theme,
}: {
  photos: Photo[];
  heading: string;
  theme: SiteContent["theme"];
}) {
  return (
    <Section id="photos" label="Photos" heading={heading}>
      <PhotoCarousel photos={photos} theme={theme} />
      <p className="mt-4 text-sm text-muted">
        Scroll or drag to browse. Click the centered photo to focus it, and press Escape to close.
      </p>
    </Section>
  );
}
