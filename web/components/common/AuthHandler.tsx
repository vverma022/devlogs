'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { useEffect } from 'react';

export const AuthHandler = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get('token');

  useEffect(() => {
    if (token) {
      signIn('credentials', { token, redirect: false }).then(() => {
        // Redirect to the same page but without the token in the URL
        window.history.replaceState({}, '', window.location.pathname);
      });
    }
  }, [token, router]);

  return null; // This component doesn't render anything
}; 