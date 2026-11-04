<script lang="ts">
	import { profile } from '#lib/data/profile';
	import { ArrowUpRight, Shield, Terminal, Database } from 'lucide-svelte';

	const currentYear = new Date().getFullYear();
</script>

<footer class="border-t border-slate-800 bg-[#0B0D13] relative overflow-hidden">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
		<div class="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-slate-800/80">
			<!-- Col 1: Identity & Positioning -->
			<div class="md:col-span-6 space-y-4">
				<div class="flex items-center gap-2">
					<span class="font-mono text-lg font-bold text-slate-100">
						{profile.name}<span class="text-emerald-400">_</span>
					</span>
					<span class="text-xs font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
						INFRASTRUCTURE PARTNER
					</span>
				</div>

				<p class="text-sm text-slate-400 max-w-md leading-relaxed">
					Independent Infrastructure & Platform Engineering Partner. Helping organizations build, operate, and evolve secure, scalable platforms through open-source adoption, database optimization, and custom software.
				</p>

				<div class="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 pt-2">
					<span class="inline-flex items-center gap-1.5 text-slate-400">
						<span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
						{profile.location}
					</span>
					<span>•</span>
					<span>SECURE. OPEN. ADAPTABLE.</span>
				</div>
			</div>

			<!-- Col 2: Navigation -->
			<div class="md:col-span-3 space-y-3">
				<h3 class="text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider">
					Navigation
				</h3>
				<ul class="space-y-2 text-sm">
					<li>
						<a href="#services" class="text-slate-400 hover:text-emerald-400 transition-colors">
							Services & Capabilities
						</a>
					</li>
					<li>
						<a href="#impact" class="text-slate-400 hover:text-emerald-400 transition-colors">
							Verified Impact Metrics
						</a>
					</li>
					<li>
						<a href="#experience" class="text-slate-400 hover:text-emerald-400 transition-colors">
							Professional Experience
						</a>
					</li>
					<li>
						<a href="#philosophy" class="text-slate-400 hover:text-emerald-400 transition-colors">
							Engineering Principles
						</a>
					</li>
					<li>
						<a href="#ecosystem" class="text-slate-400 hover:text-emerald-400 transition-colors">
							Technology Ecosystem
						</a>
					</li>
					<li>
						<a href="#process" class="text-slate-400 hover:text-emerald-400 transition-colors">
							Engagement Process
						</a>
					</li>
				</ul>
			</div>

			<!-- Col 3: Direct Coordinates -->
			<div class="md:col-span-3 space-y-3">
				<h3 class="text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider">
					Professional Coordinates
				</h3>
				<ul class="space-y-2.5 text-sm">
					<li>
						<a
							href="mailto:{profile.email}"
							class="inline-flex items-center gap-1.5 text-slate-400 hover:text-emerald-400 transition-colors group"
						>
							<span>{profile.email}</span>
							<ArrowUpRight class="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 transition-colors" />
						</a>
					</li>
					<li>
						<a
							href={profile.linkedin}
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center gap-1.5 text-slate-400 hover:text-emerald-400 transition-colors group"
						>
							<span>LinkedIn Profile</span>
							<ArrowUpRight class="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 transition-colors" />
						</a>
					</li>
					<li>
						<a
							href="#contact"
							class="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-mono text-xs"
						>
							<span>Request Discovery Interview →</span>
						</a>
					</li>
				</ul>
			</div>
		</div>

		<!-- Bottom bar -->
		<div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
			<p>© {currentYear} {profile.name}. All rights reserved.</p>
			<p class="flex items-center gap-4">
				<span>Designed for production reliability</span>
				<span>•</span>
				<span>Cloudflare Edge Deployment</span>
			</p>
		</div>
	</div>
</footer>
