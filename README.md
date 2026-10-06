# Adasa — Arabic Photography Magazine

**Adasa (عدسة)** is an Arabic, right-to-left photography magazine application. It presents practical photography guidance in a responsive reading experience, from the home page and featured articles to searchable article listings and detailed reading pages.
The interface is designed for Arabic readers, with RTL layout and photography-focused navigation throughout.

[View the live demo](https://adasa-beta-amber.vercel.app) · [Open the repository](https://github.com/zeyadhatem00/adasa)

## Features

- Arabic RTL interface with responsive navigation, home, about, privacy, terms, and not-found pages.
- Photography article catalog with featured content, category filters, client-side title search, pagination, and grid/list views.
- Article detail pages with cover image, category, date, reading time, author information, tags, section navigation, related-article links, and share UI.
- Local article metadata and body content in `src/data/data.json`, with photography and author images referenced from Unsplash.
- Vercel SPA rewrite so client-side routes resolve through `index.html` on deployment.

## Stack

- React 19 and React Router DOM 7
- Vite 8 with `@vitejs/plugin-react`
- Tailwind CSS 4 through `@tailwindcss/vite`
- Font Awesome icons and the Tajawal Arabic font

The lockfile records Vite's Node engine requirement as **Node.js `^20.19.0 || >=22.12.0`**. The project does not pin a separate Node version in `package.json` or a version file.

## Getting started

```bash
git clone https://github.com/zeyadhatem00/adasa.git
cd Adasa-
npm ci
npm run dev
```

Vite serves the development site at the URL printed in the terminal (normally `http://localhost:5173`).

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server with HMR. |
| `npm run build` | Create a production build in `dist/`. |
| `npm run lint` | Run ESLint across the repository. |
| `npm run preview` | Preview the production build locally. |

Run `npm run build` before `npm run preview`.

## Routes

- `/` — home page with featured articles and magazine introduction.
- `/About` — about page.
- `/Blog` — searchable, filterable article listing.
- `/blog/:slug` — article detail page.
- `/Privacy` and `/Terms` — policy pages.
- Any other path — not-found page.

## Source layout

- `src/App.jsx` — React Router configuration and route tree.
- `src/Pages/` — page-level home, blog, article, about, policy, terms, and 404 views.
- `src/Components/` — shared navigation, layout, footer, cards, writer cards, and pagination.
- `src/data/data.json` — local article, author, category, tag, and image metadata.
- `src/index.css` — Tailwind import, Arabic typography, layout helpers, gradients, and animations.
- `public/`, `src/assets/` — static icons and branding assets.
- `vercel.json` — rewrite configuration for SPA navigation.

## Scope and limitations

This repository is a client-side magazine UI rather than a connected publishing backend. The article catalog is bundled JSON, and static inspection found no API client, environment-variable configuration, or data submission flow. The header search icon has no handler; the newsletter field has no submit handler and its CTA links to the blog; article share controls are visual elements rather than wired sharing actions. Image URLs in the local dataset depend on the referenced Unsplash resources.

No license is declared in the repository metadata.
