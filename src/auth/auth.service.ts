import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  private readonly users = [
    { username: 'admin', role: 'admin' },
    { username: 'normal', role: 'normal' },
    { username: 'limited', role: 'limited' },
  ];

  constructor(private jwtService: JwtService) {}

  async login(username: string) {
    const user = this.users.find((u) => u.username === username);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const payload = { username: user.username, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
