<script lang="ts">
	import { techEcosystem } from '#lib/data/ecosystem';
	import Badge from '../ui/Badge.svelte';
	import { Database, Cloud, Activity, ShieldCheck, Terminal } from 'lucide-svelte';

	const categoryIcons: Record<string, typeof Database> = {
		'Database Engineering': Database,
		'Cloud & Infrastructure': Cloud,
		'DevOps & Observability': Activity,
		'Security & Compliance': ShieldCheck,
		'Software Engineering': Terminal
	};
</script>

<section id="ecosystem" class="py-20 md:py-32 border-b border-slate-800/80 relative">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
		<!-- Section Header -->
		<div class="max-w-3xl space-y-4">
			<Badge variant="cyan">PRODUCTION ECOSYSTEM</Badge>
			<h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-white">
				Verified Technology Ecosystem.
			</h2>
			<p class="text-base sm:text-lg text-slate-300 leading-relaxed">
				Structured technical competencies proven through production deployments, mission-critical database administration, and audited compliance implementations.
			</p>
		</div>

		<!-- Categories Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each techEcosystem as item}
				{@const IconComponent = categoryIcons[item.category] || Database}
				<div
					class="p-7 rounded-2xl bg-[#111520] border border-slate-800 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between space-y-6"
				>
					<div class="space-y-4">
						<div class="flex items-center justify-between border-b border-slate-800 pb-4">
							<div class="flex items-center gap-2.5">
								<div class="p-2 rounded-lg bg-slate-900 border border-slate-800 text-emerald-400">
									<IconComponent class="w-4 h-4" />
								</div>
								<h3 class="text-base font-bold text-white tracking-tight">
									{item.category}
								</h3>
							</div>
						</div>

						<span class="text-[11px] font-mono text-emerald-400/90 tracking-wider">
							{item.tag}
						</span>

						<p class="text-xs text-slate-400 leading-relaxed">
							{item.description}
						</p>
					</div>

					<!-- Skills Pill Cloud -->
					<div class="pt-4 border-t border-slate-800/80">
						<div class="flex flex-wrap gap-2">
							{#each item.skills as skill}
								<span
									class="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-emerald-500/40 hover:text-emerald-300 transition-colors"
								>
									{skill}
								</span>
							{/each}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
