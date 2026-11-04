<script lang="ts">
	import Breadcrumbs from './Breadcrumbs.svelte';

	interface Crumb {
		label: string;
		href?: string;
	}

	interface Props {
		title: string;
		lead?: string;
		crumbs?: Crumb[];
	}

	let { title, lead = '', crumbs = [] }: Props = $props();
</script>

<header class="border-b border-sand/70 bg-cream">
	<div class="mx-auto max-w-6xl px-5 pt-10 pb-14 sm:px-8 sm:pt-14 sm:pb-16">
		{#if crumbs.length > 0}
			<div class="mb-9">
				<Breadcrumbs items={crumbs} />
			</div>
		{/if}
		<h1
			class="max-w-3xl font-serif text-[clamp(2.4rem,5vw,4rem)] leading-[1.03] tracking-[-0.015em] text-charcoal"
		>
			{title}
		</h1>
		{#if lead}
			<p class="mt-6 max-w-2xl text-lg leading-relaxed text-inkmuted">{lead}</p>
		{/if}
	</div>
</header>
