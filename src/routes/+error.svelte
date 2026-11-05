<script lang="ts">
	import { page } from '$app/state';
	import Button from '#lib/components/ui/Button.svelte';
</script>

<div class="flex min-h-[70vh] items-center justify-center bg-ivory px-5 py-24">
	<div class="max-w-lg text-center">
		<svg viewBox="0 0 120 48" class="mx-auto mb-8 w-40" aria-hidden="true">
			<!-- A path that leads off the map -->
			<path
				d="M 8 36 C 30 36, 34 14, 56 14 C 78 14, 74 36, 96 36"
				fill="none"
				stroke="#687C70"
				stroke-width="1.5"
				stroke-dasharray="3 5"
			/>
			<circle cx="8" cy="36" r="3" fill="#172B40" />
			<circle cx="96" cy="36" r="3" fill="#C85A3A" />
			<path d="M 104 32 L 112 36 L 104 40" fill="none" stroke="#C85A3A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		</svg>

		<h1 class="font-serif text-4xl leading-tight tracking-[-0.015em] text-charcoal sm:text-5xl">
			{page.status === 404 ? 'This page wandered off.' : 'Something went sideways.'}
		</h1>
		<p class="mx-auto mt-5 max-w-[46ch] text-[17px] leading-relaxed text-inkmuted">
			{page.error?.message || 'The route you followed doesn’t exist, or it has been relocated.'}
			The rest of the site is right where you left it.
		</p>
		<p class="mt-4 font-mono text-xs text-inkmuted/70">
			{page.status} · {page.url.pathname}
		</p>

		<div class="mt-9 flex justify-center gap-4">
			<Button href="/" variant="primary" size="md">Back to the front page</Button>
			<Button
				href="mailto:hafizhfadh@gmail.com?subject=Broken%20link%20on%20hafizhfadh.id&body=The%20page%20that%20failed:%20{page.url.pathname}"
				variant="outline"
				size="md"
			>
				Report a broken link
			</Button>
		</div>
	</div>
</div>
