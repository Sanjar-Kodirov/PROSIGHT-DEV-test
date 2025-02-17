import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    description: 'Username (admin, normal, or limited)',
    example: 'admin',
  })
  @IsString()
  username: string;
} 