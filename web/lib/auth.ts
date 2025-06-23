import { AuthOptions } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import { decodeJwt } from 'jose';
import { config } from '@/config';

interface DecodedToken {
  sub: string;
  username: string;
  avatar: string;
  accessToken: string;
  iat: number;
  exp: number;
}

export const authOptions: AuthOptions = {
  providers: [
    GitHubProvider({
      clientId: config.github.clientId as string,
      clientSecret: config.github.clientSecret as string,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        token: { label: 'Token', type: 'text' },
      },
      async authorize(credentials) {
        if (credentials?.token) {
          try {
            const decoded = decodeJwt(credentials.token) as DecodedToken;
            // The token is valid, return a user object for the session
            return {
              id: decoded.sub,
              name: decoded.username,
              image: decoded.avatar,
              accessToken: decoded.accessToken,
            };
          } catch (error) {
            console.error('Failed to decode JWT', error);
            return null;
          }
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token from a provider.
      if (session.user) {
        session.user.token = token.accessToken;
      }
      return session;
    },
  },
  session: {
    strategy: 'jwt',
    maxAge: 7 * 24 * 60 * 60,
  },
};
