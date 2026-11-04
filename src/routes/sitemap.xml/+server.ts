import type { RequestHandler } from './$types';

export const prerender = true;

export const GET: RequestHandler = async () => {
	const site = 'https://hafizhfadh.id';
	const routes = [
		{ path: '/', priority: '1.0' },
		{ path: '/services', priority: '0.9' },
		{ path: '/services/forward-deployed-engineering', priority: '0.8' },
		{ path: '/services/managed-platforms', priority: '0.8' },
		{ path: '/services/custom-applications', priority: '0.8' },
		{ path: '/experience', priority: '0.8' },
		{ path: '/expertise', priority: '0.7' },
		{ path: '/about', priority: '0.6' },
		{ path: '/contact', priority: '0.9' }
	];

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
	.map(
		(route) => `\t<url>
\t\t<loc>${site}${route.path}</loc>
\t\t<lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
\t\t<changefreq>monthly</changefreq>
\t\t<priority>${route.priority}</priority>
\t</url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
};
