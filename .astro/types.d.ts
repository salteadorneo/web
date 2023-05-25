declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]];

	// TODO: Remove this when having this fallback is no longer relevant. 2.3? 3.0? - erika, 2023-04-04
	/**
	 * @deprecated
	 * `astro:content` no longer provide `image()`.
	 *
	 * Please use it through `schema`, like such:
	 * ```ts
	 * import { defineCollection, z } from "astro:content";
	 *
	 * defineCollection({
	 *   schema: ({ image }) =>
	 *     z.object({
	 *       image: image(),
	 *     }),
	 * });
	 * ```
	 */
	export const image: never;

	// This needs to be in sync with ImageMetadata
	export type ImageFunction = () => import('astro/zod').ZodObject<{
		src: import('astro/zod').ZodString;
		width: import('astro/zod').ZodNumber;
		height: import('astro/zod').ZodNumber;
		format: import('astro/zod').ZodUnion<
			[
				import('astro/zod').ZodLiteral<'png'>,
				import('astro/zod').ZodLiteral<'jpg'>,
				import('astro/zod').ZodLiteral<'jpeg'>,
				import('astro/zod').ZodLiteral<'tiff'>,
				import('astro/zod').ZodLiteral<'webp'>,
				import('astro/zod').ZodLiteral<'gif'>,
				import('astro/zod').ZodLiteral<'svg'>
			]
		>;
	}>;

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

	export type SchemaContext = { image: ImageFunction };

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S | ((context: SchemaContext) => S);
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

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	const entryMap: {
		"blog": {
"alias-rutas-vite.md": {
  id: "alias-rutas-vite.md",
  slug: "alias-rutas-vite",
  body: string,
  collection: "blog",
  data: any
} & { render(): Render[".md"] },
"android-auto-presenta-coolwalk.md": {
  id: "android-auto-presenta-coolwalk.md",
  slug: "android-auto-presenta-coolwalk",
  body: string,
  collection: "blog",
  data: any
} & { render(): Render[".md"] },
"atomic-design.md": {
  id: "atomic-design.md",
  slug: "atomic-design",
  body: string,
  collection: "blog",
  data: any
} & { render(): Render[".md"] },
"como-instalar-pnpm.md": {
  id: "como-instalar-pnpm.md",
  slug: "como-instalar-pnpm",
  body: string,
  collection: "blog",
  data: any
} & { render(): Render[".md"] },
"descubriendo-redis.md": {
  id: "descubriendo-redis.md",
  slug: "descubriendo-redis",
  body: string,
  collection: "blog",
  data: any
} & { render(): Render[".md"] },
"generar-contrasena-javascript.md": {
  id: "generar-contrasena-javascript.md",
  slug: "generar-contrasena-javascript",
  body: string,
  collection: "blog",
  data: any
} & { render(): Render[".md"] },
"la-ia-es-el-presente.md": {
  id: "la-ia-es-el-presente.md",
  slug: "la-ia-es-el-presente",
  body: string,
  collection: "blog",
  data: any
} & { render(): Render[".md"] },
"learning-patterns.md": {
  id: "learning-patterns.md",
  slug: "learning-patterns",
  body: string,
  collection: "blog",
  data: any
} & { render(): Render[".md"] },
"obtener-hashcode-string-js.md": {
  id: "obtener-hashcode-string-js.md",
  slug: "obtener-hashcode-string-js",
  body: string,
  collection: "blog",
  data: any
} & { render(): Render[".md"] },
"playjs-0.3.1.md": {
  id: "playjs-0.3.1.md",
  slug: "playjs-031",
  body: string,
  collection: "blog",
  data: any
} & { render(): Render[".md"] },
"promesas-javascript.md": {
  id: "promesas-javascript.md",
  slug: "promesas-javascript",
  body: string,
  collection: "blog",
  data: any
} & { render(): Render[".md"] },
"raspberry-pi-4.md": {
  id: "raspberry-pi-4.md",
  slug: "raspberry-pi-4",
  body: string,
  collection: "blog",
  data: any
} & { render(): Render[".md"] },
"string-to-slug-javascript.md": {
  id: "string-to-slug-javascript.md",
  slug: "string-to-slug-javascript",
  body: string,
  collection: "blog",
  data: any
} & { render(): Render[".md"] },
"tiktok-sans-nueva-tipo.md": {
  id: "tiktok-sans-nueva-tipo.md",
  slug: "tiktok-sans-nueva-tipo",
  body: string,
  collection: "blog",
  data: any
} & { render(): Render[".md"] },
"tipos-primitivos-javascript.md": {
  id: "tipos-primitivos-javascript.md",
  slug: "tipos-primitivos-javascript",
  body: string,
  collection: "blog",
  data: any
} & { render(): Render[".md"] },
},

	};

	type ContentConfig = typeof import("../src/content/config.js");
}
