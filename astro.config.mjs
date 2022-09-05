import { defineConfig } from 'astro/config';
import image from '@astrojs/image';
import { defaultLayoutPlugin } from './defaultLayoutPlugin.mjs';
import remarkGfm from 'remark-gfm';
import remarkSmartypants from 'remark-smartypants';
// import { defaultLayoutPluginMDX } from './defaultLayoutPluginMDX.mjs';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://AidanNichol.github.io',
  integrations: [
    image(),
    mdx({
      remarkPlugins: [
        defaultLayoutPlugin,
        remarkGfm,
        [remarkSmartypants, { dashes: 'oldschool' }],
      ],
      // extendDefaultPlugins: true,
    }),
  ],
  markdown: {
    remarkPlugins: [
      defaultLayoutPlugin,
      remarkGfm,
      [remarkSmartypants, { dashes: 'oldschool' }],
    ],
    // extendDefaultPlugins: true,
  },
});
