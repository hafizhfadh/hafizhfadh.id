---
version: 1
slug: "src-routes-layout-svelte"
primary_target: "src/routes/+layout.svelte"
related_targets: ["src/routes/+page.svelte","src/routes/services/+page.svelte","src/routes/services/forward-deployed-engineering/+page.svelte","src/routes/services/managed-platforms/+page.svelte","src/routes/services/custom-applications/+page.svelte","src/routes/experience/+page.svelte","src/routes/expertise/+page.svelte","src/routes/about/+page.svelte","src/routes/contact/+page.svelte","src/lib/data/services.ts","src/lib/data/experience.ts","src/lib/data/navigation.ts"]
---

# Surface brief — hafizhfadh.id multi-page consultancy site

## Scope & mode

The site expands from one page to eight routes: `/`, `/services`, `/services/forward-deployed-engineering`, `/services/managed-platforms`, `/services/custom-applications`, `/experience`, `/expertise`, `/about`, `/contact`. Mode: Persuade throughout, with Level-3 technical-validation depth on /expertise and /experience. All routes share the established Warm Technical Editorial world (see direction contract) — this is an extension of the committed world, not a new one.

## IA contract

- LEVEL 1 discovery lives on `/` (concise: hero, intro, 3 service summaries, 4 verified metrics, selected experience, 3 principles, process strip, contact invitation — each linking deeper).
- LEVEL 2 evaluation lives on `/services` + three detail pages, `/experience` (full timeline + case studies).
- LEVEL 3 technical validation lives on `/expertise` (5 domains, principles, methodology) and the case-study depth on `/experience`.
- Content governance: data files are canonical (services.ts with slug + detail content; experience.ts with experiences + caseStudies + education + certifications; metrics.ts; philosophy.ts; ecosystem.ts; engagement.ts; profile.ts). Pages compose; no paragraph duplicated across pages.
- Journeys supported: business (home → services → detail → contact), technical (home → expertise → experience → contact), recruiter (home → about → experience → LinkedIn), returning (nav + footer contextual links everywhere).

## Page objectives (one primary objective each)

HOME: positioning + exploration. SERVICES: identify the right offering. SERVICE DETAIL: engagement scope + relevance. EXPERIENCE: credibility through verifiable history. EXPERTISE: technical depth. ABOUT: personal trust. CONTACT: convert into a discovery conversation. Exploration CTAs in informational sections; conversion CTAs at decision points only.

## Design consistency contract

Same tokens, type system, navbar (with active states), footer, button language, motion (reveal action, reduced-motion safe), responsive behavior. Each page gets a distinct editorial composition via the shared PageHeader (breadcrumbs + serif h1 + lead) and its own section arrangements. No card grids, no dashboard aesthetics, mono only for data/annotations.

## Memorable moment

Unchanged from the committed world: the hero constellation and the navy ledger.

## Unresolved decisions

None blocking; no portrait (brief forbids inventing one). Prerendering enabled for all content routes via +layout.ts.
