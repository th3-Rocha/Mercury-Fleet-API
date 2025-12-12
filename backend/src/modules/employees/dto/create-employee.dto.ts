import { IsString, IsDateString, IsNumber, IsPositive } from 'class-validator';

export class CreateEmployeeDto {
    @IsString()
    name: string;

    @IsString()
    cnh: string;

    @IsDateString()
    cnhExpiration: string;

    @IsString()
    cpf: string;

    @IsNumber()
    @IsPositive()
    salary: number;
}
