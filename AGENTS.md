# AGENTS.md

## Project Overview

This project is a frontend-only AstroJS website for an agency named Cybotum.

Cybotum showcases a catalog of apps, websites, dashboards, SaaS MVPs, and digital products that the agency can build for clients.

The website should be fast, clean, SEO-ready, mobile-friendly, and easy for potential clients to understand.

## Tech Stack

- AstroJS
- TypeScript
- Tailwind CSS
- shadcn components
- Astro Content Collections
- Static/frontend-only architecture

Do not add backend logic, authentication, databases, server actions, API routes, or unnecessary dependencies unless explicitly requested.

## Development Rules

- Follow Astro best practices.
- Prefer static generation.
- Keep JavaScript minimal.
- Use Astro components by default.
- Use client-side components only when interactivity is genuinely required.
- Use TypeScript wherever applicable.
- Keep components reusable and simple.
- Avoid overengineering.
- Avoid adding complex animations.
- Avoid flashy neon startup-style UI.
- Keep the website professional, soft, modern, and readable.

## Design Direction

The UI should feel:

- Clean
- Modern
- Professional
- Soft
- Spacious
- Mobile-first
- Trustworthy
- Easy to scan

Use soft colors, clear cards, readable typography, good whitespace, and subtle borders/shadows.

Avoid:

- Heavy gradients
- Bright neon colors
- Overanimated sections
- Unnecessary glassmorphism
- Cluttered layouts
- Generic agency fluff

## SEO Requirements

Every important page should support:

- Unique title
- Unique meta description
- Canonical URL
- Open Graph metadata
- Twitter card metadata
- Proper heading hierarchy
- Clean URLs
- Internal linking
- Optimized images
- Useful alt text
- JSON-LD where relevant

The project should include:

- sitemap support
- robots.txt
- reusable SEO component
- catalog pages optimized as service landing pages

## Content Strategy

The catalog is the core of the website.

Catalog items should describe what Cybotum can build, who it is for, what features it can include, and why it is useful.

Example catalog categories:

- Websites
- Web Apps
- Mobile Apps
- SaaS MVPs
- Dashboards
- E-commerce
- Landing Pages
- Automation Tools

Each catalog item should support:

- title
- slug
- category
- short description
- full description
- ideal users
- features
- complexity
- timeline
- SEO title
- SEO description
- keywords

## Accessibility Rules

- Use semantic HTML.
- Use proper heading order.
- Buttons and links must be keyboard accessible.
- Images need meaningful alt text unless decorative.
- Keep color contrast readable.
- Do not rely only on color to communicate meaning.
- Add skip-to-content support in the base layout.

## Performance Rules

- Optimize for Lighthouse performance, accessibility, SEO, and best practices.
- Avoid unnecessary client-side JavaScript.
- Avoid large image files.
- Use optimized images where possible.
- Lazy-load non-critical media.
- Do not add heavy animation libraries unless explicitly requested.
- Keep fonts minimal and performant.

## File/Code Quality Rules

- Keep naming clear and consistent.
- Do not create unnecessary files.
- Do not hardcode repeated site metadata across pages.
- Prefer centralized config for site name, URL, description, navigation, and social links.
- Remove unused imports.
- Avoid duplicate components.
- Keep routes clean and predictable.
- Ensure mobile and desktop layouts both work properly.

## Current Build Priority

Build in this order:

1. Site config
2. SEO component
3. Base layout
4. Header and footer
5. Design tokens/global styles
6. Catalog content collection
7. Basic pages
8. Catalog listing
9. Catalog detail pages
10. Homepage polish
11. SEO polish
12. Contact conversion

Do not jump directly into final homepage polish before the foundation is complete.