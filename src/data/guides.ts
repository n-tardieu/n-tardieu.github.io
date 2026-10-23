// Les guides et outils du site. Le hub, l'index /guides, les liens « À lire
// aussi » et le sitemap lisent tous ce fichier : une nouvelle page = une entrée ici.

export type GuideKind = 'outil' | 'guide';
export type Topic = 'coherence-cardiaque' | 'cafeine' | 'hydratation';

export interface Guide {
	href: string;
	kind: GuideKind;
	topic: Topic;
	/** Titre court, pour les listes et les liens. */
	title: string;
	/** Une phrase, pour les listes. */
	summary: string;
	/** App vers laquelle la page renvoie. */
	app: 'coheria' | 'eau-et-cafe';
}

export const TOPICS: Record<Topic, string> = {
	'coherence-cardiaque': 'Cohérence cardiaque',
	cafeine: 'Caféine',
	hydratation: 'Hydratation',
};

export const GUIDES: Guide[] = [
	{
		href: '/cafeine/heure-limite-cafe/',
		kind: 'outil',
		topic: 'cafeine',
		title: 'À quelle heure boire ton dernier café ?',
		summary: 'Indique ton heure de coucher et ta sensibilité : le calculateur estime ton heure limite.',
		app: 'eau-et-cafe',
	},
	{
		href: '/hydratation/combien-d-eau-boire-par-jour/',
		kind: 'outil',
		topic: 'hydratation',
		title: 'Combien d’eau boire par jour ?',
		summary: 'Ton besoin estimé selon ton poids, ton âge et ton activité, d’après les repères de l’EFSA.',
		app: 'eau-et-cafe',
	},
	{
		href: '/cafeine/quantite-cafeine-boissons/',
		kind: 'outil',
		topic: 'cafeine',
		title: 'Quantité de caféine par boisson',
		summary: 'Espresso, café filtre, thé, cola, boisson énergisante : le tableau des valeurs moyennes.',
		app: 'eau-et-cafe',
	},
	{
		href: '/coherence-cardiaque/methode-365/',
		kind: 'guide',
		topic: 'coherence-cardiaque',
		title: 'La méthode 365 de cohérence cardiaque',
		summary: '3 séances par jour, 6 respirations par minute, 5 minutes : la méthode pas à pas.',
		app: 'coheria',
	},
	{
		href: '/coherence-cardiaque/combien-de-fois-par-jour/',
		kind: 'guide',
		topic: 'coherence-cardiaque',
		title: 'Cohérence cardiaque : combien de fois par jour ?',
		summary: 'Une, deux ou trois séances, à quels moments, et combien de temps avant d’en sentir l’effet.',
		app: 'coheria',
	},
	{
		href: '/cafeine/demi-vie-cafeine/',
		kind: 'guide',
		topic: 'cafeine',
		title: 'Demi-vie de la caféine',
		summary: 'Combien de temps la caféine reste dans le corps, et ce qui fait varier ce délai.',
		app: 'eau-et-cafe',
	},
	{
		href: '/cafeine/cafe-et-sommeil/',
		kind: 'guide',
		topic: 'cafeine',
		title: 'Café et sommeil : quel délai avant le coucher ?',
		summary: 'Combien d’heures entre le dernier café et le coucher, d’après les études.',
		app: 'eau-et-cafe',
	},
];

export function guidesFor(topic: Topic, exceptHref?: string): Guide[] {
	return GUIDES.filter((g) => g.topic === topic && g.href !== exceptHref);
}
