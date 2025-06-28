import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { GitHubUser } from '@/types/github.types';
import { githubUserSchema } from '@/types/schemas';

interface UseGitHubUserReturn {
  githubUser: GitHubUser | null;
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
}

const fetchGitHubUser = async (token: string): Promise<GitHubUser> => {
  const response = await fetch('https://api.github.com/user', {
    headers: {
      'Accept': 'application/vnd.github.v3+json',
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(
      response.status === 401 
        ? 'GitHub authentication failed' 
        : `Failed to fetch user: ${response.status}`
    );
  }

  const data = await response.json();
  const result = githubUserSchema.safeParse(data);
  
  if (!result.success) {
    throw new Error('Invalid GitHub user data');
  }

  return result.data;
};

export const useGitHubUser = (): UseGitHubUserReturn => {
  const { data: session } = useSession();
  const token = session?.user?.token;

  const query = useQuery({
    queryKey: ['github-user', token],
    queryFn: () => fetchGitHubUser(token!),
    enabled: !!token,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000,   // 10 minutes
    retry: (count, error) => 
      count < 3 && !error.message.includes('authentication failed'),
  });

  return {
    githubUser: query.data ?? null,
    isLoading: query.isLoading,
    error: query.error,
    refetch: query.refetch,
  };
};