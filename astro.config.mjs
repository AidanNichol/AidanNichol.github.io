import { defineConfig } from "astro/config";
import image from "@astrojs/image";
import remarkGfm from "remark-gfm";
import remarkSmartypants from "remark-smartypants";
import astroLayouts from "astro-layouts";
import mdx from "@astrojs/mdx";

const layoutOptions = {
	"content/**/*": null,
	"pages/aidan/**/*": "/src/layouts/work.astro",
	"pages/margaret/**/*": "/src/layouts/work.astro",
};

// https://astro.build/config
export default defineConfig({
	trailingSlash: "never",
	site: "https://nicholware.art",
	integrations: [image(), mdx()],
	markdown: {
		remarkPlugins: [
			[astroLayouts, layoutOptions],
			remarkGfm,
			[remarkSmartypants, { dashes: "oldschool" }],
		],
	},
});
