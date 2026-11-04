<script lang="ts">
	import { experiences, education, certifications } from '#lib/data/experience';
	import { reveal } from '#lib/actions/reveal';

	const currentOrgs = new Set(['Infradigital Nusantara', 'Monster Data Asia']);
</script>

<section id="experience" class="bg-ivory py-20 sm:py-28">
	<div class="mx-auto max-w-6xl px-5 sm:px-8">
		<!-- Section opening -->
		<div class="max-w-2xl" use:reveal>
			<h2 class="font-serif text-[clamp(2.1rem,4vw,3.25rem)] leading-[1.04] tracking-[-0.015em] text-charcoal">
				The work so far.
			</h2>
			<p class="mt-5 text-lg leading-relaxed text-inkmuted">
				Seven years across telecommunications, cloud infrastructure, and software that people rely
				on daily — each chapter measured by what it moved.
			</p>
		</div>

		<!-- Timeline -->
		<div class="relative mt-14">
			<div class="absolute top-2 bottom-8 left-0 w-px bg-sand sm:left-[11rem]" aria-hidden="true"></div>

			{#each experiences as exp}
				<div class="relative grid gap-3 pb-16 last:pb-4 sm:grid-cols-[10rem_1fr] sm:gap-8" use:reveal>
					<!-- Period -->
					<div class="pt-1.5 font-mono text-xs leading-relaxed text-inkmuted sm:text-right">
						{exp.period}
					</div>

					<!-- Entry -->
					<div class="relative pl-6 sm:pl-0">
						<span
							class="absolute top-[9px] -left-5 h-2 w-2 rounded-full sm:-left-3 {currentOrgs.has(exp.organization) ? 'bg-clay' : 'bg-sage'}"
							aria-hidden="true"
						></span>

						<h3 class="font-serif text-2xl leading-tight text-charcoal sm:text-[1.7rem]">
							{exp.organization}
						</h3>
						<p class="mt-1 text-[15px] font-semibold text-sagedeep">{exp.role}</p>

						<p class="mt-3 max-w-[54ch] font-serif text-[1.3rem] leading-snug text-clay italic">
							{exp.highlight}
						</p>

						<ul class="mt-5 grid gap-x-10 gap-y-2.5 md:grid-cols-2">
							{#each exp.achievements as item}
								<li class="flex items-start gap-3 text-sm leading-relaxed text-inkmuted">
									<span class="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-sage" aria-hidden="true"></span>
									<span>{item}</span>
								</li>
							{/each}
						</ul>

						<p class="mt-5 font-mono text-[11px] leading-relaxed text-inkmuted/80">
							{exp.tags.join(' · ')}
						</p>
					</div>
				</div>
			{/each}
		</div>

		<!-- Foundation: education & certifications -->
		<div class="grid gap-12 border-t border-sand pt-12 md:grid-cols-2" use:reveal>
			<div>
				<h3 class="font-mono text-xs lowercase tracking-wide text-sagedeep">education</h3>
				<ul class="mt-5 space-y-5">
					{#each education as edu}
						<li>
							<p class="text-[15px] font-semibold text-charcoal">{edu.degree}</p>
							<p class="mt-1 text-sm text-inkmuted">{edu.institution} · {edu.status || edu.period}</p>
						</li>
					{/each}
				</ul>
			</div>
			<div>
				<h3 class="font-mono text-xs lowercase tracking-wide text-sagedeep">certifications</h3>
				<ul class="mt-5 space-y-5">
					{#each certifications as cert}
						<li>
							<p class="text-[15px] font-semibold text-charcoal">{cert.name}</p>
							<p class="mt-1 text-sm text-inkmuted">{cert.issuer}</p>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>
