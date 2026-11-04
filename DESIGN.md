---
name: EngineeringPartner
colors:
  primary: "#10B981"
  secondary: "#0B0D13"
  surface: "#111520"
  surfaceElevated: "#171D2C"
  borderSubtle: "#1E2536"
  borderStrong: "#2D374D"
  text: "#F8FAFC"
  textBody: "#E2E8F0"
  textMuted: "#94A3B8"
  textSubtle: "#64748B"
  accentCyan: "#06B6D4"
  accentAmber: "#F59E0B"
  accentRose: "#F43F5E"
typography:
  fontSans: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif"
  fontMono: "Space Mono, JetBrains Mono, Fira Code, monospace"
  display:
    fontSize: "3.5rem"
    lineHeight: "1.1"
  h1:
    fontSize: "2.5rem"
    lineHeight: "1.2"
  h2:
    fontSize: "1.75rem"
    lineHeight: "1.25"
  body:
    fontSize: "1rem"
    lineHeight: "1.65"
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
  full: "9999px"
---

<!-- impeccable:design-schema 1 -->

# Design System & Visual Specification

**Project:** Personal Engineering Profile & Professional Services Website  
**Domain:** `hafizhfadh.id`  
**Identity:** Hafizh Fadhlurrohman — Independent Infrastructure & Platform Engineering Partner  
**Core Philosophy:** "Engineering Beyond Infrastructure"  
**Supporting Statement:** "Secure. Open. Adaptable."  
**Version:** 1.0.0  
**Status:** Living Design Single Source of Truth  

---

## 1. Brand Positioning & Personality

### Positioning
Independent Infrastructure & Platform Engineering Partner. Collaborating directly with engineering leadership, founders, and technical teams to design, optimize, secure, and operate business-critical technology platforms.

### Target Audience
- Chief Technology Officers (CTOs), VPs of Engineering, and Heads of Infrastructure.
- Fast-scaling tech companies facing cloud cost escalation, database latency bottlenecks, or compliance milestones.
- Organizations seeking pragmatic open-source adoption without lock-in or unnecessary operational burden.

### Brand Personality Attributes
- **Authoritative & Methodical:** Communicates through hard operational evidence, benchmarked metrics, and rigorous systems reasoning.
- **Consultative & Selective:** Believes serious engineering deserves serious discovery before quoting prices or committing architectures.
- **Vendor-Independent & Pragmatic:** Technology choices are driven by business requirements, TCO, security, and operational maturity—never dogmatic stack evangelism.
- **Understated & Premium:** Quiet confidence. No hyperbole, no flashy marketing buzzwords, no superficial animations.

---

## 2. Design Philosophy

1. **Proof Precedes Positioning:** Metrics like `70% cloud spend reduction`, `1.6 TB database with 11 GB weekly growth`, `< 500ms query targets`, and `200k+ application installs` anchor every value claim.
2. **Editorial Systems Aesthetic:** Blends high-density systems engineering transparency with generous editorial whitespace, structured technical data grids, and clean typographic rhythm.
3. **Restraint Over Decoration:** Every visual element serves orientation, clarity, or comprehension. Zero decorative gradients, zero floating icons, zero synthetic dashboard mockups.
4. **Adaptive Consultation Model:** Promotes collaborative evaluation: *"Every engineering engagement starts with understanding the problem, not quoting a price."*

---

## 3. Visual Direction & References

- **Atmosphere:** Deep obsidian and graphite canvas reminiscent of high-reliability terminal monitors, Grafana control centers, and premium Swiss technical publications.
- **Textures:** Crisp 1px structural grid lines, subtle monospace telemetry headers, discrete status pills, and understated border illumination on interactive focus.
- **Anti-Patterns Banned:**
  - Generic SaaS neon purple/pink radial glows.
  - Floating 3D geometric shapes or generic AI illustrations.
  - Oversized vanity logos without context.
  - Opaque pricing package grids or "Add to Cart" freelance widgets.

---

## 4. Color Palette & Tokens

