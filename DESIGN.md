---
name: hafizhfadh.id — Warm Technical Editorial
description: A personal letter from a senior engineer set like a fine engineering annual report — warm ivory paper, deep navy anchors, terracotta display accents, sage technical linework.
colors:
  ivory: "#f4efe5"
  cream: "#faf8f2"
  sand: "#e5d8c4"
  sanddeep: "#d6c5ab"
  charcoal: "#282c2b"
  inkmuted: "#5c5a52"
  navy: "#172b40"
  navydeep: "#0f1f30"
  terracotta: "#c85a3a"
  clay: "#b04a2c"
  claydark: "#9a3e23"
  claylight: "#e09b77"
  sage: "#687c70"
  sagedeep: "#55645b"
  fog: "#c3cfd9"
typography:
  display:
    fontFamily: "'Instrument Serif', ui-serif, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(3rem, 7.4vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "'Instrument Serif', ui-serif, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(2.1rem, 4vw, 3.25rem)"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-0.015em"
  title:
    fontFamily: "'Instrument Serif', ui-serif, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(1.8rem, 3vw, 2.5rem)"
    fontWeight: 400
    lineHeight: 1.06
    letterSpacing: "-0.01em"
  body:
    fontFamily: "'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "'IBM Plex Mono', ui-monospace, 'SF Mono', Menlo, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    letterSpacing: "0.025em"
  data:
    fontFamily: "'IBM Plex Mono', ui-monospace, 'SF Mono', Menlo, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: "2px"
  md: "8px"
  lg: "16px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  row: "56px"
  section: "80px"
  section-lg: "112px"
components:
  button-primary:
    backgroundColor: "{colors.clay}"
    textColor: "{colors.ivory}"
    typography: "600 1rem 'Manrope', sans-serif"
    rounded: "{rounded.full}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.claydark}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.charcoal}"
    typography: "600 0.9375rem 'Manrope', sans-serif"
    rounded: "{rounded.full}"
    padding: "10px 20px"
  link-exploration:
    backgroundColor: "transparent"
    textColor: "{colors.charcoal}"
    typography: "600 0.9375rem 'Manrope', sans-serif"
  input-text:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.charcoal}"
    typography: "400 1rem 'Manrope', sans-serif"
    rounded: "{rounded.md}"
    padding: "12px 16px"
  chip-radio-selected:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.ivory}"
    typography: "400 0.875rem 'Manrope', sans-serif"
    rounded: "{rounded.full}"
    padding: "10px 16px"
  chip-radio-unselected:
    backgroundColor: "transparent"
    textColor: "{colors.inkmuted}"
    typography: "400 0.875rem 'Manrope', sans-serif"
    rounded: "{rounded.full}"
    padding: "10px 16px"
  page-header:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.charcoal}"
    typography: "400 clamp(2.4rem, 5vw, 4rem) 'Instrument Serif', serif"
    padding: "56px 32px"
  breadcrumbs:
    backgroundColor: "transparent"
    textColor: "{colors.inkmuted}"
    typography: "400 0.75rem 'IBM Plex Mono', monospace"
  cta-band:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.ivory}"
    typography: "400 clamp(1.9rem, 3.6vw, 2.9rem) 'Instrument Serif', serif"
    padding: "80px 32px"
---

<!-- impeccable:design-schema 1 -->

# Design System: hafizhfadh.id — Warm Technical Editorial

> Extracted from the implemented system: `src/app.css` `@theme` tokens, `src/lib/components/ui/Button.svelte`, `src/lib/components/layout/*`, `src/lib/components/shared/*`, `src/lib/components/sections/*`, `src/lib/data/navigation.ts`, and `src/lib/actions/reveal.ts`, across the nine prerendered routes in `src/routes/*`. Tokens are normative; prose explains application. The previous dark-obsidian system this replaces is the explicit anti-reference.

## Overview

**Creative North Star: "The Engineer's Annual Report"**

A personal letter from a senior engineer, set like a fine engineering annual report — warmth carrying authority. The whole site is warm ivory paper: type-led compositions ruled with sand hairlines, deep navy sections anchoring the proof and the invitation, and one family of fired-earth accents that lets the page speak (terracotta) and act (clay). Density is low and confidence is high; every claim is set in a measured serif and every number in a working mono.

