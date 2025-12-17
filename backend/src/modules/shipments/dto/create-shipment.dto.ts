import { IsNumber, IsPositive, IsString, IsEnum, IsOptional, IsDate, MaxLength } from "class-validator";
import { Type } from "class-transformer";
import { CargoType } from "@prisma/client";
import { ShipmentStatus } from "src/generated/prisma/enums";

export class CreateShipmentDto {
    @IsString()
    @MaxLength(200, { message: 'Delivery address must not exceed 200 characters' })
    deliveryAddress: string;

    @IsString()
    @MaxLength(200, { message: 'Start address must not exceed 200 characters' })
    startAddress: string;

    @IsNumber()
    @IsPositive()
    weight: number;


    @IsString()
    status: ShipmentStatus;


    @IsNumber()
    currentLng: number;

    @IsNumber()
    currentLat: number;

    @IsNumber()
    deliveryLng: number;

    @IsNumber()
    deliveryLat: number;

    @IsNumber()
    startLng: number;

    @IsNumber()
    startLat: number;

    @Type(() => Date)
    @IsDate()
    startDate: Date;

    @IsOptional()
    @Type(() => Date)
    @IsDate()
    endDate?: Date;

    @IsNumber()
    @IsOptional()
    estimatedProfit?: number;

    @IsNumber()
    @IsOptional()
    gasSpent?: number;

    @IsEnum(CargoType)
    cargoType: CargoType;

    @IsString()
    @MaxLength(36, { message: 'Employee ID must not exceed 36 characters' })
    employeeId: string;

    @IsString()
    @MaxLength(36, { message: 'Truck ID must not exceed 36 characters' })
    truckId: string;

    @IsString()
    @MaxLength(36, { message: 'Recipient ID must not exceed 36 characters' })
    recipientId: string;
}