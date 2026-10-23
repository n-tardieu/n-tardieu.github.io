// Caféine moyenne par boisson, reprise du catalogue d'Eau & Café
// (brimm/constants/drinks.ts). Valeurs moyennes : la teneur réelle varie avec
// le grain, la préparation et la marque.

export interface CaffeineDrink {
	id: string;
	name: string;
	ml: number;
	caffeineMg: number;
	/** Proposée dans le calculateur d'heure limite. */
	cutoff?: boolean;
}

export const CAFFEINE_DRINKS: CaffeineDrink[] = [
	{ id: 'espresso', name: 'Expresso', ml: 60, caffeineMg: 80, cutoff: true },
	{ id: 'double', name: 'Double expresso', ml: 120, caffeineMg: 160, cutoff: true },
	{ id: 'lungo', name: 'Café allongé', ml: 200, caffeineMg: 90, cutoff: true },
	{ id: 'latte', name: 'Latte / cappuccino', ml: 250, caffeineMg: 80, cutoff: true },
	{ id: 'decaf', name: 'Déca', ml: 60, caffeineMg: 4 },
	{ id: 'blacktea', name: 'Thé noir', ml: 250, caffeineMg: 40, cutoff: true },
	{ id: 'greentea', name: 'Thé vert', ml: 250, caffeineMg: 30 },
	{ id: 'cola', name: 'Cola', ml: 330, caffeineMg: 32 },
	{ id: 'colazero', name: 'Cola zéro', ml: 330, caffeineMg: 35 },
	{ id: 'energy', name: 'Boisson énergisante', ml: 250, caffeineMg: 80, cutoff: true },
];
