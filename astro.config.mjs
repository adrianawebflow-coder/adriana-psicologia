// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Dominio definitivo (Cloudflare): base de las URL canónicas.
  site: 'https://adrianapsicologia.com',
  // Las páginas se sirven sin barra final (/contacto), igual que los enlaces
  // internos; ver html_handling en wrangler.jsonc.
  trailingSlash: 'never',
});
