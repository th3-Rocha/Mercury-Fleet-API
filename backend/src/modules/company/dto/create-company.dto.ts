import { Decimal } from '@prisma/client/runtime/client';
import {
    IsDecimal,
    IsEmail,
    IsEnum,
    IsNumber,
    IsOptional,
    IsString,
    IsUUID,
    MaxLength,
} from 'class-validator';
import { SubscriptionPlan } from 'src/generated/prisma/enums';

export class CreateCompanyDto {
    @IsString()
    @MaxLength(80, { message: 'Trade name must not exceed 80 characters' })
    tradeName: string;

    @IsString()
    @MaxLength(100, { message: 'Legal name must not exceed 100 characters' })
    legalName: string;

    @IsDecimal()
    balance: Decimal;

    @IsString()
    @MaxLength(20, { message: 'Tax ID must not exceed 20 characters' })
    taxId: string;

    @IsEmail()
    @MaxLength(120, { message: 'Support email must not exceed 120 characters' })
    supportEmail: string;

    @IsString()
    @MaxLength(20, { message: 'Main phone must not exceed 20 characters' })
    mainPhone: string;

    @IsEnum(SubscriptionPlan)
    @IsOptional()
    subscriptionPlan?: SubscriptionPlan;

    @IsUUID()
    userId: string;
}
