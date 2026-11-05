<script lang="ts">
	import { profile } from '#lib/data/profile';
	import Button from '../ui/Button.svelte';
	import { reveal } from '#lib/actions/reveal';
	import { ArrowRight } from 'lucide-svelte';
</script>

<section id="contact" class="on-navy bg-navy py-20 text-ivory sm:py-28">
	<div class="mx-auto max-w-6xl px-5 sm:px-8" use:reveal>
		<div class="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
			<div class="max-w-2xl">
				<h2 class="font-serif text-[clamp(2.4rem,5vw,4rem)] leading-[1.03] tracking-[-0.015em]">
					Have a technical challenge worth solving?
				</h2>
				<p class="mt-6 max-w-[56ch] text-lg leading-relaxed text-fog">
					Tell me what's going on in your environment. I read every message myself, and the
					first conversation is just a conversation.
				</p>
			</div>
			<div class="flex shrink-0 flex-col items-start gap-5">
				<Button href="/contact" variant="primary" size="lg">
					Start a professional conversation
					<ArrowRight class="h-4 w-4" />
				</Button>
				<a
					href="mailto:{profile.email}"
					class="font-serif text-lg text-claylight underline decoration-ivory/25 decoration-2 underline-offset-8 transition-colors hover:decoration-claylight"
				>
					{profile.email}
				</a>
			</div>
		</div>
	</div>
</section>
