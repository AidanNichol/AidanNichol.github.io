import { defineConfig, envField } from 'astro/config';
import remarkGfm from 'remark-gfm';
import remarkSmartypants from 'remark-smartypants';
// import astroLayouts from 'astro-layouts';
import mdx from '@astrojs/mdx';

export default defineConfig({
  trailingSlash: 'never',
  site: 'https://nicholware.art',
  experimental: {
    responsiveImages: false,
  },
  image: {
    // experimentalObjectFit: 'contain',
    // experimentalLayout: 'constrained',
  },
  server: {
    port: 4321,
  },
  integrations: [mdx()],
  markdown: {
    remarkPlugins: [
      // [astroLayouts, layoutOptions],
      remarkGfm,
      [remarkSmartypants, { dashes: 'oldschool' }],
    ],
  },
  env: {
    schema: {
      SHOW_BOX: envField.boolean({ access: 'public', context: 'client', default: false }),
      BOX_STYLE: envField.string({ context: 'client', access: 'public', default: '' }),
    },
  },
});
