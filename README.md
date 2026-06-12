# Mano Dharmalingam — Personal Brand Website

Next.js 15 · TypeScript · Tailwind CSS · shadcn-style UI · Framer Motion

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

## Before going live — 4 things to do

1. **GitHub link** — in `content/site-data.ts`, replace `YOUR_GITHUB_USERNAME` in `site.github`.
2. **Photo** — save your brand image/headshot as `public/photo.png` (square, ≥800px recommended).
3. **Domain** — buy your domain (suggested: `manodharmalingam.com`) and update `site.url` in `content/site-data.ts` (used for SEO, sitemap, OpenGraph).
4. **Resume** — `public/Mano-Dharmalingam-Resume.pdf` is your Feb 2026 resume; replace when you update it.

## Editing content

**All copy lives in one file: `content/site-data.ts`.** Stats, experience, projects, skills, certifications, about story — edit there, no component changes needed.

## Contact form

Ships with a `mailto:` form (no backend). For a hosted form:
- [Formspree](https://formspree.io): change the form `onSubmit` in `app/contact/page.tsx` to POST to your Formspree endpoint.
- Or use [Resend](https://resend.com) with a Next.js server action.

## Deploy (free)

1. Push this folder to a GitHub repo.
2. Import the repo on [vercel.com](https://vercel.com) — zero config needed.
3. Add your custom domain in Vercel project settings.

## Structure

```
app/            pages (App Router), sitemap, robots, SEO metadata, JSON-LD
components/     ui primitives (shadcn-style), nav, footer, motion, sections
content/        site-data.ts — ALL content
lib/            utils
public/         photo.png, resume PDF
```

## Built-in

- Dark/light mode (dark default), system-aware
- Fully responsive, mobile-first
- WCAG-minded: skip link, focus rings, semantic landmarks, reduced-motion support
- SEO: per-page metadata, OpenGraph/Twitter cards, JSON-LD Person schema, sitemap.xml, robots.txt
- Static rendering for top performance
