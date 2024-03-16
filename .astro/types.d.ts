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
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": {
"alias-rutas-vite.md": {
	id: "alias-rutas-vite.md";
  slug: "alias-rutas-vite";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"android-auto-presenta-coolwalk.md": {
	id: "android-auto-presenta-coolwalk.md";
  slug: "android-auto-presenta-coolwalk";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"atomic-design.md": {
	id: "atomic-design.md";
  slug: "atomic-design";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"como-instalar-pnpm.md": {
	id: "como-instalar-pnpm.md";
  slug: "como-instalar-pnpm";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"descubriendo-redis.md": {
	id: "descubriendo-redis.md";
  slug: "descubriendo-redis";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"generar-contrasena-javascript.md": {
	id: "generar-contrasena-javascript.md";
  slug: "generar-contrasena-javascript";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"infojobs-hackathon-midudev.md": {
	id: "infojobs-hackathon-midudev.md";
  slug: "infojobs-hackathon-midudev";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"la-ia-es-el-presente.md": {
	id: "la-ia-es-el-presente.md";
  slug: "la-ia-es-el-presente";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"learning-patterns.md": {
	id: "learning-patterns.md";
  slug: "learning-patterns";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"obtener-hashcode-string-js.md": {
	id: "obtener-hashcode-string-js.md";
  slug: "obtener-hashcode-string-js";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"open-source-jam-madrid.md": {
	id: "open-source-jam-madrid.md";
  slug: "open-source-jam-madrid";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"playjs-0.3.1.md": {
	id: "playjs-0.3.1.md";
  slug: "playjs-031";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"playjs-0.4.md": {
	id: "playjs-0.4.md";
  slug: "playjs-04";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"promesas-javascript.md": {
	id: "promesas-javascript.md";
  slug: "promesas-javascript";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"raspberry-pi-4.md": {
	id: "raspberry-pi-4.md";
  slug: "raspberry-pi-4";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"string-to-slug-javascript.md": {
	id: "string-to-slug-javascript.md";
  slug: "string-to-slug-javascript";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"tiktok-sans-nueva-tipo.md": {
	id: "tiktok-sans-nueva-tipo.md";
  slug: "tiktok-sans-nueva-tipo";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"tipos-primitivos-javascript.md": {
	id: "tipos-primitivos-javascript.md";
  slug: "tipos-primitivos-javascript";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("./../src/content/config.js");
}
