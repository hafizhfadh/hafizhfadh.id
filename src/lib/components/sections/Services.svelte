<script lang="ts">
	import { services } from '#lib/data/services';
	import Button from '../ui/Button.svelte';
	import { CheckCircle2, ArrowUpRight, Compass, Settings, Code2 } from 'lucide-svelte';

	const serviceIcons = {
		'forward-deployed': Compass,
		'managed-platforms': Settings,
		'custom-applications': Code2
	};
</script>

<section id="services" class="py-20 md:py-32 border-b border-slate-800/80 bg-[#0B0D13]">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
		<!-- Section Heading without eyebrow kicker -->
		<div class="max-w-3xl space-y-4">
			<h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
				Services & Engineering Engagements.
			</h2>
			<p class="text-base sm:text-lg text-slate-300 leading-relaxed">
				Positioned as an independent engineering partner rather than a transactional vendor. Engagements are tailored through structured technical discovery rather than prepackaged pricing tiers.
			</p>
		</div>

		<!-- Service Pillars with Distinctive Architectural Compositions -->
		<div class="space-y-12">
			{#each services as service}
				{@const IconComponent = serviceIcons[service.id as keyof typeof serviceIcons] || Compass}
				<div
					class="rounded-2xl border border-slate-800 bg-[#111520] p-6 sm:p-10 transition-colors"
				>
					<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
						<!-- Left 5 cols: Metadata, title, quote, outcomes -->
						<div class="lg:col-span-5 space-y-6">
							<div class="flex items-center gap-3">
								<div class="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-emerald-400">
									<IconComponent class="w-5 h-5" />
								</div>
								<span class="text-xs font-mono text-emerald-400 tracking-wider">
									{service.tag}
								</span>
							</div>

							<div class="space-y-3">
								<span class="text-xs font-mono text-slate-500">PILLAR // {service.number}</span>
								<h3 class="text-2xl sm:text-3xl font-bold text-white tracking-tight">
									{service.title}
								</h3>
								<p class="text-sm sm:text-base text-slate-300 leading-relaxed">
									{service.summary}
								</p>
							</div>

							<!-- Highlight Quote without thick colored border-left -->
							<blockquote class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-slate-200 italic leading-relaxed">
								"{service.quote}"
							</blockquote>

							<!-- Business Outcomes -->
							<div class="space-y-2.5 pt-2">
								<h4 class="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider">
									Key Business Outcomes
								</h4>
								<ul class="space-y-2 text-xs sm:text-sm text-slate-300">
									{#each service.businessOutcomes as outcome}
										<li class="flex items-start gap-2">
											<CheckCircle2 class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
											<span>{outcome}</span>
										</li>
									{/each}
								</ul>
							</div>
						</div>

						<!-- Right 7 cols: Capabilities, engagement example, tech stack -->
						<div class="lg:col-span-7 flex flex-col justify-between space-y-8 lg:border-l lg:border-slate-800 lg:pl-10">
							<!-- Capabilities list -->
							<div class="space-y-3">
								<h4 class="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider">
									Core Capabilities & Execution Areas
								</h4>
								<div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
									{#each service.capabilities as cap}
										<div class="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 text-xs text-slate-300 flex items-start gap-2">
											<span class="text-emerald-400 font-mono mt-0.5">&gt;</span>
											<span>{cap}</span>
										</div>
									{/each}
								</div>
							</div>

							<!-- Engagement Example & Technologies -->
							<div class="space-y-4 pt-4 border-t border-slate-800">
								<div class="space-y-1.5">
									<h4 class="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider">
										Typical Engagement Scenario
									</h4>
									<p class="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
										{service.engagementExample}
									</p>
								</div>

								<div class="flex flex-wrap items-center gap-2 pt-2">
									<span class="text-xs font-mono text-slate-500 mr-1">STACK:</span>
									{#each service.technologies as tech}
										<span class="px-2 py-0.5 text-xs font-mono rounded bg-slate-800/80 text-slate-300 border border-slate-700/60">
											{tech}
										</span>
									{/each}
								</div>
							</div>

							<!-- Action -->
							<div class="pt-2">
								<Button href="#contact" variant="outline" size="sm">
									Discuss This Engagement Model
									<ArrowUpRight class="w-3.5 h-3.5 text-slate-400" />
								</Button>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
