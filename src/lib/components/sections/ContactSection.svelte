<script lang="ts">
	import { profile } from '#lib/data/profile';
	import Button from '../ui/Button.svelte';
	import LinkedInIcon from '../ui/LinkedInIcon.svelte';
	import { reveal } from '#lib/actions/reveal';
	import { AlertCircle, ArrowUpRight, Check, Copy } from 'lucide-svelte';

	let fullName = $state('');
	let workEmail = $state('');
	let organization = $state('');
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
		'Something else'
	];

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault();

		if (!fullName.trim() || !workEmail.trim() || !organization.trim() || !challengeDescription.trim()) {
			errorMessage =
				'Almost there — please fill in your name, work email, organization, and a few words about the challenge.';
			return;
		}

		errorMessage = '';
		isSubmitted = true;
	}

	function resetForm() {
		isSubmitted = false;
	}

	function getMailtoUrl(): string {
		const subject = encodeURIComponent(`Engineering conversation: ${organization} / ${fullName}`);
		const body = encodeURIComponent(
			`Name: ${fullName}\n` +
				`Organization: ${organization}\n` +
				`Work Email: ${workEmail}\n` +
				`Relates to: ${serviceInterest}\n` +
				`Current Stack: ${techStack || 'Not specified'}\n\n` +
				`Challenge:\n${challengeDescription}\n`
		);
		return `mailto:${profile.email}?subject=${subject}&body=${body}`;
	}

	async function copyInquiryData() {
		const text =
			`Name: ${fullName}\n` +
			`Organization: ${organization}\n` +
			`Work Email: ${workEmail}\n` +
			`Relates to: ${serviceInterest}\n` +
			`Current Stack: ${techStack || 'Not specified'}\n\n` +
			`Challenge:\n${challengeDescription}\n`;

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

	const expectations = [
		'A reply from me personally within 24–48 business hours.',
		'No sales sequences, no unsolicited follow-ups.',
		'Mutual confidentiality — an NDA is available whenever it helps you speak freely.'
	];
</script>

<section id="contact" class="on-navy bg-navy py-20 text-ivory sm:py-28">
	<div class="mx-auto max-w-6xl px-5 sm:px-8">
		<!-- The invitation -->
		<div class="max-w-3xl" use:reveal>
			<h2 class="font-serif text-[clamp(2.4rem,5vw,4rem)] leading-[1.03] tracking-[-0.015em]">
				Have a technical challenge worth solving?
			</h2>
			<p class="mt-6 max-w-[60ch] text-lg leading-relaxed text-fog">
				Tell me a little about your organization and what you're trying to achieve. We can start
				with a conversation, understand the challenge, and explore whether working together makes
				sense.
			</p>
		</div>

		<div class="mt-14 grid gap-14 lg:grid-cols-12">
			<!-- Direct lines -->
			<div class="lg:col-span-5" use:reveal>
				<div class="space-y-8">
					<div>
						<h3 class="font-mono text-xs lowercase tracking-wide text-ivory/60">prefer email?</h3>
						<a
							href="mailto:{profile.email}"
							class="mt-3 inline-block font-serif text-[clamp(1.5rem,3vw,2.1rem)] leading-tight text-claylight underline decoration-ivory/25 decoration-2 underline-offset-8 transition-colors hover:decoration-claylight"
						>
							{profile.email}
						</a>
					</div>

					<div>
						<h3 class="font-mono text-xs lowercase tracking-wide text-ivory/60">or find me on linkedin</h3>
						<a
							href={profile.linkedin}
							target="_blank"
							rel="noopener noreferrer"
							class="mt-3 inline-flex items-center gap-2 text-[15px] font-semibold text-ivory transition-colors hover:text-claylight"
						>
							<LinkedInIcon class="h-4 w-4" />
							linkedin.com/in/hafizhfadh
							<ArrowUpRight class="h-4 w-4 text-ivory/50" />
						</a>
					</div>

					<p class="font-mono text-xs text-ivory/60">{profile.location} · working with teams worldwide</p>

					<div class="border-t border-ivory/15 pt-8">
						<h3 class="font-mono text-xs lowercase tracking-wide text-ivory/60">what happens next</h3>
						<ul class="mt-4 space-y-3">
							{#each expectations as expectation}
								<li class="flex items-start gap-3 text-sm leading-relaxed text-fog">
									<Check class="mt-0.5 h-4 w-4 shrink-0 text-sage" aria-hidden="true" />
									<span>{expectation}</span>
								</li>
							{/each}
						</ul>
					</div>
				</div>
			</div>

			<!-- The note -->
			<div class="lg:col-span-7" use:reveal={{ delay: 120 }}>
				<div class="rounded-2xl bg-cream p-7 text-charcoal shadow-[0_2px_6px_rgba(15,31,48,0.25),0_24px_60px_-24px_rgba(15,31,48,0.55)] sm:p-9">
					{#if !isSubmitted}
						<form onsubmit={handleSubmit} class="space-y-6">
							{#if errorMessage}
								<div class="flex items-start gap-2.5 rounded-lg border border-terracotta/30 bg-terracotta/10 px-4 py-3 text-sm text-claydark">
									<AlertCircle class="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
									<span>{errorMessage}</span>
								</div>
							{/if}

							<div class="grid gap-6 sm:grid-cols-2">
								<div>
									<label for="fullName" class="block text-sm font-semibold">
										Your name <span class="text-clay" aria-hidden="true">*</span>
									</label>
									<input
										id="fullName"
										type="text"
										bind:value={fullName}
										placeholder="Alex Morgan"
										autocomplete="name"
										class="mt-2 w-full rounded-lg border border-sanddeep bg-ivory px-4 py-3 text-base text-charcoal transition-colors placeholder:text-inkmuted/90 focus:border-clay"
										required
									/>
								</div>

								<div>
									<label for="workEmail" class="block text-sm font-semibold">
										Work email <span class="text-clay" aria-hidden="true">*</span>
									</label>
									<input
										id="workEmail"
										type="email"
										bind:value={workEmail}
										placeholder="alex@company.com"
										autocomplete="email"
										class="mt-2 w-full rounded-lg border border-sanddeep bg-ivory px-4 py-3 text-base text-charcoal transition-colors placeholder:text-inkmuted/90 focus:border-clay"
										required
									/>
								</div>
							</div>

							<div>
								<label for="organization" class="block text-sm font-semibold">
									Organization <span class="text-clay" aria-hidden="true">*</span>
								</label>
								<input
									id="organization"
									type="text"
									bind:value={organization}
									placeholder="Company or team"
									autocomplete="organization"
									class="mt-2 w-full rounded-lg border border-sanddeep bg-ivory px-4 py-3 text-base text-charcoal transition-colors placeholder:text-inkmuted/90 focus:border-clay"
									required
								/>
							</div>

							<fieldset>
								<legend class="font-mono text-xs lowercase tracking-wide text-sagedeep">
									what does this relate to?
								</legend>
								<div class="mt-3 flex flex-wrap gap-2.5">
									{#each servicesOptions as option}
										<label
											class="cursor-pointer rounded-full border px-4 py-2.5 text-sm transition-all duration-200 focus-within:ring-2 focus-within:ring-clay focus-within:ring-offset-2 focus-within:ring-offset-cream {serviceInterest ===
											option
												? 'border-navy bg-navy text-ivory'
												: 'border-sanddeep bg-transparent text-inkmuted hover:border-charcoal/40 hover:text-charcoal'}"
										>
											<input
												type="radio"
												class="sr-only"
												name="serviceInterest"
												value={option}
												bind:group={serviceInterest}
											/>
											{option}
										</label>
									{/each}
								</div>
							</fieldset>

							<div>
								<label for="challengeDescription" class="block text-sm font-semibold">
									What are you trying to solve? <span class="text-clay" aria-hidden="true">*</span>
								</label>
								<textarea
									id="challengeDescription"
									rows="5"
									bind:value={challengeDescription}
									placeholder="A few honest sentences are plenty — the bottleneck, the cloud bill that keeps climbing, the system nobody wants to touch…"
									class="mt-2 w-full resize-y rounded-lg border border-sanddeep bg-ivory px-4 py-3 text-base leading-relaxed text-charcoal transition-colors placeholder:text-inkmuted/90 focus:border-clay"
									required
								></textarea>
							</div>

							<div>
								<label for="techStack" class="block text-sm font-semibold">
									Current stack <span class="font-normal text-inkmuted">(optional, if you know it)</span>
								</label>
								<input
									id="techStack"
									type="text"
									bind:value={techStack}
									placeholder="e.g. AWS + PostgreSQL 15, or on-premises MySQL"
									class="mt-2 w-full rounded-lg border border-sanddeep bg-ivory px-4 py-3 font-mono text-base text-charcoal transition-colors placeholder:text-inkmuted/90 focus:border-clay"
								/>
							</div>

							<div class="pt-1">
								<Button type="submit" variant="primary" size="lg" class="w-full">
									Send — let's start the conversation
								</Button>
								<p class="pt-3 text-center text-xs text-inkmuted">
									No pricing packages, no obligation — understanding comes first.
								</p>
							</div>
						</form>
					{:else}
						<div class="space-y-6">
							<div>
								<h3 class="font-serif text-3xl leading-tight text-charcoal">Your note is ready.</h3>
								<p class="mt-3 text-[15px] leading-relaxed text-inkmuted">
									Thanks, {fullName}. Everything is structured and addressed to
									<span class="font-semibold text-charcoal">{profile.email}</span>. Send it straight
									from your email app — or copy it if you prefer.
								</p>
							</div>

							<div class="flex flex-wrap items-center gap-3">
								<Button href={getMailtoUrl()} variant="primary" size="md">
									Open your email app
									<ArrowUpRight class="h-4 w-4" />
								</Button>
								<Button variant="outline" size="md" onclick={copyInquiryData}>
									<Copy class="h-4 w-4" />
									{copied ? 'Copied — check your clipboard' : 'Copy the note'}
								</Button>
							</div>

							<button
								type="button"
								onclick={resetForm}
								class="text-sm font-semibold text-clay transition-colors hover:text-claydark"
							>
								← Edit the note
							</button>
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
</section>
