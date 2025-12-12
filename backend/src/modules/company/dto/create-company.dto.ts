import { Decimal } from '@prisma/client/runtime/client';
import {
    IsDecimal,
    IsEmail,
    IsEnum,
    IsNumber,
    IsOptional,
    IsString,
    IsUUID,
} from 'class-validator';
import { SubscriptionPlan } from 'src/generated/prisma/enums';

export class CreateCompanyDto {
    @IsString()
    tradeName: string;

    @IsString()
    legalName: string;

    @IsDecimal()
    balance: Decimal;

    @IsString()
    taxId: string;

    @IsEmail()
    supportEmail: string;

    @IsString()
    mainPhone: string;

    @IsEnum(SubscriptionPlan)
    @IsOptional()
    subscriptionPlan?: SubscriptionPlan;

    @IsUUID()
    userId: string;
}
