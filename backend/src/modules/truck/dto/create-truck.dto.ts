import { IsNumber, IsPositive, IsString, Length } from 'class-validator';

export class CreateTruckDto {
    @IsString()
    @Length(6, 10)
    licensePlate: string;

    @IsNumber()
    @IsPositive()
    maxPayload: number;
}
