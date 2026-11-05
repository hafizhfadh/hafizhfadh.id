# hafizhfadh.id

The personal website of Hafizh Fadhlurrohman: an independent engineering consultancy for infrastructure, platforms, and databases. A static brochure site built with SvelteKit and deployed to Cloudflare Workers.

## Stack

- SvelteKit (Svelte 5 runes) + TypeScript + Vite
- Tailwind CSS 4 (design tokens in `src/app.css` `@theme`)
- `@sveltejs/adapter-cloudflare`, deployed via Wrangler
- All content routes prerendered at build time (`src/routes/+layout.ts`)

## Getting started

```bash
bun install        # or npm install
bun run dev        # dev server
bun run check      # svelte-check (types, a11y warnings)
bun run build      # production build
bun run preview    # serve the built worker locally
bun run deploy     # build + wrangler deploy
```

## Project structure

```
src/
├── lib/
│   ├── data/            # Centralized content: profile, services, experience,
│   │                    # philosophy, engagement process, ecosystem, metrics, navigation
│   ├── components/
│   │   ├── layout/      # Navbar, Footer
│   │   ├── sections/    # Page sections (Hero, ProvenImpact, ServiceDetail, ...)
│   │   ├── shared/      # Seo, PageHeader, Breadcrumbs, CtaBand, diagrams, glyphs
│   │   └── ui/          # Button, icons
│   └── actions/         # reveal (scroll animation)
└── routes/              # 9 prerendered routes + error + sitemap.xml
```

## Governing documents

Three root documents govern all content and design. Consult them before adding pages, sections, or copy:

- **PRODUCT.md**: what the site is, for whom, and why; services, IA, journeys, facts.
- **DESIGN.md**: the Warm Technical Editorial system: tokens, typography, layout, components, motion, accessibility.
- **VOICE.md**: brand voice and editorial governance: writing rules, vocabulary, page tones, and the verified factual record that gates every professional claim.

Content lives in `src/lib/data/`; pages compose it. Never duplicate copy across pages, and never add claims that are not in the verified record.
