# Generate `DESIGN.md` for this Astro project

You are working inside an existing **Astro JS project**. Your task is to inspect the project carefully and generate a high-quality `DESIGN.md` file that future AI coding agents can follow while designing or updating the UI.

## Goal

Create a project-specific `DESIGN.md` file that defines the visual direction, UI rules, layout patterns, component styling, responsive behavior, accessibility expectations, and design consistency rules for this Astro project.

The final `DESIGN.md` should help any future coding agent make UI changes that feel consistent with the existing project instead of creating random, disconnected, AI-generated-looking sections.

## Important Rules

Before writing the `DESIGN.md`, inspect the actual project files.

Check files such as:

* `package.json`
* `astro.config.*`
* `src/pages/`
* `src/components/`
* `src/layouts/`
* `src/styles/`
* `src/content/`
* `public/`
* global CSS files
* Tailwind config files
* design token files
* existing components
* existing layout patterns
* README or docs, if present

Do **not** guess fake design details.

If something is not clearly defined in the project, create a sensible design rule based on the current UI patterns.
If the current design is inconsistent, define a cleaner, more consistent direction without rewriting the entire product style.

## Output Requirement

Create or update a file named:

```txt
DESIGN.md
```

The final file should be written in clean Markdown.

Do not write unnecessary explanations outside the file.
Only create/update the `DESIGN.md`.

---

# Required `DESIGN.md` Structure

The generated `DESIGN.md` must include the following sections.

## 1. Design Overview

Explain the intended visual direction of this Astro project.

Mention:

* Overall design style
* Target user experience
* Visual personality
* UI complexity level
* Whether the site should feel minimal, premium, playful, editorial, product-focused, agency-like, portfolio-like, SaaS-like, etc., based on the actual project

The design direction should be specific, not generic.

Bad example:

```txt
The design should be modern and clean.
```

Good example:

```txt
The design should feel calm, polished, and product-focused, with spacious layouts, soft surfaces, restrained motion, and strong typography.
```

## 2. Design Principles

Define the core principles future agents must follow.

Include principles such as:

* Clarity before decoration
* Consistency before novelty
* Performance before visual gimmicks
* Mobile-first layouts
* Accessible interactions
* Strong hierarchy
* Reusable components
* Minimal client-side complexity
* Design decisions should support the content, not overpower it

Adapt the principles according to the project.

## 3. Visual Style

Describe the visual style clearly.

Cover:

* Surface style
* Border radius usage
* Shadows
* Borders
* Backgrounds
* Cards
* Buttons
* Section separation
* Visual depth
* Use of gradients, glassmorphism, blur, or decorative effects, only if already used or appropriate

Avoid overusing fancy effects.

If soft UI is appropriate, mention:

* Use subtle shadows
* Use low-contrast borders
* Use calm backgrounds
* Avoid harsh colors
* Avoid heavy glow effects
* Avoid overly bright gradients
* Avoid visual noise

## 4. Color System

Inspect the project and document the existing color system.

Include:

* Primary colors
* Background colors
* Text colors
* Muted text colors
* Border colors
* Accent colors
* Error/success/warning colors, if present

If Tailwind CSS or CSS variables are used, document the tokens and how they should be used.

Rules to include:

* Do not introduce random colors.
* Prefer existing CSS variables or Tailwind theme tokens.
* Keep contrast readable.
* Use accent colors sparingly.
* Backgrounds should support readability.
* Avoid bright, saturated colors unless the current brand already uses them.

If the project has no clear color system, define a simple one based on existing UI.

## 5. Typography

Document the typography system.

Mention:

* Font families used
* Heading style
* Body text style
* Font weights
* Line heights
* Letter spacing
* Text hierarchy
* Maximum content width for readability

Rules:

* Use clear heading hierarchy.
* Do not skip heading levels for visual reasons.
* Keep paragraphs readable.
* Avoid oversized text on mobile.
* Avoid too many font sizes.
* Use font weight to create hierarchy, not random colors.

