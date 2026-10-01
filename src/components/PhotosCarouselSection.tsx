import type { Photo, SiteContent } from "@/content/site";
import { PhotoCarousel } from "./PhotoCarousel";
import { Reveal } from "./Reveal";

/**
 * Photos section for the carousel gallery. The heading sits in the content column while the
 * carousel itself runs the full width of the page, so it reads as part of the page, not a box.
 */
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
    <section
      id="photos"
      aria-labelledby="photos-heading"
      className="scroll-mt-20 border-t border-line"
    >
      <Reveal className="py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1100px] px-6">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">Photos</p>
          <h2
            id="photos-heading"
            className="font-serif mt-3 text-3xl leading-tight tracking-tight md:text-5xl"
          >
            {heading}
          </h2>
        </div>

        <div className="mt-10 md:mt-14">
          <PhotoCarousel photos={photos} theme={theme} />
        </div>

        <p className="mx-auto mt-4 w-full max-w-[1100px] px-6 text-sm text-muted">
          Scroll or drag to browse. Click the centered photo to focus it, and press Escape to close.
        </p>
      </Reveal>
    </section>
  );
}
