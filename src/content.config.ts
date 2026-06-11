import { defineCollection } from "astro:content"
import { glob } from "astro/loaders"
import { z } from "astro/zod"

const catalog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/catalog" }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    shortDescription: z.string(),
    description: z.string(),
    idealFor: z.array(z.string()),
    features: z.array(z.string()),
    complexity: z.enum(["Basic", "Moderate", "Complex"]),
    timeline: z.string(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    keywords: z.array(z.string()).optional(),
  }),
})

export const collections = { catalog }