### Canvas & Backgrounds
| Token Name | HEX / Value | Usage |
|---|---|---|
| `--bg-base` | `#0B0D13` | Root page background (Deep Obsidian) |
| `--bg-surface` | `#111520` | Primary card surfaces & container backgrounds |
| `--bg-elevated` | `#171D2C` | Hover states, popovers, active selection layers |
| `--bg-subtle` | `rgba(255, 255, 255, 0.02)` | Table striping, secondary input backgrounds |
| `--bg-accent-tint` | `rgba(16, 185, 129, 0.08)` | Telemetry badges, active filters, verified callouts |

### Borders & Dividers
| Token Name | HEX / Value | Usage |
|---|---|---|
| `--border-subtle` | `#1E2536` | Default card borders, section dividing rules |
| `--border-strong` | `#2D374D` | Active card borders, focused inputs, table headers |
| `--border-accent` | `#10B981` | Focused interactive states, key verified callouts |

### Typography & Text
| Token Name | HEX / Value | Usage |
|---|---|---|
| `--text-primary` | `#F8FAFC` | Headlines, primary card headers, prominent figures |
| `--text-body` | `#E2E8F0` | Body copy, technical descriptions, list items |
| `--text-muted` | `#94A3B8` | Secondary labels, descriptions, supporting copy |
| `--text-subtle` | `#64748B` | Timestamps, monospace labels, breadcrumbs |

### Semantic & Accents
| Token Name | HEX / Value | Usage |
|---|---|---|
| `--accent-emerald` | `#10B981` | Core brand action accent, verified status, primary CTA |
| `--accent-emerald-hover`| `#059669` | Primary button hover state |
| `--accent-cyan` | `#06B6D4` | Infrastructure & observability metrics callout |
| `--accent-amber` | `#F59E0B` | In-progress milestones, cautionary recommendations |
| `--accent-rose` | `#F43F5E` | System error states, strict constraints |

---

## 5. Typography System & Hierarchy

### Font Families
- **Primary Body & Display:** `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif` — Selected for pristine legibility, balanced geometry, and comprehensive Unicode support.
- **Technical & Monospace:** `"Space Mono", "JetBrains Mono", "Fira Code", monospace` — Applied to telemetry values, verified metrics, code snippets, engineering stamps, and timeline dates.

### Typographic Scale
| Level | Font Size | Line Height | Tracking | Weight | Typical Element |
|---|---|---|---|---|---|
| **Display 1** | `3.5rem` (56px) / `2.5rem` (40px mobile) | `1.1` | `-0.03em` | `700` | Hero Main Title |
| **Heading 1** | `2.5rem` (40px) / `2rem` (32px mobile) | `1.2` | `-0.025em` | `600` | Major Section Headers |
| **Heading 2** | `1.75rem` (28px) / `1.5rem` (24px mobile)| `1.25` | `-0.02em` | `600` | Pillar / Service Headings |
| **Heading 3** | `1.25rem` (20px) | `1.35` | `-0.01em` | `600` | Experience Role / Card Title |
| **Lead Body** | `1.125rem` (18px) | `1.6` | `-0.005em` | `400` | Hero Subhead, Section Intros |
| **Body Regular** | `1rem` (16px) | `1.65` | `0` | `400` | Paragraphs, Service Details |
| **Body Small** | `0.875rem` (14px) | `1.5` | `0` | `400` | Secondary copy, form instructions |
| **Technical Mono** | `0.8125rem` (13px) | `1.4` | `+0.05em` | `500` | Metrics, badges, dates, code |

---

## 6. Spacing Scale & Rhythm

Built on a unified **4px baseline scale**:
- `4px` (`space-1`), `8px` (`space-2`), `12px` (`space-3`), `16px` (`space-4`)
- `24px` (`space-6`), `32px` (`space-8`), `48px` (`space-12`), `64px` (`space-16`)
- `80px` (`space-20`), `96px` (`space-24`), `128px` (`space-32`)

### Section Vertical Padding
- **Desktop (>= 1024px):** `6rem` to `8rem` (96px – 128px) top and bottom.
- **Mobile (< 768px):** `4rem` to `5rem` (64px – 80px) top and bottom.

