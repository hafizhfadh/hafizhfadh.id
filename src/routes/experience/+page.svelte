<script lang="ts">
	import Seo from '#lib/components/shared/Seo.svelte';
	import PageHeader from '#lib/components/shared/PageHeader.svelte';
	import CtaBand from '#lib/components/shared/CtaBand.svelte';
	import ExperienceTimeline from '#lib/components/sections/ExperienceTimeline.svelte';
	import EducationCerts from '#lib/components/sections/EducationCerts.svelte';
	import { caseStudies } from '#lib/data/experience';
	import { reveal } from '#lib/actions/reveal';
	import { ArrowRight } from 'lucide-svelte';
</script>

<Seo
	title="Experience · Hafizh Fadhlurrohman"
	description="The complete professional timeline: seven years across telecommunications, cloud infrastructure, and application development, with verified outcomes and three engineering case studies."
	path="/experience"
/>

<PageHeader
	title="The work so far."
	lead="Seven years across telecommunications, cloud infrastructure, and software people rely on daily. Every chapter below is measured by what it moved, and nothing is claimed that can't be shown."
/>

<section class="bg-ivory py-16 sm:py-20">
	<div class="mx-auto max-w-6xl px-5 sm:px-8">
		<ExperienceTimeline />
		<EducationCerts />
	</div>
</section>

<!-- Case studies -->
<section class="border-y border-sand/70 bg-cream py-16 sm:py-24">
	<div class="mx-auto max-w-6xl px-5 sm:px-8">
		<div class="max-w-2xl" use:reveal>
			<h2 class="font-serif text-[clamp(2.1rem,4vw,3.25rem)] leading-[1.04] tracking-[-0.015em] text-charcoal">
				Three engagements, opened up.
			</h2>
			<p class="mt-5 text-lg leading-relaxed text-inkmuted">
				Context, challenge, approach, and the measured outcome, the same way I'd walk you
				through them on a call.
			</p>
		</div>

		<div class="mt-14 space-y-16">
			{#each caseStudies as study, i}
				<article class="border-t border-sand pt-12" use:reveal>
					<div class="grid gap-10 lg:grid-cols-12 lg:gap-14">
						<!-- Study header -->
						<div class="lg:col-span-4">
							<p class="font-mono text-xs text-inkmuted">
								{i + 1} of {caseStudies.length} · {study.organization}
							</p>
							<h3 class="mt-3 font-serif text-[clamp(1.8rem,3vw,2.4rem)] leading-[1.08] tracking-[-0.01em] text-charcoal">
								{study.title}
							</h3>
							<p class="mt-3 font-mono text-xs text-inkmuted">{study.period}</p>
							<div class="mt-8 border-t border-sand pt-6">
								<p class="font-serif text-[clamp(2.6rem,5vw,4rem)] leading-none text-clay">
									{study.metric}
								</p>
								<p class="mt-3 max-w-[30ch] text-sm leading-relaxed text-inkmuted">{study.metricLabel}</p>
							</div>
						</div>

						<!-- Study body -->
						<div class="space-y-8 lg:col-span-7 lg:col-start-6">
							<div class="grid gap-8 sm:grid-cols-2">
								<div>
									<h4 class="font-mono text-xs lowercase tracking-wide text-sagedeep">context</h4>
									<p class="mt-3 text-[15px] leading-relaxed text-inkmuted">{study.context}</p>
								</div>
								<div>
									<h4 class="font-mono text-xs lowercase tracking-wide text-sagedeep">the challenge</h4>
									<p class="mt-3 text-[15px] leading-relaxed text-inkmuted">{study.challenge}</p>
								</div>
							</div>
							<div class="grid gap-8 sm:grid-cols-2">
								<div>
									<h4 class="font-mono text-xs lowercase tracking-wide text-sagedeep">the approach</h4>
									<ul class="mt-3 space-y-2.5">
										{#each study.approach as item}
											<li class="flex items-start gap-2.5 text-[15px] leading-relaxed text-charcoal">
												<span class="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-sage" aria-hidden="true"></span>
												<span>{item}</span>
											</li>
										{/each}
									</ul>
								</div>
								<div>
									<h4 class="font-mono text-xs lowercase tracking-wide text-sagedeep">the implementation</h4>
									<ul class="mt-3 space-y-2.5">
										{#each study.implementation as item}
											<li class="flex items-start gap-2.5 text-[15px] leading-relaxed text-inkmuted">
												<span class="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-sage" aria-hidden="true"></span>
												<span>{item}</span>
											</li>
										{/each}
									</ul>
								</div>
							</div>
							<div class="border-t border-sand pt-6">
								<h4 class="font-mono text-xs lowercase tracking-wide text-sagedeep">the outcome</h4>
								<p class="mt-3 max-w-[62ch] font-serif text-[1.3rem] leading-snug text-charcoal">
									{study.outcome}
								</p>
							</div>
						</div>
					</div>
				</article>
			{/each}
		</div>

		<div class="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-sand pt-8" use:reveal>
			<p class="text-[15px] text-inkmuted">Curious whether similar results are possible in your environment?</p>
			<a
				href="/contact"
				class="group inline-flex items-center gap-2 text-[15px] font-semibold text-clay transition-colors hover:text-claydark"
			>
				Ask me directly
				<ArrowRight class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
			</a>
		</div>
	</div>
</section>

<CtaBand
	title="Every number here started with a conversation."
	line="If your systems deserve the same scrutiny, the discovery interview is the natural first step."
	ctaLabel="Request a discovery interview"
/>
