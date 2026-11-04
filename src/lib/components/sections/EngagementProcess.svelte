<script lang="ts">
	import { engagementProcess } from '#lib/data/engagement';
	import Badge from '../ui/Badge.svelte';
	import Button from '../ui/Button.svelte';
	import { ArrowRight, CheckCircle2, MessageSquareCode } from 'lucide-svelte';
</script>

<section id="process" class="py-20 md:py-32 border-b border-slate-800/80 bg-[#0B0D13] relative">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
		<!-- Section Header -->
		<div class="max-w-3xl space-y-4">
			<Badge variant="emerald">COLLABORATIVE METHODOLOGY</Badge>
			<h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-white">
				Engagement Philosophy & Discovery Process.
			</h2>
			<p class="text-base sm:text-lg text-slate-300 leading-relaxed">
				Serious engineering work deserves a serious conversation. Before discussing commercial terms, I evaluate your organization, technical environment, constraints, and the challenges you need to solve.
			</p>
		</div>

		<!-- Prominent Philosophy Quote Banner -->
		<div class="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-[#111520] to-slate-900 border border-slate-800 relative overflow-hidden">
			<div class="max-w-3xl space-y-3">
				<span class="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
					COMMERCIAL FOUNDATION
				</span>
				<h3 class="text-xl sm:text-2xl font-bold text-white tracking-tight">
					"Every engineering engagement starts with understanding the problem, not quoting a price."
				</h3>
				<p class="text-sm text-slate-300 leading-relaxed">
					I do not sell prepackaged hourly blocks or generic IT services. Pricing is determined collaboratively after technical discovery confirms scope, architectural stakes, operational responsibilities, and expected outcomes.
				</p>
			</div>
		</div>

		<!-- 5-Step Process Timeline / Cards -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each engagementProcess as step}
				<div
					class="p-7 rounded-2xl bg-[#111520] border border-slate-800 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between space-y-6"
				>
					<div class="space-y-4">
						<div class="flex items-center justify-between border-b border-slate-800 pb-3 font-mono text-xs">
							<span class="text-emerald-400 font-bold">{step.step}</span>
							<span class="text-slate-500 font-mono">PHASE {step.number}</span>
						</div>

						<h3 class="text-xl font-bold text-white tracking-tight">
							{step.title}
						</h3>

						<p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
							{step.summary}
						</p>

						<!-- Activities -->
						<div class="space-y-2 pt-2">
							<span class="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
								CORE ACTIVITIES:
							</span>
							<ul class="space-y-1.5 text-xs text-slate-400">
								{#each step.activities as act}
									<li class="flex items-start gap-2">
										<span class="text-emerald-400 font-mono mt-0.5">&gt;</span>
										<span>{act}</span>
									</li>
								{/each}
							</ul>
						</div>
					</div>

					<!-- Deliverable -->
					<div class="pt-4 border-t border-slate-800/80">
						<span class="text-[11px] font-mono text-slate-500 uppercase block">OUTCOME / DELIVERABLE:</span>
						<p class="text-xs font-mono text-emerald-400 font-medium pt-1">
							{step.deliverable}
						</p>
					</div>
				</div>
			{/each}

			<!-- Final Callout Card -->
			<div
				class="p-7 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 flex flex-col justify-between space-y-6"
			>
				<div class="space-y-4">
					<div class="flex items-center gap-2 text-emerald-400">
						<MessageSquareCode class="w-5 h-5" />
						<span class="text-xs font-mono font-bold uppercase">NEXT STEP</span>
					</div>

					<h3 class="text-xl font-bold text-white tracking-tight">
						Ready to begin stage 01?
					</h3>

					<p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
						Reach out with a summary of your organization and technical challenge. If there is mutual alignment, we schedule a 30-minute discovery conversation.
					</p>
				</div>

				<div class="pt-4 border-t border-emerald-500/20">
					<Button href="#contact" variant="primary" size="md" class="w-full justify-center">
						Initiate Stage 01
						<ArrowRight class="w-4 h-4" />
					</Button>
				</div>
			</div>
		</div>
	</div>
</section>
