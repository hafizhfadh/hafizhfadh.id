<script lang="ts">
	interface Props {
		variant?: 'primary' | 'outline' | 'ghost';
		size?: 'sm' | 'md' | 'lg';
		href?: string;
		type?: 'button' | 'submit' | 'reset';
		disabled?: boolean;
		class?: string;
		children?: import('svelte').Snippet;
		[key: string]: unknown;
	}

	let {
		variant = 'primary',
		size = 'md',
		href,
		type = 'button',
		disabled = false,
		class: className = '',
		children,
		...rest
	}: Props = $props();

	const variantStyles = {
		primary:
			'bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 active:scale-[0.98]',
		outline:
			'bg-transparent hover:bg-slate-800/60 text-slate-100 border border-slate-700 hover:border-slate-500 active:scale-[0.98]',
		ghost:
			'bg-transparent hover:bg-slate-800/40 text-slate-300 hover:text-white'
	};

	const sizeStyles = {
		sm: 'px-3 py-1.5 text-xs',
		md: 'px-5 py-2.5 text-sm',
		lg: 'px-6 py-3.5 text-base'
	};

	const baseClasses =
		'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0D13] disabled:opacity-50 disabled:pointer-events-none cursor-pointer';
</script>

{#if href}
	<a {href} class="{baseClasses} {variantStyles[variant]} {sizeStyles[size]} {className}" {...rest}>
		{#if children}
			{@render children()}
		{/if}
	</a>
{:else}
	<button
		{type}
		{disabled}
		class="{baseClasses} {variantStyles[variant]} {sizeStyles[size]} {className}"
		{...rest}
	>
		{#if children}
			{@render children()}
		{/if}
	</button>
{/if}
