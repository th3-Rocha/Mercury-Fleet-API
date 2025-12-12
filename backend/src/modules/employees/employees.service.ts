import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { EmployeesRepository } from './employees.repository';
import { CompanyRepository } from '../company/company.repository';

@Injectable()
export class EmployeesService {
  constructor(
    private readonly employeesRepository: EmployeesRepository,
    private readonly companyRepository: CompanyRepository,
  ) { }

  async createForUserCompany(userId: string, createEmployeeDto: CreateEmployeeDto) {
    const company = await this.companyRepository.findByUserId(userId);

    if (!company) {
      throw new NotFoundException('Company not found for this user');
    }

    const existingCnh = await this.employeesRepository.findByCnh(createEmployeeDto.cnh);
    if (existingCnh) {
      throw new BadRequestException('An employee with this CNH already exists');
    }

    const existingCpf = await this.employeesRepository.findByCpf(createEmployeeDto.cpf);
    if (existingCpf) {
      throw new BadRequestException('An employee with this CPF already exists');
    }

    return this.employeesRepository.createForCompany(company.id, createEmployeeDto);
  }

  async findAllForUserCompany(userId: string) {
    const company = await this.companyRepository.findByUserId(userId);

    if (!company) {
      throw new NotFoundException('Company not found for this user');
    }

    return this.employeesRepository.findByCompanyId(company.id);
  }

  async findOneForUserCompany(userId: string, employeeId: string) {
    const company = await this.companyRepository.findByUserId(userId);

    if (!company) {
      throw new NotFoundException('Company not found for this user');
    }

    const employee = await this.employeesRepository.findById(employeeId);

    if (!employee || employee.companyId !== company.id) {
      throw new NotFoundException('Employee not found for this company');
    }

    return employee;
  }

  async updateForUserCompany(
    userId: string,
    employeeId: string,
    updateEmployeeDto: UpdateEmployeeDto,
  ) {
    const company = await this.companyRepository.findByUserId(userId);

    if (!company) {
      throw new NotFoundException('Company not found for this user');
    }

    const employee = await this.employeesRepository.findById(employeeId);

    if (!employee || employee.companyId !== company.id) {
      throw new NotFoundException('Employee not found for this company');
    }

    if (updateEmployeeDto.cnh && updateEmployeeDto.cnh !== employee.cnh) {
      const existingCnh = await this.employeesRepository.findByCnh(updateEmployeeDto.cnh);
      if (existingCnh) {
        throw new BadRequestException('An employee with this CNH already exists');
      }
    }

    if (updateEmployeeDto.cpf && updateEmployeeDto.cpf !== employee.cpf) {
      const existingCpf = await this.employeesRepository.findByCpf(updateEmployeeDto.cpf);
      if (existingCpf) {
        throw new BadRequestException('An employee with this CPF already exists');
      }
    }

    return this.employeesRepository.update(employeeId, updateEmployeeDto);
  }

  async deleteForUserCompany(userId: string, employeeId: string) {
    const company = await this.companyRepository.findByUserId(userId);

    if (!company) {
      throw new NotFoundException('Company not found for this user');
    }

    const employee = await this.employeesRepository.findById(employeeId);

    if (!employee || employee.companyId !== company.id) {
      throw new NotFoundException('Employee not found for this company');
    }

    await this.employeesRepository.delete(employeeId);
    return { message: 'Employee deleted successfully' };
  }
}
