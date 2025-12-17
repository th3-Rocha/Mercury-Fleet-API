import { IsEmail, IsString, MaxLength } from 'class-validator';

export class CreateRecipientDto {
    @IsString()
    @MaxLength(200, { message: 'Full address must not exceed 200 characters' })
    fullAddress: string;

    @IsEmail()
    @MaxLength(120, { message: 'Email must not exceed 120 characters' })
    email: string;

    @IsString()
    @MaxLength(20, { message: 'Phone must not exceed 20 characters' })
    phone: string;

    @IsString()
    @MaxLength(80, { message: 'Name must not exceed 80 characters' })
    name: string;
}
