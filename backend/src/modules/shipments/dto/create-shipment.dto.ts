import { IsNumber, IsPositive, IsString, IsEnum, IsOptional, IsDate } from "class-validator";
import { Type } from "class-transformer";
import { CargoType } from "@prisma/client";
import { ShipmentStatus } from "src/generated/prisma/enums";

export class CreateShipmentDto {
    @IsString()
    deliveryAddress: string;

    @IsString()
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
    employeeId: string;

    @IsString()
    truckId: string;

    @IsString()
    recipientId: string;
}