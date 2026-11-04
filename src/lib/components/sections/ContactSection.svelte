<script lang="ts">
	import { profile } from '#lib/data/profile';
	import Badge from '../ui/Badge.svelte';
	import Button from '../ui/Button.svelte';
	import LinkedInIcon from '../ui/LinkedInIcon.svelte';
	import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Copy, ArrowUpRight } from 'lucide-svelte';

	let fullName = $state('');
	let workEmail = $state('');
	let organization = $state('');
	let jobTitle = $state('');
	let serviceInterest = $state('Forward Deployed Engineering');
	let challengeDescription = $state('');
	let techStack = $state('');

	let isSubmitted = $state(false);
	let copied = $state(false);
	let errorMessage = $state('');

	const servicesOptions = [
		'Forward Deployed Engineering',
		'Managed Platforms & Infrastructure',
		'Custom Applications & Integration',
		'Infrastructure Cost Optimization Audit',
		'Database Performance / Query Tuning'
	];

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault();

		if (!fullName.trim() || !workEmail.trim() || !organization.trim() || !challengeDescription.trim()) {
			errorMessage = 'Please complete all required fields (Name, Work Email, Organization, and Challenge Description).';
			return;
		}

		errorMessage = '';
		isSubmitted = true;
	}

	function resetForm() {
		isSubmitted = false;
	}

	function getMailtoUrl(): string {
		const subject = encodeURIComponent(`Professional Engineering Inquiry: ${organization} / ${fullName}`);
		const body = encodeURIComponent(
			`Name: ${fullName}\n` +
				`Role: ${jobTitle || 'N/A'}\n` +
				`Organization: ${organization}\n` +
				`Work Email: ${workEmail}\n` +
				`Service Area: ${serviceInterest}\n` +
				`Current Stack: ${techStack || 'Not specified'}\n\n` +
				`Challenge Summary:\n${challengeDescription}\n`
		);
		return `mailto:${profile.email}?subject=${subject}&body=${body}`;
	}

	async function copyInquiryData() {
		const text =
			`Name: ${fullName}\n` +
			`Role: ${jobTitle || 'N/A'}\n` +
			`Organization: ${organization}\n` +
			`Work Email: ${workEmail}\n` +
			`Service Area: ${serviceInterest}\n` +
			`Current Stack: ${techStack || 'Not specified'}\n\n` +
			`Challenge Summary:\n${challengeDescription}\n`;

		try {
			await navigator.clipboard.writeText(text);
			copied = true;
			setTimeout(() => {
				copied = false;
			}, 3000);
		} catch (err) {
			console.error('Failed to copy', err);
		}
	}
</script>

