import { IsString, IsEmail, MinLength, MaxLength } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Name must be a string' })
  @MaxLength(80, { message: 'Name must not exceed 80 characters' })
  name: string;

  @IsEmail({}, { message: 'Email provided is invalid' })
  @MaxLength(120, { message: 'Email must not exceed 120 characters' })
  email: string;

  @IsString()
  @MinLength(6, { message: 'Password must have at least 6 characters' })
  @MaxLength(128, { message: 'Password must not exceed 128 characters' })
  password: string;
}
