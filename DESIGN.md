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
---

<!-- impeccable:design-schema 1 -->

# Design System: hafizhfadh.id — Warm Technical Editorial

> Extracted from the implemented system: `src/app.css` `@theme` tokens, `src/lib/components/ui/Button.svelte`, `src/lib/components/layout/*`, `src/lib/components/sections/*`, and `src/lib/actions/reveal.ts`, under the committed direction contract in `.impeccable/surfaces/src-routes-page-svelte.md`. Tokens are normative; prose explains application. The previous dark-obsidian system this replaces is the explicit anti-reference.

## Overview

**Creative North Star: "The Engineer's Annual Report"**

A personal letter from a senior engineer, set like a fine engineering annual report — warmth carrying authority. The whole site is warm ivory paper: type-led compositions ruled with sand hairlines, deep navy sections anchoring the proof and the invitation, and one family of fired-earth accents that lets the page speak (terracotta) and act (clay). Density is low and confidence is high; every claim is set in a measured serif and every number in a working mono.

The system deliberately refuses two references. The first is the old world — a dark obsidian telemetry dashboard with emerald accents — now the anti-reference: no dark grounds outside the three navy anchors, no neon, no glow, no classification tags, no dashboard chrome. The second is the generic cream-and-serif consultancy template: this system earns its editorial character through a complete structure — navy anchor sections, sand hairlines instead of cards, sage technical linework, true bylines and pull-quotes, italic-mono figure captions, and terracotta so rare it always means something.

Each of the nine sections is its own composition inside one system: an asymmetric hero with an authored systems schematic, an editorial letter with a pull-quote, alternating service chapters with diagrams, a navy ledger of verified numbers, a ruled timeline, a glyph field guide, a mono toolkit index, a sticky-split process, and a navy invitation holding a cream form panel.

**Key Characteristics:**

