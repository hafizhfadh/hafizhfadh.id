<script lang="ts">
	import { verifiedMetrics } from '#lib/data/metrics';
	import { reveal } from '#lib/actions/reveal';
	import { ArrowRight } from 'lucide-svelte';
</script>

<section id="impact" class="on-navy bg-navy py-20 text-ivory sm:py-28">
	<div class="mx-auto max-w-6xl px-5 sm:px-8">
		<!-- Section opening -->
		<div class="flex flex-wrap items-end justify-between gap-6" use:reveal>
			<div class="max-w-2xl">
				<h2 class="font-serif text-[clamp(2.1rem,4vw,3.25rem)] leading-[1.04] tracking-[-0.015em]">
					Proof, not promises.
				</h2>
				<p class="mt-5 text-lg leading-relaxed text-fog">
					Engineering credibility is earned in production. These are verified outcomes from real
					environments: telecom billing, mission-critical infrastructure, software on over
					200,000 phones.
				</p>
			</div>
			<a
				href="/experience"
				class="group inline-flex items-center gap-2 text-[15px] font-semibold text-claylight transition-colors hover:text-ivory"
			>
				How each number happened
				<ArrowRight class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
			</a>
		</div>

		<!-- The ledger -->
		<div class="mt-14">
			{#each verifiedMetrics as metric, i}
				<div
					class="grid gap-x-10 gap-y-5 border-t border-ivory/15 py-10 sm:py-12 lg:grid-cols-12 lg:items-baseline"
					use:reveal
				>
					<!-- The figure -->
					<div class="lg:col-span-4">
						<div class="font-serif text-[clamp(3.4rem,6.5vw,5.75rem)] leading-none tracking-[-0.02em] text-claylight">
							{metric.value}
						</div>
					</div>

					<!-- What it means -->
					<div class="lg:col-span-5">
						<h3 class="text-xl font-semibold leading-snug text-ivory">{metric.label}</h3>
						<p class="mt-2 text-[15px] leading-relaxed text-fog">{metric.context}</p>
					</div>

					<!-- How, and where -->
					<div class="lg:col-span-3">
						<p class="text-sm leading-relaxed text-fog">{metric.details}</p>
						<p class="mt-4 font-mono text-xs text-ivory/60">
							{metric.organization} · {metric.role}
						</p>
					</div>
				</div>
			{/each}

			<!-- Integrity note -->
			<div class="flex items-start gap-3 border-t border-ivory/15 pt-8" use:reveal>
				<svg viewBox="0 0 16 16" class="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true">
					<circle cx="8" cy="8" r="7" fill="none" stroke="#687C70" stroke-width="1.3" />
					<path d="M 4.8 8.3 L 7 10.5 L 11.4 5.6" fill="none" stroke="#687C70" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
				<p class="max-w-[62ch] text-sm leading-relaxed text-fog">
					Every figure on this page comes from documented production and consulting history:
					nothing projected, nothing aspirational. Happy to walk through the details on a call.
				</p>
			</div>
		</div>
	</div>
</section>
