import { defineCollection, reference, z } from 'astro:content';

const posts = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		author: z.string().optional(),
		blurb: z.string().optional(),
		category: z.string(),
		datePublished: z.string(),
		dateUpdated: z.string().optional(),
		description: z.string(),
		featuredRank: z.number().optional(),
		hasTableOfContents: z.boolean().optional(),
		hidden: z.string().optional(),
		heroImage: z.string().optional(),
		links: z.array(
			z.object({
				text: z.string(),
				href: z.string()
			})
		).optional(),
		relatedPosts: z.array(reference('posts')).optional(),
		tags: z.array(z.string()).optional(),
		title: z.string(),
	}),
});

const tagInfo = defineCollection({
	type: 'content',
});

export const collections = { posts, tagInfo };
