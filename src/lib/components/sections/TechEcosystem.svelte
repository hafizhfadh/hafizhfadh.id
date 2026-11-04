<script lang="ts">
	import { techEcosystem } from '#lib/data/ecosystem';
	import { reveal } from '#lib/actions/reveal';
</script>

<section id="ecosystem" class="bg-ivory">
	<div class="mx-auto max-w-6xl px-5 sm:px-8">
		<!-- Index of domains -->
		<div>
			{#each techEcosystem as item}
				<div class="grid gap-x-14 gap-y-4 border-t border-sand py-10 lg:grid-cols-12" use:reveal>
					<div class="lg:col-span-4">
						<h3 class="font-serif text-2xl leading-tight text-charcoal">{item.category}</h3>
						<p class="mt-2.5 max-w-[40ch] text-sm leading-relaxed text-inkmuted">
							{item.description}
						</p>
					</div>
					<p class="flex flex-wrap items-baseline gap-y-1.5 leading-relaxed lg:col-span-7 lg:col-start-6">
						{#each item.skills as skill, j}
							<span class="font-mono text-[13px] text-charcoal">{skill}</span>
							{#if j < item.skills.length - 1}
								<span class="mx-2 text-sanddeep" aria-hidden="true">·</span>
							{/if}
						{/each}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>
