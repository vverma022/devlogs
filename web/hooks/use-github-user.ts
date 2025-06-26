import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { GitHubUser } from '@/types/github.types';

interface UseGitHubUserReturn {
  githubUser: GitHubUser | null;
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
}

const fetchGitHubUser = async (token: string): Promise<GitHubUser> => {
  const response = await fetch('https://api.github.com/user', {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/vnd.github.v3+json',
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.log('GitHub API error:', errorText);
    throw new Error(`Failed to fetch GitHub data: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  const parsed = githubUserSchema.safeParse(data);
  if (!parsed.success) {
    console.error('GitHub user validation error:', parsed.error);
    throw new Error('Invalid GitHub user data');
  }
  return parsed.data;
};

export const useGitHubUser = (): UseGitHubUserReturn => {
  const { data: session } = useSession();

  const {
    data: githubUser,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ['github-user', session?.user?.token],
    queryFn: () => fetchGitHubUser(session!.user!.token!),
    enabled: !!session?.user?.token,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
    retry: (failureCount, error) => {
      // Don't retry if it's an authentication error
      if (error instanceof Error && error.message.includes('401')) {
        return false;
      }
      return failureCount < 3;
    },
  });

  return {
    githubUser: githubUser || null,
    isLoading,
    error: error as Error | null,
    refetch,
  };
}; 