import { Controller, Get, Query, Res } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly configService: ConfigService,
    private readonly authService: AuthService,
  ) {}

  @Get('github')
  loginWithGithub(@Res() res: Response) {
    const clientId = this.configService.get<string>('github.clientId');
    const redirectUri = this.configService.get<string>('github.callbackUrl');
    const scope = this.configService.get<string>('github.scope');
    const url = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;
    res.redirect(url);
  }

  @Get('github/callback')
  async githubCallback(@Query('code') code: string, @Res() res: Response) {
    if (!code) {
      // Handle error, redirect back to frontend with an error message
      const clientUrl = this.configService.get<string>('clientUrl');
      return res.redirect(`${clientUrl}/?error=github_login_failed`);
    }

    try {
      const { jwt } = await this.authService.loginWithGithub(code);
      const clientUrl = this.configService.get<string>('clientUrl');

      res.redirect(`${clientUrl}/?token=${jwt}`);
    } catch (error) {
      console.error(error);
      // Handle error, redirect back to frontend with an error message
      const clientUrl = this.configService.get<string>('clientUrl');
      res.redirect(`${clientUrl}/?error=github_login_failed`);
    }
  }
}
