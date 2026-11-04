<script lang="ts">
	interface Props {
		index: number;
	}

	let { index }: Props = $props();
</script>

<!-- Six authored geometric glyphs, one per engineering principle -->
<svg viewBox="0 0 32 32" class="h-9 w-9 shrink-0" aria-hidden="true">
	{#if index === 0}
		<g fill="none" stroke="#687C70" stroke-width="1.5" stroke-linecap="round">
			<path d="M 16 28 V 15" />
			<path d="M 16 15 C 16 9, 7 9, 6 4" />
			<path d="M 16 15 C 16 9, 25 9, 26 4" />
		</g>
		<circle cx="6" cy="4" r="2" fill="#687C70" />
		<circle cx="26" cy="4" r="2" fill="#C85A3A" />
		<circle cx="16" cy="28" r="2" fill="#172B40" />
	{:else if index === 1}
		<g fill="none" stroke="#687C70" stroke-width="1.5" stroke-linecap="round">
			<path d="M 4 24 A 12 12 0 0 1 28 24" />
			<path d="M 9 24 A 7 7 0 0 1 23 24" />
			<path d="M 13.5 24 A 2.5 2.5 0 0 1 18.5 24" />
		</g>
		<circle cx="16" cy="12" r="2" fill="#C85A3A" />
	{:else if index === 2}
		<g fill="none" stroke-linecap="round">
			<path d="M 4 10 C 10 10, 12 24, 28 24" stroke="#687C70" stroke-width="1.5" />
			<path d="M 4 10 C 12 8, 20 6, 28 4" stroke="#687C70" stroke-width="1.2" stroke-dasharray="2 4" />
		</g>
		<circle cx="28" cy="24" r="2" fill="#C85A3A" />
	{:else if index === 3}
		<path d="M 4 26 H 28" stroke="#D6C5AB" stroke-width="1.2" />
		<g fill="none" stroke="#687C70" stroke-width="1.5" stroke-linecap="round">
			<path d="M 8 26 V 12" />
			<path d="M 24 26 V 12" />
			<path d="M 8 12 Q 16 2 24 12" />
		</g>
		<circle cx="16" cy="7.4" r="2" fill="#C85A3A" />
	{:else if index === 4}
		<circle cx="16" cy="16" r="9" fill="none" stroke="#687C70" stroke-width="1.5" />
		<g stroke="#687C70" stroke-width="1.2" stroke-linecap="round">
			<path d="M 16 3 v 3" /><path d="M 16 26 v 3" />
			<path d="M 3 16 h 3" /><path d="M 26 16 h 3" />
		</g>
		<circle cx="22.4" cy="9.6" r="2" fill="#C85A3A" />
	{:else}
		<path d="M 4 22 H 28" stroke="#687C70" stroke-width="1.5" stroke-linecap="round" />
		<g stroke="#687C70" stroke-width="1.2" stroke-linecap="round">
			<path d="M 8 22 v -5" /><path d="M 20 22 v -5" /><path d="M 26 22 v -5" />
		</g>
		<path d="M 14 22 V 12" stroke="#B04A2C" stroke-width="1.5" stroke-linecap="round" />
		<circle cx="14" cy="10.5" r="2" fill="#C85A3A" />
	{/if}
</svg>
