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
}

export const APPS: AppEntry[] = [
	{
		slug: 'coheria',
		name: 'Coheria',
		tagline: 'La cohérence cardiaque, cinq minutes à la fois. Une vague à suivre, des rappels qui savent se taire.',
		category: 'Cohérence cardiaque',
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
	},
	{
		slug: 'eau-et-cafe',
		name: 'Eau & Café',
		tagline: 'Ton eau et ton café en un geste, l’heure de ton dernier café, et une œuvre d’art par jour.',
		category: 'Eau et caféine',
		icon: '/apps/eau-et-cafe/icon.png',
		preview: ['/apps/eau-et-cafe/ecrans/01-home.webp', '/apps/eau-et-cafe/ecrans/04-coffee.webp'],
		accent: '#1B2FD6',
		surface: '#EDEBE4',
		ink: '#0E0E0E',
		// Nouvelle fiche créée à la soumission : renseigner les URLs et l'identifiant ici.
		stores: { ios: null, iosId: null, android: null },
		privacy: '/eau-et-cafe/confidentialite',
		support: '/eau-et-cafe/assistance',
	},
];

export function getApp(slug: string): AppEntry {
	const app = APPS.find((a) => a.slug === slug);
	if (!app) throw new Error(`App inconnue : ${slug}`);
	return app;
}

export const SITE_NAME = 'Nicolas Tardieu';
