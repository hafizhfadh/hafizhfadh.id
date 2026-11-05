<script lang="ts">
	import '../app.css';
	import favicon from '#lib/assets/favicon.svg';
	import Navbar from '#lib/components/layout/Navbar.svelte';
	import Footer from '#lib/components/layout/Footer.svelte';
	import { profile } from '#lib/data/profile';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();

	const siteUrl = 'https://hafizhfadh.id';
	const siteDescription = profile.siteDescription;

	const structuredData = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Person',
				'@id': `${siteUrl}/#person`,
				name: profile.name,
				jobTitle: profile.title,
				description: profile.bio,
				email: profile.email,
				url: siteUrl,
				sameAs: [profile.linkedin],
				address: {
					'@type': 'PostalAddress',
					addressLocality: 'Depok',
					addressRegion: 'West Java',
					addressCountry: 'ID'
				},
				knowsAbout: [
					'Database Administration',
					'Query Performance Optimization',
					'PostgreSQL',
					'MySQL',
					'Cloud Infrastructure',
					'DevOps',
					'Grafana',
					'ISO/IEC 27001:2022',
					'SvelteKit',
					'Flutter'
				]
			},
			{
				'@type': 'ProfessionalService',
				'@id': `${siteUrl}/#service`,
				name: `${profile.name} · Independent Engineering Consultancy`,
				url: siteUrl,
				founder: { '@id': `${siteUrl}/#person` },
				description: siteDescription,
				areaServed: 'Global',
				serviceType: [
					'Forward Deployed Engineering',
					'Managed Platforms & Infrastructure',
					'Custom Applications & Integration',
					'Database Optimization Consulting'
				]
			}
		]
	};
</script>

<svelte:head>
	<link rel="icon" href={favicon} />

	<!-- JSON-LD Structured Data: page-level title/description/OG tags come from Seo.svelte -->
	{@html `<script type="application/ld+json">${JSON.stringify(structuredData)}</script>`}
</svelte:head>

<div class="min-h-screen flex flex-col bg-ivory text-charcoal">
	<Navbar />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>
