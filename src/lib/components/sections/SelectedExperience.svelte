<script lang="ts">
	import { experiences } from '#lib/data/experience';
	import { reveal } from '#lib/actions/reveal';
	import { ArrowRight } from 'lucide-svelte';

	const currentOrgs = new Set(['Infradigital Nusantara', 'Monster Data Asia']);
</script>

<section class="border-y border-sand/70 bg-cream py-20 sm:py-28">
	<div class="mx-auto max-w-6xl px-5 sm:px-8">
		<div class="flex flex-wrap items-end justify-between gap-6" use:reveal>
			<div class="max-w-2xl">
				<h2 class="font-serif text-[clamp(2.1rem,4vw,3.25rem)] leading-[1.04] tracking-[-0.015em] text-charcoal">
					Where the numbers come from.
				</h2>
				<p class="mt-5 text-lg leading-relaxed text-inkmuted">
					School administration software, a 200,000-install mobile app, and the databases behind
					telecom billing. Four roles, each with the number it moved.
				</p>
			</div>
			<a
				href="/experience"
				class="group inline-flex items-center gap-2 text-[15px] font-semibold text-clay transition-colors hover:text-claydark"
			>
				The full story, with case studies
				<ArrowRight class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
			</a>
		</div>

		<div class="mt-12 divide-y divide-sand border-t border-sand">
			{#each experiences as exp}
				<div class="grid gap-2 py-7 sm:grid-cols-[11rem_1fr] sm:gap-8" use:reveal>
					<div class="pt-1.5 font-mono text-xs text-inkmuted">{exp.period}</div>
					<div class="grid gap-x-10 gap-y-1 lg:grid-cols-[1fr_auto] lg:items-baseline">
						<div>
							<h3 class="font-serif text-2xl leading-tight text-charcoal">
								{exp.organization}
								<span class="text-inkmuted">· {exp.role}</span>
							</h3>
						</div>
						{#if currentOrgs.has(exp.organization)}
							<span class="font-mono text-[11px] text-clay">current</span>
						{/if}
						<p class="max-w-[70ch] text-[15px] leading-relaxed text-inkmuted lg:col-span-2">
							{exp.highlight}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
