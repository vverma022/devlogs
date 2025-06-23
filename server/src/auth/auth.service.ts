import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';

interface GithubUser {
  id: number;
  login: string;
  email: string | null;
  avatar_url: string | null;
}

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
  ) {}

  async loginWithGithub(code: string) {
    const clientId = this.configService.get<string>('github.clientId');
    const clientSecret = this.configService.get<string>('github.clientSecret');

    const tokenResponse = await fetch(
      'https://github.com/login/oauth/access_token',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          client_id: clientId,
          client_secret: clientSecret,
          code,
        }),
      },
    );

    const tokenData = (await tokenResponse.json()) as { access_token?: string };
    const accessToken = tokenData.access_token;

    if (!accessToken) {
      throw new Error('Could not get access token from GitHub');
    }

    const userResponse = await fetch('https://api.github.com/user', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const userData = (await userResponse.json()) as GithubUser;

    // Find or create user in DB
    let user = await this.prisma.user.findUnique({
      where: { githubId: userData.id },
    });

    if (!user) {
      user = await this.prisma.user.create({
        data: {
          githubId: userData.id,
          username: userData.login,
          email: userData.email,
          avatarUrl: userData.avatar_url,
        },
      });
    }

    // Use DB user info in JWT
    const payload = {
      sub: user.id,
      username: user.username,
      avatar: user.avatarUrl,
      accessToken,
    };

    const jwt = await this.jwtService.signAsync(payload);

    return {
      jwt,
    };
  }
}
