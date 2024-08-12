import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { UserDto } from './user.response';

export class AuthResponseDto {
  @ApiProperty({ example: '3600' })
  @IsNotEmpty()
  expiresIn: string;

  @ApiProperty({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' })
  @IsNotEmpty()
  accessToken: string;

  @ApiProperty({ type: UserDto })
  @IsNotEmpty()
  user: UserDto;
}
