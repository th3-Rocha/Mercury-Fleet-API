import { Employee } from '@prisma/client';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

export abstract class EmployeesRepository {
    abstract createForCompany(companyId: string, data: CreateEmployeeDto): Promise<Employee>;
    abstract findById(id: string): Promise<Employee | null>;
    abstract findByCnh(cnh: string): Promise<Employee | null>;
    abstract findByCpf(cpf: string): Promise<Employee | null>;
    abstract findByCompanyId(companyId: string): Promise<Employee[]>;
    abstract update(id: string, data: UpdateEmployeeDto): Promise<Employee>;
    abstract delete(id: string): Promise<Employee>;
}
