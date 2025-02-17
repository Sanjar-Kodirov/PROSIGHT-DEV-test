import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private jwtService;
    private readonly users;
    constructor(jwtService: JwtService);
    login(username: string): Promise<{
        access_token: string;
    }>;
}
