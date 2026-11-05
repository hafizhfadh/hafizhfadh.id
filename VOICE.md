# VOICE.md: Brand Voice & Editorial Governance

> The authoritative reference for every user-facing word on hafizhfadh.id: page copy,
> navigation labels, buttons, form fields, validation messages, SEO metadata, and
> Open Graph text. No new user-facing copy is written without consulting this document.

**Relationship to the other governing documents:**

| Document | Governs |
| --- | --- |
| PRODUCT.md | What we build, for whom, and why |
| DESIGN.md | How the website looks, feels, and behaves |
| VOICE.md | How the brand communicates and sounds |
| Verified factual source (CV, PRODUCT.md "Evidence on Hand") | Professional claims and achievements |

When documents conflict: PRODUCT.md decides positioning, DESIGN.md decides visual and
interaction questions, VOICE.md decides language, and facts decide claims. Established
brand decisions are never changed silently; a change starts here and is then applied
consistently across the site.

---

## A. Brand personality

The voice belongs to one person: a senior engineer who has kept production systems
alive, cut real costs, and answered for the results. Eight calibrated traits:

1. **Bold, not arrogant.** Statements take positions ("Proof, not promises.") without
   claiming superiority over people. Confidence comes from evidence, never from
   diminishing the reader or the reader's team.
2. **Intelligent, not unnecessarily complicated.** Precision over vocabulary. A
   sentence is as technical as its content demands and no more. If a simpler word
   carries the same meaning, the simpler word wins.
3. **Warm, not overly casual.** The reader is a peer, not a "friend" and not a
   "visitor". No forced chumminess, no exclamation marks, no emoji. Warmth shows up
   as directness plus respect for the reader's time.
4. **Opinionated, not generic.** The copy takes stances: query plans before hardware,
   tested backups before backup policies, understanding before quotes. Where the
   industry hedges, this voice commits.
5. **Concise, not simplistic.** Short sentences carry the load; complexity is spent
   only where the subject requires it. Never pad, never round off a specific number
   to a vague adjective.
6. **Commercially mature, not salesy.** Pricing, scope, and risk are discussed the
   way experienced operators discuss them: openly about process, concretely about
   outcomes, never with pressure. The copy never begs for the contact.
7. **Technically credible, not intimidating.** Terms like BRIN indexes, vacuum
   tuning, and execution plans appear because they are the real work, always anchored
   to an outcome a business reader cares about.
