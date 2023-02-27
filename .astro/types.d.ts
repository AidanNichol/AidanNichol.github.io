declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]] & Render;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<S>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"aidan": {
"bowesCushion.mdx": {
  id: "bowesCushion.mdx",
  slug: "bowescushion",
  body: string,
  collection: "aidan",
  data: any
},
"drinksLikeAFish.mdx": {
  id: "drinksLikeAFish.mdx",
  slug: "drinkslikeafish",
  body: string,
  collection: "aidan",
  data: any
},
"durham1.mdx": {
  id: "durham1.mdx",
  slug: "durham1",
  body: string,
  collection: "aidan",
  data: any
},
"durham2.mdx": {
  id: "durham2.mdx",
  slug: "durham2",
  body: string,
  collection: "aidan",
  data: any
},
"durham3.mdx": {
  id: "durham3.mdx",
  slug: "durham3",
  body: string,
  collection: "aidan",
  data: any
},
"elizabethSandersonCushion.mdx": {
  id: "elizabethSandersonCushion.mdx",
  slug: "elizabethsandersoncushion",
  body: string,
  collection: "aidan",
  data: any
},
"elizabethSandersonTestPanel.mdx": {
  id: "elizabethSandersonTestPanel.mdx",
  slug: "elizabethsandersontestpanel",
  body: string,
  collection: "aidan",
  data: any
},
"pageBankCushion.mdx": {
  id: "pageBankCushion.mdx",
  slug: "pagebankcushion",
  body: string,
  collection: "aidan",
  data: any
},
"songOfTheTyne.mdx": {
  id: "songOfTheTyne.mdx",
  slug: "songofthetyne",
  body: string,
  collection: "aidan",
  data: any
},
"tullyCushion.mdx": {
  id: "tullyCushion.mdx",
  slug: "tullycushion",
  body: string,
  collection: "aidan",
  data: any
},
"welshQuilt.mdx": {
  id: "welshQuilt.mdx",
  slug: "welshquilt",
  body: string,
  collection: "aidan",
  data: any
},
},
"heritage": {
"JoeTheQuilterBeamish.mdx": {
  id: "JoeTheQuilterBeamish.mdx",
  slug: "joethequilterbeamish",
  body: string,
  collection: "heritage",
  data: InferEntrySchema<"heritage">
},
"JoeTheQuilterBowes.mdx": {
  id: "JoeTheQuilterBowes.mdx",
  slug: "joethequilterbowes",
  body: string,
  collection: "heritage",
  data: InferEntrySchema<"heritage">
},
"JoeTheQuilterTullyHouse.mdx": {
  id: "JoeTheQuilterTullyHouse.mdx",
  slug: "joethequiltertullyhouse",
  body: string,
  collection: "heritage",
  data: InferEntrySchema<"heritage">
},
"TheSidmouthQuilt.mdx": {
  id: "TheSidmouthQuilt.mdx",
  slug: "thesidmouthquilt",
  body: string,
  collection: "heritage",
  data: InferEntrySchema<"heritage">
},
},
"margaret": {
"AntipodeanPastimes.mdx": {
  id: "AntipodeanPastimes.mdx",
  slug: "antipodeanpastimes",
  body: string,
  collection: "margaret",
  data: any
},
"BQSG Banner.mdx": {
  id: "BQSG Banner.mdx",
  slug: "bqsg-banner",
  body: string,
  collection: "margaret",
  data: any
},
"Crosspatch.mdx": {
  id: "Crosspatch.mdx",
  slug: "crosspatch",
  body: string,
  collection: "margaret",
  data: any
},
"TreeGoddess.mdx": {
  id: "TreeGoddess.mdx",
  slug: "treegoddess",
  body: string,
  collection: "margaret",
  data: any
},
"UnderTheBoardwalk.mdx": {
  id: "UnderTheBoardwalk.mdx",
  slug: "undertheboardwalk",
  body: string,
  collection: "margaret",
  data: any
},
"autumnSampler.mdx": {
  id: "autumnSampler.mdx",
  slug: "autumnsampler",
  body: string,
  collection: "margaret",
  data: any
},
"cuddysWay.mdx": {
  id: "cuddysWay.mdx",
  slug: "cuddysway",
  body: string,
  collection: "margaret",
  data: any
},
"stMarysIsland.mdx": {
  id: "stMarysIsland.mdx",
  slug: "stmarysisland",
  body: string,
  collection: "margaret",
  data: any
},
},

	};

	type ContentConfig = typeof import("../src/content/config");
}
