<script lang="ts">
	import Seo from '#lib/components/shared/Seo.svelte';
	import PageHeader from '#lib/components/shared/PageHeader.svelte';
	import CtaBand from '#lib/components/shared/CtaBand.svelte';
	import EducationCerts from '#lib/components/sections/EducationCerts.svelte';
	import { profile } from '#lib/data/profile';
	import { reveal } from '#lib/actions/reveal';
	import { ArrowRight, ArrowUpRight } from 'lucide-svelte';
	import LinkedInIcon from '#lib/components/ui/LinkedInIcon.svelte';

	const journey = [
		{
			years: '2019 — 2020',
			chapter: 'It started in schools',
			body: 'My first full-stack role was at a foundation running Islamic boarding schools across Indonesia. I built their administration systems, accounting, a point-of-sale for the dining halls, and integrations with banking virtual accounts — software where every bug meant real paperwork for real people. It taught me that software is organization design: the system only works if it fits how the institution actually operates.'
		},
		{
			years: '2020 — 2023',
			chapter: 'Software in people\u2019s pockets',
			body: 'At Infradigital I engineered and maintained Pelajar, a Flutter app that grew past 200,000 installs across two app stores. Students don\u2019t all have new phones or stable networks, so performance became a feature and offline synchronization became a promise. Security controls aligned with ISO/IEC 27001:2022 were part of daily work, not a checklist before release.'
		},
		{
			years: '2023 — now',
			chapter: 'Down into the infrastructure',
			body: 'Two parallel roles changed how I see systems. As DevOps at Infradigital, I cut monthly cloud spend by 70%, built the MonIT monitoring platform, and led ISO/IEC 27001:2022 technical implementation. As a database administration consultant at Monster Data Asia, I keep a 1.6 TB telecommunications billing database answering in under half a second. The recurring lesson: most "hardware problems" are query problems wearing a disguise.'
		}
	];

	const workingStyle = [
		{
			title: 'Questions before answers',
			body: 'Every engagement starts with a discovery interview. I\u2019d rather understand your environment for a day than recommend confidently for a week and be wrong for a year.'
		},
		{
			title: 'Measurement before opinions',
			body: 'Execution plans, latency percentiles, audited cost figures. When the data disagrees with my instinct, the data wins — that\u2019s how the 70% reduction happened: the numbers kept us honest.'
		},
		{
			title: 'Documentation before handover',
			body: 'Everything I touch gets written down: configurations, decisions, runbooks. Your team should depend on the documentation, not on me. Tribal knowledge is a liability I refuse to leave behind.'
		},
		{
			title: 'Direct access, always',
			body: 'You talk to the engineer doing the work — no account managers, no translation layers. If something is hard, you hear it from me early, with options instead of surprises.'
		}
	];
</script>

<Seo
	title="About — Hafizh Fadhlurrohman"
	description="The person behind the consultancy: an infrastructure and database engineer from Depok, Indonesia — the journey from school software to a 1.6 TB telecommunications database, and how I work."
	path="/about"
/>

<PageHeader
	title="An engineer, not an agency."
	lead="I'm {profile.name} — an infrastructure and database engineer from {profile.location}. This is the journey, and how I work."
/>

<!-- The journey -->
<section class="bg-ivory py-16 sm:py-20">
	<div class="mx-auto max-w-6xl px-5 sm:px-8">
		<div class="max-w-2xl" use:reveal>
			<h2 class="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.05] tracking-[-0.015em] text-charcoal">
				How I got here.
			</h2>
		</div>
		<div class="mt-12 divide-y divide-sand border-t border-sand">
			{#each journey as chapter, i}
				<div class="grid gap-3 py-10 sm:grid-cols-[10rem_1fr] sm:gap-10" use:reveal={{ delay: i * 60 }}>
					<p class="pt-1 font-mono text-xs text-inkmuted">{chapter.years}</p>
					<div class="max-w-[68ch]">
						<h3 class="font-serif text-2xl leading-snug text-charcoal">{chapter.chapter}</h3>
						<p class="mt-3 text-[17px] leading-relaxed text-inkmuted">{chapter.body}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Working style -->
<section class="border-y border-sand/70 bg-cream py-16 sm:py-24">
	<div class="mx-auto max-w-6xl px-5 sm:px-8">
		<div class="flex flex-wrap items-end justify-between gap-6" use:reveal>
			<div class="max-w-2xl">
				<h2 class="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.05] tracking-[-0.015em] text-charcoal">
					What working with me is like.
				</h2>
				<p class="mt-5 text-lg leading-relaxed text-inkmuted">
					Four habits that shape every engagement — and yes, they apply from the very first
					email.
				</p>
			</div>
			<a
				href="/expertise"
				class="group inline-flex items-center gap-2 text-[15px] font-semibold text-clay transition-colors hover:text-claydark"
			>
				The principles in detail
				<ArrowRight class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
			</a>
		</div>

		<div class="mt-12 grid gap-x-14 gap-y-10 border-t border-sand pt-10 md:grid-cols-2">
			{#each workingStyle as stance, i}
				<div use:reveal={{ delay: (i % 2) * 70 }}>
					<h3 class="font-serif text-[1.4rem] leading-snug text-charcoal">{stance.title}</h3>
					<p class="mt-2.5 max-w-[56ch] text-[15px] leading-relaxed text-inkmuted">{stance.body}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Credentials and links -->
<section class="bg-ivory py-16 sm:py-24">
	<div class="mx-auto max-w-6xl px-5 sm:px-8">
		<EducationCerts />

		<div class="mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-sand pt-10" use:reveal>
			<div>
				<h2 class="font-mono text-xs lowercase tracking-wide text-sagedeep">find me elsewhere</h2>
				<div class="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3">
					<a
						href={profile.linkedin}
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-2 text-[15px] font-semibold text-charcoal transition-colors hover:text-clay"
					>
						<LinkedInIcon class="h-4 w-4" />
						linkedin.com/in/hafizhfadh
						<ArrowUpRight class="h-4 w-4 text-sanddeep" />
					</a>
					<a
						href="mailto:{profile.email}"
						class="inline-flex items-center gap-2 text-[15px] font-semibold text-charcoal transition-colors hover:text-clay"
					>
						{profile.email}
						<ArrowUpRight class="h-4 w-4 text-sanddeep" />
					</a>
				</div>
			</div>
			<p class="max-w-[44ch] text-sm leading-relaxed text-inkmuted">
				The complete employment record, with the case studies behind each headline number, lives
				on <a href="/experience" class="font-semibold text-clay underline decoration-sanddeep underline-offset-4 transition-colors hover:decoration-clay">the experience page</a>.
			</p>
		</div>
	</div>
</section>

<CtaBand
	title="Prefer to just talk?"
	line="Skip the forms and write to me directly — or tell me about your challenge and I'll come prepared."
	ctaLabel="Start a professional conversation"
/>