<section id="contact" class="py-20 md:py-32 relative">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
		<!-- Section Header -->
		<div class="max-w-3xl space-y-4">
			<Badge variant="emerald">PRIMARY CONTACT & DISCOVERY</Badge>
			<h2 class="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
				Have a Technical Challenge Worth Solving?
			</h2>
			<p class="text-base sm:text-lg text-slate-300 leading-relaxed">
				Tell me about your organization, your current technology environment, and the engineering challenges you are facing. Let's start with a professional conversation and determine whether we are a good fit to work together.
			</p>
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
			<!-- Left column: Coordinates & Engagement Standards -->
			<div class="lg:col-span-5 space-y-8">
				<div class="p-7 rounded-2xl bg-[#111520] border border-slate-800 space-y-6">
					<h3 class="text-lg font-bold text-white tracking-tight">
						Direct Communication Coordinates
					</h3>

					<div class="space-y-4 text-sm">
						<a
							href="mailto:{profile.email}"
							class="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/30 text-slate-300 hover:text-white transition-all group"
						>
							<div class="p-2 rounded-lg bg-slate-800 text-emerald-400 group-hover:bg-emerald-500/10">
								<Mail class="w-4 h-4" />
							</div>
							<div class="space-y-0.5">
								<span class="text-[11px] font-mono text-slate-500 uppercase block">PRIMARY EMAIL</span>
								<span class="font-mono text-xs text-slate-200">{profile.email}</span>
							</div>
						</a>

						<a
							href={profile.linkedin}
							target="_blank"
							rel="noopener noreferrer"
							class="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/30 text-slate-300 hover:text-white transition-all group"
						>
							<div class="p-2 rounded-lg bg-slate-800 text-cyan-400 group-hover:bg-cyan-500/10">
								<LinkedInIcon class="w-4 h-4" />
							</div>
							<div class="space-y-0.5">
								<span class="text-[11px] font-mono text-slate-500 uppercase block">PROFESSIONAL NETWORK</span>
								<span class="font-mono text-xs text-slate-200">linkedin.com/in/hafizhfadh</span>
							</div>
						</a>

						<div class="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300">
							<div class="p-2 rounded-lg bg-slate-800 text-slate-400">
								<MapPin class="w-4 h-4" />
							</div>
							<div class="space-y-0.5">
								<span class="text-[11px] font-mono text-slate-500 uppercase block">BASE LOCATION</span>
								<span class="font-mono text-xs text-slate-200">{profile.location}</span>
							</div>
						</div>
					</div>

					<!-- Consultation Standards -->
					<div class="pt-4 border-t border-slate-800/80 space-y-3">
						<h4 class="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider">
							What to Expect in Stage 01
						</h4>
						<ul class="space-y-2 text-xs text-slate-400">
							<li class="flex items-start gap-2">
								<CheckCircle2 class="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
								<span>Direct response from Hafizh within 24–48 business hours.</span>
							</li>
							<li class="flex items-start gap-2">
								<CheckCircle2 class="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
								<span>No aggressive sales calls or unsolicited follow-up sequences.</span>
							</li>
							<li class="flex items-start gap-2">
								<CheckCircle2 class="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
								<span>Mutual confidentiality; standard mutual NDA available upon request.</span>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<!-- Right column: Structured Discovery Form -->
			<div class="lg:col-span-7">
				<div class="p-7 sm:p-10 rounded-2xl bg-[#111520] border border-slate-800 relative shadow-2xl">
					{#if !isSubmitted}
						<form onsubmit={handleSubmit} class="space-y-6">
							<div class="border-b border-slate-800 pb-4">
								<span class="text-xs font-mono text-emerald-400 tracking-wider uppercase font-semibold">
									STAGE 01 // DISCOVERY INTAKE
								</span>
								<h3 class="text-xl font-bold text-white tracking-tight pt-1">
									Structured Engagement Inquiry
								</h3>
							</div>

							{#if errorMessage}
								<div class="p-3.5 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs flex items-center gap-2">
									<AlertCircle class="w-4 h-4 shrink-0" />
									<span>{errorMessage}</span>
								</div>
							{/if}

							<!-- Row 1: Name & Work Email -->
							<div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
								<div class="space-y-1.5">
									<label for="fullName" class="block text-xs font-mono text-slate-300 uppercase tracking-wider">
										Full Name <span class="text-emerald-400">*</span>
									</label>
									<input
										id="fullName"
										type="text"
										bind:value={fullName}
										placeholder="e.g. Alex Morgan"
										class="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700/80 text-sm text-white placeholder-slate-500 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
										required
									/>
								</div>

								<div class="space-y-1.5">
									<label for="workEmail" class="block text-xs font-mono text-slate-300 uppercase tracking-wider">
										Work Email <span class="text-emerald-400">*</span>
									</label>
									<input
										id="workEmail"
										type="email"
										bind:value={workEmail}
										placeholder="alex@company.com"
										class="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700/80 text-sm text-white placeholder-slate-500 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
										required
									/>
								</div>
							</div>

							<!-- Row 2: Organization & Job Title -->
							<div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
								<div class="space-y-1.5">
									<label for="organization" class="block text-xs font-mono text-slate-300 uppercase tracking-wider">
										Organization <span class="text-emerald-400">*</span>
									</label>
									<input
										id="organization"
										type="text"
										bind:value={organization}
										placeholder="Company or Enterprise"
										class="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700/80 text-sm text-white placeholder-slate-500 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
										required
									/>
								</div>

								<div class="space-y-1.5">
									<label for="jobTitle" class="block text-xs font-mono text-slate-300 uppercase tracking-wider">
										Job Title / Role
									</label>
									<input
										id="jobTitle"
										type="text"
										bind:value={jobTitle}
										placeholder="e.g. CTO, Head of Platform"
										class="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700/80 text-sm text-white placeholder-slate-500 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
									/>
								</div>
							</div>

							<!-- Row 3: Service Interest -->
							<div class="space-y-1.5">
								<label for="serviceInterest" class="block text-xs font-mono text-slate-300 uppercase tracking-wider">
									Primary Service Area
								</label>
								<select
									id="serviceInterest"
									bind:value={serviceInterest}
									class="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700/80 text-sm text-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
								>
									{#each servicesOptions as opt}
										<option value={opt} class="bg-slate-900 text-white">{opt}</option>
									{/each}
								</select>
							</div>

							<!-- Row 4: Challenge Description -->
							<div class="space-y-1.5">
								<label for="challengeDescription" class="block text-xs font-mono text-slate-300 uppercase tracking-wider">
									Technical Challenge Summary <span class="text-emerald-400">*</span>
								</label>
								<textarea
									id="challengeDescription"
									rows="4"
									bind:value={challengeDescription}
									placeholder="Describe your current system bottlenecks, cloud cost escalations, database scale challenges, or integration goals..."
									class="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700/80 text-sm text-white placeholder-slate-500 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
									required
								></textarea>
							</div>

							<!-- Row 5: Current Stack (optional) -->
							<div class="space-y-1.5">
								<label for="techStack" class="block text-xs font-mono text-slate-300 uppercase tracking-wider">
									Existing Environment / Technology Stack <span class="text-slate-500 font-normal">(Optional)</span>
								</label>
								<input
									id="techStack"
									type="text"
									bind:value={techStack}
									placeholder="e.g. AWS + PostgreSQL 15 + Kubernetes, or on-premises MySQL"
									class="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700/80 text-sm text-white placeholder-slate-500 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
								/>
							</div>

							<div class="pt-2">
								<Button type="submit" variant="primary" size="lg" class="w-full justify-center">
									Request a Professional Conversation
									<Send class="w-4 h-4" />
								</Button>
								<p class="text-[11px] font-mono text-slate-500 text-center pt-2">
									No pricing packages. Discovery and evaluation precede commercial terms.
								</p>
							</div>
						</form>
					{:else}
						<!-- Post-Submit Structured Confirmation -->
						<div class="space-y-6">
							<div class="flex items-center gap-2 text-emerald-400">
								<CheckCircle2 class="w-6 h-6" />
								<h3 class="text-xl font-bold text-white tracking-tight">
									Inquiry Prepared & Ready for Transmission
								</h3>
							</div>

							<p class="text-sm text-slate-300 leading-relaxed">
								Thank you, <strong class="text-white">{fullName}</strong>. Your inquiry has been structured according to Stage 01 discovery requirements.
							</p>

							<!-- Direct Action Banner -->
							<div class="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-4">
								<div class="flex items-center justify-between">
									<span class="text-xs font-mono text-emerald-400 font-semibold uppercase">
										Direct Dispatch Option
									</span>
									<span class="text-[11px] font-mono text-slate-400">RECIPIENT: {profile.email}</span>
								</div>

								<p class="text-xs text-slate-300 leading-relaxed">
									You can immediately transmit this structured brief to Hafizh via your email client, or copy the formatted text for your internal records.
								</p>

								<div class="flex flex-wrap items-center gap-3">
									<a
										href={getMailtoUrl()}
										class="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs transition-colors"
									>
										Send via Default Email Client
										<ArrowUpRight class="w-3.5 h-3.5" />
									</a>

									<button
										type="button"
										onclick={copyInquiryData}
										class="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-mono text-xs transition-colors"
									>
										<Copy class="w-3.5 h-3.5" />
										<span>{copied ? 'Copied to Clipboard!' : 'Copy Summary'}</span>
									</button>
								</div>
							</div>

							<!-- Edge Configuration Notice -->
							<div class="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 text-xs font-mono text-slate-400 space-y-1.5">
								<span class="text-slate-300 font-semibold uppercase block">
									[SYSTEM NOTE: EDGE WORKER FORM HANDLER]
								</span>
								<p>
									This site runs on Cloudflare Workers edge. For automatic webhook delivery directly to Slack, Discord, or an email service (Resend / Mailgun), provide your endpoint binding in <code class="text-emerald-400 font-bold">wrangler.jsonc</code>.
								</p>
							</div>

							<div class="pt-2">
								<button
									type="button"
									onclick={resetForm}
									class="text-xs font-mono text-slate-400 hover:text-emerald-400 transition-colors"
								>
									← Edit or Submit Another Inquiry
								</button>
							</div>
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
</section>
