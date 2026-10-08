# Northstar SEO

A responsive, search-friendly website for a worldwide SEO services business, with a primary focus on the USA and Canada. The site introduces local, technical, content, and international SEO services and gives visitors a clear way to request a complimentary website review.

## Technologies

- TanStack Start and TanStack Router for server-rendered React pages and file-based routing
- React 19 and TypeScript for the interactive interface
- Vite 7 and Tailwind CSS 4, with custom responsive CSS
- Lucide icons and lightweight CSS/SVG illustrations
- Netlify deployment and Netlify Forms for managed inquiry collection

## Local development

Use Node.js 22 and pnpm.

```sh
pnpm install
pnpm dev
```

The local Vite server runs on port 3000. To use Netlify's development environment instead, run `netlify dev --port 8889`.

Netlify runs the configured production build and publishes `dist/client`. Form submissions must be verified on a deployed Netlify site; local rendering alone does not confirm form processing.

## Content and configuration

The main website and its service descriptions, market tabs, FAQs, and inquiry form live in `src/routes/index.tsx`. Styling lives in `src/styles.css`. Document metadata and organization/service structured data live in `src/routes/__root.tsx`.

The default public address is `https://phenomenal-dragon-4199f4.netlify.app/`. When connecting a custom domain, update the canonical URL and structured-data URL in `src/routes/__root.tsx`, the URL in `public/sitemap.xml`, and the sitemap reference in `public/robots.txt` together.

## Inquiries

The `seo-review` form submits to `/__forms.html`, a static registration file that allows Netlify to recognize and process the form without routing the POST through server-side rendering. All form fields must be kept in sync between the React form and this file. Netlify Forms is enabled, and the form includes a honeypot, required consent, browser validation, and sending, success, and error states.

View submissions in the site's Netlify Forms dashboard. Configure form notification recipients in Netlify before relying on email alerts; the application does not send its own notification emails. The free review is a human follow-up workflow, not an automated SEO scanner.

No database, account system, tracking scripts, or external SEO APIs are required. The growth chart is explicitly labeled as an illustration rather than client performance. Google Fonts supplies the typography, with local sans-serif fallbacks.
