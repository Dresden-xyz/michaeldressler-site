# Build prompt: personal portfolio site

Paste everything below the line into a fresh Claude Code session in this folder once `CONTENT.md` is filled in and images are in `public/images/`.

---

Build my personal portfolio website in this directory. Use `CONTENT.md` as the single source of truth for all copy, links, and image filenames. Do not invent facts, metrics, roles, dates, or quotes. If something in `CONTENT.md` is marked `TODO` or is blank, leave that item out of the site rather than making something up, and list every omission at the end.

## Reference

The design reference is https://www.jakesalerno.ai/. Match its overall feel, not its content:

- Single page, anchor-linked sections, sticky top nav with the name on the left and section links on the right. On mobile the nav collapses to a simple menu.
- Warm off-white background (around `#f5f4f0`), near-black text, thin hairline dividers between sections. No gradients, no cards with heavy shadows, no dark mode toggle.
- Typography: a high-contrast serif for the name and section headings (Fraunces or Playfair Display from Google Fonts), a clean sans-serif for body text (Inter). Section headings are preceded by a small uppercase tracked label (e.g. "ABOUT", "EXPERIENCE").
- Generous whitespace. Content column max width around 1100px, centered, 24px side gutters on mobile.
- Hero: two columns on desktop. Left: a small pill tag line, the name in large serif, a two to three sentence descriptor with the current company in bold, a row of small outlined tag pills for focus areas, then two buttons (primary filled black, secondary outlined). Right: a large photo with slightly rounded corners. Stacks to a single column on mobile with the photo first.
- Experience: a reverse-chronological list, each row with the date range in muted text on the left and the role, company, and a short description on the right, separated by hairlines.
- Photo gallery: a responsive grid of images with captions on hover or below, clicking opens a simple lightbox.
- Subtle motion only: a short fade-up on scroll for each section, nothing else.

## Sections, in order

Render only the sections that have content in `CONTENT.md`. Keep the nav in sync with the sections actually rendered.

1. Hero
2. About (two paragraphs of narrative plus a row of three or four stat tiles, if stats are provided)
3. Experience
4. Speaking / Topics (bulleted list of topics, plus a list of past talks if provided)
5. Photos
6. Media (press, podcasts, videos: title, outlet, date, link)
7. Recognition (awards, honors)
8. Contact (email button, social links)
9. Footer with copyright line and social icons

## Tech stack and constraints

- Next.js (latest stable, App Router) with TypeScript and Tailwind CSS. No component libraries, no CMS, no database, no environment variables required to build.
- Static export is not required. A plain `next build` must succeed with zero warnings about missing images or types.
- All content lives in `src/content/site.ts`, typed, and populated from `CONTENT.md`. Components take data as props. Nothing is hardcoded in JSX except layout.
- Images go in `public/images/` and are rendered with `next/image` with explicit width and height or `fill`. Use the filenames from `CONTENT.md` exactly.
- Icons: `lucide-react` only.
- Fully responsive at 375px, 768px, and 1280px. No horizontal scroll at any width.
- Accessibility: semantic landmarks, one `h1`, alt text for every image taken from `CONTENT.md`, visible focus states, color contrast at least 4.5:1 for body text.
- SEO: `metadata` export with title, description, Open Graph image (use the hero photo unless `CONTENT.md` names an OG image), canonical URL, and a `favicon.ico` plus `apple-touch-icon.png` generated from the provided favicon source. Add `robots.txt` and `sitemap.xml` via the Next.js metadata routes.
- Lighthouse targets on the production build: Performance 90+, Accessibility 95+, Best Practices 95+, SEO 95+.

## Deployment setup

- Initialize a git repository with a `.gitignore` for Next.js and a `README.md` that explains how to edit content, how to run locally, and how to deploy.
- Add a `vercel.json` only if needed. The project must deploy on Vercel with zero configuration: import the repo, click Deploy.
- Do not commit `node_modules` or `.next`.
- Make an initial commit when everything builds, then give me the exact commands to create the GitHub repo under the `Dresden-xyz` account and push, using the `gh` CLI, without running them yourself. The Vercel team is `dresden1`; include the one-line `vercel` CLI command as an alternative to importing through the dashboard.

## Process

1. Read `CONTENT.md` in full first and list anything missing or ambiguous before writing code.
2. Scaffold the project, then build section by section.
3. Run `npm run build` and `npm run lint` and fix everything before reporting done.
4. Start the dev server and check the site in the browser at mobile and desktop widths. Fix layout issues you see.
5. Finish with a short summary: what was built, what was omitted from `CONTENT.md` and why, and the GitHub and Vercel steps for me to run.
