import 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      token?: string;
    } & DefaultSession['user'];
  }

  interface User {
    accessToken?: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    accessToken?: string;
  }
} 