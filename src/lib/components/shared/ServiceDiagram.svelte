<script lang="ts">
	interface Props {
		kind: 'bridge' | 'rhythm' | 'flow';
		caption?: string;
	}

	let { kind, caption = '' }: Props = $props();
</script>

{#if kind === 'bridge'}
	<!-- Embedded, not adjacent: two teams bridged -->
	<svg viewBox="0 0 280 200" class="w-full" role="img" aria-label="Diagram of an embedded engineering partner working inside a client team: two groups joined by a working bridge.">
		<path d="M 20 164 H 260" stroke="#E5D8C4" stroke-width="1" />
		<path d="M 40 160 v 8 M 140 160 v 8 M 240 160 v 8" stroke="#D6C5AB" stroke-width="1" />
		<rect x="20" y="66" width="92" height="64" rx="12" fill="#FAF8F2" stroke="#687C70" stroke-width="1.5" />
		<g fill="#687C70">
			<circle cx="46" cy="88" r="2" /><circle cx="66" cy="88" r="2" /><circle cx="86" cy="88" r="2" />
			<circle cx="46" cy="104" r="2" /><circle cx="66" cy="104" r="2" /><circle cx="86" cy="104" r="2" />
		</g>
		<path d="M 112 98 C 132 62, 148 62, 168 98" fill="none" stroke="#B04A2C" stroke-width="1.5" />
		<path d="M 112 98 C 132 134, 148 134, 168 98" fill="none" stroke="#687C70" stroke-width="1.2" stroke-dasharray="3 4" />
		<circle class="pulse-dot" cx="140" cy="74" r="3" fill="#C85A3A" />
		<circle cx="216" cy="98" r="30" fill="#172B40" />
		<circle cx="216" cy="98" r="5" fill="#E5D8C4" />
		{#if caption}
			<text x="20" y="34" font-family="IBM Plex Mono, monospace" font-size="10.5" font-style="italic" fill="#5C5A52">{caption}</text>
		{/if}
	</svg>
{:else if kind === 'rhythm'}
	<!-- Calm, steady, observed: an uptime rhythm -->
	<svg viewBox="0 0 280 200" class="w-full" role="img" aria-label="Diagram of a steadily running platform: a calm rhythm of routine pulses with checkpoints along a timeline.">
		<path d="M 20 66 Q 140 34 260 66" fill="none" stroke="#E5D8C4" stroke-width="1" />
		<path d="M 20 104 H 60 A 10 10 0 0 1 80 104 H 130 A 10 10 0 0 1 150 104 H 200 A 10 10 0 0 1 220 104 H 260" fill="none" stroke="#687C70" stroke-width="1.5" />
		<g stroke="#55645B" stroke-width="1.2">
			<path d="M 45 104 v -14" /><path d="M 115 104 v -14" /><path d="M 185 104 v -14" />
		</g>
		<circle cx="45" cy="86" r="3" fill="#FAF8F2" stroke="#55645B" stroke-width="1.2" />
		<circle cx="115" cy="86" r="3" fill="#FAF8F2" stroke="#55645B" stroke-width="1.2" />
		<circle cx="185" cy="86" r="3" fill="#FAF8F2" stroke="#55645B" stroke-width="1.2" />
		<path d="M 245 104 v -20" stroke="#B04A2C" stroke-width="1.2" />
		<circle class="pulse-dot" cx="245" cy="79" r="3.5" fill="#C85A3A" />
		<path d="M 20 136 H 260" stroke="#E5D8C4" stroke-width="1" stroke-dasharray="2 5" />
		{#if caption}
			<text x="20" y="34" font-family="IBM Plex Mono, monospace" font-size="10.5" font-style="italic" fill="#5C5A52">{caption}</text>
		{/if}
	</svg>
{:else}
	<!-- From tangle to throughput -->
	<svg viewBox="0 0 280 200" class="w-full" role="img" aria-label="Diagram of a tangled operational path resolving into one straight, reliable flow.">
		<path d="M 20 70 v 10 M 15 75 h 10" stroke="#D6C5AB" stroke-width="1" />
		<path d="M 20 128 C 48 88, 76 156, 100 118 C 116 94, 88 84, 110 72 C 136 58, 146 96, 166 100" fill="none" stroke="#687C70" stroke-width="1.5" />
		<path d="M 166 100 H 252" fill="none" stroke="#B04A2C" stroke-width="1.5" />
		<path d="M 244 94 L 254 100 L 244 106" fill="none" stroke="#B04A2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<circle cx="166" cy="100" r="5.5" fill="#172B40" />
		<path d="M 20 152 H 150" stroke="#E5D8C4" stroke-width="1" stroke-dasharray="2 5" />
		{#if caption}
			<text x="20" y="34" font-family="IBM Plex Mono, monospace" font-size="10.5" font-style="italic" fill="#5C5A52">{caption}</text>
		{/if}
	</svg>
{/if}

<style>
	.pulse-dot {
		animation: pulse-soft 2.6s ease-in-out infinite;
		transform-box: fill-box;
		transform-origin: center;
	}

	@keyframes pulse-soft {
		0%,
		100% {
			opacity: 1;
			transform: scale(1);
		}
		50% {
			opacity: 0.55;
			transform: scale(1.25);
		}
	}
</style>
