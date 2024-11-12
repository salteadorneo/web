import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({ 
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedDate: z.date(),
    tags: z.array(z.string()),
    image: z.string().optional(),
  })
});

export const collections = {
  'blog': blogCollection,
};