import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserDto {
  @ApiProperty({ example: 'Test' })
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({ example: 'Test1' })
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({ example: 'email@domain.com' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ example: '7e4b8b8f-453a-4758-96b7-ed21acadcdab' })
  @IsNotEmpty()
  id: string;
}
