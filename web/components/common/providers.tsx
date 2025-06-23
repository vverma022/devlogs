'use client';

import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import { ReactQueryClientProvider } from '@/lib/tanstack-provider';
import { AuthHandler } from './AuthHandler';
import { Suspense } from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryClientProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <SessionProvider>
          <Suspense fallback={null}>
            <AuthHandler />
          </Suspense>
          {children}
        </SessionProvider>
      </ThemeProvider>
    </ReactQueryClientProvider>
  );
} 