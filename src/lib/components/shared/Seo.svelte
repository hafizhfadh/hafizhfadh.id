<script lang="ts">
	interface Props {
		title: string;
		description: string;
		path?: string;
	}

	let { title, description, path = '' }: Props = $props();

	const siteUrl = 'https://hafizhfadh.id';
	const url = $derived(`${siteUrl}${path}`);
	// Bump the version to force WhatsApp/Telegram/Facebook to re-fetch the image
	// after a change: their caches are keyed by URL and can hold failures.
	const ogImage = $derived(`${siteUrl}/og.png?v=2`);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={url} />

	<meta property="og:type" content="website" />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:site_name" content="Hafizh Fadhlurrohman" />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:type" content="image/png" />
	<meta
		property="og:image:alt"
		content="Engineering Beyond Infrastructure. The editorial homepage of Hafizh Fadhlurrohman's independent engineering consultancy, set on warm ivory with a hand-drawn platform schematic."
	/>

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={url} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImage} />
	<meta
		name="twitter:image:alt"
		content="Engineering Beyond Infrastructure. The editorial homepage of Hafizh Fadhlurrohman's independent engineering consultancy, set on warm ivory with a hand-drawn platform schematic."
	/>
</svelte:head>
