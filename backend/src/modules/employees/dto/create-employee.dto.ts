import { IsString, IsDateString, IsNumber, IsPositive, MaxLength } from 'class-validator';

export class CreateEmployeeDto {
    @IsString()
    @MaxLength(80, { message: 'Name must not exceed 80 characters' })
    name: string;

    @IsString()
    @MaxLength(20, { message: 'CNH must not exceed 20 characters' })
    cnh: string;

    @IsDateString()
    cnhExpiration: string;

    @IsString()
    @MaxLength(14, { message: 'CPF must not exceed 14 characters' })
    cpf: string;

    @IsNumber()
    @IsPositive()
    salary: number;
}
