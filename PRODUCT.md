# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

SvelteKit (Svelte 5 runes), TypeScript, Vite, `@sveltejs/adapter-cloudflare`, deployed to Cloudflare Workers via `wrangler.jsonc` (account ID: `1026cb37c2e9558166572bbb1f21d7d4`).

## Users

Chief Technology Officers (CTOs), Engineering Managers, Infrastructure & SRE Managers, Database Administrators, Technical Founders, and business leadership evaluating senior external capabilities for forward-deployed engineering, high-scale database optimization, cloud cost reduction, and open-source platform integration.

## Product Purpose

A premium personal engineering consultancy website establishing Hafizh Fadhlurrohman as an independent engineering partner. Generates qualified professional engagement requests through proven operational impact, rigorous systems reasoning, and transparent technical credibility.

## Positioning

Independent Engineering Consultancy (Infrastructure, Platform & Database Engineering Consultant). "Engineering Beyond Infrastructure" (Secure. Open. Adaptable.). Clients engage directly with the principal engineer rather than a layered agency. Operates within existing technology ecosystems without forcing clients into predetermined stacks.

## Client Problems

The site speaks to organizations experiencing one or more of these situations:

- **Unexplained cloud cost growth.** Spend outpaces the business; nobody can attribute the invoice to usage or value.
- **Performance degradation at scale.** Queries slow as data grows; incidents repeat; bigger servers look inevitable.
- **Unowned critical systems.** Mission-critical databases and platforms run on folklore configuration, untested backups, and departed knowledge.
- **Compliance deadlines without security engineering.** ISO/IEC 27001 recertification or customer audits need an engineer who implements controls, not a deck.
- **Postponed migrations and integrations.** Architectural moves everyone agrees on, perpetually deferred for lack of senior hands.
- **Operational friction from software gaps.** Spreadsheets as systems of record, disconnected tools, manual reconciliation, legacy systems that cannot talk to anything.

## Services

Three engagement models (defined fully in `src/lib/data/services.ts`, presented on `/services`):

1. **Forward Deployed Engineering.** Embedded partnership inside the client's team and environment for high-stakes, time-boxed problems: migrations, performance mysteries, compliance sprints, interim platform ownership.
2. **Managed Platforms & Infrastructure.** Ongoing retainer-style stewardship of mission-critical databases and infrastructure: performance, observability, security posture, backup verification, and cost governance on a monthly rhythm.
3. **Custom Applications & Integration.** Software built around the client's operation: internal business systems, banking and payment integrations, workflow automation, legacy bridging, and mobile/web applications.

## Commercial Objectives

- Primary conversion: a qualified discovery-interview request via `/contact` (form or direct email).
- Secondary conversions: direct email (`hafizhfadh@gmail.com`), LinkedIn contact, service-page drill-downs.
- The site qualifies leads by demonstrating verified outcomes and clear engagement models before asking for contact.
- No public pricing, no budget disclosure requirement, no sales sequences. Pricing is scoped after technical discovery (see `/contact`).

## Engagement Model

Discovery-first, five stages: Professional Introduction → Structured Discovery Interview → Technical Assessment → Tailored Proposal → Commercial Agreement. Understanding precedes quoting; scope precedes price. Documented in `src/lib/data/engagement.ts` and presented on `/contact`.

## Information Architecture

Nine prerendered brochure routes plus error and sitemap:

- `/` (homepage): hero, working note, service summaries, verified impact ledger, selected experience, principles in brief, process strip, contact invitation.
- `/services`: engagement-model index with diagram per service.
- `/services/forward-deployed-engineering`, `/services/managed-platforms`, `/services/custom-applications`: service detail pages sharing one `ServiceDetail` template.
- `/experience`: full timeline, education and certifications, three case studies.
- `/expertise`: operating stances, six engineering principles, five-domain capability index.
- `/about`: personal journey, working style, credentials, external links.
- `/contact`: navy invitation with form, expectations, and the five-stage process in full.

Navigation is single-sourced in `src/lib/data/navigation.ts` (navbar, mobile menu, footer).

## User Journeys

1. **The evaluating CTO** (primary): lands on `/` → scans the impact ledger (proof) → reads the working note (voice) → drills into the matching service page → starts a conversation via `/contact`.
2. **The referred engineer/manager**: arrives via a shared service page → reads capabilities and relevant experience → verifies track record on `/experience` → requests a discovery interview.
3. **The due-diligence researcher**: reads `/about` for the person and working style → cross-checks claims on `/experience` → contacts directly by email.

Each journey must be able to reach `/contact` in one click from every section boundary, which the shared `CtaBand` guarantees.

## Conversion Objectives

- Every content page carries exactly one navy conversion anchor (the `CtaBand`, or the contact invitation on `/contact`).
- Conversion copy invites a conversation; it never sells, pressures, or gate-keeps.
- Primary conversion label family: "Start a professional conversation", "Request a discovery interview", "Discuss this engagement".
- Success measure for the copy: a decision-maker can tell what is offered, what proof exists, and how to start, within one scroll.

