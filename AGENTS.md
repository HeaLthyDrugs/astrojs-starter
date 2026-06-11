# Generate `AGENTS.md` for this Astro project

You are working inside an existing **Astro JS project**. Your task is to inspect the project carefully and generate a high-quality `AGENTS.md` file that future AI coding agents can follow while working on this codebase.

## Goal

Create an `AGENTS.md` file that explains:

* What this project is
* How the project is structured
* How to run, build, lint, and preview it
* What coding conventions to follow
* What Astro-specific best practices must be respected
* What design, SEO, accessibility, and performance rules should be followed
* What the AI agent should and should not do while editing the project

## Important Rules

Before writing the `AGENTS.md`, inspect the project files properly.

Check files such as:

* `package.json`
* `astro.config.*`
* `tsconfig.json`
* `src/`
* `src/pages/`
* `src/components/`
* `src/layouts/`
* `src/content/`
* `public/`
* styling files
* config files
* README or documentation files, if present

Do **not** guess things that are not present in the project.
If something is unclear, write a practical default instruction instead of inventing fake details.

## Output Requirement

Create or update a file named:

```txt
AGENTS.md
```

The final file should be written in clean Markdown.

Do not write unnecessary explanations outside the file.
Only create/update the `AGENTS.md`.

---

# Required `AGENTS.md` Structure

The generated `AGENTS.md` must include the following sections.

## 1. Project Overview

Explain what this Astro project appears to be based on the codebase.

Mention:

* Project type
* Main purpose
* Important features
* Whether it is static, hybrid, or server-rendered, based on the Astro config

## 2. Tech Stack

List the detected technologies, for example:

* Astro
* TypeScript
* JavaScript
* Tailwind CSS
* CSS Modules
* MDX
* Content Collections
* React/Svelte/Vue integrations, if used
* Any UI library
* Any deployment platform configuration

Only include tools actually found in the project.

## 3. Project Structure

Explain the important folders and files.

Cover things like:

```txt
src/pages       - route files
src/components  - reusable UI components
src/layouts     - shared page layouts
src/content     - content collections, blogs, docs, etc.
public          - static assets
```

Adapt this section according to the actual project structure.

## 4. Development Commands

Read `package.json` and document the correct commands.

Include commands for:

* Installing dependencies
* Running development server
* Building production version
* Previewing production build
* Linting, if available
* Formatting, if available
* Type checking, if available

Use the correct package manager based on lockfiles:

* `pnpm-lock.yaml` → use `pnpm`
* `package-lock.json` → use `npm`
* `yarn.lock` → use `yarn`
* `bun.lockb` or `bun.lock` → use `bun`

## 5. Astro-Specific Guidelines

Include clear Astro rules:

* Prefer `.astro` components for static UI.
* Use framework components only when interactivity is required.
* Avoid unnecessary client-side JavaScript.
* Use Astro islands carefully.
* Use `client:load`, `client:idle`, `client:visible`, or `client:only` intentionally.
* Keep pages lightweight and mostly static when possible.
* Use `Astro.props` clearly.
* Keep frontmatter clean and readable.
* Prefer Astro Content Collections for structured content when suitable.
* Avoid adding heavy dependencies unless clearly needed.

## 6. Component Guidelines

Add instructions for components:

* Keep components small and focused.
* Reuse existing components before creating new ones.
* Follow existing naming conventions.
* Keep props typed when TypeScript is used.
* Avoid mixing too much logic into UI components.
* Keep layout components separate from feature components.
* Preserve existing design patterns.

## 7. Styling Guidelines

Detect the styling system used and write relevant rules.

If Tailwind CSS is used:

* Use existing tokens and utility patterns.
* Avoid random one-off values unless necessary.
* Keep class names readable.
* Extract repeated UI into components.

If plain CSS is used:

* Follow existing class naming style.
* Avoid global CSS pollution.
* Use scoped styles in Astro components when possible.

If a design system exists, instruct the agent to follow it strictly.

## 8. UI/UX Guidelines

Include general UI rules:

* Keep the interface clean, modern, and consistent.
* Prioritize readability and spacing.
* Make all pages responsive.
* Design mobile-first where possible.
* Avoid unnecessary animations.
* Use subtle transitions only when they improve the experience.
* Keep colors, borders, shadows, and radius consistent with the existing design.

## 9. SEO Guidelines

Since this is an Astro project, include SEO instructions:

* Every important page should have a proper title and description.
* Use semantic HTML.
* Use one clear `h1` per page.
* Add Open Graph and Twitter metadata where relevant.
* Use canonical URLs where appropriate.
* Keep sitemap and robots configuration correct if present.
* Use descriptive alt text for images.
* Avoid duplicate or thin pages.
* Prefer static generation for SEO-heavy pages.

## 10. Performance Guidelines

Include Astro performance rules:

* Keep JavaScript minimal.
* Do not hydrate components unnecessarily.
* Optimize images using Astro assets where possible.
* Use responsive images.
* Avoid large unoptimized background images.
* Lazy-load non-critical assets.
* Avoid adding large libraries for small tasks.
* Keep CSS lean.
* Ensure pages remain fast on mobile networks.

## 11. Accessibility Guidelines

Add accessibility requirements:

* Use semantic HTML.
* Buttons must be buttons, links must be links.
* Add accessible labels where needed.
* Maintain keyboard navigation.
* Keep color contrast readable.
* Do not remove focus states.
* Add meaningful `alt` text for images.
* Avoid interaction patterns that only work with a mouse.

## 12. Content Guidelines

If the project has blog/content/docs:

* Follow existing content structure.
* Keep frontmatter consistent.
* Use clear slugs.
* Keep headings structured.
* Avoid changing published URLs unless necessary.
* Preserve existing metadata patterns.

If no content system exists, mention that content should follow the existing page/component structure.

## 13. Code Quality Rules

Include rules for safe coding:

* Make small, focused changes.
* Do not rewrite unrelated files.
* Do not introduce unnecessary abstractions.
* Do not change public APIs without reason.
* Preserve existing behavior unless the task asks otherwise.
* Keep code readable over clever.
* Remove unused imports and dead code.
* Follow existing formatting.
* Run available checks before finishing.

## 14. Git and File Safety

Add instructions:

* Do not delete files unless clearly required.
* Do not rename routes casually because it can break URLs.
* Do not overwrite user content.
* Do not modify environment files unless explicitly asked.
* Do not commit secrets.
* Do not expose API keys or private tokens.
* Keep changes limited to the requested scope.

## 15. Environment Variables

If environment variable examples exist, document them carefully.

Rules:

* Never include real secrets.
* Use placeholder values only.
* Mention where env vars are expected.
* Do not create new env vars unless needed.

## 16. Testing and Validation

Document how the agent should validate changes:

* Run the build command.
* Run lint/typecheck if available.
* Manually inspect changed pages.
* Check responsive behavior.
* Check console errors.
* Confirm SEO metadata for page-level changes.
* Confirm no unnecessary client-side JS was added.

## 17. Agent Behavior

Add a final section instructing future agents:

* First understand the existing codebase.
* Follow current patterns.
* Prefer minimal, correct changes.
* Ask for clarification only when truly blocked.
* Make reasonable assumptions for small tasks.
* Explain important changes after editing.
* Mention any checks that could not be run.

---

# Tone of the `AGENTS.md`

The tone should be:

* Clear
* Practical
* Direct
* Beginner-friendly
* Useful for AI coding agents
* Specific to this Astro project

Avoid generic filler.
Make the file actually useful for future development work.
