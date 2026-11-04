<script lang="ts">
	import Seo from '../shared/Seo.svelte';
	import PageHeader from '../shared/PageHeader.svelte';
	import ServiceDiagram from '../shared/ServiceDiagram.svelte';
	import CtaBand from '../shared/CtaBand.svelte';
	import { services } from '#lib/data/services';
	import { reveal } from '#lib/actions/reveal';
	import { ArrowRight } from 'lucide-svelte';
	import type { ServicePillar } from '#lib/data/services';

	interface Props {
		service: ServicePillar;
	}

	let { service }: Props = $props();

	const captions: Record<string, string> = {
		'forward-deployed': 'fig. 02 — embedded, not adjacent',
		'managed-platforms': 'fig. 03 — calm, steady, observed',
		'custom-applications': 'fig. 04 — from tangle to throughput'
	};

	const otherServices = services.filter((s) => s.id !== service.id);
</script>

<Seo
	title="{service.title} — Hafizh Fadhlurrohman"
	description={service.summary}
	path="/services/{service.slug}"
/>

<PageHeader title={service.title} lead={service.lead} crumbs={[
	{ label: 'Home', href: '/' },
	{ label: 'Services', href: '/services' },
	{ label: service.title }
]} />

<!-- Positioning, beside the diagram -->
<section class="bg-ivory py-16 sm:py-20">
	<div class="mx-auto max-w-6xl px-5 sm:px-8">
		<div class="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
			<div class="lg:col-span-7" use:reveal>
				<p class="max-w-[60ch] text-[19px] leading-relaxed text-charcoal">{service.positioning}</p>
				<div class="mt-8 max-w-[52ch]">
					<span class="mb-3 block h-px w-8 bg-sage" aria-hidden="true"></span>
					<p class="font-serif text-xl leading-snug text-charcoal italic sm:text-[1.35rem]">
						“{service.quote}”
					</p>
				</div>
			</div>
			<div class="lg:col-span-5" use:reveal={{ delay: 120 }}>
				<div class="mx-auto w-full max-w-sm">
					<ServiceDiagram kind={service.diagram} caption={captions[service.id]} />
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Challenges and scenarios -->
<section class="border-y border-sand/70 bg-cream py-16 sm:py-20">
	<div class="mx-auto max-w-6xl px-5 sm:px-8">
		<div class="grid gap-14 lg:grid-cols-2 lg:gap-16">
			<div use:reveal>
				<h2 class="font-serif text-[clamp(1.7rem,3vw,2.3rem)] leading-tight text-charcoal">
					What brings clients here.
				</h2>
				<div class="mt-8 space-y-7 divide-y divide-sand">
					{#each service.challenges as challenge}
						<div class="pt-7 first:pt-0">
							<h3 class="text-[17px] font-semibold text-charcoal">{challenge.title}</h3>
							<p class="mt-2 max-w-[56ch] text-[15px] leading-relaxed text-inkmuted">{challenge.body}</p>
						</div>
					{/each}
				</div>
			</div>
			<div use:reveal={{ delay: 120 }}>
				<h2 class="font-serif text-[clamp(1.7rem,3vw,2.3rem)] leading-tight text-charcoal">
					Typical scenarios.
				</h2>
				<div class="mt-8 space-y-7 divide-y divide-sand">
					{#each service.scenarios as scenario}
						<div class="pt-7 first:pt-0">
							<h3 class="text-[17px] font-semibold text-charcoal">{scenario.title}</h3>
							<p class="mt-2 max-w-[56ch] text-[15px] leading-relaxed text-inkmuted">{scenario.body}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Capabilities -->
<section class="bg-ivory py-16 sm:py-20">
	<div class="mx-auto max-w-6xl px-5 sm:px-8">
		<h2 class="font-serif text-[clamp(1.7rem,3vw,2.3rem)] leading-tight text-charcoal" use:reveal>
			What that covers.
		</h2>

		{#if service.capabilitySections.length > 0}
			<div class="mt-10 grid gap-x-14 gap-y-9 md:grid-cols-2">
				{#each service.capabilitySections as section, i}
					<div class="border-t border-sand pt-6" use:reveal={{ delay: (i % 2) * 70 }}>
						<h3 class="text-[17px] font-semibold text-charcoal">{section.title}</h3>
						<p class="mt-2 text-[15px] leading-relaxed text-inkmuted">{section.body}</p>
					</div>
				{/each}
			</div>
		{:else}
			<ul class="mt-10 grid gap-x-12 gap-y-3.5 sm:grid-cols-2">
				{#each service.capabilities as capability}
					<li class="flex items-start gap-2.5 border-t border-sand py-3.5 text-[15px] leading-snug text-charcoal" use:reveal>
						<svg viewBox="0 0 12 12" class="mt-1.5 h-2.5 w-2.5 shrink-0" aria-hidden="true">
							<path d="M 1.5 6.5 L 4.5 9.5 L 10.5 2.5" fill="none" stroke="#687C70" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
						<span>{capability}</span>
					</li>
				{/each}
			</ul>
		{/if}
	</div>
</section>

<!-- Outcomes and deliverables -->
<section class="border-y border-sand/70 bg-cream py-16 sm:py-20">
	<div class="mx-auto max-w-6xl px-5 sm:px-8">
		<div class="grid gap-14 lg:grid-cols-2 lg:gap-16">
			<div use:reveal>
				<h2 class="font-serif text-[clamp(1.7rem,3vw,2.3rem)] leading-tight text-charcoal">
					What it changes.
				</h2>
				<ul class="mt-8 space-y-4">
					{#each service.outcomes as outcome}
						<li class="flex items-start gap-3 text-[15px] leading-relaxed text-charcoal">
							<span class="mt-0.5 text-clay" aria-hidden="true">→</span>
							<span>{outcome}</span>
						</li>
					{/each}
				</ul>
			</div>
			<div use:reveal={{ delay: 120 }}>
				<h2 class="font-serif text-[clamp(1.7rem,3vw,2.3rem)] leading-tight text-charcoal">
					What you receive.
				</h2>
				<ul class="mt-8 space-y-4">
					{#each service.deliverables as deliverable}
						<li class="flex items-start gap-3 text-[15px] leading-relaxed text-inkmuted">
							<svg viewBox="0 0 16 16" class="mt-1 h-3.5 w-3.5 shrink-0" aria-hidden="true">
								<circle cx="8" cy="8" r="7" fill="none" stroke="#687C70" stroke-width="1.3" />
								<path d="M 4.8 8.3 L 7 10.5 L 11.4 5.6" fill="none" stroke="#687C70" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
							<span>{deliverable}</span>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- Collaboration model -->
<section class="bg-ivory py-16 sm:py-20">
	<div class="mx-auto max-w-6xl px-5 sm:px-8">
		<div class="max-w-3xl" use:reveal>
			<h2 class="font-mono text-xs lowercase tracking-wide text-sagedeep">how we'd work together</h2>
			<p class="mt-5 font-serif text-[clamp(1.6rem,3vw,2.2rem)] leading-snug text-charcoal italic">
				{service.collaboration.title}.
			</p>
			<p class="mt-6 max-w-[62ch] text-[17px] leading-relaxed text-inkmuted">
				{service.collaboration.body}
			</p>
		</div>

		<!-- Relevant experience -->
		<div class="mt-16" use:reveal>
			<div class="flex flex-wrap items-baseline justify-between gap-4 border-t border-sand pt-8">
				<h2 class="font-mono text-xs lowercase tracking-wide text-sagedeep">where this has worked before</h2>
				<a href="/experience" class="group inline-flex items-center gap-2 text-sm font-semibold text-clay transition-colors hover:text-claydark">
					The full track record
					<ArrowRight class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
				</a>
			</div>
			<div class="mt-2 divide-y divide-sand">
				{#each service.relevantExperience as experience}
					<div class="grid gap-1 py-6 sm:grid-cols-[16rem_1fr] sm:gap-8">
						<p class="font-serif text-xl leading-snug text-charcoal">{experience.organization}</p>
						<p class="max-w-[64ch] text-[15px] leading-relaxed text-inkmuted">{experience.note}</p>
					</div>
				{/each}
			</div>
			<p class="mt-2 border-t border-sand pt-6 font-mono text-xs text-charcoal">
				{service.technologies.join(' · ')}
			</p>
		</div>

		<!-- Related services -->
		<div class="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-sand pt-8" use:reveal>
			<h2 class="font-mono text-xs lowercase tracking-wide text-sagedeep">also consider</h2>
			<div class="flex flex-wrap gap-x-8 gap-y-3">
				{#each otherServices as other}
					<a href="/services/{other.slug}" class="group inline-flex items-center gap-2 text-[15px] font-semibold text-charcoal transition-colors hover:text-clay">
						{other.title}
						<ArrowRight class="h-4 w-4 text-sanddeep transition-all duration-300 group-hover:translate-x-1 group-hover:text-clay" />
					</a>
				{/each}
			</div>
		</div>
	</div>
</section>

<CtaBand
	title="Sound like your situation?"
	line="Tell me about the challenge — I'll tell you honestly whether this engagement shape fits, or which one does."
	ctaLabel="Discuss this engagement"
/>
