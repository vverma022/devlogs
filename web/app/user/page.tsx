"use client";
import { useSession } from 'next-auth/react';

export default function UserPage() {
  const { data: session, status } = useSession();

  if (status === 'loading') return <div>Loading...</div>;
  if (!session) return <div>Not authenticated</div>;

  return (
    <div>
      <h1>User Details</h1>
      <pre>{JSON.stringify(session.user, null, 2)}</pre>
    </div>
  );
} 