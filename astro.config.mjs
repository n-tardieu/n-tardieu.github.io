// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://n-tardieu.github.io',
    redirects: {
        '/coheria/privacy-fr': '/privacy#fr',
        '/coheria/privacy-en': '/privacy#en',
    },
});
