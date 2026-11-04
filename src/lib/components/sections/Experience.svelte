<script lang="ts">
	import { experiences, education, certifications } from '#lib/data/experience';
	import Badge from '../ui/Badge.svelte';
	import { Briefcase, GraduationCap, Award, Calendar, CheckCircle2 } from 'lucide-svelte';
</script>

<section id="experience" class="py-20 md:py-32 border-b border-slate-800/80 relative">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
		<!-- Section Header -->
		<div class="max-w-3xl space-y-4">
			<Badge variant="cyan">PRODUCTION HISTORY</Badge>
			<h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-white">
				Professional Experience & Engineering Leadership.
			</h2>
			<p class="text-base sm:text-lg text-slate-300 leading-relaxed">
				A track record supporting business-critical systems across telecommunications, cloud infrastructure, payment processing, and high-concurrency mobile environments.
			</p>
		</div>

		<!-- Experience Timeline / Editorial Cards -->
		<div class="space-y-8">
			{#each experiences as exp}
				<div
					class="p-6 sm:p-8 rounded-2xl bg-[#111520] border border-slate-800 hover:border-slate-700 transition-all duration-200 relative overflow-hidden space-y-6"
				>
					<!-- Header Row -->
					<div class="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-800/80 pb-5">
						<div class="space-y-1">
							<div class="flex items-center gap-2">
								<span class="text-xs font-mono text-emerald-400 font-semibold uppercase">
									{exp.role}
								</span>
								<span class="text-slate-500">•</span>
								<h3 class="text-xl sm:text-2xl font-bold text-white tracking-tight">
									{exp.organization}
								</h3>
							</div>
							<p class="text-xs sm:text-sm font-mono text-slate-400">
								{exp.period}
							</p>
						</div>

						<!-- Highlight banner -->
						<div class="px-3.5 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-mono text-xs font-medium self-start md:self-auto">
							{exp.highlight}
						</div>
					</div>

					<!-- Achievements list -->
					<div class="space-y-3">
						<h4 class="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider">
							Key Engineering Contributions
						</h4>
						<ul class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
							{#each exp.achievements as item}
								<li class="flex items-start gap-2.5 p-3 rounded-lg bg-slate-900/60 border border-slate-800/60">
									<CheckCircle2 class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
									<span class="leading-relaxed">{item}</span>
								</li>
							{/each}
						</ul>
					</div>

					<!-- Tags -->
					<div class="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800/80">
						<span class="text-xs font-mono text-slate-500 mr-2">DOMAINS:</span>
						{#each exp.tags as tag}
							<span class="px-2.5 py-1 text-xs font-mono rounded bg-slate-800/60 text-slate-300 border border-slate-700/60">
								{tag}
							</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>

		<!-- Education & Certifications Row -->
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
			<!-- Education -->
			<div class="lg:col-span-7 p-7 rounded-2xl bg-[#111520] border border-slate-800 space-y-6">
				<div class="flex items-center gap-2.5 border-b border-slate-800 pb-4">
					<GraduationCap class="w-5 h-5 text-emerald-400" />
					<h3 class="text-lg font-bold text-white tracking-tight">
						Education & Academic Foundation
					</h3>
				</div>

				<div class="space-y-4">
					{#each education as edu}
						<div class="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-1">
							<div class="flex items-center justify-between flex-wrap gap-2">
								<h4 class="text-sm font-semibold text-slate-100">
									{edu.degree}
								</h4>
								<span class="text-xs font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
									{edu.status || edu.period}
								</span>
							</div>
							<p class="text-xs text-slate-400">
								{edu.institution} {edu.period ? `// ${edu.period}` : ''}
							</p>
						</div>
					{/each}
				</div>
			</div>

			<!-- Certifications -->
			<div class="lg:col-span-5 p-7 rounded-2xl bg-[#111520] border border-slate-800 space-y-6">
				<div class="flex items-center gap-2.5 border-b border-slate-800 pb-4">
					<Award class="w-5 h-5 text-cyan-400" />
					<h3 class="text-lg font-bold text-white tracking-tight">
						Certifications & Credentials
					</h3>
				</div>

				<div class="space-y-4">
					{#each certifications as cert}
						<div class="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-1">
							<div class="flex items-center justify-between">
								<h4 class="text-sm font-semibold text-slate-100">
									{cert.name}
								</h4>
							</div>
							<p class="text-xs font-mono text-cyan-400">
								Issuer: {cert.issuer}
							</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