## 6. Layout System

Explain how layouts should be built.

Cover:

* Page width
* Container sizes
* Section spacing
* Grid usage
* Flex usage
* Responsive layout behavior
* Hero section patterns
* Content section patterns
* CTA section patterns
* Footer/header spacing

Rules:

* Keep sections spacious but not empty.
* Use consistent horizontal padding.
* Use consistent vertical rhythm.
* Avoid cramped layouts.
* Avoid sections that feel disconnected from the rest of the page.
* Design mobile-first, then enhance for larger screens.
* Avoid unnecessary nested wrappers.

## 7. Component Design

Define rules for reusable components.

Cover:

* Buttons
* Cards
* Navbar/header
* Footer
* Hero sections
* Feature sections
* Catalog/product cards
* Forms
* Badges/pills
* Modals/dropdowns, if present
* Carousels, if present

Rules:

* Reuse existing components before creating new ones.
* Keep component variants limited and intentional.
* Use consistent border radius, padding, and spacing.
* Avoid creating one-off components for small visual differences.
* Component APIs should stay simple.
* Interactive components should have clear hover, focus, active, and disabled states.

## 8. Buttons and Links

Add specific rules for buttons and links.

Include:

* Primary button style
* Secondary button style
* Ghost/subtle button style
* Link styling
* Hover states
* Focus-visible states
* Disabled states
* Icon placement rules

Rules:

* Buttons should look clickable.
* Links should be recognizable.
* Do not use buttons for navigation links.
* Do not use links for actions.
* Keep button text short and action-focused.
* Keep radius and padding consistent.

## 9. Cards and Surfaces

Define how cards and surfaces should look.

Cover:

* Card background
* Border style
* Shadow usage
* Padding
* Radius
* Hover behavior
* Image handling inside cards
* Content hierarchy inside cards

Rules:

* Cards should not look randomly styled.
* Avoid heavy shadows.
* Avoid excessive borders.
* Avoid inconsistent image ratios.
* Use subtle hover states only when the card is interactive.
* Keep card content aligned and readable.

## 10. Imagery and Media

Define rules for images, icons, videos, and illustrations.

Include:

* Image aspect ratios
* Image optimization expectations
* Background image usage
* Icon style
* Decorative image rules
* Alt text rules

Astro-specific performance rules:

* Use Astro image optimization where appropriate.
* Prefer responsive images.
* Avoid very large uncompressed images.
* Avoid loading decorative media above the fold unless needed.
* Lazy-load non-critical images.
* Use `public/` only for assets that should be served directly.
* Keep image dimensions stable to avoid layout shift.

## 11. Motion and Interaction

Define animation rules.

Include:

* Transition duration
* Easing style
* Hover motion
* Scroll animations
* Page transitions, if used
* Carousel motion, if used
* Reduced motion support

Rules:

* Motion should be subtle and purposeful.
* Avoid bouncy, flashy, or distracting animations.
* Do not animate everything.
* Use motion to guide attention, not to decorate.
* Respect `prefers-reduced-motion`.
* Avoid animation that hurts performance.

## 12. Responsive Design

Add mobile and responsive rules.

Cover:

* Mobile-first design
* Breakpoint behavior
* Navigation behavior
* Grid stacking
* Typography scaling
* Button sizing
* Touch targets
* Image resizing
* Spacing adjustments

Rules:

* The UI must work well on small screens.
* Avoid desktop-only layouts.
* Avoid tiny tap targets.
* Avoid horizontal scrolling.
* Keep text readable on mobile.
* Test important sections at mobile, tablet, and desktop widths.

## 13. Accessibility

Define accessibility rules clearly.

Include:

* Semantic HTML
* Heading order
* Keyboard navigation
* Focus states
* Color contrast
* Alt text
* ARIA usage
* Form labels
* Button/link correctness

Rules:

