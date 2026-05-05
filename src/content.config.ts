import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const posts = defineCollection({
  loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),
    layout: z.string().optional(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }).optional(),
  }),
});

const projets = defineCollection({
  loader: glob({ base: './src/content/projets', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    year: z.number(),
    client: z.string().optional(),
    sector: z.string().optional(),
    status: z.enum(['livré', 'en cours', 'maintenance']).default('livré'),
    featured: z.boolean().default(false),
    color: z.string().default('#C84B11'),
    stack: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = {
    posts,
    projets,
};