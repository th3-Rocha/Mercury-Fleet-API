import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsDateString, MaxLength } from 'class-validator';
import { BalanceEventType } from '@prisma/client';

export class CreateBalanceEventDto {
    @ApiProperty({ example: 150.75 })
    @IsNumber()
    amount: number;

    @ApiProperty({ example: 'Fuel purchase for TRK-1234' })
    @IsNotEmpty()
    @MaxLength(500, { message: 'Description must not exceed 500 characters' })
    description: string;

    @ApiProperty({ enum: BalanceEventType, example: BalanceEventType.FUEL })
    @IsEnum(BalanceEventType)
    type: BalanceEventType;

    @ApiProperty({ required: false, example: '2025-12-16T14:30:00Z' })
    @IsOptional()
    @IsDateString()
    occurredAt?: string;
}
