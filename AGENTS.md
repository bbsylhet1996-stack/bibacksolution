# Project guide

## Purpose

Northstar SEO is a public SEO services website targeting the USA and Canada while welcoming worldwide inquiries. It is a marketing website, not an SEO analytics dashboard or automated audit tool.

## Architecture

- TanStack Start with React 19 and TypeScript; TanStack Router uses file-based routes.
- Vite integrates React, Tailwind CSS 4, and the Netlify TanStack Start plugin.
- Netlify hosts the application and persists inquiries through its managed Forms service.
- No application database, authentication, AI inference, or custom API endpoints are needed.

## Key files

- `src/routes/__root.tsx`: document shell, title, description, sharing metadata, fonts, canonical URL, organization/service JSON-LD, and not-found presentation.
- `src/routes/index.tsx`: complete landing page, service content, keyboard-accessible market tabs, mobile menu, FAQs, and inquiry form.
- `src/styles.css`: design tokens, custom component classes, responsive breakpoints, and reduced-motion handling.
- `src/router.tsx`: router configuration and scroll restoration.
- `public/__forms.html`: static Netlify Forms registration skeleton.
- `public/robots.txt` and `public/sitemap.xml`: crawl configuration and production sitemap.
- `public/favicon.svg`: original Northstar brand mark.
- `netlify.toml`: deployment configuration; production output is `dist/client`.

## Conventions

Use TypeScript and functional React components, PascalCase component names, descriptive variables, and type-only imports where appropriate. Existing content uses small static arrays; these are editorial content, not persisted user records. React state is only transient UI state. Use CSS custom properties and the established cream, forest-green, sage, and burnt-orange palette. Preserve semantic headings, visible focus styles, form labels, native disclosure controls, accessible tabs, and reduced-motion behavior.

## Non-obvious decisions

The homepage illustration is native CSS/SVG and is labeled as conceptual; do not turn it into fabricated performance claims. Avoid fake client logos, testimonials, guaranteed rankings, or invented business contact details. Inquiry submission is a human review request, not an automatic SEO scan.

The React form must POST URL-encoded data to `/__forms.html`, not `/`, to avoid interception by the SSR handler. Keep every form field synchronized with the static skeleton. The form name is `seo-review`. Netlify Forms is already enabled. If Forms is implemented again, run the activation script documented in the platform's Netlify Forms skill. Notification recipients are configured in Netlify, not in code.

Canonical URLs currently use `https://phenomenal-dragon-4199f4.netlify.app/`. Update root metadata, JSON-LD, robots, and sitemap together when the production domain changes. Do not add an Open Graph image; the platform supplies it.

## Development

Use Node.js 22 and pnpm. `pnpm dev` runs Vite on port 3000; `netlify dev --port 8889` provides Netlify emulation. In the agent build environment, do not run local builds, dev servers, tests, or type-check commands unless explicitly permitted; the platform validates automatically. Route-tree generation is managed by the framework, so do not hand-edit generated routing files. Never commit changes or inspect the `.git` directory.