---

## 7. Responsive Breakpoints & Container Widths

- **Breakpoints:**
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px
  - `2xl`: 1440px
- **Max Container Width:** `1200px` (`max-w-7xl` with `px-4 sm:px-6 lg:px-8` safe padding).
- **Narrow Container Width:** `800px` (`max-w-3xl`) for focused philosophical prose and discovery explanations.
- **Grid Layout:** 12-column responsive CSS grid with `1.5rem` (24px) gutters on mobile and `2rem` (32px) gutters on desktop.

---

## 8. Border, Shadow & Radius Conventions

- **Radii:**
  - Pills / Status Badges: `rounded-full` (9999px)
  - Cards & Content Containers: `rounded-2xl` (16px)
  - Interactive Buttons & Inputs: `rounded-lg` (8px)
  - Code & Diagnostic Panels: `rounded-xl` (12px)
- **Borders:**
  - Default structural border: `1px solid #1E2536`
  - Active / Hover card border: `1px solid #2D374D`
  - Focused interactive border: `1px solid #10B981`
- **Shadows:**
  - Subtle card shadow: `0 4px 20px -2px rgba(0, 0, 0, 0.5)`
  - Elevated modal / popover: `0 20px 40px -4px rgba(0, 0, 0, 0.7)`

---

## 9. Navigation Specifications

- **Type:** Sticky header with subtle frosted background blur (`backdrop-blur-md bg-[#0B0D13]/85`).
- **Height:** `64px` (desktop), `56px` (mobile).
- **Brand Identity:** `Hafizh Fadhlurrohman` in crisp monospace with discrete `_` cursor marker and `ID` partner indicator.
- **Links:**
  - Services (`#services`)
  - Proven Impact (`#impact`)
  - Experience (`#experience`)
  - Philosophy (`#philosophy`)
  - Ecosystem (`#ecosystem`)
  - Process (`#process`)
- **Primary Action:** Button `"Start Conversation"` linked to `#contact`.
- **Mobile Navigation:** Clean full-height overlay with slide-down transition, accessible keyboard tab-trap, and immediate link routing.

---

## 10. Button & Link Variants

1. **Primary Button:**
   - Background: `var(--accent-emerald)` (`#10B981`)
   - Text: `#0B0D13` (bold, contrast ratio > 11:1)
   - Hover: `var(--accent-emerald-hover)` (`#059669`) with `translate-y(-1px)`
   - Active: `scale-98`
   - Focus: `ring-2 ring-emerald-400 ring-offset-2 ring-offset-[#0B0D13]`
2. **Secondary / Outline Button:**
   - Background: `transparent`
   - Border: `1px solid var(--border-strong)` (`#2D374D`)
   - Text: `var(--text-primary)` (`#F8FAFC`)
   - Hover: `background: var(--bg-elevated)` (`#171D2C`), border: `#475569`
3. **Text / Monospace Link:**
   - Text: `var(--text-muted)`
   - Hover: `var(--accent-emerald)` with subtle underline animation.

---

## 11. Cards & Content Surfaces

- **Surface Baseline:** Built with solid slate-graphite (`#111520`) with 1px border (`#1E2536`).
- **Card Header:** Includes monospace classification tag (e.g., `SERVICE // 01`, `METRIC // VERIFIED`, `ROLE // 2023-PRESENT`).
- **Interactive States:** Subtle transition of border color to `#2D374D` on hover, without loud lift or glow animations.

---

## 12. Section Specifications

### Hero Section
- Direct positioning statement: "Engineering Beyond Infrastructure."
- Subtitle: "I help organizations build, optimize, and operate secure technology platforms through open-source engineering and practical software solutions."
- Telemetry summary card highlighting verified operational boundaries (latency, scale, cost).

### Services Section
- Three distinct service pillars (Forward Deployed Engineering, Managed Platforms & Infrastructure, Custom Applications & Integration).
- Clear breakdown of capabilities, business outcomes, engagement examples, and relevant technologies.