The system deliberately refuses two references. The first is the old world — a dark obsidian telemetry dashboard with emerald accents — now the anti-reference: no dark grounds outside the navy anchors, no neon, no glow, no classification tags, no dashboard chrome. The second is the generic cream-and-serif consultancy template: this system earns its editorial character through a complete structure — navy anchor sections, sand hairlines instead of cards, sage technical linework, true bylines and pull-quotes, italic-mono figure captions, and terracotta so rare it always means something.

The world now spans nine prerendered routes — home, a services index with three service pages, experience, expertise, about, and contact — each a static brochure page composed from one shared kit. Every content page follows the same spine: a cream page-header band (mono breadcrumbs, serif headline, measured lead), sections alternating ivory and cream grounds, and a navy CTA band that closes the page as its single conversion point — always exactly one clay pill. Between sections, exploration stays quiet: underlined arrow text links move readers between pages, never competing pills. The homepage remains the long-form letter — the asymmetric hero with its authored systems schematic, the standing note, service summaries, the navy impact ledger, selected experience, philosophy in brief, the process strip, and the contact invitation — while the full timeline, the complete principles field guide, and the mono toolkit index each hold their own route.

**Key Characteristics:**

- Warm ivory canvas (#f4efe5) with cream panels (#faf8f2); structure drawn as 1px sand hairlines (#e5d8c4), never boxed cards
- Nine prerendered brochure routes sharing one anatomy: cream page-header band (breadcrumbs + serif headline + lead), ivory/cream section alternation, navy CTA conversion band; route-based nav active states in clay
- Navy (#172b40) appears only as full-bleed anchors — one conversion band per page (the CTA band, or the contact invitation on /contact), the homepage's impact ledger, and the navy-deep footer
- Terracotta (#c85a3a) for display emphasis; clay (#b04a2c) for everything interactive
- Editorial serif display (Instrument Serif) with italic terracotta emphasis; Manrope body; IBM Plex Mono strictly for data, dates, and technical annotations
- Sage (#687c70) authored SVG line-art with italic mono figure captions ("fig. 01 — …")
- One authored motion moment — the homepage hero schematic draws in; scroll reveals are gentle, JS-applied, and reduced-motion safe
- Pill buttons; soft 8–16px corners only where content is contained; focus rings in clay (clay-light on navy)

## Colors

Fired-earth accents on warm paper, disciplined by deep navy anchors and muted sage linework — every color is low-gloss, warm, and print-like.

### Primary

- **Terracotta** (#c85a3a): The display accent and the closest thing to a brand color. The hero's final word "Infrastructure.", the wordmark's full stop, the pulse nodes and accent points in diagrams and glyphs. It never appears as a UI surface, border, or button.
- **Clay** (#b04a2c): The interactive accent. Primary buttons, text links, nav active underlines, the timeline's current-role dot, focus rings, input carets, the "→" outcome markers. If a user can click it, it is clay.
- **Clay Dark** (#9a3e23): Hover and pressed depth for clay — button hover ground, link hover color.
- **Clay Light** (#e09b77): Clay's voice on dark grounds — ledger figures, focus rings and link hovers on navy, the footer's highlighted links.

### Secondary

- **Navy** (#172b40): The anchor ground. Full-bleed sections that carry weight and conversion: the homepage's impact ledger, the contact invitation, and the per-page CTA band. Also the selected radio-chip fill — its only component-scale appearance.
- **Navy Deep** (#0f1f30): The footer's deeper night ground.
- **Fog** (#c3cfd9): Body copy and secondary text on navy — a cool blue-gray mist that keeps dark sections readable without stark white.

### Tertiary

- **Sage** (#687c70): The technical linework color. Diagram strokes, checkmarks, timeline dots, principle glyphs — the drawing ink of the schematic world.
- **Sage Deep** (#55645b): The linework's caption ink — lowercase mono micro-labels, diagram inner strokes, role text.

### Neutral

- **Ivory** (#f4efe5): The page canvas, input fills, scrollbar track. The default answer to "what is this section's ground?"
- **Cream** (#faf8f2): Raised editorial panels — the navbar, the page-header band, the cream sections, the mobile menu, diagram node fills, and the contact form panel.
- **Sand** (#e5d8c4): The hairline color. 1px rules that do the structural work everywhere; also the scrollbar thumb and text-selection ground.
- **Sand Deep** (#d6c5ab): Emphasized hairlines and small strokes — blockquote rules, outline/chip borders, breadcrumb separators, byline separators, step markers, hero contour lines.
- **Charcoal** (#282c2b): Primary ink on light grounds — headings, body emphasis, labels, the active breadcrumb's current page.
- **Ink Muted** (#5c5a52): Secondary text on light grounds — running copy, captions, mono annotations, breadcrumb links.

### Named Rules

**The Terracotta Speaks, Clay Acts Rule.** Terracotta is display-only emphasis — type, nodes, punctuation. Every interactive state is clay or clay-dark. Terracotta is never a surface you can click; clay is never a headline color.

**The Full-Bleed Navy Rule.** Deep navy appears only as full-bleed, page-level anchors — never as cards, panels, or sidebars on ivory. Every content page carries exactly one navy conversion anchor (the CTA band; the contact invitation on /contact) plus the navy-deep footer; the homepage adds the impact ledger as its mid-page anchor.

**The Warm Ink Rule.** Ink is warm charcoal on warm paper — never pure black, never cool gray. On navy, text is fog or ivory, and muted levels are made with opacity (ivory/60, ivory/15), not by inventing new grays.

## Typography

**Display Font:** Instrument Serif (400 + italic only; fallbacks ui-serif, Georgia, 'Times New Roman', serif)
**Body Font:** Manrope (fallbacks -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif)
**Label/Mono Font:** IBM Plex Mono (fallbacks ui-monospace, 'SF Mono', Menlo, monospace)

**Character:** A print-like trio. Instrument Serif supplies the annual-report voice — high-contrast and elegant at display sizes, quietly decorative in italics. Manrope is the calm, geometric working sans that keeps the letter readable. IBM Plex Mono plays the typewriter, appearing only where an engineer would annotate: numbers, dates, machines, captions.

### Hierarchy

- **Display** (400, clamp(3rem, 7.4vw, 6rem), lh 0.98, tracking −0.02em): the homepage hero headline only — two lines, final word in italic terracotta.
- **Headline** (400, clamp(2.1rem, 4vw, 3.25rem), lh 1.04, tracking −0.015em): section H2s; the CTA band title runs slightly smaller at clamp(1.9rem, 3.6vw, 2.9rem); page-header H1s and the contact invitation run larger at clamp(2.4rem, 5vw, 4rem).
- **Title** (400, clamp(1.8rem, 3vw, 2.5rem), lh 1.06, tracking −0.01em): service chapter H3s; smaller serif titles at 1.4–1.7rem for organizations, categories, and principle names.
- **Emphasis** (serif italic): pull-quotes at clamp(1.35rem, 2.4vw, 1.75rem) in sand-ruled blockquotes; ledger figures at clamp(3.4rem, 6.5vw, 5.75rem) in clay-light with tracking −0.02em; italic terracotta highlights at 1.3rem in the timeline.
- **Body** (Manrope 400): lead 1.125rem/1.625; standard 1.0625rem; compact 0.9375rem; small 0.875rem. Measures stay between 36ch and 62ch (observed max-w-[36rem] to max-w-[62ch]).
- **Label** (IBM Plex Mono 400, 0.75rem, lowercase, tracking +0.025em): micro-labels ("what that covers", "explore", "write to me") in sage-deep on ivory, ivory/60 on navy; breadcrumb trails in ink-muted with the current page in charcoal.
- **Data** (IBM Plex Mono 400, 0.6875–0.8125rem): dates, tags, "·"-joined stack lists, attributions, the mono form field; diagram annotations at 10.5–12px with letter-spaced station labels (+0.1em).

### Named Rules

**The One Weight Rule.** Instrument Serif ships one weight — 400 — plus italics. Hierarchy is size, tracking, and italics; never bold the serif and never fake a heavier display weight.

**The Mono Is a Measurement Rule.** IBM Plex Mono appears only as data, dates, metrics, stack lists, attributions, lowercase micro-labels, breadcrumbs, and figure captions. Never for headlines, never for running prose, never uppercase.

## Layout

A nine-route static brochure — `/`, `/services`, `/services/forward-deployed-engineering`, `/services/managed-platforms`, `/services/custom-applications`, `/experience`, `/expertise`, `/about`, `/contact` — all prerendered (`export const prerender = true` in `src/routes/+layout.ts`), plus an authored 404 ("This page wandered off.", with a sage dashed path leading to a terracotta arrow). Every content page shares one anatomy:

Sticky cream navbar → **PageHeader** (cream band: mono breadcrumbs, serif H1, lead) → content sections alternating ivory and cream grounds → **CtaBand** (navy conversion anchor) → navy-deep footer. `/contact` swaps the CTA band for the full navy contact invitation holding the cream form panel; the homepage replaces the PageHeader with its hero and inserts the navy impact ledger mid-scroll.

- **Homepage narrative:** Hero (ivory) → A note on how I work (cream) → Service summaries (ivory) → Proven impact ledger (navy) → Selected experience (cream) → Philosophy in brief (ivory) → Process strip (cream) → Contact invitation (navy).
- **Container:** max-w-6xl (1152px) with px-5 (20px) / sm:px-8 (32px) safe padding.
- **Grid:** 12 columns at lg with recurring asymmetric splits — hero 7/5, the note 4/7 (starting column 6), service chapters and detail positioning 7/5 with alternating reading order, contact 5/7, stance grids at 4/8. Five-column step strips carry the engagement process (home and /contact). Everything collapses to one column below lg.
- **Section rhythm:** sub-pages run py-16 (64px) / sm:py-20–24 (80–96px); the homepage breathes larger at py-20/sm:py-28. Cream sections are framed with top and bottom sand hairlines (border-y sand/70); ivory sections rule their interiors instead — divide-y chapter lists and border-t index rows. Just above each page's CTA band, a border-t sand exploration row pairs a quiet prompt with a clay arrow link.
- **Rows, not cards:** the ledger, the timeline, the toolkit index, and the principle field guide are full-width hairline-ruled rows on the 12-col baseline grid.
- **The timeline** (on /experience): entries hang off a 1px sand rule at sm:left-[11rem]; the mono period column sits right-aligned on desktop, above the entry on mobile.
- **Responsive:** below lg, splits stack in source order; the mobile nav replaces links with an editorial index (Home plus the four routes); form fields go single-column below sm.

**Motion rhythm:**

- **Scroll reveal** (`use:reveal`): opacity 0 + 16px rise → visible over 0.7s cubic-bezier(0.22, 1, 0.36, 1), optional stagger (60–200ms). The hidden state is applied only when JavaScript runs — content is fully visible without it. IntersectionObserver at threshold 0.12 with a −48px bottom margin; one-shot (disconnects after first reveal). CTA bands and page sections reveal as whole units.
- **Hero schematic:** the sage spine and connectors draw in (stroke-dashoffset over 1.4s, cubic-bezier(0.4, 0, 0.2, 1)); stations fade in over 0.9s, staggered 0.45–1.7s; the dashed terracotta ring spins 28s linear ×3. This is the homepage's single authored load animation.
- **Micro-interactions:** 200ms state transitions on buttons/chips/inputs; 300ms nav-underline growth; 250ms mobile-menu slide; one ambient loop — the 2.6s terracotta pulse dot in diagrams.
- **Reduced motion:** prefers-reduced-motion clamps every animation and transition to ~0.01ms, disables smooth scrolling, and the reveal action never hides content.

## Elevation & Depth

Flat by default; depth is tonal, not cast. Three grounds stack — ivory canvas → cream panels → navy anchors — and 1px hairlines do the structural work that shadows would do elsewhere. Shadow exists in exactly two places:

### Shadow Vocabulary

- **Primary-button ambient** (`0 1px 2px rgba(40,44,43,0.10), 0 10px 28px -14px rgba(176,74,44,0.55)`; hover deepens to `0 1px 2px rgba(40,44,43,0.10), 0 12px 32px -14px rgba(154,62,35,0.6)`): a warm clay-tinted lift under the one primary action.
- **Form-panel float** (`0 2px 6px rgba(15,31,48,0.25), 0 24px 60px -24px rgba(15,31,48,0.55)`): the cream contact panel hovering over navy.

### Named Rules

**The Two Shadows Rule.** Only the primary button and the contact form panel cast shadows. Everything else is flat: if a surface needs separating, use a sand hairline or change the ground — never add a shadow.

## Shapes

Structure is drawn, not boxed.

- **Hairlines everywhere:** 1px sand rules divide chapters (divide-y), open ledger rows (border-t ivory/15 on navy), frame cream sections and the page-header band (border-b sand/70 on the header), and rule blockquotes (border-l sanddeep). Breadcrumb trails separate with sanddeep "/" glyphs rather than rules. No structural border is ever thicker than 1px — 2px appears only as focus rings and underline accents.
- **Pills for anything a thumb touches:** buttons and radio chips are fully rounded (9999px).
- **Soft corners only where content is contained:** inputs, textareas, the error banner, and icon buttons at 8px; the contact form panel at 16px; the focus outline at 2px.
- **Diagram language:** 1–1.5px sage strokes with round caps and joins, terracotta pulse nodes (r ≈ 3), solid navy circles as system nodes, cream node fills, sand ground lines and dashed 2-5 guide strokes; captions and station labels in italic letter-spaced mono.
- **Editorial chrome:** scrollbars are an ivory track with a rounded sand thumb (10px wide, 2px ivory border, sanddeep on hover); text selection is sand ground with charcoal text; carets are clay.

### Named Rules

**The Hairline Structure Rule.** If it separates, it's a 1px sand rule. If it contains, it may round (8px fields, 16px panels). If it's pressed, it's a pill. Nothing else gets a border.

## Components

### Buttons

The page's only raised, colored UI element — a confident warm pill carrying the single most important action per view. Clay pills are conversion CTAs, reserved for the commercial ask: the nav CTA, the CTA band, and the form submit — never for wayfinding between pages.

- **Shape:** full pill (9999px), inline-flex with an 8px icon gap, weight 600, tracking −0.01em, 200ms transition on all properties.
- **Primary:** clay ground, ivory text, warm ambient shadow. Sizes: sm 16px/8px padding + 14px text, md 20px/10px + 15px text, lg 28px/14px + 16px text — the CTA band takes lg.
- **Hover / Focus:** hover deepens to clay-dark with a slightly larger shadow; active compresses to scale(0.98); focus-visible is a 2px clay ring with 2px offset on ivory (clay-light on navy); disabled is 50% opacity with no pointer events.
- **Outline:** transparent ground, charcoal text, 1px sanddeep border; hover to cream ground with charcoal/40 border; active scale(0.98). Used for secondary actions ("Copy the note", "Report a broken link").
- **Ghost:** exists in the component API (transparent, ink-muted → charcoal on hover) but is currently unused — prefer an underlined text link.

### Text Links & Arrow Links

Two CTA voices, strictly separated: exploration CTAs move readers between pages; conversion CTAs (above) sell the conversation.

- **Underlined exploration link:** charcoal semibold with a 2px sanddeep underline at 8px offset and a trailing clay arrow that nudges 4px on hover; the rule itself shifts to clay ("Explore this service").
- **Clay arrow link:** clay semibold text with a trailing arrow; hover to clay-dark while the icon nudges 4px ("Start the conversation", "Ask me directly", "See them in production"). The CTA band's sibling rows and section closers use this voice.
- **Inline prose links:** clay semibold with a sanddeep underline (offset 4px) that deepens to clay on hover ("case studies", "the experience page").
- **On navy:** fog → ivory for lists; the email is a large serif clay-light link with a 2px ivory/25 underline (hover: clay-light rule); footer links hover clay-light.

### Page Header Band

The opening move of every content route (all but the homepage, whose hero takes its place) — a full-bleed cream band under the navbar, closed by a sand/70 bottom hairline.

- **Contents:** an optional mono breadcrumb trail (mb-9), the serif H1 at clamp(2.4rem, 5vw, 4rem) lh 1.03 tracking −0.015em (max-w-3xl), and an optional lead in 18px ink-muted (max-w-2xl).
- **Rhythm:** pt-10 (40px) / sm:pt-14 (56px) above, pb-14 (56px) / sm:pb-16 (64px) below — a compressed prelude before the page's first ivory section.

### Breadcrumbs

- **Trail:** IBM Plex Mono 12px, items joined by sanddeep "/" glyphs; links are ink-muted and hover to clay; the current page is charcoal with `aria-current="page"` and renders as plain text, never a link.
- **Behavior:** wraps with gap on small screens; lives inside the PageHeader band via `crumbs` (e.g. Home / Services / Forward Deployed Engineering).

### CTA Band

The per-page conversion point — a full-bleed navy anchor that closes every content page (except /contact, where the contact invitation serves that role).

- **Composition:** serif title at clamp(1.9rem, 3.6vw, 2.9rem) in ivory beside one fog 17px line (max-w-2xl), and a single primary lg clay pill on the right at lg (default label "Start a professional conversation"; per-page labels like "Request a discovery interview" or "Discuss this engagement").
- **Discipline:** exactly one band and one pill per page; the whole unit reveals together (`use:reveal`); py-16 (64px) / sm:py-20 (80px).

### Chips (Service Radio Pills)

- **Style:** pill labels with a 1px sanddeep border, transparent ground, ink-muted 14px text, 10px/16px padding; hidden native radios keep keyboard semantics.
- **Selected:** navy ground, ivory text, navy border — the only place navy appears at component scale.
- **Focus:** focus-within ring, 2px clay with 2px offset on cream.

### Inputs / Fields

Handwritten-note fields inside the cream panel — quiet until focused.

- **Style:** 1px sanddeep border, ivory ground, 8px radius, 16px/12px padding, 16px text (prevents iOS zoom), placeholders ink-muted/90, caret clay.
- **Fields:** name, work email, and organization (required, clay-asterisk labels); professional role (optional, placeholder "e.g. CTO, Head of Platform"); the radio-chip group under a lowercase mono legend; the challenge textarea; and the "current stack" field set in IBM Plex Mono. Group legends are lowercase mono 12px in sage-deep.
- **Focus:** the border shifts to clay — a color change, no glow, no shadow.
- **Validation:** the form opts out of native bubbles (`novalidate`) and raises its own errors: a required-fields banner and an email-format check (`name@domain.tld` pattern) — "That email address doesn't look complete — mind checking it?" Both share the same banner treatment: 8px radius, terracotta/30 border on terracotta/10 ground, clay-dark text with an alert icon.
- **Container:** the form lives on a cream panel, 16px radius, 28–36px padding, floating with the navy-tinted shadow (see Elevation & Depth).

### Navigation

- Sticky header, 64px tall, cream at 90% with backdrop blur, closed by a sand/80 hairline, z-50.
- **Wordmark:** serif 20px charcoal ending in a terracotta full stop, linking to `/` — the period scales to 125% on hover, the wordmark's only flourish.
- **Desktop:** four route links (Services, Experience, Expertise, About) from `src/lib/data/navigation.ts` plus a primary sm pill CTA ("Let's Talk" → /contact).
- **Active states:** the current route's link is `aria-current="page"`, semibold charcoal, with its 1px clay underline held at full width; inactive links are medium ink-muted with the underline growing from the left on hover (300ms). Matching is prefix-based — /services marks the three service pages active — while `/` matches exactly.
- **Mobile:** a sand-ground menu button (`aria-expanded`, `aria-controls`) opens an editorial index — Home plus the four routes, serif 24px entries with mono 01–05 numerals on sand-hairline rows, sliding open in 250ms, full-width primary button at the bottom; the active entry is clay. Escape closes the menu and returns focus to the menu button; choosing an entry closes it.
- **Footer:** the explore column links the same routes (fog → ivory hover) with "Let's talk" in clay-light; the write column keeps email, LinkedIn, and "Start a conversation" with trailing arrows.

### The Ledger Row (signature)

- Full-bleed navy on the homepage; each row opens with an ivory/15 hairline and settles on a 12-col baseline grid: the serif figure (clamp(3.4rem, 6.5vw, 5.75rem), clay-light, leading none) at 4 columns; the semibold ivory claim plus fog context at 5; fog details plus mono attribution (ivory/60, "Organization · Role") at 3.
- A sage check glyph opens the integrity note that closes the ledger — the system's way of certifying its own numbers.

### Authored Figures (signature)

- Every diagram is hand-authored SVG line art — sage strokes (1–1.5px, round caps), terracotta pulse nodes, solid navy nodes, sand grounds and dashed guides. Never icon packs, never stock illustrations.
- Service diagrams are one shared component in three authored kinds — **bridge** (two teams joined by a working span into a navy drum), **rhythm** (a calm uptime wave with checkpoint stations and one terracotta pulse), and **flow** (a tangled path resolving into one straight clay arrow) — each captioned inside the SVG in italic mono 10.5px, lowercase: "fig. 02 — embedded, not adjacent".
- The homepage hero schematic (480×600) is the flagship: a sage spine with four stations — edge & routing, core database, observability, security & compliance — annotated in letter-spaced mono, with the core database drawn as a navy drum inside a spinning dashed terracotta ring.

### Principle Glyphs (signature)

- Six 32×32 geometric glyphs (rendered at 36px) lead the principle rows — branching paths, nested arcs, converging curves, a bridge with a keystone, a dial, a river with one clay channel — each drawn in sage 1.5px strokes with round caps, one terracotta accent node, often one navy node.
- Purely mnemonic (`aria-hidden`); they appear in the homepage's philosophy-in-brief and the full field guide on /expertise.

### Global Chrome

- Scrollbars: ivory track, sand rounded thumb with a 2px ivory border, sanddeep on hover.
- Text selection: sand ground, charcoal text.
- Caret: clay in every input and textarea.

## Do's and Don'ts

### Do:

- **Do** draw structure with 1px sand hairlines (#e5d8c4) — divide-y chapters, border-t rows, border-y section frames — instead of reaching for a card.
- **Do** give every content page the same spine — Seo meta with canonical + og.png, cream PageHeader, ivory/cream alternation, navy CtaBand close — and let only the homepage break it with its hero and ledger.
- **Do** route navigation through `src/lib/data/navigation.ts` so navbar, mobile menu, and footer share one source, with `aria-current="page"` marking the active route.
- **Do** keep IBM Plex Mono strictly for data: dates, metrics, "·"-joined stack lists, attributions, lowercase micro-labels, breadcrumbs, and figure captions.
- **Do** set emphasis in serif italic, and spend terracotta (#c85a3a) only where the page speaks loudest — the hero's final word, the wordmark's period, diagram pulse nodes.
- **Do** make every interactive element clay (#b04a2c) with a 2px clay focus ring (clay-light #e09b77 on navy) — pills for conversion, underlined arrow links for exploration.
- **Do** author diagrams as sage line art (1–1.5px strokes, round caps) with italic mono captions ("fig. NN — …").
- **Do** hold body copy to a 36–62ch measure, let whitespace — 64/80px on sub-pages, 80/112px on home — do the separating, and respect reduced motion: reveals never hide content, animations clamp to ~0ms, and pages must be fully readable with JavaScript off.

### Don't:

- **Don't** box content: no card grids, no repetitive card rows, no nested cards — compose with hairline-ruled rows and asymmetric 12-col splits.
- **Don't** resurrect the old dark dashboard: no obsidian grounds, emerald telemetry accents, neon glows, gradient text, or `SERVICE // 01`-style classification tags.
- **Don't** set headlines or prose in mono, and never uppercase the mono labels — they stay lowercase.
- **Don't** add eyebrow kickers above headlines.
- **Don't** use navy as a component fill (the selected radio chip is the one exception) or shrink it into boxes and sidebars — navy is full-bleed only: one conversion anchor per page, the homepage ledger, and the footer.
- **Don't** spend clay pills on wayfinding — moving between pages is an exploration arrow link; the pill is for the conversation.
- **Don't** ship a route without its Seo block — every page must resolve to one canonical URL at https://hafizhfadh.id with the shared og.png.
- **Don't** introduce a second authored load animation; the hero draw-in is the homepage's one motion moment (diagram pulse dots are the only loop). Never bold Instrument Serif or fake a heavier display weight.
