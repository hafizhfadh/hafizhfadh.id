<script lang="ts">
	interface Crumb {
		label: string;
		href?: string;
	}

	let { items }: { items: Crumb[] } = $props();
</script>

<nav aria-label="Breadcrumb">
	<ol class="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs text-inkmuted">
		{#each items as item, i}
			{#if i > 0}
				<li class="text-sanddeep" aria-hidden="true">/</li>
			{/if}
			<li>
				{#if item.href && i < items.length - 1}
					<a href={item.href} class="transition-colors hover:text-clay">{item.label}</a>
				{:else}
					<span aria-current="page" class="text-charcoal">{item.label}</span>
				{/if}
			</li>
		{/each}
	</ol>
</nav>
