import { Type } from "class-transformer";
import { IsNumber, IsString, IsDate, MaxLength } from "class-validator";
export class CreateShipmentEventDto {
    @IsString()
    @MaxLength(500, { message: 'Description must not exceed 500 characters' })
    description: string;

    @IsNumber()
    longitude: number;

    @IsNumber()
    latitude: number;


    @Type(() => Date)
    @IsDate()
    recordedAt: Date;


    @IsString()
    @MaxLength(36, { message: 'Shipment ID must not exceed 36 characters' })
    shipmentId: string;
}
