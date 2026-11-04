<script lang="ts">
	import '../app.css';
	import favicon from '#lib/assets/favicon.svg';
	import Navbar from '#lib/components/layout/Navbar.svelte';
	import Footer from '#lib/components/layout/Footer.svelte';
	import { profile } from '#lib/data/profile';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();

	const pageTitle = `${profile.name} — Independent Engineering Consultancy`;
	const pageDescription =
		'Independent engineering consultancy for infrastructure, platforms, and databases. I help organizations build, secure, and evolve technology platforms — with verified results like 70% cloud cost reduction and a 1.6 TB database answering in under 500 ms.';
	const siteUrl = 'https://hafizhfadh.id';

	const structuredData = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Person',
				'@id': `${siteUrl}/#person`,
				name: profile.name,
				jobTitle: 'Infrastructure and Database Engineer',
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
				name: `${profile.name} — Infrastructure & Platform Engineering`,
				url: siteUrl,
				founder: { '@id': `${siteUrl}/#person` },
				description: pageDescription,
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
	<title>{pageTitle}</title>
	<meta name="description" content={pageDescription} />
	<meta name="keywords" content="Infrastructure Engineer, Database Engineer, PostgreSQL, Performance Tuning, DevOps, Cloud Cost Optimization, Grafana, MonIT, SvelteKit, Cloudflare Workers, Hafizh Fadhlurrohman" />
	<meta name="author" content={profile.name} />
	<link rel="canonical" href={siteUrl} />
	<link rel="icon" href={favicon} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={siteUrl} />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={pageDescription} />
	<meta property="og:site_name" content={profile.name} />

	<!-- Twitter / X -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={siteUrl} />
	<meta name="twitter:title" content={pageTitle} />
	<meta name="twitter:description" content={pageDescription} />

	<!-- JSON-LD Structured Data -->
	{@html `<script type="application/ld+json">${JSON.stringify(structuredData)}</script>`}
</svelte:head>

<div class="min-h-screen flex flex-col bg-ivory text-charcoal">
	<Navbar />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>
