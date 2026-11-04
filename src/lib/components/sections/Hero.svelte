<script lang="ts">
	import { profile } from '#lib/data/profile';
	import Button from '../ui/Button.svelte';
	import { reveal } from '#lib/actions/reveal';
	import { ArrowDown } from 'lucide-svelte';
</script>

<section class="relative overflow-hidden bg-ivory pt-12 pb-14 sm:pt-16 md:pb-20">
	<div class="mx-auto max-w-6xl px-5 sm:px-8">
		<div class="grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
			<!-- Left: the editorial statement -->
			<div class="lg:col-span-7">
				<h1
					class="font-serif text-[clamp(3rem,7.4vw,6rem)] leading-[0.98] tracking-[-0.02em] text-charcoal"
				>
					Engineering
					<br />
					Beyond
					<em class="text-terracotta">Infrastructure.</em>
				</h1>

				<p class="mt-7 text-[15px] text-inkmuted">
					<span class="font-semibold text-charcoal">{profile.name}</span>
					<span class="mx-2 text-sanddeep" aria-hidden="true">·</span>
					Independent engineering consultancy
					<span class="mx-2 text-sanddeep" aria-hidden="true">·</span>
					Depok, Indonesia
				</p>

				<p class="mt-5 max-w-[36rem] text-lg leading-relaxed text-inkmuted">
					I help organizations build, secure, and evolve technology platforms through thoughtful
					engineering, open-source solutions, and reliable infrastructure.
				</p>

				<div class="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
					<Button href="#contact" variant="primary" size="lg">
						Let's talk about your engineering challenges
					</Button>
					<a
						href="#services"
						class="group inline-flex items-center gap-2 text-[15px] font-semibold text-charcoal underline decoration-sanddeep decoration-2 underline-offset-8 transition-colors hover:decoration-clay"
					>
						Explore my work
						<ArrowDown
							class="h-4 w-4 text-clay transition-transform duration-300 group-hover:translate-y-0.5"
						/>
					</a>
				</div>
			</div>

			<!-- Right: the platform schematic, drawn on paper -->
			<div class="lg:col-span-5">
				<svg
					viewBox="0 0 480 600"
					class="mx-auto w-full max-w-md lg:ml-auto"
					role="img"
					aria-label="Schematic of the platforms Hafizh engineers: global edge routing, a 1.6 TB core database answering queries under 500 milliseconds, observability with MonIT and Grafana, and ISO/IEC 27001 security."
				>
					<!-- Contour lines, like a site plan -->
					<g class="fade-in" style="animation-delay: 1.5s" fill="none" stroke="#E5D8C4" stroke-width="1">
						<path d="M 150 600 A 330 330 0 0 1 480 270" opacity="0.55" />
						<path d="M 210 600 A 270 270 0 0 1 480 330" opacity="0.7" />
						<path d="M 270 600 A 210 210 0 0 1 480 390" opacity="0.85" />
						<path d="M 330 600 A 150 150 0 0 1 480 450" />
					</g>
					<g class="fade-in" style="animation-delay: 1.7s" stroke="#D6C5AB" stroke-width="1">
						<path d="M 116 76 v 10 M 111 81 h 10" />
						<path d="M 44 296 v 10 M 39 301 h 10" />
					</g>

					<!-- Spine -->
					<path
						class="draw"
						style="animation-delay: 0.15s"
						d="M 84 48 V 552"
						pathLength="1"
						stroke="#687C70"
						stroke-width="1.5"
						fill="none"
					/>

					<!-- Station 1 — edge & routing -->
					<g class="fade-in" style="animation-delay: 0.45s">
						<path class="draw" style="animation-delay: 0.9s" d="M 108 104 H 122" pathLength="1" stroke="#D6C5AB" stroke-width="1.5" fill="none" />
						<circle cx="84" cy="104" r="24" fill="#FAF8F2" stroke="#687C70" stroke-width="1.5" />
						<g stroke="#55645B" stroke-width="1.4" fill="none">
							<circle cx="84" cy="104" r="9" />
							<path d="M 75 104 H 93" />
							<ellipse cx="84" cy="104" rx="4" ry="9" />
						</g>
						<text x="128" y="102" font-family="IBM Plex Mono, monospace" font-size="12" letter-spacing="1.2" fill="#282C2B">EDGE &amp; ROUTING</text>
						<text x="128" y="119" font-family="IBM Plex Mono, monospace" font-size="10.5" fill="#5C5A52">cloudflare workers · global</text>
					</g>

					<!-- Station 2 — the core database -->
					<g class="fade-in" style="animation-delay: 0.75s">
						<path class="draw" style="animation-delay: 1.05s" d="M 114 252 H 128" pathLength="1" stroke="#B04A2C" stroke-width="1.5" fill="none" />
						<circle cx="121" cy="252" r="2.2" fill="#B04A2C" />
						<circle
							class="spin-slow"
							cx="84"
							cy="252"
							r="37"
							fill="none"
							stroke="#C85A3A"
							stroke-width="1"
							stroke-dasharray="3 6"
							opacity="0.85"
						/>
						<circle cx="84" cy="252" r="30" fill="#172B40" />
						<g stroke="#E5D8C4" stroke-width="1.5" fill="none">
							<ellipse cx="84" cy="244" rx="9" ry="3.5" />
							<path d="M 75 244 V 259" />
							<path d="M 75 251.5 A 9 3.5 0 0 0 93 251.5" />
							<path d="M 75 259 A 9 3.5 0 0 0 93 259" />
						</g>
						<text x="128" y="250" font-family="IBM Plex Mono, monospace" font-size="12" letter-spacing="1.2" fill="#282C2B">CORE DATABASE</text>
						<text x="128" y="267" font-family="IBM Plex Mono, monospace" font-size="10.5" fill="#5C5A52">1.6 tb · &le; 500 ms queries</text>
					</g>

					<!-- Station 3 — observability -->
					<g class="fade-in" style="animation-delay: 1.05s">
						<path class="draw" style="animation-delay: 1.2s" d="M 108 400 H 122" pathLength="1" stroke="#D6C5AB" stroke-width="1.5" fill="none" />
						<circle cx="84" cy="400" r="24" fill="#FAF8F2" stroke="#687C70" stroke-width="1.5" />
						<path
							d="M 72 400 H 78 L 82 391 L 87 408 L 91 400 H 96"
							stroke="#55645B"
							stroke-width="1.4"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<text x="128" y="398" font-family="IBM Plex Mono, monospace" font-size="12" letter-spacing="1.2" fill="#282C2B">OBSERVABILITY</text>
						<text x="128" y="415" font-family="IBM Plex Mono, monospace" font-size="10.5" fill="#5C5A52">monit · grafana dashboards</text>
					</g>

					<!-- Station 4 — security -->
					<g class="fade-in" style="animation-delay: 1.35s">
						<path class="draw" style="animation-delay: 1.35s" d="M 108 516 H 122" pathLength="1" stroke="#D6C5AB" stroke-width="1.5" fill="none" />
						<circle cx="84" cy="516" r="24" fill="#FAF8F2" stroke="#687C70" stroke-width="1.5" />
						<g stroke="#55645B" stroke-width="1.4" fill="none" stroke-linecap="round" stroke-linejoin="round">
							<path d="M 84 506.5 L 92 510 V 516.5 C 92 521.5 88.5 524.8 84 526.2 C 79.5 524.8 76 521.5 76 516.5 V 510 Z" />
							<path d="M 80.5 516 L 83 518.5 L 87.8 513.2" />
						</g>
						<text x="128" y="514" font-family="IBM Plex Mono, monospace" font-size="12" letter-spacing="1.2" fill="#282C2B">SECURITY &amp; COMPLIANCE</text>
						<text x="128" y="531" font-family="IBM Plex Mono, monospace" font-size="10.5" fill="#5C5A52">iso/iec 27001:2022</text>
					</g>

					<!-- Figure caption -->
					<text
						x="62"
						y="584"
						font-family="IBM Plex Mono, monospace"
						font-size="10.5"
						font-style="italic"
						fill="#5C5A52"
					>
						fig. 01 — the platforms I keep running
					</text>
				</svg>
			</div>
		</div>

		<!-- Supporting statement strip -->
		<div
			class="mt-14 flex items-center gap-5 border-t border-sand pt-6 sm:gap-8"
			use:reveal={{ delay: 200 }}
		>
			<span class="font-serif text-xl text-charcoal italic sm:text-2xl">Secure.</span>
			<span class="h-px flex-1 bg-sand" aria-hidden="true"></span>
			<span class="font-serif text-xl text-charcoal italic sm:text-2xl">Open.</span>
			<span class="h-px flex-1 bg-sand" aria-hidden="true"></span>
			<span class="font-serif text-xl text-charcoal italic sm:text-2xl">Adaptable.</span>
		</div>
	</div>
</section>

<style>
	.draw {
		stroke-dasharray: 1;
		stroke-dashoffset: 1;
		animation: draw 1.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
	}

	@keyframes draw {
		to {
			stroke-dashoffset: 0;
		}
	}

	.fade-in {
		opacity: 0;
		animation: fadein 0.9s ease-out forwards;
	}

	@keyframes fadein {
		to {
			opacity: 1;
		}
	}

	.spin-slow {
		animation: spin 28s linear 3;
		transform-origin: 84px 252px;
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}
</style>
