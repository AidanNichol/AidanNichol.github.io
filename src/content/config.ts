// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// 2. Define a schema for each collection you'd like to validate.
const blogCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		museum: z.string(),
		quilter: z.string(),
		image: z.string().optional(),
		dimensions: z.string().optional(),
	}),
});
// 3. Export a single `collections` object to register your collection(s)
export const collections = {
	heritage: blogCollection,
};
