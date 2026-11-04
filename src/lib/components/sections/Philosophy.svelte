<script lang="ts">
	import { principles } from '#lib/data/philosophy';
	import Badge from '../ui/Badge.svelte';
	import { Lightbulb, Check } from 'lucide-svelte';
</script>

<section id="philosophy" class="py-20 md:py-32 border-b border-slate-800/80 bg-[#0B0D13] relative">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
		<!-- Section Header -->
		<div class="max-w-3xl space-y-4">
			<Badge variant="emerald">CORE ENGINEERING DOGMA</Badge>
			<h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-white">
				Engineering Principles & Decision Framework.
			</h2>
			<p class="text-base sm:text-lg text-slate-300 leading-relaxed">
				How architectural, database, and infrastructure choices are evaluated. Every principle directly translates into reduced risk, higher reliability, and defensible ROI.
			</p>
		</div>

		<!-- 6 Principles Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each principles as p}
				<div
					class="p-7 rounded-2xl bg-[#111520] border border-slate-800 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between space-y-5"
				>
					<div class="space-y-4">
						<div class="flex items-center justify-between border-b border-slate-800 pb-3">
							<span class="text-xs font-mono font-bold text-emerald-400">
								PRINCIPLE // {p.number}
							</span>
							<span class="w-2 h-2 rounded-full bg-emerald-400"></span>
						</div>

						<h3 class="text-lg font-bold text-white tracking-tight">
							{p.title}
						</h3>

						<p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
							{p.summary}
						</p>
					</div>

					<!-- Real-world Application -->
					<div class="pt-4 border-t border-slate-800/80 space-y-1.5">
						<span class="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
							IN PRACTICE:
						</span>
						<p class="text-xs text-slate-400 font-mono leading-relaxed">
							{p.application}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
