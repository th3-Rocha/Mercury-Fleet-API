import { Type } from "class-transformer";
import { IsNumber, IsString, IsDate } from "class-validator";
export class CreateShipmentEventDto {
    @IsString()
    description: string;

    @IsNumber()
    longitude: number;

    @IsNumber()
    latitude: number;


    @Type(() => Date)
    @IsDate()
    recordedAt: Date;


    @IsString()
    shipmentId: string;
}
