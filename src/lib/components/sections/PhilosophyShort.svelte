<script lang="ts">
	import { principles } from '#lib/data/philosophy';
	import PrincipleGlyph from '../shared/PrincipleGlyph.svelte';
	import { reveal } from '#lib/actions/reveal';
	import { ArrowRight } from 'lucide-svelte';

	// Three principles that read fastest for a first-time visitor.
	const featuredIndices = [2, 0, 5];
	const featured = featuredIndices.map((i) => ({ ...principles[i], index: i }));
</script>

<section class="bg-ivory py-20 sm:py-28">
	<div class="mx-auto max-w-6xl px-5 sm:px-8">
		<div class="flex flex-wrap items-end justify-between gap-6" use:reveal>
			<div class="max-w-2xl">
				<h2 class="font-serif text-[clamp(2.1rem,4vw,3.25rem)] leading-[1.04] tracking-[-0.015em] text-charcoal">
					Principles I engineer by.
				</h2>
				<p class="mt-5 text-lg leading-relaxed text-inkmuted">
					Six shape every recommendation. Three of them do most of the talking:
				</p>
			</div>
			<a
				href="/expertise"
				class="group inline-flex items-center gap-2 text-[15px] font-semibold text-clay transition-colors hover:text-claydark"
			>
				All six, plus the toolkit
				<ArrowRight class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
			</a>
		</div>

		<div class="mt-12 grid gap-x-14 border-t border-sand md:grid-cols-3">
			{#each featured as p, i}
				<div class="flex gap-5 border-b border-sand py-9 md:border-b-0 {i > 0 ? 'md:border-l md:border-sand md:pl-10' : ''}" use:reveal={{ delay: i * 80 }}>
					<PrincipleGlyph index={p.index} />
					<div>
						<h3 class="font-serif text-[1.3rem] leading-snug text-charcoal">{p.title}</h3>
						<p class="mt-2.5 text-sm leading-relaxed text-inkmuted">{p.teaser}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
