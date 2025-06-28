import { z } from 'zod';

export const GithubUserSchema = z.object({
  login: z.string(),
  id: z.number(),
  avatar_url: z.string().url(),
  name: z.string().nullable(),
  bio: z.string().nullable(),
  location: z.string().nullable(),
  company: z.string().nullable(),
  blog: z.string().nullable(),
  created_at: z.string(),
  updated_at: z.string(),
  html_url: z.string().url(),
});

export const githubUserSchema = GithubUserSchema; 