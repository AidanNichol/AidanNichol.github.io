// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Import loader(s)
import { glob, file } from 'astro/loaders';
// 2. Define a schema for each collection you'd like to validate.
const heritageSchema = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/heritage' }),

  schema: z.object({
    title: z.string(),
    museum: z.string(),
    quilter: z.string(),
    image: z.string().optional(),
    thumbNail: z.string().optional(),
    dimensions: z.string().optional(),
  }),
});
const documentSchema = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/docs' }),
  schema: z.object({
    title: z.string(),
    pdf: z.string(),
    image: z.string().optional(),
    thumbNail: z.string().optional(),
  }),
});
const personSchema = z.object({
  title: z.string(),
  person: z.string(),
  quiltedBy: z.string().optional(),
  designedBy: z.string().optional(),
  completed: z.string().optional(),
  shortname: z.string().optional(),
  subtitle: z.string().optional(),
  technique: z.string().optional(),
  image: z.string().optional(),
  thumbNail: z.string().optional(),
  dimensions: z.string().optional(),
  subPages: z.string().optional(),
});
const aidan = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/aidan' }),
  schema: personSchema,
});
const margaret = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/margaret' }),
  schema: personSchema,
});
// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  heritage: heritageSchema,
  aidan,
  margaret,
  docs: documentSchema,
};
