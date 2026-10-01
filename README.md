# michaeldressler-site

Personal portfolio site for Michael A. Dressler. Single page, built with Next.js (App Router), TypeScript, and Tailwind CSS. No CMS, no database, no environment variables.

## Editing content

Everything the site displays lives in one typed file: [`src/content/site.ts`](src/content/site.ts). Components only handle layout.

- **Copy and links**: edit the strings in `site.ts`. The hero descriptor supports `**bold**`.
- **Adding or removing a section**: a section renders only when it has content. For example, add items to `media: []` and the Media section (and its nav link) appear automatically. Empty `photos` hides the gallery.
- **Gallery style**: `galleryStyle` in `site.ts` switches the Photos section between `"grid"` (tiles with a lightbox) and `"carousel"` (the WebGL liquid-glass row in `src/components/ui/liquid-glass-carousel.tsx`, which needs `three` and `gsap`). `theme` switches the light and dark palettes.
- **Images**: put files in `public/images/` and reference them as `/images/<file>` with their real `width` and `height`. The hero uses `public/images/hero-centered.jpg`; gallery images are `gallery-01.jpg` onward (rows of three, one event per row). Originals in `public/images/MD Website/` are git-ignored and not deployed.
- **Domain**: set `siteUrl` in `site.ts` to the final domain. It drives the canonical URL, Open Graph URLs, `robots.txt`, and `sitemap.xml`.
- **Icons and social image**: `src/app/favicon.ico`, `icon.png`, `apple-icon.png`, and `opengraph-image.jpg` are picked up by Next.js automatically. Replace the files to change them.

`CONTENT.md` and `BUILD_PROMPT.md` are the source notes the site was built from and are not used at runtime.

## Running locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build && npm run start
```

## Deploying

The project deploys on Vercel with zero configuration.

**Dashboard**: import the GitHub repo at https://vercel.com/new (team `dresden1`) and click Deploy.

**CLI**:

```bash
npx vercel --prod --scope dresden1
```

The production domain is https://www.michaeldressler.com (the bare domain redirects to it). `siteUrl` in `src/content/site.ts` must match it.
