<script lang="ts">
	import { profile } from '#lib/data/profile';
	import { ArrowUpRight } from 'lucide-svelte';
	import LinkedInIcon from '../ui/LinkedInIcon.svelte';

	const currentYear = new Date().getFullYear();

	const navItems = [
		{ label: 'Services', href: '#services' },
		{ label: 'Impact', href: '#impact' },
		{ label: 'Experience', href: '#experience' },
		{ label: 'Principles', href: '#philosophy' },
		{ label: 'Toolkit', href: '#ecosystem' },
		{ label: 'Process', href: '#process' }
	];
</script>

<footer class="on-navy border-t border-ivory/10 bg-navydeep text-ivory">
	<div class="mx-auto max-w-6xl px-5 py-16 sm:px-8">
		<div class="grid gap-12 md:grid-cols-12">
			<!-- Identity -->
			<div class="md:col-span-6">
				<p class="font-serif text-2xl tracking-[-0.01em]">
					{profile.name}<span class="text-terracotta">.</span>
				</p>
				<p class="mt-4 max-w-md text-sm leading-relaxed text-fog">
					Independent engineering consultancy for infrastructure, platforms, and databases —
					building, securing, and evolving the systems organizations depend on.
				</p>
				<p class="mt-6 font-mono text-xs text-ivory/60">{profile.location}</p>
			</div>

			<!-- Explore -->
			<nav class="md:col-span-3" aria-label="Footer navigation">
				<h2 class="font-mono text-xs lowercase tracking-wide text-ivory/60">explore</h2>
				<ul class="mt-4 space-y-2.5">
					{#each navItems as item}
						<li>
							<a href={item.href} class="text-sm text-fog transition-colors hover:text-ivory">
								{item.label}
							</a>
						</li>
					{/each}
				</ul>
			</nav>

			<!-- Write -->
			<div class="md:col-span-3">
				<h2 class="font-mono text-xs lowercase tracking-wide text-ivory/60">write to me</h2>
				<ul class="mt-4 space-y-2.5">
					<li>
						<a
							href="mailto:{profile.email}"
							class="inline-flex items-center gap-1.5 text-sm text-fog transition-colors hover:text-claylight"
						>
							{profile.email}
							<ArrowUpRight class="h-3.5 w-3.5 text-ivory/40" />
						</a>
					</li>
					<li>
						<a
							href={profile.linkedin}
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center gap-1.5 text-sm text-fog transition-colors hover:text-claylight"
						>
							<LinkedInIcon class="h-3.5 w-3.5" />
							LinkedIn
							<ArrowUpRight class="h-3.5 w-3.5 text-ivory/40" />
						</a>
					</li>
					<li>
						<a href="#contact" class="text-sm font-semibold text-claylight transition-colors hover:text-ivory">
							Start a conversation
						</a>
					</li>
				</ul>
			</div>
		</div>

		<div class="mt-14 flex flex-col items-start justify-between gap-4 border-t border-ivory/10 pt-7 sm:flex-row sm:items-center">
			<p class="text-xs text-ivory/60">© {currentYear} {profile.name}. All rights reserved.</p>
			<p class="font-serif text-sm italic text-ivory/70">Secure. Open. Adaptable.</p>
		</div>
	</div>
</footer>
