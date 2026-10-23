// Plan du site pour les moteurs de recherche (déclaré dans robots.txt).
import type { APIRoute } from 'astro';
import { APPS, appPages } from '../data/apps';
import { GUIDES } from '../data/guides';
import { JOURNAL } from '../data/journal';

export const GET: APIRoute = ({ site }) => {
	const paths = [
		'/',
		'/a-propos/',
		...APPS.flatMap((app) => [`/${app.slug}/`, ...appPages(app).map((p) => p.href), app.privacy, app.support]),
		...GUIDES.map((g) => g.href),
		...JOURNAL.map((p) => p.href),
	];
	const urls = paths.map((p) => `<url><loc>${new URL(p, site).href}</loc></url>`).join('');
	return new Response(
		`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
		{ headers: { 'Content-Type': 'application/xml' } },
	);
};
