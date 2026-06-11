# Astro Starter Template

A clean, SEO-ready Astro starter for agency sites, product studios, and digital product launches.

It ships as a static frontend with reusable sections, a content-driven catalog, and sensible defaults so buyers can rebrand it quickly without rebuilding the foundation.

## What is included

- Astro + TypeScript + Tailwind CSS 4
- Static-first rendering with Cloudflare adapter support
- Reusable SEO component with canonical, Open Graph, Twitter, and JSON-LD support
- Generated `robots.txt` and Open Graph image from site config
- Astro Content Collection for catalog-style service pages
- Main pages for home, catalog, services, about, contact, sitemap, terms, privacy, and 404
- Route smoke check plus CI workflow for build, lint, and type safety

## Edit these first

1. Open [site config](./src/lib/site.ts) and update the brand name, URL, email, social links, and shared copy.
2. Replace the sample catalog entries in [src/content/catalog](./src/content/catalog).
3. Swap the favicon or preview branding in `public/` if you want a different visual identity.
4. Review the legal pages in [terms](./src/pages/terms/index.astro) and [privacy](./src/pages/privacy/index.astro) before publishing.
5. Run the site locally and check the routes you plan to keep.

## Catalog content format

Each entry in `src/content/catalog/*.md` supports:

- `title`
- `category`
- `shortDescription`
- `description`
- `idealFor`
- `features`
- `complexity`
- `timeline`
- `seoTitle`
- `seoDescription`
- `keywords`

Example:

```md
---
title: SaaS MVP
category: Web Apps
shortDescription: A lean, launch-ready SaaS product with authentication and billing.
description: Build a focused first release with a clean dashboard and practical feature set.
idealFor:
  - Startup founders
  - Product teams
features:
  - User onboarding
  - Billing scaffold
complexity: Complex
timeline: 6-10 weeks
seoTitle: SaaS MVP Development
seoDescription: Launch a focused SaaS MVP faster.
keywords:
  - SaaS MVP
  - product development
---
```

## Commands

```bash
pnpm install
pnpm dev
```

```bash
pnpm lint
pnpm typecheck
pnpm build
pnpm smoke
pnpm verify
pnpm deploy
```

## Validation

- `pnpm lint` checks code style and basic correctness.
- `pnpm typecheck` runs Astro type checking.
- `pnpm build` confirms the app compiles and generates static output.
- `pnpm smoke` checks the built routes, `robots.txt`, the Open Graph image, and the catalog pages.
- `pnpm verify` runs the full validation chain in one command.

## Pages included by default

- `/`
- `/catalog`
- `/catalog/[slug]`
- `/services`
- `/about`
- `/contact`
- `/sitemap`
- `/terms`
- `/privacy`
- `/404`

## Deployment

The project is configured for static deployment with Cloudflare. Update the site URL in [src/lib/site.ts](./src/lib/site.ts), run `pnpm build`, then deploy with `pnpm deploy`.

## Notes

- The starter is intentionally frontend-only.
- There is no database, auth, API route, or backend service bundled by default.
- If you add forms, analytics, or other third-party tools, update the privacy page accordingly.

## License

MIT. See [LICENSE](./LICENSE) for the full text.
