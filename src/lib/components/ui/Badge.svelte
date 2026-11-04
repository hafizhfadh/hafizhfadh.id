<script lang="ts">
	interface Props {
		variant?: 'emerald' | 'cyan' | 'amber' | 'subtle';
		class?: string;
		children?: import('svelte').Snippet;
	}

	let { variant = 'emerald', class: className = '', children }: Props = $props();

	const variantStyles = {
		emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/25',
		cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/25',
		amber: 'bg-amber-500/10 text-amber-400 border-amber-500/25',
		subtle: 'bg-slate-800/60 text-slate-300 border-slate-700/60'
	};
</script>

<span
	class="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-medium tracking-wider uppercase rounded border {variantStyles[variant]} {className}"
>
	<span
		class="w-1.5 h-1.5 rounded-full {variant === 'emerald'
			? 'bg-emerald-400 animate-pulse'
			: variant === 'cyan'
				? 'bg-cyan-400'
				: variant === 'amber'
					? 'bg-amber-400'
					: 'bg-slate-400'}"
	></span>
	{#if children}
		{@render children()}
	{/if}
</span>
