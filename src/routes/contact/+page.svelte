<script lang="ts">
	import Seo from '#lib/components/shared/Seo.svelte';
	import PageHeader from '#lib/components/shared/PageHeader.svelte';
	import ContactSection from '#lib/components/sections/ContactSection.svelte';
	import { engagementProcess } from '#lib/data/engagement';
	import { reveal } from '#lib/actions/reveal';
</script>

<Seo
	title="Contact · Hafizh Fadhlurrohman"
	description="Start a professional conversation. Tell me about your organization and the challenge. We begin with a discovery interview, not a quote. Reply within 24–48 business hours."
	path="/contact"
/>

<PageHeader
	title="Let's start a conversation."
	lead="A few honest sentences about your organization and the challenge are enough to start. We begin with a discovery interview, not a quote."
/>

<section class="on-navy bg-navy py-16 text-ivory sm:py-20">
	<div class="mx-auto max-w-6xl px-5 sm:px-8">
		<ContactSection />
	</div>
</section>

<!-- The five stages, in full -->
<section class="bg-ivory py-16 sm:py-24">
	<div class="mx-auto max-w-6xl px-5 sm:px-8">
		<div class="max-w-2xl" use:reveal>
			<h2 class="font-serif text-[clamp(2.1rem,4vw,3.25rem)] leading-[1.04] tracking-[-0.015em] text-charcoal">
				What the first weeks look like.
			</h2>
			<p class="mt-5 text-lg leading-relaxed text-inkmuted">
				No quote before context. Five stages take us from a first hello to engineering that
				ships, with a clear deliverable at each step.
			</p>
		</div>

		<div class="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-5">
			{#each engagementProcess as step, i}
				<div class="border-t border-sand pt-6" use:reveal={{ delay: i * 60 }}>
					<div class="flex items-baseline gap-3">
						<span class="font-serif text-3xl leading-none text-sanddeep">{step.number}</span>
						<h3 class="text-[15px] font-semibold leading-snug text-charcoal">{step.title}</h3>
					</div>
					<p class="mt-3 text-sm leading-relaxed text-inkmuted">{step.summary}</p>
					<p class="mt-4 font-mono text-[11px] leading-relaxed text-sagedeep">
						you receive: {step.deliverable}
					</p>
				</div>
			{/each}
		</div>

		<div class="mt-16 border-t border-sand pt-10" use:reveal>
			<div class="grid gap-10 lg:grid-cols-12 lg:gap-14">
				<div class="lg:col-span-7">
					<blockquote class="max-w-[54ch] font-serif text-[clamp(1.5rem,2.8vw,2rem)] leading-snug text-charcoal italic">
						“Every engineering engagement starts with understanding the problem, not quoting a
						price.”
					</blockquote>
					<p class="mt-6 max-w-[58ch] text-[17px] leading-relaxed text-inkmuted">
						I don't sell prepackaged hourly blocks or generic IT services. Pricing is determined
						collaboratively after technical discovery confirms scope, stakes, and expected
						outcomes, and no budget disclosure is needed to start the conversation.
					</p>
				</div>
				<div class="lg:col-span-4 lg:col-start-9">
					<div class="border-l border-sanddeep py-1 pl-6">
						<p class="text-[15px] leading-relaxed text-inkmuted">
							Embedded sprint, ongoing retainer, or project milestone: the engagement structure
							is chosen after discovery, together.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
