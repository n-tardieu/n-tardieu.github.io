// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://n-tardieu.github.io',
    redirects: {
        '/guides': '/',
        '/coheria/privacy-fr': '/privacy#fr',
        '/coheria/privacy-en': '/privacy#en',
        '/coherence-cardiaque/methode-365': '/coheria/guides/methode-365/',
        '/coherence-cardiaque/combien-de-fois-par-jour': '/coheria/guides/combien-de-fois-par-jour/',
        '/cafeine/heure-limite-cafe': '/eau-et-cafe/guides/heure-limite-cafe/',
        '/cafeine/quantite-cafeine-boissons': '/eau-et-cafe/guides/quantite-cafeine-boissons/',
        '/cafeine/demi-vie-cafeine': '/eau-et-cafe/guides/demi-vie-cafeine/',
        '/cafeine/cafe-et-sommeil': '/eau-et-cafe/guides/cafe-et-sommeil/',
        '/hydratation/combien-d-eau-boire-par-jour': '/eau-et-cafe/guides/combien-d-eau-boire-par-jour/',
    },
});
