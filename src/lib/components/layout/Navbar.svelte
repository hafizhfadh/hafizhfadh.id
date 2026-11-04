<script lang="ts">
	import Button from '../ui/Button.svelte';
	import { Menu, X } from 'lucide-svelte';
	import { slide } from 'svelte/transition';

	let isMobileMenuOpen = $state(false);

	function toggleMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}

	function closeMenu() {
		isMobileMenuOpen = false;
	}

	const navItems = [
		{ label: 'Services', href: '#services' },
		{ label: 'Impact', href: '#impact' },
		{ label: 'Experience', href: '#experience' },
		{ label: 'Principles', href: '#philosophy' },
		{ label: 'Toolkit', href: '#ecosystem' },
		{ label: 'Process', href: '#process' }
	];
</script>

<header
	class="sticky top-0 z-50 w-full border-b border-sand/80 bg-cream/90 backdrop-blur-md transition-shadow duration-300"
>
	<div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
		<!-- Wordmark -->
		<a
			href="/"
			class="group rounded-sm font-serif text-xl leading-none tracking-[-0.01em] text-charcoal transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay"
			aria-label="Hafizh Fadhlurrohman — home"
		>
			Hafizh Fadhlurrohman<span class="text-terracotta transition-transform duration-300 group-hover:scale-125">.</span>
		</a>

		<!-- Desktop navigation -->
		<nav class="hidden items-center gap-7 md:flex" aria-label="Main navigation">
			{#each navItems as item}
				<a
					href={item.href}
					class="relative text-[15px] font-medium text-inkmuted transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-clay after:transition-all after:duration-300 hover:text-charcoal hover:after:w-full"
				>
					{item.label}
				</a>
			{/each}
		</nav>

		<div class="flex items-center gap-3">
			<Button href="#contact" variant="primary" size="sm" class="hidden sm:inline-flex">
				Start a conversation
			</Button>

			<button
				type="button"
				onclick={toggleMenu}
				class="rounded-lg p-2.5 text-inkmuted transition-colors hover:bg-sand/60 hover:text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay md:hidden"
				aria-expanded={isMobileMenuOpen}
				aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
			>
				{#if isMobileMenuOpen}
					<X class="h-5 w-5" />
				{:else}
					<Menu class="h-5 w-5" />
				{/if}
			</button>
		</div>
	</div>

	<!-- Mobile menu — an editorial index -->
	{#if isMobileMenuOpen}
		<div
			transition:slide={{ duration: 250 }}
			class="border-t border-sand/80 bg-cream px-5 pb-8 pt-4 md:hidden"
		>
			<nav class="flex flex-col" aria-label="Mobile navigation">
				{#each navItems as item, i}
					<a
						href={item.href}
						onclick={closeMenu}
						class="flex items-baseline justify-between border-b border-sand/60 py-4 font-serif text-2xl text-charcoal transition-colors hover:text-clay"
					>
						{item.label}
						<span class="font-mono text-xs text-inkmuted">0{i + 1}</span>
					</a>
				{/each}
			</nav>
			<div class="pt-6">
				<Button href="#contact" variant="primary" size="md" class="w-full" onclick={closeMenu}>
					Start a conversation
				</Button>
			</div>
		</div>
	{/if}
</header>
