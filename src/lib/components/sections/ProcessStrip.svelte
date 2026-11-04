<script lang="ts">
	import { engagementProcess } from '#lib/data/engagement';
	import { reveal } from '#lib/actions/reveal';
	import { ArrowRight } from 'lucide-svelte';
</script>

<section class="border-y border-sand/70 bg-cream py-20 sm:py-28">
	<div class="mx-auto max-w-6xl px-5 sm:px-8">
		<div class="flex flex-wrap items-end justify-between gap-6" use:reveal>
			<div class="max-w-2xl">
				<h2 class="font-serif text-[clamp(2.1rem,4vw,3.25rem)] leading-[1.04] tracking-[-0.015em] text-charcoal">
					How an engagement begins.
				</h2>
				<p class="mt-5 max-w-[52ch] text-lg leading-relaxed text-inkmuted">
					With understanding, not a quote. Five stages take us from a first conversation to
					engineering that ships.
				</p>
			</div>
			<a
				href="/contact"
				class="group inline-flex items-center gap-2 text-[15px] font-semibold text-clay transition-colors hover:text-claydark"
			>
				Begin stage one
				<ArrowRight class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
			</a>
		</div>

		<div class="mt-12 grid gap-x-10 gap-y-8 border-t border-sand pt-10 sm:grid-cols-2 lg:grid-cols-5" use:reveal>
			{#each engagementProcess as step, i}
				<div class="relative">
					<div class="flex items-baseline gap-3">
						<span class="font-serif text-3xl leading-none text-sanddeep">{step.number}</span>
						<h3 class="text-[15px] font-semibold leading-snug text-charcoal">{step.title}</h3>
					</div>
					<p class="mt-3 text-sm leading-relaxed text-inkmuted">
						{#if i === 0}
							You introduce your organization, environment, and goals — no commitment, no scope, no sales deck.
						{:else if i === 1}
							A focused conversation uncovers the root causes behind the bottlenecks and the stakes.
						{:else if i === 2}
							A direct technical evaluation of architecture, performance, security posture, and effort.
						{:else if i === 3}
							A detailed scope of work: engagement model, deliverables, milestones, and responsibilities.
						{:else}
							Transparent, value-aligned terms once both sides understand the scope and the stakes.
						{/if}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>
