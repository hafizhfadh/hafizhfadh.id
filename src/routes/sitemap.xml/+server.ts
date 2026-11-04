import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	const site = 'https://hafizhfadh.id';
	const pages = ['', '#about', '#services', '#impact', '#experience', '#philosophy', '#ecosystem', '#process', '#contact'];

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	<url>
		<loc>${site}</loc>
		<lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
		<changefreq>monthly</changefreq>
		<priority>1.0</priority>
	</url>
</urlset>`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
};
