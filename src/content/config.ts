// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const reflections = defineCollection({
  schema: z.object({
    title: z.string(),
    order: z.number(),
    // akzeptiert sowohl "2025-10-03" als String als auch echtes Date
    date: z.coerce.date().optional(),
    qas: z.array(z.object({
      q: z.string(),
      a: z.string(),
    })),
  }),
});

export const collections = { reflections };
