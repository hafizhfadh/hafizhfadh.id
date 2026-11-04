<script lang="ts">
	import { profile } from '#lib/data/profile';
	import { reveal } from '#lib/actions/reveal';
	import { ArrowRight } from 'lucide-svelte';
</script>

<section class="border-y border-sand/70 bg-cream py-20 sm:py-28">
	<div class="mx-auto max-w-6xl px-5 sm:px-8">
		<div class="grid gap-12 lg:grid-cols-12 lg:gap-16">
			<!-- Left: the standing note -->
			<div class="lg:col-span-4" use:reveal>
				<h2 class="font-serif text-[clamp(2rem,3.4vw,2.9rem)] leading-[1.05] tracking-[-0.01em] text-charcoal">
					A note on<br />how I work.
				</h2>
				<div class="mt-6 flex items-center gap-3">
					<span class="h-px w-10 bg-clay" aria-hidden="true"></span>
					<span class="font-mono text-xs text-inkmuted">{profile.name}, principal engineer</span>
				</div>
			</div>

			<!-- Right: the letter itself -->
			<div class="space-y-6 text-[17px] leading-relaxed text-inkmuted lg:col-span-7 lg:col-start-6" use:reveal={{ delay: 120 }}>
				<p>
					Seven years of production systems have taught me one thing: the best engineering decision
					is rarely the most impressive one. It's the one that fits the organization — its people,
					its constraints, its budget — and still holds up five years from now.
				</p>
				<p>
					I work as an independent partner, which means you get me: in your codebase, in your
					database, in the room when it matters. I don't arrive with a predetermined stack or a
					slide deck of best practices. I arrive with questions — and the answers come from your
					systems, your telemetry, and your team.
				</p>

				<blockquote class="mt-8 border-l border-sanddeep py-1 pl-6 sm:pl-8">
					<p class="font-serif text-[clamp(1.35rem,2.4vw,1.75rem)] leading-snug text-charcoal italic">
						“{profile.approachStatement}”
					</p>
				</blockquote>

				<a
					href="/about"
					class="group mt-8 inline-flex items-center gap-2 text-[15px] font-semibold text-clay transition-colors hover:text-claydark"
				>
					More about how I work
					<ArrowRight class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
				</a>
			</div>
		</div>
	</div>
</section>