- Warm ivory canvas (#f4efe5) with cream panels (#faf8f2); structure drawn as 1px sand hairlines (#e5d8c4), never boxed cards
- Three full-bleed deep-navy anchors (#172b40) per page: impact ledger, contact invitation, footer
- Terracotta (#c85a3a) for display emphasis; clay (#b04a2c) for everything interactive
- Editorial serif display (Instrument Serif) with italic terracotta emphasis; Manrope body; IBM Plex Mono strictly for data, dates, and technical annotations
- Sage (#687c70) authored SVG line-art with italic mono figure captions ("fig. 01 — …")
- One authored motion moment — the hero schematic draws in; scroll reveals are gentle, JS-applied, and reduced-motion safe
- Pill buttons; soft 8–16px corners only where content is contained; focus rings in clay (clay-light on navy)

## Colors

Fired-earth accents on warm paper, disciplined by deep navy anchors and muted sage linework — every color is low-gloss, warm, and print-like.

### Primary

- **Terracotta** (#c85a3a): The display accent and the closest thing to a brand color. The hero's final word "Infrastructure.", the wordmark's full stop, the pulse nodes in diagrams. It never appears as a UI surface, border, or button.
- **Clay** (#b04a2c): The interactive accent. Primary buttons, text links, the timeline's current-role dot, focus rings, input carets, the "→" outcome markers. If a user can click it, it is clay.
- **Clay Dark** (#9a3e23): Hover and pressed depth for clay — button hover ground, link hover color.
- **Clay Light** (#e09b77): Clay's voice on dark grounds — ledger figures, focus rings and link hovers on navy, the footer's highlighted links.

### Secondary

- **Navy** (#172b40): The anchor ground. Full-bleed sections that carry weight: the impact ledger and the contact invitation. Also the selected radio-chip fill — its only component-scale appearance.
- **Navy Deep** (#0f1f30): The footer's deeper night ground.
- **Fog** (#c3cfd9): Body copy and secondary text on navy — a cool blue-gray mist that keeps dark sections readable without stark white.

### Tertiary

- **Sage** (#687c70): The technical linework color. Diagram strokes, checkmarks, timeline dots, principle glyphs — the drawing ink of the schematic world.
- **Sage Deep** (#55645b): The linework's caption ink — lowercase mono micro-labels, diagram inner strokes, role text.

### Neutral

- **Ivory** (#f4efe5): The page canvas, input fills, scrollbar track. The default answer to "what is this section's ground?"
- **Cream** (#faf8f2): Raised editorial panels — the navbar, the cream sections (note, principles, process), the mobile menu, diagram node fills, and the contact form panel.
- **Sand** (#e5d8c4): The hairline color. 1px rules that do the structural work everywhere; also the scrollbar thumb and text-selection ground.
- **Sand Deep** (#d6c5ab): Emphasized hairlines and small strokes — blockquote rules, outline/chip borders, byline separators, step markers, hero contour lines.
- **Charcoal** (#282c2b): Primary ink on light grounds — headings, body emphasis, labels.
- **Ink Muted** (#5c5a52): Secondary text on light grounds — running copy, captions, mono annotations.

### Named Rules

**The Terracotta Speaks, Clay Acts Rule.** Terracotta is display-only emphasis — type, nodes, punctuation. Every interactive state is clay or clay-dark. Terracotta is never a surface you can click; clay is never a headline color.

**The Three Navy Surfaces Rule.** Deep navy appears exactly three times per page as full-bleed anchors — the impact ledger, the contact invitation, the footer. Never as cards, panels, or sidebars on ivory.

**The Warm Ink Rule.** Ink is warm charcoal on warm paper — never pure black, never cool gray. On navy, text is fog or ivory, and muted levels are made with opacity (ivory/60, ivory/15), not by inventing new grays.

## Typography

**Display Font:** Instrument Serif (400 + italic only; fallbacks ui-serif, Georgia, 'Times New Roman', serif)
**Body Font:** Manrope (fallbacks -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif)
**Label/Mono Font:** IBM Plex Mono (fallbacks ui-monospace, 'SF Mono', Menlo, monospace)

**Character:** A print-like trio. Instrument Serif supplies the annual-report voice — high-contrast and elegant at display sizes, quietly decorative in italics. Manrope is the calm, geometric working sans that keeps the letter readable. IBM Plex Mono plays the typewriter, appearing only where an engineer would annotate: numbers, dates, machines, captions.

### Hierarchy

- **Display** (400, clamp(3rem, 7.4vw, 6rem), lh 0.98, tracking −0.02em): the hero headline only — two lines, final word in italic terracotta.
- **Headline** (400, clamp(2.1rem, 4vw, 3.25rem), lh 1.04, tracking −0.015em): section H2s; the contact invitation runs larger at clamp(2.4rem, 5vw, 4rem).
- **Title** (400, clamp(1.8rem, 3vw, 2.5rem), lh 1.06, tracking −0.01em): service chapter H3s; smaller serif titles at 1.4–1.7rem for organizations, categories, and principle names.
- **Emphasis** (serif italic): pull-quotes at clamp(1.35rem, 2.4vw, 1.75rem) in sand-ruled blockquotes; ledger figures at clamp(3.4rem, 6.5vw, 5.75rem) in clay-light with tracking −0.02em; italic terracotta highlights at 1.3rem in the timeline.
- **Body** (Manrope 400): lead 1.125rem/1.625; standard 1.0625rem; compact 0.9375rem; small 0.875rem. Measures stay between 36ch and 62ch (observed max-w-[36rem] to max-w-[62ch]).
- **Label** (IBM Plex Mono 400, 0.75rem, lowercase, tracking +0.025em): micro-labels ("what that covers", "explore", "write to me") in sage-deep on ivory, ivory/60 on navy.
- **Data** (IBM Plex Mono 400, 0.6875–0.8125rem): dates, tags, "·"-joined stack lists, attributions, the mono form field; diagram annotations at 10.5–12px with letter-spaced station labels (+0.1em).

### Named Rules

**The One Weight Rule.** Instrument Serif ships one weight — 400 — plus italics. Hierarchy is size, tracking, and italics; never bold the serif and never fake a heavier display weight.

**The Mono Is a Measurement Rule.** IBM Plex Mono appears only as data, dates, metrics, stack lists, attributions, lowercase micro-labels, and figure captions. Never for headlines, never for running prose, never uppercase.

## Layout

A single narrative scroll: Hero (ivory) → A note on how I work (cream) → Services (ivory) → Proven impact ledger (navy) → Experience (ivory) → Principles (cream) → Toolkit (ivory) → Engagement process (cream) → Contact invitation (navy), closed by the navy-deep footer. Sections alternate grounds and are separated by hairlines, not gaps alone.

- **Container:** max-w-6xl (1152px) with px-5 (20px) / sm:px-8 (32px) safe padding.
- **Grid:** 12 columns at lg with recurring asymmetric splits — hero 7/5, note 4/7 (starting column 6), service chapters 7/5 with alternating reading order, process 5/6, contact 5/7. Everything collapses to one column below lg.
- **Section rhythm:** py-20 (80px) / sm:py-28 (112px). Cream sections are framed with top and bottom sand hairlines (border-y sand/70); ivory sections rule their interiors instead — divide-y chapter lists and border-t index rows.
- **Rows, not cards:** the ledger, the timeline, the toolkit index, and the principle field guide are full-width hairline-ruled rows on the 12-col baseline grid.
- **The one sticky composition:** the process section pins its left argument (lg:sticky, top-28) beside a sand-ruled ordered list.
- **The timeline:** entries hang off a 1px sand rule at sm:left-[11rem]; the mono period column sits right-aligned on desktop, above the entry on mobile.
- **Responsive:** below lg, splits stack in source order; the mobile nav replaces links with an editorial index; form fields go single-column below sm.

**Motion rhythm:**

- **Scroll reveal** (`use:reveal`): opacity 0 + 16px rise → visible over 0.7s cubic-bezier(0.22, 1, 0.36, 1), optional stagger (60–200ms). The hidden state is applied only when JavaScript runs — content is fully visible without it. IntersectionObserver at threshold 0.12 with a −48px bottom margin; one-shot (disconnects after first reveal).
- **Hero schematic:** the sage spine and connectors draw in (stroke-dashoffset over 1.4s, cubic-bezier(0.4, 0, 0.2, 1)); stations fade in over 0.9s, staggered 0.45–1.7s; the dashed terracotta ring spins 28s linear ×3. This is the page's single authored load animation.
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

- **Hairlines everywhere:** 1px sand rules divide chapters (divide-y), open ledger rows (border-t ivory/15 on navy), frame cream sections (border-y), and rule blockquotes (border-l sanddeep). No structural border is ever thicker than 1px — 2px appears only as focus rings and underline accents.
- **Pills for anything a thumb touches:** buttons and radio chips are fully rounded (9999px).
- **Soft corners only where content is contained:** inputs, textareas, the error banner, and icon buttons at 8px; the contact form panel at 16px; the focus outline at 2px.
- **Diagram language:** 1–1.5px sage strokes with round caps and joins, terracotta pulse nodes (r ≈ 3), solid navy circles as system nodes, sand ground lines and dashed 2-5 guide strokes; station labels in letter-spaced mono caps.
- **Editorial chrome:** scrollbars are an ivory track with a rounded sand thumb (10px wide, 2px ivory border, sanddeep on hover); text selection is sand ground with charcoal text; carets are clay.

### Named Rules

**The Hairline Structure Rule.** If it separates, it's a 1px sand rule. If it contains, it may round (8px fields, 16px panels). If it's pressed, it's a pill. Nothing else gets a border.

## Components

### Buttons

The page's only raised, colored UI element — a confident warm pill carrying the single most important action per view.

- **Shape:** full pill (9999px), inline-flex with an 8px icon gap, weight 600, tracking −0.01em, 200ms transition on all properties.
- **Primary:** clay ground, ivory text, warm ambient shadow. Sizes: sm 16px/8px padding + 14px text, md 20px/10px + 15px text, lg 28px/14px + 16px text.
- **Hover / Focus:** hover deepens to clay-dark with a slightly larger shadow; active compresses to scale(0.98); focus-visible is a 2px clay ring with 2px offset on ivory (clay-light on navy); disabled is 50% opacity with no pointer events.
- **Outline:** transparent ground, charcoal text, 1px sanddeep border; hover to cream ground with charcoal/40 border; active scale(0.98). Used for secondary actions ("Copy the note", "Report a broken link").
- **Ghost:** exists in the component API (transparent, ink-muted → charcoal on hover) but is currently unused on the page — prefer an underlined text link.

### Text Links & Arrow Links

- **Underlined:** semibold charcoal with a 2px sanddeep underline at 8px offset; hover moves the rule to clay ("Explore my work").
- **Arrow link:** clay semibold text with a trailing icon; hover to clay-dark while the icon nudges 4px ("Start the conversation").
- **Nav links:** 15px medium ink-muted → charcoal, with a 1px clay underline that grows from the left over 300ms.
- **On navy:** fog → ivory for lists; the email is a large serif clay-light link with a 2px ivory/25 underline (hover: clay-light rule); footer links hover clay-light.

### Chips (Service Radio Pills)

- **Style:** pill labels with a 1px sanddeep border, transparent ground, ink-muted 14px text, 10px/16px padding; hidden native radios keep keyboard semantics.
- **Selected:** navy ground, ivory text, navy border — the only place navy appears at component scale.
- **Focus:** focus-within ring, 2px clay with 2px offset on cream.

### Inputs / Fields

Handwritten-note fields inside the cream panel — quiet until focused.

- **Style:** 1px sanddeep border, ivory ground, 8px radius, 16px/12px padding, 16px text (prevents iOS zoom), placeholders ink-muted/90, caret clay.
- **Labels:** 14px semibold charcoal with a clay asterisk marking required fields; group legends are lowercase mono 12px in sage-deep. The "current stack" field sets IBM Plex Mono.
- **Focus:** the border shifts to clay — a color change, no glow, no shadow.
- **Error:** 8px-radius banner, terracotta/30 border on terracotta/10 ground, clay-dark text with an alert icon.
- **Container:** the form lives on a cream panel, 16px radius, 28–36px padding, floating with the navy-tinted shadow (see Elevation & Depth).

### Navigation

- Sticky header, 64px tall, cream at 90% with backdrop blur, closed by a sand/80 hairline, z-50.
- **Wordmark:** serif 20px charcoal ending in a terracotta full stop — the period scales to 125% on hover, the wordmark's only flourish.
- **Desktop:** 15px links plus a primary sm pill CTA ("Start a conversation"). **Mobile:** a sand-ground menu button opens an editorial index — serif 24px entries with mono 01–06 numerals on sand-hairline rows, sliding open in 250ms, full-width primary button at the bottom.

### The Ledger Row (signature)

- Full-bleed navy; each row opens with an ivory/15 hairline and settles on a 12-col baseline grid: the serif figure (clamp(3.4rem, 6.5vw, 5.75rem), clay-light, leading none) at 4 columns; the semibold ivory claim plus fog context at 5; fog details plus mono attribution (ivory/60, "Organization · Role") at 3.
- A sage check glyph opens the integrity note that closes the ledger — the system's way of certifying its own numbers.

### Authored Figures (signature)

- Every diagram is hand-authored SVG line art — sage strokes (1–1.5px, round caps), terracotta pulse nodes, solid navy nodes, sand grounds and dashed guides. Never icon packs, never stock illustrations.
- Each carries a print-style caption in italic mono 10.5px, lowercase: "fig. 01 — the platforms I keep running".
- The hero schematic (480×600) is the flagship: a sage spine with four stations — edge & routing, core database, observability, security & compliance — annotated in letter-spaced mono, with the core database drawn as a navy drum inside a spinning dashed terracotta ring.

### Global Chrome

- Scrollbars: ivory track, sand rounded thumb with a 2px ivory border, sanddeep on hover.
- Text selection: sand ground, charcoal text.
- Caret: clay in every input and textarea.

## Do's and Don'ts

### Do:

- **Do** draw structure with 1px sand hairlines (#e5d8c4) — divide-y chapters, border-t rows, border-y section frames — instead of reaching for a card.
- **Do** keep IBM Plex Mono strictly for data: dates, metrics, "·"-joined stack lists, attributions, lowercase micro-labels, and figure captions.
- **Do** set emphasis in serif italic, and spend terracotta (#c85a3a) only where the page speaks loudest — the hero's final word, the wordmark's period, diagram pulse nodes.
- **Do** make every interactive element clay (#b04a2c) with a 2px clay focus ring (clay-light #e09b77 on navy).
- **Do** author diagrams as sage line art (1–1.5px strokes, round caps) with italic mono captions ("fig. NN — …").
- **Do** hold body copy to a 36–62ch measure and let whitespace — 80/112px section padding — do the separating.
- **Do** respect reduced motion: reveals never hide content, animations clamp to ~0ms, and the page must be fully readable with JavaScript off.

### Don't:

- **Don't** box content: no card grids, no repetitive card rows, no nested cards — compose with hairline-ruled rows and asymmetric 12-col splits.
- **Don't** resurrect the old dark dashboard: no obsidian grounds, emerald telemetry accents, neon glows, gradient text, or `SERVICE // 01`-style classification tags.
- **Don't** set headlines or prose in mono, and never uppercase the mono labels — they stay lowercase.
- **Don't** add eyebrow kickers above headlines.
- **Don't** use navy as a component fill (the selected radio chip is the one exception) or shrink it into boxes and sidebars — navy is full-bleed only, and only three times per page.
- **Don't** introduce a second authored load animation; the hero draw-in is the page's one motion moment (diagram pulse dots are the only loop).
- **Don't** bold Instrument Serif or fake a heavier display weight.
