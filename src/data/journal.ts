// Le journal : vie de dev, comment j'utilise mes apps, nouvelles. Chaque article
// est un fichier Markdown de src/pages/journal/ qui utilise le gabarit
// JournalPost ; il apparaît tout seul sur l'accueil (la section reste masquée
// tant qu'il n'y en a aucun).

export interface JournalFrontmatter {
	title: string;
	description: string;
	/** Date de publication, AAAA-MM-JJ (entre guillemets dans le frontmatter). */
	published: string;
	/** Image de couverture, chemin depuis /public (facultatif). */
	cover?: string;
	/** Durée de lecture, en minutes. */
	minutes?: number;
}

export interface JournalPost extends JournalFrontmatter {
	href: string;
}

const files = import.meta.glob<{ frontmatter: JournalFrontmatter; url: string }>('../pages/journal/*.md', { eager: true });

export const JOURNAL: JournalPost[] = Object.values(files)
	.map((f) => ({ ...f.frontmatter, href: `${f.url}/` }))
	.sort((a, b) => b.published.localeCompare(a.published));
