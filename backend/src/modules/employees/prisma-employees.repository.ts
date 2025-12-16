import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Employee, Prisma } from '@prisma/client';
import { EmployeesRepository } from './employees.repository';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Injectable()
export class PrismaEmployeesRepository implements EmployeesRepository {
    constructor(private prisma: PrismaService) { }

    async createForCompany(companyId: string, data: CreateEmployeeDto): Promise<Employee> {
        return this.prisma.employee.create({
            data: {
                companyId,
                name: data.name,
                cnh: data.cnh,
                cnhExpiration: new Date(data.cnhExpiration),
                cpf: data.cpf,
                salary: new Prisma.Decimal(data.salary),
            },
        });
    }

    async findById(id: string): Promise<Employee | null> {
        return this.prisma.employee.findUnique({ where: { id } });
    }

    async findByCnh(cnh: string): Promise<Employee | null> {
        return this.prisma.employee.findUnique({ where: { cnh } });
    }

    async findByCpf(cpf: string): Promise<Employee | null> {
        return this.prisma.employee.findUnique({ where: { cpf } });
    }

    async findByCompanyId(companyId: string): Promise<Employee[]> {
        return this.prisma.employee.findMany({ where: { companyId } });
    }

    async update(id: string, data: UpdateEmployeeDto): Promise<Employee> {
        const updateData: any = { ...data };
        if (data.cnhExpiration) {
            updateData.cnhExpiration = new Date(data.cnhExpiration);
        }
        return this.prisma.employee.update({
            where: { id },
            data: updateData,
        });
    }

    async delete(id: string): Promise<Employee> {
        return this.prisma.employee.delete({ where: { id } });
    }
}
