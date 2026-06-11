# Cybotum Astro Starter

A clean, SEO-ready Astro starter template for agency sites, product studios, and digital product launches.

It gives you a polished starting point with reusable sections, content collections, strong defaults, and a simple setup flow so you can move fast without building the same foundation twice.

## Why this starter?

- Fast by default with Astro and static-first rendering
- Easy to customize with centralized site settings
- Content-driven with Astro Content Collections for catalog items
- SEO-friendly with canonical URLs, Open Graph, Twitter cards, sitemap, robots.txt, and JSON-LD
- Mobile-friendly and easy to scan with a calm, readable UI
- Ready for component work with shadcn/ui and MCP tooling support

## What's included

- Astro + TypeScript + Tailwind CSS 4
- React support for interactive pieces when needed
- shadcn/ui-ready setup with `components.json`
- Astro docs and shadcn MCP presets in `opencode.json`
- Reusable layout, header, footer, SEO component, and skip link
- Content collection for catalog-style product pages
- Example pages for home, catalog, services, about, contact, and 404
- Cloudflare adapter for simple static deployment
- Starter content for websites, web apps, dashboards, SaaS MVPs, mobile apps, landing pages, and e-commerce

## How to use this template

1. Install dependencies.
2. Update your brand, links, and metadata in `src/lib/site.ts`.
3. Replace the sample catalog items in `src/content/catalog/`.
4. Swap the preview assets in `public/` if you want your own branding.
5. Run the site locally and check the pages you want to keep.
6. Build and deploy when the template is ready.

### Quick start

```bash
pnpm install
pnpm dev
```

Open `http://localhost:4321` in your browser.

### Add shadcn components

```bash
npx shadcn@latest add button
```

## Customize it

- Change the site name, URL, description, keywords, and social links in `src/lib/site.ts`
- Edit or add catalog entries in `src/content/catalog/`
- Update navigation and footer links in the centralized site config
- Replace the favicon and social preview image in `public/`
- Adjust copy, colors, spacing, and sections in the layout and page components
- Add or remove pages based on the type of starter you want to sell

## Common commands

```bash
pnpm dev          # Start the local dev server
pnpm build        # Build for production
pnpm preview      # Build and preview with Wrangler
pnpm lint         # Run ESLint
pnpm format       # Format Astro, TypeScript, and TSX files
pnpm typecheck    # Run Astro type checking
pnpm deploy       # Build and deploy to Cloudflare
```

## Project structure

```text
src/
  components/     UI, layout pieces, and reusable sections
  content/catalog Sample catalog entries for the content collection
  layouts/        Base layout and shared page shell
  lib/            Site config and helper data
  pages/          Route files for the website
  styles/         Global styles and design tokens
public/           Static assets, favicon, robots.txt, and preview image
```

## SEO and launch checklist

- Replace the demo brand copy with your own template branding
- Make sure `SITE.url` points to the real production domain
- Keep the canonical URL, OG image, and social links updated
- Add a screenshot or preview image for your marketplace listing
- Confirm the catalog copy matches the type of product you want to sell
- Review the page titles and descriptions before publishing
- Add any extra pages you want buyers to expect, such as blog, terms, or privacy pages
- Verify the live demo on desktop and mobile

## Marketing checklist

If you want to sell or promote this as a starter template, do these next:

- Create a short product page with 3 to 5 clear benefits
- Show a live demo and a few screenshots
- Write a short changelog so buyers can see what improved over time
- Add simple usage terms or keep the included license visible
- Decide which audience this starter is for, such as agencies, freelancers, or product teams
- Keep the setup instructions short enough that a new buyer can get started in minutes

## License

MIT. See [LICENSE](./LICENSE) for the full text.
