export default () => ({
  port: parseInt(process.env.PORT || '3001', 10),
  clientUrl: process.env.CLIENT_URL,
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: '1d',
  },
  github: {
    clientId: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackUrl: process.env.GITHUB_CALLBACK_URL,
    scope: 'read:user repo',
  },
});
