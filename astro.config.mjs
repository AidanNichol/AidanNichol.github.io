import { defineConfig } from 'astro/config';
import remarkGfm from 'remark-gfm';
import remarkSmartypants from 'remark-smartypants';
// import astroLayouts from 'astro-layouts';
import mdx from '@astrojs/mdx';

// const layoutOptions = {
//   'content/**/*': null,
//   'pages/aidan/**/*': '/src/layouts/work.astro',
//   'pages/margaret/**/*': '/src/layouts/work.astro',
//   'pages/heritage/**/*': '/src/layouts/work.astro',
// };

// https://astro.build/config
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
  integrations: [mdx()],
  markdown: {
    remarkPlugins: [
      // [astroLayouts, layoutOptions],
      remarkGfm,
      [remarkSmartypants, { dashes: 'oldschool' }],
    ],
  },
});
