<script lang="ts">
	import { principles } from '#lib/data/philosophy';
	import PrincipleGlyph from '../shared/PrincipleGlyph.svelte';
	import { reveal } from '#lib/actions/reveal';
</script>

<div class="grid gap-x-16 md:grid-cols-2">
	{#each principles as p, i}
		<div class="flex gap-6 border-t border-sand py-9" use:reveal={{ delay: (i % 2) * 90 }}>
			<PrincipleGlyph index={i} />

			<div>
				<h3 class="font-serif text-[1.4rem] leading-snug text-charcoal">{p.title}</h3>
				<p class="mt-2.5 text-sm leading-relaxed text-inkmuted">{p.summary}</p>
				<p class="mt-3.5 text-sm leading-relaxed text-sagedeep">
					<span class="mb-1 block font-mono text-[11px] lowercase tracking-wide">in practice</span>
					{p.application}
				</p>
			</div>
		</div>
	{/each}
</div>
