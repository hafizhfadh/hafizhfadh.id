<script lang="ts">
	import { profile } from '#lib/data/profile';
	import Button from '../ui/Button.svelte';
	import { ArrowUpRight, Terminal, Database, ShieldCheck, Activity, Server, Cpu } from 'lucide-svelte';
</script>

<section class="relative pt-12 pb-20 md:pt-20 md:pb-28 border-b border-slate-800/80 bg-[#0B0D13]">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
			<!-- Left column: Editorial Value Proposition -->
			<div class="lg:col-span-7 space-y-7">
				<div class="space-y-4">
					<h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]">
						Engineering Beyond <br class="hidden sm:inline" />
						<span class="text-emerald-400">Infrastructure.</span>
					</h1>

					<p class="text-sm sm:text-base font-mono text-emerald-400 tracking-wider uppercase font-semibold">
						{profile.supporting}
					</p>
				</div>

				<p class="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
					{profile.bio}
				</p>

				<p class="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed max-w-2xl bg-[#111520] p-4 rounded-xl border border-slate-800">
					"{profile.approachStatement}"
				</p>

				<!-- CTAs -->
				<div class="flex flex-wrap items-center gap-4 pt-2">
					<Button href="#contact" variant="primary" size="lg">
						Start a Professional Conversation
						<ArrowUpRight class="w-4 h-4" />
					</Button>

					<Button href="#impact" variant="outline" size="lg">
						Explore Verified Impact
					</Button>
				</div>

				<!-- Telemetry Status Line -->
				<div class="pt-4 flex flex-wrap items-center gap-6 text-xs font-mono text-slate-400">
					<div class="flex items-center gap-2">
						<span class="w-2 h-2 rounded-full bg-emerald-400"></span>
						<span>DIRECT PRINCIPAL CONSULTATION</span>
					</div>
					<div class="flex items-center gap-2">
						<span class="text-slate-500">•</span>
						<span>DEPOK, INDONESIA</span>
					</div>
					<div class="flex items-center gap-2">
						<span class="text-slate-500">•</span>
						<span>ENTERPRISE & GROWTH ENGAGEMENTS</span>
					</div>
				</div>
			</div>

			<!-- Right column: Technical Architecture Blueprint (Authentic System Topology) -->
			<div class="lg:col-span-5">
				<div class="rounded-2xl border border-slate-800 bg-[#111520] p-6 space-y-5">
					<div class="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono text-slate-400">
						<div class="flex items-center gap-2">
							<Terminal class="w-4 h-4 text-emerald-400" />
							<span class="text-slate-200 font-semibold">PLATFORM_TOPOLOGY.SPEC</span>
						</div>
						<span class="text-emerald-400 font-mono text-xs">
							STATUS: OPTIMIZED
						</span>
					</div>

					<!-- Topology Architecture Nodes -->
					<div class="space-y-3 font-mono text-xs">
						<!-- Node 1: Edge Ingress -->
						<div class="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
							<div class="flex items-center gap-3">
								<Cpu class="w-4 h-4 text-cyan-400 shrink-0" />
								<div>
									<div class="text-slate-200 font-semibold">EDGE INGRESS & ROUTING</div>
									<div class="text-slate-400 text-xs font-sans">Cloudflare Workers // Sub-millisecond latency</div>
								</div>
							</div>
							<span class="text-xs text-slate-400 font-mono">GLOBAL</span>
						</div>

						<!-- Connector line -->
						<div class="h-3 border-l border-dashed border-slate-700 ml-6"></div>

						<!-- Node 2: Core Data Cluster -->
						<div class="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
							<div class="flex items-center gap-3">
								<Database class="w-4 h-4 text-emerald-400 shrink-0" />
								<div>
									<div class="text-slate-200 font-semibold">CORE DATABASE ENGINES</div>
									<div class="text-slate-400 text-xs font-sans">1.6 TB PPOB Telco DB // &le; 500ms query targets</div>
								</div>
							</div>
							<span class="text-xs text-emerald-400 font-mono font-bold">-70% TCO</span>
						</div>

						<!-- Connector line -->
						<div class="h-3 border-l border-dashed border-slate-700 ml-6"></div>

						<!-- Node 3: Observability Plane -->
						<div class="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
							<div class="flex items-center gap-3">
								<Activity class="w-4 h-4 text-amber-400 shrink-0" />
								<div>
									<div class="text-slate-200 font-semibold">OBSERVABILITY & MONITORING</div>
									<div class="text-slate-400 text-xs font-sans">MonIT platform + Grafana telemetry dashboards</div>
								</div>
							</div>
							<span class="text-xs text-slate-400 font-mono">REAL-TIME</span>
						</div>

						<!-- Connector line -->
						<div class="h-3 border-l border-dashed border-slate-700 ml-6"></div>

						<!-- Node 4: Security Boundary -->
						<div class="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
							<div class="flex items-center gap-3">
								<ShieldCheck class="w-4 h-4 text-emerald-400 shrink-0" />
								<div>
									<div class="text-slate-200 font-semibold">COMPLIANCE & THREAT DETECTION</div>
									<div class="text-slate-400 text-xs font-sans">ISO/IEC 27001:2022 technical lead // SIEM platform</div>
								</div>
							</div>
							<span class="text-xs text-slate-400 font-mono">AUDITED</span>
						</div>
					</div>

					<!-- Bottom telemetry note -->
					<div class="pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-500">
						<span>ARCHITECTURE: OPEN-SOURCE & SECURE</span>
						<span class="text-emerald-400">PRINCIPAL LED</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
