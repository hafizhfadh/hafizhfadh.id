<script lang="ts">
	import Button from '../ui/Button.svelte';
	import { Menu, X, ArrowUpRight } from 'lucide-svelte';

	let isMobileMenuOpen = $state(false);

	function toggleMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}

	function closeMenu() {
		isMobileMenuOpen = false;
	}

	const navItems = [
		{ label: 'Services', href: '#services' },
		{ label: 'Proven Impact', href: '#impact' },
		{ label: 'Experience', href: '#experience' },
		{ label: 'Philosophy', href: '#philosophy' },
		{ label: 'Ecosystem', href: '#ecosystem' },
		{ label: 'Process', href: '#process' }
	];
</script>

<header
	class="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-[#0B0D13]/85 backdrop-blur-md transition-all duration-200"
>
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
		<!-- Brand / Wordmark -->
		<a
			href="/"
			class="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm"
			aria-label="Hafizh Fadhlurrohman Homepage"
		>
			<span class="font-mono text-base font-bold tracking-tight text-slate-100 group-hover:text-emerald-400 transition-colors">
				hafizhfadh<span class="text-emerald-400 animate-pulse">_</span>
			</span>
			<span class="hidden sm:inline-block text-[11px] font-mono text-slate-400 px-1.5 py-0.5 rounded bg-slate-800/80 border border-slate-700/60">
				PARTNER
			</span>
		</a>

		<!-- Desktop Navigation -->
		<nav class="hidden md:flex items-center gap-7" aria-label="Main navigation">
			{#each navItems as item}
				<a
					href={item.href}
					class="text-xs font-mono tracking-wider text-slate-400 hover:text-emerald-400 transition-colors uppercase"
				>
					{item.label}
				</a>
			{/each}
		</nav>

		<!-- Action & Mobile Toggle -->
		<div class="flex items-center gap-3">
			<Button href="#contact" variant="primary" size="sm" class="hidden sm:inline-flex">
				Start Conversation
				<ArrowUpRight class="w-3.5 h-3.5" />
			</Button>

			<button
				type="button"
				onclick={toggleMenu}
				class="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
				aria-expanded={isMobileMenuOpen}
				aria-label="Toggle mobile menu"
			>
				{#if isMobileMenuOpen}
					<X class="w-5 h-5" />
				{:else}
					<Menu class="w-5 h-5" />
				{/if}
			</button>
		</div>
	</div>

	<!-- Mobile Navigation Drawer -->
	{#if isMobileMenuOpen}
		<div
			class="md:hidden border-b border-slate-800 bg-[#0B0D13]/98 px-4 pt-3 pb-6 space-y-3 transition-all"
		>
			<div class="flex flex-col space-y-1">
				{#each navItems as item}
					<a
						href={item.href}
						onclick={closeMenu}
						class="px-3 py-2 text-sm font-mono tracking-wider text-slate-300 hover:text-emerald-400 hover:bg-slate-900 rounded-lg transition-colors uppercase"
					>
						{item.label}
					</a>
				{/each}
			</div>

			<div class="pt-3 border-t border-slate-800 flex flex-col gap-2">
				<Button href="#contact" variant="primary" size="md" class="w-full justify-center" onclick={closeMenu}>
					Start a Professional Conversation
					<ArrowUpRight class="w-4 h-4" />
				</Button>
			</div>
		</div>
	{/if}
</header>
