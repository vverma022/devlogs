import { z } from 'zod';
import { GithubUserSchema } from './schemas';

export type GitHubUser = z.infer<typeof GithubUserSchema>;