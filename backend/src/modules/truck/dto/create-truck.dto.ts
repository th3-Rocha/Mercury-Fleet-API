import { IsNumber, IsPositive, IsString, Length } from 'class-validator';

export class CreateTruckDto {
    @IsString()
    @Length(6, 10, { message: 'License plate must be between 6 and 10 characters' })
    licensePlate: string;

    @IsNumber()
    @IsPositive()
    maxPayload: number;
}
