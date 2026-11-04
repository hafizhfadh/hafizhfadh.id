<script lang="ts">
	import { verifiedMetrics } from '#lib/data/metrics';
	import Badge from '../ui/Badge.svelte';
	import { ShieldCheck, ArrowDownRight, Database, Users } from 'lucide-svelte';
</script>

<section id="impact" class="py-20 md:py-32 border-b border-slate-800/80 bg-[#0B0D13] relative">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
		<!-- Section Header -->
		<div class="max-w-3xl space-y-4">
			<Badge variant="emerald">AUDITED TRACK RECORD</Badge>
			<h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-white">
				Proven Operational & Engineering Impact.
			</h2>
			<p class="text-base sm:text-lg text-slate-300 leading-relaxed">
				Engineering credibility is earned through concrete production numbers. Each metric below represents verified, real-world operational outcomes achieved in high-stakes environments.
			</p>
		</div>

		<!-- 4 Priority Metrics Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			{#each verifiedMetrics as metric}
				<div
					class="p-8 rounded-2xl bg-[#111520] border border-slate-800 hover:border-slate-700 transition-all duration-200 space-y-5 relative overflow-hidden"
				>
					<!-- Top tag & context -->
					<div class="flex items-center justify-between border-b border-slate-800/80 pb-4">
						<span class="text-xs font-mono font-semibold text-emerald-400 tracking-wider">
							{metric.badge}
						</span>
						<span class="text-xs font-mono text-slate-400">
							{metric.organization}
						</span>
					</div>

					<!-- Metric Value Display -->
					<div class="space-y-1">
						<div class="text-4xl sm:text-5xl font-mono font-bold text-white tracking-tight flex items-baseline gap-2">
							<span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
								{metric.value}
							</span>
						</div>
						<h3 class="text-base sm:text-lg font-bold text-slate-100 pt-1">
							{metric.label}
						</h3>
					</div>

					<!-- Context & Attribution -->
					<div class="p-3.5 rounded-lg bg-slate-900/80 border border-slate-800/80 space-y-1">
						<span class="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
							ROLE: {metric.role}
						</span>
						<p class="text-xs text-slate-300 font-sans">
							{metric.context}
						</p>
					</div>

					<!-- Engineering Specifics -->
					<p class="text-xs sm:text-sm text-slate-400 leading-relaxed">
						{metric.details}
					</p>
				</div>
			{/each}
		</div>

		<!-- Integrity note -->
		<div class="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 flex items-center justify-between flex-wrap gap-4 text-xs font-mono text-slate-400">
			<div class="flex items-center gap-2">
				<ShieldCheck class="w-4 h-4 text-emerald-400 shrink-0" />
				<span>VERIFIABLE PERFORMANCE: All claims are derived directly from documented production employment and consulting history.</span>
			</div>
			<span class="text-slate-400">NO HYPERBOLE // NO FABRICATION</span>
		</div>
	</div>
</section>