## Content Governance

Three root documents govern all content, with a strict division of authority:

- **PRODUCT.md** (this file): what the site is, for whom, and why; services; facts.
- **DESIGN.md**: how the site looks, feels, and behaves; tokens, components, motion.
- **VOICE.md**: how the brand communicates; the authoritative reference for every user-facing word, including the verified factual record that gates all professional claims.

Rules:

- New user-facing copy requires consulting VOICE.md first; new facts require updating the factual record before the copy.
- Factual source material (the CV, recorded in "Evidence on Hand" and VOICE.md §H) outranks all documents on professional claims.
- Content is never duplicated across pages. Shared positioning lines are limited to the brand commitments below.
- No fabricated accomplishments, testimonials, metrics, or certifications. Team contributions stay team contributions.

## Business Constraints

- SvelteKit application running directly on Cloudflare Workers edge via `@sveltejs/adapter-cloudflare` and `wrangler.jsonc`.
- Sub-millisecond static asset delivery via Cloudflare Workers Assets.
- Commercial framework: Discovery interview preceding tailored proposals; no public hourly rates or pricing packages.
- Craft floor compliance: Zero AI tells (no gradient text, no eyebrow kickers, no decorative 2-axis grids, no repetitive card rows, no nested cards, no side-border tabs, no em dashes in copy).
- Visual direction: Warm Technical Editorial (warm ivory `#F4EFE5` canvas, deep navy `#172B40` anchors, terracotta `#C85A3A` display accents with clay `#B04A2C` interactive states, sage `#687C70` technical linework, Instrument Serif display / Manrope body / IBM Plex Mono for data only; sand hairlines and editorial compositions instead of card grids).

## Brand Commitments

- Domain & Identity: `hafizhfadh.id`, Hafizh Fadhlurrohman.
- Title: Infrastructure, Platform & Database Engineering Consultant (canonical everywhere, including structured data).
- Headline: "Engineering Beyond Infrastructure."
- Supporting: "Secure. Open. Adaptable."
- Location & Contacts: Depok, West Java, Indonesia | hafizhfadh@gmail.com | linkedin.com/in/hafizhfadh.
- Voice: defined in VOICE.md. Summary: first-person, evidence-led, calm, opinionated, commercially mature. No em dashes, no AI marketing vocabulary.

## Evidence on Hand

- Professional CV (`/Users/hfzhfdhlrrhmn/Downloads/Hafizh Fadhlurrohman, CV.pdf`):
  - **Infradigital Nusantara (Aug 2023 – Present, DevOps):** Reduced cloud spend by 70% (IDR 70M to IDR 21M); developed MonIT platform with Grafana; B-tree, BRIN, GIN index optimization; led ISO/IEC 27001:2022 technical implementation; SIEM deployment.
  - **Monster Data Asia (July 2023 – Present, Database Administration Consultant):** Reduced cloud spend by 33–40% (~IDR 300M to IDR 180–200M); administered 1.6 TB telco payment/billing database (~11 GB weekly data growth) maintaining query latency <= 500ms; query execution plan analysis, vacuum parameter and connection pool tuning.
  - **Infradigital Nusantara (Nov 2020 – July 2023, Mobile Developer):** Pelajar Flutter app (200,000+ installs, offline optimistic sync, ISO 27001 controls).
  - **Yayasan Al Sudais Indonesia (Jan 2019 – Nov 2020, Full-Stack Developer):** School administration, accounting, POS, and banking virtual account integrations.
  - **Education & Credentials:** B.S. in Information Systems (UBSI, in progress); Taruna Bhakti (2018); MTA Database Administration & MTA HTML5 Application Development.
- SvelteKit edge configuration in [wrangler.jsonc](file:///Users/hfzhfdhlrrhmn/Developer/personal/hafizhfadh.id/wrangler.jsonc) and [vite.config.ts](file:///Users/hfzhfdhlrrhmn/Developer/personal/hafizhfadh.id/vite.config.ts).
- Established tokens and design guidelines in [DESIGN.md](file:///Users/hfzhfdhlrrhmn/Developer/personal/hafizhfadh.id/DESIGN.md).
- Voice and copy governance in [VOICE.md](file:///Users/hfzhfdhlrrhmn/Developer/personal/hafizhfadh.id/VOICE.md).

## Product Principles

1. **Proof Precedes Positioning**: Every claim is grounded in verified, auditable numbers (costs, TBs, latency thresholds, installs).
2. **Open & Adaptable**: Technology choices are driven by business requirements, security posture, and TCO, adapting to existing client environments.
3. **Systems Transparency**: Editorial clarity and technical rigor replace marketing fluff and generic agency salesmanship.
4. **Consultative Respect**: Discovery and evaluation precede commercial terms, treating both parties' time with professional dignity.

## Accessibility & Inclusion

- WCAG 2.1 AA compliance across warm ivory and deep navy surfaces.
- Strict keyboard operability, visible focus indicators, and screen-reader friendly landmarks.
