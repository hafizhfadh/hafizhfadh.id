<script lang="ts">
	import Button from '../ui/Button.svelte';
	import { reveal } from '#lib/actions/reveal';

	interface Props {
		title: string;
		line: string;
		ctaLabel?: string;
	}

	let { title, line, ctaLabel = 'Start a professional conversation' }: Props = $props();
</script>

<section class="on-navy bg-navy py-16 text-ivory sm:py-20">
	<div class="mx-auto max-w-6xl px-5 sm:px-8" use:reveal>
		<div class="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
			<div class="max-w-2xl">
				<h2 class="font-serif text-[clamp(1.9rem,3.6vw,2.9rem)] leading-[1.06] tracking-[-0.015em]">
					{title}
				</h2>
				<p class="mt-4 text-[17px] leading-relaxed text-fog">{line}</p>
			</div>
			<div class="flex shrink-0 flex-wrap items-center gap-4">
				<Button href="/contact" variant="primary" size="lg">{ctaLabel}</Button>
			</div>
		</div>
	</div>
</section>
