// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Import loader(s)
import { glob, file } from 'astro/loaders';
// 2. Define a schema for each collection you'd like to validate.
const baseSchema = z.object({
  title: z.string(),
  shortname: z.string().optional(),
  image: z.string().optional(),
  thumbNail: z.string().optional(),
  completed: z.string().optional(),
  subtitle: z.string().optional(),
});

const contentSchema = baseSchema.extend({
  person: z.string().optional(),
  quiltedBy: z.string().optional(),
  designedBy: z.string().optional(),
  museum: z.string().optional(),
  quilter: z.string().optional(),
  technique: z.string().optional(),
  dimensions: z.string().optional(),
  subPages: z.string().optional(),
  pdf: z.string().optional(),
});
const docsSchema = baseSchema.extend({
  pdf: z.string(),
});

const aidan = defineCollection({
  loader: glob({ pattern: ['**/*.mdx', '!dt/*mdx'], base: './src/content/aidan' }),
  schema: contentSchema,
});
const dt = defineCollection({
  loader: glob({ pattern: ['**/*.mdx'], base: './src/content/aidan/dt' }),
  schema: contentSchema,
});
const margaret = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/margaret' }),
  schema: contentSchema,
});
const heritage = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/heritage' }),
  schema: contentSchema,
});
const docs = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/docs' }),
  schema: docsSchema,
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  heritage,
  aidan,
  margaret,
  docs,
  dt,
};
export type MyContent = z.infer<typeof contentSchema>;
export type Entry = {
  body: string;
  collection: string;
  data: MyContent;
  deferredRender: boolean;
  digest: string;
  filePath: string;
  id: string;
};

export type Documents = z.infer<typeof docsSchema>;
