<script lang="ts">
	import Seo from '#lib/components/shared/Seo.svelte';
	import PageHeader from '#lib/components/shared/PageHeader.svelte';
	import ServiceDiagram from '#lib/components/shared/ServiceDiagram.svelte';
	import CtaBand from '#lib/components/shared/CtaBand.svelte';
	import { services } from '#lib/data/services';
	import { reveal } from '#lib/actions/reveal';
	import { ArrowRight } from 'lucide-svelte';

	const captions: Record<string, string> = {
		'forward-deployed': 'fig. 02 — embedded, not adjacent',
		'managed-platforms': 'fig. 03 — calm, steady, observed',
		'custom-applications': 'fig. 04 — from tangle to throughput'
	};
</script>

<Seo
	title="Services — Hafizh Fadhlurrohman"
	description="Three ways of working together: Forward Deployed Engineering, Managed Platforms & Infrastructure, and Custom Applications & Integration. Independent engineering consultancy for infrastructure, platforms, and databases."
	path="/services"
/>

<PageHeader
	title="How we can work together."
	lead="Most engagements fall into one of three shapes. Find yours — or start from the challenge, and we'll find the shape together."
/>

<section class="bg-ivory py-16 sm:py-24">
	<div class="mx-auto max-w-6xl px-5 sm:px-8">
		<div class="divide-y divide-sand">
			{#each services as service, i}
				<article class="grid gap-10 py-14 sm:py-16 lg:grid-cols-12 lg:gap-14" use:reveal>
					<div class="lg:col-span-7" class:lg:order-2={i % 2 === 1}>
						<h2 class="font-serif text-[clamp(1.8rem,3vw,2.5rem)] leading-[1.06] tracking-[-0.01em] text-charcoal">
							{service.title}
						</h2>
						<p class="mt-4 max-w-[58ch] text-[17px] leading-relaxed text-inkmuted">
							{service.summary}
						</p>
						<p class="mt-5 max-w-[58ch] text-[15px] leading-relaxed text-sagedeep">
							{service.engagementExample}
						</p>
						<ul class="mt-8 flex flex-wrap gap-x-2 gap-y-2 font-mono text-xs text-charcoal">
							{#each service.capabilities.slice(0, 4) as capability}
								<li>{capability}</li>
								{#if service.capabilities.indexOf(capability) < 3}
									<li class="text-sanddeep" aria-hidden="true">·</li>
								{/if}
							{/each}
						</ul>
						<div class="mt-8">
							<a
								href="/services/{service.slug}"
								class="group inline-flex items-center gap-2 text-[15px] font-semibold text-charcoal underline decoration-sanddeep decoration-2 underline-offset-8 transition-colors hover:decoration-clay"
							>
								Explore this service
								<ArrowRight
									class="h-4 w-4 text-clay transition-transform duration-300 group-hover:translate-x-1"
								/>
							</a>
						</div>
					</div>
					<div class="flex items-center lg:col-span-5" class:lg:order-1={i % 2 === 1}>
						<div class="mx-auto w-full max-w-sm">
							<ServiceDiagram kind={service.diagram} caption={captions[service.id]} />
						</div>
					</div>
				</article>
			{/each}
		</div>

		<div class="mt-4 flex flex-wrap items-center justify-between gap-4 border-t border-sand pt-8" use:reveal>
			<p class="text-[15px] text-inkmuted">Not sure which shape fits? That's what the first conversation is for.</p>
			<a
				href="/contact"
				class="group inline-flex items-center gap-2 text-[15px] font-semibold text-clay transition-colors hover:text-claydark"
			>
				Start the conversation
				<ArrowRight class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
			</a>
		</div>
	</div>
</section>

<CtaBand
	title="Have a technical challenge worth solving?"
	line="Tell me a little about your organization and what you're trying to achieve — we'll find the shape together."
	ctaLabel="Start a professional conversation"
/>
