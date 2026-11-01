
import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  loader: glob({
    base: './src/content/posts',
    pattern: '**/*.{md,mdx}',
  }),
  // Type-check frontmatter using a schema
  schema: z.object({
    author: z.string().optional(),
    blurb: z.string().optional(),
    datePublished: z.string(),
    dateUpdated: z.string().optional(),
    description: z.string(),
    featuredRank: z.number().optional(),
    hasTableOfContents: z.boolean().default(false),
    hidden: z.string().optional(),
    heroImage: z.string().optional(),
    links: z.array(
      z.object({
        text: z.string(),
        href: z.string(),
      })
    ).optional(),
    relatedPosts: z.array(reference('posts')).optional(),
    tags: z.array(z.string()).optional(),
    title: z.string(),
    type: z.enum(['project', 'article']),
  }),
});

const tagInfo = defineCollection({
  loader: glob({
    base: './src/content/tagInfo',
    pattern: '**/*.{md,mdx}',
  }),
});

export const collections = { posts, tagInfo };
