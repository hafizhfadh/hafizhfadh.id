<script lang="ts">
	import { Layers, ShieldCheck, TrendingDown, Cpu } from 'lucide-svelte';

	const differentiators = [
		{
			id: 'open-source',
			icon: Layers,
			tag: 'VENDOR INDEPENDENCE',
			title: 'Open-Source Adaptability',
			lead: 'Avoid vendor lock-in through proven, self-hosted technologies without dogmatic replacement.',
			businessImplication:
				'Proprietary cloud locks compound over time into massive recurring balance-sheet liabilities. I help engineering leadership select, deploy, and operationalize battle-tested open-source platforms (PostgreSQL, Linux, Grafana, self-hosted telemetry) that deliver total data ownership and predictable cost curves without sacrificing enterprise stability.'
		},
		{
			id: 'security-minded',
			icon: ShieldCheck,
			tag: 'COMPLIANCE & GOVERNANCE',
			title: 'Security-Minded Engineering',
			lead: 'Rigorous security controls embedded directly into architecture, access patterns, and compliance frameworks.',
			businessImplication:
				'Security cannot be treated as an afterthought or a last-minute audit checklist. Drawing from hands-on leadership in ISO/IEC 27001:2022 implementations and SIEM threat monitoring deployments, every database connection, network boundary, and script is architected under the principle of least privilege.'
		},
		{
			id: 'efficiency',
			icon: TrendingDown,
			tag: 'TCO & LATENCY',
			title: 'Infrastructure & Cost Efficiency',
			lead: 'Tuning execution plans, indexes, and configurations before throwing expensive hardware at bottlenecks.',
			businessImplication:
				'The most common response to slow queries or cloud cost escalation is over-provisioning compute and storage. By diagnosing EXPLAIN ANALYZE execution plans, implementing B-tree, BRIN, and GIN index strategies, and tuning vacuum parameters, I have repeatedly reduced monthly cloud expenditures by 33% to 70% while improving latency.'
		},
		{
			id: 'end-to-end',
			icon: Cpu,
			tag: 'HOLISTIC CRAFT',
			title: 'End-to-End Execution',
			lead: 'From low-level database tuning to full-stack internal applications and cross-platform clients.',
			businessImplication:
				'Modern systems cannot be engineered in isolated silos. Understanding how a Flutter mobile app synchronizes offline data, how a backend API executes database transactions, and how Cloudflare edge Workers route requests ensures every architectural layer reinforces overall system reliability and developer ergonomics.'
		}
	];
</script>

<section id="about" class="py-20 md:py-28 border-b border-slate-800/80 bg-[#0B0D13]">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
			<!-- Left Column: Editorial Thesis -->
			<div class="lg:col-span-5 space-y-5 sticky top-24">
				<h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
					Engineering Designed for Business Reality.
				</h2>
				<p class="text-base text-slate-300 leading-relaxed">
					Technology choices should be governed by operational maturity, security posture, long-term maintainability, and total cost of ownership—not industry hype cycles.
				</p>
				<p class="text-sm text-slate-400 leading-relaxed">
					I work directly with technical leadership to evaluate existing constraints and implement high-efficiency, vendor-independent architectures that scale with business goals.
				</p>
				<div class="pt-4 border-t border-slate-800 text-xs font-mono text-slate-400 space-y-2">
					<div class="flex items-center gap-2">
						<span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
						<span>NO VENDOR DOGMATISM</span>
					</div>
					<div class="flex items-center gap-2">
						<span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
						<span>AUDITED COST GOVERNANCE</span>
					</div>
					<div class="flex items-center gap-2">
						<span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
						<span>MEASURABLE LATENCY TARGETS</span>
					</div>
				</div>
			</div>

			<!-- Right Column: Editorial Structured Dimension Ledger (Not generic cards) -->
			<div class="lg:col-span-7 space-y-8 divide-y divide-slate-800">
				{#each differentiators as item, index}
					<div class="pt-8 first:pt-0 space-y-3">
						<div class="flex items-center justify-between text-xs font-mono">
							<span class="text-emerald-400 font-semibold">{item.tag}</span>
							<span class="text-slate-500">DIMENSION 0{index + 1}</span>
						</div>

						<h3 class="text-xl sm:text-2xl font-bold text-white tracking-tight">
							{item.title}
						</h3>

						<p class="text-sm font-medium text-emerald-300/90 leading-snug">
							{item.lead}
						</p>

						<p class="text-sm text-slate-300 leading-relaxed pt-1">
							{item.businessImplication}
						</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