### Proven Impact Section
- Visual prominence for 4 verified career metrics:
  - `70%` Cloud infrastructure cost reduction (Infradigital Nusantara)
  - `33–40%` Telecommunications cloud spend reduction (Monster Data Asia)
  - `1.6 TB` Database scale administered under 500ms query targets (Monster Data Asia)
  - `200,000+` Mobile application installs (Pelajar Flutter App)

### Professional Experience Section
- Editorial timeline prioritizing business impact, technical contributions, and system scale across verified roles.
- Inclusion of academic foundation and Microsoft Technology Associate certifications.

### Technical Philosophy Section
- 6 durable engineering principles detailing pragmatic real-world trade-offs.

### Technology Ecosystem Section
- Categorized technical matrix (Database Engineering, Cloud/Infra, DevOps/Observability, Security/Compliance, Software Engineering).

### Engagement Process Section
- 5-step collaborative discovery and tailored proposal flow.
- Core tenet: *"Every engineering engagement starts with understanding the problem, not quoting a price."*

### Contact & Professional Interview Section
- Structured intake form with required context fields (Full Name, Work Email, Organization, Challenge Description) and optional environment stack.
- Clear validation feedback and edge direct dispatch configuration note.

### Footer Section
- Complete coordinates, LinkedIn link, verified email, copyright, and edge architecture indicators.

---

## 13. Iconography Guidelines

- Standardized on `lucide-svelte` icons rendered at `16px`, `20px`, or `24px`.
- Dedicated inline vector components for brand marks (e.g., LinkedIn).
- Strict stroke width of `2px` with rounded caps and joins.

---

## 14. Motion & Animation Principles

- **Subtle & Purposeful:** Motion is reserved for status pulses, hover feedback, and disclosure transitions.
- **Duration:** Micro-interactions run at `150ms` – `200ms` with `ease-out`. Drawer transitions run at `250ms`.
- **Reduced Motion:** Fully respects `@media (prefers-reduced-motion: reduce)` by disabling transitions and pulses.

---

## 15. States (Hover, Focus, Active, Disabled)

- **Hover:** Subtle luminance shift on border (`#1E2536` -> `#2D374D`) and text (`#94A3B8` -> `#F8FAFC`).
- **Focus:** Unambiguous 2px focus ring (`#10B981`) with 2px offset.
- **Active:** Slight tactile scaling (`scale-[0.98]`).
- **Disabled:** `opacity-50 pointer-events-none`.

---

## 16. Accessibility (WCAG 2.1 AA)

- All text meets or exceeds `4.5:1` contrast ratio against dark backgrounds.
- High-contrast interactive elements achieve `> 10:1` contrast (e.g. emerald primary buttons on `#0B0D13`).
- Full keyboard operability for navigation, modals, and forms.
- Semantic landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).

---

## 17. Light/Dark Theme Strategy

- The website is intentionally locked to an authentic **Dark Obsidian Systems Theme** reflecting high-reliability control planes and database terminals.
- Clean system contrast preserves readability in bright ambient lighting through high-contrast foreground whites (`#F8FAFC`, `#E2E8F0`).

---

## 18. Mobile-Specific Interaction Behavior

- Sticky header reduces height to `56px` on mobile.
- Clean slide-down navigation sheet with large touch targets ($\ge 44 \times 44 \text{ px}$).
- Form inputs feature 16px font sizes to prevent iOS Safari auto-zoom.
- Horizontal metric and telemetry cards adapt gracefully to single-column vertical flow.

---

## 19. Component Inventory & Naming Conventions

All components are located in `src/lib/components/`:
- `layout/Navbar.svelte`
- `layout/Footer.svelte`
- `ui/Badge.svelte`
- `ui/Button.svelte`
- `ui/LinkedInIcon.svelte`
- `sections/Hero.svelte`
- `sections/ValueProp.svelte`
- `sections/Services.svelte`
- `sections/ProvenImpact.svelte`
- `sections/Experience.svelte`
- `sections/Philosophy.svelte`
- `sections/TechEcosystem.svelte`
- `sections/EngagementProcess.svelte`
- `sections/ContactSection.svelte`
