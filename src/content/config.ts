import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.coerce.date(),
		isDraft: z.boolean().optional().default(true),
	}),
});

export const collections = { blog };
