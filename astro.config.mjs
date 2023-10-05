import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://tylerwittig.com',
  markdown: {
    /*
    To replace 'syntaxHighlight: false' with custom syntax highlighting, see:
    https://christianpenrod.com/blog/astro-shiki-syntax-highlighting-with-css-variables/
    */
    syntaxHighlight: false
  },
  integrations: [mdx(), sitemap(), react()]
});