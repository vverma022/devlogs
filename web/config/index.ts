export const config = {
  github: {
    clientId: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
  },
  nextAuth: {
    url: process.env.NEXTAUTH_URL,
    secret: process.env.NEXTAUTH_SECRET,
  },
  urls: {
    apiUrl: process.env.NEXT_PUBLIC_API_URL,
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  },
};