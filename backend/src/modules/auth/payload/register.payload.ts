import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Matches, MinLength } from 'class-validator';
import { SameAs } from '../../common/validator/same-as.validator';

export class RegisterPayload {
  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({
    required: true,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  @Matches(/.*[A-Za-z].*/, {
    message: 'Password must contain at least one letter',
  })
  @Matches(/.*\d.*/, { message: 'Password must contain at least one number' })
  @Matches(/.*[!@#$%^&*(),.?":{}|<>].*/, {
    message: 'Password must contain at least one special character',
  })
  password: string;

  @ApiProperty({ required: true })
  @SameAs('password')
  passwordConfirmation: string;
}