8. **Human, not artificially polished.** Rhythm varies. Some paragraphs are one
   sentence. A dry aside is allowed ("a number nobody questioned until it was
   questioned"). Perfection that erases personality is a defect.

## B. Brand positioning and narrative

**Positioning:** Hafizh Fadhlurrohman. Independent Engineering Consultancy for
infrastructure, platforms, and databases.

**Central narrative: Engineering Beyond Infrastructure.**

The work is not "maintaining servers" or "implementing software". The work is
understanding what an organization actually needs, navigating its technical and
operational constraints, adapting technology to fit, and delivering engineering
outcomes that make sense for the business. Infrastructure is the medium; the
engineering judgment is the product.

**Core beliefs (guiding positions, never slogans to repeat):**

1. Technology should serve business requirements.
2. Open-source creates room for adaptation and ownership.
3. Security belongs in engineering decisions from the beginning.
4. Infrastructure expenditure must be justified.
5. Architecture must survive production conditions.
6. Engineering must account for the people operating the systems.

These beliefs are expressed through the *way* the copy argues (what it measures,
what it refuses, what it promises), not through repeated mission statements. A belief
appears as an explicit line at most once per page, and only where the page's argument
needs it.

## C. Writing principles

**First person.** The site speaks as "I" (Hafizh) throughout. "We" is reserved for
the client and Hafizh during an engagement ("we'll find the scope together") and for
the organization he serves inside an engagement narrative. Never the corporate "we"
for the consultancy itself. The consultancy is a person, not a firm.

**Sentence construction.** One idea per sentence when stating a claim. Vary length
deliberately: a 25-word explanation earns its 6-word follow-up. Prefer active
constructions with a named actor ("I cut the spend", "the query plan showed it").
Passive voice only when the actor is genuinely unknown or irrelevant.

**Paragraph length.** Two to four sentences. One job per paragraph. Single-sentence
paragraphs are allowed for emphasis, but never two in a row.

**Headline composition.** Sentence case, usually ending with a period, two to seven
words, built on concrete nouns and verbs ("Proof, not promises.", "How I decide.",
"An engineer, not an agency."). Headlines state the section's position; they do not
tease it. Avoid stacking more than one headline formula across a page (see Rhythm
rules in E).

**Technical terminology.** Use the precise term when it is the real work (execution
plans, vacuum parameters, BRIN indexes, optimistic synchronization). Anchor every
technical term to a consequence a decision-maker feels: latency, cost, risk, hours
returned. Never stack more than three proper nouns in a row without prose between.
Never explain a term a CTO already knows; never use a term a founder wouldn't follow
without anchoring it.

**Vocabulary.** See section D. The preferred lists are tendencies with reasons, not
padding to insert.

**Rhetorical questions.** At most one per page, and only when the reader is already
asking it ("Have a technical challenge worth solving?"). Questions are never followed
by "That's why..." answers.

**Editorial statements.** Every claim either names its evidence (number, artifact,
observable behavior) or stays honestly qualitative. "Faster" is not an outcome until
it is a number someone audited.

**CTA language.** Two distinct voices, matching DESIGN.md:
- *Conversion pills* (clay buttons) invite a conversation: "Start a professional
  conversation", "Request a discovery interview", "Discuss this engagement". One per
  view, always the same action (go to /contact or submit the form).
- *Exploration links* (underlined arrow links) name the destination's content:
  "How each number happened", "See what gets built", "All six, plus the toolkit".
  Banned as CTAs: "Get started", "Learn more", "Try now", "Explore", "Discover",
  "Read more". Labels must survive the question "where does this actually go?"

**Evidence and metrics.** Numbers come only from the verified record (section H).
Every metric carries its context inline: what, where, and in what units ("IDR 70
million to IDR 21 million monthly"). No metric floats without an organization and
role attribution where it matters. No rounding that inflates ("33–40%" stays a range;
it never becomes "over 40%").

**Professional claims.** The claim format is role + organization + outcome. Never
"expert", "world-class", "award-winning", "top". Team contributions stay team
contributions: "led technical implementation activities supporting recertification",
never "made the company ISO certified".

**Page-specific tone.** See section F.

## D. Vocabulary and language rules

### Preferred language

Words chosen because they carry the brand's engineering philosophy:

- **verified, documented, audited**: the site's entire credibility stance. Claims
  here are checkable, and these words promise that.
- **production**: where engineering is proven. "In production", "production
  environments", "proven in production".
- **stewardship**: the managed-services posture: ongoing responsibility, not
  ticket-tending.
- **constraints, trade-off, operational reality**: the vocabulary of mature
  engineering. Acknowledging constraints is a sign of competence, not weakness.
- **fits, makes sense, holds up**: the adaptability philosophy in plain words.
  Technology choices are justified by fit, not fashion.
- **honestly, plainly, directly**: the candor register. "I'll tell you honestly
  whether this fits" is a promise the engagement model keeps.
- **concrete nouns**: query plans, runbooks, handover, discovery interview, cloud
  bill, backlog. Specific objects beat abstract categories.
- **working verbs**: keep, hold, cut, tune, ship, write down, walk through, stay.
  Plain verbs a person would actually say.

Why: this vocabulary is checkable, operational, and humble in the right way. It
describes work that happened, decisions that were made, and evidence that exists.

### Avoided language

Each entry lists the reason, because a ban without a reason gets misapplied:

- **Em dash (—)**: the most recognizable AI tell in prose. Never in any user-facing
  text, including captions and dates (date ranges use an en dash: 2019–2020). Use a
  period, comma, colon, or parentheses instead.
- **"solutions", "offerings", "services portfolio"**: abstract categories that hide
  the actual work. Name the work instead.
- **"passionate", "driven", "dedicated"**: self-declared emotion. Character shows
  in decisions described, not adjectives claimed.
- **"seamless", "robust", "cutting-edge", "state-of-the-art", "next-generation",
  "innovative", "world-class", "best-in-class", "enterprise-grade"**: unverifiable
  quality claims. If the quality is real, measure it; if it isn't, don't say it.
- **"leverage", "unlock", "empower", "elevate", "enable"**: inflated verbs that
  make ordinary work sound grandiose. "Help", "use", and "let" are honest.
- **"journey" (metaphorical), "landscape", "space", "realm"**: decorative
  abstraction. The reader works with databases and clouds, not realms.
- **"simply", "just", "easily"**: minimizers that talk down to the reader whose
  problem has resisted "simple" fixes.
- **"we're excited to", "thrilled"**: manufactured enthusiasm. Calm competence is
  the register.
- **Exclamation marks**: the register has none. Excitement is carried by content.
- **"utilize", "in order to", "at this point in time", "prior to"**: corporate
  padding for "use", "to", "now", "before".
- **"not just X, it's Y" constructions, forced rule-of-three lists, "trusted by"
  claims without names**: structural AI tells. Lists carry the number of items the
  content actually has. Trust is shown with attributions or not at all.
- **"holistic", "synergy", "paradigm", "best practices" (as a noun pile)**: words
  that substitute for a position. State the position instead.

Why: every phrase above either claims a quality no one can check, inflates plain
work, or mimics the cadence of machine-written marketing. Readers who run production
systems notice.

## E. Editorial personality

How opinions appear in the copy. Each principle below is a *lens* for writing and
reviewing pages, not a slogan to place:

1. **Open-source is a strategic choice, not a shortcut.** When tools are named
   (PostgreSQL, Linux, Grafana), the copy frames them as chosen for operational
   maturity and total cost, and says plainly that proprietary systems that serve the
   client stay.
2. **Security is considered throughout the engineering lifecycle.** Security copy
   describes controls designed into architecture (least-privilege access, SIEM
   monitoring, ISO/IEC 27001:2022 alignment), never "security added at the end", and
   never fear-selling.
3. **Infrastructure spending needs operational justification.** Cost copy always
   connects spend to usage and value, and treats a smaller bill as an engineering
   outcome, not a shopping result.
4. **Production reveals whether architecture decisions actually work.** The copy
   privileges evidence from running systems over predictions, and frames assessment
   as measurement ("execution plans, latency percentiles, audited balance sheets").
5. **Replacing technology is not always the right answer.** The copy prefers
   adapting what exists ("the highest-value engineering improves the architecture
   already in flight") and names greenfield rewrites as the expensive, risky path
   they usually are.
6. **Good engineering accounts for the people operating the systems.** Handovers,
   documentation, runbooks, and knowledge transfer appear as first-class outcomes,
   because systems are operated by teams, not by consultants.

**Rhythm rules (anti-template):**

- Vary section openings: not every section is a heading + lead + list.
- Not every list needs three items; not every section needs a list.
- At most one blockquote-level pull statement per page.
- Case studies, service pages, and the about page each use a different narrative
  shape. Never let two pages share a sentence unless it is the intentional brand
  line ("Engineering Beyond Infrastructure", "Secure. Open. Adaptable.").

## F. Page-specific tone

| Page | Tone | Notes |
| --- | --- | --- |
| HOME | Bold, memorable, concise, welcoming | Establishes identity and curiosity in the first viewport. Not a CV. Short claims, real numbers, one clear invitation. |
| SERVICES | Persuasive, practical, commercially aware | Speaks to someone with a problem and a budget cycle. Challenges read like the reader's own words; scenarios show the engagement in motion; outcomes stay honest about what changes. |
| EXPERIENCE | Factual, confident, evidence-led | CV-adjacent but narrated. Every claim keeps its organizational context. Nothing is inflated into sole ownership; ongoing roles may use present tense for duties and past tense for completed results. |
| EXPERTISE | Precise, technically sophisticated, direct | Written for engineers who will check the terminology. Technology names appear with the judgment attached ("chosen per problem, never per fashion"). No technology dumping: every listed tool earns its place through a described use. |
| ABOUT | Personal, reflective, authentic | First person, past-tense storytelling with the lessons attached. Specific and era-bound ("students don't all have new phones"). Humility is allowed; vagueness is not. |
| CONTACT | Warm, professional, uncomplicated | Reduces friction and fear. States exactly what happens after submission and what never happens (sales sequences). No pricing pressure in either direction. |

## G. Copywriting examples

**Hero subline (homepage).**

- Before: "I help organizations build, secure, and evolve technology platforms
  through thoughtful engineering, open-source solutions, and reliable infrastructure."
  (Generic; could open any agency site. Triple-list rhythm.)
- After: "Independent engineering consultancy for infrastructure, platforms, and
  databases. I adapt open-source engineering to your environment, and I stay until
  the numbers prove it works." (Identity, method, and a falsifiable promise.)

**Section headline (homepage).**

- Before: "The work so far." on the homepage *and* as the /experience H1. (Same
  words, two pages, zero added meaning.)
- After: homepage asks "Where the numbers come from." and lets /experience keep
  "The work so far." (Each page now introduces its own argument.)

**CTA label.**

- Before: "Explore my work" (banned generic; says nothing about the destination).
- After: "What I offer" or a destination-specific label like "See what gets built".

**Em dash repair.**

- Before: "It works — most days. But configuration is folklore, backups are
  untested, and the person who understood it left last year."
- After: "It works, most days. But configuration is folklore, backups are untested,
  and the person who understood it left last year."

**Claim with evidence.**

- Before: "Dramatically reduced infrastructure costs for enterprise clients."
- After: "Monthly cloud spend cut from IDR 70 million to IDR 21 million, and kept
  there, because the monitoring to hold the line shipped with the savings."

**Team contribution kept honest.**

- Before: "Led the company's ISO/IEC 27001:2022 certification."
- After: "Led technical implementation activities supporting the organization's
  ISO/IEC 27001:2022 recertification."

## H. Content integrity

Non-negotiable. A claim that cannot be verified from the factual record is removed,
not softened:

- No fabricated accomplishments, projects, clients, or dates.
- No unsupported claims; qualitative statements must be defensible without a number.
- No inflated responsibilities; team contributions are never rewritten as sole
  ownership.
- No misrepresented metrics; every number keeps its baseline, units, and scope.
- No fake testimonials, fake client endorsements, fake quotes, or invented
  certifications. There is no testimonials section, and none should exist until real,
  attributable endorsements exist.
- No misleading experience framing (e.g., describing a current engagement as
  completed, or a contribution as leadership of the whole program).

**The verified factual record (as of this document's writing):**

| Fact | Context |
| --- | --- |
| 70% reduction in monthly cloud infrastructure spend (IDR 70M to IDR 21M) | Infradigital Nusantara, DevOps role |
| 33–40% reduction in monthly cloud spend (~IDR 300M to IDR 180–200M) | Monster Data Asia, Database Administration Consultant |
| 1.6 TB telecommunications payment/billing database, ~11 GB weekly growth, query latency held at or under 500 ms | Monster Data Asia |
| 200,000+ installs of the Pelajar mobile application (Google Play, App Store) | Infradigital Nusantara, Mobile Application Developer |
| B-tree, BRIN, and GIN indexing strategy on large datasets | Both infrastructure roles |
| Led technical implementation activities supporting ISO/IEC 27001:2022 recertification | Infradigital Nusantara |
| Built MonIT, the centralized monitoring platform (Grafana + custom collection) | Infradigital Nusantara |
| Contributed to SIEM platform implementation | Infradigital Nusantara |
| Education: B.S. Information Systems (in progress, UBSI); Taruna Bhakti (2018) | MTA Database Administration, MTA HTML5 Application Development |

New facts (new employers, new metrics, new certifications) enter the site only by
first updating this record in PRODUCT.md, then the copy.

## I. Maintenance rules

1. Every future page, section, service, case study, component, metadata description,
   and user-facing interaction must comply with this document.
2. No new user-facing copy is written without consulting VOICE.md first.
3. The verified factual record in section H gates all professional claims. Add facts
   there before adding them to copy.
4. When the brand voice evolves, update VOICE.md first, then apply the change across
   every route in the same change, so the site never mixes two voices.
5. Editorial review checklist before shipping any new copy:
   - Read aloud. Does it sound like a person with production scar tissue?
   - Is every claim specific and every number attributed?
   - Are there em dashes, banned CTAs, or avoided-language hits?
   - Does the page repeat a sentence another page already uses?
   - Would Hafizh say these words in a professional conversation?
6. When requirements conflict, resolve in this order: factual record, VOICE.md,
   PRODUCT.md, DESIGN.md, then escalate to the owner if the conflict remains.
