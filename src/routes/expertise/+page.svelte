<script lang="ts">
	import Seo from '#lib/components/shared/Seo.svelte';
	import PageHeader from '#lib/components/shared/PageHeader.svelte';
	import CtaBand from '#lib/components/shared/CtaBand.svelte';
	import Philosophy from '#lib/components/sections/Philosophy.svelte';
	import TechEcosystem from '#lib/components/sections/TechEcosystem.svelte';
	import { reveal } from '#lib/actions/reveal';
	import { ArrowRight } from 'lucide-svelte';
</script>

<Seo
	title="Expertise · Hafizh Fadhlurrohman"
	description="Technical capabilities for engineering leaders: database engineering, cloud and infrastructure, observability, security and compliance, and software engineering, with the principles that govern every decision."
	path="/expertise"
/>

<PageHeader
	title="The toolkit, and how I use it."
	lead="Capabilities are easy to list and hard to verify. This is the honest inventory: what I work with daily, organized for engineering leaders who need depth, not a wall of logos."
/>

<!-- Operating stances -->
<section class="bg-ivory py-16 sm:py-20">
	<div class="mx-auto max-w-6xl px-5 sm:px-8">
		<div class="grid gap-12 lg:grid-cols-12 lg:gap-16" use:reveal>
			<div class="lg:col-span-4">
				<h2 class="font-serif text-[clamp(1.9rem,3.2vw,2.7rem)] leading-[1.06] text-charcoal">
					Four stances worth knowing upfront.
				</h2>
			</div>
			<div class="grid gap-x-12 gap-y-9 sm:grid-cols-2 lg:col-span-8">
				<div class="border-t border-sand pt-6">
					<h3 class="text-[17px] font-semibold text-charcoal">Vendor independence, on principle</h3>
					<p class="mt-2 text-[15px] leading-relaxed text-inkmuted">
						I don't resell cloud, and I don't take referral fees. Recommendations are driven by
						your requirements, security posture, and total cost of ownership, including local
						cloud providers when they genuinely beat the giants.
					</p>
				</div>
				<div class="border-t border-sand pt-6">
					<h3 class="text-[17px] font-semibold text-charcoal">Open source where it earns its keep</h3>
					<p class="mt-2 text-[15px] leading-relaxed text-inkmuted">
						PostgreSQL, Linux, and Grafana are the open foundations I build on. Proprietary
						investments you already run stay where they serve you. Every choice is made per
						system, on merit.
					</p>
				</div>
				<div class="border-t border-sand pt-6">
					<h3 class="text-[17px] font-semibold text-charcoal">Security designed in, not bolted on</h3>
					<p class="mt-2 text-[15px] leading-relaxed text-inkmuted">
						Every design decision carries a security posture: least-privilege access,
						SIEM-backed monitoring, ISO/IEC 27001:2022 implementation. Controls belong in the
						architecture, not in the audit.
					</p>
				</div>
				<div class="border-t border-sand pt-6">
					<h3 class="text-[17px] font-semibold text-charcoal">Measurements, not adjectives</h3>
					<p class="mt-2 text-[15px] leading-relaxed text-inkmuted">
						"Feels faster" is not an outcome. Execution plans, latency percentiles, and audited
						balance sheets are. The same evidence you'll find in my
						<a href="/experience" class="font-semibold text-clay underline decoration-sanddeep underline-offset-4 transition-colors hover:decoration-clay">case studies</a>.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Decision framework -->
<section class="border-y border-sand/70 bg-cream py-16 sm:py-24">
	<div class="mx-auto max-w-6xl px-5 sm:px-8">
		<div class="max-w-2xl" use:reveal>
			<h2 class="font-serif text-[clamp(2.1rem,4vw,3.25rem)] leading-[1.04] tracking-[-0.015em] text-charcoal">
				How I decide.
			</h2>
			<p class="mt-5 text-lg leading-relaxed text-inkmuted">
				Six principles behind every recommendation, learned in production rather than from a
				playbook. They're the reason the case-study outcomes exist.
			</p>
		</div>
		<div class="mt-14">
			<Philosophy />
		</div>
	</div>
</section>

<!-- The toolkit -->
<section class="bg-ivory pb-20 sm:pb-24">
	<div class="mx-auto max-w-6xl px-5 sm:px-8">
		<div class="flex flex-wrap items-end justify-between gap-6" use:reveal>
			<div class="max-w-2xl">
				<h2 class="font-serif text-[clamp(2.1rem,4vw,3.25rem)] leading-[1.04] tracking-[-0.015em] text-charcoal">
					The domains, in detail.
				</h2>
				<p class="mt-5 text-lg leading-relaxed text-inkmuted">
					Technologies I work with daily, chosen per problem rather than per fashion. Five areas,
					each proven through production deployments and audited implementations.
				</p>
			</div>
			<a
				href="/experience"
				class="group inline-flex items-center gap-2 text-[15px] font-semibold text-clay transition-colors hover:text-claydark"
			>
				See them in production
				<ArrowRight class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
			</a>
		</div>
		<div class="mt-12">
			<TechEcosystem />
		</div>
	</div>
</section>

<CtaBand
	title="Depth is easier to judge in conversation."
	line="If your team needs any of these domains applied to a real environment, the discovery interview is where we'd start."
	ctaLabel="Start a professional conversation"
/>
