// Les apps publiées. Le hub, les boutons de téléchargement et les liens
// /<slug>/telecharger lisent tous ce fichier : une nouvelle app = une entrée ici.

export interface StoreLinks {
	/** URL App Store, ou null tant que l'app n'y est pas. */
	ios: string | null;
	/** Identifiant App Store (bannière Smart App Banner de Safari). */
	iosId: string | null;
	/** URL Google Play, ou null tant que l'app n'y est pas. */
	android: string | null;
}

export interface AppEntry {
	slug: string;
	name: string;
	/** Une ligne, pour le hub et les balises meta. */
	tagline: string;
	/** Domaine, pour le surtitre de la carte du hub. */
	category: string;
	/** Ce qui est gratuit aujourd'hui, en quelques mots. À tenir à jour quand un prix change. */
	price: string;
	icon: string;
	/** Deux captures sans texte incrusté, pour la carte du hub. */
	preview: [string, string];
	/** Couleur d'identité, pour la carte du hub. */
	accent: string;
	/** Fond de la carte du hub. */
	surface: string;
	ink: string;
	stores: StoreLinks;
	privacy: string;
	support: string;
	/** Adresse d'assistance, qui reçoit aussi la liste d'attente. */
	contact: string;
}

export const APPS: AppEntry[] = [
	{
		slug: 'coheria',
		name: 'Coheria',
		tagline: 'La cohérence cardiaque, cinq minutes à la fois. Une vague à suivre, des rappels qui savent se taire.',
		category: 'Cohérence cardiaque',
		price: 'Gratuit · achat facultatif',
		icon: '/apps/coheria/icon.png',
		preview: ['/apps/coheria/ecrans/01-home.webp', '/apps/coheria/ecrans/02-state.webp'],
		accent: '#5B4BF5',
		surface: '#FDEEE1',
		ink: '#15171C',
		stores: {
			ios: 'https://apps.apple.com/app/id6777145501',
			iosId: '6777145501',
			android: 'https://play.google.com/store/apps/details?id=com.nicolastardieu.coheria',
		},
		privacy: '/privacy',
		support: '/support',
		contact: 'coheria.contact@gmail.com',
	},
	{
		slug: 'eau-et-cafe',
		name: 'Eau & Café',
		tagline: 'Ton eau et ton café en un geste, l’heure de ton dernier café, et une œuvre d’art par jour.',
		category: 'Eau et caféine',
		price: 'Gratuit',
		icon: '/apps/eau-et-cafe/icon.png',
		preview: ['/apps/eau-et-cafe/ecrans/01-home.webp', '/apps/eau-et-cafe/ecrans/04-coffee.webp'],
		accent: '#1B2FD6',
		surface: '#EDEBE4',
		ink: '#0E0E0E',
		// Nouvelle fiche créée à la soumission : renseigner les URLs et l'identifiant ici.
		stores: { ios: null, iosId: null, android: null },
		privacy: '/eau-et-cafe/confidentialite',
		support: '/eau-et-cafe/assistance',
		contact: 'ntardieu.contact@gmail.com',
	},
];

export function getApp(slug: string): AppEntry {
	const app = APPS.find((a) => a.slug === slug);
	if (!app) throw new Error(`App inconnue : ${slug}`);
	return app;
}

export const SITE_NAME = 'Nicolas Tardieu';

/** Les pages du mini-site de chaque app, dans l'ordre du menu. */
export function appPages(app: AppEntry): { href: string; label: string }[] {
	return [
		{ href: `/${app.slug}/fonctionnalites/`, label: 'Fonctionnalités' },
		{ href: `/${app.slug}/tarifs/`, label: 'Tarifs' },
		{ href: `/${app.slug}/guides/`, label: 'Guides' },
		{ href: `/${app.slug}/a-propos/`, label: 'À propos' },
	];
}

/** Plateformes où l'app n'est pas encore publiée. */
export function missingStores(app: AppEntry): string[] {
	return [!app.stores.ios && 'iPhone', !app.stores.android && 'Android'].filter(Boolean) as string[];
}

/** Liste d'attente par e-mail : un message prérempli vers l'assistance de l'app. */
export function waitlistHref(app: AppEntry): string | null {
	const missing = missingStores(app);
	if (!missing.length) return null;
	const subject = `Liste d’attente ${app.name} (${missing.join(' et ')})`;
	const body = `Bonjour,\n\nPréviens-moi quand ${app.name} sort sur ${missing.join(' et ')}.\n\nMerci !`;
	return `mailto:${app.contact}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/** Page Ko-fi pour les dons ponctuels. Tant qu'elle vaut null, la carte « Offre-moi un café » est masquée. */
export const KOFI_URL: string | null = null;

/** Lien direct vers le formulaire d'avis de chaque store. */
export function reviewLinks(app: AppEntry): { label: string; url: string }[] {
	const links: { label: string; url: string }[] = [];
	if (app.stores.ios) links.push({ label: 'App Store', url: `${app.stores.ios}?action=write-review` });
	if (app.stores.android) links.push({ label: 'Google Play', url: `${app.stores.android}&showAllReviews=true` });
	return links;
}
