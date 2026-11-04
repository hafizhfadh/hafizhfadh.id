<script lang="ts">
	import { services } from '#lib/data/services';
	import { reveal } from '#lib/actions/reveal';
	import { ArrowRight } from 'lucide-svelte';
</script>

<section id="services" class="bg-ivory py-20 sm:py-28">
	<div class="mx-auto max-w-6xl px-5 sm:px-8">
		<!-- Section opening -->
		<div class="max-w-2xl" use:reveal>
			<h2 class="font-serif text-[clamp(2.1rem,4vw,3.25rem)] leading-[1.04] tracking-[-0.015em] text-charcoal">
				Three ways of working together.
			</h2>
			<p class="mt-5 text-lg leading-relaxed text-inkmuted">
				Every engagement is shaped around the problem, but most work falls into one of three
				shapes. Find yours — or simply start from the challenge, and we'll find the shape
				together.
			</p>
		</div>

		<div class="mt-4 divide-y divide-sand">
			{#each services as service, i}
				<article class="grid gap-10 py-14 sm:py-16 lg:grid-cols-12 lg:gap-14" use:reveal>
					<!-- Text chapter -->
					<div class="lg:col-span-7" class:lg:order-2={i % 2 === 1}>
						<h3 class="font-serif text-[clamp(1.8rem,3vw,2.5rem)] leading-[1.06] tracking-[-0.01em] text-charcoal">
							{service.title}
						</h3>
						<p class="mt-4 max-w-[58ch] text-[17px] leading-relaxed text-inkmuted">
							{service.summary}
						</p>

						<div class="mt-6 max-w-[52ch]">
							<span class="mb-3 block h-px w-8 bg-sage" aria-hidden="true"></span>
							<p class="font-serif text-xl leading-snug text-charcoal italic sm:text-[1.35rem]">
								“{service.quote}”
							</p>
						</div>

						<div class="mt-10 grid gap-10 sm:grid-cols-2">
							<div>
								<h4 class="font-mono text-xs lowercase tracking-wide text-sagedeep">
									what that covers
								</h4>
								<ul class="mt-4 space-y-3">
									{#each service.capabilities as capability}
										<li class="flex items-start gap-2.5 text-[15px] leading-snug text-charcoal">
											<svg
												viewBox="0 0 12 12"
												class="mt-1.5 h-2.5 w-2.5 shrink-0"
												aria-hidden="true"
											>
												<path
													d="M 1.5 6.5 L 4.5 9.5 L 10.5 2.5"
													fill="none"
													stroke="#687C70"
													stroke-width="2"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
											</svg>
											<span>{capability}</span>
										</li>
									{/each}
								</ul>
							</div>

							<div class="space-y-8">
								<div>
									<h4 class="font-mono text-xs lowercase tracking-wide text-sagedeep">
										what you get
									</h4>
									<ul class="mt-4 space-y-3">
										{#each service.businessOutcomes as outcome}
											<li class="flex items-start gap-2.5 text-sm leading-snug text-inkmuted">
												<span class="mt-0.5 text-clay" aria-hidden="true">→</span>
												<span>{outcome}</span>
											</li>
										{/each}
									</ul>
								</div>

								<div>
									<h4 class="font-mono text-xs lowercase tracking-wide text-sagedeep">
										in practice
									</h4>
									<p class="mt-3 text-sm leading-relaxed text-inkmuted">
										{service.engagementExample}
									</p>
								</div>

								<div>
									<h4 class="font-mono text-xs lowercase tracking-wide text-sagedeep">
										typical stack
									</h4>
									<p class="mt-3 font-mono text-xs leading-relaxed text-charcoal">
										{service.technologies.join(' · ')}
									</p>
								</div>
							</div>
						</div>
					</div>

					<!-- Diagram chapter -->
					<div class="flex items-center lg:col-span-5" class:lg:order-1={i % 2 === 1}>
						<div class="mx-auto w-full max-w-sm">
							{#if service.id === 'forward-deployed'}
								<!-- Embedded, not adjacent: two teams bridged -->
								<svg viewBox="0 0 280 200" class="w-full" role="img" aria-label="Diagram of an embedded engineering partner working inside a client team: two groups joined by a working bridge.">
									<path d="M 20 164 H 260" stroke="#E5D8C4" stroke-width="1" />
									<path d="M 40 160 v 8 M 140 160 v 8 M 240 160 v 8" stroke="#D6C5AB" stroke-width="1" />
									<rect x="20" y="66" width="92" height="64" rx="12" fill="#FAF8F2" stroke="#687C70" stroke-width="1.5" />
									<g fill="#687C70">
										<circle cx="46" cy="88" r="2" /><circle cx="66" cy="88" r="2" /><circle cx="86" cy="88" r="2" />
										<circle cx="46" cy="104" r="2" /><circle cx="66" cy="104" r="2" /><circle cx="86" cy="104" r="2" />
									</g>
									<path d="M 112 98 C 132 62, 148 62, 168 98" fill="none" stroke="#B04A2C" stroke-width="1.5" />
									<path d="M 112 98 C 132 134, 148 134, 168 98" fill="none" stroke="#687C70" stroke-width="1.2" stroke-dasharray="3 4" />
									<circle class="pulse-dot" cx="140" cy="74" r="3" fill="#C85A3A" />
									<circle cx="216" cy="98" r="30" fill="#172B40" />
									<circle cx="216" cy="98" r="5" fill="#E5D8C4" />
									<text x="20" y="34" font-family="IBM Plex Mono, monospace" font-size="10.5" font-style="italic" fill="#5C5A52">fig. 02 — embedded, not adjacent</text>
								</svg>
							{:else if service.id === 'managed-platforms'}
								<!-- Calm, steady, observed: an uptime rhythm -->
								<svg viewBox="0 0 280 200" class="w-full" role="img" aria-label="Diagram of a steadily running platform: a calm rhythm of routine pulses with checkpoints along a timeline.">
									<path d="M 20 66 Q 140 34 260 66" fill="none" stroke="#E5D8C4" stroke-width="1" />
									<path d="M 20 104 H 60 A 10 10 0 0 1 80 104 H 130 A 10 10 0 0 1 150 104 H 200 A 10 10 0 0 1 220 104 H 260" fill="none" stroke="#687C70" stroke-width="1.5" />
									<g stroke="#55645B" stroke-width="1.2">
										<path d="M 45 104 v -14" /><path d="M 115 104 v -14" /><path d="M 185 104 v -14" />
									</g>
									<circle cx="45" cy="86" r="3" fill="#FAF8F2" stroke="#55645B" stroke-width="1.2" />
									<circle cx="115" cy="86" r="3" fill="#FAF8F2" stroke="#55645B" stroke-width="1.2" />
									<circle cx="185" cy="86" r="3" fill="#FAF8F2" stroke="#55645B" stroke-width="1.2" />
									<path d="M 245 104 v -20" stroke="#B04A2C" stroke-width="1.2" />
									<circle class="pulse-dot" cx="245" cy="79" r="3.5" fill="#C85A3A" />
									<path d="M 20 136 H 260" stroke="#E5D8C4" stroke-width="1" stroke-dasharray="2 5" />
									<text x="20" y="34" font-family="IBM Plex Mono, monospace" font-size="10.5" font-style="italic" fill="#5C5A52">fig. 03 — calm, steady, observed</text>
								</svg>
							{:else}
								<!-- From tangle to throughput -->
								<svg viewBox="0 0 280 200" class="w-full" role="img" aria-label="Diagram of a tangled operational path resolving into one straight, reliable flow.">
									<path d="M 20 70 v 10 M 15 75 h 10" stroke="#D6C5AB" stroke-width="1" />
									<path d="M 20 128 C 48 88, 76 156, 100 118 C 116 94, 88 84, 110 72 C 136 58, 146 96, 166 100" fill="none" stroke="#687C70" stroke-width="1.5" />
									<path d="M 166 100 H 252" fill="none" stroke="#B04A2C" stroke-width="1.5" />
									<path d="M 244 94 L 254 100 L 244 106" fill="none" stroke="#B04A2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
									<circle cx="166" cy="100" r="5.5" fill="#172B40" />
									<path d="M 20 152 H 150" stroke="#E5D8C4" stroke-width="1" stroke-dasharray="2 5" />
									<text x="20" y="34" font-family="IBM Plex Mono, monospace" font-size="10.5" font-style="italic" fill="#5C5A52">fig. 04 — from tangle to throughput</text>
								</svg>
							{/if}
						</div>
					</div>
				</article>
			{/each}
		</div>

		<!-- Section close -->
		<div class="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-sand pt-8" use:reveal>
			<p class="text-[15px] text-inkmuted">Not sure which shape fits? That's what the first conversation is for.</p>
			<a
				href="#contact"
				class="group inline-flex items-center gap-2 text-[15px] font-semibold text-clay transition-colors hover:text-claydark"
			>
				Start the conversation
				<ArrowRight class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
			</a>
		</div>
	</div>
</section>

<style>
	.pulse-dot {
		animation: pulse-soft 2.6s ease-in-out infinite;
		transform-box: fill-box;
		transform-origin: center;
	}

	@keyframes pulse-soft {
		0%,
		100% {
			opacity: 1;
			transform: scale(1);
		}
		50% {
			opacity: 0.55;
			transform: scale(1.25);
		}
	}
</style>
