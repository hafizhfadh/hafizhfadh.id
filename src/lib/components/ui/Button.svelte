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
			'bg-clay text-ivory hover:bg-claydark shadow-[0_1px_2px_rgba(40,44,43,0.10),0_10px_28px_-14px_rgba(176,74,44,0.55)] hover:shadow-[0_1px_2px_rgba(40,44,43,0.10),0_12px_32px_-14px_rgba(154,62,35,0.6)] active:scale-[0.98]',
		outline:
			'bg-transparent text-charcoal border border-sanddeep hover:border-charcoal/40 hover:bg-cream active:scale-[0.98]',
		ghost: 'bg-transparent text-inkmuted hover:text-charcoal'
	};

	const sizeStyles = {
		sm: 'px-4 py-2 text-sm',
		md: 'px-5 py-2.5 text-[15px]',
		lg: 'px-7 py-3.5 text-base'
	};

	const baseClasses =
		'inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-[-0.01em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2 focus-visible:ring-offset-ivory disabled:opacity-50 disabled:pointer-events-none cursor-pointer';
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