* Do not remove focus outlines without replacing them.
* Do not rely only on color to communicate meaning.
* Use semantic elements before ARIA.
* Interactive elements must be keyboard accessible.
* Decorative icons/images should be hidden from screen readers when appropriate.
* Forms must have clear labels and error messages.

## 14. SEO-Friendly Design

Since this is an Astro project, include design rules that support SEO.

Include:

* Clear page hierarchy
* One main `h1` per page
* Semantic sections
* Meaningful headings
* Readable content structure
* Proper image alt text
* Avoid hiding important text inside images
* Keep content crawlable
* Avoid unnecessary client-only rendering for SEO-critical content

Rules:

* Important marketing copy should be real HTML text.
* Do not replace headings with images.
* Do not hide essential content behind JavaScript interactions.
* Keep page layouts readable for both users and search engines.

## 15. Performance-Focused Design

Add performance design rules.

Include:

* Minimal JavaScript
* Minimal hydration
* Lightweight components
* Optimized images
* Avoid heavy animation libraries
* Avoid unnecessary sliders/carousels
* Avoid loading large fonts
* Avoid background videos unless clearly needed
* Keep above-the-fold content fast

Astro-specific rules:

* Prefer static `.astro` components where possible.
* Use framework components only for real interactivity.
* Use `client:visible`, `client:idle`, or similar hydration directives carefully.
* Do not hydrate purely static UI.
* Keep landing pages fast and lightweight.

## 16. Content Presentation

Define how content should be visually presented.

Cover:

* Blog/content pages, if present
* Documentation pages, if present
* Landing page copy
* Feature descriptions
* CTA copy
* Empty states
* Error states

Rules:

* Use clear and direct copy.
* Avoid over-explaining in UI.
* Keep sections scannable.
* Use short paragraphs.
* Use lists only when they improve readability.
* Make CTAs obvious but not aggressive.

## 17. Dark Mode / Light Mode

If the project supports themes, document the theme rules.

Include:

* How dark mode is handled
* Color token usage
* Surface contrast
* Border contrast
* Shadow adjustments
* Image handling

Rules:

* Do not hardcode colors that break themes.
* Theme changes should feel consistent.
* Avoid pure black/pure white unless already used intentionally.
* Test components in all supported themes.

If no theme support exists, mention that new theme support should not be added unless explicitly requested.

## 18. Design Consistency Rules

Add strict consistency instructions.

Rules:

* Follow the existing design language.
* Do not introduce new visual styles casually.
* Do not mix multiple button styles.
* Do not mix multiple card styles.
* Do not use random spacing values.
* Do not add decorative elements that do not support the content.
* Do not make every section look like a different website.
* Keep the UI calm, polished, and coherent.

## 19. What Agents Should Avoid

Create a clear list of design mistakes to avoid.

Include:

* Overly generic AI-looking layouts
* Excessive gradients
* Heavy shadows
* Random glassmorphism
* Too many animations
* Inconsistent spacing
* Inconsistent radius
* Low contrast text
* Desktop-only design
* Unoptimized images
* Huge JavaScript dependencies for simple UI
* Rewriting the entire design system for one small task
* Adding new libraries without a strong reason

## 20. Validation Checklist

Add a checklist that future agents must follow before finishing UI work.

Include:

* Page works on mobile
* Page works on desktop
* No horizontal scrolling
* Typography hierarchy is clear
* Buttons and links are accessible
* Images are optimized
* No unnecessary client-side JavaScript added
* Layout matches existing project style
* Build passes
* No console errors
* SEO-critical content is still visible in HTML
* Colors and spacing are consistent
* UI does not look like a disconnected template

---

# Tone of the `DESIGN.md`

The tone should be:

* Clear
* Practical
* Direct
* Design-focused
* Astro-aware
* Useful for AI coding agents
* Specific to this project

Avoid generic filler.
Make the file useful enough that future agents can follow it while making real UI changes.
