// Plan du site pour les moteurs de recherche (déclaré dans robots.txt).
import type { APIRoute } from 'astro';
import { APPS } from '../data/apps';

export const GET: APIRoute = ({ site }) => {
	const paths = ['/', ...APPS.flatMap((app) => [`/${app.slug}`, app.privacy, app.support])];
	const urls = paths.map((p) => `<url><loc>${new URL(p, site).href}</loc></url>`).join('');
	return new Response(
		`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
		{ headers: { 'Content-Type': 'application/xml' } },
	);
};
