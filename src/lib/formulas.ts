// Calculs repris tels quels de l'app Eau & Café (brimm/utils/caffeine.ts et
// utils/goal.ts), pour que les outils du site donnent les mêmes chiffres.

// --- Caféine ---------------------------------------------------------------

export type Sensitivity = 'fast' | 'medium' | 'slow';

/** Demi-vie selon la sensibilité choisie, en heures. */
export const HALF_LIFE_H: Record<Sensitivity, number> = { fast: 3.5, medium: 5, slow: 7 };

/** Caféine restante acceptable au coucher, en mg. */
export const CUTOFF_THRESHOLD_MG = 30;

/** Caféine restante après `hours` heures : `D × 0.5^(heures / demi-vie)`. */
export function remaining(doseMg: number, hours: number, halfLifeH: number): number {
	if (hours < 0 || doseMg <= 0) return 0;
	return doseMg * Math.pow(0.5, hours / halfLifeH);
}

/**
 * Heure la plus tardive du dernier café : `coucher − h × log2(D / seuil)`,
 * arrondie aux 5 minutes vers le bas. 80 mg, 5 h, 23:00 → 15:55.
 */
export function cutoffTime(bedtime: string, doseMg: number, halfLifeH: number, thresholdMg = CUTOFF_THRESHOLD_MG): string {
	if (doseMg <= thresholdMg) return bedtime;
	const hoursBefore = halfLifeH * Math.log2(doseMg / thresholdMg);
	const minutes = hmToMinutes(bedtime) - hoursBefore * 60;
	return minutesToHM(Math.floor(minutes / 5) * 5);
}

export function hmToMinutes(hm: string): number {
	const [h, m] = hm.split(':').map(Number);
	return h * 60 + m;
}

export function minutesToHM(minutes: number): string {
	const m = ((Math.round(minutes) % 1440) + 1440) % 1440;
	return `${String(Math.floor(m / 60)).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}`;
}

// --- Eau ---------------------------------------------------------------------

export type AgeBracket = '<18' | '18-35' | '35-55' | '55+';
export type ActivityLevel = 'sedentaire' | 'actif' | 'sportif';

/**
 * mL de boissons par kg et par jour selon l'activité. EFSA (2010) : apport
 * adéquat de 2,0 L (femmes) et 2,5 L (hommes) d'eau totale, dont ~80 % en
 * boissons, soit ~1,8 L en moyenne pour un adulte de 70 kg ≈ 26 mL/kg ;
 * l'activité ajoute le bas de la fourchette de compensation de l'ACSM.
 */
export const ML_PER_KG_BY_ACTIVITY: Record<ActivityLevel, number> = { sedentaire: 26, actif: 30, sportif: 34 };

/** Plancher par âge : repères EFSA les plus bas (enfants 4–8 ans ; femmes adultes). */
export const MIN_GOAL_ML_BY_AGE: Record<AgeBracket, number> = { '<18': 1350, '18-35': 1600, '35-55': 1600, '55+': 1600 };

/** Le terme par kg est plafonné à 100 kg (la masse grasse contient peu d'eau). */
export const MAX_WEIGHT_FOR_FORMULA_KG = 100;

/** Plafond général avant les risques d'excès d'eau. */
export const MAX_GOAL_ML = 3500;

/** Besoin estimé en boissons (mL/jour), arrondi à 50 mL. */
export function calcGoalMl(kg: number, age: AgeBracket, activity: ActivityLevel): number {
	const ml = Math.min(kg, MAX_WEIGHT_FOR_FORMULA_KG) * ML_PER_KG_BY_ACTIVITY[activity];
	return Math.min(MAX_GOAL_ML, Math.max(MIN_GOAL_ML_BY_AGE[age], Math.round(ml / 50) * 50));
}
