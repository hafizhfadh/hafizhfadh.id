<script lang="ts">
	import { education, certifications } from '#lib/data/experience';
	import { reveal } from '#lib/actions/reveal';
</script>

<div class="grid gap-12 border-t border-sand pt-12 md:grid-cols-2" use:reveal>
	<div>
		<h2 class="font-mono text-xs lowercase tracking-wide text-sagedeep">education</h2>
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
		<h2 class="font-mono text-xs lowercase tracking-wide text-sagedeep">certifications</h2>
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
