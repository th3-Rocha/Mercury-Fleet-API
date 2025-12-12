import { IsEmail, IsString } from 'class-validator';

export class CreateRecipientDto {
    @IsString()
    fullAddress: string;

    @IsEmail()
    email: string;

    @IsString()
    phone: string;

    @IsString()
    name: string;
}
