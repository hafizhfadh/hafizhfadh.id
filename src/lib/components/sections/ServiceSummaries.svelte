<script lang="ts">
	import { services } from '#lib/data/services';
	import { reveal } from '#lib/actions/reveal';
	import { ArrowRight } from 'lucide-svelte';
</script>

<section class="bg-ivory py-20 sm:py-28">
	<div class="mx-auto max-w-6xl px-5 sm:px-8">
		<div class="flex flex-wrap items-end justify-between gap-6" use:reveal>
			<div class="max-w-2xl">
				<h2 class="font-serif text-[clamp(2.1rem,4vw,3.25rem)] leading-[1.04] tracking-[-0.015em] text-charcoal">
					Three ways of working together.
				</h2>
				<p class="mt-5 text-lg leading-relaxed text-inkmuted">
					Every engagement is scoped around a specific problem. These are the three forms it
					usually takes.
				</p>
			</div>
			<a
				href="/services"
				class="group inline-flex items-center gap-2 text-[15px] font-semibold text-clay transition-colors hover:text-claydark"
			>
				Compare all services
				<ArrowRight class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
			</a>
		</div>

		<div class="mt-12 divide-y divide-sand border-t border-sand">
			{#each services as service, i}
				<div class="grid gap-6 py-10 sm:py-12 lg:grid-cols-12 lg:gap-10" use:reveal={{ delay: i * 60 }}>
					<div class="lg:col-span-7">
						<h3 class="font-serif text-[1.7rem] leading-tight text-charcoal sm:text-3xl">
							{service.title}
						</h3>
						<p class="mt-3 max-w-[56ch] text-[17px] leading-relaxed text-inkmuted">
							{service.teaser}
						</p>
						<p class="mt-4 max-w-[56ch] font-serif text-lg leading-snug text-sagedeep italic">
							“{service.quote}”
						</p>
					</div>
					<div class="flex items-center lg:col-span-4 lg:col-start-9 lg:justify-end">
						<a
							href="/services/{service.slug}"
							class="group inline-flex items-center gap-2 text-[15px] font-semibold text-charcoal underline decoration-sanddeep decoration-2 underline-offset-8 transition-colors hover:decoration-clay"
						>
							{service.cta}
							<ArrowRight
								class="h-4 w-4 text-clay transition-transform duration-300 group-hover:translate-x-1"
							/>
						</a>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
