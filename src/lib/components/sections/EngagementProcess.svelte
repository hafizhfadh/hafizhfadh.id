<script lang="ts">
	import { engagementProcess } from '#lib/data/engagement';
	import Button from '../ui/Button.svelte';
	import { reveal } from '#lib/actions/reveal';
</script>

<section id="process" class="border-y border-sand/70 bg-cream py-20 sm:py-28">
	<div class="mx-auto max-w-6xl px-5 sm:px-8">
		<div class="grid gap-14 lg:grid-cols-12 lg:gap-10">
			<!-- Left: the philosophy -->
			<div class="lg:col-span-5" use:reveal>
				<div class="lg:sticky lg:top-28">
					<h2 class="font-serif text-[clamp(2.1rem,4vw,3.25rem)] leading-[1.04] tracking-[-0.015em] text-charcoal">
						How an engagement begins.
					</h2>

					<p class="mt-8 max-w-[48ch] font-serif text-[clamp(1.4rem,2.6vw,1.9rem)] leading-snug text-charcoal italic">
						“Every engineering engagement starts with understanding the problem, not quoting a
						price.”
					</p>

					<p class="mt-7 max-w-[52ch] text-[17px] leading-relaxed text-inkmuted">
						Working together starts the way every good engineering decision does: with
						understanding. The first conversation is just that — you bring context, I bring
						questions, and we both find out whether this is worth pursuing. No sales deck, no
						commitment.
					</p>

					<div class="mt-9">
						<Button href="#contact" variant="primary" size="lg">Begin with a conversation</Button>
					</div>
				</div>
			</div>

			<!-- Right: the five stages -->
			<ol class="relative space-y-14 border-l border-sand pl-9 lg:col-span-6 lg:col-start-7">
				{#each engagementProcess as step, i}
					<li class="relative" use:reveal={{ delay: 80 }}>
						<span
							class="absolute top-1 -left-[42px] flex h-5 w-5 items-center justify-center rounded-full border border-sanddeep bg-cream"
							aria-hidden="true"
						>
							<span class="h-1.5 w-1.5 rounded-full {i === 0 ? 'bg-clay' : 'bg-sage'}"></span>
						</span>

						<div class="flex flex-wrap items-baseline gap-x-4 gap-y-1">
							<span class="font-serif text-[1.7rem] leading-none text-sanddeep">{step.number}</span>
							<h3 class="text-lg font-semibold text-charcoal">{step.title}</h3>
						</div>

						<p class="mt-3 max-w-[54ch] text-[15px] leading-relaxed text-inkmuted">
							{step.summary}
						</p>

						<p class="mt-3.5 font-mono text-xs leading-relaxed text-sagedeep">
							you receive — {step.deliverable}
						</p>
					</li>
				{/each}
			</ol>
		</div>
	</div>
</section>
